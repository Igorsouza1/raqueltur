import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDrpsbj9GxcGNGbCCxUJoE1O7CVYktj4Bk",
  authDomain: "raqueltur-30d8c.firebaseapp.com",
  projectId: "raqueltur-30d8c",
  storageBucket: "raqueltur-30d8c.appspot.com",
  messagingSenderId: "858812895113",
  appId: "1:858812895113:web:c355f62298e77bb0ab9b58",
  measurementId: "G-1FW9PG0FEJ"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
