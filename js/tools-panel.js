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
  $("#note-beat").click(function () {
    $("#debug-note-beat").text($("#note-beat").val());
  });

  // Note colors
  $("button#red-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 0;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      row = digitSwitch(row);
      col = digitSwitch(col);
      var element = document.getElementById(`${row}-${col}`);
      element.classList.remove("black-style");
      element.classList.remove("blue-style");
      element.classList.remove("bomb-style");
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
      element.classList.remove("bomb-style");
      element.classList.remove("red-style");
      element.classList.add("blue-style");
    }
  });

  $("button#bomb-block").click(function () {
    document.getElementById("debug-note-color").innerHTML = 3;

    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      row = digitSwitch(row);
      col = digitSwitch(col);
      var element = document.getElementById(`${row}-${col}`);
      element.innerHTML = "";
      element.classList.remove("black-style");
      element.classList.remove("blue-style");
      element.classList.remove("red-style");
      element.classList.add("bomb-style");
    }
  });

  $("button#save-block").click(function () {
    const noteData = $("note-data-output").val();
    const difficultyFileName = $("#_difficultyBeatmapSets :selected").text();
    downloadInfo(`${difficultyFileName}Standard.txt`, noteData);
  });

  $("button#save-beat-as-notes").click(function () {
    document.querySelectorAll('*').forEach(function (node) {
      if (node.classList.contains("blue-style") || node.classList.contains("bomb-style") || node.classList.contains("red-style")) {
        beat = $("#debug-note-beat").text();
        color = $("#debug-note-color").text();
        angle = $("#debug-note-angle").text();
        row = $("#debug-note-row").text();
        col = $("#debug-note-col").text();
        // console.log(`{"_time": ${beat}, "_lineIndex": ${col}, "_lineLayer": ${row}, "_type": ${color}, "_cutDirection": ${angle}}<br>`);
        if (beat && color && angle && row && col) {
          $("#note-data-output").append(`{"_time": ${beat}, "_lineIndex": ${col}, "_lineLayer": ${row}, "_type": ${color}, "_cutDirection": ${angle}}<br>`);
        }
      }
    });
  });

  $("button#clear-block").click(function () {
    let row = parseInt(document.getElementById("debug-note-row").textContent);
    let col = parseInt(document.getElementById("debug-note-col").textContent);

    if (row >= 0 && col >= 0) {
      row = digitSwitch(row);
      col = digitSwitch(col);
      var element = document.getElementById(`${row}-${col}`);
      element.innerHTML = "";
      element.classList.remove("blue-style");
      element.classList.remove("red-style");
      element.classList.remove("bomb-style");
      element.classList.remove("select-style");
      element.classList.add("black-style");
    }

    $("#debug-note-beat").text("");
    $("#debug-note-color").text("");
    $("#debug-note-angle").text("");
    $("#debug-note-row").text("");
    $("#debug-note-col").text("");
  });
});