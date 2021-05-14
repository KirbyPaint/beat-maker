$(document).ready(function () {
  // info.dat 
  $("button#export-data-button").click(function () {
    const versionData = $("#_version").val();
    $("#_version_data").append(versionData);
    alert(versionData);
  });
});