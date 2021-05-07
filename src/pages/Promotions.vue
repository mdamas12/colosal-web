<template>
<q-page>
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey q-pt-md breadcrumbs-promotion bg-azul-tenue" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Promociones" class="texto-breadcrumbs text-bluesito"/>
    </q-breadcrumbs>
     <!-- <div class="container-skeleton-list q-pa-md q-mb-sm" v-if="load">
        <q-skeleton type="QToolbar" square animation="wave" class="bg-indigo-10"/>
        <q-item v-for="sk in 5" :key="sk">
            <q-item-section>
                <q-item-label>
                     <q-skeleton type="text" square height="20px" width="5%" animation="wave" />
                </q-item-label>
                <q-item-label caption>
                    <q-skeleton type="text" square height="20px" width="10%" animation="wave" />
                </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator />
    </div>
    <div class="container-list-promotions q-pa-md q-mb-sm" v-else>
        <q-toolbar class="bg-indigo-10 text-white shadow-2">
            <q-toolbar-title class="title-promotions">Promociones</q-toolbar-title>
        </q-toolbar>
        <q-list bordered separator>
            <q-item clickable v-ripple v-for="list in 5" :key="list">
                <q-item-section>
                <q-item-label class="font-items-list">Combo 1</q-item-label>
                <q-item-label caption class="font-items-list">Description</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div> -->
    <div class="container-list-promotions q-pa-md">
      <div class="row q-mb-md">
        <div class="col-12 col-md-4 q-pa-md q-gutter-sm" v-for="promotion in promotions" :key="promotion.id">
          <q-card class="my-card card2 q-pa-md text-center cursor-pointer" >
            <q-card-section class="text-center">
              <q-img @click="$router.push({ path: `/promotions/detail/${promotion.id}/` })"
                :src="promotion.image" 
                class="img-promotions" 
                style="max-width:150px; height: 150px;"></q-img>
            </q-card-section>
            <q-card-section  @click="$router.push({ path: `/promotions/detail/${promotion.id}/` })">
              <div class="text-name-promotion">
                {{promotion.name}} 
              </div>
              <div class="text-description-promotion">
                {{promotion.description}}
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-price-promotion">
                 {{promotion.coin}} {{promotion.price}}
              </div>

              <!-- <div v-if="promotion.quantity > 0" >
                <div class="text-detail-promotion">Cantidad Disponible :</div>
                <div class="text-quantity">{{promotion.quantity}}</div>
              </div> -->
              <div v-if="promotion.quantity  < 1" >
                <div class="text-quantity-none-promotion">NO Disponible</div>
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div class="q-pt-none" v-if="promotion.quantity > 0">

                 <div class="row items-center justify-around">
                     <div class="col-lg-5">
                        <div class="row items-center justify-center">
                            <q-card flat bordered>
                              <div class="col-8 q-px-lg q-py-sm quantity-product-feature">
                                {{promotion.shopp}}
                              </div>
                            </q-card>
                                                    
                            <div class="col-3">
                              <div class="row items-center">
                                <div class="col justify-center">
                                  <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="xs"  v-on:click="increaseProdQty(promotion.index)"></q-btn>
                                </div>
                              </div>
                              <div class="row items-center">
                                <div class="col justify-center">
                                  <q-btn flat round color="redsito" icon="remove" class="btn-product" size="xs"  v-on:click="decreaseProdQty(promotion.index)"></q-btn>
                                </div>
                              </div>
                                                       
                              </div>
                         </div>
                        </div>
                        <div class="col-lg-7">
                           <div class="row items-center justify-center">
                             <div class="col justify-center q-pt-xs">
                                <q-btn  label="Agregar" color="blue" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(promotion.id, promotion.shopp)" size="md"></q-btn>

                             </div>
                            </div>
                          </div>
                        </div>
                
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row justify-center q-mb-md">
      <q-pagination
        v-if="numberOfPages > 1"
        v-model="pagination.page"
        :min="currentPage"
        :max="numberOfPages"
        :direction-links="true"
        color="black"
        :boundary-numbers="false"
        @click="getAllPromotions()"
      >
      </q-pagination>
    </div>
    <footer-component></footer-component>
