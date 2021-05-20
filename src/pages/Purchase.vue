<template>
  <q-page>
    <example-component
      title="Purchase component"
    ></example-component>
    <purchase-component></purchase-component>
    <footer-component></footer-component>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="white" @click="goToWz()">
        <img src="~assets/img/whatsapp-icon.svg" style=" width: 25px;" >
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PurchaseComponent from '../components/purchase/PurchasesComponet.vue'
import FooterComponent from 'src/components/FooterComponent.vue'

export default defineComponent({
  name: 'Purchase',
  components: { PurchaseComponent, FooterComponent },
  methods: {
    goToWz(){
      window.location.href = "https://wa.me/584128770825?text=Hola%20buen%20dia."
    }
  }
})
</script>
