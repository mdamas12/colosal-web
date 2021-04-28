<template>
    <q-page class="container-detail-product q-pt-md">
        <q-breadcrumbs gutter="sm" class="q-px-md text-grey menu-breadcrumbs" active-color="grey">
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Todos los productos" class="texto-breadcrumbs" to="/products"/>
            <q-breadcrumbs-el label="Almacén" class="texto-breadcrumbs text-bluesito"/>
        </q-breadcrumbs>
        <div class="container-detail-product2">
            <div class="row">
                <div class="col-12 col-md q-gutter-sm q-pa-md">
                    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide v-for="(pic, index) in this.getDataDetail.picture" :img-src="pic.image" :key="index + 1" :name="index + 1" class="border-img-slide"></q-carousel-slide>
                    </q-carousel>
                </div>
                <div class="col q-gutter-sm q-pa-md">
                    <div class="text-title-product">{{getDataDetail.name}}</div>
                    <!-- <div>
                        <q-card flat dense>
                            <q-card-section>
                                <div class="row">
                                    <div class="col-12 col-md">
                                        <div class="text-title-brand"> Categoría : {{getDataDetail.brand.name}}</div> 
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <q-separator />
                    <q-card flat dense>
                            <q-card-section>
                                <div class="row">
                                    <div class="col-12 col-md">
                                        <div class="text-title-brand"> ID Producto : <span class="text-ID-product">{{getDataDetail.id}}</span></div> 
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-separator />
                        <q-card flat dense>
                            <q-card-section>
                                <div class="row">
                                    <div class="col-12 col-md">
                                        <div class="text-title-brand"> Costo : <span class="text-red">{{getDataDetail.coin}} {{getDataDetail.price}}</span></div> 
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-separator />
                        <q-card flat dense>
                            <q-card-section>
                                <div class="row">
                                    <div class="col-12 col-md">
                                        <div class="text-title-brand"> Descripción : <span class="text-nota-extra">{{getDataDetail.description}}</span></div> 
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                        <q-separator /> -->
                    <div class="text-ID-product q-mb-md">{{getDataDetail.brand.name}} | ID Producto: {{getDataDetail.id}} </div>
                    <!-- <div class="text-ID-product">ID Producto: {{getDataDetail.id}}</div> -->
                    <q-separator class="mb-detail" />
                    <!-- <div class="text-detail-product">Detail:</div>
                    <div class="text-price-product">{{getDataDetail.price}}</div> -->
                    <div class="text-fventa-product">Costo:</div>
                    <div class="text-price_fventa-product mb-detail">{{getDataDetail.coin}} {{getDataDetail.price}}</div>
                    <!-- <div class="text-quantity-product">Cantidad:</div> -->
                    <!-- <div class="row" v-if=" getDataDetail.quantity > 0">
                        <div class="col-6 col-sm-4">
                            <div class="border">
                                <span class="border">
                                <q-btn flat round color="redsito" icon="remove" class="btn-product" size="md" v-on:click="decreaseProdQty()"></q-btn>
                                {{counter}}
                                <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="md" v-on:click="increaseProdQty()"></q-btn>
                                </span>
                            </div>
                        </div>
                        <div class="col-6 col-md" v-if="status_cart == '' ">
                            <q-btn label="AGREGAR" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md" @click="Shoppingcart()"></q-btn>                            
                        </div>
                        <div class="col-6 col-md" v-if="status_cart != '' ">           
                            <q-btn label="Actualizar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product"  size="md" @click="Shoppingcart()"></q-btn>                            
                          
                        </div>
                    </div> -->

                    <div class="text-msj-cart text-center mb-detail"><b>{{status_cart}}</b></div>
                    <div class="title-nota-extra"><b>Descripción del producto:</b></div>
                    <div class="text-nota-extra text-justify q-pr-md mb-detail">
                        <q-item-label lines="2">
                            {{getDataDetail.description}}
                        </q-item-label>
                    </div>
                    <div v-if="stock_full == false" class="text-msj-stock"><b>{{msj_quantity}}</b></div>
                    <div v-if="stock_full == true" class="text-msj-stock-full"><b>{{msj_quantity}}</b></div>
                     <div class="row" v-if=" getDataDetail.quantity > 0">
                        <div class="col-6 col-sm-4">
                            <div class="border">
                                <span class="border">
                                <q-btn flat round color="redsito" icon="remove" class="btn-product" size="md" v-on:click="decreaseProdQty()"></q-btn>
                                {{counter}}
                                <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="md" v-on:click="increaseProdQty()"></q-btn>
                                </span>
                            </div>
                        </div>
                        <div class="col-6 col-md" v-if="status_cart == '' ">
                            <q-btn label="AGREGAR" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md" @click="Shoppingcart()"></q-btn>                            
                        </div>
                        <div class="col-6 col-md" v-if="status_cart != '' ">           
                            <q-btn label="Actualizar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product"  size="md" @click="Shoppingcart()"></q-btn>                            
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="container-description-product q-px-md q-pt-lg">
            <div class="row">
                <div class="col">
                    <div class="text-title-description">Descripción del producto</div>
                    <div class="text-description q-pa-md text-justify">{{getDataDetail.description}}</div>
                </div>
            </div>
        </div>-->
        <featured-products-carousel-component></featured-products-carousel-component>
        <footer-component></footer-component>
    </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FeaturedProductsCarouselComponent from 'src/components/FeaturedProductsCarouselComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import ProductsServices from '../services/home/products/product.service'