</q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
import PromotionsService from '../services/home/promotions/promotion.service'
import ShoppingcartService   from "../services/home/shoppingcart/shoppingcart.service";
import { Loading } from "quasar";

export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      load: true,
      promotions: [],
      incart: [],
      pagination: {
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0,
        currentPage: 1
      },
      id: null,
      limit: 25,
      numberOfPages: 0,
      count: 0,
      currentPage: 1,
      totalPages: 1,
    }
  },
  created () {
    this.getAllPromotions()
  },
  mounted () {
    setTimeout(() => {
      this.load = false
    }, 3000)
  },
  methods: {
    getAllPromotions () {
      this.pagination.currentPage = this.pagination.page
      this.offset = this.limit * (this.pagination.page - 1)
      PromotionsService.getPromotions(this.limit, this.offset).subscribe({
        next: data => {
          //console.log(data.results)
          //this.promotions = data.results
          let data_promotions = data.results
          if(this.verifySession()){
                ShoppingcartService.getListCart().subscribe({
                    next: data => {
                        let itemcart = data.results
                        for (let i = 0; i < data_promotions.length; i++){
                            let swich = false 
                            data_promotions[i].shopp = 0
                            data_promotions[i].index = i
                            for (let j = 0; j < itemcart.length; j++){
                                if((itemcart[j].promotion!=null) && (swich == false) && (data_promotions[i].id == itemcart[j].promotion.id)){   
                                    this.incart[i] = true
                                    data_promotions[i].shopp  = itemcart[j].quantity
                                    swich = true
                                }
                                if((itemcart[j].promotion!=null) && (swich == false) && (data_promotions[i].id != itemcart[j].promotion.id)){
                                    this.incart[i] = false                                   
                                }
                            }
                        }
                       
                    },
                    error: err =>{
                        console.log(err.response.data)
                    },
                    complete: ()=>{}
                });

                
            }
            else{
               for (let i = 0; i < data_promotions.length; i++){
                  data_promotions[i].shopp = 0
                  data_promotions[i].index = i
               }
            }
           this.promotions = data_promotions
          this.numberOfPages = Math.ceil(data.count / this.limit)
        },
        complete: () => console.log('[complete]')
      })
    },

   Shoppingcart(product_id, shopp_quantity){   
        if (this.verifySession() == true){
            if(shopp_quantity == 0){
                this.showNotif("Debe agregar cantidad en producto", 'red-10');
                return 
            }
          
            Loading.show();
            const data_cart = {
                'promotion' : product_id,
                'quantity' : shopp_quantity
            };
            let subscription = ShoppingcartService.savePromotionShoppingCart(data_cart).subscribe( {
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
    increaseProdQty(i){
        if (this.promotions[i].shopp < this.promotions[i].quantity){ //compruebo que no se pase de la cantidad de stock
            this.promotions[i].shopp += 1   
        }
    },
    decreaseProdQty(i){
        if (this.promotions[i].shopp > 0){ //compruebo que no se pase de la cantidad de stock
            this.promotions[i].shopp -= 1   
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
  }
})
</script>

<style>
.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}
.container-skeleton-list{
    padding-left: 12%;
    padding-right: 12%;
}
.container-list-promotions{
    padding-left: 12%;
    padding-right: 12%;
    background-color: #F2F7FF;
}
.title-promotions{
    font-family: 'Poppins-Regular';
}
.font-items-list{
    font-family: 'Poppins-Regular';
}
.text-name-promotion{
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #000000;
}
.text-description-promotion{
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #000000;
}
.text-price-promotion{
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
  color: #000000;
}
.btn-promotions{
  border-radius: 9px;
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
}

.text-quantity{

  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #060485;

}

.text-quantity-none-promotion{

  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: #ce0707;
  margin: 14px 0 14px 0;

}

.breadcrumbs-promotion{
  padding-left: 13%;
  padding-right: 13%;
}
</style>
