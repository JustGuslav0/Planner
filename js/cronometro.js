var startButton = document.getElementById("startButton");
var timerDisplay = document.getElementById("timer");
var countdown; // Variável para armazenar o intervalo do cronômetro
var isRunning = false; // Variável para rastrear se o cronômetro está em execução ou não

startButton.addEventListener("click", function() {
    if (!isRunning) {
        startButton.textContent = "Parar";
        startButton.disabled = false; // Desabilita o botão enquanto o cronômetro está rodando
        isRunning = true;
        
        var timeLeft = 30 * 60; // 30 minutos em segundos
        updateTimerDisplay(timeLeft); // Atualiza o tempo exibido no cronômetro imediatamente

        countdown = setInterval(function() {
            timeLeft--; // Decrementa o tempo restante
            updateTimerDisplay(timeLeft); // Atualiza o tempo exibido no cronômetro

            if (timeLeft <= 0) {
                clearInterval(countdown); // Para o cronômetro quando o tempo acabar
                startButton.textContent = "Iniciar";
                startButton.disabled = false; // Habilita o botão novamente
                isRunning = false;
            }
        }, 1000); // A cada 1000 milissegundos (1 segundo)
    } else {
        clearInterval(countdown); // Para o cronômetro quando o botão de parar é clicado
        startButton.textContent = "Iniciar";
        startButton.disabled = false; // Habilita o botão novamente
        isRunning = false;
    }
});

function updateTimerDisplay(timeLeft) {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    // Formata os minutos e segundos para exibir no formato "mm:ss"
    var displayMinutes = (minutes < 10 ? '0' : '') + minutes;
    var displaySeconds = (seconds < 10 ? '0' : '') + seconds;

    timerDisplay.textContent = displayMinutes + ":" + displaySeconds;
}