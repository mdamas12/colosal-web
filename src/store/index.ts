import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import app from './app';
import { AppStateInterface } from './app/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  app: AppStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      app
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    //strict: !!process.env.DEBUGGING
    strict: true
  })

  return Store
})
