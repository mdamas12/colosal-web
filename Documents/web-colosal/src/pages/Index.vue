<template>
  <q-page>
    <example-component
      title="Example component"
    ></example-component>
    <our-benefits-component></our-benefits-component>
    <featured-products-component></featured-products-component>
    <categories-component></categories-component>
    <about-component></about-component>
    <footer-component></footer-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ExampleComponent from 'components/CompositionComponent.vue'
import OurBenefitsComponent from 'src/components/OurBenefitsComponent.vue'
import FeaturedProductsComponent from 'src/components/FeaturedProductsComponent.vue'
import CategoriesComponent from 'src/components/CategoriesComponent.vue'
import AboutComponent from 'src/components/AboutComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, OurBenefitsComponent, FeaturedProductsComponent, CategoriesComponent, AboutComponent, FooterComponent }
})
</script>
