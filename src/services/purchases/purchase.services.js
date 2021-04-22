import { Observable } from 'rxjs'
import axios from 'axios'
import tokenHeader from '../auth.service';

const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';

// const API_URL = process.env.API_URL;

class PurchaseService {

  Getpayments(type) {
    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.get(API_URL + 'panel/payments/banks/'+type+'/')
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

  SaveSale(sale) {
 
    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.post(API_URL + 'panel/sales/',sale,{headers : tokenHeader()})
        .then((response) => {
          //console.log(response.data)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          //console.log(error.response.data)
          observer.error(error.response.data)
        })
    })
    
  }

  getSalesByStatus (id){
    return Observable.create((observer) => {
      axios.get(API_URL + `panel/sales/list-order/${id}/`,{headers : tokenHeader()})
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateReference(purchaseId, code){
    return Observable.create((observer) => {
      axios.put(API_URL + `panel/sales/update-reference/${purchaseId}/`,code,{headers : tokenHeader()})
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })

  }

  GetPurchaseDetail(id){
    return Observable.create((observer) => {
      axios.get(API_URL + `panel/sales/detail/${id}/`)
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



export default new PurchaseService()