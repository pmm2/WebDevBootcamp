const age = prompt("How old are u?");
if (age < 18) {
  alert("You cannot enter");
  if (age < 0) {
    alert("You cant have a negative age");
  }
} else if (age <= 21) {
  alert("You can enter but you cannot drink");
  if ((age = 21)) {
    alert("Happy 21st birthday!");
  }
} else {
  alert("You can enter and drink");
}
if (age % 2 !== 0) {
  alert("your age is odd!");
}

if (Math.sqrt(age) % 1 === 0) {
  alert("Perfect Square!");
}
