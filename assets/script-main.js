(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
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
    <img class="animate-spin w-20" src="https://res.cloudinary.com/demo/image/fetch/f_auto,q_10/https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Preloader">
</div>
`;
document.getElementById("loader").innerHTML = Me;
var Pe = document.getElementById("loader");
window.addEventListener("load", function () {
  Pe.style.display = "none";
});
const ke = `

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
document.getElementById("header").innerHTML = ke;
const te = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? te.classList.add("scroll")
    : te.classList.remove("scroll");
});
let ce,
  ie = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
fetch("/assets/movies-db.json")
  .then((t) => t.json())
  .then((t) => {
    (ce = t),
      $("movie-1"),
      $("movie-2"),
      $("movie-3"),
      $("movie-4"),
      $("movie-5"),
      $("movie-6");
  });
function $(t) {
  const e = ce[t],
    i = document.getElementById(`hero-slider-${t.split("-")[1]}`);
  var s;
  t === "movie-1" ? (s = "eger") : (s = "lazy"),
    (i.innerHTML = `

  <div class=" relative float-left w-full">
  <img class="pl-20 bg-gray-800" src="${
    ie + e.imagemain
  }" class=" h-[600px] w-full lazy" alt="${e.title}"  />
  <div class="card-text pt-32 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white  "
      style="background: rgb(0,0,0);
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.891281512605042) 40%, rgba(0,0,0,0.8044467787114846) 50%, rgba(0,0,0,0.6980042016806722) 60%, rgba(0,0,0,0.6027661064425771) 70%, rgba(0,0,0,0.3982843137254902) 80%, rgba(0,0,0,0.19940476190476186) 90%, rgba(0,0,0,0) 100%);">
      <img width="300px" src="${ie + e.imagetext}" alt="${
      e.title
    }" loading="${s}"/>
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
          <a href="${e.pagelink}"
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
const Le = `
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
document.getElementById("sliderDisplay").innerHTML = Le;
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
let pe,
  Ae = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
fetch("/assets/movies-db.json")
  .then((t) => t.json())
  .then((t) => {
    pe = t;
    for (let e = 7; e <= 38; e++) {
      const i = `movie-${e}`,
        s = Oe(i);
      console.log(s);
    }
  });

const lazyImages = document.querySelectorAll(".lazy");

const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.remove("lazy");
      lazyObserver.unobserve(entry.target);
    }
  });
});

lazyImages.forEach((image) => {
  lazyObserver.observe(image);
});

