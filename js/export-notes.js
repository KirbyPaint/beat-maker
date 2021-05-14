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
        beat = $("#debug-note-beat").val();
        // color = $("#debug-note-color").val();
        color = parseInt(document.getElementById("debug-note-color").value);
        angle = $("#debug-note-row").val();
        row = reverseDigitSwitch(coords[0]);
        col = reverseDigitSwitch(coords[1]);
        // alert(`${row}, ${col}`);
        // if (beat && color && angle && row && col) {
          alert(`${beat}, ${color}, ${angle}, ${row}, ${col}`);
          $("#_time_data").text(beat);
          $("#_lineIndex_data").text(color);
          $("#_lineLayer_data").text(angle);
          $("#_type_data").text(row);
          $("#_cutDirection_data").text(col);
        // }
      }
    });
  });
});