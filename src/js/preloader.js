const loader = `
<div class="z-[1000] fixed overflow-hidden w-full h-full  bg-black flex items-center justify-center ">
    <img class="animate-spin w-20" src="https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Preloader">
</div>
`;

document.getElementById("loader").innerHTML = loader;
var loadertime = document.getElementById("loader");
window.addEventListener("load", function () {
    loadertime.style.display = "none";
});