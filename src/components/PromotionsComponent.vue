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
                class="bg-accent container-carousel q-px-lg"
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
                                            style="max-width:150px"></q-img>
                                        <div class="middle">
                                            <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-product">
                                            {{promotion.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product">
                                         {{promotion.coin}}  {{promotion.price}}
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
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
                class="bg-accent container-carousel q-px-lg"
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
                                            :src="'http://minimarketcolosal.com/api' + promotion.promotion_detail[0].product.image" 
                                            class="img-promotions" 
                                            style="max-width:150px"></q-img>
                                        <div class="middle">
                                            <q-btn color="white" text-color="black" label="Ver mas" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-item-label lines="2" class="text-name-product">
                                            {{promotion.name}}
                                        </q-item-label>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none text-price-product">
                                           {{promotion.coin}} {{promotion.price}}
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
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
      promotions: []
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
    }
  }
})
</script>

<style>
.container-promotions{
    padding-left: 12%;
    padding-right: 12%;
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
</style>
