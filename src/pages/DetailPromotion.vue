<template>
  <q-page class="container-detail-promotion q-pt-md">
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey breadcrumbs-promotions" active-color="grey" style="font-size: 15px">
      <q-breadcrumbs-el label="Volver a Home" icon="arrow_back" to="/" class="texto-breadcrumbs" />
      <q-breadcrumbs-el label="Todas las promociones" class="texto-breadcrumbs" to="/promotions"/>
      <q-breadcrumbs-el label="Almacén" class="texto-breadcrumbs text-bluesito"/>
    </q-breadcrumbs>
    <div class="container-detail-promotion2">
      <div class="row">
        <div class="col-12 col-md q-gutter-sm fondo-img-detail-promotion">
          <!-- <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide v-for="(pic,index) in images" :key="index + 1" :name="index + 1" :img-src="pic" class="border-img-slide" ></q-carousel-slide>
          </q-carousel> -->
          <q-carousel 
            v-model="slide"
            animated
            swipeable
            padding
            thumbnails
            transition-prev="slide-right"
            transition-next="slide-left"
            >
            <q-carousel-slide v-for="(pic,index) in images" :key="index + 1" :name="index + 1" :img-src="pic" class="border-img-slide column flex-center no-margin" ></q-carousel-slide>
          </q-carousel>
        </div>
        <div class="col q-gutter-sm q-pa-md">
          <div class="text-title-promotion">{{promotion.name}} </div>
          <div class="text-ID-promotion q-mb-md">Categoría: {{promotion.category.name}}</div>
          <q-separator class="mb-detail" />
          <div class="text-fventa-promotion">Costo:</div>
          <div class="text-price_fventa-promotion mb-detail">{{promotion.coin}}  {{promotion.price}}</div>
          <!-- <div class="text-title-brand">{{promotion.category.name}}</div> -->
          <div v-if="promotion.quantity > 0" class="mb-detail">
            <div class="text-detail-promotion">Cantidad Disponible :</div>
            <div class="text-quantity">{{promotion.quantity}}</div>
          </div>
           <div v-if="promotion.quantity  < 1" class="mb-detail">
            <div class="text-quantity-none-detail-promotion">NO Disponible</div>
          </div>
          <!-- <div class="text-fventa-promotion">Costo:</div>
          <div class="text-price_fventa-promotion">{{promotion.coin}}  {{promotion.price}}</div> -->
          <div class="text-quantity-promotion">cantidad :</div>

            <div v-if="promotion.quantity < 1" class="row mb-detail" disabled="true">
            <div class="col-6 col-sm-4">
              <div class="border">
                <span class="border">
                  <q-btn flat round color="redsito" icon="remove" class="btn-promotion" size="md" v-on:click="decreaseProdQty()"></q-btn>
                    {{counter}}
                  <q-btn flat round color="indigo-10" icon="add" class="btn-promotion" size="md" v-on:click="increaseProdQty()"></q-btn>  
                </span>
              </div>
            </div>
            <div class="col-6 col-md">
              <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-promotion" size="md" @click="ToShoppingcart()"></q-btn>
            </div>
          </div>

          <div v-if="promotion.quantity > 0 " class="row mb-detail">
            <div class="col-6 col-md">
              <div class="border">
                <span class="border">
                  <q-btn flat round color="redsito" icon="remove" class="btn-promotion" size="md" v-on:click="decreaseProdQty()"></q-btn>
                    {{counter}}
                  <q-btn flat round color="indigo-10" icon="add" class="btn-promotion" size="md" v-on:click="increaseProdQty()"></q-btn>  
                </span>
              </div>
            </div>
            <div class="col-6 col-md">
              <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-promotion" size="md" @click="ToShoppingcart()"></q-btn>
            </div>
          </div> 
          <div class="msj-nota-extra mb-detail">{{status_cart}}</div>
          <div class="title-nota-extra"><b>Productos:</b></div>
          <q-list dense class="rounded-borders">
            <q-item clickable v-ripple v-for="promo in promotion.promotion_detail" :key="promo.product.id">
              <q-item-section class="title-nota-extra">
               {{promo.quantity}} - {{promo.product.name}}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div class="container-description-promotion q-px-md q-pt-lg">
      <div class="row">
        <div class="col">
          <div class="text-title-promotion">Descripción de la promoción</div>
          <div class="text-description q-pa-md text-justify">{{promotion.description}}</div>
        </div>
      </div>
    </div>
    <featured-products-carousel-component></featured-products-carousel-component>
    <footer-component></footer-component>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="white" @click="goToWz()">
        <img src="~assets/img/whatsapp-icon.svg" style=" width: 25px;" >
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import FeaturedProductsCarouselComponent from 'src/components/FeaturedProductsCarouselComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import PromotionsServices from '../services/home/promotions/promotion.service'
import ShoppingcartService   from "../services/home/shoppingcart/shoppingcart.service";
import { Loading } from "quasar";
export default defineComponent({
  components: { FeaturedProductsCarouselComponent, FooterComponent },
  data() {
    return {
      counter: 0,
      slide: 1,
      images: [],
      status_cart : '',
      promotion: [{
        id: this.$route.params.id,
        name: '',
        description: '',
        coin: '',
        price: '',
        quantity: null,
        image: null,
        category: [{ name: '' }],
        promotion_detail: []
      }],
    }
  },
  mounted () {
    this.getPromotionDetail()
    this.refreshComponent()
  },
  methods: {

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
    getPromotionDetail () {
      PromotionsServices.getPromotion(this.$route.params.id).subscribe({
        next: data => {
          //console.log(data)
          this.promotion =  data
          let products = data.promotion_detail
          let i = 1
          this.images[0] = this.promotion.image
          for (i = 0 ; i<+ data.promotion_detail.length; i++){
             this.images[i+1] = data.promotion_detail[i].product.image
           
          }
          this.verifyShoppingcart();
          
        }
      })
    },

    ToShoppingcart(){
        if (this.verifySession() == true){
            if(this.counter < 1){
                this.showNotif("Debe agregar una cantidad", 'red-10');
                return 
            }
            if (this.counter > this.promotion.quantity){
                this.showNotif("La Cantidad Supera lo disponible de esta Promoción", 'red-10');
                return
            }
             
            Loading.show();
            const data_cart = {
                'promotion' : this.promotion.id,
                'quantity' : this.counter
            };
            let subscription = ShoppingcartService.savePromotionShoppingCart(data_cart).subscribe( {
            next: resp =>{
                Loading.hide();
              	if (resp.status == "200"){
                    this.showNotif(resp.data, 'red-8');
                    //this.getPromotionDetail();
                }
                else{
                  this.showNotif(resp.data, 'blue-8');
                  this.verifyShoppingcart();
                }
               
               },
             complete: () => {
                  Loading.hide();
                },
             error: (resp) => {
               Loading.hide();
               this.showNotif(resp, 'red-10');
              }
            });
        }
        else{
          this.showNotif("Inicia Sesión para agrerar a tu carrito de compra", 'red-10');
        }
    },

  verifyShoppingcart() {
       
        let subscription = ShoppingcartService.searchPromotionShoppingcart(this.$route.params.id).subscribe({
           
          next: (resp) => {         
            this.counter = resp.data
            this.status_cart  = "Promoción está en su Carrito de Compra"
           },
           complete: () => {        
               //this.showNotif("data", 'blue-5');
            }
          
        });
    },
   increaseProdQty(){
        if (this.counter < this.promotion.quantity){ //compruebo que no se pase de la cantidad de stock
            this.counter++
        }
    },
    decreaseProdQty(){
        if (this.counter > 1){ 
            this.counter--
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
    refreshComponent () {
      this.$watch(
        () => this.$route.params.id,
        (toParams, previousParams) => {
          this.getPromotionDetail()
        }
      )
    },
    goToWz(){
      window.location.href = "https://wa.me/584128770825?text=Hola%20buen%20dia."
    }
  }
})
</script>
<style>

.border{
  border-radius: 9px;
}
.container-detail-promotion{
  background-color: #FFFFFF;
}
.container-detail-promotion2{
  background-color: #FFFFFF;
  padding-left: 12%;
  padding-right: 12%;
}
.texto-breadcrumbs{
  font-family: 'Poppins-Regular';
}
.text-title-promotion{
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color:#0F2A55
}
.text-title-brand{
  font-family: 'Poppins-Regular';
  font-size: 20px;
}
.text-ID-promotion{
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #808080
}
.text-detail-promotion{
  font-family: 'Poppins-Regular';
  font-size: 13px;
}
/* .text-price-promotion{
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
} */
.text-detail-promotion{
  font-family: 'Poppins-Regular';
  font-size: 12px;
}
.text-fventa-promotion{
  font-family: 'Poppins-Regular';
}
.text-price_fventa-promotion{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
}
.text-quantity-promotion{
  font-family: 'Poppins-Regular';
  font-size: 13px;
}
.title-nota-extra{
  font-family: 'Poppins-Regular';
  font-size: 13px;
}

.msj-nota-extra{
  font-family: 'Poppins-SemiBold';
  font-size: 13px;
  color: rgba(3, 11, 88, 0.333)
}

.text-nota-extra{
  font-family: 'Poppins-Regular';
  font-size: 14px;
}
.container-description-promotion{
  background-color: #F2F7FF;
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
.text-name-promotion{
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
}
.text-description-promotion{
  font-family: 'Poppins-Regular';
  font-size: 16px;
}
.border-img-slide{
  border-radius: 12px;
}

.text-quantity{

  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #060485;

}

.text-quantity-none-detail-promotion{

  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  color: #ce0707;

}
.mb-detail{
    margin-bottom: 30px;
}

@media (min-width:767px){
  .container-detail-promotion2{
    padding-left: 12%;
    padding-right: 12%;
  }
  .breadcrumbs-promotions{
    padding-left: 13%;
    padding-right: 13%;
  }

  .fondo-img-detail-promotion{
    padding: 20px 75px 20px 75px;
  }
}
.q-carousel{
  margin-bottom: 45px;
  overflow: visible !important
}

.q-carousel__control.q-carousel__navigation{
  bottom: -60px !important;
}
</style>