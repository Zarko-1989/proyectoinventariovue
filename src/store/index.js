import { createStore } from 'vuex'

export default createStore({
  state: {
    Clientes: {
      cc_clientes: '',
      nombres: '',
      apellidos: '',
    },
  
    ListarClientes: [ 
      {cc_clientes: '1234', nombres: 'Pacho', apellidos: 'Martienz'},
      {cc_clientes: '998', nombres: 'Jesus', apellidos: 'Marin'},
    ],

    Proveedores: {
      cod_proveedores: '',
      nom_proveedores: '',
      tel_proveedores: '',
    },

    ListarProveedores: [
      {cod_proveedores: '1111', nom_proveedores: 'Bimbo', tel_proveedores: '8888'},
    ],
  },
  
  getters: {
  },
  mutations: {
    actualizarListaClientes(state, paramCliente){
      console.log('paramCliente: ', paramCliente);
      state.ListarClientes.push(paramCliente); // Corrected the property name here
      console.log('ListarClientes: ', state.ListarClientes);
    },

    eliminarCliente(state, paramIndex){
      console.log('paramIndex: ', paramIndex);
      state.ListarClientes.splice(paramIndex, 1);
      console.log('ListarClientes: ', state.ListarClientes);
    },

    editarCliente(state, payload) {
      console.log('paramIndex: ', payload.paramIndex);
      console.log('paramCliente: ', payload.paramCliente);
      state.ListarClientes[payload.paramIndex] = payload.paramCliente;
      console.log('ListarClientes: ', state.ListarClientes);
    },

// PROVEEDORES

    actualizarListaProveedores(state, paramProveedor){
      console.log('paramProveedor: ', paramProveedor);
      state.ListarProveedores.push(paramProveedor); // Corrected the property name here
      console.log('ListarProveedores: ', state.ListarProveedores);
    },

    eliminarProveedor(state, paramIndex){
      console.log('paramIndex: ', paramIndex);
      state.ListarProveedores.splice(paramIndex, 1);
      console.log('ListarProveedores: ', state.ListarProveedores);
    },

    editarProveedor(state, payload) {
      console.log('paramIndex: ', payload.paramIndex);
      console.log('paramProveedor: ', payload.paramProveedor);
      state.ListarProveedores[payload.paramIndex] = payload.paramProveedor;
      console.log('ListarProveedores: ', state.ListarProveedores);
    },

  },
  actions: {
    editarProveedor({ commit }, payload) {
      commit('editarProveedor', payload);
    },

    actualizarListaProveedores({ commit }, paramProveedor) {
      commit('actualizarListaProveedores', paramProveedor);
    },

    eliminarProveedor({ commit }, paramIndex) {
      commit('eliminarProveedor', paramIndex);
    },

    // ProveedorES

    editarCliente({ commit }, payload) {
      commit('editarCliente', payload);
    },

    actualizarListaClientes({ commit }, paramCliente) {
      commit('actualizarListaClientes', paramCliente);
    },

    eliminarCliente({ commit }, paramIndex) {
      commit('eliminarCliente', paramIndex);
    },
  },
  modules: {
  }
})
