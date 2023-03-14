const stepSpinner = (array, time) => {
  let timeCounter = 0;
  for (const index in array) {
    timeCounter =+ time;
    // console.log(timeCounter);
    setTimeout(() => {
      process.stdout.write(array[index]);
    }, timeCounter * index);
  }
};

const array1 = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];
stepSpinner(array1, 120);

const interval = setInterval(() => {
  stepSpinner(array1, 120);
}, 480);

setTimeout(() => {
  clearInterval(interval);
}, 3000);