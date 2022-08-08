function lonelyinteger(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (count === 1) {
      return a[i - 1];
    }
    count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        count++;
        continue;
      }
    }
  }
  return a[a.length - 1];

  /*   let toRemove = a.filter((item, index) => a.indexOf(item) !== index);
  return a.filter((el) => !toRemove.includes(el))[0];
} */
}

let startTime, endTime;
//Get the start time
startTime = performance.now();

//Call the time-consuming function
console.log(lonelyinteger([1, 2, 3, 3, 5, 2, 1]));

//Get the end time
endTime = performance.now();

//The difference is how many milliseconds it took to call myFunction()
console.debug("Elapsed time:", endTime - startTime);
