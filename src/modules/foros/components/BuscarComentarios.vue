<template>
  <div class="comentario">
    <div class="imagen">
      <img
        src="https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40"
        alt="Imagen por defecto"
      />
    </div>
    <div class="contenido">
      <div class="informacion">
        <div class="nombre">
          {{ comentario.cedulaEstudiante }}
        </div>
        <div class="fecha">
          {{ fechaFormateada }}
        </div>
        <div class="descripcion">
          {{ comentario.descripcion }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    comentario: Object,
  },
  computed: {
    fechaFormateada() {
      const fechaISO = new Date(this.comentario.fecha);
      const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return fechaISO.toLocaleDateString("es-ES", opciones);
    },
  },
};
</script>
  
<style scoped>
.comentario {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 50%;
}

.imagen {
  margin-right: 10px;
}

.imagen img {
  max-width: 100px;
  border-radius: 50%;
}

.contenido {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}

.informacion {
  font-size: 14px;
  margin-bottom: 10px;
}

.fecha {
  font-weight: bold;
}

.descripcion {
  font-size: 14px;
}

.nombre {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>