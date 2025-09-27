function converter(){
    var temperatura = document.getElementById("temperatura").value;
    var tipo = document.getElementById("tipoConversao").value;
    var resultado = "";

    if (temperatura === "") {
        document.getElementById("resultado").innerHTML = "Por favor, digite uma temperatura.";
        return;
    }

    if (tipo === "CtoF") {
        var f = (temperatura * 9/5) + 32;
        resultado = temperatura + "°C = <strong>" + f.toFixed(2) + "°F</strong>";
    } else {
        var c = (temperatura - 32) * 5/9;
        resultado = temperatura + "°F = <strong>" + c.toFixed(2) + "°C</strong>";
    }

    document.getElementById("resultado").innerHTML = resultado;
    }