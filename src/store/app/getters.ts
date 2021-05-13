import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { AppStateInterface } from './state'

const getters: GetterTree<AppStateInterface, StateInterface> = {
  login (context) {
    console.log("entre a getter")
    return context.login
  }
}

export default getters
