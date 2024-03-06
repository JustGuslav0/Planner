function toggleMode() {
    var button = document.getElementById("modeButton");

    // Toggle button color
    button.classList.toggle("button-dark");
    button.classList.toggle("button-light");
    var body = document.body;
    var icon = document.getElementById("icon");
    var music = document.getElementById("musica");

    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");

    // Change icon based on mode
    if (body.classList.contains("dark-mode")) {
        music.classList.remove("fas","fa-music");
        icon.classList.remove("fas", "fa-moon");
        icon.classList.add("far", "fa-sun");
        music.classList.add("fasFaMusicWhite");
    } else {
        music.classList.remove("fasFaMusicWhite")
        icon.classList.remove("far", "fa-sun");
        icon.classList.add("fas", "fa-moon");
        music.classList.add("fas", "fa-music");
    }
}