import Product from "../models/products/Product"
import ShoppingcartService   from "../services/home/shoppingcart/shoppingcart.service";
import { Loading } from "quasar";
export default defineComponent({
  components: { FeaturedProductsCarouselComponent, FooterComponent },
  data () {
    return {

      counter: 0,
      status_cart : "",
      stock_full : false,
      slide: 1,
      msj_quantity : "",
      showInitSession: false, 
      getDataDetail: [{
        id: this.$route.params.id,
        name: '',
        description: '',
        coin: '',
        price: '',
        quantitity: null,
        image: '',
        category: [{ name: '' }],
        brand: [{ name: '' }]
      }]
    }
  },
  mounted () {
    this.getProductDetail()
    this.verifyShoppingcart()
    this.refreshComponent()
  },
  methods: {
    increaseProdQty(){
        if (this.counter <= this.getDataDetail.quantity){ //compruebo que no se pase de la cantidad de stock
            this.counter++
        }
    },
    decreaseProdQty(){
        if (this.counter > 1){ 
            this.counter--
        }
    },
    getProductDetail () {
      ProductsServices.getProductDetail(this.$route.params.id).subscribe({
         next: data => {
             this.getDataDetail = new Product(data)
             if ((this.getDataDetail.quantity <= 5) && (this.getDataDetail.quantity >1)){
                 this.msj_quantity = "Solo Quedan "+ this.getDataDetail.quantity+" Disponibles"
             }
             else if(this.getDataDetail.quantity == 1){
               this.msj_quantity = "Solo Queda "+this.getDataDetail.quantity+" Disponible"
             }
             else if(this.getDataDetail.quantity < 1){
              this.msj_quantity = "NO Disponible"             
             }
             else{
                   this.msj_quantity = this.getDataDetail.quantity+" Disponibles"
                   this.stock_full = true
             }
           }
        });
    },
    refreshComponent () {
      this.$watch(
        () => this.$route.params.id,
        (toParams, previousParams) => {
          this.getProductDetail()
        }
      )
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
    verifyShoppingcart() {
       
        let subscription = ShoppingcartService.searchShoppingcart(this.$route.params.id).subscribe({
           
          next: data => {         
            this.counter = data
            this.status_cart  = "Este producto se encuentra en su Carrito de Compra"
           },
           complete: () => {        
               //this.showNotif("data", 'blue-5');
            },
            error: resp =>{
                this.counter = 0
            }
          
        });
    },

    Shoppingcart(){   
        if (this.verifySession() == true){
            if(this.counter == 0){
                this.showNotif("Debe agregar cantidad en producto", 'red-10');
                return 
            }
            if (this.counter > this.getDataDetail.quantity){
                this.showNotif("La Cantidad Supera al stock de este Producto", 'red-10');
                return
            }
            Loading.show();
            const data_cart = {
                'product' : this.getDataDetail.id,
                'quantity' : this.counter
            };
            let subscription = ShoppingcartService.saveShoppingCart(data_cart).subscribe( {
            next: resp =>{
                Loading.hide();
              	if (resp.status == "200"){
					this.showNotif(resp.data, 'red-8');
					this.getProductDetail ();
					
				}
				else{
					this.showNotif(resp.data, 'blue-8');
					this.verifyShoppingcart();
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
    }
  }
})
</script>

<style>
.border{
    border-radius: 9px;
}
.container-detail-product{
    background-color: #FFFFFF;
}
.container-detail-product2{
    background-color: #FFFFFF;
    padding-left: 12%;
    padding-right: 12%;
}
.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}
.text-title-product{
    font-family: 'Poppins-SemiBold';
    font-size: 30px;
}
.text-title-brand{
    font-family: 'Poppins-Regular';
    font-size: 20px;
}
.text-ID-product{
    font-family: 'Poppins-SemiBold';
    font-size: 12px;
    color: #808080
}
.text-detail-product{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.text-price-product{
    font-family: 'Poppins-SemiBold';
    font-size: 30px;
}
.text-detail-product{
    font-family: 'Poppins-Regular';
    font-size: 12px;
}
.text-fventa-product{
    font-family: 'Poppins-Regular';
}
.text-price_fventa-product{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
}
.text-quantity-product{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.title-nota-extra{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.text-nota-extra{
    font-family: 'Poppins-Regular';
    font-size: 14px;
}
.container-description-product{
    background-color: #FAFAFA;
    padding-left: 13%;
    padding-right: 13%;
}
.container-featured-products{
    background-color: #FAFAFA;
}
.text-title-description{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
.text-description{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}
.my-card{
    border-radius: 9px;
}
.text-name-product{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
}

.text-description-product{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}

.border-img-slide{
    border-radius: 12px;
}

.text-msj-cart{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: rgba(3, 11, 88, 0.333)
}
.text-msj-stock{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #FF0000
}

.text-msj-stock-full{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #000957
}
.mb-detail{
    margin-bottom: 30px;
}

@media (min-width:767px){
    .container-detail-product2{
        padding-left: 12%;
        padding-right: 12%;
    }
    .menu-breadcrumbs{
        padding-left: 13%;
        padding-right: 13%;
    }
}
</style>
