import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

//const API_URL = "panel/";

class HeaderService {


  getImagesActive(){

    return Observable.create((observer) => {
      axios.get(API_URL + 'header/list-web/')
        .then((response) => {
          //console.log(response.data)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

}

export default new HeaderService()
