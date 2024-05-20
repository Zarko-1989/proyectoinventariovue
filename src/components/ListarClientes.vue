<template>
    <div id="listarclientes">

        <h6 id="titulotbl">LISTADO CLIENTES</h6>
        <section id="s9">
            <br><br>
            <div class="scrollable-table">
                <table>
                    <thead id="thead1">
                        <tr>
                            <th>Cedula Cliente</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                    <tbody id="tbody1">
                        <tr v-for="(item, index) in ListarClientes" :key="item.cc_clientes">
                            <td>{{ item.cc_clientes }}</td>
                            <td>{{ item.nombres }}</td>
                            <td>{{ item.apellidos }}</td>
                            <td class="accion"><button id="btn5" @click="confirmarEliminacion(index)">ELIMINAR</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: 'ListarClientes',

        setup(){
            const store = useStore();

            let Clientes = ref({
                cc_clientes: '',
                nombres: '',
                apellidos: '', 
            });

            function eliminarCliente(index) {
                store.dispatch('eliminarCliente', index);
                alert('Registro eliminado Con Éxito');
            }

            function confirmarEliminacion(index){
                if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
                eliminarCliente(index);
            }
        }
        return{
            Clientes,
            confirmarEliminacion,
        };
    },

    computed: {
        ListarClientes(){
            return this.$store.state.ListarClientes;
        },
    },
}
</script>

<style scoped>
#listarclientes {
  padding: 20px;
}

#titulotbl {
  color: #351d75;
  font-weight: bold;
  text-align: center;
}

#s9 {
  margin-top: 20px;
}

.scrollable-table {
  max-height: 400px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #351d75;
  color: white;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.accion {
  text-align: center;
}

#btn5 {
  background-color: #57b2fc;
  color: #351e76;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#btn5:hover {
  background-color: #e3c4a8;
  color: #8b3b06;
}
</style>