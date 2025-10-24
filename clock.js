// Clock Loading Animation - Enhanced Version
let clockInterval;
let tickSound;
let alarmSound;
let tickInterval = 1000; // 1 second per tick

// Initialize Audio Elements
function initAudioElements() {
  try {
    tickSound = document.getElementById("tickSound");
    alarmSound = document.getElementById("alarmSound");

    if (tickSound) {
      tickSound.volume = 0.5;
      console.log("Tick sound initialized");
    }

    if (alarmSound) {
      alarmSound.volume = 0.7;
      console.log("Alarm sound initialized");
    }
  } catch (e) {
    console.warn("Audio initialization failed:", e);
  }
}

// Play tick sound
function playTickSound() {
  try {
    if (tickSound) {
      tickSound.currentTime = 0;
      tickSound.play().catch((e) => console.log("Tick sound play failed:", e));
    }
  } catch (e) {
    console.warn("Tick sound failed:", e);
  }
}

// Play alarm sound when reaching 05:00:00
function playAlarmSound() {
  try {
    if (alarmSound) {
      alarmSound.currentTime = 0;
      alarmSound
        .play()
        .catch((e) => console.log("Alarm sound play failed:", e));
    }
  } catch (e) {
    console.warn("Alarm sound failed:", e);
  }
}

// Calculate correct hand positions
function calculateHandPositions(hours, minutes, seconds) {
  // Convert to 12-hour format
  const h = hours % 12;

  // Calculate angles (0 degrees = 12 o'clock position)
  const secondAngle = seconds * 6; // 360/60 = 6 degrees per second
  const minuteAngle = minutes * 6 + seconds * 0.1; // 6 degrees per minute + smooth seconds
  const hourAngle = h * 30 + minutes * 0.5; // 30 degrees per hour + smooth minutes

  return {
    hour: hourAngle,
    minute: minuteAngle,
    second: secondAngle,
  };
}

// Update clock display
function updateClockDisplay(hours, minutes, seconds) {
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");
  const digitalTime = document.getElementById("digitalTime");

  if (!hourHand || !minuteHand || !secondHand || !digitalTime) {
    console.error("Clock elements not found");
    return;
  }

  // Update digital display
  const timeString = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  digitalTime.textContent = timeString;

  // Calculate hand positions
  const angles = calculateHandPositions(hours, minutes, seconds);

  // Update clock hands with correct positioning (bottom: 50%, left: 50%, translate to center)
  hourHand.style.transform = `translate(-50%, 0) rotate(${angles.hour}deg)`;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${angles.minute}deg)`;
  secondHand.style.transform = `translate(-50%, 0) rotate(${angles.second}deg)`;
}

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

// Main clock animation function
function startClockAnimation() {
  // Pause background music during clock animation
  controlBackgroundMusic("pause");

  // Starting time: 04:59:57
  let currentTime = {
    hours: 4,
    minutes: 59,
    seconds: 57,
  };

  console.log("Starting clock animation from 04:59:57");

  // Set initial positions
  updateClockDisplay(
    currentTime.hours,
    currentTime.minutes,
    currentTime.seconds
  );

  // Clock update function
  function tick() {
    // Check if we're at 04:59:59 BEFORE incrementing
    if (
      currentTime.hours === 4 &&
      currentTime.minutes === 59 &&
      currentTime.seconds === 59
    ) {
      // This is the last tick - increment to 05:00:00
      currentTime.seconds = 0;
      currentTime.minutes = 0;
      currentTime.hours = 5;

      // Disable transitions to prevent hands from rotating backwards
      const hourHand = document.getElementById("hourHand");
      const minuteHand = document.getElementById("minuteHand");
      const secondHand = document.getElementById("secondHand");

      if (hourHand) hourHand.style.transition = "none";
      if (minuteHand) minuteHand.style.transition = "none";
      if (secondHand) secondHand.style.transition = "none";

      // Update display to show 05:00:00 (hands will jump to position without animation)
      updateClockDisplay(
        currentTime.hours,
        currentTime.minutes,
        currentTime.seconds
      );

      // Play tick sound for the last second
      playTickSound();

      console.log("Reached 05:00:00 - Starting fade out and music");

      // Stop the clock immediately
      clearInterval(clockInterval);

      // Play alarm sound
      playAlarmSound();

      // Start background music
      setTimeout(() => {
        controlBackgroundMusic("play");
      }, 500);

      // Start fading out the clock overlay
      setTimeout(() => {
        hideClockOverlay();
      }, 800);

      return;
    }

    // Normal increment for other times
    currentTime.seconds++;

    // Handle time overflow
    if (currentTime.seconds >= 60) {
      currentTime.seconds = 0;
      currentTime.minutes++;

      if (currentTime.minutes >= 60) {
        currentTime.minutes = 0;
        currentTime.hours++;

        if (currentTime.hours >= 24) {
          currentTime.hours = 0;
        }
      }
    }

    // Update display
    updateClockDisplay(
      currentTime.hours,
      currentTime.minutes,
      currentTime.seconds
    );

    // Play tick sound for every second
    playTickSound();

    console.log(
      `Clock tick: ${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`
    );
  }

  // Start the clock (tick every second)
  clockInterval = setInterval(tick, 1000);
}

// Hide clock overlay with smooth fade animation and show letters screen
function hideClockOverlay() {
  const clockOverlay = document.getElementById("clockOverlay");
  if (clockOverlay) {
    console.log("Starting clock overlay fade out");

    // Add fade out class
    clockOverlay.classList.add("hide");

    // Also add opacity fade for smoother transition
    clockOverlay.style.transition = "opacity 1.2s ease-out";
    clockOverlay.style.opacity = "0";

    // Remove overlay and show letters screen after animation
    setTimeout(() => {
      clockOverlay.style.display = "none";
      console.log("Clock overlay hidden completely");
      
      // Show letters screen directly (panda-container is already inside it)
      const lettersScreen = document.getElementById("lettersScreen");
      if (lettersScreen) {
        lettersScreen.style.display = "block";
        lettersScreen.style.animation = "fadeIn 0.5s ease forwards";
        console.log("Letters screen shown with flying sunflowers");
      }
    }, 2000); // Match fadeOut animation duration
  }
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("Clock loading system initialized");

  // Initialize audio elements
  initAudioElements();

  // Handle start button click
  const startButton = document.getElementById("startButton");
  const startOverlay = document.getElementById("startOverlay");
  const clockContainer = document.getElementById("clockContainer");

  if (startButton && startOverlay && clockContainer) {
    startButton.addEventListener("click", function () {
      console.log("Start button clicked - Enabling audio and starting clock");

      // Enable audio by playing silent sounds
      if (tickSound) {
        tickSound.volume = 0.5;
        tickSound.play().catch((e) => console.log("Tick sound unlock:", e));
      }
      if (alarmSound) {
        alarmSound.volume = 0.7;
      }

      // Hide start overlay
      startOverlay.style.transition = "opacity 0.5s ease-out";
      startOverlay.style.opacity = "0";
      setTimeout(() => {
        startOverlay.style.display = "none";
        // Show clock container
        clockContainer.style.display = "flex";
        // Start clock animation
        startClockAnimation();
      }, 500);
    });
  }
});

// Cleanup function
window.addEventListener("beforeunload", function () {
  if (clockInterval) {
    clearInterval(clockInterval);
  }
});
