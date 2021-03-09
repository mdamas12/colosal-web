import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/web/home/' // process.env.API_URL+'/v1/';

class CategoriesService{
    getCategories (){
        return Observable.create((observer) => {
          axios.get(API_URL + `categories-featured/`)
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

export default new CategoriesService()