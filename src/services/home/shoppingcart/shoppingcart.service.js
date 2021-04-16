import { Observable } from 'rxjs'
import axios from 'axios'
import tokenHeader from '../../auth.service';

//const API_URL = 'http://localhost:8000/' // process.env.API_URL+'/v1/';
const API_URL = process.env.API_URL;

//const API_URL = process.env.API_URL;

class ShoppingcartService {

  getListCart() {
    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.get(API_URL + 'panel/shoppingcart/customer/',{headers : tokenHeader()})
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

  saveShoppingCart(data_cart) {
 
    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.post(API_URL + 'panel/shoppingcart/add-product/',data_cart,{headers : tokenHeader()})
        .then((response) => {
          //console.log(response.data)
          observer.next(response)
          observer.complete()
        })
        .catch((error) => {
          console.log(error.response)
          observer.error(error)
        })
    })
    
  }

  savePromotionShoppingCart(data_cart){

    return Observable.create((observer) => {
      //console.log(tokenHeader())
      axios.post(API_URL + 'panel/shoppingcart/add-promotion/',data_cart,{headers : tokenHeader()})
        .then((response) => {
          //console.log(response.data)
          observer.next(response)
          observer.complete()
        })
        .catch((error) => {
          console.log(error.response)
          observer.error(error.response.data)
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
      //console.log(response.status)
      observer.next(response.data)
      //observer.complete()
    })
    .catch((error) => {
      //console.log(error.response.data)
      observer.error(error)
    });
  })
}

searchPromotionShoppingcart(id_promotion){
  let promotion = {
    "promotion_id" : id_promotion
  }
  return Observable.create((observer) => {
  axios.post(API_URL + 'panel/shoppingcart/verify-promotion/',promotion,{headers : tokenHeader()})
  .then((response) => {
   // console.log(response.status)
    observer.next(response)
    //observer.complete()
  })
  .catch((error) => {
    observer.error(error)
  });
})
}

UpdateShoppingCart(id,data){
    //console.log(id_product)
    return Observable.create((observer) => {
    axios.put(API_URL + 'panel/shoppingcart/change/'+id+'/',data,{headers : tokenHeader()})
    .then((response) => {
      observer.next(response.data)   
    })
    .catch((error) => {
       console.log(error)
      observer.error(error.response.data)
    });
})

}

DeleteShopCart(id){ 
    return Observable.create((observer) => {
      axios.delete(API_URL + 'panel/shoppingcart/change/'+id+'/',{headers : tokenHeader()})
      .then((response) => {
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) => {
        observer.error(error.response.data)
      });
    })
}


}



export default new ShoppingcartService()