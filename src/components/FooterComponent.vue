<template>
    <div class="container-footer">
        <div class="row justify-around">
            <div class="column items-center q-pa-md">
                <div class="row">
                    <div class="col-12 col-md q-pa-md text-center">
                            <div>
                                <img src="~assets/img/Logo-iso-colosal.svg">
                            </div>
                            <div class="text-parrafo-footer text-white q-pt-md">
                                Somos mayoristas e importadores directos de una gran variedad de productos.
                            </div>
                            <div class="text-social-footer text-white q-pt-md">
                                <q-icon name="mail_outline" style="font-size: 18px;"/>
                                design@galuapps.com
                            </div>
                    </div>
                    <div class="col-12 col-md q-pa-md text-center">
                        <div class="text-title-footer text-white">
                            Social
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="font_download" />
                            @minimarketcolosal
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md text-center">
                        <div class="text-title-footer text-white">
                            Sucursales
                        </div>
                         <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           C.C Guayana Mall, Planta baja.
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="location_on" style="font-size: 15px;"/>
                           C.C Las Cúpulas.
                        </div>
                    </div>
                    <div class="col-12 col-md q-pa-md text-center">
                        <div class="text-title-footer text-white">
                            Contáctanos
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="phone" style="font-size: 15px;"/>
                           +58 412 877 0825
                        </div>
                        <div class="text-parrafo-footer text-white q-pt-md">
                            <q-icon name="phone" style="font-size: 15px;"/>
                           +58 412 877 0825
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-design q-pa-md">
            <div class="row">
                <div class="col text-center">
                    <div class="text-design">
                       DESIGN BY GALUAPPS - © 2021. ALL RIGHTS RESERVED.
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
        background-color: #020B68;
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
