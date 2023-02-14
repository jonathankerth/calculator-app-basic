function add(firstBox, secondBox) {
  return firstBox + secondBox;
}
function subtract(firstBox, secondBox) {
  return firstBox - secondBox;
}
function multiply(firstBox, secondBox) {
  return firstBox * secondBox;
}
function divide(firstBox, secondBox) {
  if (secondBox === 0) {
    return "Not Allowed!";
  }
  else {
    let result = firstBox / secondBox
    return result;
  }
}