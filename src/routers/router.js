import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/estudiantes/:cedula/foros",
        component: () => import("../modules/estudiantes/pages/BuscarForosEstudiantePage")
    },
    {
        path: "/estudiantes/:cedula/noticias",
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
        component: () => import("../modules/foros/pages/ForoPage"),
    },
    {
        path: "/foros",
        component: () => import("../modules/foros/pages/MotrarForosPage"),
    },
    {
        path: "/quejas",
        component: () => import("../modules/foros/pages/QuejasPage"),
    },
    {
        path: "/foros/publicar",
        component: () => import("../modules/foros/pages/PublicarForoPage")
    },
    {
        path: "/noticias",
        component: () => import('../modules/noticias/page/MostrarNoticiasPage')
    },
    {
        path: "/noticias/:tituloCorto",
        component: () => import('../modules/noticias/page/MostrarUnaNoticiaPage')
    },
    {
        path: "/noticias/publicar",
        component: () => import('../modules/noticias/page/PublicarNoticiaPage')
    },

    {
        path: "/",
        component: () => import('../modules/bienvenida/pages/BienvenidaPage.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('../modules/bienvenida/pages/NotFoundPage.vue')
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router