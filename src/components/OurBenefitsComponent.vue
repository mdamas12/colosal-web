<template>
<div class="container-benefits-1">
 <div class="container-benefits">
        <div class="row">
            <div class="col q-gutter-sm col-md q-px-md">
               <div class="text-title pd-text text-white">
                   Nuestros beneficios
               </div>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column justify-center text-center mbt-card">
                <div class="row justify-center">
                    <div class="col-12 col-md q-pa-md q-gutter-sm">
                        <q-card class="card-benefits q-pa-md">
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
                                <div class="text q-px-md">
                                   Todos los pagos se procesan instantáneamente a través de un protocolo seguro.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-12 col-md q-pa-md q-gutter-sm">
                        <q-card class="card-benefits q-pa-md">
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
                                <div class="text q-px-lg">
                                   Todas las compras superiores a $ 399 son elegibles para envío gratis.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-12 col-md q-pa-md q-gutter-sm">
                        <q-card class="card-benefits q-pa-md">
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
                                <div class="text q-px-md">
                                    Cada uno de nuestros productos ha sido elaborado con los mejores materiales.
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({ name: 'OurBenefitsComponent' })
</script>

<style>
.pd-text{
    padding-top: 60px;
    margin-bottom: 40px;
}
.mbt-card{
    margin-bottom: 60px;   
}
.container-benefits-1{
    /*background-color: #F2F7FF;*/
    padding-left: 12%;
    padding-right: 12%;
}
/* .container-benefits{
    height: 530px;
    background-color:#DFEBFF;
} */
.my-card{
border-radius: 27px;
}

.card-benefits{
border-radius: 27px;
}

.my-card:hover{
    box-shadow: 0 5px 28px rgba(156, 156, 156, 0.3), 0 10px 10px rgba(156, 156, 156, 0.3);
}

.card-benefits:hover img{
    filter: invert(6%) sepia(91%) saturate(6899%) hue-rotate(204deg) brightness(98%) contrast(158%);
}

.card-benefits:hover .text-subtitle{
    color: #020B68;
}

.card-benefits:hover .text{
    color: #000000;
}

.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
    color:#0F2A55
}

.text-subtitle{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
}

.text{
    font-family: 'Poppins-Regular';
    font-size: 13px;
    color: #808080;
}
</style>
