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

    window.location.href = 'https://www.escolavirtual.gov.br/';
});

function togglePasswordVisibility(toggleId, passwordFieldId) {
    const toggleIcon = document.getElementById(toggleId);
    const passwordField = document.getElementById(passwordFieldId);

    toggleIcon.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    });
}

togglePasswordVisibility('togglePassword1', 'camposenha');