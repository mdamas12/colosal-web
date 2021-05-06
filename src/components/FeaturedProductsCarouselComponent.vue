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
                    class="bg-azul-tenue container-carousel q-px-md"
                    style="height:475px">
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
                                <q-card class="my-card card">
                                    <q-card-section class="text-center"  @click="$router.push({ path: `/products/detail/${product.id}/` })">
                                        <q-img 
                                            style="max-width:150px; height: 150px;"
                                            v-bind:src="product.image" 
                                            class="img-product"></q-img>
                                    </q-card-section>
                                    <q-card-section class="text-center"  @click="$router.push({ path: `/products/detail/${product.id}/` })">
                                        <q-item-label lines="2" class="text-name-product-feature">
                                            {{product.name}} 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-brand-product-feature">
                                            {{product.brand.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product-feature">
                                      {{product.coin}} {{product.price}}
                                    </q-card-section>
    
                                     <!-- <q-card-section v-if="product.quantity > 1" class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity">
                                            {{product.quantity}} Disponibles 
                                        </q-item-label>
                                    </q-card-section>
                                       <q-card-section v-if="product.quantity == 1" class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity-adv">
                                           Solo {{product.quantity}} Disponible 
                                        </q-item-label>
                                    </q-card-section> -->
                                      <q-card-section v-if="product.quantity <= 0" class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity-none-product">
                                            NO Disponible
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section  v-if="product.quantity > 0" class="text-center q-pt-none" >
                                        <div class="row items-center">
                                            <div class="col-5">
                                                <div class="row items-center justify-end">
                                                    <q-card flat bordered>
                                                        <div class="col-8 q-px-md q-py-sm quantity-product-feature">
                                                        {{product.shopp}}
                                                    </div>
                                                    </q-card>
                                                    
                                                    <div class="col-3">
                                                        <div class="row">
                                                               <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="xs"  @click="increaseProdQty(product.index)"></q-btn>
                                                        </div>
                                                        <div class="row">
                                                             <q-btn flat round color="redsito" icon="remove" class="btn-product" size="xs"  @click="decreaseProdQty(product.index)"></q-btn>
                                                        </div>
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-7">
                                                <div class="row items-center">
                                                    <q-btn label="Agregar" color="blue" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id, product.shopp)" size="md"></q-btn>
                                                </div>
                                            </div>
                                        </div>                          
                                    </q-card-section>
                                    <!-- <q-card-section  v-if="product.quantity <= 0" class="text-center" >
                                    </q-card-section> -->
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
         </div>

        <!-- *********************** 
        **** Version Responsive ****
        **************************** -->
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
                    style="height:475px">
                    <q-carousel-slide :name="product.id" v-for="(product,i) in products" :key="product.id">
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
                            <div class="col-12 col-md-12 q-gutter-sm q-pa-md">
                                <q-card class="my-card card" @click="$router.push({ path: `/products/detail/${product.id}/` })">
                                    <q-card-section class="text-center">
                                        <q-img 
                                            style="max-width:150px; height: 150px;"
                                            v-bind:src="product.image" 
                                            class="img-product"></q-img>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-product-feature">
                                            {{product.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-brand-product-feature">
                                            {{product.brand.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product-feature">
                                      {{product.coin}} {{product.price}} 
                                    </q-card-section>
                                    <!-- <q-card-section v-if="product.quantity > 1" class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity">
                                            {{product.quantity}} Disponibles 
                                        </q-item-label>
                                    </q-card-section>
                                       <q-card-section v-if="product.quantity == 1" class="text-center q-pt-none">
                                        <q-item-label lines="2" class="text-quantity-adv">
                                           Solo {{product.quantity}} Disponible 
                                        </q-item-label>
                                    </q-card-section> -->
                                      <q-card-section>
                                        <q-item-label v-if="product.quantity <= 0" class="text-center q-pt-none text-quantity-none-product" lines="2">
                                            NO Disponible
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section  v-if="product.quantity > 0" class="text-center q-pt-none" >
                                       <div class="row items-center">
                                            <div class="col-5">
                                                <div class="row items-center justify-end">
                                                    <q-card flat bordered>
                                                        <div class="col-8 q-px-md q-py-sm quantity-product-feature">
                                                        {{product.counter}}
                                                    </div>
                                                    </q-card>
                                                    
                                                    <div class="col-3">
                                                        <div class="row">
                                                             <q-btn flat round color="redsito" icon="remove" class="btn-product" size="xs"  @lick="decreaseProdQty(i)"></q-btn>
                                                        </div>
                                                        <div class="row">
                                                               <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="xs"  @click="increaseProdQty(i)"></q-btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-7">
                                                <div class="row items-center">
                                                    <div class="col">
                                                        <q-btn label="Agregar" color="blue" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id)" size="md"></q-btn>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                     
                                    </q-card-section>
                                    <!-- <q-card-section  v-if="product.quantity <= 0" class="text-center" >
                                    </q-card-section> -->
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
      products: [],
      counter : []

    }
  },
  computed: {
    productsGroups () {
      return Array.from(Array(Math.ceil(this.products.length / this.itemsProdRow)).keys())
    }
  },
  //created () {
    //this.allProducts()
    // this.searchData();
    // this.productsFilter = this.products
    // this.spliteCategories();
 // },
    mounted () {
    //   this.refreshComponent()
       this.allProducts()

     },
  methods: {

    
    allProducts () {    
      this.load = true
      ProductsService.getProductsFeatured().subscribe({
        next: response => {
            let productsShop = response  
          
            //buscar si el usuario tiene productos en carrito de compra
            if(this.verifySession()){
                ShoppingcartService.getListCart().subscribe({
                    next: data => {
                        let itemcart = data.results
                        for (let i = 0; i < productsShop.length; i++){
                            let swich = false 
                            productsShop[i].shopp = 0
                            productsShop[i].index = i
                            for (let j = 0; j < itemcart.length; j++){
                                if((itemcart[j].product!=null) && (swich == false) && (productsShop[i].id == itemcart[j].product.id)){   
                                    this.incart[i] = true
                                    productsShop[i].shopp  = itemcart[j].quantity
                                    swich = true
                                }
                                if((itemcart[j].product!=null) && (swich == false) && (productsShop[i].id != itemcart[j].product.id)){
                                    this.incart[i] = false                                   
                                }
                            }
                        }
                        this.products = productsShop
                    },
                    error: err =>{
                        console.log(err.response.data)
                    },
                    complete: ()=>{}
                });

                
            }
           
             //console.log(this.products)
            this.load = false
        }
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
    Shoppingcart(product_id, shopp_quantity){   
        if (this.verifySession() == true){
            if(shopp_quantity == 0){
                this.showNotif("Debe agregar cantidad en producto", 'red-10');
                return 
            }
          
            Loading.show();
            const data_cart = {
                'product' : product_id,
                'quantity' : shopp_quantity
            };
            let subscription = ShoppingcartService.saveShoppingCart(data_cart).subscribe( {
            next: resp =>{
                Loading.hide();
              	if (resp.status == "200"){
					this.showNotif(resp.data, 'red-8');
					
					
				}
				else{
					this.showNotif(resp.data, 'blue-8');
					
				}
               
             },
             complete: () => {
               Loading.hide();
             
             },
             error: () => {
               Loading.hide();
               this.showNotif("Error al agregar producto", 'red-10');
              }
            });
        }
        else{
           this.showNotif("Debe Iniciar Sesión", 'red-10');
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
    },
    increaseProdQty(i){     
        if (this.products[i].shopp < this.products[i].quantity){ //compruebo que no se pase de la cantidad de stock
            this.products[i].shopp += 1   
        }
    },
    decreaseProdQty(i){
        if (this.products[i].shopp > 0){ 
            this.products[i].shopp -= 1  
        }
    }
  }
})
</script>

<style>
    .container-featured-products-carousel{
        background-color: #F2F7FF;
        padding-left: 12%;
        padding-right: 12%;
    }
    .container-carousel{
        height: 425px;
        padding-left: 3%;
        padding-right: 3%;
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
    }
    .enlace-ver{
        color:#EB0004;
        font-family: 'Poppins-Regular';
        font-size: 16px;
    }
    .card{
        min-height: 360px;
    }

    .my-card:hover{
    box-shadow: 0 5px 28px rgba(156, 156, 156, 0.3), 0 10px 10px rgba(156, 156, 156, 0.3);
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
        /* min-height: 300px; */
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
    }
    .text-name-product-feature{
        font-family: 'Poppins-SemiBold';
        font-size: 18px;
    }
    .text-brand-product-feature{
        font-family: 'Poppins-Regular';
        font-size: 16px;
    }
    .quantity-product-feature{
        font-family: 'Poppins-Regular';
        font-size: 16px;
    }
    .text-price-product-feature{
        font-family: 'Poppins-SemiBold';
        font-size: 22px;
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
        font-weight: 700;
        color: rgb(17, 3, 95);
    }
    .text-quantity-none-product{
        margin: 16px 0 16px 0;
        font-weight: 700;
        color: rgb(197, 11, 11);
        font-family: 'Poppins-SemiBold';
    }
     .text-quantity-adv{
        font-weight: 700;
        color: rgb(212, 199, 7);
    }
</style>
