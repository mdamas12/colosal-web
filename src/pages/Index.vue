<template>
  <q-page>
    <example-component
      title="Example component"
    ></example-component>
    <our-benefits-component></our-benefits-component>
    <featured-products-carousel-component></featured-products-carousel-component>
    <featured-products-component></featured-products-component>
     <promotions-component></promotions-component>
    <categories-component></categories-component>
    <about-component></about-component>
    <footer-component></footer-component>
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ExampleComponent from 'components/CompositionComponent.vue'
import OurBenefitsComponent from 'src/components/OurBenefitsComponent.vue'
import FeaturedProductsCarouselComponent from 'src/components/FeaturedProductsCarouselComponent.vue'
import PromotionsComponent from 'src/components/PromotionsComponent.vue'
import FeaturedProductsComponent from 'src/components/FeaturedProductsComponent.vue'
import CategoriesComponent from 'src/components/CategoriesComponent.vue'
import AboutComponent from 'src/components/AboutComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'


export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, OurBenefitsComponent, FeaturedProductsCarouselComponent, PromotionsComponent, FeaturedProductsComponent, CategoriesComponent, AboutComponent, FooterComponent },
  // data(){

  // },
  // mounted(){
  //           let subscription = CategoriesServices.getCategories().subscribe( {
  //           next: data => {
  //           this.category = data
  //           console.log(data)
  //           },
  //           complete: () => console.log('[complete]'),
  //        })
  // }
})
</script>
