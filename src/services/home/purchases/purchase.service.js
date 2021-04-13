import { Observable } from 'rxjs'
import axios from 'axios'
const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';
// const API_URL = 'http://161.35.123.177:8000/'

class PurchasesService {

  getPurchasesList () {
    return Observable.create((observer) => {
      axios.get(API_URL + 'panel/sales/')
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

export default new PurchasesService()