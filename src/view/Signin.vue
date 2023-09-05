<template>
    <div>
        <h1>Login</h1>
        <p><input type="text" placeholder="E-mail" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p v-if="errMessage">{{ errMessage }}</p>
        <p> <ButtonComponent @click="register" /> </p>
        <p> <ButtonComponent @click="signinWithGoogle" /></p>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "vue-router";

import ButtonComponent from "../components/Button.vue"

export default {
    name: "SigninView",
    components: {
        ButtonComponent
    },
   
    setup() {
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const auth = getAuth()
        const errMessage = ref()
        

        const register = () => {
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log("Logado");
                console.log(data)
                console.log(auth.currentUser)
                router.push('/feed');
            })
            .catch((error) => {
                console.log(error.code);
                switch(error.code){
                    case "auth/invalid-email":
                        errMessage.value = "Invalid email"
                        break;
                    case "auth/user-not-found":
                        errMessage.value = "Usuario nao encontrado"
                        break;
                    case "auth/wrong-password":
                        errMessage.value = "Senha errada"
                        break;
                    default:
                        errMessage.value = "Email or password invalid"
                        break;
                    
                }
            });
        }
        

        const signinWithGoogle = () => {
            // Implemente a lógica de login com o Google aqui
        }

        return {
            email,
            password,
            register,
            signinWithGoogle,
            errMessage
        };
    }
    
}
</script>

<style lang="">
    
</style>
