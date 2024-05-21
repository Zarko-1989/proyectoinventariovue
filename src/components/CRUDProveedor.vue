<template>
  <div id="crudProveedores" :key="componentKey">
    <section id="s510">
      <h2>CONSULTAR PROVEEDOR</h2>
      <div class="search-container">
        <input id="in53" class="srch" type="search" placeholder="Buscar por Cédula" v-model="CodigoProveedores"/>
        <button id="bt54" class="btnsrch" @click="consultar_proveedores"><img id="img3" src="../assets/img/buscar.png"></button>
      </div>
      <div class="info-container">
        <div class="info-row">
          <label for="in54">Cédula:</label>
          <input id="in54" class="intbl" type="text" v-model="Proveedores.cod_proveedores" disabled>
        </div>
        <div class="info-row">
          <label for="in55">Nombres:</label>
          <input id="in55" class="intbl" type="text" v-model="Proveedores.nom_proveedores">
        </div>
        <div class="info-row">
          <label for="in56">Apellidos:</label>
          <input id="in56" class="intbl" type="text" v-model="Proveedores.tel_proveedores">
        </div>
      </div>
      <div class="button-container">
        <button @click="modificarProveedor(); recargarComponente();">EDITAR</button>
        <button @click="confirmarEliminacion(); recargarComponente();">ELIMINAR</button>
        <button @click="limpiarCampos();">LIMPIAR</button>
      </div>
    </section>
  </div>
</template>

<script>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
      name: 'CRUDProveedor',

      setup(){

          const store = useStore();

          let CodigoProveedores = ref('');

          let Proveedores = ref({
            cod_proveedores: '',
            nom_proveedores: '',
            tel_proveedores: '',
        });

          let Proveedor = null;

          const componentKey = ref(0);

          const ListarProveedores = computed(() => store.state.ListarProveedores);

          function consultar_proveedores(){
              let index = ListarProveedores.value.findIndex(proveedor => proveedor.cod_proveedores == CodigoProveedores.value);
              if (index !== -1){
                  Proveedores.value.cod_proveedores = ListarProveedores.value[index].cod_proveedores;
                  Proveedores.value.nom_proveedores = ListarProveedores.value[index].nom_proveedores;
                  Proveedores.value.tel_proveedores = ListarProveedores.value[index].tel_proveedores;
              } else {
                  alert('No se encontro un proveedor con el numero de cedula proporcionado');
              }
          }

          const recargarComponente = () => {
              componentKey.value++;
          }

          function limpiarCampos(){
              Proveedores.value = {
              cod_proveedores: '',
              nom_proveedores: '',
              tel_proveedores: '', 
              }
          }

          function modificarProveedor(){
              let index = ListarProveedores.value.findIndex(proveedor => proveedor.cod_proveedores == Proveedores.value.cod_proveedores);
              let payload = { paramIndex: index, paramProveedor: Proveedores.value };
              store.dispatch('editarProveedor', payload);
              alert('Registro editado con Éxito');
              limpiarCampos();
          }

          function eliminarProveedor(index) {
              store.dispatch('eliminarProveedor', index);
              alert('Registro eliminado Con éxito');
          }

          function confirmarEliminacion() {
              if (confirm('¿Estas Seguro que deseas eliminar este registro?')){
                  let index = ListarProveedores.value.findIndex(proveedor => proveedor.cod_proveedores == Proveedores.value.cod_proveedores);
                  eliminarProveedor(index);
                  limpiarCampos();
              }
          }

          return {
              CodigoProveedores,
              Proveedor,
              Proveedores,
              componentKey,
              limpiarCampos,
              consultar_proveedores,
              recargarComponente,
              modificarProveedor,
              confirmarEliminacion,
          };
      },
  }
</script>



<style scoped>
#crudProveedores {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#s510 {
  width: 60%;
  margin-top: 50px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.search-container {
  margin-bottom: 20px;
}

.input-container {
  display: inline-block;
  position: relative;
}

input[type="search"] {
  width: 300px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.btnsrch {
  width: 50px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: #007bff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
}

.btnsrch img {
  width: 100%;
  height: 100%;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-row label {
  width: 100px;
  margin-right: 20px;
  font-weight: bold;
}

.info-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.button-container button {
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button-container button:last-child {
  margin-right: 0;
}

.button-container button:hover {
  background-color: #218838;
}
</style>