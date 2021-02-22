<template>
    <div class="container-benefits q-pa-md">
        <div class="row">
            <div class="col q-pt-md">
               <div class="text-title text-dark">
                   Nuestros beneficios
               </div>
            </div>
        </div>
        <div class="row justify-center">
            <div class="col justify-center text-center">
                <div class="row justify-center">
                    <div class="col q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-item-section class="q-pt-md">
                                <div class="col text-center">
                                    <q-avatar rounded>
                                        <img src="~assets/img/icon-payment.svg">
                                    </q-avatar>      
                                </div>                        
                            </q-item-section>
                            <q-card-section class="text-center">
                              <div class="text-subtitle">
                                  Pago Fácil
                              </div>
                            </q-card-section>
                            <q-card-section class="q-pt-none text-center">
                                <div class="text">
                                   Todos los pagos se procesan instantáneamente a través de un protocolo de pago seguro.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-item-section class="q-pt-md">
                                <div class="col text-center">
                                    <q-avatar rounded>
                                        <img src="~assets/img/icon-delivery.svg" class="img-fluid">
                                    </q-avatar>     
                                </div>                        
                            </q-item-section>
                            <q-card-section class="text-center">
                              <div class="text-subtitle">
                                  Entregas
                              </div>
                            </q-card-section>
                            <q-card-section class="q-pt-none text-center">
                                <div class="text">
                                   Todas las compras superiores a $ 399 son elegibles para envío gratis.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-item-section class="q-pt-md">
                                <div class="col text-center">
                                    <q-avatar rounded>
                                        <img src="~assets/img/icon-medal.svg">
                                    </q-avatar> 
                                </div>                              
                            </q-item-section>
                            <q-card-section class="text-center">
                              <div class="text-subtitle">
                                  Mejor calidad
                              </div>
                            </q-card-section>
                            <q-card-section class="q-pt-none text-center">
                                <div class="text">
                                    Cada uno de nuestros productos ha sido elaborado con los mejores materiales.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent ( { name: 'OurBenefitsComponent' } )
</script>

<style>
.container-benefits{
    /* height: 530px; */
    background-color:#DFEBFF;
}
.my-card{
border-radius: 27px;
/* height: 320px; */
}

.my-card:hover{
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.my-card:hover img{
    filter: invert(6%) sepia(91%) saturate(6899%) hue-rotate(204deg) brightness(98%) contrast(158%);
}

.my-card:hover .text-subtitle{
    color: #020B68;
}

.my-card:hover .text{
    color: #000000;
}

.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}

.text-subtitle{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
}

.text{
    font-family: 'Poppins-Regular';
    font-size: 13px;
    color: #808080;
    padding-left: 20%;
    padding-right: 20%;
}
</style>