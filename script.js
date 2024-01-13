function startCountdown(seconds) {
    let timerElement = document.getElementById("timer");

    function updateTimer() {
      if (seconds > 0) {
        let days = Math.floor(seconds / (60 * 60 * 24));
        let hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((seconds % (60 * 60)) / 60);
        let remainingSeconds = seconds % 60;

        // Add leading zeros if needed
        days = String(days).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        remainingSeconds = String(remainingSeconds).padStart(2, "0");

        // Update the timer display
        timerElement.innerHTML = `${days}:${hours}:${minutes}:${remainingSeconds}`;

        // Decrease the remaining seconds
        seconds--;
      } else {
        // Display a message or take some action when the countdown reaches 0
        timerElement.innerHTML = "Countdown complete!";

        // Stop the interval
        clearInterval(intervalId);
      }
    }

    // Call updateTimer immediately to set the initial display
    updateTimer();

    // Set up the interval to update the timer every second
    let intervalId = setInterval(updateTimer, 1000);
  }

  // Example: Start a countdown timer 192968 seconds
  startCountdown(192968);