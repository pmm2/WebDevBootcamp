function printReverse(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
  }
}
function isUniform(array) {
  const check = array[0];
  let verify = true;
  for (let index = 1; index < array.length; index++) {
    if (array[index] !== check) {
      verify = false;
      break;
    }
  }
  console.log(verify);
}

function sumArray(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}

function maxArray(array) {
  let max = 0;
  for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }
  return max;
}
