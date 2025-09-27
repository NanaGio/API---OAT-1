function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !alturaCm) {
    resultado.innerHTML = "⚠️ Preencha peso e altura corretamente.";
    return;
  }

  const alturaM = alturaCm / 100; // transforma cm em metros
  const imc = (peso / (alturaM * alturaM)).toFixed(2);

  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc}</strong><br>Classificação: ${classificacao}`;
}