/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Observable } from 'rxjs'
import axios from 'axios'
// const API_URL = 'http://localhost:8000/web/home/' // process.env.API_URL+'/v1/';
const API_URL = process.env.API_URL + 'web/home/';
const API_URL_BASE = process.env.API_URL


class ProductsService {

  getProductsFeatured() {
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

  getProducts () {
    return Observable.create((observer) => {
      axios.get(API_URL + 'products-all/')
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getProviders (limit, offset) {
    return Observable.create((observer) => {
      axios.get(API_URL + `providers/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  searchProduct (search) {
    return Observable.create((observer) => {
      axios.get(API_URL + `products-search/${search}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  orderProducts (id, limit, offset) {
    return Observable.create((observer) => {
      axios.get(API_URL + `products-orderby/${id}/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getProductDetail (id) {
    return Observable.create((observer) => {
       axios.get(API_URL_BASE + `panel/products/search/${id}/`)
      //axios.get(API_URL + `panel/products/search/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getProductsCategorie (id, limit, offset) {
    return Observable.create((observer) => {
      axios.get(API_URL + `products-categoy/${id}/?limit=${limit}&offset=${offset}`)
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
