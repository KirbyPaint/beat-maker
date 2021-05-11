$(document).ready(function () {
  // Note angles
  $("button#dir-4").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 4;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 4;
    }
  });

  $("button#dir-0").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 0;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 0;
    }
  });

  $("button#dir-5").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 5;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 5;
    }
  });

  $("button#dir-2").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 2;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 2;
    }
  });

  $("button#dir-8").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 8;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 8;
    }
  });

  $("button#dir-3").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 3;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 3;
    }
  });

  $("button#dir-6").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 6;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 6;
    }
  });

  $("button#dir-1").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 1;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 1;
    }
  });

  $("button#dir-7").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 7;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      // Need to reassign the div for the selected element
      row = digitSwitch(row);
      col = digitSwitch(col);
      document.getElementById(`${row}-${col}`).innerHTML = 7;
    }
  });
});