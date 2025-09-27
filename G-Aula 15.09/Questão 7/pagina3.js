function contarLetras(palavra){
      let vogais = 0;
      let consoantes = 0;

      const VOGAIS = "aeiou";
         
      for (const letra of palavra.toLowerCase()){
        if (VOGAIS.includes(letra)){
          vogais++
        } else if (letra >= 'a' && letra <= 'z'){
          consoantes++
        }
      }
      return {vogais, consoantes};
    }

    document.getElementById("btnCountLetters").addEventListener("click", () => {
      const palavra = document.getElementById("wordInput").value.trim();
      const resultado = contarLetras(palavra);
      document.getElementById("resultado7").textContent =
        `Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`;
    });