<template>
  <q-page>
    <example-component
      title="Purchase component"
    ></example-component>
    <purchase-component></purchase-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PurchaseComponent from '../components/purchase/PurchasesComponet.vue'

export default defineComponent({
  name: 'Purchase',
  components: { PurchaseComponent }
})
</script>
