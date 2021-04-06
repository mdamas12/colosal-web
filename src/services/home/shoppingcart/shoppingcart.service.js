import { Observable } from 'rxjs'
import axios from 'axios'
import tokenHeader from '../../auth.service';

const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';


class ShoppingcartService {

  getListCart() {
    return Observable.create((observer) => {
      console.log(tokenHeader())
      axios.get(API_URL + 'panel/shoppingcart/customer/',{headers : tokenHeader()})
        .then((response) => {
          console.log(response.data)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log(error.response)
          observer.error(error)
        })
    })

    
  }

}



export default new ShoppingcartService()