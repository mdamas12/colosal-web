<template>
<<<<<<< HEAD
   
  <div class="">
=======
  <div class="container-carousel-banner">
>>>>>>> responsive
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
     
      <q-carousel-slide v-for="slide in header" :key="slide.id" :name="slide.id" :img-src="slide.image" >
      <div class="texto-slide1">
        <div class="col">
          <div class="row items-center q-pa-md">
            <div class="col-4 q-pa-md">
               <div class="text-h3 q-mb-md">
                {{slide.title}} <span class="color-text"><span class="subrayar">{{slide.span}}</span></span>
              </div>
              <div v-if="slide.action_link == 'promociones'">
                  <q-btn :label="slide.action_title" @click="$router.push('/promotions')"
                  color="negative"
                  text-color="white" class="btn-slide">
                  </q-btn>
              </div>
              <div v-if="slide.action_link == 'productos'">
                  <q-btn :label="slide.action_title" @click="$router.push('/products')"
                  color="negative"
                  text-color="white" class="btn-slide">
                  </q-btn>
              </div>
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
import HeaderService from '../services/header/header.service'
export default defineComponent({
  name: 'CompositionComponent',

  data () {
    return {
      slide: 1,
      autoplay: true,
      controlType: 'flat',
      variable : "",
      header : []
    }
  },
  mounted(){
      
      this.getHeader()
    },
  methods: {

    getHeader(){
      //alert("ok ok ok")
      let subscription = HeaderService.getImagesActive().subscribe( {
        
        next: (data : any) => {
          this.header = data; 
          //console.log(this.header)       
        },
        complete: () => console.log(this.header),
      })

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
/* @media(min-width:768px){
  .container-carousel-banner{
  padding-left: 12%;
  padding-right: 12%;
  }
} */

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
