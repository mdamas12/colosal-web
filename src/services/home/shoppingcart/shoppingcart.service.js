import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';


class SoppingcartService {

  listcart(token) {
 
    return Observable.create((observer) => {
      axios.get(API_URL + 'panel/shoppingcart/customer/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : token,
        }
         }
      )
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



export default new SoppingcartService()