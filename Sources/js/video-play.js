
// let videodata;

// fetch('/src/json/video-id.json')
//   .then(response => response.json())
//   .then(jsonData => {
//     videodata = jsonData;
 
//     for (let i = 1; i <= 38; i++) {
//         const videoIds = `video-${i}`;
//         const videoData = generateVideoData(videoIds);
//         console.log (videoData );
//       }
      
  
//   });

// function generateVideoData(videoId) {
//   const videoData = videodata[videoId];
//   const videoContainer = document.getElementById(`popup-${videoId.split("-")[1]}`);
//  videoContainer.innerHTML = `
//  <div class="popup-content">
//      <span class="close" onclick="closeSlide(${videoData.vno})">&times;</span>
//      <p>This is popup 1</p>
//  </div>
// </div>
//  `;

// }

// const vodeoDispaly=`

// <div id="popup-1" class="popup">

// </div>



// `
// document.getElementById("popup-dspaly").innerHTML = vodeoDispaly;

const videodata={
    "video-1": {
        "vno": "1 ",
        "videoId": "P-E-IGQCsPo"
    },
    "video-2": {
        "vno": " 2",
        "videoId": "1esRrwrmWzA"
    },
    "video-3": {
        "vno": "3 ",
        "videoId": "1"
    },
    "video-4": {
        "vno": "4 ",
        "videoId":"1"
    },
    "video-5": {
        "vno": " 5",
        "videoId": "1"
    },
    "video-6": {
        "vno": "6 ",
        "videoId": "1"
    },
    "video-7": {
        "vno": " 7",
        "videoId": "1"
    },
    "video-8": {
        "vno": "8 ",
        "videoId": "1"
    },
    "video-9": {
        "vno": "9 ",
        "videoId": "1"
    },
    "video-10": {
        "vno": " ",
        "videoId": "1"
    },
    "video-11": {
        "vno": " ",
        "videoId": "1"
    },
    "video-12": {
        "vno": " ",
        "videoId": "1"
    },
    "video-13": {
        "vno": " ",
        "videoId": "1"
    },
    "video-14": {
        "vno": " ",
        "videoId": "1"
    },
    "video-15": {
        "vno": " ",
        "videoId": "1"
    },
    "video-16": {
        "vno": " ",
        "videoId": "1"
    },
    "video-17": {
        "vno": " ",
        "videoId": "1"
    },
    "video-18": {
        "vno": " ",
        "videoId": "1"
    },
    "video-19": {
        "vno": " ",
        "videoId": "1"
    },
    "video-20": {
        "vno": " ",
        "videoId": "1"
    },
    "video-21": {
        "vno": " ",
        "videoId": "1"
    },
    "video-22": {
        "vno": " ",
        "videoId": "1"
    },
    "video-23": {
        "vno": " ",
        "videoId": "1"
    },
    "video-24": {
        "vno": " ",
        "videoId": "1"
    },
    "video-25": {
        "vno": " ",
        "videoId": "1"
    },
    "video-26": {
        "vno": " ",
        "videoId": "1"
    },
    "video-27": {
        "vno": " ",
        "videoId": "1"
    },
    "video-28": {
        "vno": " ",
        "videoId": "1"
    },
    "video-": {
        "vno": " ",
        "videoId": "1"
    },
    "video-29": {
        "vno": " ",
        "videoId": "1"
    },
    "video-30": {
        "vno": " ",
        "videoId": "1"
    },
    "video-31": {
        "vno": " ",
        "videoId": "1"
    },
    "video-32": {
        "vno": " ",
        "videoId": "1"
    },
    "video-33": {
        "vno": " ",
        "videoId": "1"
    },
    "video-34": {
        "vno": " ",
        "videoId": "1"
    },
    "video-35": {
        "vno": " ",
        "videoId": "1"
    },
    "video-36": {
        "vno": " ",
        "videoId": "1"
    },
    "video-37": {
        "vno": " ",
        "videoId": "1"
    },
    "video-38": {
        "vno": " ",
        "videoId": "1"
    }
}
function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);
const displayVideo=`

<div id="popup1" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-1"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-1"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-1"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>
<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-3"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-3"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-3"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>
<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-4"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-4"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-4"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>
<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-5"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-5"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-5"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-6"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-6"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-6"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup7" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-7"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-7"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-7"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>

<div id="popup2" class="popup">

    <span class="close" onclick="closeSlide(${videodata["video-2"].vno})">&times;</span>
    <lite-youtube class="popup-content" videoid="${videodata["video-2"].videoId}" style="background-image: url('https://i.ytimg.com/vi/${videodata["video-2"].videoId}/maxresdefault.jpg');"></lite-youtube>
</div>



    
    `
    document.getElementById("video-dispaly").innerHTML = displayVideo;