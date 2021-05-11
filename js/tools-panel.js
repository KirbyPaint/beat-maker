$(document).ready(function () {
  // Note colors
  $("button#red-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 0;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      switch (row) {
        case 0:
          row = "zero";
          break;
        case 1:
          row = "one";
          break;
        case 2:
          row = "two";
          break;
        default:
          break;
      }
      switch (col) {
        case 0:
          col = "zero";
          break;
        case 1:
          col = "one";
          break;
        case 2:
          col = "two";
          break;
        case 3:
          col = "three";
          break;
        default:
          break;
      }
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
      // Need to reassign the div for the selected element
      switch (row) {
        case 0:
          row = "zero";
          break;
        case 1:
          row = "one";
          break;
        case 2:
          row = "two";
          break;
        default:
          break;
      }
      switch (col) {
        case 0:
          col = "zero";
          break;
        case 1:
          col = "one";
          break;
        case 2:
          col = "two";
          break;
        case 3:
          col = "three";
          break;
        default:
          break;
      }
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