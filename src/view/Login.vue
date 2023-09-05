<template>
    <HeaderComponent />
    <div class="login-container">
        <div class="login-content">
            <div class="welcome-section">
                <p class="welcome-message">Bem Vindo!</p>
                <p class="login-title">Login</p>
                <p class="login-instruction">Faça login para acessar a internet</p>
            </div>
            <div class="form-section">
                <div class="input-group">
                    <label class="input-label">E-mail</label>
                    <input placeholder="Entre com o seu usuario" type="text" class="input-field" />
                </div>
                <div class="input-group">
                    <label class="input-label">Senha</label>
                    <div class="password-group">
                        <input placeholder="Entre com sua senha" type="password" class="input-field" />
                        <div class="icon-container">
                            <!-- SVG content -->
                        </div>
                    </div>
                </div>
                <div class="button">
                    <router-link to="/path-to-login" class="login-btn">Login</router-link>
                </div>
            </div>
        </div>
        <div class="register-section">
            <span class="info-text">Não tem um conta?</span>
            <router-link to="/register" class="register-link">Registre-se</router-link>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'

export default {
    name:"LoginComponent",
    components: {
        HeaderComponent
    },
}
</script>
<style >
/* Container Principal */
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    padding: 2.25rem 1.4375rem 4.1875rem 1.375rem;
    margin-top: 3.4375rem;
    background: white;
    border-radius: 0.625rem;
    box-shadow: 0rem 0.25rem 4rem rgba(0, 0, 0, 0.25);
}

/* Conteúdo de Login */
.login-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
}

/* Seção de Boas-Vindas */
.welcome-section {
    text-align: center;
}

.welcome-message {
    font-weight: 300;
    font-size: 1.1875rem;
    color: black;
}

.login-title {
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1.5625rem;
    color: #7da88c;
}

.login-instruction {
    font-weight: 400;
    font-size: 0.9375rem;
    color: black;
}

/* Seção do Formulário */
.form-section {
    display: flex;
    flex-direction: column;
    gap: 2.375rem;
    margin-top: 1.3125rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    max-width: 95%;
}

.input-label {
    font-weight: 400;
    font-size: 1rem;
    color: black;
    margin-bottom: 0.5625rem;
}

.input-field {
    width: 100%;
    height: 3.6875rem;
    padding-left: 1.125rem;
    font-weight: 300;
    font-size: 0.875rem;
    background: white;
    border-radius: 0.375rem;
    transition: border 0.35s ease-in-out;
}

.input-field:focus {
    outline: 1px solid #7da88c;
    outline-offset: 0px; /* Opcional: ajusta a distância entre o contorno e o elemento */
}

/* Seção de Opções */
.options-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.4375rem;
}

.checkbox {
    width: 0.875rem;
    height: 0.8125rem;
    background: white;
    border: 0.0625rem solid black;
}

.option-text {
    font-weight: 300;
    font-size: 0.75rem;
    color: black;
    margin-left: 0.25rem;
}

.option-link {
    font-weight: 300;
    font-size: 0.75rem;
    color: #4d4d4d;
}

/* Botão de Login */
.button{
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 3.5625rem;
    padding: 0 7.1875rem;
    background: #7da88c;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    text-align: center;
    text-decoration: none;
}

/* Seção de Registro */
.register-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.6875rem;
}

.info-text {
    font-weight: 300;
    font-size: 0.75rem;
    color: #7d7d7d;
}

.register-link {
    font-weight: 600;
    font-size: 0.75rem;
    color: black;
    margin-left: 0.5rem;
}
</style>
