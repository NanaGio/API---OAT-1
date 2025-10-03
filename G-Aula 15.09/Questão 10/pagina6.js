function sortearTimes(){
    let nomesInput = document.getElementById("nomes").value.trim();

    if (nomesInput === "") {
        document.getElementById("resultado").innerHTML = "Digite pelo menos um nome.";
        return;
    }

    let nomes = nomesInput.split(",").map(n => n.trim()).filter(n => n !== "");

    let numeroTimes = parseInt(document.getElementById("numeroTimes").value);

     if (numeroTimes < 2) {
        document.getElementById("resultado").innerHTML = "Escolha pelo menos 2 times.";
        return;
    }

    if (numeroTimes > nomes.length) {
        document.getElementById("resultado").innerHTML = "Não é possível ter mais times do que pessoas.";
        return;
    }

    for (let i = nomes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    let times = Array.from({ length: numeroTimes }, () => []);

    nomes.forEach((nome, index) => {
    let timeIndex = index % numeroTimes;
    times[timeIndex].push(nome);
    });

    let resultadoHTML = "";
    times.forEach((time, i) => {
    resultadoHTML += `<h3>Time ${i + 1}</h3><p>${time.join(", ")}</p>`;
    });

    document.getElementById("resultado").innerHTML = resultadoHTML;

}
