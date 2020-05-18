import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messagesIn:[
      {id:1, title:"Hi", sent:(new Date()), from:"Me", content:"short data", isFavorite:false},
      {id:2, title:"HiHi", sent:(new Date()), from:"Maof", content:"another short data", isFavorite:false},
      {id:3, title:"HiHiHi", sent:(new Date()), from:"Afek Cohen", content:"this is a realy but realy long message it suposed to be more than 40 letters so I could check if it works", isFavorite:false}],
    currMsgId: -1
  },
  getters:{
    getMessagesIn(state){
        return state.messagesIn
    },
  },
  mutations: {
    setCurrMsgId(state, id) {
      state.currMsgId = id;
    },
    swapMsgFavorite(state, id){
      let msg = state.messagesIn.find(msg => msg.id === id)
      msg.isFavorite = !msg.isFavorite
    }
  },
  actions: {
    setCurrMsgId({commit}, id){
      commit('setCurrMsgId', id)
  },
  swapMsgFavorite({commit}, id){
      commit('swapMsgFavorite', id)
    }
  },
})
