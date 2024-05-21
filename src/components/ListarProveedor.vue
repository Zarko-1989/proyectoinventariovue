<template>
    <div id="ListarProveedores">

        <h6 id="titulotbl">LISTADO DE PROVEEDORES</h6>
        <section id="s9">
            <br><br>
            <div class="scrollable-table">
                <table>
                    <thead id="thead1">
                        <tr>
                            <th>CODIGO PROVEEDORES</th>
                            <th>NUMERO PROVEEDORES</th>
                            <th>TELEFONO PROVEEDORES</th>
                        </tr>
                    </thead>
                    <tbody id="tbody1">
                        <tr v-for="(item, index) in ListarProveedores" :key="item.cod_proveedores">
                            <td>{{ item.cod_proveedores }}</td>
                            <td>{{ item.nom_proveedores }}</td>
                            <td>{{ item.tel_proveedores }}</td>
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
        name: 'ListarProveedores',

        setup(){
            const store = useStore();

            let Proveedores = ref({
                cod_proveedores: '',
                nom_proveedores: '',
                tel_proveedores: '', 
            });

            function eliminarProveedor(index) {
                store.dispatch('eliminarProveedor', index);
                alert('Registro eliminado Con Éxito');
            }

            function confirmarEliminacion(index){
                if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
                    eliminarProveedor(index);
            }
        }
        return{
            Proveedores,
            confirmarEliminacion,
        };
    },

    computed: {
        ListarProveedores(){
            return this.$store.state.ListarProveedores;
        },
    },
}
</script>

<style scoped>
#ListarProveedores {
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