function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // Exemplo de validação simples - substitua por lógica real do servidor
    if (username === privates.username && password === privates.password) {
        messageElement.style.color = "#2ecc71";
        alert("Login bem-sucedido!");
    } else {
        messageElement.style.color = "#e74c3c";
        alert("Credenciais inválidas. Tente novamente.");
    }
}

