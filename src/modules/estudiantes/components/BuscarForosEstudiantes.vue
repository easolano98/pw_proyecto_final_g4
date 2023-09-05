<template>
    <table border="2">
        <tr>
            <th>Asunto</th>
            <th>Descripcion</th>
            <th>Fecha</th>

        </tr>

        <tr v-for="foro in foros" :key="foro.id">
            <td><button>{{ foro.asunto }}</button></td>
            <td><button>{{ foro.descripcion }}</button></td>
            <td><input type="datetime-local" v-model="foro.fecha" disabled></td>
        </tr>
        <tbody></tbody>
    </table>
</template>
  
<script>

import { consultarForosEstudianteFachada } from "../helpers/EstudianteCliente"

export default {
    data() {
        return {
            foros: [],
           
        }
    },
    props: {
        cedula: {
            type: String,
            required: true,
        },
    },
    methods: {
        async buscarForosEstudiantes() {
            var cedula=this.cedula
            var foros = await consultarForosEstudianteFachada(cedula);
            this.foros = foros;
        }
    },
    mounted() {
        this.buscarForosEstudiantes();
    }
}
</script>
  
<style scoped>
button {
    border: none;
}
</style>