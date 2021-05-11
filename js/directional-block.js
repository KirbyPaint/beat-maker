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
      document.getElementById(`${row}-${col}`).innerHTML = "🡔";
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
      document.getElementById(`${row}-${col}`).innerHTML = "↑";
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
      document.getElementById(`${row}-${col}`).innerHTML = "🡕";
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
      document.getElementById(`${row}-${col}`).innerHTML = "←";
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
      document.getElementById(`${row}-${col}`).innerHTML = "•";
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
      document.getElementById(`${row}-${col}`).innerHTML = "→";
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
      document.getElementById(`${row}-${col}`).innerHTML = "🡗";
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
      document.getElementById(`${row}-${col}`).innerHTML = "↓";
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
      document.getElementById(`${row}-${col}`).innerHTML = "🡖";
    }
  });
});