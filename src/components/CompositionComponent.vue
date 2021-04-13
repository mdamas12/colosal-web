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
            <div class="col-4 q-pa-md">
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

@media (min-width:280px) and (max-width:509px) {
  .text-h3{
    font-size:30px
  }
  .btn-slide{
    font-size: 10px;
  }
  .texto-slide1{
    padding-top: 0;
  }
  .texto-slide2{
    padding-top: 0;
  }
}
@media (min-width:510px) and (max-width:767px) {
  .text-h3{
    font-size:30px
  }
  .btn-slide{
    font-size: 10px;
  }
  .texto-slide1{
    padding-top: 4%;
  }
  .texto-slide2{
    padding-top: 4%;
  }
}
@media (min-width:768px) and (max-width:1023px){
  .text-h3{
    font-size:35px
  }
  .btn-slide{
    font-size: 10px;
  }
  .texto-slide1{
    padding-top: 4%;
  }
  .texto-slide2{
    padding-top: 6%;
  }
}
@media (min-width:1024px) and (max-width:1325px){
  .text-h3{
    font-size:50px
  }
  .btn-slide{
    font-size: 10px;
  }
  .texto-slide1{
    padding-top: 5%;
  }
  .texto-slide2{
    padding-top: 5%;
  }
}
</style>
