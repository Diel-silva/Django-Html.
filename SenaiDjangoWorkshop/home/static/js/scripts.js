function moverBotao() {
  const botao = document.getElementById("meuBotao");
  const gif = document.getElementById("gif");

  // Exibe o GIF
  gif.style.display = "block";

  // Faz o botão desaparecer
  botao.classList.add("invisivel");

  // Depois de 500ms (tempo da transição), move o botão e o faz aparecer novamente
  setTimeout(() => {
    // Define nova posição aleatória para o botão
    const novaPosicaoX = Math.random() * (window.innerWidth - botao.offsetWidth);
    const novaPosicaoY = Math.random() * (window.innerHeight - botao.offsetHeight);

    botao.style.left = `${novaPosicaoX}px`;
    botao.style.top = `${novaPosicaoY}px`;

    // Faz o botão reaparecer
    botao.classList.remove("invisivel");

    // Esconde o GIF novamente
    gif.style.display = "none";
  }, 1000); // 500ms é o tempo que o botão leva para sumir
}