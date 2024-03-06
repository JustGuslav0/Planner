document.addEventListener("DOMContentLoaded", function() {
    var switchButton = document.getElementById("checkbox");
    var audio = document.getElementById("myAudio");
    var isPlaying = false;
    audio.loop=true;

    switchButton.addEventListener("change", function() {
        if (this.checked) {
            audio.play();
            isPlaying = true;
        } else {
            audio.pause();
            isPlaying = false;
        }
    });
});