(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = i(n);
    fetch(n.href, r);
  }
})();
const Me = `
<div class="z-[1000] fixed overflow-hidden w-full h-full  bg-black flex items-center justify-center ">
    <img class="animate-spin w-20" src="https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Preloader">
</div>
`;
document.getElementById("loader").innerHTML = Me;
var Pe = document.getElementById("loader");
window.addEventListener("load", function () {
  Pe.style.display = "none";
});
const Le = `

<div class="flex space-x-20">
    <a href="/">
        <img width="100" src="https://res.cloudinary.com/dytlajwyl/image/upload/f_auto,q_auto/v1676497705/Netflix/netflix_klvt8k.svg" alt="Logo-Netflix">
    </a>
    <ul class="nav  flex flex-row flex-wrap   space-x-8 text-[16px]" >
        <li><a href="/"
                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                >Home</a></li>
        <li><a class="text-white active:text-gray-200 hover:text-gray-400 font-semibold cursor-pointer">TV Shows</a>
        </li>

        <li><a
                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold  cursor-pointer ">Movies</a></li>
        <li><a
                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold  cursor-pointer ">New &
                Popular</a></li>
        <li><a
                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold  cursor-pointer ">My List</a></li>

    </ul>
</div>
<div class="extra flex items-center space-x-6 cursor-pointer">

    <svg  stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z">
        </path>
    </svg>

    <svg  stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" class="Navbar_icon__1oHI1"
        height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z">
        </path>
    </svg>
    <img class="w-7 rounded-md " src="https://res.cloudinary.com/dytlajwyl/image/upload/f_auto,q_20/v1676497722/Netflix/profile-pic_hrzhic.png" alt="Swastik Dan Profile Image">
</div>


`;
document.getElementById("header").innerHTML = Le;
const re = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? re.classList.add("scroll")
    : re.classList.remove("scroll");
});
let fe;
fetch("/assets/movies-db.json")
  .then((e) => e.json())
  .then((e) => {
    (fe = e),
      N("movie-1"),
      N("movie-2"),
      N("movie-3"),
      N("movie-4"),
      N("movie-5"),
      N("movie-6");
  });
function N(e) {
  const t = fe[e],
    i = document.getElementById(`hero-slider-${e.split("-")[1]}`);
  var s;
  e === "movie-1" ? (s = "eger") : (s = "lazy"),
    (i.innerHTML = `

  <div class=" relative float-left w-full">
  <img class="pl-20 bg-gray-800" src="${
   t.imagemain
  }" class=" h-[600px] w-full lazy" alt="${t.title}" loading="${s}" />
  <div class="card-text pt-32 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white  "
      style="background: rgb(0,0,0);
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.891281512605042) 40%, rgba(0,0,0,0.8044467787114846) 50%, rgba(0,0,0,0.6980042016806722) 60%, rgba(0,0,0,0.6027661064425771) 70%, rgba(0,0,0,0.3982843137254902) 80%, rgba(0,0,0,0.19940476190476186) 90%, rgba(0,0,0,0) 100%);">
      <img width="300px" src="${t.imagetext}" alt="${
      t.title
    }" loading="${s}"/>
      <div class="space-y-4">
          <span class="text-[28px] font-semibold">${t.title}</span> <br>
          <p class="text-[14px] font-medium text-gray-400">
              <span>${t.releseyear} &nbsp;|&nbsp;&nbsp;</span>
              <span class="ring-1 ring-gray-400 px-2 ">&nbsp;${
                t.maturityrating
              } </span>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${t.runtime}&nbsp;|&nbsp;</span>
              <span>&nbsp;${t.movietype}</span>
          </p>
          <p>${t.description}</p>
          <p>
              <span class="text-gray-400">Starring:</span>
              <span>${t.cast}</span>
          </p>
      </div>
      <div class="buttons text-[16px] flex space-x-10">
          <a href="#_" onclick="openSlide(${t.number})"
              class="flex space-x-2 bg-[#c5121b] text-white items-center px-5 py-[6px] rounded-xl hover:bg-[#E50914]">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                      stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
              </svg>
              <span class="font-medium text-md">Play Now</span>
          </a>
          <a href="${t.pagelink}" 
              class="items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black p-[6px] rounded-xl ring-1 ring-gray-500 hover:ring-gray-400">
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">

                  <path d="M8 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  <path d="M12 16V8" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />

              </svg>
          </a>
      </div>
  </div>
</div>

  `);
}
const ke = `
<div style="--swiper-navigation-color: #E50914;" class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">

    <div id="hero-slider-1"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-2"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-3"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-4"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-5"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-6"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>

</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div>
</div>

`;
document.getElementById("sliderDisplay").innerHTML = ke;
const Ie = `
<div
class="max-w-screen-xl px-4 py-5 mx-auto space-y-8 overflow-hidden  tails-selected-element">

<div class="flex justify-center mt-8 space-x-6"><a target="_blank" rel="noopener noreferrer"
        href="https://www.facebook.com/SwastikDan" class="text-gray-400 hover:text-gray-500"><span
            class="sr-only">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
            fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
            </path>
        </svg></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swastikdan"
        class="text-gray-400 hover:text-gray-500"><span class="sr-only">linkedin</span><svg
            xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            class="bi bi-linkedin" viewBox="0 0 16 16">
            <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
            </path>
        </svg></a><a target="_blank" rel="noopener noreferrer" href="https://github.com/Swastikdan"
        class="text-gray-400 hover:text-gray-500"><span class="sr-only">GitHub</span><svg
            xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            class="bi bi-github" viewBox="0 0 16 16">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
            </path>
        </svg></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.swastikdan.tech/"
        class="text-gray-400 hover:text-gray-500"><span class="sr-only">Website</span><img width="30" src="https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_auto/https://main--swastikdan.netlify.app/assets/logo-header.webp" alt="" srcset=""></a>
    </div>
<p class="mt-8 text-base leading-6 text-center text-gray-400 helveticarounded_bold">Made with 💕 by &nbsp;<a
        target=" _blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/swastikdan">Swastik Dan</a>&nbsp;.</p>
</div>
`;
document.getElementById("footer").innerHTML = Ie;
let ve;
fetch("/assets/movies-db.json")
  .then((e) => e.json())
  .then((e) => {
    ve = e;
    for (let t = 7; t <= 38; t++) {
      const i = `movie-${t}`,
        s = Ae(i);
      console.log(s);
    }
  });
function Ae(e) {
  const t = ve[e],
    i = document.getElementById(`card-${e.split("-")[1]}`);
  i.innerHTML = `

    <div class="mt-5 pl-9"> 

<div class=" card container relative w-[300px]  items-center duration-150 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">
  <img width="300" class="block rounded-xl lazy" src="${
   t.cardimage
  }" alt="${t.title}"  />
  <div class="overlay absolute bottom-0 flex w-[300px] justify-between space-y-3 bg-clip-padding px-4 py-3  text-white opacity-0 ease-in-out">
    <div class=" description space-y-1">
      <span class="text-[16px]  text-white">${t.title}</span> <br />
      <p class="text-[8px] text-white">
        <span>${t.releseyear} &nbsp;|&nbsp;&nbsp;</span>
        <span class="p-[1px] ring-1 ring-white">&nbsp;${
          t.maturityrating
        } </span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${t.runtime}&nbsp;|&nbsp;</span>
        <span>&nbsp;${t.movietype}</span>
      </p>
    </div>
    <div class="buttons flex space-x-1 items-center">
<button class="" onclick="openSlide(${t.number})">
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<a href="${t.pagelink}">
<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z" fill="white"/>
</svg>
</a>
    </div>
  </div>
</div>
<h1 class="  text-white   text-[14px] font-medium mt-2 pl-5 ">${t.title}
</h1>
</div>

`;
}
const De = `
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
  `,
  Ge = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">
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
  `,
  Ve = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">
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
  `,
  Be = `
  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">
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
document.getElementById("carasol-content-1").innerHTML = De;
document.getElementById("carasol-content-2").innerHTML = Ge;
document.getElementById("carasol-content-3").innerHTML = Ve;
document.getElementById("carasol-content-4").innerHTML = Be;
function $e(e) {
  var t = document.createElement("iframe");
  t.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + e.dataset.id + "?autoplay=1&rel=0"
  ),
    t.setAttribute("frameborder", "0"),
    t.setAttribute("allowfullscreen", "1"),
    t.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ),
    e.parentNode.replaceChild(t, e);
}
function He() {
  for (
    var e = document.getElementsByClassName("youtube-player"), t = 0;
    t < e.length;
    t++
  ) {
    var i = e[t].dataset.id,
      s = document.createElement("div");
    s.setAttribute("data-id", i);
    var n = document.createElement("img");
    (n.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", i)),
      s.appendChild(n);
    var r = document.createElement("div");
    r.setAttribute("class", "play"),
      s.appendChild(r),
      (s.onclick = function () {
        $e(this);
      }),
      e[t].appendChild(s);
  }
}
document.addEventListener("DOMContentLoaded", He);
let he;
fetch("/assets/video-id.json")
  .then((e) => e.json())
  .then((e) => {
    he = e;
    for (let t = 1; t <= 38; t++) {
      const i = `video-${t}`,
        s = _e(i);
      console.log(s);
    }
  });
function _e(e) {
  const t = he[e],
    i = document.getElementById(`popup-${e.split("-")[1]}`);
  i.innerHTML = `

  <span class="close" onclick="closeSlide(${t.vno})">&times;</span>
  <lite-youtube class="popup-content" videoid="${t.videoId}" style="background-image: url('https://i.ytimg.com/vi/${t.videoId}/maxresdefault.jpg');"></lite-youtube>
