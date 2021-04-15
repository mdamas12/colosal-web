import { Observable } from 'rxjs'
import axios from 'axios'
// const API_URL = 'http://localhost:8000/web/home/'
//const API_URL = 'http://localhost:8000/panel/'
// const API_URL = 'http://161.35.123.177:8000/'
const API_URL = process.env.API_URL + 'panel/';

class PromotionsService {
  getPromotions (limit, offset) {
    return Observable.create((observer) => {
      axios.get(API_URL + `promotions/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getPromotion (id) {
    return Observable.create((observer) => {
      console.log("id: "+id);
      axios.get(API_URL + `promotions/search/${id}/`)
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

export default new PromotionsService()
