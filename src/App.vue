<template>
  <div id="app">
    <header class="header">
      <h1 class="animated-header">Sistema Inventario Juan Jose Villa Alzate</h1>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4A4A4A;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.header {
  background-color: #2C3E50;
  color: #ECF0F1;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.header h1 {
  margin: 0;
  font-size: 1.8em;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.animated-header {
  transition: color 0.3s;
}

.content {
  flex: 1;
  padding: 40px;
  background-color: #ECF0F1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content router-view {
  width: 100%;
  max-width: 900px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  border-radius: 12px;
  padding: 30px;
  transition: box-shadow 0.3s ease;
}

.content router-view:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
