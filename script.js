// Set the date we're counting down to
const countDownDate = new Date("May 31, 2024 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    // Display the result in the element with id="days"
    document.getElementById("days").innerText = days;
    
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);