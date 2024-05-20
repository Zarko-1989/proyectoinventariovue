import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import gestion_clientes_View from '@/views/gestion_clientes_View.vue'
import IngresarCliente from '@/components/IngresarCliente.vue';
import ListarClientes from '@/components/ListarClientes.vue';
import CRUDCliente from '@/components/CRUDCliente.vue';
import gestion_proveedores_View from '@/views/gestion_proveedores_View.vue'
import IngresarProveedor from '@/components/IngresarProveedor.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Proveedores',
    name: 'gestion_proveedores_View',
    component: gestion_proveedores_View,

    children: [
      {
        path: '/IngresarProveedor',
        name: 'IngresarProveedor',
        component: IngresarProveedor
      },

    ]

  },

  {
    path: '/Clientes',
    name: 'gestion_clientes_view',
    component: gestion_clientes_View,

    children: [
      {
        path: '/IngresarCliente', 
        name: 'IngresarCliente', 
        component: IngresarCliente
      },
      {
        path: '/ListarClientes',
        name: 'ListarClientes',
        component: ListarClientes
      },
      {
        path: '/CRUDCliente',
        name: 'CRUDCliente',
        component: CRUDCliente
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
