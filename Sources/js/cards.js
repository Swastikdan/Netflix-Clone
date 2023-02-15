let carddata;

fetch("/src/json/movies-db.json")
  .then((response) => response.json())
  .then((jsonData) => {
    carddata = jsonData;
    for (let i = 7; i <= 38; i++) {
      const videoId = `movie-${i}`;
      const cardData = generateCardData(videoId);
      console.log (cardData );
    }
    
  });

function generateCardData(cardId) {
  const cardData = carddata[cardId];

  const movieContainer = document.getElementById(
    `card-${cardId.split("-")[1]}`
  );
  let pl;
  if (cardId === "movie-14") {
    pl = "9";
  } else {
    pl = "0";
  }

  movieContainer.innerHTML = `

    <div class="mt-5 pl-9 pr-${pl}"> 

<div class=" card container relative w-[300px]  items-center duration-150 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">
  <img width="300" class="block rounded-xl" src="${cardData.cardimage}" alt="${cardData.title}" loading="lazy" />
  <div class="overlay absolute bottom-0 flex w-[300px] justify-between space-y-3 bg-clip-padding px-4 py-3  text-white opacity-0 ease-in-out">
    <div class=" description space-y-1">
      <span class="text-[16px]  text-white">${cardData.title}</span> <br />
      <p class="text-[8px] text-white">
        <span>${cardData.releseyear} &nbsp;|&nbsp;&nbsp;</span>
        <span class="p-[1px] ring-1 ring-white">&nbsp;${cardData.maturityrating} </span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${cardData.runtime}&nbsp;|&nbsp;</span>
        <span>&nbsp;${cardData.movietype}</span>
      </p>
    </div>
    <div class="buttons flex space-x-1">
<button class="" onclick="openSlide(${cardData.number})">
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<a href="${cardData.pagelink}">
<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z" fill="white"/>
</svg>
</a>
    </div>
  </div>
</div>
<h1 class=" bg-black text-white   text-[14px] font-medium mt-2 pl-5 ">${cardData.title}
</h1>
</div>

`;
}

const verSlide1 = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">
  <div class="swiper-wrapper">
    <div class="swiper-slide hover:z-50  ">
      <div id="card-7">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-8">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-9">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-10">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-11">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-12">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-13">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50  ">
      <div id="card-14">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hidden  " >
     
    </div>
  
  </div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev "></div>
</div>
  `;
const verSlide2 = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-2">
  <div class="swiper-wrapper">
    <div class="swiper-slide hover:z-50 ">
      <div id="card-15">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-16">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-17">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-18">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-19">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-20">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-21">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-22">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hidden" >
     
    </div>
  
  </div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev "></div>
</div>
  `;
  const verSlide3 = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-2">
  <div class="swiper-wrapper">
    <div class="swiper-slide hover:z-50 ">
      <div id="card-23">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-24">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-25">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-26">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-27">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-28">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-29">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-30">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hidden" >
     
    </div>
  
  </div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev "></div>
</div>
  `;
  const verSlide4 = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-2">
  <div class="swiper-wrapper">
    <div class="swiper-slide hover:z-50 ">
      <div id="card-31">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-32">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-33">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-34">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-35">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-36">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-37">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hover:z-50 ">
      <div id="card-38">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </div>
    </div>
    <div class="swiper-slide hidden" >
     
    </div>
  
  </div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev "></div>
</div>
  `;
document.getElementById("carasol-content-1").innerHTML = verSlide1;
document.getElementById("carasol-content-2").innerHTML = verSlide2;
document.getElementById("carasol-content-3").innerHTML = verSlide3;
document.getElementById("carasol-content-4").innerHTML = verSlide4;
