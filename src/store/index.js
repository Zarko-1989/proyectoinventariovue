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

  },
  actions: {
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
