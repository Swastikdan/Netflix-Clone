! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && i(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function i(e) {
        if (e.ep) return;
        e.ep = !0;
        const i = function(e) {
            const i = {};
            return e.integrity && (i.integrity = e.integrity), e.referrerpolicy && (i.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? i.credentials = "include" : "anonymous" === e.crossorigin ? i.credentials = "omit" : i.credentials = "same-origin", i
        }(e);
        fetch(e.href, i)
    }
}();
const h = '\n<div class="z-[1000] fixed overflow-hidden w-full h-full  bg-black flex items-center justify-center ">\n    <img class="animate-spin w-20" src="https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"\n        alt="Preloader">\n</div>\n';
document.getElementById("loader").innerHTML = h;
var y = document.getElementById("loader");
window.addEventListener("load", (function() {
    y.style.display = "none"
}));
const u = '\n\n<div class="flex space-x-20">\n    <a href="/">\n        <img width="100" src="/assets/netflix.svg" alt="Logo-Netflix">\n    </a>\n    <ul class="nav  flex flex-row flex-wrap   space-x-8 text-[16px]" >\n        <li><a href="/"\n                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold "\n                >Home</a></li>\n        <li><a class="text-white active:text-gray-200 hover:text-gray-400 font-semibold">TV Shows</a>\n        </li>\n\n        <li><a\n                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold ">Movies</a></li>\n        <li><a\n                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold ">New &\n                Popular</a></li>\n        <li><a\n                class=" text-white active:text-gray-200  hover:text-gray-400 font-semibold ">My List</a></li>\n\n    </ul>\n</div>\n<div class="extra flex items-center space-x-6 ">\n\n    <svg  stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px"\n        xmlns="http://www.w3.org/2000/svg">\n        <path\n            d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z">\n        </path>\n    </svg>\n\n    <svg  stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" class="Navbar_icon__1oHI1"\n        height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">\n        <path\n            d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z">\n        </path>\n    </svg>\n    <img class="w-7 rounded-md " src="/assets/profile-pic.png" alt="Swastik Dan Profile Image">\n</div>\n\n\n';
document.getElementById("header").innerHTML = u;
const n = document.querySelector("header");
let p;

function l(e) {
    const i = p[e],
        n = document.getElementById(`hero-slider-${e.split("-")[1]}`);
    var s;
    s = "movie-1" === e ? "eger" : "lazy", n.innerHTML = `\n\n  <div class="carousel-item active relative float-left h-[750px] w-full">\n  <img class="pl-20 bg-gray-800" src="${i.imagemain}" class=" h-[750px] w-auto" alt="${i.title}" loading="${s}" />\n  <div class="card-text pt-40 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white overflow-hidden "\n      style="background: rgb(0,0,0);\nbackground: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(53,50,50,0.8380602240896359) 71%,rgba(53,50,50,0.6380602240896359) 81%,rgba(53,50,50,0.3380602240896359) 95%, rgba(0,0,0,0) 100%);">\n      <img width="400px" src="${i.imagetext}" alt="${i.title}" loading="${s}"/>\n      <div class="space-y-4">\n          <span class="text-[28px] font-semibold">${i.title}</span> <br>\n          <p class="text-[14px] font-medium text-gray-400">\n              <span>${i.releseyear} &nbsp;|&nbsp;&nbsp;</span>\n              <span class="ring-1 ring-gray-400 px-2 ">&nbsp;${i.maturityrating} </span>\n              <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${i.runtime}&nbsp;|&nbsp;</span>\n              <span>&nbsp;${i.movietype}</span>\n          </p>\n          <p>${i.description}</p>\n          <p>\n              <span class="text-gray-400">Starring:</span>\n              <span>Karl Urban,Zaris-Angel Hator,Jared Harris</span>\n          </p>\n      </div>\n      <div class="buttons text-[16px] flex space-x-10">\n          <a href="#_" onclick="openSlide(${i.number})"\n              class="flex space-x-2 bg-[#c5121b] text-white items-center px-5 py-[6px] rounded-xl hover:bg-[#E50914]">\n              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"\n                  xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"\n                      stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"\n                      stroke-linejoin="round" />\n              </svg>\n              <span class="font-medium text-md">Play Now</span>\n          </a>\n          <a href="#" data-tooltip="Add to Watchlist"\n              class="items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black p-[6px] rounded-xl ring-1 ring-gray-500 hover:ring-gray-400">\n              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"\n                  xmlns="http://www.w3.org/2000/svg">\n\n                  <path d="M8 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round"\n                      stroke-linejoin="round" />\n                  <path d="M12 16V8" stroke="white" stroke-width="1.5" stroke-linecap="round"\n                      stroke-linejoin="round" />\n\n              </svg>\n          </a>\n      </div>\n  </div>\n</div>\n\n  `
}
window.addEventListener("scroll", (() => {
    window.scrollY > 0 ? n.classList.add("scroll") : n.classList.remove("scroll")
})), fetch("/assets/movies-db.json").then((e => e.json())).then((e => {
    p = e, l("movie-1"), l("movie-2"), l("movie-3"), l("movie-4"), l("movie-5"), l("movie-6")
}));
const m = '\n<div style="--swiper-navigation-color: #E50914;" class="swiper mySwiper">\n<div class="swiper-wrapper">\n  <div class="swiper-slide">\n\n    <div id="hero-slider-1"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n  <div class="swiper-slide">\n\n    <div id="hero-slider-2"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n  <div class="swiper-slide">\n\n    <div id="hero-slider-3"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n  <div class="swiper-slide">\n\n    <div id="hero-slider-4"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n  <div class="swiper-slide">\n\n    <div id="hero-slider-5"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n  <div class="swiper-slide">\n\n    <div id="hero-slider-6"></div>\n    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n  </div>\n\n</div>\n<div class="swiper-button-next"></div>\n<div class="swiper-button-prev"></div>\n<div class="swiper-pagination"></div>\n</div>\n\n';
document.getElementById("sliderDisplay").innerHTML = m;
const g = '\n<div\nclass="max-w-screen-xl px-4 py-5 mx-auto space-y-8 overflow-hidden  tails-selected-element">\n\n<div class="flex justify-center mt-8 space-x-6"><a target="_blank" rel="noopener noreferrer"\n        href="https://www.facebook.com/SwastikDan" class="text-gray-400 hover:text-gray-500"><span\n            class="sr-only">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"\n            fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">\n            <path\n                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">\n            </path>\n        </svg></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swastikdan"\n        class="text-gray-400 hover:text-gray-500"><span class="sr-only">linkedin</span><svg\n            xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"\n            class="bi bi-linkedin" viewBox="0 0 16 16">\n            <path\n                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">\n            </path>\n        </svg></a><a target="_blank" rel="noopener noreferrer" href="https://github.com/Swastikdan"\n        class="text-gray-400 hover:text-gray-500"><span class="sr-only">GitHub</span><svg\n            xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"\n            class="bi bi-github" viewBox="0 0 16 16">\n            <path\n                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">\n            </path>\n        </svg></a>\n        <a target="_blank" rel="noopener noreferrer" href="https://www.swastikdan.tech/"\n        class="text-gray-400 hover:text-gray-500"><span class="sr-only">Website</span><img width="30" src="https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_auto/https://main--swastikdan.netlify.app/assets/logo-header.webp" alt="" srcset=""></a>\n    </div>\n<p class="mt-8 text-base leading-6 text-center text-gray-400 helveticarounded_bold">Made with 💕 by &nbsp;<a\n        target=" _blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-4"\n        href="https://www.linkedin.com/in/swastikdan">Swastik Dan</a>&nbsp;.</p>\n</div>\n';
let c;

function f(e) {
    const i = c[e],
        n = document.getElementById(`card-${e.split("-")[1]}`);
    let s;
    s = "movie-14" === e ? "9" : "0", n.innerHTML = `\n\n    <div class="mt-5 pl-9 pr-${s}"> \n\n<div class=" card container relative w-[300px]  items-center duration-150 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">\n  <img width="300" class="block rounded-xl" src="${i.cardimage}" alt="${i.title}" loading="lazy" />\n  <div class="overlay absolute bottom-0 flex w-[300px] justify-between space-y-3 bg-clip-padding px-4 py-3  text-white opacity-0 ease-in-out">\n    <div class=" description space-y-1">\n      <span class="text-[16px]  text-white">${i.title}</span> <br />\n      <p class="text-[8px] text-white">\n        <span>${i.releseyear} &nbsp;|&nbsp;&nbsp;</span>\n        <span class="p-[1px] ring-1 ring-white">&nbsp;${i.maturityrating} </span>\n        <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${i.runtime}&nbsp;|&nbsp;</span>\n        <span>&nbsp;${i.movietype}</span>\n      </p>\n    </div>\n    <div class="buttons flex space-x-1">\n<button class="" onclick="openSlide(${i.number})">\n<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</button>\n<a href="#">\n<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z" fill="white"/>\n</svg>\n</a>\n    </div>\n  </div>\n</div>\n<h1 class=" bg-black text-white   text-[14px] font-medium mt-2 pl-5 ">${i.title}\n</h1>\n</div>\n\n`
}
document.getElementById("footer").innerHTML = g, fetch("/assets/movies-db.json").then((e => e.json())).then((e => {
    c = e;
    for (let e = 7; e <= 38; e++) {
        const i = f(`movie-${e}`);
        console.log(i)
    }
}));
const b = '\n  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">\n  <div class="swiper-wrapper">\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-7">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-8">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-9">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-10">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-11">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-12">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-13">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50  ">\n      <div id="card-14">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hidden  " >\n     \n    </div>\n  \n  </div>\n\n  <div class="swiper-button-next"></div>\n  <div class="swiper-button-prev "></div>\n</div>\n  ',
    x = '\n  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">\n  <div class="swiper-wrapper">\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-15">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-16">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-17">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-18">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-19">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-20">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-21">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-22">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hidden" >\n     \n    </div>\n  \n  </div>\n\n  <div class="swiper-button-next"></div>\n  <div class="swiper-button-prev "></div>\n</div>\n  ',
    z = '\n  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">\n  <div class="swiper-wrapper">\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-23">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-24">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-25">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-26">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-27">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-28">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-29">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-30">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hidden" >\n     \n    </div>\n  \n  </div>\n\n  <div class="swiper-button-next"></div>\n  <div class="swiper-button-prev "></div>\n</div>\n  ',
    k = '\n  <div style="--swiper-navigation-color: #E50914; --swiper-navigation-size: 50px; " class="swiper mySwiper-1">\n  <div class="swiper-wrapper">\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-31">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-32">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-33">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-34">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-35">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-36">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-37">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hover:z-50 ">\n      <div id="card-38">\n        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\n      </div>\n    </div>\n    <div class="swiper-slide hidden" >\n     \n    </div>\n  \n  </div>\n\n  <div class="swiper-button-next"></div>\n  <div class="swiper-button-prev "></div>\n</div>\n  ';

function E(e) {
    var i = document.createElement("iframe");
    i.setAttribute("src", "https://www.youtube.com/embed/" + e.dataset.id + "?autoplay=1&rel=0"), i.setAttribute("frameborder", "0"), i.setAttribute("allowfullscreen", "1"), i.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), e.parentNode.replaceChild(i, e)
}

