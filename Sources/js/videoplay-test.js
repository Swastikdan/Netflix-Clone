function labnolIframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute("data-id", videoId);
    var thumbNode = document.createElement("img");
    thumbNode.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", videoId);
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);
let videodata;

fetch("/src/json/video-id.json")
  .then((response) => response.json())
  .then((jsonData) => {
    videodata = jsonData;
    for (let i = 1; i <= 38; i++) {
      const videosId = `video-${i}`;
      const videoData = generateVideoData(videosId);
      console.log(videoData);
    }
  });

function generateVideoData(videoplayId) {
  const videoData = videodata[videoplayId];

  const videoContainer = document.getElementById(
    `popup-${videoplayId.split("-")[1]}`
  );

  videoContainer.innerHTML = `

  <span class="close" onclick="closeSlide(${videoData.vno})">&times;</span>
  <lite-youtube class="popup-content" videoid="${videoData.videoId}" style="background-image: url('https://i.ytimg.com/vi/${videoData.videoId}/maxresdefault.jpg');"></lite-youtube>
`;
}
const numPopups = 38;
let displayVideo = '';
for (let i = 1; i <= numPopups; i++) {
  displayVideo += `<div id="popup-${i}" class="popup"></div>`;
}
document.getElementById("video-dispaly").innerHTML = displayVideo;
