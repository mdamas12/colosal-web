<template>
<div class="container-about-1">
    <div class="container-about">
        <!-- <div class="column justify-center"> -->
            <div class="row justify-around">
                <div class="col-12 col-md q-pa-md">
                    <div class="row items-center">
                        <div class="col items-center q-pa-md">
                            <div class="text-title q-pa-md">
                                Nosotros
                            </div>
                            <div class="text-parrafo q-pa-md text-justify">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                            </div>
                        </div>
                        <div class="col-12 col-md q-pa-md text-center">
                            <q-img src="~assets/img/Img-nosotros.png" class="image-about"></q-img>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({ name: 'AboutComponent' })
</script>

<style>
    .container-about-1{
        color: #FAFAFA;
        padding-left: 9%;
        padding-right: 9%;
    }
    .container-about{
        color: #FAFAFA;
    }
    .text-title{
        font-family: 'Poppins-SemiBold';
        font-size: 25px;
        color: #000000
    }
    .text-parrafo{
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #000000
    }
    .image-about{
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        -webkit-transition: all 1.0s;
        transition: all 1.0s;
        width: 85%;
    }
    .image-about:hover{
        -webkit-transform: scale(1.00);
        transform: scale(1.00);
        -webkit-transition: all 1.0s;
        transition: all 1.0s;
    }
    @media (min-width:1700px){
        .image-about{
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        -webkit-transition: all 1.0s;
        transition: all 1.0s;
        width: 65%;
        }
        .image-about:hover{
        -webkit-transform: scale(1.00);
        transform: scale(1.00);
        -webkit-transition: all 1.0s;
        transition: all 1.0s;
        }
    }
</style>
