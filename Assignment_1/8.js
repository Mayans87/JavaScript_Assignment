// Write a program find the total number of minutes between two given times
// (formatted with a colon and am or pm).

function calculateMinutesBetweenTimes(time1, time2) {
  try {
    // Split the time strings into hours, minutes, and AM/PM period
    const [hours1, minutes1, period1] = time1.split(/:|(?=[APap][Mm])/);
    const [hours2, minutes2, period2] = time2.split(/:|(?=[APap][Mm])/);

    // Check if the times are in AM or PM
    const isAM1 = period1.toLowerCase() === 'am';
    const isAM2 = period2.toLowerCase() === 'am';

    // Calculate the total minutes for each time
    let totalMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);
    let totalMinutes2 = parseInt(hours2) * 60 + parseInt(minutes2);

    // Adjust the total minutes if the time is in PM and not 12:xx PM
    if (!isAM1 && hours1 !== '12') {
      totalMinutes1 += 12 * 60;
    }

    if (!isAM2 && hours2 !== '12') {
      totalMinutes2 += 12 * 60;
    }

    // Calculate the minutes difference and return it
    const minutesDifference = Math.abs(totalMinutes2 - totalMinutes1);
    return minutesDifference;
  } catch (error) {
    console.error("An error occurred while calculating the minutes between times:", error);
    return null; // Return null as a fallback value to indicate an error
  }
}

const time1 = '12:01AM';
const time2 = '12:00PM';

const minutesBetween = calculateMinutesBetweenTimes(time1, time2);

if (minutesBetween !== null) {
  console.log(`Minutes between ${time1} to ${time2}: ${minutesBetween}`);
} else {
  console.log("Error occurred. Unable to calculate minutes.");
}
