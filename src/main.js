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
]

function openLink1() {
    // Open rickroll link
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function openLink2() {
    // Open rickroll but different link
    window.open("https://www.youtube.com/watch?v=iik25wqIuFo");
}

window.onload = function() {
    // replace the h2 element with id date with the current date
    document.getElementById("date").innerHTML = " " + new Date().toDateString() + " ";

    // update the p element with id joke with a random joke from the array
    document.getElementById("joke").innerHTML = " " + arrayofjokes[Math.floor(Math.random() * arrayofjokes.length)] + " ";
}