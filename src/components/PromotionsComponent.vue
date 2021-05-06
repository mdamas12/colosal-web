<template>
    <div class="container-promotions q-pt-lg">
        <div class="row">
            <div class="col q-pa-md">
                <div class="text-title">
                    Promociones destacadas
                    <a class="q-pl-md enlace-ver cursor-pointer" @click="$router.push('/promotions')">Ver más</a>
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
                class="bg-azul-tenue container-carousel q-px-lg"
                style="height:450px">
                <q-carousel-slide :name="slide" class="col" v-for="(slide,index) in promotionsGroups" :key="slide">
                    <div class="row" v-if="load">
                          <div class="col-6 col-md q-gutter-sm q-pa-md">
                            <q-card class="q-pt-md skeleton-card">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                            <q-card class="q-pt-md">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                            <q-card class="q-pt-md">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                        <div class="col-6 col-md q-gutter-sm q-pa-md" v-for="promotion in promotions.slice(index * itemsPromoRow, (index+1) * itemsPromoRow)" :key="promotion.id">
                            <q-card class="my-card card" @click="$router.push({ path: `/promotions/detail/${promotion.id}/` })">
                                    <q-card-section class="text-center">
                                        <q-img 
                                            :src="promotion.image" 
                                            class="img-promotions" 
                                            style="max-width:150px; height: 150px;"></q-img>
                                        <div class="middle">
                                            <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-promotion">
                                            {{promotion.name}} 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-promotion">
                                         {{promotion.coin}}  {{promotion.price}}
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <!-- <q-item-label v-if="promotion.quantity > 1" lines="2" class="text-quantity">
                                            {{promotion.quantitity}} Disponibles  
                                        </q-item-label>
                                        <q-item-label v-if="promotion.quantity == 1" lines="2" class="text-quantity-none">
                                           Solo {{promotion.quantitity}} Disponible
                                        </q-item-label> -->
                                         <q-item-label v-if="promotion.quantity < 1" lines="2" class="text-quantity-none-promotion-feature">
                                             NO Disponible
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section v-if="promotion.quantity > 0" class="text-center q-pt-none">
                                        <div class="row items-center">
                                            <div class="col-5">
                                                <div class="row items-center justify-end">
                                                    <q-card flat bordered>
                                                        <div class="col-8 q-px-md q-py-sm quantity-product-feature">
                                                        {{counter}}
                                                    </div>
                                                    </q-card>
                                                    
                                                    <div class="col-3">
                                                        <div class="row">
                                                             <q-btn flat round color="redsito" icon="remove" class="btn-product" size="xs"  v-on:click="decreaseProdQty()"></q-btn>
                                                        </div>
                                                        <div class="row">
                                                               <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="xs"  v-on:click="increaseProdQty()"></q-btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-7">
                                                <div class="row items-center">
                                                    <q-btn label="Agregar" color="blue" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id)" size="md"></q-btn>
                                                </div>
                                            </div>
                                        </div>   
                                    </q-card-section>
                                </q-card>
                        </div>
                        <!-- <div class="col-12 col-md q-gutter-sm q-pa-md ">
                            <q-card class="my-card card2">
                                    <q-card-section class="text-center">
                                        <div class="combo1">
                                            <q-img src="~assets/img/combo3.png" class="img-promotions"></q-img>
                                            <div class="middle">
                                                <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                            </div>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                           Combo 1
                                        </div>
                                        <div class="text-description-product">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $189.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                        </div>
                        <div class="col-12 col-md q-gutter-sm q-pa-md ">
                            <q-card class="my-card card2">
                                    <q-card-section class="text-center">
                                        <div class="combo1">
                                            <q-img src="~assets/img/combo3.png" class="img-promotions"></q-img>
                                            <div class="middle">
                                                <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                            </div>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                           Combo 1
                                        </div>
                                        <div class="text-description-product">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $189.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                        </div> -->
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
                class="bg-azul-tenue container-carousel q-px-lg"
                style="height:465px">
                <q-carousel-slide :name="promotion.id" class="col" v-for="promotion in promotions" :key="promotion.id">
                    <div class="row" v-if="load">
                          <div class="col-12 col-md q-gutter-sm q-pa-md">
                            <q-card class="q-pt-md skeleton-card">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                            <q-card class="q-pt-md">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                            <q-card class="q-pt-md">
                                <q-card-section align="center" class="q-gutter-md">
                                    <q-skeleton height="150px" square />
                                </q-card-section>
                                <q-card-section>
                                    <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
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
                            <q-card class="my-card card" @click="$router.push({ path: `/promotions/detail/${promotion.id}/` })">
                                    <q-card-section class="text-center">
                                        <q-img 
                                            :src="promotion.image" 
                                            class="img-promotions" 
                                            style=" max-width:150px; height: 150px;"></q-img>
                                        <div class="middle">
                                            <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-promotion">
                                            {{promotion.name}} 
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-promotion">
                                         {{promotion.coin}}  {{promotion.price}}
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <!-- <q-item-label v-if="promotion.quantity > 1" lines="2" class="text-quantity">
                                            {{promotion.quantitity}} Disponibles  
                                        </q-item-label>
                                        <q-item-label v-if="promotion.quantity == 1" lines="2" class="text-quantity-none">
                                           Solo {{promotion.quantitity}} Disponible
                                        </q-item-label> -->
                                         <q-item-label v-if="promotion.quantity < 1" lines="2" class="text-quantity-none-promotion-feature">
                                             NO Disponible
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section v-if="promotion.quantity > 0" class="text-center q-pt-none">
                                         <div class="row items-center">
                                            <div class="col-5">
                                                <div class="row items-center justify-end">
                                                    <q-card flat bordered>
                                                        <div class="col-8 q-px-lg q-py-sm quantity-product-feature">
                                                        {{counter}}
                                                    </div>
                                                    </q-card>
                                                    
                                                    <div class="col-3">
                                                        <div class="row">
                                                             <q-btn flat round color="redsito" icon="remove" class="btn-product" size="xs"  v-on:click="decreaseProdQty()"></q-btn>
                                                        </div>
                                                        <div class="row">
                                                               <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="xs"  v-on:click="increaseProdQty()"></q-btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-7">
                                                <div class="row">
                                                    <q-btn label="Agregar" color="blue" text-color="white" icon="shopping_cart" class="btn-product" @click.stop="Shoppingcart(product.id)" size="md"></q-btn>
                                                </div>
                                            </div>
                                        </div>   
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
import axios from 'axios'
export default defineComponent({
  name: 'PromotionsComponent',
  data () {
    return {
      slide: 0,
      slideresponsive: 1,
      load: true,
      itemsPromoRow: 3,
      promotions: [],
      counter: 0,
    }
  },
  computed: {
    promotionsGroups () {
      return Array.from(Array(Math.ceil(this.promotions.length / this.itemsPromoRow)).keys())
    }
  },
  created () {
    this.allPromotions()
  },
  methods: {
    allPromotions () {
      setTimeout(() => {
        this.load = false
      }, 3000)
      const headers = { 'Content-Type': 'application/json' }
      axios.get('http://minimarketcolosal.com/api/' + 'web/home/promotions-featured/', { headers })
        .then(response => {
          this.promotions = response.data
          console.log(response.data)
        })
    },
        increaseProdQty(){
            if (this.counter <= 0){ //compruebo que no se pase de la cantidad de stock
                this.counter++
        }
    },
        decreaseProdQty(){
            if (this.counter > 1){ 
                this.counter--
        }
    },
  }
})
</script>

