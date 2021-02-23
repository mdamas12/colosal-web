<template>
  <q-page>
    <example-component
      title="Example component"
    ></example-component>
    <shopping-cart-component></shopping-cart-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ShoppingCartComponent from '../components/cart/ShoppingCartComponent.vue'

export default defineComponent({
  name: 'ShoppingCart',
  components: { ShoppingCartComponent }
})
</script>
