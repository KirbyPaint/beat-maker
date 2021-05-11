$(document).ready(function () {
  $("button#export-data").click(function () {
    document.querySelectorAll('*').forEach(function (node) {
      if (node.className) {
        alert(node.className);
      }
    });
  });
});