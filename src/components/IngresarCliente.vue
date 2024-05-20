<template>
    <div id="crudcliente" :key="componentKey">

        <section id="s10">
            <table>
                <caption id="capa2">INGRESAR NUEVO CLIENTE</caption>
                <tbody>
                    <tr><td></td></tr>
                    <tr>
                        <td><label for="in4">Cedula: </label></td>
                        <td><input id="in4" class="intbl" type="text" v-model="Clientes.cc_clientes"></td>
                    </tr>

                    <tr>
                        <td><label for="in5">Nombres: </label></td>
                        <td><input id="in5" class="intbl" type="text" v-model="Clientes.nombres"></td>
                    </tr>

                    <tr>
                        <td><label for="in6">Apellidos: </label></td>
                        <td><input id="in6" class="intbl" type="text" v-model="Clientes.apellidos"></td>
                    </tr>
                    <tr><td></td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><button id="btn5" @click="Cliente = asignar_cliente(Clientes); ingresar(Cliente); recargarComponente;" >INGRESAR</button></td>
                        <td><button id="btn6" @click="limpiarCampos; recargarComponente;">CANCELAR</button></td>
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
    name: 'IngresarCliente',

    setup() {
        const store = useStore();
        const componentKey = ref(0);

        //Profe == Clientes
        //Profesor == Cliente

        let Clientes = ref({
            cc_clientes: '',
            nombres: '',
            apellidos: '',
        });

        let Cliente = null;

        function limpiarCampos(){
            Clientes.value = {
                cc_clientes: '',
                nombres: '',
                apellidos: '',
            }
        }

        function asignar_cliente(Clientes){
            let Cliente = Clientes;
            return Cliente;
        };

        function actualizarCliente(Cliente){
            store.dispatch('actualizarListaClientes', Cliente);
            alert('Registro ingresado con Éxito');
        }

        const ingresar = (Cliente) => {
            actualizarCliente(Cliente);
            limpiarCampos();
        }

        const recargarComponente = () => {
            componentKey.value++;
        }

        return {
            Cliente,
            Clientes,
            componentKey,
            limpiarCampos,
            asignar_cliente,
            ingresar,
            recargarComponente,
        };
        
    },
  }

</script>

<style scoped>
  #crudcliente {
    max-width: 600px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
  }

  #s10 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
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
    padding: 8px;
    vertical-align: top;
  }

  label {
    font-weight: bold;
  }

  .intbl {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }

  #btn5 {
    background-color: #4CAF50;
    color: white;
  }

  #btn6 {
    background-color: #f44336;
    color: white;
  }

  button:hover {
    opacity: 0.9;
  }
</style>