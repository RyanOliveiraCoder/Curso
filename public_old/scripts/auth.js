document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Manipulação do formulário de cadastro
    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('password').value;

            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nome, email, senha })
                });

                if (response.ok) {
                    alert('Cadastro realizado com sucesso!');
                    window.location.href = 'index.html'; // Redireciona para a página de cursos após o cadastro
                } else {
                    const error = await response.json();
                    alert(`Erro: ${error.message}`);
                }

                
            } catch (error) {
                
                console.error('Erro ao realizar cadastro:', error);
                alert('Erro ao realizar cadastro. Tente novamente.');
            }
        });
    }

    // Manipulação do formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            const email = document.getElementById('email-login').value;
            const senha = document.getElementById('password-login').value;

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, senha })
                });

                if (response.ok) {
                    alert('Login realizado com sucesso!');
                    window.location.href = 'index.html'; // Redireciona para a página de cursos após o login
                } else {
                    const error = await response.json();
                    alert(`Erro: ${error.message}`);
                }
            } catch (error) {
                console.error('Erro ao realizar login:', error);
                alert('Erro ao realizar login. Tente novamente.');
            }
        });
    }
});
