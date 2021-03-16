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
        <div class="container q-px-md">
            <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                arrows
                control-color="red-10"
                class="carousel-promo q-px-xl"
            >
                <q-carousel-slide :name="1" class="col">
                    <div class="row" v-if="load">
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
                    <div class="row" v-else>
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
                        </div>
                    </div>
                </q-carousel-slide>
                 <q-carousel-slide :name="2" class="col">
                    <div class="row">
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
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'PromotionsComponent',
  data () {
    return {
      slide: 1,
      load: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.load = false
    }, 3000)
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

@media (min-width:1500px){
    .carousel-promo{
    height: 600px;
}
}
</style>
