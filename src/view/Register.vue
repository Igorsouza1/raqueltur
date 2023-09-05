<template>
    <div>
        <h1>Create Account</h1>
        <p><input type="text" placeholder="E-mail" v-model="email"></p>
        <p><input type="password" placeholder="Password" v-model="password"></p>
        <p><button @click="register">Submit</button></p>
        <p><button @click="signinWithGoogle">Sign in With Google</button></p>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from "vue-router";

export default {
    name: "RegisterView",
    setup() {
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const auth = getAuth()

        const register = () => {
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log("Registrado");
                console.log(data)
                console.log(auth.currentUser)
                router.push('/feed');
            })
            .catch((error) => {
                console.log(error.code);
            });
        }

        const signinWithGoogle = () => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result.user)
                    router.push("/feed")
                }).catch((error) => {
                    console.log(error.code);
                });
        }

        return {
            email,
            password,
            register,
            signinWithGoogle
        };
    }
}
</script>

<style lang="">
    
</style>
