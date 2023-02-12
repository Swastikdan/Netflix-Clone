
let carddata;

fetch('/src/json/movies-db.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    generateCardData("movie-7");
    generateCardData("movie-8");
    generateCardData("movie-9");
    generateCardData("movie-10");
    generateCardData("movie-11");
    generateCardData("movie-12");
    generateCardData("movie-13");
    generateCardData("movie-14");

  });

function generateCardData(cardId) {
  const cardData = data[cardId];

  const movieContainer = document.getElementById(`card-${cardId.split("-")[1]}`);



    movieContainer.innerHTML = `

    <div class="my-10 pl-9">

<div class=" card container relative w-[300px]  items-center duration-200 ease-in hover:scale-125 overflow-hidden rounded-xl cursor-pointer">
  <img width="300" class="block rounded-xl" src="${cardData.cardimage}" alt="${cardData.title}" loading="lazy" />
  <div class="overlay absolute bottom-0 flex w-[300px] justify-between space-y-3 bg-clip-padding px-4 py-3  text-white opacity-0 ease-in-out">
    <div class=" description space-y-1">
      <span class="text-[16px]  text-white">${cardData.title}</span> <br />
      <p class="text-[8px] font- text-white">
        <span>${cardData.releseyear} &nbsp;|&nbsp;&nbsp;</span>
        <span class="p-[1px] ring-1 ring-white">&nbsp;${cardData.maturityrating} </span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${cardData.runtime}&nbsp;|&nbsp;</span>
        <span>&nbsp;${cardData.movietype}</span>
      </p>
    </div>
    <div class="buttons flex space-x-1">
<button class="" onclick="openModal();currentSlide(${cardData.number})">
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

`
  }

