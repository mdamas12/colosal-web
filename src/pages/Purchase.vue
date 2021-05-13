<template>
  <q-page>
    <example-component
      title="Purchase component"
    ></example-component>
    <purchase-component></purchase-component>
    <footer-component></footer-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PurchaseComponent from '../components/purchase/PurchasesComponet.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

export default defineComponent({
  name: 'Purchase',
  components: { PurchaseComponent, FooterComponent }
})
</script>
