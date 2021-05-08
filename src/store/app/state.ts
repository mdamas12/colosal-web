export interface AppStateInterface {
  login: boolean;
}

function state (): AppStateInterface {
  return {
    login: false
  }
}

export default state
