import { Observable } from 'rxjs'
import axios from 'axios'
import tokenHeader from '../../auth.service';

const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';


class ShoppingcartService {

  getListCart() {
    return Observable.create((observer) => {
      //console.log(tokenHeader())
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

  saveShoppingCart(data_cart) {
 
    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.post(API_URL + 'panel/shoppingcart/customer/',data_cart,{headers : tokenHeader()})
        .then((response) => {
          //console.log(response.data)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log(error.response)
          observer.error(error)
        })
    })
    
  }

  searchShoppingcart(id_product){
    let product = {
      "product" : id_product
    }
    console.log(id_product)
    return Observable.create((observer) => {
    axios.post(API_URL + 'panel/shoppingcart/verify-product/',product,{headers : tokenHeader()})
    .then((response) => {
      console.log(response.status)
      observer.next(response.status)
      observer.complete()
    })
    .catch((error) => {
      observer.error(error)
    });
  })
}

DeleteShopCart(id){ 
    return Observable.create((observer) => {
      axios.delete(API_URL + 'panel/shoppingcart/delete-item/'+id+'/',{headers : tokenHeader()})
      .then((response) => {
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) => {
        observer.error(error)
      });
    })
}


}



export default new ShoppingcartService()