<template>
  <q-page class="bg-body-all">
    <!-- <header-component></header-component> -->
    <example-component></example-component>
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
import HeaderComponent from 'src/components/HeaderComponent.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, OurBenefitsComponent, FeaturedProductsCarouselComponent, PromotionsComponent, FeaturedProductsComponent, CategoriesComponent, AboutComponent, FooterComponent, HeaderComponent }
})
</script>
