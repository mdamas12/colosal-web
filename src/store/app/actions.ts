import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { AppStateInterface } from './state'

const actions: ActionTree<AppStateInterface, StateInterface> = {
  updateLogin (context) {
    // your code
    console.log("probando accion")
    context.commit('setStateLogin')
  }
}

export default actions
