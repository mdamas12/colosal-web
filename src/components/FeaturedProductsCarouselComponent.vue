<template>
        <div class="container-featured-products-carousel q-pt-lg">
            <div class="row">
                <div class="col q-pa-md">
                    <div class="text-title">
                        Productos destacados
                        <a class="q-pl-md enlace-ver cursor-pointer" @click="$router.push('/products')">Ver más</a>
                    </div>
                </div>
            </div>
         <div class="container gt-sm" style="margin-left:-20px; margin-right:-20px">
                <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    infinite
                    swipeable
                    animated
                    arrows
                    control-color="red-10"
                    class="bg-accent container-carousel q-px-md"
                    style="height:450px">
                    <q-carousel-slide :name="slide" class="col" v-for="(slide,index) in productsGroups" :key="slide">
                        <div class="row" v-if="load">
                            <div class="col-6 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-6 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-6 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                        <div class="row justify-center" v-else>
                            <div class="col-6 col-md q-gutter-sm q-pa-md" v-for="(product,i) in products.slice(index * itemsProdRow, (index+1) * itemsProdRow)" :key="product.id">
                                <q-card class="my-card card" @click="$router.push({ path: `/products/detail/${product.id}/` })">
                                    <q-card-section class="text-center">
                                        <q-img 
                                            style="max-width:150px"
                                            v-bind:src="'http://localhost:8000' + product.image" 
                                            class="img-product"></q-img>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-product">
                                            {{product.name}} 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product">
                                      {{product.coin}}  {{product.price}}
                                    </q-card-section>
                                     <q-card-section class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity">
                                            {{product.quantity}} Disponibles 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center" >
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id)" size="md"></q-btn>                                   
                                </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
         </div>
				 <div class="container lt-md">
            <q-carousel
                    v-model="slideresponsive"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    infinite
                    swipeable
                    animated
                    arrows
                    control-color="red-10"
                    class="bg-accent container-carousel q-px-lg"
                    style="height:465px">
                    <q-carousel-slide :name="product.id" v-for="product in products" :key="product.id">
                        <div class="row" v-if="load">
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                        <div class="row justify-center" v-else>
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="my-card card" @click="$router.push({ path: `/products/detail/${product.id}/` })">
                                    <q-card-section class="text-center">
                                        <q-img 
                                            style="max-width:150px"
                                            v-bind:src="'http://localhost:8000' + product.image" 
                                            class="img-product"></q-img>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-product">
                                            {{product.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product">
                                      {{product.coin}} {{product.price}} 
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity">
                                            {{product.quantity}} Disponibles 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id)" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide>
            </q-carousel>
         </div>
        </div>			
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductsService from '../services/home/products/product.service'
import axios from 'axios'
import { Loading } from "quasar";
import ShoppingcartService   from "../services/home/shoppingcart/shoppingcart.service";
import { stat } from 'fs';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default defineComponent({
  name: 'FeaturedProductsCarouselComponent',
  data () {
    return {
      shopp:[],
      incart: [],
      productsShop: [],
      slide: 0,
			slideresponsive: 1,
      load: true,
      itemsProdRow: 3,
			itemsProdRowResponsive: 1,
      products: []
    }
  },
  computed: {
    productsGroups () {
      return Array.from(Array(Math.ceil(this.products.length / this.itemsProdRow)).keys())
    }
  },
  created () {
    this.allProducts()
    // this.searchData();
    // this.productsFilter = this.products
    // this.spliteCategories();
  },
  //   mounted () {
  //     setTimeout(() => {
  //       this.load = false
  //     }, 3000)
  //     ProductsService.getProducts().subscribe({
  //       next: data => {
  //         this.products = data.results
  //         console.log(data)
  //       },
  //       complete: () => console.log('[complete]')
  //     })
  //   }
  methods: {
    allProducts () {
        
      this.load = true
      const headers = { 'Content-Type': 'application/json' }
      axios.get('http://localhost:8000/web/home/products-featured/', { headers })
        .then(response => {
          this.productsShop = response.data
          //buscar si el usuario tiene productos en carrito de compra
          let subscription = ShoppingcartService.getListCart().subscribe( {
			next: data => {
				this.shopp = data.results
                //console.log(this.shopp)	
                for (let i = 0; i < this.productsShop.length; i++){
                    let swich = false 
                    for (let j = 0; j < this.shopp.length; j++){
                        
                        if((swich == false) && (this.productsShop[i].id == this.shopp[j].product.id)){   
                            this.incart[i] = true
                            swich = true
                            console.log(this.productsShop[i].name)
                        }
                        if((swich == false) && (this.productsShop[i].id != this.shopp[j].product.id)){
                            this.incart[i] = false
                            }
                    }
                }
                this.products = this.productsShop
                	
			},
            complete: ()=>{}
			});

          
     
          console.log(this.incart)
          this.load = false
        })
    },
    verifySession(){
      let token = localStorage.getItem("token")
      let username = localStorage.getItem("username")
      if ((token != null) && (username != null)) {

          return true;
      }
      else{
        return false;
       
      }
    },
    async Shoppingcart(productID){   
        if (this.verifySession() == true){
            ShoppingcartService.searchShoppingcart(productID).subscribe({
                next: status => {
                    this.showNotif("El producto ya esta registrado en carrito", 'blue-5');
                },
                error: data =>{
                    Loading.show();
                    const data_cart = {
                        product : productID,
                        quantity : 1
                    };
                    let subscription = ShoppingcartService.saveShoppingCart(data_cart).subscribe( {
                        complete: () => {
                            Loading.hide();
                            this.showNotif("producto agregado al carrito de compra", 'blue-5');
                        },
                        error: () => {
                            Loading.hide();
                            this.showNotif("Error al agregar producto", 'red-10');
                            }
                    });
                },
                complete: () => {}
            });
        }
        else{
           this.showNotif("Debe Iniciar Sesion", 'red-10');
           this.showInitSession = true;
        }
    },
    showNotif (message , color) {
      this.$q.notify({
        message: message,
        color: color,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    }
  }
})
</script>

<style>
    .container-featured-products-carousel{
        background-color: #FAFAFA;
        padding-left: 12%;
        padding-right: 12%;
    }
    .container-carousel{
        height: 425px;
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
    }
    .enlace-ver{
        color:#EB0004;
        font-family: 'Poppins-Regular';
        font-size: 19px;
    }
    .card{
        min-height: 360px;
    }
    .my-card:hover .img-product{
        -webkit-transform: scale(1.00);
        transform: scale(1.00);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
    }
    .img-product{
        width: 50%;
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
    }
    .text-name-product{
        font-family: 'Poppins-SemiBold';
        font-size: 16px;
    }
    .text-description-product{
        font-family: 'Poppins-Regular';
        font-size: 16px;
    }
    .text-price-product{
        font-family: 'Poppins-SemiBold';
        font-size: 24px;
    }
    .btn-product{
        border-radius: 9px;
        font-family: 'Poppins-SemiBold';
    }
    .skeleton-card{
        min-height: 360px;
        border-radius: 27px;
    }
    @media (min-width:320px) and (max-width: 767px) {
        .container-featured-products-carousel{
            padding-left: 0;
            padding-right: 0;
        }
        .img-product{
            width: 70%;
        }
        .height-card{
            height: 100px;
        }
    }
    @media (min-width:1500px){
        .container-carousel{
        height: 480px;
        }
    }
    .text-quantity{
        color: #666;
    }
</style>
