<template>
    <div class="bg-body-all">
        <div class="row justify-around q-py-lg">
            <div class="column items-center q-pa-md">
                <div class="row">
                    <div class="col-12 col-md q-pa-md text-center">
                            <div>
                                <img src="~assets/img/Logo-iso-colosal.svg">
                            </div>
                            <div class="text-parrafo-footer text-white q-pt-md">
                                Somos mayoristas e importadores directos de una gran variedad de productos.
                            </div>
                    </div>
                    <div class="col-12 col-md q-pa-md text-center">
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
                    <div class="col-12 col-md q-pa-md text-center">
                        <div class="text-title-footer text-white">
                            Sucursales
                        </div>
                         <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           Paseo caroni, Sector el Guamo, Antigua Izabella
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md text-center">
                        <div class="text-title-footer text-white">
                            Contáctanos
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="phone" style="font-size: 15px;"/>
                           <a href="https://wa.me/584128770825?text=Hola%20buen%20dia." style="color:#fff">+58-412-8770825</a>
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
export default defineComponent({ name: 'FooterComponent' })
</script>
<style>
    .container-footer{
        background-color: #101865;
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
</style>
