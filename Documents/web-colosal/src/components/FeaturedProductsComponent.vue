<template>
    <div class="container-featured-products">
        <div class="row">
            <div class="col q-pa-md">
                <div class="text-title">
                    Productos destacados
                    <a href="" class="q-pl-md">Ver más</a>
                </div>
            </div>
        </div>
        <div class="row justify-center q-mb-md">
            <div class="column justify-center text-center">
                <div class="row justify-center">
                    <div class="col-4-md q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-card-section class="text-center">
                                <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                            </q-card-section> 
                            <q-card-section class="text-center">
                                <div class="text-name-product">
                                    Doritos Mega Queso
                                </div>
                                <div class="text-description-product">
                                    150Gr Frito Lay
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center q-pt-none">
                                <div class="text-price-product">
                                    $150
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center">
                                <q-btn label="Agregar" color="redsito" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-4-md q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-card-section class="text-center">
                                <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                            </q-card-section> 
                            <q-card-section class="text-center">
                                <div class="text-name-product">
                                    Doritos Mega Queso
                                </div>
                                <div class="text-description-product">
                                    150Gr Frito Lay
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center q-pt-none">
                                <div class="text-price-product">
                                    $150
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center">
                                <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-4-md q-pa-md q-gutter-sm">
                        <q-card class="my-card q-pa-md">
                            <q-card-section class="text-center">
                                <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                            </q-card-section> 
                            <q-card-section class="text-center">
                                <div class="text-name-product">
                                    Doritos Mega Queso
                                </div>
                                <div class="text-description-product">
                                    150Gr Frito Lay
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center q-pt-none">
                                <div class="text-price-product">
                                    $150
                                </div>
                            </q-card-section>
                            <q-card-section class="text-center">
                                <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="container col text-white bg-primary">
                        <div class="row">
                            <div class="col q-pa-md">
                                <div class="pdt-mpagos">
                                    Conoce nuestros métodos de pago
                                </div>
                                <div class="col q-pt-md">
                                     <q-btn label="Ver Más" text-color="black" color="white" size="lg" class="btn"></q-btn>   
                                </div>
                            </div>
                            <div class="col q-pa-md">
                                <div class="img-mpagos q-pa-md">
                                    <q-img src="~assets/img/Wallet-rafiki.svg"></q-img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container col text-white bg-red-10">
                        <div class="row">
                            <div class="col q-pa-md">
                                <div class="img-ventasmd">
                                     <q-img src="~assets/img/Checking-boxes-rafiki.svg"></q-img>
                                </div>
                            </div>
                            <div class="col q-pa-md">
                                <div class="pdt-ventasmd">
                                    Ventas al mayor y al detal
                                </div>
                                <div class="column items-end q-pt-md">
                                    <q-btn label="Ver Más" text-color="black" color="white" size="lg" class="btn"></q-btn>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent ( { name: 'FeaturedProductsComponent' } )
</script>

<style>
.container-featured-products{
    background-color: #FAFAFA;
}

.pdt-mpagos{
    padding-top: 30%;
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}

.btn-mpagos{
    font-family: 'Poppins-SemiBold';
}
.pdt-ventasmd{
    padding-top: 30%;
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}

.hola{
    padding-left: 35%;
}

.img-mpagos{
    padding-top: 13%;
}

.img-ventasmd{
    padding-top: 13%;
}

.btn-ventasmd{
    font-family: 'Poppins-SemiBold';
}
.btn{
    border-radius: 9px;
}

.btn-product{
    border-radius: 9px;
    font-family: 'Poppins-SemiBold';
}

a{
    color:#EB0004;
    font-family: 'Poppins-Regular';
    font-size: 19px;
}

.my-card:hover .img-product{
    -webkit-transform: scale(1.00);
    transform: scale(1.00);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}

.img-product{
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}

.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}

.text-name-product{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
}

.text-description-product{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}

.text-price-product{
    font-family: 'Poppins-SemiBold';
    font-size: 24px;
}
</style>