const dataFinal = new Date("Jan 1, 2026 00:00:00").getTime();

const timer = setInterval(function() {
  const agora = new Date().getTime();
  const distancia = dataFinal - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Feliz ano novo!";
  }
}, 1000);