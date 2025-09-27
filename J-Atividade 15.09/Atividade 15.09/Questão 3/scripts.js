function gerarTabuada(numero) {
  const numeroInserido = document.getElementById("numberInput").value;
  let resultado = "<h2>Tabuada do " + numeroInserido + ":</h2><ul>";
  for (let i = 1; i <= 10; i++) {
    resultado += "<h5>" + numeroInserido + " x " + i + " = " + (numeroInserido * i) + "</h5>";
  }
  resultado.innerHTML = resultado + "</ul>";
  document.getElementById("resultado").innerHTML = resultado;
}