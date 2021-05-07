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

  // Note angles
  $("button#dir-4").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 4;
  });

  $("button#dir-0").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 0;
  });

  $("button#dir-5").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 5;
  });

  $("button#dir-2").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 2;
  });

  $("button#dir-8").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 8;
  });

  $("button#dir-3").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 3;
  });

  $("button#dir-6").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 6;
  });

  $("button#dir-1").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 1;
  });

  $("button#dir-7").click(function () {
    document.getElementById("debug-note-angle").innerHTML = 7;
  });
});