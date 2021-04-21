import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';

// const API_URL = process.env.API_URL;

class UsuersService {
  Login(credentials) {
    return Observable.create((observer) => {
      axios.post(API_URL + 'auth/login/',credentials)
        .then((response) => {
          localStorage.setItem("token", response.data["key"]);
          localStorage.setItem("username", credentials["username"] );
          observer.complete()
        })
        .catch((error) => {
          observer.error()
        })
    })
  }

  Register(credentials) {
    console.log(credentials)
    return Observable.create((observer) => {
      axios.post(API_URL + 'auth/registration/', credentials)
        .then((response) => {
          localStorage.setItem("token", response.data["key"]);
          localStorage.setItem("username", credentials["first_name"]);
          console.log("Todooo biennnnn  ")
          observer.next(response)
          observer.complete()
        })
        .catch((error) => {
          console.log(error)
          observer.error(error)
        })
    })
  }

}

export default new UsuersService()