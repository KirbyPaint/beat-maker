$(document).ready(function () {
  $("button#decrease-beat").click(function () {
    const currentBeat = parseInt(document.getElementById("beat-number").innerHTML);
    document.getElementById("beat-number").innerHTML = (currentBeat - 1);
    document.getElementById("debug-note-beat").innerHTML = parseInt(document.getElementById("beat-number").innerHTML);
  });

  $("button#increase-beat").click(function () {
    const currentBeat = parseInt(document.getElementById("beat-number").innerHTML);
    document.getElementById("beat-number").innerHTML = (currentBeat + 1);
    document.getElementById("debug-note-beat").innerHTML = parseInt(document.getElementById("beat-number").innerHTML);
  });
});