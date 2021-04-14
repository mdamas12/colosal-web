<template>
  <q-page>
    <example-component
      title="Purchase Order component"
    ></example-component>
    <purchase-order-component></purchase-order-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PurchaseOrderComponent from '../components/purchase/PurchasesOrderComponent.vue'

export default defineComponent({
  name: 'Purchasesorder',
  components: { PurchaseOrderComponent }
})
</script>