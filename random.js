functuon getRandomNumber (lower, upper)
 {

math.floor(Math.random() * (upper -lower + 1)) + lower;
return random;

}

console.log (getRandomNumber (1,6));
console.log (getRandomNumber (1, 100));
console.log (getRandomNumber (100, 20000));
console.log (getRandomNumber (50, 100,));
