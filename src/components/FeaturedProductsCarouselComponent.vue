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
                        <div class="row" v-if="load">
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-12 col-md q-gutter-sm q-pa-md">
                                <q-card class="q-pt-md skeleton-card">
                                    <q-card-section align="center" class="q-gutter-md">
                                        <q-skeleton type="circle" size="100px" bordered />
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md q-py-sm">
                                        <q-item-label>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                        <q-item-label caption>
                                            <q-skeleton type="text" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-section>
                                        <q-item-section class="q-mx-md">
                                        <q-item-label>
                                            <q-skeleton type="text" class="q-px-md q-mb-sm" />
                                        </q-item-label>
                                    </q-item-section>
                                    </q-card-section>
                                    <q-card-actions align="center" >
                                        <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-4 col-3-md q-gutter-sm q-pa-md" v-for="product in products" :key="product.id">
                                <q-card class="my-card card2">
                                    <q-card-section class="text-center">
                                        <q-img v-bind:src="product.image" class="img-product"></q-img>
                                    </q-card-section> 
                                    <q-card-section class="text-center">
                                        <div class="text-name-product">
                                            {{product.name}}
                                        </div>
                                        <div class="text-description-product">
                                           {{product.description}}
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center q-pt-none">
                                        <div class="text-price-product">
                                            {{product.price}}
                                        </div>
                                    </q-card-section>
                                    <q-card-section class="text-center">
                                        <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <!-- <div class="col-12 col-md q-gutter-sm q-pa-md ">
                                <q-card class="my-card card2">
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
                                <q-card class="my-card card2">
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
                            </div> -->
                        </div>
                    </q-carousel-slide>
                    <!-- <q-carousel-slide :name="2" class="col">
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
                    </q-carousel-slide> -->
                    <!-- <q-carousel-slide :name="3" class="col">
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
                    </q-carousel-slide>  -->
                </q-carousel>
            </div>
        </div>
    <!-- </q-page> -->
</template>

<script>
import{ defineComponent } from '@vue/composition-api'
import ProductsService from '../services/home/products/product.service'

export default defineComponent
    ({ name: 'FeaturedProductsCarouselComponent',
        data(){
            return{
                slide:1,
                load: true,
                products: []
            }
        },
        mounted (){
             setTimeout(() => {
            this.load = false
        }, 3000)

        let subscription = ProductsService.getProducts().subscribe( {
            next: data => {
            this.products = data.results
            console.log(data)
            },
            complete: () => console.log('[complete]'),
         })
        }
    })

</script>

<style>
.container-featured-products-carousel{
    background-color: #FAFAFA;
    padding-left: 12%;
    padding-right: 12%;
}
.container-carousel{
    height: 425px;
}
.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
.enlace-ver{
    color:#EB0004;
    font-family: 'Poppins-Regular';
    font-size: 19px;
}
.card2{
    min-height: 360px;
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
.skeleton-card{
    min-height: 360px;
    border-radius: 27px;
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