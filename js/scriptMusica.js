document.addEventListener("DOMContentLoaded", function() {
    var switchButton = document.getElementById("checkbox");
    var audio = document.getElementById("myAudio");
    var isPlaying = false;

    switchButton.addEventListener("change", function() {
        if (this.checked) {
            audio.play();
            isPlaying = true;
            console.log("Música iniciada");
        } else {
            audio.pause();
            isPlaying = false;
            console.log("Música pausada");
        }
    });
});