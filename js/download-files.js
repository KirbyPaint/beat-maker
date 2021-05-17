function downloadInfo(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
$(document).ready(function () {
  $("button#download-note-data").click(function () {
    const infoData = document.getElementById("info-data-output").innerText;
    downloadInfo("info.txt", infoData);
  });

  $("button#download-chart-data").click(function () {
    const noteData = document.getElementById("note-data-output").innerText;
    const difficultyFileName = $("#_difficultyBeatmapSets :selected").text();
    downloadInfo(`${difficultyFileName}Standard.txt`, noteData);
  });
});