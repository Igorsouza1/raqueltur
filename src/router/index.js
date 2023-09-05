import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('../view/Home.vue')},
        {path: '/register', component: () => import('../view/Registro.vue')},
        {path: '/sign-in', component: () => import('../view/Signin.vue')},
        {path: '/login', component: () => import('../view/Login.vue')},
        {
            path: '/feed', 
            component: () => import('../view/Feed.vue'),
            meta:{
                requiresAuth: true,
            }
        },
    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(getAuth(), (user) => {
            removeListener();
            resolve(user);
        }, reject);
    });
};

router.beforeEach(async (to, from, next) => { 
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(await getCurrentUser()){
            next();
        } else{
            alert("You must be logged in to see this page");
            next("/")
        }
    } else{
        next()
    }
});


export default router;