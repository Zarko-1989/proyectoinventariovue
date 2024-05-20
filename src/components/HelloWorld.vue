<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/Clientes" class="nav-link">Clientes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Proveedores" class="nav-link">Proveedores</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos" class="nav-link">Productos</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="center">
          <div class="ring"></div>
          <span>Pagina en Proceso de elaboración (Cliente 100% funcional)</span>
        </div>
        <!-- Encabezado del Dashboard -->

        <!-- Contenido del Dashboard -->
        <div class="row">
          <!-- Clientes -->
          <div class="col-md-4">
            <div class="card mb-4">
              
              <div class="card-header">
                <router-link to="/Clientes" class="nav-link">Clientes</router-link>
              </div>
              <div class="card-body">
                <!-- Aquí puedes mostrar información de clientes -->
              </div>
            </div>
          </div>
          
          <!-- Proveedores -->
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header">
                <router-link to="/Proveedores" class="nav-link">Proveedores</router-link>
              </div>
              <div class="card-body">
                <!-- Aquí puedes mostrar información de proveedores -->
              </div>
            </div>
          </div>
          
          <!-- Productos -->
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header">
                Productos
              </div>
              <div class="card-body">
                <!-- Aquí puedes mostrar información de productos -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
/* Estilos personalizados */

body{
  margin: 0;
  padding: 0;
  background-color: black;
}

.center{
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.ring{
  position: absolute;
  width: 250px;
  height: 250px;
}
@keyframes ring {
  0%
  {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #335bdf;
  }
  50%
  {
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px #f84e4e;
  }
  100%
  {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #aff827;
  } 
}

.ring::before{
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, .3);
}

span{
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 200px;
  animation: text 3s ease-in-out infinite;
}
@keyframes text {
  50%
  {color: black;}
}

.card-header {
  background-color: #007bff;
  color: #fff;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
}

.card-body {
  font-size: 1.2em;
}
</style>
