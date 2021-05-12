function reverseDigitSwitch(digit) {
  switch (digit) {
    case "zero":
      digit = 0;
      break;
    case "one":
      digit = 1;
      break;
    case "two":
      digit = 2;
      break;
    case "three":
      digit = 3;
      break;
    default:
      break;
  }
  return digit;
}

$(document).ready(function () {
  $("button#export-data").click(function () {
    document.querySelectorAll('*').forEach(function (node) {
      if (node.classList.contains("blue-style") || node.classList.contains("bomb-style") || node.classList.contains("red-style")) {
        const coords = node.id.split("-");
        row = reverseDigitSwitch(coords[0]);
        col = reverseDigitSwitch(coords[1]);
        alert(`${row}, ${col}`);
      }
    });
  });
});