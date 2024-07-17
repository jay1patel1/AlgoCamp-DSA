function timeConversion(s) {
  // Write your code here
  let givenTime = s;
  let hours = givenTime.slice(0, 2);
  let minutes = givenTime.slice(3, 5);
  let second = givenTime.slice(6, 8);
  let half = givenTime.slice(8, 10);

  if (half === "AM") {
    if (hours === "12") {
      return `00:${minutes}:${second}`;
    } else {
      return `${hours}:${minutes}:${second}`;
    }
  } else {
      if (hours === "12") {
          return `${hours}:${minutes}:${second}`;
      } else {
          let numberHour = parseInt(hours) + 12;
          return `${numberHour}:${minutes}:${second}`;
      }

  }
}

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("01:01:00PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("07:05:45PM"));
