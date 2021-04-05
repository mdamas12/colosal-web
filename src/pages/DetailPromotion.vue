<template>
  <q-page class="container-detail-promotion q-pt-md">
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Todas las promociones" class="texto-breadcrumbs" to="/promotions"/>
      <q-breadcrumbs-el label="Almacén" class="texto-breadcrumbs text-bluesito"/>
    </q-breadcrumbs>
    <div class="container-detail-promotion2">
      <div class="row">
        <div class="col-12 col-md q-gutter-sm q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide v-for="(promo,index) in promotion.promotion_detail" :name="index + 1" :img-src="'http://localhost:8000' + promo.product.image" class="border-img-slide"></q-carousel-slide>
          </q-carousel>
        </div>
        <div class="col q-gutter-sm q-pa-md">
          <div class="text-title-promotion">{{promotion.name}}</div>
          <div class="text-title-brand">{{promotion.category.name}}</div>
          <div class="text-ID-promotion">ID Promoción: {{promotion.id}}</div>
          <div class="text-detail-promotion">Detail:</div>
          <div class="text-price-promotion">{{promotion.price}}</div>
          <div class="text-fventa-promotion">Mayor:</div>
          <div class="text-price_fventa-promotion">{{promotion.price}}</div>
          <div class="text-quantity-promotion">Cantidad:</div>
          <div class="row">
            <div class="col-6 col-md">
              <div class="border">
                <span class="border">
                  <q-btn flat round color="redsito" icon="remove" class="btn-promotion" size="md" v-on:click="counter -= 1"></q-btn>
                    {{counter}}
                  <q-btn flat round color="indigo-10" icon="add" class="btn-promotion" size="md" v-on:click="counter += 1"></q-btn>
                </span>
              </div>
            </div>
            <div class="col-6 col-md">
              <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-promotion" size="md"></q-btn>
            </div>
          </div>
          <div class="title-nota-extra"><b>Productos:</b></div>
          <q-list dense class="rounded-borders">
            <q-item clickable v-ripple v-for="promo in promotion.promotion_detail">
              <q-item-section>
                - {{promo.product.name}}
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
  </q-page>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import FeaturedProductsCarouselComponent from 'src/components/FeaturedProductsCarouselComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import PromotionsServices from '../services/home/promotions/promotion.service'
export default defineComponent({
  components: { FeaturedProductsCarouselComponent, FooterComponent },
  data() {
    return {
      counter: 0,
      slide: 1,
      promotion: [{
        id: this.$route.params.id,
        name: '',
        description: '',
        coin: '',
        price: '',
        quantity: null,
        image: '',
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
    getPromotionDetail () {
      PromotionsServices.getPromotion(this.$route.params.id).subscribe({
        next: data => {
          console.log(data)
          this.promotion =  data
        }
      })
    },
    refreshComponent () {
      this.$watch(
        () => this.$route.params.id,
        (toParams, previousParams) => {
          this.getPromotionDetail()
        }
      )
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
  font-size: 30px;
}
.text-title-brand{
  font-family: 'Poppins-Regular';
  font-size: 20px;
}
.text-ID-promotion{
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #808080
}
.text-detail-promotion{
  font-family: 'Poppins-Regular';
  font-size: 13px;
}
.text-price-promotion{
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
}
.text-detail-promotion{
  font-family: 'Poppins-Regular';
  font-size: 12px;
}
.text-fventa-promotion{
  font-family: 'Poppins-Regular';
}
.text-price_fventa-promotion{
  font-family: 'Poppins-Regular';
  font-size: 30px;
  color: #FF0000
}
.text-quantity-promotion{
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
.container-description-promotion{
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
</style>