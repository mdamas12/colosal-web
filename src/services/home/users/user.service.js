import { Observable } from 'rxjs'
import axios from 'axios'
import tokenHeader from '../../auth.service';
// const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';

const API_URL = process.env.API_URL;

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

  getUserMe (){
    return Observable.create((observer) => {
      axios.get(API_URL + `users/me/`, { headers : tokenHeader()})
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  editProfile (data){
    return Observable.create((observer) => {
      axios.put(API_URL + `users/${data.id}/`, data)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  recovePassword (data){
    return Observable.create((observer) => {
      axios.post(API_URL + `users/recove/`, data)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

}

export default new UsuersService()