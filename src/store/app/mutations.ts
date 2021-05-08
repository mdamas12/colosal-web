import { MutationTree } from 'vuex'
import { AppStateInterface } from './state'

const mutation: MutationTree<AppStateInterface> = {
  setStateLogin (state: AppStateInterface) {
    console.log("probando mutacion")
    state.login = true//localStorage.getItem("token") != null
  }
}

export default mutation
