function analisarNumeros(arraydeNumeros) {
  arraydeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let maiorValor = arraydeNumeros[0];
  let menorValor = arraydeNumeros[0];
  let soma = 0;
  let media = 0;

  for (let i = 1; i < arraydeNumeros.length; i++) {
    if (arraydeNumeros[i] > maiorValor) {
      maiorValor = arraydeNumeros[i];
    }

    if (arraydeNumeros[i] < menorValor) {
      menorValor = arraydeNumeros[i];
    }
  }

  for (let i = 0; i < arraydeNumeros.length; i++) {
    soma = soma + arraydeNumeros[i];
    media = soma / arraydeNumeros.length;
  }

  console.log("Maior valor:", maiorValor);
  console.log("Menor valor:", menorValor);
  console.log("Média dos valores:", media);
}

analisarNumeros();