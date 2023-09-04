import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/estudiantes/:cedula/foros",
        component: () => import("../modules/estudiantes/pages/BuscarForosEstudiantePage")
    },
    {
        path: "/estudiantes/:cedula/foros",
        component: () => import("../modules/estudiantes/pages/BuscarNoticiasEstudiantePage")
    },
    {
        path: "/estudiantes/:cedula",
        component: () => import("../modules/estudiantes/pages/InformacionEstudiantePage")
    },
    {
        path: "/estudiantes/registro",
        component: () => import("../modules/estudiantes/pages/RegistroPage")
    },
    {
        path: "/foros/:asunto",
        component: () => import("../modules/foros/pages/ForoPage.vue"),
    },
    {
        path: "/foros",
        component: () => import("../modules/foros/pages/MotrarForosPage.vue"),
    },
    {
        path: "/foros/publicar",
        component: () => import("../modules/foros/pages/PublicarForoPage.vue")
    },
    {
        path: "/noticias",
        component: () => import('../modules/noticias/page/MostrarNoticiasPage')
    },
    {
        path: "/noticias/:cedula/estudiante",
        component: () => import('../modules/noticias/page/MostrarUnaNoticiaPage')
    },
    {
        path: "/noticias/publicar",
        component: () => import('../modules/noticias/page/PublicarNoticiaPage')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router