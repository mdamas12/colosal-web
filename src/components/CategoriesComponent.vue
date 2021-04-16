<template>
<div class="container-categories-1 q-pt-md">
    <div class="container-categories q-pt-none">
        <div class="row q-pa-md">
            <div class="col q-px-lg">
                <div class="text-title">
                    Categorías
                </div>
            </div>
        </div>
        <div class="container gt-sm">
            <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                infinite
                swipeable
                animated
                control-color="red-10"
                class="container-carousel q-px-lg q-pt-md bg-redp"
            >
                    <q-carousel-slide :name="slide" class="col q-pt-none" v-for="(slide,index) in categoriesGroups" :key="slide">
                    <div class="row" v-if="load">
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                    </div>
                    <div class="row justify-center" v-else>
                        <div class="col-4 text-center q-gutter-sm q-mt-md" v-for="category in categories.slice(index * itemsCatRow, (index+1) * itemsCatRow)" :key="category.id">
                            <div class="div-carniceria q-pa-md">
                                <!-- Concatenando el dominio porque no lo manda el servicio al crearlo desde el panel -->
                                <q-img 
                                    :src="'http://localhost:8000' + category.image" 
                                    class="image-categorie" 
                                    style="height: 250px; max-width: 250px"/>
                                    
                                <div class="middle q-pr-md q-pt-md">
                                    <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category" @click="$router.push({name : 'Products' , params: {idCategorie : category.id}})"></q-btn>
                                </div>
                            </div>
                            <div align="center">
                                <div class="text-title-categorie q-pr-md">
                                    {{category.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
        <div class="container lt-md q-px-md">
            <q-carousel
                v-model="slideresponsive"
                transition-prev="slide-right"
                transition-next="slide-left"
                infinite
                swipeable
                animated
                control-color="red-10"
                class="container-carousel q-px-lg q-pt-md bg-redp"
            >
                    <q-carousel-slide :name="category.id" class="col q-pt-none" v-for="category in categories" :key="category.id">
                    <div class="row" v-if="load">
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                        <div class="col-12 col-md text-center q-gutter-sm">
                            <q-card-section align="center" class="q-gutter-md">
                                <q-skeleton type="circle" size="250px" bordered />
                            </q-card-section>
                            <q-card-actions align="center" class="q-pt-sm">
                                <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                            </q-card-actions>
                        </div>
                    </div>
                    <div class="row justify-center" v-else>
                        <div class="col-12 text-center q-gutter-sm q-mt-md">
                            <div class="div-carniceria q-pa-md">
                                <!-- Concatenando el dominio porque no lo manda el servicio al crearlo desde el panel -->
                                <q-img 
                                    :src="'http://minimarketcolosal.com/api/media/' + category.image" 
                                    class="image-categorie" 
                                />
                                    
                                <div class="middle q-pr-md q-pt-md">
                                    <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category" @click="$router.push({name : 'Products' , params: {idCategorie : category.id}})"></q-btn>
                                </div>
                            </div>
                            <div align="center">
                                <div class="text-title-categorie q-pr-md">
                                    {{category.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CategoriesServices from '../services/home/categories/categorie.services'
import axios from 'axios'

export default defineComponent({
  name: 'CategoriesComponent',
  data () {
    return {
      slide: 0,
      slideresponsive: 1,
      load: true,
      itemsCatRow: 3,
      categories: [],
    //   image: null,
    //   preview: null
    }
  },
  computed: {
    categoriesGroups () {
      return Array.from(Array(Math.ceil(this.categories.length / this.itemsCatRow)).keys())
    }
  },
  created () {
    this.allCategories()
    // this.spliteCategories();
  },
  methods: {
    allCategories () {
      setTimeout(() => {
        this.load = false
      }, 3000)
      //  CategoriesServices.getCategories().subscribe({
      //      next: data => {
      //          this.categories = data.results
      //          console.log(data)
      //      },
      //      complete: () => console.log('[complete]')
      //  })
      //   const headers = { 'Content-Type': 'application/json' }
      axios.get(process.env.API_URL +'web/home/categories-featured/')
        .then(response => {
          this.categories = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getImage (e) {
      let reader = new FileReader()
      reader.readAsDataURL(e)
      reader.onload = e => {
        this.preview = e.target.result
      }
    }
  }
//   mounted () {
//     setTimeout(() => {
//       this.load = false
//     }, 3000)
//     CategoriesServices.getCategories().subscribe({
//       next: data => {
//         this.categories = data.results
//         console.log(data)
//       },
//       complete: () => console.log('[complete]')
//     })
//   }
})
</script>

<style>
    .container-categories-1{
        background-color:#FAF3EB;
        padding-left: 10%;
        padding-right: 10%;
    }
    .container-categories{
        background-color: #FAF3EB;
        padding-left: 3%;
        padding-right: 3%;
    }
    .container-carousel{
        height: 415px;
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
    }
    .text-title-categorie{
        font-family: 'Poppins-SemiBold';
        font-size: 24px;
        color: #B31E1A;
    }
    .image-categorie{
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
    }
    .div-carniceria{
        position: relative;
    }
    .div-bebidas{
        position: relative;
    }
    .div-almacen{
        position: relative;
    }
    .middle{
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%)
    }
    .image-categorie{
        max-height: 250px;
        min-height: 200px;
    }
    .div-carniceria:hover .image-categorie{
        opacity: 0.6;
    }
    .div-carniceria:hover .middle{
        opacity: 1;
    }
    .div-bebidas:hover .image-categorie{
        opacity: 0.6;
    }
    .div-bebidas:hover .middle{
        opacity: 1;
    }
    .div-almacen:hover .image-categorie{
        opacity: 0.6;
    }
    .div-almacen:hover .middle{
        opacity: 1;
    }
    .btn-category{
        border-radius: 9px;
        font-family: 'Poppins-SemiBold';
    }
    .padding-cat{
        padding-left: 12%;
        padding-right: 12%;
    }

    @media (min-width:1023px){
        .image-categorie{
            max-width: 250px;
        }
    }
    @media (min-width: 1700px){
        .container-categories-1{
            padding-left: 11%;
            padding-right: 11%;
        }
        .container-carousel{
        height: 530px;
        }
    }
</style>