function Oe(t) {
  const e = pe[t],
    i = document.getElementById(`card-${t.split("-")[1]}`);
  i.innerHTML = `

    <div class="mt-5 pl-9"> 

<div class=" card container relative w-[300px]  items-center duration-150 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">
  <img width="300" class="block rounded-xl lazy" src="${
    Ae + e.cardimage
  }" alt="${e.title}"  />
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
<a href="${e.pagelink}" target="_blank" >
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
const Ge = `
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
  Ve = `
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
  Be = `
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
  $e = `
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
document.getElementById("carasol-content-1").innerHTML = Ge;
document.getElementById("carasol-content-2").innerHTML = Ve;
document.getElementById("carasol-content-3").innerHTML = Be;
document.getElementById("carasol-content-4").innerHTML = $e;
function De(t) {
  var e = document.createElement("iframe");
  e.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + t.dataset.id + "?autoplay=1&rel=0"
  ),
    e.setAttribute("frameborder", "0"),
    e.setAttribute("allowfullscreen", "1"),
    e.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ),
    t.parentNode.replaceChild(e, t);
}
function He() {
  for (
    var t = document.getElementsByClassName("youtube-player"), e = 0;
    e < t.length;
    e++
  ) {
    var i = t[e].dataset.id,
      s = document.createElement("div");
    s.setAttribute("data-id", i);
    var n = document.createElement("img");
    (n.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", i)),
      s.appendChild(n);
    var r = document.createElement("div");
    r.setAttribute("class", "play"),
      s.appendChild(r),
      (s.onclick = function () {
        De(this);
      }),
      t[e].appendChild(s);
  }
}
document.addEventListener("DOMContentLoaded", He);
let ue;
fetch("/assets/video-id.json")
  .then((t) => t.json())
  .then((t) => {
    ue = t;
    for (let e = 1; e <= 38; e++) {
      const i = `video-${e}`,
        s = _e(i);
      console.log(s);
    }
  });
function _e(t) {
  const e = ue[t],
    i = document.getElementById(`popup-${t.split("-")[1]}`);
  i.innerHTML = `

  <span class="close" onclick="closeSlide(${e.vno})">&times;</span>
  <lite-youtube class="popup-content" videoid="${e.videoId}" style="background-image: url('https://i.ytimg.com/vi/${e.videoId}/maxresdefault.jpg');"></lite-youtube>
`;
}
const Ne = 38;
let fe = "";
for (let t = 1; t <= Ne; t++) fe += `<div id="popup-${t}" class="popup"></div>`;
document.getElementById("video-dispaly").innerHTML = fe;
class O extends HTMLElement {
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
      const i = document.createElement("span");
      (i.className = "lyt-visually-hidden"),
        (i.textContent = this.playLabel),
        e.append(i);
    }
    e.removeAttribute("href"),
      this.addEventListener("pointerover", O.warmConnections, { once: !0 }),
      this.addEventListener("click", this.addIframe),
      (this.needsYTApiForAutoplay =
        navigator.vendor.includes("Apple") ||
        navigator.userAgent.includes("Mobi"));
  }
  static addPrefetch(e, i, s) {
    const n = document.createElement("link");
    (n.rel = e), (n.href = i), s && (n.as = s), document.head.append(n);
  }
  static warmConnections() {
    O.preconnected ||
      (O.addPrefetch("preconnect", "https://www.youtube-nocookie.com"),
      O.addPrefetch("preconnect", "https://www.google.com"),
      O.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"),
      O.addPrefetch("preconnect", "https://static.doubleclick.net"),
      (O.preconnected = !0));
  }
  fetchYTPlayerApi() {
    window.YT ||
      (window.YT && window.YT.Player) ||
      (this.ytApiPromise = new Promise((e, i) => {
        var s = document.createElement("script");
        (s.src = "https://www.youtube.com/iframe_api"),
          (s.async = !0),
          (s.onload = (n) => {
            YT.ready(e);
          }),
          (s.onerror = i),
          this.append(s);
      }));
  }
  async addYTPlayerIframe(e) {
    this.fetchYTPlayerApi(), await this.ytApiPromise;
    const i = document.createElement("div");
    this.append(i);
    const s = Object.fromEntries(e.entries());
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
    const e = new URLSearchParams(this.getAttribute("params") || []);
    if (
      (e.append("autoplay", "1"),
      e.append("playsinline", "1"),
      this.needsYTApiForAutoplay)
    )
      return this.addYTPlayerIframe(e);
    const i = document.createElement("iframe");
    (i.width = 560),
      (i.height = 315),
      (i.title = this.playLabel),
      (i.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
      (i.allowFullscreen = !0),
      (i.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        this.videoId
      )}?${e.toString()}`),
      this.append(i),
      i.focus();
  }
}
customElements.define("lite-youtube", O);
function se(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function K(t = {}, e = {}) {
  Object.keys(e).forEach((i) => {
    typeof t[i] > "u"
      ? (t[i] = e[i])
      : se(e[i]) && se(t[i]) && Object.keys(e[i]).length > 0 && K(t[i], e[i]);
  });
}
const he = {
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
function B() {
  const t = typeof document < "u" ? document : {};
  return K(t, he), t;
}
const Fe = {
  document: he,
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
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function L() {
  const t = typeof window < "u" ? window : {};
  return K(t, Fe), t;
}
function je(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {}
    try {
      delete e[i];
    } catch {}
  });
}
function U(t, e = 0) {
  return setTimeout(t, e);
}
function H() {
  return Date.now();
}
function We(t) {
  const e = L();
  let i;
  return (
    e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
  );
}
function Re(t, e = "x") {
  const i = L();
  let s, n, r;
  const o = We(t);
  return (
    i.WebKitCSSMatrix
      ? ((n = o.transform || o.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((a) => a.replace(",", "."))
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
    e === "x" &&
      (i.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
        ? (n = parseFloat(s[12]))
        : (n = parseFloat(s[4]))),
    e === "y" &&
      (i.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
        ? (n = parseFloat(s[13]))
        : (n = parseFloat(s[5]))),
    n || 0
  );
}
function _(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function Ye(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function k(...t) {
  const e = Object(t[0]),
    i = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < t.length; s += 1) {
    const n = t[s];
    if (n != null && !Ye(n)) {
      const r = Object.keys(Object(n)).filter((o) => i.indexOf(o) < 0);
      for (let o = 0, a = r.length; o < a; o += 1) {
        const l = r[o],
          d = Object.getOwnPropertyDescriptor(n, l);
        d !== void 0 &&
          d.enumerable &&
          (_(e[l]) && _(n[l])
            ? n[l].__swiper__
              ? (e[l] = n[l])
              : k(e[l], n[l])
            : !_(e[l]) && _(n[l])
            ? ((e[l] = {}), n[l].__swiper__ ? (e[l] = n[l]) : k(e[l], n[l]))
            : (e[l] = n[l]));
      }
    }
  }
  return e;
}
function N(t, e, i) {
  t.style.setProperty(e, i);
}
function ve({ swiper: t, targetPosition: e, side: i }) {
  const s = L(),
    n = -t.translate;
  let r = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID);
  const l = e > n ? "next" : "prev",
    d = (u, h) => (l === "next" && u >= h) || (l === "prev" && u <= h),
    v = () => {
      (o = new Date().getTime()), r === null && (r = o);
      const u = Math.max(Math.min((o - r) / a, 1), 0),
        h = 0.5 - Math.cos(u * Math.PI) / 2;
      let c = n + h * (e - n);
      if ((d(c, e) && (c = e), t.wrapperEl.scrollTo({ [i]: c }), d(c, e))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: c });
          }),
          s.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = s.requestAnimationFrame(v);
    };
  v();
}
function G(t, e = "") {
  return [...t.children].filter((i) => i.matches(e));
}
function me(t, e = []) {
  const i = document.createElement(t);
  return i.classList.add(...(Array.isArray(e) ? e : [e])), i;
}
function qe(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
  }
  return i;
}
function Xe(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
  }
  return i;
}
function V(t, e) {
  return L().getComputedStyle(t, null).getPropertyValue(e);
}
function D(t) {
  let e = t,
    i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function Ue(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; ) e ? s.matches(e) && i.push(s) : i.push(s), (s = s.parentElement);
  return i;
}
function re(t, e, i) {
  const s = L();
  return i
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : t.offsetWidth;
}
let W;
function Ke() {
  const t = L(),
    e = B();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function ge() {
  return W || (W = Ke()), W;
}
let R;
function Ze({ userAgent: t } = {}) {
  const e = ge(),
    i = L(),
    s = i.navigator.platform,
    n = t || i.navigator.userAgent,
    r = { ios: !1, android: !1 },
    o = i.screen.width,
    a = i.screen.height,
    l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const v = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = s === "Win32";
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
      e.touch &&
      p.indexOf(`${o}x${a}`) >= 0 &&
      ((d = n.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (c = !1)),
    l && !h && ((r.os = "android"), (r.android = !0)),
    (d || u || v) && ((r.os = "ios"), (r.ios = !0)),
    r
  );
}
function Je(t = {}) {
  return R || (R = Ze(t)), R;
}
let Y;
function Qe() {
  const t = L();
  let e = !1;
  function i() {
    const s = t.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (i()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = n < 16 || (n === 16 && r < 2);
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
  };
}
function et() {
  return Y || (Y = Qe()), Y;
}
function tt({ swiper: t, on: e, emit: i }) {
  const s = L();
  let n = null,
    r = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((n = new ResizeObserver((v) => {
          r = s.requestAnimationFrame(() => {
            const { width: u, height: h } = t;
            let c = u,
              p = h;
            v.forEach(({ contentBoxSize: f, contentRect: g, target: m }) => {
              (m && m !== t.el) ||
                ((c = g ? g.width : (f[0] || f).inlineSize),
                (p = g ? g.height : (f[0] || f).blockSize));
            }),
              (c !== u || p !== h) && o();
          });
        })),
        n.observe(t.el));
    },
    l = () => {
      r && s.cancelAnimationFrame(r),
        n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
    },
    d = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange");
    };
  e("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      a();
      return;
    }
    s.addEventListener("resize", o), s.addEventListener("orientationchange", d);
  }),
    e("destroy", () => {
      l(),
        s.removeEventListener("resize", o),
        s.removeEventListener("orientationchange", d);
    });
}
function it({ swiper: t, extendParams: e, on: i, emit: s }) {
  const n = [],
    r = L(),
    o = (d, v = {}) => {
      const u = r.MutationObserver || r.WebkitMutationObserver,
        h = new u((c) => {
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
      h.observe(d, {
        attributes: typeof v.attributes > "u" ? !0 : v.attributes,
        childList: typeof v.childList > "u" ? !0 : v.childList,
        characterData: typeof v.characterData > "u" ? !0 : v.characterData,
      }),
        n.push(h);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = Ue(t.el);
          for (let v = 0; v < d.length; v += 1) o(d[v]);
        }
        o(t.el, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    l = () => {
      n.forEach((d) => {
        d.disconnect();
      }),
        n.splice(0, n.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", a),
    i("destroy", l);
}
const st = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = i ? "unshift" : "push";
    return (
      t.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](e);
      }),
      s
    );
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function n(...r) {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(s, r);
    }
    return (n.__emitterProxy = e), s.on(t, n, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        t.split(" ").forEach((s) => {
          typeof e > "u"
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((n, r) => {
                (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                  i.eventsListeners[s].splice(r, 1);
              });
        }),
      i
    );
  },
  emit(...t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let i, s, n;
    return (
      typeof t[0] == "string" || Array.isArray(t[0])
        ? ((i = t[0]), (s = t.slice(1, t.length)), (n = e))
        : ((i = t[0].events), (s = t[0].data), (n = t[0].context || e)),
      s.unshift(n),
      (Array.isArray(i) ? i : i.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((a) => {
            a.apply(n, [o, ...s]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((a) => {
              a.apply(n, s);
            });
      }),
      e
    );
  },
};
function rt() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (i = t.params.height)
      : (i = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(V(s, "padding-left") || 0, 10) -
        parseInt(V(s, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(V(s, "padding-top") || 0, 10) -
        parseInt(V(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i,
      }));
}
function nt() {
  const t = this;
  function e(y) {
    return t.isHorizontal()
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
  function i(y, S) {
    return parseFloat(y.getPropertyValue(e(S)) || 0);
  }
  const s = t.params,
    { wrapperEl: n, slidesEl: r, size: o, rtlTranslate: a, wrongRTL: l } = t,
    d = t.virtual && s.virtual.enabled,
    v = d ? t.virtual.slides.length : t.slides.length,
    u = G(r, `.${t.params.slideClass}, swiper-slide`),
    h = d ? t.virtual.slides.length : u.length;
  let c = [];
  const p = [],
    f = [];
  let g = s.slidesOffsetBefore;
  typeof g == "function" && (g = s.slidesOffsetBefore.call(t));
  let m = s.slidesOffsetAfter;
  typeof m == "function" && (m = s.slidesOffsetAfter.call(t));
  const b = t.snapGrid.length,
    w = t.slidesGrid.length;
  let x = s.spaceBetween,
    E = -g,
    T = 0,
    M = 0;
  if (typeof o > "u") return;
  typeof x == "string" &&
    x.indexOf("%") >= 0 &&
    (x = (parseFloat(x.replace("%", "")) / 100) * o),
    (t.virtualSize = -x),
    u.forEach((y) => {
      a ? (y.style.marginLeft = "") : (y.style.marginRight = ""),
        (y.style.marginBottom = ""),
        (y.style.marginTop = "");
    }),
    s.centeredSlides &&
      s.cssMode &&
      (N(n, "--swiper-centered-offset-before", ""),
      N(n, "--swiper-centered-offset-after", ""));
  const A = s.grid && s.grid.rows > 1 && t.grid;
  A && t.grid.initSlides(h);
  let C;
  const xe =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (y) => typeof s.breakpoints[y].slidesPerView < "u"
    ).length > 0;
  for (let y = 0; y < h; y += 1) {
    C = 0;
    let S;
    if (
      (u[y] && (S = u[y]),
      A && t.grid.updateSlide(y, S, h, e),
      !(u[y] && V(S, "display") === "none"))
    ) {
      if (s.slidesPerView === "auto") {
        xe && (u[y].style[e("width")] = "");
        const z = getComputedStyle(S),
          I = S.style.transform,
          j = S.style.webkitTransform;
        if (
          (I && (S.style.transform = "none"),
          j && (S.style.webkitTransform = "none"),
          s.roundLengths)
        )
          C = t.isHorizontal() ? re(S, "width", !0) : re(S, "height", !0);
        else {
          const Z = i(z, "width"),
            Se = i(z, "padding-left"),
            Te = i(z, "padding-right"),
            J = i(z, "margin-left"),
            Q = i(z, "margin-right"),
            ee = z.getPropertyValue("box-sizing");
          if (ee && ee === "border-box") C = Z + J + Q;
          else {
            const { clientWidth: Ee, offsetWidth: ze } = S;
            C = Z + Se + Te + J + Q + (ze - Ee);
          }
        }
        I && (S.style.transform = I),
          j && (S.style.webkitTransform = j),
          s.roundLengths && (C = Math.floor(C));
      } else
        (C = (o - (s.slidesPerView - 1) * x) / s.slidesPerView),
          s.roundLengths && (C = Math.floor(C)),
          u[y] && (u[y].style[e("width")] = `${C}px`);
      u[y] && (u[y].swiperSlideSize = C),
        f.push(C),
        s.centeredSlides
          ? ((E = E + C / 2 + T / 2 + x),
            T === 0 && y !== 0 && (E = E - o / 2 - x),
            y === 0 && (E = E - o / 2 - x),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            s.roundLengths && (E = Math.floor(E)),
            M % s.slidesPerGroup === 0 && c.push(E),
            p.push(E))
          : (s.roundLengths && (E = Math.floor(E)),
            (M - Math.min(t.params.slidesPerGroupSkip, M)) %
              t.params.slidesPerGroup ===
              0 && c.push(E),
            p.push(E),
            (E = E + C + x)),
        (t.virtualSize += C + x),
        (T = C),
        (M += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, o) + m),
    a &&
      l &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      (n.style.width = `${t.virtualSize + s.spaceBetween}px`),
    s.setWrapperSize &&
      (n.style[e("width")] = `${t.virtualSize + s.spaceBetween}px`),
    A && t.grid.updateWrapperSize(C, c, e),
    !s.centeredSlides)
  ) {
    const y = [];
    for (let S = 0; S < c.length; S += 1) {
      let z = c[S];
      s.roundLengths && (z = Math.floor(z)),
        c[S] <= t.virtualSize - o && y.push(z);
    }
    (c = y),
      Math.floor(t.virtualSize - o) - Math.floor(c[c.length - 1]) > 1 &&
        c.push(t.virtualSize - o);
  }
  if (d && s.loop) {
    const y = f[0] + x;
    if (s.slidesPerGroup > 1) {
      const S = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup
        ),
        z = y * s.slidesPerGroup;
      for (let I = 0; I < S; I += 1) c.push(c[c.length - 1] + z);
    }
    for (let S = 0; S < t.virtual.slidesBefore + t.virtual.slidesAfter; S += 1)
      s.slidesPerGroup === 1 && c.push(c[c.length - 1] + y),
        p.push(p[p.length - 1] + y),
        (t.virtualSize += y);
  }
  if ((c.length === 0 && (c = [0]), s.spaceBetween !== 0)) {
    const y = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
    u.filter((S, z) =>
      !s.cssMode || s.loop ? !0 : z !== u.length - 1
    ).forEach((S) => {
      S.style[y] = `${x}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let y = 0;
    f.forEach((z) => {
      y += z + (s.spaceBetween ? s.spaceBetween : 0);
    }),
      (y -= s.spaceBetween);
    const S = y - o;
    c = c.map((z) => (z < 0 ? -g : z > S ? S + m : z));
  }
  if (s.centerInsufficientSlides) {
    let y = 0;
    if (
      (f.forEach((S) => {
        y += S + (s.spaceBetween ? s.spaceBetween : 0);
      }),
      (y -= s.spaceBetween),
      y < o)
    ) {
      const S = (o - y) / 2;
      c.forEach((z, I) => {
        c[I] = z - S;
      }),
        p.forEach((z, I) => {
          p[I] = z + S;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: u,
      snapGrid: c,
      slidesGrid: p,
      slidesSizesGrid: f,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    N(n, "--swiper-centered-offset-before", `${-c[0]}px`),
      N(
        n,
        "--swiper-centered-offset-after",
        `${t.size / 2 - f[f.length - 1] / 2}px`
      );
    const y = -t.snapGrid[0],
      S = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((z) => z + y)),
      (t.slidesGrid = t.slidesGrid.map((z) => z + S));
  }
  if (
    (h !== v && t.emit("slidesLengthChange"),
    c.length !== b &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    p.length !== w && t.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && t.updateSlidesOffset(),
    !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const y = `${s.containerModifierClass}backface-hidden`,
      S = t.el.classList.contains(y);
    h <= s.maxBackfaceHiddenSlides
      ? S || t.el.classList.add(y)
      : S && t.el.classList.remove(y);
  }
}
function at(t) {
  const e = this,
    i = [],
    s = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const o = (a) =>
    s
      ? e.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        i.push(a);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const a = e.activeIndex + r;
        if (a > e.slides.length && !s) break;
        i.push(o(a));
      }
  else i.push(o(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const a = i[r].offsetHeight;
      n = a > n ? a : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function lt() {
  const t = this,
    e = t.slides,
    i = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i;
}
function ot(t = (this && this.translate) || 0) {
  const e = this,
    i = e.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t),
    s.forEach((a) => {
      a.classList.remove(i.slideVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let a = 0; a < s.length; a += 1) {
    const l = s[a];
    let d = l.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
    const v =
        (o + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (l.swiperSlideSize + i.spaceBetween),
      u =
        (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (l.swiperSlideSize + i.spaceBetween),
      h = -(o - d),
      c = h + e.slidesSizesGrid[a];
    ((h >= 0 && h < e.size - 1) ||
      (c > 1 && c <= e.size) ||
      (h <= 0 && c >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(a),
      s[a].classList.add(i.slideVisibleClass)),
      (l.progress = n ? -v : v),
      (l.originalProgress = n ? -u : u);
  }
}
function dt(t) {
  const e = this;
  if (typeof t > "u") {
    const v = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * v) || 0;
  }
  const i = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = e;
  const l = r,
    d = o;
  if (s === 0) (n = 0), (r = !0), (o = !0);
  else {
    n = (t - e.minTranslate()) / s;
    const v = Math.abs(t - e.minTranslate()) < 1,
      u = Math.abs(t - e.maxTranslate()) < 1;
    (r = v || n <= 0), (o = u || n >= 1), v && (n = 0), u && (n = 1);
  }
  if (i.loop) {
    const v = D(
        e.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") === "0"
        )[0]
      ),
      u = D(
        e.slides.filter(
          (g) =>
            g.getAttribute("data-swiper-slide-index") * 1 ===
            e.slides.length - 1
        )[0]
      ),
      h = e.slidesGrid[v],
      c = e.slidesGrid[u],
      p = e.slidesGrid[e.slidesGrid.length - 1],
      f = Math.abs(t);
    f >= h ? (a = (f - h) / p) : (a = (f + p - c) / p), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: a, isBeginning: r, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      e.updateSlidesProgress(t),
    r && !l && e.emit("reachBeginning toEdge"),
    o && !d && e.emit("reachEnd toEdge"),
    ((l && !r) || (d && !o)) && e.emit("fromEdge"),
    e.emit("progress", n);
}
function ct() {
  const t = this,
    { slides: e, params: i, slidesEl: s, activeIndex: n } = t,
    r = t.virtual && i.virtual.enabled,
    o = (l) => G(s, `.${i.slideClass}${l}, swiper-slide${l}`)[0];
  e.forEach((l) => {
    l.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let a;
  if (r)
    if (i.loop) {
      let l = n - t.virtual.slidesBefore;
      l < 0 && (l = t.virtual.slides.length + l),
        l >= t.virtual.slides.length && (l -= t.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${l}"]`));
    } else a = o(`[data-swiper-slide-index="${n}"]`);
  else a = e[n];
  if (a) {
    a.classList.add(i.slideActiveClass);
    let l = Xe(a, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !l && (l = e[0]), l && l.classList.add(i.slideNextClass);
    let d = qe(a, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !d === 0 && (d = e[e.length - 1]),
      d && d.classList.add(i.slidePrevClass);
  }
  t.emitSlidesClasses();
}
function pt(t) {
  const { slidesGrid: e, params: i } = t,
    s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u"
      ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (n = r)
        : s >= e[r] && s < e[r + 1] && (n = r + 1)
      : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function ut(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: a } = e;
  let l = t,
    d;
  const v = (h) => {
    let c = h - e.virtual.slidesBefore;
    return (
      c < 0 && (c = e.virtual.slides.length + c),
      c >= e.virtual.slides.length && (c -= e.virtual.slides.length),
      c
    );
  };
  if ((typeof l > "u" && (l = pt(e)), s.indexOf(i) >= 0)) d = s.indexOf(i);
  else {
    const h = Math.min(n.slidesPerGroupSkip, l);
    d = h + Math.floor((l - h) / n.slidesPerGroup);
  }
  if ((d >= s.length && (d = s.length - 1), l === r)) {
    d !== a && ((e.snapIndex = d), e.emit("snapIndexChange")),
      e.params.loop &&
        e.virtual &&
        e.params.virtual.enabled &&
        (e.realIndex = v(l));
    return;
  }
  let u;
  e.virtual && n.virtual.enabled && n.loop
    ? (u = v(l))
    : e.slides[l]
    ? (u = parseInt(
        e.slides[l].getAttribute("data-swiper-slide-index") || l,
        10
      ))
    : (u = l),
    Object.assign(e, {
      snapIndex: d,
      realIndex: u,
      previousIndex: r,
      activeIndex: l,
    }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    o !== u && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function ft(t) {
  const e = this,
    i = e.params,
    s = t.closest(`.${i.slideClass}, swiper-slide`);
  let n = !1,
    r;
  if (s) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === s) {
        (n = !0), (r = o);
        break;
      }
  }
  if (s && n)
    (e.clickedSlide = s),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (e.clickedIndex = r);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const ht = {
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
function vt(t = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: i, rtlTranslate: s, translate: n, wrapperEl: r } = e;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let o = Re(r, t);
  return s && (o = -o), o || 0;
}
function mt(t, e) {
  const i = this,
    { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
  let a = 0,
    l = 0;
  const d = 0;
  i.isHorizontal() ? (a = s ? -t : t) : (l = t),
    n.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    n.cssMode
      ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -a
          : -l)
      : n.virtualTranslate ||
        (r.style.transform = `translate3d(${a}px, ${l}px, ${d}px)`),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? a : l);
  let v;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? (v = 0) : (v = (t - i.minTranslate()) / u),
    v !== o && i.updateProgress(t),
    i.emit("setTranslate", i.translate, e);
}
function gt() {
  return -this.snapGrid[0];
}
function wt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function yt(t = 0, e = this.params.speed, i = !0, s = !0, n) {
  const r = this,
    { params: o, wrapperEl: a } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const l = r.minTranslate(),
    d = r.maxTranslate();
  let v;
  if (
    (s && t > l ? (v = l) : s && t < d ? (v = d) : (v = t),
    r.updateProgress(v),
    o.cssMode)
  ) {
    const u = r.isHorizontal();
    if (e === 0) a[u ? "scrollLeft" : "scrollTop"] = -v;
    else {
      if (!r.support.smoothScroll)
        return (
          ve({ swiper: r, targetPosition: -v, side: u ? "left" : "top" }), !0
        );
      a.scrollTo({ [u ? "left" : "top"]: -v, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(v),
        i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(v),
        i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (h) {
              !r ||
                r.destroyed ||
                (h.target === this &&
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
  getTranslate: vt,
  setTranslate: mt,
  minTranslate: gt,
  maxTranslate: wt,
  translateTo: yt,
};
function xt(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`),
    i.emit("setTransition", t, e);
}
function we({ swiper: t, runCallbacks: e, direction: i, step: s }) {
  const { activeIndex: n, previousIndex: r } = t;
  let o = i;
  if (
    (o || (n > r ? (o = "next") : n < r ? (o = "prev") : (o = "reset")),
    t.emit(`transition${s}`),
    e && n !== r)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${s}`);
      return;
    }
    t.emit(`slideChangeTransition${s}`),
      o === "next"
        ? t.emit(`slideNextTransition${s}`)
        : t.emit(`slidePrevTransition${s}`);
  }
}
function St(t = !0, e) {
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    we({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
}
function Tt(t = !0, e) {
  const i = this,
    { params: s } = i;
  (i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      we({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
}
const Et = { setTransition: xt, transitionStart: St, transitionEnd: Tt };
function zt(t = 0, e = this.params.speed, i = !0, s, n) {
  typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: d,
    previousIndex: v,
    activeIndex: u,
    rtlTranslate: h,
    wrapperEl: c,
    enabled: p,
  } = r;
  if ((r.animating && a.preventInteractionOnTransition) || (!p && !s && !n))
    return !1;
  const f = Math.min(r.params.slidesPerGroupSkip, o);
  let g = f + Math.floor((o - f) / r.params.slidesPerGroup);
  g >= l.length && (g = l.length - 1);
  const m = -l[g];
  if (a.normalizeSlideIndex)
    for (let w = 0; w < d.length; w += 1) {
      const x = -Math.floor(m * 100),
        E = Math.floor(d[w] * 100),
        T = Math.floor(d[w + 1] * 100);
      typeof d[w + 1] < "u"
        ? x >= E && x < T - (T - E) / 2
          ? (o = w)
          : x >= E && x < T && (o = w + 1)
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
  o !== (v || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(m);
  let b;
  if (
    (o > u ? (b = "next") : o < u ? (b = "prev") : (b = "reset"),
    (h && -m === r.translate) || (!h && m === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== "slide" && r.setTranslate(m),
      b !== "reset" && (r.transitionStart(i, b), r.transitionEnd(i, b)),
      !1
    );
  if (a.cssMode) {
    const w = r.isHorizontal(),
      x = h ? m : -m;
    if (e === 0) {
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
          ve({ swiper: r, targetPosition: x, side: w ? "left" : "top" }), !0
        );
      c.scrollTo({ [w ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(m),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(i, b),
    e === 0
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
function Ct(t = 0, e = this.params.speed, i = !0, s) {
  typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  let r = t;
  return (
    n.params.loop &&
      (n.virtual && n.params.virtual.enabled
        ? (r = r + n.virtual.slidesBefore)
        : (r = D(
            n.slides.filter(
              (o) => o.getAttribute("data-swiper-slide-index") * 1 === r
            )[0]
          ))),
    n.slideTo(r, e, i, s)
  );
}
function Mt(t = this.params.speed, e = !0, i) {
  const s = this,
    { enabled: n, params: r, animating: o } = s;
  if (!n) return s;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !d && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "next" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, t, e, i)
    : s.slideTo(s.activeIndex + l, t, e, i);
}
function Pt(t = this.params.speed, e = !0, i) {
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: d,
    } = s;
  if (!l) return s;
  const v = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !v && n.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const u = a ? s.translate : -s.translate;
  function h(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const c = h(u),
    p = r.map((m) => h(m));
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
    return s.slideTo(m, t, e, i);
  }
  return s.slideTo(g, t, e, i);
}
function kt(t = this.params.speed, e = !0, i) {
  const s = this;
  return s.slideTo(s.activeIndex, t, e, i);
}
function Lt(t = this.params.speed, e = !0, i, s = 0.5) {
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    a = o + Math.floor((r - o) / n.params.slidesPerGroup),
    l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[a]) {
    const d = n.snapGrid[a],
      v = n.snapGrid[a + 1];
    l - d > (v - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[a - 1],
      v = n.snapGrid[a];
    l - d <= (v - d) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, t, e, i)
  );
}
function It() {
  const t = this,
    { params: e, slidesEl: i } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex,
    r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? n < t.loopedSlides - s / 2 ||
          n > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (n = D(G(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
            U(() => {
              t.slideTo(n);
            }))
          : t.slideTo(n)
        : n > t.slides.length - s
        ? (t.loopFix(),
          (n = D(G(i, `${o}[data-swiper-slide-index="${r}"]`)[0])),
          U(() => {
            t.slideTo(n);
          }))
        : t.slideTo(n);
  } else t.slideTo(n);
}
const At = {
  slideTo: zt,
  slideToLoop: Ct,
  slideNext: Mt,
  slidePrev: Pt,
  slideReset: kt,
  slideToClosest: Lt,
  slideToClickedSlide: It,
};
function Ot(t) {
  const e = this,
    { params: i, slidesEl: s } = e;
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
  G(s, `.${i.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute("data-swiper-slide-index", o);
  }),
    e.loopFix({
      slideRealIndex: t,
      direction: i.centeredSlides ? void 0 : "next",
    });
}
function Gt({
  slideRealIndex: t,
  slideTo: e = !0,
  direction: i,
  setTranslate: s,
  activeSlideIndex: n,
  byController: r,
  byMousewheel: o,
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: l,
    allowSlidePrev: d,
    allowSlideNext: v,
    slidesEl: u,
    params: h,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && h.virtual.enabled)
  ) {
    e &&
      (!h.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && a.snapIndex < h.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = v),
      a.emit("loopFix");
    return;
  }
  const c =
    h.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(h.slidesPerView, 10));
  let p = h.loopedSlides || c;
  p % h.slidesPerGroup !== 0 &&
    (p += h.slidesPerGroup - (p % h.slidesPerGroup)),
    (a.loopedSlides = p);
  const f = [],
    g = [];
  let m = a.activeIndex;
  typeof n > "u"
    ? (n = D(
        a.slides.filter((T) => T.classList.contains("swiper-slide-active"))[0]
      ))
    : (m = n);
  const b = i === "next" || !i,
    w = i === "prev" || !i;
  let x = 0,
    E = 0;
  if (n < p) {
    x = p - n;
    for (let T = 0; T < p - n; T += 1) {
      const M = T - Math.floor(T / l.length) * l.length;
      f.push(l.length - M - 1);
    }
  } else if (n > a.slides.length - p * 2) {
    E = n - (a.slides.length - p * 2);
    for (let T = 0; T < E; T += 1) {
      const M = T - Math.floor(T / l.length) * l.length;
      g.push(M);
    }
  }
  if (
    (w &&
      f.forEach((T) => {
        u.prepend(a.slides[T]);
      }),
    b &&
      g.forEach((T) => {
        u.append(a.slides[T]);
      }),
    a.recalcSlides(),
    h.watchSlidesProgress && a.updateSlidesOffset(),
    e)
  ) {
    if (f.length > 0 && w)
      if (typeof t > "u") {
        const T = a.slidesGrid[m],
          A = a.slidesGrid[m + x] - T;
        o
          ? a.setTranslate(a.translate - A)
          : (a.slideTo(m + x, 0, !1, !0),
            s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += A));
      } else s && a.slideToLoop(t, 0, !1, !0);
    else if (g.length > 0 && b)
      if (typeof t > "u") {
        const T = a.slidesGrid[m],
          A = a.slidesGrid[m - E] - T;
        o
          ? a.setTranslate(a.translate - A)
          : (a.slideTo(m - E, 0, !1, !0),
            s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += A));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = v),
    a.controller && a.controller.control && !r)
  ) {
    const T = {
      slideRealIndex: t,
      slideTo: !1,
      direction: i,
      setTranslate: s,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((M) => {
          M.params.loop && M.loopFix(T);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(T);
  }
  a.emit("loopFix");
}
function Vt() {
  const t = this,
    { slides: e, params: i, slidesEl: s } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const n = [];
  e.forEach((r) => {
    const o =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    n[o] = r;
  }),
    e.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    n.forEach((r) => {
      s.append(r);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
const Bt = { loopCreate: Ot, loopFix: Gt, loopDestroy: Vt };
function $t(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (i.style.cursor = "move"), (i.style.cursor = t ? "grabbing" : "grab");
}
function Dt() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Ht = { setGrabCursor: $t, unsetGrabCursor: Dt };
function _t(t, e = this) {
  function i(s) {
    if (!s || s === B() || s === L()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function Nt(t) {
  const e = this,
    i = B(),
    s = L(),
    n = e.touchEventsData;
  n.evCache.push(t);
  const { params: r, touches: o, enabled: a } = e;
  if (
    !a ||
    (!r.simulateTouch && t.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  let d = l.target;
  if (
    (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(d)) ||
    ("which" in l && l.which === 3) ||
    ("button" in l && l.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const v = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = t.composedPath ? t.composedPath() : t.path;
  v && l.target && l.target.shadowRoot && u && (d = u[0]);
  const h = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    c = !!(l.target && l.target.shadowRoot);
  if (r.noSwiping && (c ? _t(h, d) : d.closest(h))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
  (o.currentX = l.pageX), (o.currentY = l.pageY);
  const p = o.currentX,
    f = o.currentY,
    g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (g && (p <= m || p >= s.innerWidth - m))
    if (g === "prevent") t.preventDefault();
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
    (n.touchStartTime = H()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1);
  let b = !0;
  d.matches(n.focusableElements) &&
    ((b = !1), d.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(n.focusableElements) &&
      i.activeElement !== d &&
      i.activeElement.blur();
  const w = b && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) &&
    !d.isContentEditable &&
    l.preventDefault(),
    e.params.freeMode &&
      e.params.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", l);
}
function Ft(t) {
  const e = B(),
    i = this,
    s = i.touchEventsData,
    { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
  if (!a || (!n.simulateTouch && t.pointerType === "mouse")) return;
  let l = t;
  if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l);
    return;
  }
  const d = s.evCache.findIndex((T) => T.pointerId === l.pointerId);
  d >= 0 && (s.evCache[d] = l);
  const v = s.evCache.length > 1 ? s.evCache[0] : l,
    u = v.pageX,
    h = v.pageY;
  if (l.preventedByNestedSwiper) {
    (r.startX = u), (r.startY = h);
    return;
  }
  if (!i.allowTouchMove) {
    l.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, {
          startX: u,
          startY: h,
          prevX: i.touches.currentX,
          prevY: i.touches.currentY,
          currentX: u,
          currentY: h,
        }),
        (s.touchStartTime = H()));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (
        (h < r.startY && i.translate <= i.maxTranslate()) ||
        (h > r.startY && i.translate >= i.minTranslate())
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
    e.activeElement &&
    l.target === e.activeElement &&
    l.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (i.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && i.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (r.currentX = u), (r.currentY = h);
  const c = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(c ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let T;
    (i.isHorizontal() && r.currentY === r.startY) ||
    (i.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : c * c + p * p >= 25 &&
        ((T = (Math.atan2(Math.abs(p), Math.abs(c)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? T > n.touchAngle
          : 90 - T > n.touchAngle));
  }
  if (
    (s.isScrolling && i.emit("touchMoveOpposite", l),
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
    !n.cssMode && l.cancelable && l.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
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
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      i.wrapperEl.dispatchEvent(T);
    }
    (s.allowMomentumBounce = !1),
      n.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", l);
  }
  let w;
  s.isMoved &&
    m !== i.touchesDirection &&
    b &&
    Math.abs(f) >= 1 &&
    (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (w = !0)),
    i.emit("sliderMove", l),
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
    x && (l.preventedByNestedSwiper = !0),
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
function jt(t) {
  const e = this,
    i = e.touchEventsData,
    s = i.evCache.findIndex((w) => w.pointerId === t.pointerId);
  if (
    (s >= 0 && i.evCache.splice(s, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(t.type))
  )
    return;
  const {
    params: n,
    touches: r,
    rtlTranslate: o,
    slidesGrid: a,
    enabled: l,
  } = e;
  if (!l || (!n.simulateTouch && t.pointerType === "mouse")) return;
  let d = t;
  if (
    (d.originalEvent && (d = d.originalEvent),
    i.allowTouchCallbacks && e.emit("touchEnd", d),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && n.grabCursor && e.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  n.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const v = H(),
    u = v - i.touchStartTime;
  if (e.allowClick) {
    const w = d.path || (d.composedPath && d.composedPath());
    e.updateClickedSlide((w && w[0]) || d.target),
      e.emit("tap click", d),
      u < 300 &&
        v - i.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", d);
  }
  if (
    ((i.lastClickTime = H()),
    U(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      r.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let h;
  if (
    (n.followFinger
      ? (h = o ? e.translate : -e.translate)
      : (h = -i.currentTranslate),
    n.cssMode)
  )
    return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  let c = 0,
    p = e.slidesSizesGrid[0];
  for (
    let w = 0;
    w < a.length;
    w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
  ) {
    const x = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof a[w + x] < "u"
      ? h >= a[w] && h < a[w + x] && ((c = w), (p = a[w + x] - a[w]))
      : h >= a[w] && ((c = w), (p = a[a.length - 1] - a[a.length - 2]));
  }
  let f = null,
    g = null;
  n.rewind &&
    (e.isBeginning
      ? (g =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (f = 0));
  const m = (h - a[c]) / p,
    b = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (u > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (m >= n.longSwipesRatio
        ? e.slideTo(n.rewind && e.isEnd ? f : c + b)
        : e.slideTo(c)),
      e.swipeDirection === "prev" &&
        (m > 1 - n.longSwipesRatio
          ? e.slideTo(c + b)
          : g !== null && m < 0 && Math.abs(m) > n.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(c));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (d.target === e.navigation.nextEl || d.target === e.navigation.prevEl)
      ? d.target === e.navigation.nextEl
        ? e.slideTo(c + b)
        : e.slideTo(c)
      : (e.swipeDirection === "next" && e.slideTo(f !== null ? f : c + b),
        e.swipeDirection === "prev" && e.slideTo(g !== null ? g : c));
  }
}
let ne;
function ae() {
  const t = this,
    { params: e, el: i } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t,
    o = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const a = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !a
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(ne),
      (ne = setTimeout(() => {
        t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = n),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function Wt(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Rt() {
  const t = this,
    { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
  if (!s) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? (n = 0) : (n = (t.translate - t.minTranslate()) / r),
    n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
const F = (t, e) => {
  if (!t || t.destroyed || !t.params) return;
  const i = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
    s = e.closest(i());
  if (s) {
    const n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
    n && n.remove();
  }
};
function Yt(t) {
  const e = this;
  F(e, t.target), e.update();
}
let le = !1;
function qt() {}
const ye = (t, e) => {
  const i = B(),
    { params: s, el: n, wrapperEl: r, device: o } = t,
    a = !!s.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  n[l]("pointerdown", t.onTouchStart, { passive: !1 }),
    i[l]("pointermove", t.onTouchMove, { passive: !1, capture: a }),
    i[l]("pointerup", t.onTouchEnd, { passive: !0 }),
    i[l]("pointercancel", t.onTouchEnd, { passive: !0 }),
    i[l]("pointerout", t.onTouchEnd, { passive: !0 }),
    i[l]("pointerleave", t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      n[l]("click", t.onClick, !0),
    s.cssMode && r[l]("scroll", t.onScroll),
    s.updateOnWindowResize
      ? t[d](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ae,
          !0
        )
      : t[d]("observerUpdate", ae, !0),
    n[l]("load", t.onLoad, { capture: !0 });
};
function Xt() {
  const t = this,
    e = B(),
    { params: i } = t;
  (t.onTouchStart = Nt.bind(t)),
    (t.onTouchMove = Ft.bind(t)),
    (t.onTouchEnd = jt.bind(t)),
    i.cssMode && (t.onScroll = Rt.bind(t)),
    (t.onClick = Wt.bind(t)),
    (t.onLoad = Yt.bind(t)),
    le || (e.addEventListener("touchstart", qt), (le = !0)),
    ye(t, "on");
}
function Ut() {
  ye(this, "off");
}
const Kt = { attachEvents: Xt, detachEvents: Ut },
  oe = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Zt() {
  const t = this,
    { realIndex: e, initialized: i, params: s, el: n } = t,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const l = (o in r ? r[o] : void 0) || t.originalParams,
    d = oe(t, s),
    v = oe(t, l),
    u = s.enabled;
  d && !v
    ? (n.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !d &&
      v &&
      (n.classList.add(`${s.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && s.grid.fill === "column")) &&
        n.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((f) => {
      const g = s[f] && s[f].enabled,
        m = l[f] && l[f].enabled;
      g && !m && t[f].disable(), !g && m && t[f].enable();
    });
  const h = l.direction && l.direction !== s.direction,
    c = s.loop && (l.slidesPerView !== s.slidesPerView || h);
  h && i && t.changeDirection(), k(t.params, l);
  const p = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    u && !p ? t.disable() : !u && p && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", l),
    c && i && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
    t.emit("breakpoint", l);
}
function Jt(t, e = "window", i) {
  if (!t || (e === "container" && !i)) return;
  let s = !1;
  const n = L(),
    r = e === "window" ? n.innerHeight : i.clientHeight,
    o = Object.keys(t).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: r * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: d } = o[a];
    e === "window"
      ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = l)
      : d <= i.clientWidth && (s = l);
  }
  return s || "max";
}
const Qt = { setBreakpoint: Zt, getBreakpoint: Jt };
function ei(t, e) {
  const i = [];
  return (
    t.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && i.push(e + n);
          })
        : typeof s == "string" && i.push(e + s);
    }),
    i
  );
}
function ti() {
  const t = this,
    { classNames: e, params: i, rtl: s, el: n, device: r } = t,
    o = ei(
      [
        "initialized",
        i.direction,
        { "free-mode": t.params.freeMode && i.freeMode.enabled },
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
  e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function ii() {
  const t = this,
    { el: e, classNames: i } = t;
  e.classList.remove(...i), t.emitContainerClasses();
}
const si = { addClasses: ti, removeClasses: ii };
function ri() {
  const t = this,
    { isLocked: e, params: i } = t,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const n = t.slides.length - 1,
      r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
const ni = { checkOverflow: ri },
  de = {
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
function ai(t, e) {
  return function (s = {}) {
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      k(e, s);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
        t[n] === !0 &&
        (t[n] = { auto: !0 }),
      !(n in t && "enabled" in r))
    ) {
      k(e, s);
      return;
    }
    t[n] === !0 && (t[n] = { enabled: !0 }),
      typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0),
      t[n] || (t[n] = { enabled: !1 }),
      k(e, s);
  };
}
const q = {
    eventsEmitter: st,
    update: ht,
    translate: bt,
    transition: Et,
    slide: At,
    loop: Bt,
    grabCursor: Ht,
    events: Kt,
    breakpoints: Qt,
    checkOverflow: ni,
    classes: si,
  },
  X = {};
class P {
  constructor(...e) {
    let i, s;
    e.length === 1 &&
    e[0].constructor &&
    Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
      ? (s = e[0])
      : ([i, s] = e),
      s || (s = {}),
      (s = k({}, s)),
      i && !s.el && (s.el = i);
    const n = B();
    if (
      s.el &&
      typeof s.el == "string" &&
      n.querySelectorAll(s.el).length > 1
    ) {
      const l = [];
      return (
        n.querySelectorAll(s.el).forEach((d) => {
          const v = k({}, s, { el: d });
          l.push(new P(v));
        }),
        l
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = ge()),
      (r.device = Je({ userAgent: s.userAgent })),
      (r.browser = et()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
    const o = {};
    r.modules.forEach((l) => {
      l({
        params: s,
        swiper: r,
        extendParams: ai(s, o),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const a = k({}, de, o);
    return (
      (r.params = k({}, a, X, s)),
      (r.originalParams = k({}, r.params)),
      (r.passedParams = k({}, s)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((l) => {
          r.on(l, r.params.on[l]);
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
          lastClickTime: H(),
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
    const e = this,
      { slidesEl: i, params: s } = e;
    e.slides = G(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof i > "u" ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
    }),
      e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e = "current", i = !1) {
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: d,
      } = s;
    let v = 1;
    if (n.centeredSlides) {
      let u = r[d].swiperSlideSize,
        h;
      for (let c = d + 1; c < r.length; c += 1)
        r[c] &&
          !h &&
          ((u += r[c].swiperSlideSize), (v += 1), u > l && (h = !0));
      for (let c = d - 1; c >= 0; c -= 1)
        r[c] &&
          !h &&
          ((u += r[c].swiperSlideSize), (v += 1), u > l && (h = !0));
    } else if (e === "current")
      for (let u = d + 1; u < r.length; u += 1)
        (i ? o[u] + a[u] - o[d] < l : o[u] - o[d] < l) && (v += 1);
    else for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < l && (v += 1);
    return v;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && F(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    e.params.freeMode && e.params.freeMode.enabled
      ? (n(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (r = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (r = e.slideTo(e.activeIndex, 0, !1, !0)),
        r || n()),
      s.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, i = !0) {
    const s = this,
      n = s.params.direction;
    return (
      e || (e = n === "horizontal" ? "vertical" : "horizontal"),
      e === n ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        i && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const i = this;
    (i.rtl && e === "rtl") ||
      (!i.rtl && e === "ltr") ||
      ((i.rtl = e === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let s = e || i.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = i), s.shadowEl && (i.isElement = !0);
    const n = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(n())
        : G(s, n())[0])();
    return (
      !o &&
        i.params.createElements &&
        ((o = me("div", i.params.wrapperClass)),
        s.append(o),
        G(s, `.${i.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: o,
        slidesEl: i.isElement ? s : o,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl"),
        wrongRTL: V(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const i = this;
    return (
      i.initialized ||
        i.mount(e) === !1 ||
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
            ? F(i, n)
            : n.addEventListener("load", (r) => {
                F(i, r.target);
              });
        }),
        (i.initialized = !0),
        i.emit("init"),
        i.emit("afterInit")),
      i
    );
  }
  destroy(e = !0, i = !0) {
    const s = this,
      { params: n, el: r, wrapperEl: o, slides: a } = s;
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
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                n.slideVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((l) => {
          s.off(l);
        }),
        e !== !1 && ((s.el.swiper = null), je(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    k(X, e);
  }
  static get extendedDefaults() {
    return X;
  }
  static get defaults() {
    return de;
  }
  static installModule(e) {
    P.prototype.__modules__ || (P.prototype.__modules__ = []);
    const i = P.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((i) => P.installModule(i)), P)
      : (P.installModule(e), P);
  }
}
Object.keys(q).forEach((t) => {
  Object.keys(q[t]).forEach((e) => {
    P.prototype[e] = q[t][e];
  });
});
P.use([tt, it]);
function li(t, e, i, s) {
  return (
    t.params.createElements &&
      Object.keys(s).forEach((n) => {
        if (!i[n] && i.auto === !0) {
          let r = G(t.el, `.${s[n]}`)[0];
          r || ((r = me("div", s[n])), (r.className = s[n]), t.el.append(r)),
            (i[n] = r),
            (e[n] = r);
        }
      }),
    i
  );
}
function be({ swiper: t, extendParams: e, on: i, emit: s }) {
  e({
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
    (t.navigation = { nextEl: null, prevEl: null });
  const n = (p) => (Array.isArray(p) || (p = [p].filter((f) => !!f)), p);
  function r(p) {
    let f;
    return p &&
      typeof p == "string" &&
      t.isElement &&
      ((f = t.el.shadowRoot.querySelector(p)), f)
      ? f
      : (p &&
          (typeof p == "string" && (f = [...document.querySelectorAll(p)]),
          t.params.uniqueNavElements &&
            typeof p == "string" &&
            f.length > 1 &&
            t.el.querySelectorAll(p).length === 1 &&
            (f = t.el.querySelector(p))),
        p && !f ? p : f);
  }
  function o(p, f) {
    const g = t.params.navigation;
    (p = n(p)),
      p.forEach((m) => {
        m &&
          (m.classList[f ? "add" : "remove"](...g.disabledClass.split(" ")),
          m.tagName === "BUTTON" && (m.disabled = f),
          t.params.watchOverflow &&
            t.enabled &&
            m.classList[t.isLocked ? "add" : "remove"](g.lockClass));
      });
  }
  function a() {
    const { nextEl: p, prevEl: f } = t.navigation;
    if (t.params.loop) {
      o(f, !1), o(p, !1);
      return;
    }
    o(f, t.isBeginning && !t.params.rewind), o(p, t.isEnd && !t.params.rewind);
  }
  function l(p) {
    p.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), s("navigationPrev"));
  }
  function d(p) {
    p.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), s("navigationNext"));
  }
  function v() {
    const p = t.params.navigation;
    if (
      ((t.params.navigation = li(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(p.nextEl || p.prevEl))
    )
      return;
    let f = r(p.nextEl),
      g = r(p.prevEl);
    Object.assign(t.navigation, { nextEl: f, prevEl: g }),
      (f = n(f)),
      (g = n(g));
    const m = (b, w) => {
      b && b.addEventListener("click", w === "next" ? d : l),
        !t.enabled && b && b.classList.add(...p.lockClass.split(" "));
    };
    f.forEach((b) => m(b, "next")), g.forEach((b) => m(b, "prev"));
  }
  function u() {
    let { nextEl: p, prevEl: f } = t.navigation;
    (p = n(p)), (f = n(f));
    const g = (m, b) => {
      m.removeEventListener("click", b === "next" ? d : l),
        m.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    p.forEach((m) => g(m, "next")), f.forEach((m) => g(m, "prev"));
  }
  i("init", () => {
    t.params.navigation.enabled === !1 ? c() : (v(), a());
  }),
    i("toEdge fromEdge lock unlock", () => {
      a();
    }),
    i("destroy", () => {
      u();
    }),
    i("enable disable", () => {
      let { nextEl: p, prevEl: f } = t.navigation;
      (p = n(p)),
        (f = n(f)),
        [...p, ...f]
          .filter((g) => !!g)
          .forEach((g) =>
            g.classList[t.enabled ? "remove" : "add"](
              t.params.navigation.lockClass
            )
          );
    }),
    i("click", (p, f) => {
      let { nextEl: g, prevEl: m } = t.navigation;
      (g = n(g)), (m = n(m));
      const b = f.target;
      if (t.params.navigation.hideOnClick && !m.includes(b) && !g.includes(b)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === b || t.pagination.el.contains(b))
        )
          return;
        let w;
        g.length
          ? (w = g[0].classList.contains(t.params.navigation.hiddenClass))
          : m.length &&
            (w = m[0].classList.contains(t.params.navigation.hiddenClass)),
          s(w === !0 ? "navigationShow" : "navigationHide"),
          [...g, ...m]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        v(),
        a();
    },
    c = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        u();
    };
  Object.assign(t.navigation, {
    enable: h,
    disable: c,
    update: a,
    init: v,
    destroy: u,
  });
}
new P(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [be],
  autoplay: { delay: 5e3, disableOnInteraction: !1 },
  loop: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
new P(".mySwiper-1", {
  slidesPerView: 5,
  modules: [be],
  spaceBetween: 70,
  loop: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    1024: { slidesPerView: 4, spaceBetween: 50 },
    1536: { slidesPerView: 5, spaceBetween: 50 },
    1792: { slidesPerView: 6, spaceBetween: 50 },
  },
});
