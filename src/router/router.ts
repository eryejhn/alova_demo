
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "main",
        component: () => import("@/page/Main.vue"),
        children:[
            {
                path: "/teacher",
                name: "teacher",
                component: () => import("@/page/teacher/Teacher.vue"),
            }

        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
