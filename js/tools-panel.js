$(document).ready(function () {
  // Note colors
  $("button#red-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 0;
  });

  $("button#blue-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 1;
  });

  $("button#bomb-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 3;
  });

  // Need to figure out the exact specs for this...
  $("button#wall-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = "wall";
  });
});