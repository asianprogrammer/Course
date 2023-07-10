import {createRouter, createWebHistory} from "vue-router"

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home"
        }
    ]
})

export default router;