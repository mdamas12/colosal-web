<template>
  <q-page>
    <example-component
      title="Purchase Detail component"
    ></example-component>
    <purchase-detail-component></purchase-detail-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PurchaseDetailComponent from '../components/purchase/PurchaseDetailComponent.vue'

export default defineComponent({
  name: 'PurchaseDetail',
  components: { PurchaseDetailComponent }
})
</script>