function C() {
    for (var e = document.getElementsByClassName("youtube-player"), i = 0; i < e.length; i++) {
        var n = e[i].dataset.id,
            s = document.createElement("div");
        s.setAttribute("data-id", n);
        var r = document.createElement("img");
        r.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", n), s.appendChild(r);
        var t = document.createElement("div");
        t.setAttribute("class", "play"), s.appendChild(t), s.onclick = function() {
            E(this)
        }, e[i].appendChild(s)
    }
}
let v;

function L(e) {
    const i = v[e];
    document.getElementById(`popup-${e.split("-")[1]}`).innerHTML = `\n\n  <span class="close" onclick="closeSlide(${i.vno})">&times;</span>\n  <lite-youtube class="popup-content" videoid="${i.videoId}" style="background-image: url('https://i.ytimg.com/vi/${i.videoId}/maxresdefault.jpg');"></lite-youtube>\n`
}
document.getElementById("carasol-content-1").innerHTML = b, document.getElementById("carasol-content-2").innerHTML = x, document.getElementById("carasol-content-3").innerHTML = z, document.getElementById("carasol-content-4").innerHTML = k, document.addEventListener("DOMContentLoaded", C), fetch("/assets/video-id.json").then((e => e.json())).then((e => {
    v = e;
    for (let e = 1; e <= 38; e++) {
        const i = L(`video-${e}`);
        console.log(i)
    }
}));
const $ = 38;
let w = "";
for (let e = 1; e <= $; e++) w += `<div id="popup-${e}" class="popup"></div>`;
document.getElementById("video-dispaly").innerHTML = w;
class d extends HTMLElement {
    connectedCallback() {
        this.videoId = this.getAttribute("videoid");
        let e = this.querySelector(".lty-playbtn");
        if (this.playLabel = e && e.textContent.trim() || this.getAttribute("playlabel") || "Play", this.style.backgroundImage || (this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`), e || (e = document.createElement("button"), e.type = "button", e.classList.add("lty-playbtn"), this.append(e)), !e.textContent) {
            const i = document.createElement("span");
            i.className = "lyt-visually-hidden", i.textContent = this.playLabel, e.append(i)
        }
        e.removeAttribute("href"), this.addEventListener("pointerover", d.warmConnections, {
            once: !0
        }), this.addEventListener("click", this.addIframe), this.needsYTApiForAutoplay = navigator.vendor.includes("Apple") || navigator.userAgent.includes("Mobi")
    }
    static addPrefetch(e, i, n) {
        const s = document.createElement("link");
        s.rel = e, s.href = i, n && (s.as = n), document.head.append(s)
    }
    static warmConnections() {
        d.preconnected || (d.addPrefetch("preconnect", "https://www.youtube-nocookie.com"), d.addPrefetch("preconnect", "https://www.google.com"), d.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"), d.addPrefetch("preconnect", "https://static.doubleclick.net"), d.preconnected = !0)
    }
    fetchYTPlayerApi() {
        window.YT || window.YT && window.YT.Player || (this.ytApiPromise = new Promise(((e, i) => {
            var n = document.createElement("script");
            n.src = "https://www.youtube.com/iframe_api", n.async = !0, n.onload = i => {
                YT.ready(e)
            }, n.onerror = i, this.append(n)
        })))
    }
    async addYTPlayerIframe(e) {
        this.fetchYTPlayerApi(), await this.ytApiPromise;
        const i = document.createElement("div");
        this.append(i);
        const n = Object.fromEntries(e.entries());
        new YT.Player(i, {
            width: "100%",
            videoId: this.videoId,
            playerVars: n,
            events: {
                onReady: e => {
                    e.target.playVideo()
                }
            }
        })
    }
    async addIframe() {
        if (this.classList.contains("lyt-activated")) return;
        this.classList.add("lyt-activated");
        const e = new URLSearchParams(this.getAttribute("params") || []);
        if (e.append("autoplay", "1"), e.append("playsinline", "1"), this.needsYTApiForAutoplay) return this.addYTPlayerIframe(e);
        const i = document.createElement("iframe");
        i.width = 560, i.height = 315, i.title = this.playLabel, i.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", i.allowFullscreen = !0, i.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${e.toString()}`, this.append(i), i.focus()
    }
}
customElements.define("lite-youtube", d), new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5e3,
        disableOnInteraction: !1
    },
    loop: !0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
}), new Swiper(".mySwiper-1", {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: !1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {

        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1536: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1792: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          
      },
      
})