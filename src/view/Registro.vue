<template>
    <HeaderComponent />
    <div class="registration-container">
        <div class="registration-content">
            <p class="section-title">Cadastro</p>
            <div class="form-section">
                <div class="input-group">
                    <label class="input-label">Email</label>
                    <input placeholder="Digite seu e-mail" type="email" class="input-field" v-model="email" @blur="validateEmail" />
                    <p v-if="!isEmailValid" style="color: red;">E-mail inválido!</p>
                </div>
                <div class="input-group">
                    <label class="input-label">CPF</label>
                    <input placeholder="000.000.000-00" type="text" class="input-field" v-model="cpf" @input="formatCPF" />
                </div>
                <div class="input-group">
                    <label class="input-label">Nome</label>
                    <input placeholder="Digite seu nome" type="text" class="input-field" />
                </div>
                <div class="input-group">
                    <label class="input-label">Senha</label>
                    <div class="password-group">
                        <input placeholder="Digite sua senha" type="password" class="input-field" v-model="password" />
                    </div>
                </div>
                <div class="input-group">
                    <label class="input-label">Confirmar senha</label>
                    <div class="password-group">
                        <input placeholder="Confirme sua senha" type="password" class="input-field" v-model="confirmPassword" @blur="checkPasswords" />
                    </div>
                    <p v-if="!arePasswordsEqual" style="color: red;">As senhas não são iguais!</p>
                </div>
            </div>
            <div class="button">
                <p class="button-text">Cadastrar</p>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '@/components/Header.vue'

export default {
    name: "RegistroView",
    components:{
        HeaderComponent
    },
    data() {
        return {
            email: '',
            cpf: '',
            password: '',
            confirmPassword: '',
            isEmailValid: true,
            arePasswordsEqual: true
        };
    },
    methods: {
        formatCPF() {
            let value = this.cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

            // Limita a 11 números
            if (value.length > 11) {
                value = value.substr(0, 11);
            }

            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            this.cpf = value;
        },
        validateEmail() {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            this.isEmailValid = regex.test(this.email);
        },
        checkPasswords() {
            this.arePasswordsEqual = this.password === this.confirmPassword;
        }
    }
}
</script>
<style scoped>
  /* Container Principal */
.registration-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    padding: 1.125rem 1.625rem 2.4375rem;
    background: white;
    border-radius: 0.625rem;
    box-shadow: 0rem 0.25rem 4rem rgba(0, 0, 0, 0.25);
}

/* Cabeçalho */
.header-title {
    font-weight: 600;
    font-size: 1.125rem;
    color: #7da88c;
    margin-bottom: 2.1875rem;
}

/* Conteúdo de Registro */
.registration-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 1.8125rem 1.46875rem 3.5rem 1.125rem;
}

.section-title {
    font-weight: 500;
    font-size: 1.5625rem;
    color: #7da88c;
    margin-bottom: 1.3125rem;
}

/* Seção do Formulário */
.form-section {
    display: flex;
    flex-direction: column;
    gap: 0.5625rem;
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

.input-field::placeholder {
    color: #ababab;
}


.icon-container {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
}

/* Botão de Registro */
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5625rem;
    margin-top: 1.9375rem;
    background: #7da88c;
    border-radius: 0.375rem;
}

.button-text {
    font-weight: 500;
    font-size: 1rem;
    color: white;
}  
</style>