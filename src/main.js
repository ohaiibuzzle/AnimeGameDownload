let arrayofjokes = [
    "Did you try reading the docs? They are useful.",
    "Powered by advanced cat technologies",
    "Clearly Cyno has not fixed the installer yet",
    "I'm not sure if this is a bug or a feature",
    "Coming soon in PlayCover Hourly",
    "PCTT stands for what we get working on PlayCover: PlayCutt",
    "Mining bitcoin on your browser",
    "Did you try turning your Mac off and on again?",
    "Keyboard not found. Press F1 to continue",
    "Brain not found. Tap with hammer to continue",
    "As developers our job is to insult users as frequently and ferociously as possible",
    "Hmm, you're looking for something?",
    "Isopropyl alcohol",
]

function openLink1() {
    // Store the original button text
    let originalText = document.getElementById("link1btn").textContent;
    // Disable the #link1btn button
    document.getElementById("link1btn").disabled = true;
    // 60 seconds timer that updates the button text
    let timer = 60;
    let interval = setInterval(function() {
        document.getElementById("link1btn").textContent = "Downloading in " + timer + " seconds";
        timer--;
        if (timer < 0) {
            clearInterval(interval);        
            // Navigate to rickroll
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }, 1000);
    // Re-enable the #link1btn button after 60 seconds
    setTimeout(function() {
        document.getElementById("link1btn").disabled = false;
        document.getElementById("link1btn").textContent = originalText;
    }, timer * 1000);
}

function openLink2() {
    // Store the original button text
    let originalText = document.getElementById("link2btn").innerHTML;
    // Disable the #link2btn button
    document.getElementById("link2btn").disabled = true;
    // 60 seconds timer that updates the button text
    let timer = 60;
    let interval = setInterval(function() {
        document.getElementById("link2btn").innerHTML = "Downloading in " + timer + " seconds";
        timer--;
        if (timer < 0) {
            clearInterval(interval);
            // Navigate to alternative rickroll
            window.location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
        }
    }, 1000);
}

window.onload = function() {
    // replace the h2 element with id date with the current date
    document.getElementById("date").innerHTML = " " + new Date().toDateString() + " ";

    // update the p element with id joke with a random joke from the array
    document.getElementById("joke").innerHTML = " " + arrayofjokes[Math.floor(Math.random() * arrayofjokes.length)] + " ";
}