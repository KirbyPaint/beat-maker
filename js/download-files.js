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
    const data = document.getElementById("info-data-output").innerText;
    downloadInfo("info.txt", data);
  });
});