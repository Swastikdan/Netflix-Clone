
let data;

fetch('/src/json/movies-db.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    generateMovieData("movie-1");
    generateMovieData("movie-2");
    generateMovieData("movie-3");
    generateMovieData("movie-4");
    generateMovieData("movie-5");
    generateMovieData("movie-6");
 
   
    // Call generateMovieData for each movie
  });

function generateMovieData(movieId) {
  const movieData = data[movieId];
  const movieContainer = document.getElementById(`hero-slider-${movieId.split("-")[1]}`);

  movieContainer.innerHTML = `

  <div class="carousel-item active relative float-left w-full">
  <img class="pl-20 bg-gray-800" src="${movieData.imagemain}" class=" h-[750px] w-full" alt="${movieData.title}" loading="lazy" />
  <div class="card-text pt-40 pl-20 items-center space-y-10 absolute left-0 top-0 bottom-0 w-2/5 p-5 text-white overflow-hidden "
      style="background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(53,50,50,0.8380602240896359) 71%,rgba(53,50,50,0.6380602240896359) 81%,rgba(53,50,50,0.3380602240896359) 95%, rgba(0,0,0,0) 100%);">
      <img width="400px" src="${movieData.imagetext}" alt="${movieData.title}" loading="lazy"/>
      <div class="space-y-4">
          <span class="text-[32px] font-semibold">${movieData.title}</span> <br>
          <p class="text-[14px] font-medium text-gray-400">
              <span>${movieData.releseyear} &nbsp;|&nbsp;&nbsp;</span>
              <span class="ring-1 ring-gray-400 px-2 py-1">&nbsp;${movieData.maturityrating} </span>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp; ${movieData.runtime}&nbsp;|&nbsp;</span>
              <span>&nbsp;${movieData.movietype}</span>
          </p>
          <p>${movieData.description}</p>
          <p>
              <span class="text-gray-400">Starring:</span>
              <span>Karl Urban,Zaris-Angel Hator,Jared Harris</span>
          </p>
      </div>
      <div class="buttons text-[16px] flex space-x-10">
          <a href="#_" onclick="openModal();currentSlide(${movieData.number})"
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
          <a href="${movieData.pagelink}" data-tooltip="Add to Watchlist"
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

  `;
}


