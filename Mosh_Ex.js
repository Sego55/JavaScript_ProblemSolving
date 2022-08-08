const movie = {
  title: "How to bo2loz",
  relasedate: 2019,
  rating: 100,
  director: "Bo2loz",
};
///////////////////////////////////////////
function showPorp(obj) {
  for (let index in obj) {
    console.log(index, ":", obj[index]);
  }
}
///////////////////////////////////////////
function sum(limit) {
  let Multi = [];
  let sumi = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumi += i;
    }
  }
  console.log(sumi);
}
///////////////////////////////////////////
function showStars(num) {
  for (let i = 0; i < num; i++) {
    console.log("*".repeat(i + 1));
  }
}
///////////////////////////////////////////
function showprime(limit) {
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let factor = 2; factor < num; factor++) {
      if (num % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(num);
  }
}
///////////////////////////////////////////
