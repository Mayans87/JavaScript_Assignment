//Write a program that defines a shape class with a constructor that gives
// value to width and height. Then define two sub-classes triangle and
// rectangle, that calculate the area of the shape area (). In the main, define
// two variables a triangle and a rectangle and then call the area() function in
// this two variables.

class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      console.log('Area method should be overridden in subclasses.');
      return 0;
    }
  }
  
  class Triangle extends Shape {
    area() {
      return 0.5 * this.width * this.height;
    }
  }
  
  class Rectangle extends Shape {
    area() {
      return this.width * this.height;
    }
  }
  
  const triangle = new Triangle(5, 4);
  const rectangle = new Rectangle(6, 8);
  
  console.log('Area of the triangle:', triangle.area());
  console.log('Area of the rectangle:', rectangle.area());
  