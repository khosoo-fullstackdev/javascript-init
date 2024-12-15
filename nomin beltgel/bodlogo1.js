function highLow(km, m) {
  let a = km * (5 / 18);
  if (a > m) {
    return "km/h";
  } else return "m/s";
}
result = highLow(50, 6);
console.log(result);
