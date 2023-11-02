const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Import the MySQL library
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'root',
  database: 'practice'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

const jwt = require('jsonwebtoken');

// Secret key for JWT
const secretKey = 'my-32-character-ultra-secure-and-ultra-long-secret'; // Replace with a strong, secret key

// Middleware for verifying JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    // You can access the user's information from decoded
    req.user = decoded;

    next();
  });
}
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  
    res.status(201).json({
      status: 'success',
      token:token,
      data: {
        newUser,
      },
    });
  });

// Authentication middleware
function authenticate(req, res, next) {
  // Check authentication here (using JWT)
  // If not authenticated, return a 401 Unauthorized response
  verifyToken(req, res, next);
  next();
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // In a real application, you should validate the username and password
    // and check them against the database before issuing a token
  
    if ((username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')) {
      const user = {
        username: username,
        // You can add more user information here
      }
  
      // Create a token
      const token = jwt.sign(user, secretKey, {
        expiresIn: '1h' // Token expires in 1 hour
      });
  
      res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token: token
      });
    } else {
      res.status(401).json({ success: false, message: 'Authentication failed' });
    }
  });
  

// User management routes
app.get('/admin/users', authenticate, (req, res) => {
  // Retrieve users from the database and return as JSON
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/admin/users', authenticate, (req, res) => {
  // Create a new user in the database
  const newUser = req.body;
  connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error creating a user:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
});

// Add similar database operations for other user-related routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
