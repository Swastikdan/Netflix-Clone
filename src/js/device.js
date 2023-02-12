// Define the function that creates the popup and overlay
function showPopup() {
    // Check if the device width is less than 1300px
    if (screen.width < 1300) {
      // Create the popup div with message and styling
      var popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.backgroundColor = "rgba(0,0,0,1)";
      popup.style.color = "white";
      popup.style.zIndex = "99999";
      popup.style.display = "flex";
      popup.style.justifyContent = "center";
      popup.style.alignItems = "center";
      popup.innerHTML = "<p>Please open this website on a larger device.</p>";
  
      // Create the overlay div to prevent user interaction
      var overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
      overlay.style.zIndex = "99998";
  
      // Append the popup and overlay to the body element
      document.body.appendChild(popup);
      document.body.appendChild(overlay);
    } else {
      // Remove the popup and overlay if the device width is greater than or equal to 1300px
      var popup = document.querySelector("#popup");
      if (popup) {
        popup.parentNode.removeChild(popup);
      }
      var overlay = document.querySelector("#overlay");
      if (overlay) {
        overlay.parentNode.removeChild(overlay);
      }
    }
  }
  
  // Call the showPopup function on page load and window resize
  window.onload = function() {
    showPopup();
  };
  window.onresize = function() {
    showPopup();
  };
  