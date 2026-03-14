document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('password-input').value;
    const errorDiv = document.getElementById('error-message');

    errorDiv.textContent = '';

    alert(`Usuário: ${email} \n Senha: ${senha}`);

    try {
        
        window.location.href = 'dashboard.html'; 
        
    } catch (err) {
        errorDiv.textContent = "Erro ao fazer login. Tente novamente.";
    }
});