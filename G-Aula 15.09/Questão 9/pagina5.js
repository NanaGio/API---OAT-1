function maiorPalavra(frase) {
    const palavras = frase.split(/[^a-zA-ZÀ-ÿ]+/);

    let maior = "";
    for (let palavra of palavras) {
     if (palavra.length > maior.length) {
        maior = palavra;
      }
    }
      return maior;
    }

    function mostrarMaior() {
      const frase = document.getElementById("frase").value;
      const resultado = maiorPalavra(frase);
      document.getElementById("resultado").textContent = 
        `A maior palavra é: ${resultado}`;
}