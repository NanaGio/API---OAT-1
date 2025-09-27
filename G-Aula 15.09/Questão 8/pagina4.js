function gerarCupom(tamanho = 8) {
  const numeros = "0123456789";
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const caracteres = numeros + letras.toUpperCase();
  let resultado = "";

  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[randomIndex];
  }

  return resultado;
}

function mostrarCupom() {
  document.getElementById("resultado").textContent = gerarCupom(10);
}