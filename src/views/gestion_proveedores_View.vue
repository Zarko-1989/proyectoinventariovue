<template>
    <div class="ProveedoresView">
        <h4>MODULO DE GESTIÓN PROVEEDORES</h4>
        <br>
        <section id="s57">
            <nav class="navbar" role="toolbar" aria-label="Basic example">
              <form class="container-fluid justify-content-start btn-group">
                <router-link id="btn22" to="/ListarProveedor" class="btn boton" aria-current="page">LISTAR PROVEEDORES</router-link>
                <router-link id="btn23" to="/IngresarProveedor" class="btn boton">NUEVO PROVEEDOR</router-link>
                <router-link id="btn24" to="/CRUDProveedor" class="btn boton">CONSULTAR PROVEEDORES</router-link>
              </form>
            </nav>
        </section>
        <br>
        <section id="s28">
          <router-view/>
        </section>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ListarProveedor from '@/components/ListarProveedor.vue';
  import IngresarProveedor from '@/components/IngresarProveedor.vue';
  import CRUDProveedor from '@/components/CRUDProveedor.vue';


  export default {
    name: 'Proveedores',

    components: {
        ListarProveedor,
        IngresarProveedor,
        CRUDProveedor,
        
    },
  }
  </script>
  
  <style scoped>
.ProveedoresView {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
}

.ProveedoresView h4 {
  color: #2c3e50;
  font-size: 24px;
  font-weight: bold;
}

.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}

.btn-group {
  display: flex;
  gap: 10px;
}

.boton {
  color: #fff;
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.boton:hover {
  background-color: #0056b3;
}

#s28 {
  margin-top: 20px;
}
</style>