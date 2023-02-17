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
  function i(t) {
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
    const a = i(t);
    fetch(t.href, a);
  }
})();
let d = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto/";
const c = `
<div class="z-[1000] fixed overflow-hidden w-full h-full  bg-black flex items-center justify-center ">
    <img class="animate-spin w-20" src="${d}https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Preloader">
</div>
`;
document.getElementById("loader").innerHTML = c;
var p = document.getElementById("loader");
window.addEventListener("load", function () {
  p.style.display = "none";
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
const l = document.querySelector("header");
window.addEventListener("scroll", () => {
  window.scrollY > 0 ? l.classList.add("scroll") : l.classList.remove("scroll");
});
let n;
fetch("/assets/movies-db.json")
  .then((s) => s.json())
  .then((s) => {
    n = s;
    for (let e = 1; e <= 38; e++) {
      const i = m(e);
      console.log(i);
    }
  });
function m(s) {
  const e = n[`movie-${s}`],
    i = document.getElementById(`hero-section-${s}`);
  if (!i) return "Given id does not exist";
  (document.title = e.title),
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", e.description),
    (i.innerHTML = `   <div class=" relative h-[700px] overflow-hidden w-full">
  <img class="pl-20 bg-gray-800" src="${e.imagemain}" class=" h-[600px] w-full" alt="${e.title}" loading="lazy" />
  <div class="card-text pt-40 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white  "
      style="background: rgb(0,0,0);
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.891281512605042) 40%, rgba(0,0,0,0.8044467787114846) 50%, rgba(0,0,0,0.6980042016806722) 60%, rgba(0,0,0,0.6027661064425771) 70%, rgba(0,0,0,0.3982843137254902) 80%, rgba(0,0,0,0.19940476190476186) 90%, rgba(0,0,0,0) 100%);">
      <img width="400px" src="${e.imagetext}" alt="${e.title}" loading="lazy"/>
      <div class="space-y-4">
          <span class="text-[28px] font-semibold">${e.title}</span> <br>
          <p class="text-[14px] font-medium text-gray-400">
              <span>${e.releseyear} &nbsp;|&nbsp;&nbsp;</span>
              <span class="ring-1 ring-gray-400 px-2 ">&nbsp;${e.maturityrating} </span>
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
              class="flex space-x-2 bg-[#c5121b] text-white items-center px-5 py-[12px] rounded-xl hover:bg-[#E50914]">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                      stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
              </svg>
              <span class="font-medium text-xl">Play Now</span>
          </a>
          
      </div>
  </div>
</div>

<div class=" -mt-4 " >
<div class="wraper items-center flex justify-between mx-16 px-10 py-2 backdrop-blur-2xl" style="background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(56, 56, 56, 0.583) 0%, rgb(20, 20, 20) 100%);">
    <div class="image-text flex  space-x-8 items-center">
        <svg class="value-prop-logo" focusable="false" width="25px" viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo"><defs><radialGradient id="0644b4b8-9b16-43c7-9455-5f9ff6cf1aa9-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#0644b4b8-9b16-43c7-9455-5f9ff6cf1aa9-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>

        <span class="text-white font-semibold text-lg">Watch all you want.</span>
    </div>
<button class="join-now text-white bg-[#E30813] px-5 py-1 rounded-sm">
    Join Now
</button>
</div>
</div>
<div class="mx-16 flex flex-col space-y-5 text-center my-20">
    <div class="border-gradient "></div>
    
<span class="text-white flex flex-col " style="font-size: 18px;"> ${e.extranote}</span>
<div class="border-gradient "></div>
</div> `);
}
const h = `
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
document.getElementById("footer").innerHTML = h;
window.onload = function () {
  let s = document.querySelectorAll(".random-image"),
    e = [];
  for (let i = 0; i < s.length; i++) {
    let r = Math.floor(Math.random() * 32);
    for (; e.includes(r); ) r = Math.floor(Math.random() * 32);
    e.push(r),
      (s[i].src =
        "https://ik.imagekit.io/swastik/Netflix/page-cards/image-" +
        (r + 1) +
        ".jpg");
  }
};
const f = `
<span class="text-white text-3xl" >More Like This</span>
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">

<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
</div>
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
</div>
<div class="row-1 flex justify-between mt-5">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
<img class="random-image rounded-sm block" width="332"  src="" loading="lazy" alt="More Like This Movie">
</div>
<div class="border-gradient pt-20 "></div>
`;
document.getElementById("more-like-this").innerHTML = f;
