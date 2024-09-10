document.getElementById('acessar').addEventListener('click', function() {

    const email = document.getElementById('campousuario').value;
    const senha = document.getElementById('camposenha').value;
    
    const errorBar = document.getElementById('error-bar');
    
    errorBar.textContent = '';
    errorBar.style.display = 'none';

    if (!email || !senha) {
        errorBar.textContent += 'Preencha ambos os campos';

        errorBar.style.display = 'block';
        return; 
    }
    window.location.href = '../paginasprincipais/index.html'
});

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('camposenha');
    const icon = this;

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});


