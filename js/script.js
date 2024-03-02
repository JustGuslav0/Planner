function toggleMode() {
    var button = document.getElementById("modeButton");

    // Toggle button color
    button.classList.toggle("button-dark");
    button.classList.toggle("button-light");
    var body = document.body;
    var icon = document.getElementById("icon");

    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");

    // Change icon based on mode
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fas", "fa-moon");
        icon.classList.add("far", "fa-sun");
    } else {
        icon.classList.remove("far", "fa-sun");
        icon.classList.add("fas", "fa-moon");
    }
}