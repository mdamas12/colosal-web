<template>
    <div class="bg-body-all">
        <div class="container-footer bg-boddy-all">
             <div class="row justify-around q-py-lg">
            <div class="column items-center q-pa-md">
                <div class="row">
                    <div class="col-12 col-md q-pa-md">
                            <div>
                                <img src="~assets/img/Logo-iso-colosal.svg">
                            </div>
                            <div class="text-parrafo-footer text-white q-pt-md">
                                Somos mayoristas e importadores directos de una gran variedad de productos.
                            </div>
                    </div>
                    <div class="col-12 col-md q-pa-md">
                        <div class="text-title-footer text-white">
                            Categorías
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                          <q-list dense>
                              <q-item clickable v-for="categorie in categories" :key="categorie.id" @click="$router.push({name : 'Products' , params: {idCategorie : categorie.id}})">
                                  <q-item-section class="not-padding">{{categorie.name}}</q-item-section>
                              </q-item>
                          </q-list>
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md">
                        <div class="text-title-footer text-white">
                            Social
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                           <!-- <div> -->
                                <img src="~assets/img/icon-instagram.svg" style=" width: 11px;" >
                            <!-- </div> -->
                            <a class="q-ml-xs" style="color:#fff" href="https://www.instagram.com/minimarketcolosal/?hl=es">@minimarketcolosal</a>
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md">
                        <div class="text-title-footer text-white">
                            Sucursales
                        </div>
                         <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           Paseo caroni, Sector el Guamo, Antigua Izabella
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           C. C LAS CÚPULAS
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           C. C GUAYANA MALL
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md">
                        <div class="text-title-footer text-white">
                            Contáctanos
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="phone" style="font-size: 15px;"/>
                           <a href="https://wa.me/584128770825?text=Hola%20buen%20dia." style="color:#fff">+58-412-8770825</a>
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <a href="mailto:Colosalminimarket@gmail.com" style="color:#fff">Colosalminimarket@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </div>
        <div class="container-design q-pa-md">
            <div class="row">
                <div class="col text-center">
                    <div class="text-design">
                       DESIGN BY <a href="https://galuapps.com/" style="text-decoration:none">GALUAPPS</a> - © 2021. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CategoriesServices from '../services/home/categories/categorie.services'
import axios from 'axios'
export default defineComponent({ name: 'FooterComponent',

    data(){
        return{
            categories: []
        }
    },
    created (){
        this.getCategories()
    },
    methods: {
        getCategories(){
        axios.get(process.env.API_URL +'web/home/categories-featured/')
        .then(response => {
          this.categories = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        }
    }

})
</script>
<style>
    .container-footer{
        /* background-color: #101865; */
    }

    .container-design{
        background-color: #EBEBEB;
    }

    .text-title-footer{
        font-family: 'Poppins-SemiBold';
        font-size: 14px;
    }

    .text-parrafo-footer{
        font-family: 'Poppins-Regular';
        font-size: 12px;
    }

    .text-social-footer{
        font-family: 'Poppins-Medium';
        font-size: 14px;
    }

    .text-design{
        font-family: 'Poppins-SemiBold';
        font-size: 10px;
        color: #3D3D3D;
    }

    .q-item{
        padding: 0 !important;
    }

    .container-footer{
        padding-left: 11%;
        padding-right: 11%;
    }
</style>
