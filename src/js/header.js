
const headerHtml = `

<div class="flex space-x-20">
    <a href="/">
        <img width="100" src="/src/img/netflix.svg" alt="Logo-Netflix">
    </a>
    <ul class="nav nav-tabs flex flex-row flex-wrap   space-x-8 text-[16px]" id="tabs-tab" role="tablist">
        <li class="nav-item" role="presentation"><button
                class="tablink text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                onclick="openPage('Home', this)" id="defaultOpen">Home</button></li>
        <li class="nav-item" role="presentation"><button
                class="tablink text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                onclick="openPage('Shows', this)"
                class="text-white active:text-gray-200 hover:text-gray-400 font-semibold">TV Shows</button>
        </li>

        <li class="nav-item" role="presentation"><button
                class="tablink text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                onclick="openPage('Movies', this)">Movies</button></li>
        <li class="nav-item" role="presentation"><button
                class="tablink text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                onclick="openPage('Popular', this)">New &
                Popular</button></li>
        <li class="nav-item" role="presentation"><button
                class="tablink text-white active:text-gray-200  hover:text-gray-400 font-semibold "
                onclick="openPage('List', this)">My List</button></li>

    </ul>
</div>
<div class="extra flex items-center space-x-6 ">

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
    <img class="w-7 rounded-md " src="/src/img/profile-pic.png" alt="Swastik Dan Profile Image">
</div>


`;

document.getElementById("header").innerHTML = headerHtml;
