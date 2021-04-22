import { Observable } from 'rxjs'
import axios from 'axios'

// const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';
// const API_URL = 'http://161.35.123.177:8000/'
const API_URL = process.env.API_URL + 'web/home/';

class CategoriesService {
  getCategories () {
    return Observable.create((observer) => {
      // api.get(API_URL + 'categories-featured/')
      axios.get(API_URL + 'categories-featured/')
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
  // getCategorie (id) {
  //   return Observable.create((observer) => {
  //     axios.get(`http://localhost:8000/panel/categories/${id}/`)
  //       .then((response) => {
  //         observer.next(response.data)
  //         observer.complete()
  //       })
  //       .catch((error) => {
  //         observer.error(error)
  //       })
  //   })
  // }
  getListCategories () {
    console.log("seeee")
    return Observable.create((observer) => {
      axios.get(API_URL + 'categories-all/')
        .then((response) => {
          console.log("seeee",response)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log("nooooo",error)
          observer.error(error)
        })
    })
  }
}

export default new CategoriesService()
