<template>
    <div id="crudproveedor" :key="componentKey">

        <section id="s21">
            <table>
                <caption id="capa21">INGRESAR NUEVO PROVEEDOR</caption>
                <tbody>
                    <tr><td></td></tr>
                    <tr>
                        <td><label for="in24">Codigo: </label></td>
                        <td><input id="in24" class="intbl" type="text" v-model="Proveedores.cod_proveedores"></td>
                    </tr>

                    <tr>
                        <td><label for="in25">Nombre: </label></td>
                        <td><input id="in25" class="intbl" type="text" v-model="Proveedores.nom_proveedores"></td>
                    </tr>

                    <tr>
                        <td><label for="in26">Telefono: </label></td>
                        <td><input id="in26" class="intbl" type="text" v-model="Proveedores.tel_proveedores"></td>
                    </tr>
                    <tr><td></td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><button id="btn25" @click="Proveedor = asignar_proveedor(Proveedores); ingresar_proveedor(Proveedor); recargarComponente;" >INGRESAR PROVEEDOR</button></td>
                        <td><button id="btn26" @click="limpiarCampos; recargarComponente;">CANCELAR</button></td>
                    </tr>
                </tfoot>
            </table>

        </section>

    </div>
</template>

<script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';

  export default {
    name: 'IngresarProveedor',

    setup() {
        const store = useStore();
        const componentKey = ref(0);

        //Profe == Clientes
        //Profesor == Cliente

        let Proveedores = ref({
            cod_proveedores: '',
            nom_proveedores: '',
            tel_proveedores: '',
        });

        let Proveedor = null;

        function limpiarCampos(){
            Proveedores.value = {
                cod_proveedores: '',
                nom_proveedores: '',
                tel_proveedores: '',
            }
        }

        function asignar_proveedor(Proveedores){
            let Proveedor = Proveedores;
            return Proveedor;
        };

        function actualizarProveedor(Proveedor){
            store.dispatch('actualizarListaProveedores', Proveedor);
            alert('Registro ingresado con Éxito');
        }

        const ingresar_proveedor = (Proveedor) => {
            actualizarProveedor(Proveedor);
            limpiarCampos();
        }

        const recargarComponente = () => {
            componentKey.value++;
        }

        return {
            Proveedor,
            Proveedores,
            componentKey,
            limpiarCampos,
            asignar_proveedor,
            ingresar_proveedor,
            recargarComponente,
        };
        
    },
  }

</script>

<style scoped>
#crudproveedor {
  margin: 20px;
  font-family: Arial, sans-serif;
}

#s21 {
    max-width: 600px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
  }

table {
  width: 100%;
  border-collapse: collapse;
}

caption {
    font-size: 1.5em;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
    caption-side: top;
    text-align: center;
    padding: 5px;
  }

td {
  padding: 10px;
}

label {
  display: inline-block;
  margin-bottom: 5px;
  color: #333;
}

.intbl {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

tfoot td {
  text-align: center;
}

@media (max-width: 600px) {
  table, tfoot td {
    display: block;
    width: 100%;
  }

  tfoot td {
    text-align: right;
  }

  button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>