function highlightSelected() {
  const zeroZero = document.getElementById("zero-zero");
  const zeroOne = document.getElementById("zero-one");
  const zeroTwo = document.getElementById("zero-two");
  const zeroThree = document.getElementById("zero-three");
  const oneZero = document.getElementById("one-zero");
  const oneOne = document.getElementById("one-one");
  const oneTwo = document.getElementById("one-two");
  const oneThree = document.getElementById("one-three");
  const twoZero = document.getElementById("two-zero");
  const twoOne = document.getElementById("two-one");
  const twoTwo = document.getElementById("two-two");
  const twoThree = document.getElementById("two-three");
  zeroZero.classList.remove("select-style");
  zeroOne.classList.remove("select-style");
  zeroTwo.classList.remove("select-style");
  zeroThree.classList.remove("select-style");
  oneZero.classList.remove("select-style");
  oneOne.classList.remove("select-style");
  oneTwo.classList.remove("select-style");
  oneThree.classList.remove("select-style");
  twoZero.classList.remove("select-style");
  twoOne.classList.remove("select-style");
  twoTwo.classList.remove("select-style");
  twoThree.classList.remove("select-style");
}

$(document).ready(function () {
  $("button#zero-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 0;
    let element = document.getElementById("zero-zero");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#zero-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 1;
    let element = document.getElementById("zero-one");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#zero-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 2;
    let element = document.getElementById("zero-two");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#zero-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 0;
    document.getElementById("debug-note-col").innerHTML = 3;
    let element = document.getElementById("zero-three");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#one-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 0;
    let element = document.getElementById("one-zero");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#one-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 1;
    let element = document.getElementById("one-one");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#one-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 2;
    let element = document.getElementById("one-two");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#one-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 1;
    document.getElementById("debug-note-col").innerHTML = 3;
    let element = document.getElementById("one-three");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#two-zero").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 0;
    let element = document.getElementById("two-zero");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#two-one").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 1;
    let element = document.getElementById("two-one");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#two-two").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 2;
    let element = document.getElementById("two-two");
    highlightSelected();
    element.classList.add("select-style");
  });

  $("button#two-three").click(function () {
    document.getElementById("debug-note-row").innerHTML = 2;
    document.getElementById("debug-note-col").innerHTML = 3;
    let element = document.getElementById("two-three");
    highlightSelected();
    element.classList.add("select-style");
  });
});