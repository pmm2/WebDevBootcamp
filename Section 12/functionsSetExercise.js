console.log(isEven(8));
function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function factorial(x) {
  let assist = 1;
  if (x == 0) {
    return assist;
  } else {
    for (let i = 1; i <= x; i++) {
      assist = assist * i;
    }
  }

  return assist;
}

function kebabToSnake(x) {
  var y = x.replace(/-/g, "_");
  return y;
}
