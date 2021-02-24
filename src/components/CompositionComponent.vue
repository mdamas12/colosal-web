<template>
  <div class="">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      control-color="red-10"
    >
      <q-carousel-slide :name="1" img-src="~assets/img/Banner-1-cesta.png">
      <div class="texto-slide1">
        <div class="col">
          <div class="row items-center q-pa-md">
            <div class="col-4 justify-center q-pa-md">
               <div class="text-h3 q-mb-md">
                Tu minimarket de <span class="color-text">Confia<span class="subrayar">nza</span></span>
              </div>
              <q-btn label="ver nuestras ofertas"
              color="negative"
              text-color="white" class="btn-slide">
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/img/Banner-2-Family.png">
      <div class="texto-slide2">
        <div class="col">
          <div class="row q-pa-md">
            <div class="col-4 q-pa-md">
               <div class="text-h3 q-mb-md">
                Promociones para toda la <span class="color-text"><span class="subrayar">fam</span>ilia</span>
              </div>
              <q-btn label="ver promociones"
              color="negative"
              text-color="white" class="btn-slide">
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'CompositionComponent',

  data () {
    return {
      slide: 1,
      autoplay: true,
      controlType: 'flat'
    }
  }
})
</script>

<style>
.texto-slide1{
  padding-left: 10%;
  padding-top: 5%;
  color:#020B68;
  font-family: 'Gilroy-Bold';
}
.color-text{
  color: #EB0004;
}
.subrayar{
  text-decoration: underline #EB0004 ;
}
.texto-slide2{
  padding-left: 10%;
  padding-top: 5%;
  color:#020B68;
  font-family: 'Gilroy-Bold';
  font-size: 15px;
}
.btn-slide{
  font-family: 'Poppins-SemiBold';
  border-radius: 9px;
}
</style>
