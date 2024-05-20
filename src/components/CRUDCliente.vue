<template>
    <div id="crudcliente" :key="componentKey">
        <section id="s10">
            <table>
                <caption id="cap2">CONSULTAR CLIENTE</caption>
                <tbody>
                    <tr><td> </td></tr>
                    <tr><td> </td></tr>
                    <tr>
                        <td><input id="in3" class="srch" type="search" placeholder="Cedula" v-model="Codigo"/></td>
                        <td><button id="bt4" class="btnsrch" @click="consultar_clientes"><img id="img3" src="../assets/img/buscar.png" alt=""></button></td>
                    </tr>
                    <tr><td> </td></tr>
                    <tr>
                        <tr><label for="in4">CEDULA: </label></tr>
                        <td><input id="in4" class="intbl" type="text" v-model="Clientes.cc_clientes" disabled></td>
                    </tr>
                

                    <tr>
                        <td><label for="in5">NOMBRES: </label></td>
                        <td><input id="in5" class="intbl" type="text" v-model="Clientes.nombres"></td>
                    </tr>
                    <tr>
                        <td><label for="in6">APELLIDOS: </label></td>
                        <td><input id="in6" class="intbl" type="text" v-model="Clientes.apellidos"></td>
                    </tr>
                    <tr><td> </td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><button id="btn8" @click="modificarCliente(); recargarComponente();">EDITAR</button></td>
                        <td><button id="btn9" @click="confirmarEliminacion(); recargarComponente();">ELIMINAR</button></td>
                    </tr>
                    <tr>
                        <td colspan="2"> <button id="btn10" @click="limpiarCampos();">LIMPIAR</button></td>
                    </tr>
                </tfoot>
                
            </table>

        </section>

    </div>
</template>

<script>
    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: 'CRUDClientes',

        setup(){

            const store = useStore();

            let Codigo = ref('');

            let Clientes = ref({
                cc_clientes: '',
                nombres: '',
                apellidos: '', 
            });

            let Cliente = null;

            const componentKey = ref(0);

            const ListarClientes = computed(() => store.state.ListarClientes);

            function consultar_clientes(){
                let index = ListarClientes.value.findIndex(cliente => cliente.cc_clientes = Codigo.value);
                if (index !== -1){
                    Clientes.value.cc_clientes = ListarClientes.value[index].cc_clientes;
                    Clientes.value.nombres = ListarClientes.value[index].nombres;
                    Clientes.value.apellidos = ListarClientes.value[index].apellidos;
                } else {
                    alert('No se encontro un cliente con el numero de cedula proporcionado');
                }
            }

            const recargarComponente = () => {
                componentKey.value++;
            }

            function limpiarCampos(){
                Clientes.value = {
                cc_clientes: '',
                nombres: '',
                apellidos: '', 
                }
            }

            function modificarCliente(){
                let index = ListarClientes.value.findIndex(cliente => cliente.cc_clientes == Clientes.value.cc_clientes);
                let payload = { paramIndex: index, paramCliente: Clientes.value };
                store.dispatch('editarCliente', payload);
                alert('Registro editado con Éxito');
                limpiarCampos();
            }

            function eliminarCliente(index) {
                store.dispatch('eliminarCliente', index);
                alert('Registro eliminado Con éxito');
            }

            function confirmarEliminacion() {
                if (confirm('¿Estas Seguro que deseas eliminar este registro?')){
                    let index = ListarClientes.value.findIndex(cliente => cliente.cc_clientes == Clientes.value.cc_clientes);
                    eliminarCliente(index);
                    limpiarCampos();
                }
            }

            return {
                Codigo,
                Cliente,
                Clientes,
                componentKey,
                limpiarCampos,
                consultar_clientes,
                recargarComponente,
                modificarCliente,
                confirmarEliminacion,
            };
        },
    }
</script>

<style scoped>

  #s10 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    padding-left: 5px;
    box-shadow: 3px 3px 5px 1px #351e76;  /* inset */
  }

  .srch {
    border-radius: 4px;
    box-shadow: none;
  }

  .intbl {
    width: 98%;
  }

  button {
    background-color: #57b2fc; 
    color: #351e76; 
    font-size: 14px; 
    font-weight: bolder;
    border: #351e76; 
    border-radius: 8px; 
    width: 130px; 
    height: 25px; 
    text-align: center; 
    box-shadow: 3px 3px 5px #351e76; 
  }

  button:hover {
    background-color: #E3C4A8; 
    color: #8b3b06; 
    border: #8b3b06; 
    box-shadow: 3px 3px 5px #8b3b06; 
  }

  .btnsrch {
    border-radius: 4px;
    box-shadow: 2px 2px 5px 1px #351e76;
    width: 30px; 
    height: 30px; 
    padding: 1px;
  }

  #img3 {
    width: 22px; 
    height: 22px;
  }

  .btnsrch:hover {
    box-shadow: 2px 2px 5px #8b3b06;
  }

  #img3:hover {
    width: 26px; 
    height: 26px;
  }

  h5 {
    color:#351d75;
    font-weight: 800;
  }

  label {
    color:#351d75;
    font-weight: 600;
  }

  p, input {
    color:#351d75;
  }

  table {
    border-collapse: separate;  /* collapse, separate*/
    border-spacing: 2px;
    height:auto;
    margin: 5px; 
    padding: 1px;
  }

  caption {
    font-size: 15pt;
    font-weight: bolder;
    color:#351d75;
    caption-side: top; 
    text-align: center; 
    padding:5px; 
  }

  td {  /* celdas */
    padding: 5px;
    text-align: left;
    vertical-align: middle;
  }

  tfoot td {
    padding: 5px;
    text-align: center;
    vertical-align: middle;
  }

  

</style>