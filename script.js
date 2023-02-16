(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) r(t);
  new MutationObserver((t) => {
    for (const a of t)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(t) {
    const a = {};
    return (
      t.integrity && (a.integrity = t.integrity),
      t.referrerpolicy && (a.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(t) {
    if (t.ep) return;
    t.ep = !0;
    const a = s(t);
    fetch(t.href, a);
  }
})();
let y = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
const u = `
<div class="z-[1000] fixed overflow-hidden w-full h-full  bg-black flex items-center justify-center ">
    <img class="animate-spin w-20" src="${y}https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Preloader">
</div>
`;
document.getElementById("loader").innerHTML = u;
var m = document.getElementById("loader");
window.addEventListener("load", function () {
  m.style.display = "none";
});
const g = `

<div class="flex space-x-20">
    <a href="/">
        <img width="100" src="/assets/netflix.svg" alt="Logo-Netflix">
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
    <img class="w-7 rounded-md " src="/assets/profile-pic.png" alt="Swastik Dan Profile Image">
</div>


`;
document.getElementById("header").innerHTML = g;
const n = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 0 ? n.classList.add("scroll") : n.classList.remove("scroll");
});
let c,
  p = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
fetch("/src/json/movies-db.json")
  .then((i) => i.json())
  .then((i) => {
    (c = i),
      l("movie-1"),
      l("movie-2"),
      l("movie-3"),
      l("movie-4"),
      l("movie-5"),
      l("movie-6");
  });
function l(i) {
  const e = c[i],
    s = document.getElementById(`hero-slider-${i.split("-")[1]}`);
  var r;
  i === "movie-1" ? (r = "eger") : (r = "lazy"),
    (s.innerHTML = `

  <div class=" relative float-left w-full">
  <img class="pl-20 bg-gray-800" src="${
    p + e.imagemain
  }" class=" h-[600px] w-full" alt="${e.title}" loading="${r}" />
  <div class="card-text pt-32 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white  "
      style="background: rgb(0,0,0);
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.891281512605042) 40%, rgba(0,0,0,0.8044467787114846) 50%, rgba(0,0,0,0.6980042016806722) 60%, rgba(0,0,0,0.6027661064425771) 70%, rgba(0,0,0,0.3982843137254902) 80%, rgba(0,0,0,0.19940476190476186) 90%, rgba(0,0,0,0) 100%);">
      <img width="300px" src="${p + e.imagetext}" alt="${
      e.title
    }" loading="${r}"/>
      <div class="space-y-4">
          <span class="text-[28px] font-semibold">${e.title}</span> <br>
          <p class="text-[14px] font-medium text-gray-400">
              <span>${e.releseyear} &nbsp;|&nbsp;&nbsp;</span>
              <span class="ring-1 ring-gray-400 px-2 ">&nbsp;${
                e.maturityrating
              } </span>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${e.runtime}&nbsp;|&nbsp;</span>
              <span>&nbsp;${e.movietype}</span>
          </p>
          <p>${e.description}</p>
          <p>
              <span class="text-gray-400">Starring:</span>
              <span>${e.cast}</span>
          </p>
      </div>
      <div class="buttons text-[16px] flex space-x-10">
          <a href="#_" onclick="openSlide(${e.number})"
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
          <a href="${e.pagelink}" data-tooltip="Add to Watchlist"
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
const f = `
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
document.getElementById("sliderDisplay").innerHTML = f;
const b = `
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
document.getElementById("footer").innerHTML = b;
let v,
  x = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
fetch("/src/json/movies-db.json")
  .then((i) => i.json())
  .then((i) => {
    v = i;
    for (let e = 7; e <= 38; e++) {
      const s = `movie-${e}`,
        r = z(s);
      console.log(r);
    }
  });
function z(i) {
  const e = v[i],
    s = document.getElementById(`card-${i.split("-")[1]}`);
  s.innerHTML = `

    <div class="mt-5 pl-9"> 

<div class=" card container relative w-[300px]  items-center duration-150 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">
  <img width="300" class="block rounded-xl" src="${x + e.cardimage}" alt="${
    e.title
  }" loading="lazy" />
  <div class="overlay absolute bottom-0 flex w-[300px] justify-between space-y-3 bg-clip-padding px-4 py-3  text-white opacity-0 ease-in-out">
    <div class=" description space-y-1">
      <span class="text-[16px]  text-white">${e.title}</span> <br />
      <p class="text-[8px] text-white">
        <span>${e.releseyear} &nbsp;|&nbsp;&nbsp;</span>
        <span class="p-[1px] ring-1 ring-white">&nbsp;${
          e.maturityrating
        } </span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${e.runtime}&nbsp;|&nbsp;</span>
        <span>&nbsp;${e.movietype}</span>
      </p>
    </div>
    <div class="buttons flex space-x-1">
<button class="" onclick="openSlide(${e.number})">
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<a href="${e.pagelink}">
<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z" fill="white"/>
</svg>
</a>
    </div>
  </div>
</div>
<h1 class="  text-white   text-[14px] font-medium mt-2 pl-5 ">${e.title}
</h1>
</div>

`;
}
const k = `
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
  E = `
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
  `,
  C = `
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
  `,
  $ = `
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
document.getElementById("carasol-content-1").innerHTML = k;
document.getElementById("carasol-content-2").innerHTML = E;
document.getElementById("carasol-content-3").innerHTML = C;
document.getElementById("carasol-content-4").innerHTML = $;
function L(i) {
  var e = document.createElement("iframe");
  e.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + i.dataset.id + "?autoplay=1&rel=0"
  ),
    e.setAttribute("frameborder", "0"),
    e.setAttribute("allowfullscreen", "1"),
    e.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ),
    i.parentNode.replaceChild(e, i);
}
function M() {
  for (
    var i = document.getElementsByClassName("youtube-player"), e = 0;
    e < i.length;
    e++
  ) {
    var s = i[e].dataset.id,
      r = document.createElement("div");
    r.setAttribute("data-id", s);
    var t = document.createElement("img");
    (t.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", s)),
      r.appendChild(t);
    var a = document.createElement("div");
    a.setAttribute("class", "play"),
      r.appendChild(a),
      (r.onclick = function () {
        L(this);
      }),
      i[e].appendChild(r);
  }
}
document.addEventListener("DOMContentLoaded", M);
let w;
fetch("/src/json/video-id.json")
  .then((i) => i.json())
  .then((i) => {
    w = i;
    for (let e = 1; e <= 38; e++) {
      const s = `video-${e}`,
        r = I(s);
      console.log(r);
    }
  });
function I(i) {
  const e = w[i],
    s = document.getElementById(`popup-${i.split("-")[1]}`);
  s.innerHTML = `

  <span class="close" onclick="closeSlide(${e.vno})">&times;</span>
  <lite-youtube class="popup-content" videoid="${e.videoId}" style="background-image: url('https://i.ytimg.com/vi/${e.videoId}/maxresdefault.jpg');"></lite-youtube>
`;
}
const S = 38;
let h = "";
for (let i = 1; i <= S; i++) h += `<div id="popup-${i}" class="popup"></div>`;
document.getElementById("video-dispaly").innerHTML = h;
class d extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    let e = this.querySelector(".lty-playbtn");
    if (
      ((this.playLabel =
        (e && e.textContent.trim()) ||
        this.getAttribute("playlabel") ||
        "Play"),
      this.style.backgroundImage ||
        (this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),
      e ||
        ((e = document.createElement("button")),
        (e.type = "button"),
        e.classList.add("lty-playbtn"),
        this.append(e)),
      !e.textContent)
    ) {
      const s = document.createElement("span");
      (s.className = "lyt-visually-hidden"),
        (s.textContent = this.playLabel),
        e.append(s);
    }
    e.removeAttribute("href"),
      this.addEventListener("pointerover", d.warmConnections, { once: !0 }),
      this.addEventListener("click", this.addIframe),
      (this.needsYTApiForAutoplay =
        navigator.vendor.includes("Apple") ||
        navigator.userAgent.includes("Mobi"));
  }
  static addPrefetch(e, s, r) {
    const t = document.createElement("link");
    (t.rel = e), (t.href = s), r && (t.as = r), document.head.append(t);
  }
  static warmConnections() {
    d.preconnected ||
      (d.addPrefetch("preconnect", "https://www.youtube-nocookie.com"),
      d.addPrefetch("preconnect", "https://www.google.com"),
      d.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"),
      d.addPrefetch("preconnect", "https://static.doubleclick.net"),
      (d.preconnected = !0));
  }
  fetchYTPlayerApi() {
    window.YT ||
      (window.YT && window.YT.Player) ||
      (this.ytApiPromise = new Promise((e, s) => {
        var r = document.createElement("script");
        (r.src = "https://www.youtube.com/iframe_api"),
          (r.async = !0),
          (r.onload = (t) => {
            YT.ready(e);
          }),
          (r.onerror = s),
          this.append(r);
      }));
  }
  async addYTPlayerIframe(e) {
    this.fetchYTPlayerApi(), await this.ytApiPromise;
    const s = document.createElement("div");
    this.append(s);
    const r = Object.fromEntries(e.entries());
    new YT.Player(s, {
      width: "100%",
      videoId: this.videoId,
      playerVars: r,
      events: {
        onReady: (t) => {
          t.target.playVideo();
        },
      },
    });
  }
  async addIframe() {
    if (this.classList.contains("lyt-activated")) return;
    this.classList.add("lyt-activated");
    const e = new URLSearchParams(this.getAttribute("params") || []);
    if (
      (e.append("autoplay", "1"),
      e.append("playsinline", "1"),
      this.needsYTApiForAutoplay)
    )
      return this.addYTPlayerIframe(e);
    const s = document.createElement("iframe");
    (s.width = 560),
      (s.height = 315),
      (s.title = this.playLabel),
      (s.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
      (s.allowFullscreen = !0),
      (s.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        this.videoId
      )}?${e.toString()}`),
      this.append(s),
      s.focus();
  }
}
customElements.define("lite-youtube", d);
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: { delay: 5e3, disableOnInteraction: !1 },
  loop: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
new Swiper(".mySwiper-1", {
  slidesPerView: 5,
  spaceBetween: 70,
  loop: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
new Swiper(".mySwiper-2", {
  slidesPerView: 5,
  spaceBetween: 70,
  loop: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