<style>
.container-promotions{
    padding-left: 12%;
    padding-right: 12%;
    background-color: #F2F7FF;
}
.carousel-promo{
    height: 500px;
    padding-left: 2%;
    padding-right: 2%;
}
.btn-promotions{
     border-radius: 9px;
    font-family: 'Poppins-SemiBold';
}
.combo1{
    position: relative;
}
.card{
        min-height: 360px;
    }
.my-card:hover{
    box-shadow: 0 5px 28px rgba(156, 156, 156, 0.3), 0 10px 10px rgba(156, 156, 156, 0.3);
}    
.middle{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}
.combo1:hover .img-promotions{
    opacity: 0.6;
}
.combo1:hover .middle{
    opacity: 1;
}
.text-name-promotion{
    font-family: 'Poppins-SemiBold';
    font-size: 18px;
}
.text-price-promotion{
    font-family: 'Poppins-SemiBold';
    font-size: 22px;
}
@media (min-width:320px) and (max-width: 767px) {
        .container-promotions{
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
    .carousel-promo{
    height: 600px;
}
}

.text-quantity{

  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #060485;

}

.text-quantity-none-promotion-feature{

  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: #ce0707;
  margin: 28px 0 22px 0;

}

.text-quantity-adv{
       font-family: 'Poppins-SemiBold';
  font-size: 12px;
        color: rgb(212, 199, 7);
    }
</style>
