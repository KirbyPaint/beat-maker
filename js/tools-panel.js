function digitSwitch(digit) {
  switch (digit) {
    case 0:
      digit = "zero";
      break;
    case 1:
      digit = "one";
      break;
    case 2:
      digit = "two";
      break;
    case 3:
      digit = "three";
      break;
    default:
      break;
  }
  return digit;
}

$(document).ready(function () {
  // Note colors
  $("button#red-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 0;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      var element = document.getElementById(`${row}-${col}`);
      element.classList.remove("black-style");
      element.classList.remove("blue-style");
      element.classList.add("red-style");
    }
  });

  $("button#blue-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 1;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      row = digitSwitch(row);
      col = digitSwitch(col);
      var element = document.getElementById(`${row}-${col}`);
      element.classList.remove("black-style");
      element.classList.remove("red-style");
      element.classList.add("blue-style");
    }
  });

  $("button#bomb-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 3;
  });

  // Need to figure out the exact specs for this one...
  $("button#wall-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = "wall";
  });
});