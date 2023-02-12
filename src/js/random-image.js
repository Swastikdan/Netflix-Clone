window.onload = function() {
    let images = document.querySelectorAll(".random-image");
    let usedImages = [];

    for (let i = 0; i < images.length; i++) {
      let randomIndex = Math.floor(Math.random() * 32);
      while (usedImages.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 32);
      }
      usedImages.push(randomIndex);
      images[i].src = "/images/page-cards/image-" + (randomIndex + 1) + ".jpg";
    }
  };


const displayRandomImage = `
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="">

<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
</div>
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
</div>
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
<img class="random-image rounded-sm block" width="332"  src="">
</div>
`;

document.getElementById("more-like-this").innerHTML = displayRandomImage;