<template>
    <div class="ClientesView">
        <h4>MODULO DE GESTIÓN CLIENTE</h4>
        <br>
        <section id="s7">
            <nav class="navbar" role="toolbar" aria-label="Basic example">
              <form class="container-fluid justify-content-start btn-group">
                <router-link id="btn2" to="/ListarClientes" class="btn boton" aria-current="page">LISTAR CLIENTES</router-link>
                <router-link id="btn3" to="/IngresarCliente" class="btn boton">NUEVO CLIENTE</router-link>
                <router-link id="btn4" to="/CRUDCliente" class="btn boton">CONSULTAR CLIENTE</router-link>
              </form>
            </nav>
        </section>
        <br>
        <section id="s8">
          <router-view/>
        </section>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ListarClientes from '@/components/ListarClientes.vue';
  import IngresarCliente from '@/components/IngresarCliente.vue';
  import CRUDClientes from '@/components/CRUDCliente.vue';


  export default {
    name: 'Clientes',

    components: {
        ListarClientes,
        IngresarCliente,
        CRUDClientes,
        
    },
  }
  </script>
  
  <style scoped>

  #s7 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4, h5 {
    color:#351d75;
    font-weight: bold;
  }

  label {
    color:#351d75;
    font-weight: bold;
    width: 200px; 
    height: 25px; 
  }

  .boton {
    background-color: #57b2fc; 
    color: #351e76; 
    font-size: 14px; 
    font-weight: bolder;
    border: #351e76; 
    border-radius: 0px;
    width: 200px; 
    height: 25px; 
    text-align: center; 
    box-shadow: 3px 3px 5px #351e76;
    text-decoration: none; 
    padding-top: 3px;
  }

  .boton:hover {
    background-color: #E3C4A8; 
    color: #8b3b06; 
    border: #8b3b06; 
    box-shadow: 3px 3px 5px #8b3b06; 
  }

  input {
    color:#351d75;
    box-shadow: 3px 3px 5px 1px #351e76;  /* inset */
    width: 160px; 
    height: 25px; 
  }

</style>