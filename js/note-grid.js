$(document).ready(function () {
  // Note angles
  $("button#zero-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 0;
  });

  $("button#zero-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 1;
  });

  $("button#zero-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 2;
  });

  $("button#zero-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 3;
  });

  $("button#one-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 0;
  });

  $("button#one-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 1;
  });

  $("button#one-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 2;
  });

  $("button#one-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 3;
  });

  $("button#two-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 0;
  });

  $("button#two-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 1;
  });

  $("button#two-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 2;
  });

  $("button#two-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 3;
  });
});