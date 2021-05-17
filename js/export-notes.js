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
  $("button#save-beat-as-notes").click(function () {
    document.querySelectorAll('*').forEach(function (node) {
      if (node.classList.contains("blue-style") || node.classList.contains("bomb-style") || node.classList.contains("red-style")) {
        beat = $("#debug-note-beat").val();
        color = $("#debug-note-color").text();
        angle = $("#debug-note-row").text();
        row = $("#debug-note-row").text();
        col = $("#debug-note-col").text();
        // alert(`{"_time": ${beat}, "_lineIndex": ${col}, "_lineLayer": ${row}, "_type": ${color}, "_cutDirection": ${angle}}`);
        if (beat && color && angle && row && col) {
          $(".note-data-output").append(`{"_time": ${beat}, "_lineIndex": ${col}, "_lineLayer": ${row}, "_type": ${color}, "_cutDirection": ${angle}}<br>`);
        }
      }
    });
  });
});