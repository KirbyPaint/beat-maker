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

function idGetRow(id) {
  const coords = id.split("-");
  const row = coords[0];
  // const col = coords[1];
  return row;
}

function idGetCol(id) {
  const coords = id.split("-");
  // const row = coords[0];
  const col = coords[1];
  return col;
}

function getColor(node) {
  if (node.classList.contains("blue-style")) {
    return 1;
  }
  else if (node.classList.contains("red-style")) {
    return 0;
  }
}

function getAngle(direction) {
  switch (direction) {
    case "🡔":
      direction = 4;
      break;
    case "↑":
      direction = 0;
      break;
    case "🡕":
      direction = 5;
      break;
    case "←":
      direction = 2;
      break;
    case "•":
      direction = 8;
      break;
    case "→":
      direction = 3;
      break;
    case "🡗":
      direction = 6;
      break;
    case "↓":
      direction = 1;
      break;
    case "🡖":
      direction = 7;
      break;
    default:
      break;
  }
  return direction;
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
    document.querySelectorAll('*').forEach(function (node) {
      if (node.classList.contains("blue-style") || node.classList.contains("red-style")) {
        beat = $("#debug-note-beat").text();

        let thisRow = reverseDigitSwitch(idGetRow(node.id));
        let thisCol = reverseDigitSwitch(idGetCol(node.id));
        let thisText = document.getElementById(node.id).textContent;
        let thisColor = getColor(node);
        let thisAngle = getAngle(thisText);

        $("#note-data-output").append(`{"_time": ${beat}, "_lineIndex": ${thisCol}, "_lineLayer": ${thisRow}, "_type": ${thisColor}, "_cutDirection": ${thisAngle}}<br>`);
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

    $("#debug-note-beat").text(parseInt($("#beat-number").text()));
    $("#debug-note-color").text("");
    $("#debug-note-angle").text("");
    $("#debug-note-row").text("");
    $("#debug-note-col").text("");
  });
});