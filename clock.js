// Christmas Tree Overlay - Simplified Version
// Control background music
function controlBackgroundMusic(action) {
  const birthdayMusic = document.getElementById("birthdayMusic");
  if (birthdayMusic) {
    if (action === "pause") {
      birthdayMusic.pause();
      console.log("Background music paused");
    } else if (action === "play") {
      birthdayMusic
        .play()
        .then(() => {
          console.log("Background music started");
        })
        .catch((e) => {
          console.warn("Could not play background music:", e);
        });
    }
  }
}

// Hide Christmas overlay and show letters screen
function hideChristmasOverlay() {
  const christmasOverlay = document.getElementById("christmasOverlay");
  if (christmasOverlay) {
    console.log("Starting Christmas overlay fade out");

    // Add fade out class
    christmasOverlay.classList.add("hide");

    // Also add opacity fade for smoother transition
    christmasOverlay.style.transition = "opacity 1.2s ease-out";
    christmasOverlay.style.opacity = "0";

    // Start background music
    controlBackgroundMusic("play");

    // Remove overlay and show letters screen after animation
    setTimeout(() => {
      christmasOverlay.style.display = "none";
      console.log("Christmas overlay hidden completely");
      
      // Show letters screen directly
      const lettersScreen = document.getElementById("lettersScreen");
      if (lettersScreen) {
        lettersScreen.style.display = "block";
        lettersScreen.style.animation = "fadeIn 0.5s ease forwards";
        console.log("Letters screen shown with flying Christmas emojis");
      }
    }, 1200);
  }
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("Christmas tree system initialized");

  // Handle start button click
  const startButton = document.getElementById("startButton");

  if (startButton) {
    startButton.addEventListener("click", function () {
      console.log("Start button clicked - Showing letters");
      hideChristmasOverlay();
    });
  }
});