`;
}
const Ne = 38;
let me = "";
for (let e = 1; e <= Ne; e++) me += `<div id="popup-${e}" class="popup"></div>`;
document.getElementById("video-dispaly").innerHTML = me;
class B extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    let t = this.querySelector(".lty-playbtn");
    if (
      ((this.playLabel =
        (t && t.textContent.trim()) ||
        this.getAttribute("playlabel") ||
        "Play"),
      this.style.backgroundImage ||
        (this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),
      t ||
        ((t = document.createElement("button")),
        (t.type = "button"),
        t.classList.add("lty-playbtn"),
        this.append(t)),
      !t.textContent)
    ) {
      const i = document.createElement("span");
      (i.className = "lyt-visually-hidden"),
        (i.textContent = this.playLabel),
        t.append(i);
    }
    t.removeAttribute("href"),
      this.addEventListener("pointerover", B.warmConnections, { once: !0 }),
      this.addEventListener("click", this.addIframe),
      (this.needsYTApiForAutoplay =
        navigator.vendor.includes("Apple") ||
        navigator.userAgent.includes("Mobi"));
  }
  static addPrefetch(t, i, s) {
    const n = document.createElement("link");
    (n.rel = t), (n.href = i), s && (n.as = s), document.head.append(n);
  }
  static warmConnections() {
    B.preconnected ||
      (B.addPrefetch("preconnect", "https://www.youtube-nocookie.com"),
      B.addPrefetch("preconnect", "https://www.google.com"),
      B.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"),
      B.addPrefetch("preconnect", "https://static.doubleclick.net"),
      (B.preconnected = !0));
  }
  fetchYTPlayerApi() {
    window.YT ||
      (window.YT && window.YT.Player) ||
      (this.ytApiPromise = new Promise((t, i) => {
        var s = document.createElement("script");
        (s.src = "https://www.youtube.com/iframe_api"),
          (s.async = !0),
          (s.onload = (n) => {
            YT.ready(t);
          }),
          (s.onerror = i),
          this.append(s);
      }));
  }
  async addYTPlayerIframe(t) {
    this.fetchYTPlayerApi(), await this.ytApiPromise;
    const i = document.createElement("div");
    this.append(i);
    const s = Object.fromEntries(t.entries());
    new YT.Player(i, {
      width: "100%",
      videoId: this.videoId,
      playerVars: s,
      events: {
        onReady: (n) => {
          n.target.playVideo();
        },
      },
    });
  }
  async addIframe() {
    if (this.classList.contains("lyt-activated")) return;
    this.classList.add("lyt-activated");
    const t = new URLSearchParams(this.getAttribute("params") || []);
    if (
      (t.append("autoplay", "1"),
      t.append("playsinline", "1"),
      this.needsYTApiForAutoplay)
    )
      return this.addYTPlayerIframe(t);
    const i = document.createElement("iframe");
    (i.width = 560),
      (i.height = 315),
      (i.title = this.playLabel),
      (i.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
      (i.allowFullscreen = !0),
      (i.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        this.videoId
      )}?${t.toString()}`),
      this.append(i),
      i.focus();
  }
}
customElements.define("lite-youtube", B);
function ae(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ie(e = {}, t = {}) {
  Object.keys(t).forEach((i) => {
    typeof e[i] > "u"
      ? (e[i] = t[i])
      : ae(t[i]) && ae(e[i]) && Object.keys(t[i]).length > 0 && ie(e[i], t[i]);
  });
}
const ge = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function V() {
  const e = typeof document < "u" ? document : {};
  return ie(e, ge), e;
}
const Fe = {
  document: ge,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function A() {
  const e = typeof window < "u" ? window : {};
  return ie(e, Fe), e;
}
function je(e) {
  const t = e;
  Object.keys(t).forEach((i) => {
    try {
      t[i] = null;
    } catch {}
    try {
      delete t[i];
    } catch {}
  });
}
function te(e, t = 0) {
  return setTimeout(e, t);
}
function R() {
  return Date.now();
}
function We(e) {
  const t = A();
  let i;
  return (
    t.getComputedStyle && (i = t.getComputedStyle(e, null)),
    !i && e.currentStyle && (i = e.currentStyle),
    i || (i = e.style),
    i
  );
}
function Re(e, t = "x") {
  const i = A();
  let s, n, r;
  const o = We(e);
  return (
    i.WebKitCSSMatrix
      ? ((n = o.transform || o.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new i.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (i.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
        ? (n = parseFloat(s[12]))
        : (n = parseFloat(s[4]))),
    t === "y" &&
      (i.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
        ? (n = parseFloat(s[13]))
        : (n = parseFloat(s[5]))),
    n || 0
  );
}
function q(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Ye(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function O(...e) {
  const t = Object(e[0]),
    i = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < e.length; s += 1) {
    const n = e[s];
    if (n != null && !Ye(n)) {
      const r = Object.keys(Object(n)).filter((o) => i.indexOf(o) < 0);
      for (let o = 0, l = r.length; o < l; o += 1) {
        const a = r[o],
          d = Object.getOwnPropertyDescriptor(n, a);
        d !== void 0 &&
          d.enumerable &&
          (q(t[a]) && q(n[a])
            ? n[a].__swiper__
              ? (t[a] = n[a])
              : O(t[a], n[a])
            : !q(t[a]) && q(n[a])
            ? ((t[a] = {}), n[a].__swiper__ ? (t[a] = n[a]) : O(t[a], n[a]))
            : (t[a] = n[a]));
      }
    }
  }
  return t;
}
function X(e, t, i) {
  e.style.setProperty(t, i);
}
function we({ swiper: e, targetPosition: t, side: i }) {
  const s = A(),
    n = -e.translate;
  let r = null,
    o;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(e.cssModeFrameID);
  const a = t > n ? "next" : "prev",
    d = (u, v) => (a === "next" && u >= v) || (a === "prev" && u <= v),
    h = () => {
      (o = new Date().getTime()), r === null && (r = o);
      const u = Math.max(Math.min((o - r) / l, 1), 0),
        v = 0.5 - Math.cos(u * Math.PI) / 2;
      let c = n + v * (t - n);
      if ((d(c, t) && (c = t), e.wrapperEl.scrollTo({ [i]: c }), d(c, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: c });
          }),
          s.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = s.requestAnimationFrame(h);
    };
  h();
}
function $(e, t = "") {
  return [...e.children].filter((i) => i.matches(t));
}
function ye(e, t = []) {
  const i = document.createElement(e);
  return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
}
function qe(e, t) {
  const i = [];
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling;
    t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
  }
  return i;
}
function Xe(e, t) {
  const i = [];
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling;
    t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
  }
  return i;
}
function _(e, t) {
  return A().getComputedStyle(e, null).getPropertyValue(t);
}
function F(e) {
  let t = e,
    i;
  if (t) {
    for (i = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (i += 1);
    return i;
  }
}
function Ue(e, t) {
  const i = [];
  let s = e.parentElement;
  for (; s; ) t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
  return i;
}
function le(e, t, i) {
  const s = A();
  return i
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let K;
function Ke() {
  const e = A(),
    t = V();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function be() {
  return K || (K = Ke()), K;
}
let Z;
function Ze({ userAgent: e } = {}) {
  const t = be(),
    i = A(),
    s = i.navigator.platform,
    n = e || i.navigator.userAgent,
    r = { ios: !1, android: !1 },
    o = i.screen.width,
    l = i.screen.height,
    a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = s === "Win32";
  let c = s === "MacIntel";
  const p = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      c &&
      t.touch &&
      p.indexOf(`${o}x${l}`) >= 0 &&
      ((d = n.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (c = !1)),
    a && !v && ((r.os = "android"), (r.android = !0)),
    (d || u || h) && ((r.os = "ios"), (r.ios = !0)),
    r
  );
}
function Je(e = {}) {
  return Z || (Z = Ze(e)), Z;
}
let J;
function Qe() {
  const e = A();
  let t = !1;
  function i() {
    const s = e.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (i()) {
    const s = String(e.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      t = n < 16 || (n === 16 && r < 2);
    }
  }
  return {
    isSafari: t || i(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function et() {
  return J || (J = Qe()), J;
}
function tt({ swiper: e, on: t, emit: i }) {
  const s = A();
  let n = null,
    r = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((h) => {
          r = s.requestAnimationFrame(() => {
            const { width: u, height: v } = e;
            let c = u,
              p = v;
            h.forEach(({ contentBoxSize: f, contentRect: g, target: m }) => {
              (m && m !== e.el) ||
                ((c = g ? g.width : (f[0] || f).inlineSize),
                (p = g ? g.height : (f[0] || f).blockSize));
            }),
              (c !== u || p !== v) && o();
          });
        })),
        n.observe(e.el));
    },
    a = () => {
      r && s.cancelAnimationFrame(r),
        n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
      l();
      return;
    }
    s.addEventListener("resize", o), s.addEventListener("orientationchange", d);
  }),
    t("destroy", () => {
      a(),
        s.removeEventListener("resize", o),
        s.removeEventListener("orientationchange", d);
    });
}
function it({ swiper: e, extendParams: t, on: i, emit: s }) {
  const n = [],
    r = A(),
    o = (d, h = {}) => {
      const u = r.MutationObserver || r.WebkitMutationObserver,
        v = new u((c) => {
          if (c.length === 1) {
            s("observerUpdate", c[0]);
            return;
          }
          const p = function () {
            s("observerUpdate", c[0]);
          };
          r.requestAnimationFrame
            ? r.requestAnimationFrame(p)
            : r.setTimeout(p, 0);
        });
      v.observe(d, {
        attributes: typeof h.attributes > "u" ? !0 : h.attributes,
        childList: typeof h.childList > "u" ? !0 : h.childList,
        characterData: typeof h.characterData > "u" ? !0 : h.characterData,
      }),
        n.push(v);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = Ue(e.el);
          for (let h = 0; h < d.length; h += 1) o(d[h]);
        }
        o(e.el, { childList: e.params.observeSlideChildren }),
          o(e.wrapperEl, { attributes: !1 });
      }
    },
    a = () => {
      n.forEach((d) => {
        d.disconnect();
      }),
        n.splice(0, n.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", l),
    i("destroy", a);
}
const st = {
  on(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const n = i ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](t);
      }),
      s
    );
  },
  once(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function n(...r) {
      s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, r);
    }
    return (n.__emitterProxy = t), s.on(e, n, i);
  },
  onAny(e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const s = t ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const i = t.eventsAnyListeners.indexOf(e);
    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
  },
  off(e, t) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((n, r) => {
                (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                  i.eventsListeners[s].splice(r, 1);
              });
        }),
      i
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let i, s, n;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
        : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
      s.unshift(n),
      (Array.isArray(i) ? i : i.split(" ")).forEach((o) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((l) => {
            l.apply(n, [o, ...s]);
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach((l) => {
              l.apply(n, s);
            });
      }),
      t
    );
  },
};
function rt() {
  const e = this;
  let t, i;
  const s = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (i = e.params.height)
      : (i = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (i === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(_(s, "padding-left") || 0, 10) -
        parseInt(_(s, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(_(s, "padding-top") || 0, 10) -
        parseInt(_(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i,
      }));
}
function nt() {
  const e = this;
  function t(y) {
    return e.isHorizontal()
      ? y
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[y];
  }
  function i(y, T) {
    return parseFloat(y.getPropertyValue(t(T)) || 0);
  }
  const s = e.params,
    { wrapperEl: n, slidesEl: r, size: o, rtlTranslate: l, wrongRTL: a } = e,
    d = e.virtual && s.virtual.enabled,
    h = d ? e.virtual.slides.length : e.slides.length,
    u = $(r, `.${e.params.slideClass}, swiper-slide`),
    v = d ? e.virtual.slides.length : u.length;
  let c = [];
  const p = [],
    f = [];
  let g = s.slidesOffsetBefore;
  typeof g == "function" && (g = s.slidesOffsetBefore.call(e));
  let m = s.slidesOffsetAfter;
  typeof m == "function" && (m = s.slidesOffsetAfter.call(e));
  const b = e.snapGrid.length,
    w = e.slidesGrid.length;
  let x = s.spaceBetween,
    E = -g,
    S = 0,
    P = 0;
  if (typeof o > "u") return;
  typeof x == "string" &&
    x.indexOf("%") >= 0 &&
    (x = (parseFloat(x.replace("%", "")) / 100) * o),
    (e.virtualSize = -x),
    u.forEach((y) => {
      l ? (y.style.marginLeft = "") : (y.style.marginRight = ""),
        (y.style.marginBottom = ""),
        (y.style.marginTop = "");
    }),
    s.centeredSlides &&
      s.cssMode &&
      (X(n, "--swiper-centered-offset-before", ""),
      X(n, "--swiper-centered-offset-after", ""));
  const L = s.grid && s.grid.rows > 1 && e.grid;
  L && e.grid.initSlides(v);
  let M;
  const Y =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (y) => typeof s.breakpoints[y].slidesPerView < "u"
    ).length > 0;
  for (let y = 0; y < v; y += 1) {
    M = 0;
    let T;
    if (
      (u[y] && (T = u[y]),
      L && e.grid.updateSlide(y, T, v, t),
      !(u[y] && _(T, "display") === "none"))
    ) {
      if (s.slidesPerView === "auto") {
        Y && (u[y].style[t("width")] = "");
        const z = getComputedStyle(T),
          D = T.style.transform,
          j = T.style.webkitTransform;
        if (
          (D && (T.style.transform = "none"),
          j && (T.style.webkitTransform = "none"),
          s.roundLengths)
        )
          M = e.isHorizontal() ? le(T, "width", !0) : le(T, "height", !0);
        else {
          const C = i(z, "width"),
            G = i(z, "padding-left"),
            k = i(z, "padding-right"),
            H = i(z, "margin-left"),
            W = i(z, "margin-right"),
            se = z.getPropertyValue("box-sizing");
          if (se && se === "border-box") M = C + H + W;
          else {
            const { clientWidth: ze, offsetWidth: Ce } = T;
            M = C + G + k + H + W + (Ce - ze);
          }
        }
        D && (T.style.transform = D),
          j && (T.style.webkitTransform = j),
          s.roundLengths && (M = Math.floor(M));
      } else
        (M = (o - (s.slidesPerView - 1) * x) / s.slidesPerView),
          s.roundLengths && (M = Math.floor(M)),
          u[y] && (u[y].style[t("width")] = `${M}px`);
      u[y] && (u[y].swiperSlideSize = M),
        f.push(M),
        s.centeredSlides
          ? ((E = E + M / 2 + S / 2 + x),
            S === 0 && y !== 0 && (E = E - o / 2 - x),
            y === 0 && (E = E - o / 2 - x),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            s.roundLengths && (E = Math.floor(E)),
            P % s.slidesPerGroup === 0 && c.push(E),
            p.push(E))
          : (s.roundLengths && (E = Math.floor(E)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && c.push(E),
            p.push(E),
            (E = E + M + x)),
        (e.virtualSize += M + x),
        (S = M),
        (P += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + m),
    l &&
      a &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      (n.style.width = `${e.virtualSize + s.spaceBetween}px`),
    s.setWrapperSize &&
      (n.style[t("width")] = `${e.virtualSize + s.spaceBetween}px`),
    L && e.grid.updateWrapperSize(M, c, t),
    !s.centeredSlides)
  ) {
    const y = [];
    for (let T = 0; T < c.length; T += 1) {
      let z = c[T];
      s.roundLengths && (z = Math.floor(z)),
        c[T] <= e.virtualSize - o && y.push(z);
    }
    (c = y),
      Math.floor(e.virtualSize - o) - Math.floor(c[c.length - 1]) > 1 &&
        c.push(e.virtualSize - o);
  }
  if (d && s.loop) {
    const y = f[0] + x;
    if (s.slidesPerGroup > 1) {
      const T = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup
        ),
        z = y * s.slidesPerGroup;
      for (let D = 0; D < T; D += 1) c.push(c[c.length - 1] + z);
    }
    for (let T = 0; T < e.virtual.slidesBefore + e.virtual.slidesAfter; T += 1)
      s.slidesPerGroup === 1 && c.push(c[c.length - 1] + y),
        p.push(p[p.length - 1] + y),
        (e.virtualSize += y);
  }
  if ((c.length === 0 && (c = [0]), s.spaceBetween !== 0)) {
    const y = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
    u.filter((T, z) =>
      !s.cssMode || s.loop ? !0 : z !== u.length - 1
    ).forEach((T) => {
      T.style[y] = `${x}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let y = 0;
    f.forEach((z) => {
      y += z + (s.spaceBetween ? s.spaceBetween : 0);
    }),
      (y -= s.spaceBetween);
    const T = y - o;
    c = c.map((z) => (z < 0 ? -g : z > T ? T + m : z));
  }
  if (s.centerInsufficientSlides) {
    let y = 0;
    if (
      (f.forEach((T) => {
        y += T + (s.spaceBetween ? s.spaceBetween : 0);
      }),
      (y -= s.spaceBetween),
      y < o)
    ) {
      const T = (o - y) / 2;
      c.forEach((z, D) => {
        c[D] = z - T;
      }),
        p.forEach((z, D) => {
          p[D] = z + T;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: c,
      slidesGrid: p,
      slidesSizesGrid: f,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    X(n, "--swiper-centered-offset-before", `${-c[0]}px`),
      X(
        n,
        "--swiper-centered-offset-after",
        `${e.size / 2 - f[f.length - 1] / 2}px`
      );
    const y = -e.snapGrid[0],
      T = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((z) => z + y)),
      (e.slidesGrid = e.slidesGrid.map((z) => z + T));
  }
  if (
    (v !== h && e.emit("slidesLengthChange"),
    c.length !== b &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    p.length !== w && e.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const y = `${s.containerModifierClass}backface-hidden`,
      T = e.el.classList.contains(y);
    v <= s.maxBackfaceHiddenSlides
      ? T || e.el.classList.add(y)
      : T && e.el.classList.remove(y);
  }
}
function at(e) {
  const t = this,
    i = [],
    s = t.virtual && t.params.virtual.enabled;
  let n = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) =>
    s
      ? t.slides.filter(
          (a) => parseInt(a.getAttribute("data-swiper-slide-index"), 10) === l
        )[0]
      : t.slides[l];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        i.push(l);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const l = t.activeIndex + r;
        if (l > t.slides.length && !s) break;
        i.push(o(l));
      }
  else i.push(o(t.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const l = i[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function lt() {
  const e = this,
    t = e.slides,
    i = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i;
}
function ot(e = (this && this.translate) || 0) {
  const t = this,
    i = t.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  n && (o = e),
    s.forEach((l) => {
      l.classList.remove(i.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let l = 0; l < s.length; l += 1) {
    const a = s[l];
    let d = a.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
    const h =
        (o + (i.centeredSlides ? t.minTranslate() : 0) - d) /
        (a.swiperSlideSize + i.spaceBetween),
      u =
        (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) /
        (a.swiperSlideSize + i.spaceBetween),
      v = -(o - d),
      c = v + t.slidesSizesGrid[l];
    ((v >= 0 && v < t.size - 1) ||
      (c > 1 && c <= t.size) ||
      (v <= 0 && c >= t.size)) &&
      (t.visibleSlides.push(a),
      t.visibleSlidesIndexes.push(l),
      s[l].classList.add(i.slideVisibleClass)),
      (a.progress = n ? -h : h),
      (a.originalProgress = n ? -u : u);
  }
}
function dt(e) {
  const t = this;
  if (typeof e > "u") {
    const h = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * h) || 0;
  }
  const i = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o, progressLoop: l } = t;
  const a = r,
    d = o;
  if (s === 0) (n = 0), (r = !0), (o = !0);
  else {
    n = (e - t.minTranslate()) / s;
    const h = Math.abs(e - t.minTranslate()) < 1,
      u = Math.abs(e - t.maxTranslate()) < 1;
    (r = h || n <= 0), (o = u || n >= 1), h && (n = 0), u && (n = 1);
  }
  if (i.loop) {
    const h = F(
        t.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") === "0"
        )[0]
      ),
      u = F(
        t.slides.filter(
          (g) =>
            g.getAttribute("data-swiper-slide-index") * 1 ===
            t.slides.length - 1
        )[0]
      ),
      v = t.slidesGrid[h],
      c = t.slidesGrid[u],
      p = t.slidesGrid[t.slidesGrid.length - 1],
      f = Math.abs(e);
    f >= v ? (l = (f - v) / p) : (l = (f + p - c) / p), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: n, progressLoop: l, isBeginning: r, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !a && t.emit("reachBeginning toEdge"),
    o && !d && t.emit("reachEnd toEdge"),
    ((a && !r) || (d && !o)) && t.emit("fromEdge"),
    t.emit("progress", n);
}
function ct() {
  const e = this,
    { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
    r = e.virtual && i.virtual.enabled,
    o = (a) => $(s, `.${i.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let l;
  if (r)
    if (i.loop) {
      let a = n - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (l = o(`[data-swiper-slide-index="${a}"]`));
    } else l = o(`[data-swiper-slide-index="${n}"]`);
  else l = t[n];
  if (l) {
    l.classList.add(i.slideActiveClass);
    let a = Xe(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !a && (a = t[0]), a && a.classList.add(i.slideNextClass);
    let d = qe(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !d === 0 && (d = t[t.length - 1]),
      d && d.classList.add(i.slidePrevClass);
  }
  e.emitSlidesClasses();
}
function pt(e) {
  const { slidesGrid: t, params: i } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (n = r)
        : s >= t[r] && s < t[r + 1] && (n = r + 1)
      : s >= t[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function ut(e) {
  const t = this,
    i = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l } = t;
  let a = e,
    d;
  const h = (v) => {
    let c = v - t.virtual.slidesBefore;
    return (
      c < 0 && (c = t.virtual.slides.length + c),
      c >= t.virtual.slides.length && (c -= t.virtual.slides.length),
      c
    );
  };
  if ((typeof a > "u" && (a = pt(t)), s.indexOf(i) >= 0)) d = s.indexOf(i);
  else {
    const v = Math.min(n.slidesPerGroupSkip, a);
    d = v + Math.floor((a - v) / n.slidesPerGroup);
  }
  if ((d >= s.length && (d = s.length - 1), a === r)) {
    d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = h(a));
    return;
  }
  let u;
  t.virtual && n.virtual.enabled && n.loop
    ? (u = h(a))
    : t.slides[a]
    ? (u = parseInt(
        t.slides[a].getAttribute("data-swiper-slide-index") || a,
        10
      ))
    : (u = a),
    Object.assign(t, {
      snapIndex: d,
      realIndex: u,
      previousIndex: r,
      activeIndex: a,
    }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    o !== u && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function ft(e) {
  const t = this,
    i = t.params,
    s = e.closest(`.${i.slideClass}, swiper-slide`);
  let n = !1,
    r;
  if (s) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === s) {
        (n = !0), (r = o);
        break;
      }
  }
  if (s && n)
    (t.clickedSlide = s),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = r);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const vt = {
  updateSize: rt,
  updateSlides: nt,
  updateAutoHeight: at,
  updateSlidesOffset: lt,
  updateSlidesProgress: ot,
  updateProgress: dt,
  updateSlidesClasses: ct,
  updateActiveIndex: ut,
  updateClickedSlide: ft,
};
function ht(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: i, rtlTranslate: s, translate: n, wrapperEl: r } = t;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let o = Re(r, e);
  return s && (o = -o), o || 0;
}
function mt(e, t) {
  const i = this,
    { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
  let l = 0,
    a = 0;
  const d = 0;
  i.isHorizontal() ? (l = s ? -e : e) : (a = e),
    n.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    n.cssMode
      ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -l
          : -a)
      : n.virtualTranslate ||
        (r.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : a);
  let h;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? (h = 0) : (h = (e - i.minTranslate()) / u),
    h !== o && i.updateProgress(e),
    i.emit("setTranslate", i.translate, t);
}
function gt() {
  return -this.snapGrid[0];
}
function wt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function yt(e = 0, t = this.params.speed, i = !0, s = !0, n) {
  const r = this,
    { params: o, wrapperEl: l } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    d = r.maxTranslate();
  let h;
  if (
    (s && e > a ? (h = a) : s && e < d ? (h = d) : (h = e),
    r.updateProgress(h),
    o.cssMode)
  ) {
    const u = r.isHorizontal();
    if (t === 0) l[u ? "scrollLeft" : "scrollTop"] = -h;
    else {
      if (!r.support.smoothScroll)
        return (
          we({ swiper: r, targetPosition: -h, side: u ? "left" : "top" }), !0
        );
      l.scrollTo({ [u ? "left" : "top"]: -h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(h),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(h),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (v) {
              !r ||
                r.destroyed ||
                (v.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  i && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const bt = {
  getTranslate: ht,
  setTranslate: mt,
  minTranslate: gt,
  maxTranslate: wt,
  translateTo: yt,
};
function xt(e, t) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`),
    i.emit("setTransition", e, t);
}
function xe({ swiper: e, runCallbacks: t, direction: i, step: s }) {
  const { activeIndex: n, previousIndex: r } = e;
  let o = i;
  if (
    (o || (n > r ? (o = "next") : n < r ? (o = "prev") : (o = "reset")),
    e.emit(`transition${s}`),
    t && n !== r)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${s}`);
      return;
    }
    e.emit(`slideChangeTransition${s}`),
      o === "next"
        ? e.emit(`slideNextTransition${s}`)
        : e.emit(`slidePrevTransition${s}`);
  }
}
function St(e = !0, t) {
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    xe({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
}
function Tt(e = !0, t) {
  const i = this,
    { params: s } = i;
  (i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      xe({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
}
const Et = { setTransition: xt, transitionStart: St, transitionEnd: Tt };
function zt(e = 0, t = this.params.speed, i = !0, s, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: h,
    activeIndex: u,
    rtlTranslate: v,
    wrapperEl: c,
    enabled: p,
  } = r;
  if ((r.animating && l.preventInteractionOnTransition) || (!p && !s && !n))
    return !1;
  const f = Math.min(r.params.slidesPerGroupSkip, o);
  let g = f + Math.floor((o - f) / r.params.slidesPerGroup);
  g >= a.length && (g = a.length - 1);
  const m = -a[g];
  if (l.normalizeSlideIndex)
    for (let w = 0; w < d.length; w += 1) {
      const x = -Math.floor(m * 100),
        E = Math.floor(d[w] * 100),
        S = Math.floor(d[w + 1] * 100);
      typeof d[w + 1] < "u"
        ? x >= E && x < S - (S - E) / 2
          ? (o = w)
          : x >= E && x < S && (o = w + 1)
        : x >= E && (o = w);
    }
  if (
    r.initialized &&
    o !== u &&
    ((!r.allowSlideNext && m < r.translate && m < r.minTranslate()) ||
      (!r.allowSlidePrev &&
        m > r.translate &&
        m > r.maxTranslate() &&
        (u || 0) !== o))
  )
    return !1;
  o !== (h || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(m);
  let b;
  if (
    (o > u ? (b = "next") : o < u ? (b = "prev") : (b = "reset"),
    (v && -m === r.translate) || (!v && m === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(m),
      b !== "reset" && (r.transitionStart(i, b), r.transitionEnd(i, b)),
      !1
    );
  if (l.cssMode) {
    const w = r.isHorizontal(),
      x = v ? m : -m;
    if (t === 0) {
      const E = r.virtual && r.params.virtual.enabled;
      E &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        E && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              c[w ? "scrollLeft" : "scrollTop"] = x;
            }))
          : (c[w ? "scrollLeft" : "scrollTop"] = x),
        E &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          we({ swiper: r, targetPosition: x, side: w ? "left" : "top" }), !0
        );
      c.scrollTo({ [w ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(m),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(i, b),
    t === 0
      ? r.transitionEnd(i, b)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (x) {
            !r ||
              r.destroyed ||
              (x.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, b)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Ct(e = 0, t = this.params.speed, i = !0, s) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  let r = e;
  return (
    n.params.loop &&
      (n.virtual && n.params.virtual.enabled
        ? (r = r + n.virtual.slidesBefore)
        : (r = F(
            n.slides.filter(
              (o) => o.getAttribute("data-swiper-slide-index") * 1 === r
            )[0]
          ))),
    n.slideTo(r, t, i, s)
  );
}
function Mt(e = this.params.speed, t = !0, i) {
  const s = this,
    { enabled: n, params: r, animating: o } = s;
  if (!n) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !d && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "next" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, i)
    : s.slideTo(s.activeIndex + a, e, t, i);
}
function Pt(e = this.params.speed, t = !0, i) {
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: d,
    } = s;
  if (!a) return s;
  const h = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !h && n.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const u = l ? s.translate : -s.translate;
  function v(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const c = v(u),
    p = r.map((m) => v(m));
  let f = r[p.indexOf(c) - 1];
  if (typeof f > "u" && n.cssMode) {
    let m;
    r.forEach((b, w) => {
      c >= b && (m = w);
    }),
      typeof m < "u" && (f = r[m > 0 ? m - 1 : m]);
  }
  let g = 0;
  if (
    (typeof f < "u" &&
      ((g = o.indexOf(f)),
      g < 0 && (g = s.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    n.rewind && s.isBeginning)
  ) {
    const m =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(m, e, t, i);
  }
  return s.slideTo(g, e, t, i);
}
function Lt(e = this.params.speed, t = !0, i) {
  const s = this;
  return s.slideTo(s.activeIndex, e, t, i);
}
function kt(e = this.params.speed, t = !0, i, s = 0.5) {
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const d = n.snapGrid[l],
      h = n.snapGrid[l + 1];
    a - d > (h - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[l - 1],
      h = n.snapGrid[l];
    a - d <= (h - d) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, e, t, i)
  );
}
function It() {
  const e = this,
    { params: t, slidesEl: i } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let n = e.clickedIndex,
    r;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? n < e.loopedSlides - s / 2 ||
          n > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (n = F($(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
            te(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n)
        : n > e.slides.length - s
        ? (e.loopFix(),
          (n = F($(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
          te(() => {
            e.slideTo(n);
          }))
        : e.slideTo(n);
  } else e.slideTo(n);
}
const Ot = {
  slideTo: zt,
  slideToLoop: Ct,
  slideNext: Mt,
  slidePrev: Pt,
  slideReset: Lt,
  slideToClosest: kt,
  slideToClickedSlide: It,
};
function At(e) {
  const t = this,
    { params: i, slidesEl: s } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  $(s, `.${i.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute("data-swiper-slide-index", o);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: i.centeredSlides ? void 0 : "next",
    });
}
function Dt({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: i,
  setTranslate: s,
  activeSlideIndex: n,
  byController: r,
  byMousewheel: o,
} = {}) {
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
    slides: a,
    allowSlidePrev: d,
    allowSlideNext: h,
    slidesEl: u,
    params: v,
  } = l;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && v.virtual.enabled)
  ) {
    t &&
      (!v.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && l.snapIndex < v.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = d),
      (l.allowSlideNext = h),
      l.emit("loopFix");
    return;
  }
  const c =
    v.slidesPerView === "auto"
      ? l.slidesPerViewDynamic()
      : Math.ceil(parseFloat(v.slidesPerView, 10));
  let p = v.loopedSlides || c;
  p % v.slidesPerGroup !== 0 &&
    (p += v.slidesPerGroup - (p % v.slidesPerGroup)),
    (l.loopedSlides = p);
  const f = [],
    g = [];
  let m = l.activeIndex;
  typeof n > "u"
    ? (n = F(
        l.slides.filter((S) => S.classList.contains("swiper-slide-active"))[0]
      ))
    : (m = n);
  const b = i === "next" || !i,
    w = i === "prev" || !i;
  let x = 0,
    E = 0;
  if (n < p) {
    x = p - n;
    for (let S = 0; S < p - n; S += 1) {
      const P = S - Math.floor(S / a.length) * a.length;
      f.push(a.length - P - 1);
    }
  } else if (n > l.slides.length - p * 2) {
    E = n - (l.slides.length - p * 2);
    for (let S = 0; S < E; S += 1) {
      const P = S - Math.floor(S / a.length) * a.length;
      g.push(P);
    }
  }
  if (
    (w &&
      f.forEach((S) => {
        u.prepend(l.slides[S]);
      }),
    b &&
      g.forEach((S) => {
        u.append(l.slides[S]);
      }),
    l.recalcSlides(),
    v.watchSlidesProgress && l.updateSlidesOffset(),
    t)
  ) {
    if (f.length > 0 && w)
      if (typeof e > "u") {
        const S = l.slidesGrid[m],
          L = l.slidesGrid[m + x] - S;
        o
          ? l.setTranslate(l.translate - L)
          : (l.slideTo(m + x, 0, !1, !0),
            s && (l.touches[l.isHorizontal() ? "startX" : "startY"] += L));
      } else s && l.slideToLoop(e, 0, !1, !0);
    else if (g.length > 0 && b)
      if (typeof e > "u") {
        const S = l.slidesGrid[m],
          L = l.slidesGrid[m - E] - S;
        o
          ? l.setTranslate(l.translate - L)
          : (l.slideTo(m - E, 0, !1, !0),
            s && (l.touches[l.isHorizontal() ? "startX" : "startY"] += L));
      } else l.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((l.allowSlidePrev = d),
    (l.allowSlideNext = h),
    l.controller && l.controller.control && !r)
  ) {
    const S = {
      slideRealIndex: e,
      slideTo: !1,
      direction: i,
      setTranslate: s,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((P) => {
          P.params.loop && P.loopFix(S);
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix(S);
  }
  l.emit("loopFix");
}
function Gt() {
  const e = this,
    { slides: t, params: i, slidesEl: s } = e;
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const n = [];
  t.forEach((r) => {
    const o =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    n[o] = r;
  }),
    t.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    n.forEach((r) => {
      s.append(r);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
const Vt = { loopCreate: At, loopFix: Dt, loopDestroy: Gt };
function Bt(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (i.style.cursor = "move"), (i.style.cursor = e ? "grabbing" : "grab");
}
function $t() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Ht = { setGrabCursor: Bt, unsetGrabCursor: $t };
function _t(e, t = this) {
  function i(s) {
    if (!s || s === V() || s === A()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(e);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(t);
}
function Nt(e) {
  const t = this,
    i = V(),
    s = A(),
    n = t.touchEventsData;
  n.evCache.push(e);
  const { params: r, touches: o, enabled: l } = t;
  if (
    !l ||
    (!r.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let d = a.target;
  if (
    (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const h = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = e.composedPath ? e.composedPath() : e.path;
  h && a.target && a.target.shadowRoot && u && (d = u[0]);
  const v = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    c = !!(a.target && a.target.shadowRoot);
  if (r.noSwiping && (c ? _t(v, d) : d.closest(v))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
  (o.currentX = a.pageX), (o.currentY = a.pageY);
  const p = o.currentX,
    f = o.currentY,
    g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (g && (p <= m || p >= s.innerWidth - m))
    if (g === "prevent") e.preventDefault();
    else return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = f),
    (n.touchStartTime = R()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1);
  let b = !0;
  d.matches(n.focusableElements) &&
    ((b = !1), d.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(n.focusableElements) &&
      i.activeElement !== d &&
      i.activeElement.blur();
  const w = b && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) &&
    !d.isContentEditable &&
    a.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a);
}
function Ft(e) {
  const t = V(),
    i = this,
    s = i.touchEventsData,
    { params: n, touches: r, rtlTranslate: o, enabled: l } = i;
  if (!l || (!n.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if ((a.originalEvent && (a = a.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const d = s.evCache.findIndex((S) => S.pointerId === a.pointerId);
  d >= 0 && (s.evCache[d] = a);
  const h = s.evCache.length > 1 ? s.evCache[0] : a,
    u = h.pageX,
    v = h.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = u), (r.startY = v);
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, {
          startX: u,
          startY: v,
          prevX: i.touches.currentX,
          prevY: i.touches.currentY,
          currentX: u,
          currentY: v,
        }),
        (s.touchStartTime = R()));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (
        (v < r.startY && i.translate <= i.maxTranslate()) ||
        (v > r.startY && i.translate >= i.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (u < r.startX && i.translate <= i.maxTranslate()) ||
      (u > r.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (i.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && i.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (r.currentX = u), (r.currentY = v);
  const c = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(c ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let S;
    (i.isHorizontal() && r.currentY === r.startY) ||
    (i.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : c * c + p * p >= 25 &&
        ((S = (Math.atan2(Math.abs(p), Math.abs(c)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? S > n.touchAngle
          : 90 - S > n.touchAngle));
  }
  if (
    (s.isScrolling && i.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (i.zoom &&
        i.params.zoom &&
        i.params.zoom.enabled &&
        s.evCache.length > 1))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (i.allowClick = !1),
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let f = i.isHorizontal() ? c : p,
    g = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement &&
    ((f = Math.abs(f) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
    (r.diff = f),
    (f *= n.touchRatio),
    o && ((f = -f), (g = -g));
  const m = i.touchesDirection;
  (i.swipeDirection = f > 0 ? "prev" : "next"),
    (i.touchesDirection = g > 0 ? "prev" : "next");
  const b = i.params.loop && !n.cssMode;
  if (!s.isMoved) {
    if (
      (b && i.loopFix({ direction: i.swipeDirection }),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const S = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      i.wrapperEl.dispatchEvent(S);
    }
    (s.allowMomentumBounce = !1),
      n.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", a);
  }
  let w;
  s.isMoved &&
    m !== i.touchesDirection &&
    b &&
    Math.abs(f) >= 1 &&
    (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (w = !0)),
    i.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = f + s.startTranslate);
  let x = !0,
    E = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (E = 0),
    f > 0
      ? (b &&
          !w &&
          s.currentTranslate >
            (n.centeredSlides
              ? i.minTranslate() - i.size / 2
              : i.minTranslate()) &&
          i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > i.minTranslate() &&
          ((x = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + f) ** E)))
      : f < 0 &&
        (b &&
          !w &&
          s.currentTranslate <
            (n.centeredSlides
              ? i.maxTranslate() + i.size / 2
              : i.maxTranslate()) &&
          i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (n.slidesPerView === "auto"
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        s.currentTranslate < i.maxTranslate() &&
          ((x = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - f) ** E))),
    x && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(f) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
      n.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    i.params.freeMode &&
      n.freeMode.enabled &&
      i.freeMode &&
      i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate));
}
function jt(e) {
  const t = this,
    i = t.touchEventsData,
    s = i.evCache.findIndex((w) => w.pointerId === e.pointerId);
  if (
    (s >= 0 && i.evCache.splice(s, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
  )
    return;
  const {
    params: n,
    touches: r,
    rtlTranslate: o,
    slidesGrid: l,
    enabled: a,
  } = t;
  if (!a || (!n.simulateTouch && e.pointerType === "mouse")) return;
  let d = e;
  if (
    (d.originalEvent && (d = d.originalEvent),
    i.allowTouchCallbacks && t.emit("touchEnd", d),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && n.grabCursor && t.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  n.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const h = R(),
    u = h - i.touchStartTime;
  if (t.allowClick) {
    const w = d.path || (d.composedPath && d.composedPath());
    t.updateClickedSlide((w && w[0]) || d.target),
      t.emit("tap click", d),
      u < 300 &&
        h - i.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", d);
  }
  if (
    ((i.lastClickTime = R()),
    te(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !t.swipeDirection ||
      r.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let v;
  if (
    (n.followFinger
      ? (v = o ? t.translate : -t.translate)
      : (v = -i.currentTranslate),
    n.cssMode)
  )
    return;
  if (t.params.freeMode && n.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  let c = 0,
    p = t.slidesSizesGrid[0];
  for (
    let w = 0;
    w < l.length;
    w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
  ) {
    const x = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof l[w + x] < "u"
      ? v >= l[w] && v < l[w + x] && ((c = w), (p = l[w + x] - l[w]))
      : v >= l[w] && ((c = w), (p = l[l.length - 1] - l[l.length - 2]));
  }
  let f = null,
    g = null;
  n.rewind &&
    (t.isBeginning
      ? (g =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (f = 0));
  const m = (v - l[c]) / p,
    b = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (u > n.longSwipesMs) {
    if (!n.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= n.longSwipesRatio
        ? t.slideTo(n.rewind && t.isEnd ? f : c + b)
        : t.slideTo(c)),
      t.swipeDirection === "prev" &&
        (m > 1 - n.longSwipesRatio
          ? t.slideTo(c + b)
          : g !== null && m < 0 && Math.abs(m) > n.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(c));
  } else {
    if (!n.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
      ? d.target === t.navigation.nextEl
        ? t.slideTo(c + b)
        : t.slideTo(c)
      : (t.swipeDirection === "next" && t.slideTo(f !== null ? f : c + b),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : c));
  }
}
let oe;
function de() {
  const e = this,
    { params: t, el: i } = e;
  if (i && i.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(oe),
      (oe = setTimeout(() => {
        e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = n),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Wt(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Rt() {
  const e = this,
    { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
  if (!s) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let n;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / r),
    n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
const U = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const i = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
    s = t.closest(i());
  if (s) {
    const n = s.querySelector(`.${e.params.lazyPreloaderClass}`);
    n && n.remove();
  }
};
function Yt(e) {
  const t = this;
  U(t, e.target), t.update();
}
let ce = !1;
function qt() {}
const Se = (e, t) => {
  const i = V(),
    { params: s, el: n, wrapperEl: r, device: o } = e,
    l = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  n[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    i[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    i[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    i[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    i[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    i[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      n[a]("click", e.onClick, !0),
    s.cssMode && r[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[d](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          de,
          !0
        )
      : e[d]("observerUpdate", de, !0),
    n[a]("load", e.onLoad, { capture: !0 });
};
function Xt() {
  const e = this,
    t = V(),
    { params: i } = e;
  (e.onTouchStart = Nt.bind(e)),
    (e.onTouchMove = Ft.bind(e)),
    (e.onTouchEnd = jt.bind(e)),
    i.cssMode && (e.onScroll = Rt.bind(e)),
    (e.onClick = Wt.bind(e)),
    (e.onLoad = Yt.bind(e)),
    ce || (t.addEventListener("touchstart", qt), (ce = !0)),
    Se(e, "on");
}
function Ut() {
  Se(this, "off");
}
const Kt = { attachEvents: Xt, detachEvents: Ut },
  pe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Zt() {
  const e = this,
    { realIndex: t, initialized: i, params: s, el: n } = e,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || e.originalParams,
    d = pe(e, s),
    h = pe(e, a),
    u = s.enabled;
  d && !h
    ? (n.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !d &&
      h &&
      (n.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && s.grid.fill === "column")) &&
        n.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((f) => {
      const g = s[f] && s[f].enabled,
        m = a[f] && a[f].enabled;
      g && !m && e[f].disable(), !g && m && e[f].enable();
    });
  const v = a.direction && a.direction !== s.direction,
    c = s.loop && (a.slidesPerView !== s.slidesPerView || v);
  v && i && e.changeDirection(), O(e.params, a);
  const p = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    u && !p ? e.disable() : !u && p && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    c && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", a);
}
function Jt(e, t = "window", i) {
  if (!e || (t === "container" && !i)) return;
  let s = !1;
  const n = A(),
    r = t === "window" ? n.innerHeight : i.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: r * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: d } = o[l];
    t === "window"
      ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a)
      : d <= i.clientWidth && (s = a);
  }
  return s || "max";
}
const Qt = { setBreakpoint: Zt, getBreakpoint: Jt };
function ei(e, t) {
  const i = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && i.push(t + n);
          })
        : typeof s == "string" && i.push(t + s);
    }),
    i
  );
}
function ti() {
  const e = this,
    { classNames: t, params: i, rtl: s, el: n, device: r } = e,
    o = ei(
      [
        "initialized",
        i.direction,
        { "free-mode": e.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  t.push(...o), n.classList.add(...t), e.emitContainerClasses();
}
function ii() {
  const e = this,
    { el: t, classNames: i } = e;
  t.classList.remove(...i), e.emitContainerClasses();
}
const si = { addClasses: ti, removeClasses: ii };
function ri() {
  const e = this,
    { isLocked: t, params: i } = e,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const n = e.slides.length - 1,
      r = e.slidesGrid[n] + e.slidesSizesGrid[n] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const ni = { checkOverflow: ri },
  ue = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ai(e, t) {
  return function (s = {}) {
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      O(t, s);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
        e[n] === !0 &&
        (e[n] = { auto: !0 }),
      !(n in e && "enabled" in r))
    ) {
      O(t, s);
      return;
    }
    e[n] === !0 && (e[n] = { enabled: !0 }),
      typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0),
      e[n] || (e[n] = { enabled: !1 }),
      O(t, s);
  };
}
const Q = {
    eventsEmitter: st,
    update: vt,
    translate: bt,
    transition: Et,
    slide: Ot,
    loop: Vt,
    grabCursor: Ht,
    events: Kt,
    breakpoints: Qt,
    checkOverflow: ni,
    classes: si,
  },
  ee = {};
class I {
  constructor(...t) {
    let i, s;
    t.length === 1 &&
    t[0].constructor &&
    Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
      ? (s = t[0])
      : ([i, s] = t),
      s || (s = {}),
      (s = O({}, s)),
      i && !s.el && (s.el = i);
    const n = V();
    if (
      s.el &&
      typeof s.el == "string" &&
      n.querySelectorAll(s.el).length > 1
    ) {
      const a = [];
      return (
        n.querySelectorAll(s.el).forEach((d) => {
          const h = O({}, s, { el: d });
          a.push(new I(h));
        }),
        a
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = be()),
      (r.device = Je({ userAgent: s.userAgent })),
      (r.browser = et()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
    const o = {};
    r.modules.forEach((a) => {
      a({
        params: s,
        swiper: r,
        extendParams: ai(s, o),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const l = O({}, ue, o);
    return (
      (r.params = O({}, l, ee, s)),
      (r.originalParams = O({}, r.params)),
      (r.passedParams = O({}, s)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((a) => {
          r.on(a, r.params.on[a]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: i,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: R(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit("_swiper"),
      r.params.init && r.init(),
      r
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: i, params: s } = t;
    t.slides = $(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, i) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * t + n;
    s.translateTo(o, typeof i > "u" ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(t) {
    const i = this;
    return i.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = [];
    t.slides.forEach((s) => {
      const n = t.getSlideClasses(s);
      i.push({ slideEl: s, classNames: n }), t.emit("_slideClass", s, n);
    }),
      t.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(t = "current", i = !1) {
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: d,
      } = s;
    let h = 1;
    if (n.centeredSlides) {
      let u = r[d].swiperSlideSize,
        v;
      for (let c = d + 1; c < r.length; c += 1)
        r[c] &&
          !v &&
          ((u += r[c].swiperSlideSize), (h += 1), u > a && (v = !0));
      for (let c = d - 1; c >= 0; c -= 1)
        r[c] &&
          !v &&
          ((u += r[c].swiperSlideSize), (h += 1), u > a && (v = !0));
    } else if (t === "current")
      for (let u = d + 1; u < r.length; u += 1)
        (i ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (h += 1);
    else for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < a && (h += 1);
    return h;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: i, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && U(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function n() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    t.params.freeMode && t.params.freeMode.enabled
      ? (n(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (r = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (r = t.slideTo(t.activeIndex, 0, !1, !0)),
        r || n()),
      s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, i = !0) {
    const s = this,
      n = s.params.direction;
    return (
      t || (t = n === "horizontal" ? "vertical" : "horizontal"),
      t === n ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        i && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const i = this;
    (i.rtl && t === "rtl") ||
      (!i.rtl && t === "ltr") ||
      ((i.rtl = t === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(t) {
    const i = this;
    if (i.mounted) return !0;
    let s = t || i.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = i), s.shadowEl && (i.isElement = !0);
    const n = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(n())
        : $(s, n())[0])();
    return (
      !o &&
        i.params.createElements &&
        ((o = ye("div", i.params.wrapperClass)),
        s.append(o),
        $(s, `.${i.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: o,
        slidesEl: i.isElement ? s : o,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || _(s, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || _(s, "direction") === "rtl"),
        wrongRTL: _(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const i = this;
    return (
      i.initialized ||
        i.mount(t) === !1 ||
        (i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled
          ? i.slideTo(
              i.params.initialSlide + i.virtual.slidesBefore,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            )
          : i.slideTo(
              i.params.initialSlide,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            ),
        i.params.loop && i.loopCreate(),
        i.attachEvents(),
        [...i.el.querySelectorAll('[loading="lazy"]')].forEach((n) => {
          n.complete
            ? U(i, n)
            : n.addEventListener("load", (r) => {
                U(i, r.target);
              });
        }),
        (i.initialized = !0),
        i.emit("init"),
        i.emit("afterInit")),
      i
    );
  }
  destroy(t = !0, i = !0) {
    const s = this,
      { params: n, el: r, wrapperEl: o, slides: l } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          r.removeAttribute("style"),
          o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                n.slideVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        t !== !1 && ((s.el.swiper = null), je(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    O(ee, t);
  }
  static get extendedDefaults() {
    return ee;
  }
  static get defaults() {
    return ue;
  }
  static installModule(t) {
    I.prototype.__modules__ || (I.prototype.__modules__ = []);
    const i = I.prototype.__modules__;
    typeof t == "function" && i.indexOf(t) < 0 && i.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((i) => I.installModule(i)), I)
      : (I.installModule(t), I);
  }
}
Object.keys(Q).forEach((e) => {
  Object.keys(Q[e]).forEach((t) => {
    I.prototype[t] = Q[e][t];
  });
});
I.use([tt, it]);
function li(e, t, i, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((n) => {
        if (!i[n] && i.auto === !0) {
          let r = $(e.el, `.${s[n]}`)[0];
          r || ((r = ye("div", s[n])), (r.className = s[n]), e.el.append(r)),
            (i[n] = r),
            (t[n] = r);
        }
      }),
    i
  );
}
function Te({ swiper: e, extendParams: t, on: i, emit: s }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const n = (p) => (Array.isArray(p) || (p = [p].filter((f) => !!f)), p);
  function r(p) {
    let f;
    return p &&
      typeof p == "string" &&
      e.isElement &&
      ((f = e.el.shadowRoot.querySelector(p)), f)
      ? f
      : (p &&
          (typeof p == "string" && (f = [...document.querySelectorAll(p)]),
          e.params.uniqueNavElements &&
            typeof p == "string" &&
            f.length > 1 &&
            e.el.querySelectorAll(p).length === 1 &&
            (f = e.el.querySelector(p))),
        p && !f ? p : f);
  }
  function o(p, f) {
    const g = e.params.navigation;
    (p = n(p)),
      p.forEach((m) => {
        m &&
          (m.classList[f ? "add" : "remove"](...g.disabledClass.split(" ")),
          m.tagName === "BUTTON" && (m.disabled = f),
          e.params.watchOverflow &&
            e.enabled &&
            m.classList[e.isLocked ? "add" : "remove"](g.lockClass));
      });
  }
  function l() {
    const { nextEl: p, prevEl: f } = e.navigation;
    if (e.params.loop) {
      o(f, !1), o(p, !1);
      return;
    }
    o(f, e.isBeginning && !e.params.rewind), o(p, e.isEnd && !e.params.rewind);
  }
  function a(p) {
    p.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), s("navigationPrev"));
  }
  function d(p) {
    p.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), s("navigationNext"));
  }
  function h() {
    const p = e.params.navigation;
    if (
      ((e.params.navigation = li(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(p.nextEl || p.prevEl))
    )
      return;
    let f = r(p.nextEl),
      g = r(p.prevEl);
    Object.assign(e.navigation, { nextEl: f, prevEl: g }),
      (f = n(f)),
      (g = n(g));
    const m = (b, w) => {
      b && b.addEventListener("click", w === "next" ? d : a),
        !e.enabled && b && b.classList.add(...p.lockClass.split(" "));
    };
    f.forEach((b) => m(b, "next")), g.forEach((b) => m(b, "prev"));
  }
  function u() {
    let { nextEl: p, prevEl: f } = e.navigation;
    (p = n(p)), (f = n(f));
    const g = (m, b) => {
      m.removeEventListener("click", b === "next" ? d : a),
        m.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    p.forEach((m) => g(m, "next")), f.forEach((m) => g(m, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? c() : (h(), l());
  }),
    i("toEdge fromEdge lock unlock", () => {
      l();
    }),
    i("destroy", () => {
      u();
    }),
    i("enable disable", () => {
      let { nextEl: p, prevEl: f } = e.navigation;
      (p = n(p)),
        (f = n(f)),
        [...p, ...f]
          .filter((g) => !!g)
          .forEach((g) =>
            g.classList[e.enabled ? "remove" : "add"](
              e.params.navigation.lockClass
            )
          );
    }),
    i("click", (p, f) => {
      let { nextEl: g, prevEl: m } = e.navigation;
      (g = n(g)), (m = n(m));
      const b = f.target;
      if (e.params.navigation.hideOnClick && !m.includes(b) && !g.includes(b)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === b || e.pagination.el.contains(b))
        )
          return;
        let w;
        g.length
          ? (w = g[0].classList.contains(e.params.navigation.hiddenClass))
          : m.length &&
            (w = m[0].classList.contains(e.params.navigation.hiddenClass)),
          s(w === !0 ? "navigationShow" : "navigationHide"),
          [...g, ...m]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const v = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        h(),
        l();
    },
    c = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        u();
    };
  Object.assign(e.navigation, {
    enable: v,
    disable: c,
    update: l,
    init: h,
    destroy: u,
  });
}
function Ee({ swiper: e, extendParams: t, on: i, emit: s, params: n }) {
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let r,
    o,
    l = n && n.autoplay ? n.autoplay.delay : 3e3,
    a = n && n.autoplay ? n.autoplay.delay : 3e3,
    d,
    h = new Date().getTime,
    u,
    v,
    c,
    p,
    f,
    g;
  function m(C) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (C.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", m), L()));
  }
  const b = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (u = !0) : u && ((a = d), (u = !1));
      const C = e.autoplay.paused ? d : h + a - new Date().getTime();
      (e.autoplay.timeLeft = C),
        s("autoplayTimeLeft", C, C / l),
        (o = requestAnimationFrame(() => {
          b();
        }));
    },
    w = () => {
      let C;
      return (
        e.virtual && e.params.virtual.enabled
          ? (C = e.slides.filter((k) =>
              k.classList.contains("swiper-slide-active")
            )[0])
          : (C = e.slides[e.activeIndex]),
        C ? parseInt(C.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    x = (C) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(o), b();
      let G = typeof C > "u" ? e.params.autoplay.delay : C;
      (l = e.params.autoplay.delay), (a = e.params.autoplay.delay);
      const k = w();
      !Number.isNaN(k) &&
        k > 0 &&
        typeof C > "u" &&
        ((G = k), (l = k), (a = k)),
        (d = G);
      const H = e.params.speed,
        W = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(H, !0, !0), s("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, H, !0, !0), s("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(H, !0, !0), s("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, H, !0, !0), s("autoplay")),
            e.params.cssMode &&
              ((h = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        G > 0
          ? (clearTimeout(r),
            (r = setTimeout(() => {
              W();
            }, G)))
          : requestAnimationFrame(() => {
              W();
            }),
        G
      );
    },
    E = () => {
      (e.autoplay.running = !0), x(), s("autoplayStart");
    },
    S = () => {
      (e.autoplay.running = !1),
        clearTimeout(r),
        cancelAnimationFrame(o),
        s("autoplayStop");
    },
    P = (C, G) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(r), C || (g = !0);
      const k = () => {
        s("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", m)
            : L();
      };
      if (((e.autoplay.paused = !0), G)) {
        f && (d = e.params.autoplay.delay), (f = !1), k();
        return;
      }
      (d = (d || e.params.autoplay.delay) - (new Date().getTime() - h)),
        !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), k());
    },
    L = () => {
      (e.isEnd && d < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((h = new Date().getTime()),
        g ? ((g = !1), x(d)) : x(),
        (e.autoplay.paused = !1),
        s("autoplayResume"));
    },
    M = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const C = V();
      C.visibilityState === "hidden" && ((g = !0), P(!0)),
        C.visibilityState === "visible" && L();
    },
    Y = (C) => {
      C.pointerType === "mouse" && ((g = !0), P(!0));
    },
    y = (C) => {
      C.pointerType === "mouse" && e.autoplay.paused && L();
    },
    T = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", Y),
        e.el.addEventListener("pointerleave", y));
    },
    z = () => {
      e.el.removeEventListener("pointerenter", Y),
        e.el.removeEventListener("pointerleave", y);
    },
    D = () => {
      V().addEventListener("visibilitychange", M);
    },
    j = () => {
      V().removeEventListener("visibilitychange", M);
    };
  i("init", () => {
    e.params.autoplay.enabled && (T(), D(), (h = new Date().getTime()), E());
  }),
    i("destroy", () => {
      z(), j(), e.autoplay.running && S();
    }),
    i("beforeTransitionStart", (C, G, k) => {
      e.destroyed ||
        !e.autoplay.running ||
        (k || !e.params.autoplay.disableOnInteraction ? P(!0, !0) : S());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          S();
          return;
        }
        (v = !0),
          (c = !1),
          (g = !1),
          (p = setTimeout(() => {
            (g = !0), (c = !0), P(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !v)) {
        if (
          (clearTimeout(p),
          clearTimeout(r),
          e.params.autoplay.disableOnInteraction)
        ) {
          (c = !1), (v = !1);
          return;
        }
        c && e.params.cssMode && L(), (c = !1), (v = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (f = !0);
    }),
    Object.assign(e.autoplay, { start: E, stop: S, pause: P, resume: L });
}
new I(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Te, Ee],
  autoplay: { delay: 5e3, disableOnInteraction: !1 },
  loop: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
new I(".mySwiper-1", {
  slidesPerView: 5,
  spaceBetween: 70,
  modules: [Te, Ee],
  loop: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    1024: { slidesPerView: 4, spaceBetween: 50 },
    1536: { slidesPerView: 5, spaceBetween: 50 },
    1792: { slidesPerView: 6, spaceBetween: 50 },
  },
});
