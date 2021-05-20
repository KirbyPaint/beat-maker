function downloadInfo(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

$(document).ready(function () {
  // info.dat 
  $("button#prepare-info-dat").click(function () {
    $("#_version_data").text($("#_version").val());
    $("#_songName_data").text($("#_songName").val());
    $("#_songSubName_data").text($("#_songSubName").val());
    $("#_songAuthorName_data").text($("#_songAuthorName").val());
    $("#_levelAuthorName_data").text($("#_levelAuthorName").val());
    $("#_beatsPerMinute_data").text($("#_beatsPerMinute").val());
    $("#_songTimeOffset_data").text($("#_songTimeOffset").val());
    $("#_shuffle_data").text($("#_shuffle").val());
    $("#_shufflePeriod_data").text($("#_shufflePeriod").val());
    $("#_previewStartTime_data").text($("#_previewStartTime").val());
    $("#_previewDuration_data").text($("#_previewDuration").val());
    $("#_songFilename_data").text($("#_songFilename").val());
    $("#_coverImageFilename_data").text($("#_coverImageFilename").val());
    $("#_environmentName_data").text($("#_environmentName").val());
    $("#_allDirectionsEnvironmentName_data").text($("#_allDirectionsEnvironmentName").val());
    $("#_difficultyBeatmapSetsName_data").text($("#_difficultyBeatmapSets :selected").text());
    $("#_difficultyBeatmapSets_data").text($("#_difficultyBeatmapSets").val());
    $("#_difficultyBeatmapSetsFileName_data").text($("#_difficultyBeatmapSets :selected").text());
    $("#_noteJumpMovementSpeed_data").text($("#_noteJumpMovementSpeed").val());
    $("#_noteJumpStartBeatOffset_data").text($("#_noteJumpStartBeatOffset").val());
  });

  $("button#download-note-data").click(function () {
    const infoData = document.getElementById("info-data-output").innerText;
    downloadInfo("info.dat", infoData);
  });

  $("button#download-chart-data").click(function () {
    // const noteData = document.getElementById("note-data-output").innerText;
    const noteData = document.getElementById("chart-data-output").innerText;
    const difficultyFileName = $("#_difficultyBeatmapSets :selected").text();
    downloadInfo(`${difficultyFileName}Standard.dat`, noteData);
  });
});