function validarUsuario(usuario) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value; 

  if (nome === "" || email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }
  
  if (!email.includes("@")) {
    alert("Por favor, insira um email válido.");
    return false;
  } else {
    alert("Usuário validado com sucesso!");
    return true;
  }
}