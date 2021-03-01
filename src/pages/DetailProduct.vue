<template>
    <q-page class="container-detail-product q-pt-md">
        <q-breadcrumbs gutter="sm" class="q-px-md text-grey" active-color="grey">
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Todos los productos" class="texto-breadcrumbs" to="/products"/>
            <q-breadcrumbs-el label="Almacén" class="texto-breadcrumbs text-bluesito"/>
        </q-breadcrumbs>
        <div class="container-detail-product2">
            <div class="row">
                <div class="col-12 col-md q-gutter-sm q-pa-md">
                    <q-carousel
                        swipeable
                        animated
                        v-model="slide"
                        thumbnails
                        infinite
                        
                        >
                        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" class="border-img-slide"></q-carousel-slide>
                        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" class="border-img-slide"/>
                        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" class="border-img-slide"/>
                        <q-carousel-slide :name="4" img-src="~assets/img/dorito.png" class="border-img-slide"/>
                    </q-carousel>
                </div>
                <div class="col q-gutter-sm q-pa-md">
                    <div class="text-title-product">Doritos Mega Queso 150Gr</div>
                    <div class="text-title-brand">Frito Lay</div>
                    <div class="text-ID-product">ID Producto: 261311</div>
                    <div class="text-detail-product">Detail:</div>
                    <div class="text-price-product">$169.99</div>
                    <div class="text-fventa-product">Mayor:</div>
                    <div class="text-price_fventa-product">$129.99</div>
                    <div class="text-quantity-product">Cantidad:</div>
                    <div class="row">
                        <div class="col-6 col-md">
                            
                            <div class="border">
                                <span class="border">
                                <q-btn flat round color="redsito" icon="remove" class="btn-product" size="md" v-on:click="counter -= 1"></q-btn>
                                {{counter}}
                                <q-btn flat round color="indigo-10" icon="add" class="btn-product" size="md" v-on:click="counter += 1"></q-btn>
                                </span>
                            </div>
                            
 
                        </div>
                        <div class="col-6 col-md">
                            <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                        </div>
                    </div>
                    <div class="title-nota-extra">Nota extra:</div>
                    <div class="text-nota-extra text-justify q-pr-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
                </div>
            </div>
        </div>
        <div class="container-description-product q-px-md q-pt-lg">
            <div class="row">
                <div class="col">
                    <div class="text-title-description">Descripción del producto</div>
                    <div class="text-description q-pa-md text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
                </div>
            </div>
        </div>
        <featured-products-carousel-component></featured-products-carousel-component>
        <footer-component></footer-component>
    </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FeaturedProductsCarouselComponent from 'src/components/FeaturedProductsCarouselComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
export default defineComponent ({
    components: {FeaturedProductsCarouselComponent, FooterComponent},
    data () {
    return {
      counter: 0,
      slide: 1
    }
  }
})
</script>

<style>
.border{
    border-radius: 9px;
}
.container-detail-product{
    background-color: #FFFFFF;
}
.container-detail-product2{
    background-color: #FFFFFF;
    padding-left: 12%;
    padding-right: 12%;
}
.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}
.text-title-product{
    font-family: 'Poppins-SemiBold';
    font-size: 30px;
}
.text-title-brand{
    font-family: 'Poppins-Regular';
    font-size: 20px;
}
.text-ID-product{
    font-family: 'Poppins-Regular';
    font-size: 12px;
    color: #808080
}
.text-detail-product{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.text-price-product{
    font-family: 'Poppins-SemiBold';
    font-size: 30px;
}
.text-detail-product{
    font-family: 'Poppins-Regular';
    font-size: 12px;
}
.text-fventa-product{
    font-family: 'Poppins-Regular';
}
.text-price_fventa-product{
    font-family: 'Poppins-Regular';
    font-size: 30px;
    color: #FF0000
}
.text-quantity-product{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.title-nota-extra{
    font-family: 'Poppins-Regular';
    font-size: 13px;
}
.text-nota-extra{
    font-family: 'Poppins-Regular';
    font-size: 14px;
}
.container-description-product{
    background-color: #FAFAFA;
    padding-left: 13%;
    padding-right: 13%;
}
.container-featured-products{
    background-color: #FAFAFA;
}
.text-title-description{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
.text-description{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}
.my-card{
    border-radius: 9px;
}
.text-name-product{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
}

.text-description-product{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}

.border-img-slide{
    border-radius: 12px;
}
</style>