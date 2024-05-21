<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/clientes" class="nav-link">Clientes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/proveedores" class="nav-link">Proveedores</router-link>
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
          <span>Pagina en Proceso de elaboración (Cliente y Proveedores 100% funcional)</span>
        </div>
        <!-- Encabezado del Dashboard -->

        <!-- Contenido del Dashboard -->
        <div class="row">
          <!-- Clientes -->
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header">
                <router-link to="/clientes" class="nav-link">Clientes</router-link>
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
                <router-link to="/proveedores" class="nav-link">Proveedores</router-link>
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
  name: 'Dashboard',
};
</script>

<style>
.center {
  text-align: center;
  margin-top: 20%;
}
.ring {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
