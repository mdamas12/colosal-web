/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Observable } from 'rxjs'
import axios from 'axios'
const API_URL = 'http://localhost:8000/web/home/' // process.env.API_URL+'/v1/';
// const API_URL = 'http://161.35.123.177:8000/'

class ProductsService {
  getProducts () {
    return Observable.create((observer) => {
      axios.get(API_URL + 'products-featured/')
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

export default new ProductsService()
