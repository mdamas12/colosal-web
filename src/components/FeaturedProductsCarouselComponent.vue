<template>
    <!-- <q-page> -->
        <div class="container-featured-products-carousel q-pt-lg">
            <div class="row">
            <div class="col q-pa-md">
                <div class="text-title">
                    Productos destacados
                    <a href="" class="q-pl-md enlace-ver">Ver más</a>
                </div>
            </div>
        </div>
         <div class="container q-px-md">
                <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    arrows
                    control-color="red-10"
                    class="bg-accent container-carousel q-px-lg"
                    >
                    <q-carousel-slide :name="1" class="col">
                        <div class="row">
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Doritos
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
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/aceite.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Aceite Soya
                                        </div>
                                        <div class="text-description-product">
                                            500ml Vatel
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $169.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/nutella.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Nutella
                                        </div>
                                        <div class="text-description-product">
                                            750g Ferrero
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $189.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="col">
                        <div class="row">
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Doritos
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
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/aceite.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Aceite Soya
                                        </div>
                                        <div class="text-description-product">
                                            500ml Vatel
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $169.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/nutella.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Nutella
                                        </div>
                                        <div class="text-description-product">
                                            750g Ferrero
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $189.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="col">
                        <div class="row">
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/dorito.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Doritos
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
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/aceite.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Aceite Soya
                                        </div>
                                        <div class="text-description-product">
                                            500ml Vatel
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $169.99
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card">
                                    <q-card-section class="text-center">
                                        <q-img src="~assets/img/nutella.png" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            Nutella
                                        </div>
                                        <div class="text-description-product">
                                            750g Ferrero
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                           $189.99
                                        </div>
                                        <!-- <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product"></q-btn> -->
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </q-carousel-slide> 
                </q-carousel>
            </div>
        </div>
    <!-- </q-page> -->
</template>

<script>
import{ defineComponent } from '@vue/composition-api'
export default defineComponent
    ({ name: 'FeaturedProductsCarouselComponent',
        data(){
            return{
                slide:1,
            }
        }
    })

</script>

<style>
.container-featured-products-carousel{
    background-color: #FAFAFA;
    padding-left: 12%;
    padding-right: 12%;
}
/* .container-carousel{
    height: 520px;
} */
.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
.enlace-ver{
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
    width: 50%;
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
.btn-product{
    border-radius: 9px;
    font-family: 'Poppins-SemiBold';
}

@media (min-width:320px) and (max-width: 767px) {
.container-featured-products-carousel{
    padding-left: 0;
    padding-right: 0;
}
.img-product{
    width: 70%;
}
}

@media (min-width:1500px){
    .container-carousel{
    height: 480px;
}
}
</style>