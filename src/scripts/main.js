AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const contador = document.getElementById("contador");
  const birthdayMessage = document.getElementById("birthday-message");
  const dataDoEvento = new Date("2025-04-04T17:25:00").getTime();

  const contaAsHoras = setInterval(() => {
    const agora = new Date().getTime();
    const timeDistance = dataDoEvento - agora;

    if (timeDistance < 0) {
      clearInterval(contaAsHoras);
      contador.style.display = "none";
      birthdayMessage.classList.remove("hidden");
      createConfetti();
      return;
    }

    const dias = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((timeDistance % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);

  function createConfetti() {
    const confettiContainer = document.querySelector(".confetti");
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animation = `fall ${
        Math.random() * 3 + 2
      }s linear infinite`;
      confettiContainer.appendChild(confetti);
    }
  }
});
