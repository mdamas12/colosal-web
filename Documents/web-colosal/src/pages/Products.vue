<template>
    <q-page class="container-products">
        <q-breadcrumbs gutter="sm" class="q-px-md text-grey" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Todos los productos" class="texto-breadcrumbs"/>
    </q-breadcrumbs>
    <q-toolbar>
        <q-toolbar-title>
            <div class="text-h6 texto-all-products">Todos los productos</div>
        </q-toolbar-title>
        <div>
            <div class="text-h7 q-mr-sm texto-filter">Ordenar por:</div>
        </div>
        <div> <q-btn label="Popular" icon-right="keyboard_arrow_down" class="btn-filter"></q-btn></div>
    </q-toolbar>
        <q-splitter
      v-model="splitterModel"

    >

      <template v-slot:before class="font-splitter">
<q-list bordered>
    <q-item-label class="font-category-splitter q-pa-md">Categorías</q-item-label>
      <q-expansion-item
        group="somegroup"
        label="Almacén"
        default-opened
        header-class="font-title-splitter"
      >
        <q-card>
          <q-card-section>
           <q-list class="font-product-splitter">
               <q-item>Harinas y pastas</q-item>
               <q-item>Aceites y margarinas</q-item>
               <q-item>Azúcar y edulcorantes</q-item>
               <q-item>Cereales</q-item>
               <q-item>Condimentos</q-item>
           </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" label="Carnicería" header-class="font-title-splitter">
        <q-card>
          <q-card-section class="font-product-splitter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" label="Bebidas" header-class="font-title-splitter">
        <q-card>
          <q-card-section class="font-product-splitter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Varios"
        header-class="font-title-splitter"
      >
        <q-card>
          <q-card-section class="font-product-splitter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
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
        <div class="row justify-center">
            <q-pagination
      v-model="current"
      :max="5"
      :direction-links="true"
      color="black"
      :boundary-numbers="false"
    >
    </q-pagination>
        </div>
        
        </div>
      </template>

    </q-splitter>
         <footer-component></footer-component>
    </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'

export default defineComponent ({
    components: {FooterComponent},
    data () {
    return {
      splitterModel: 30, // start at 50%
      current: 3
    }
  }
})

</script>

<style>
.container-products{
    background-color: #FAFAFA;
}
.btn-product{
    border-radius: 9px;
    font-family: 'Poppins-SemiBold';
}

.font-title-splitter{
    font-family: 'Poppins-Medium';
}

.font-category-splitter{
    font-family: 'Poppins-SemiBold';
}

.font-product-splitter{
    font-family: 'Poppins-Regular';
}

a{
    color:#EB0004;
    font-family: 'Poppins-Regular';
    font-size: 19px;
}

.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}

.my-card{
    border-radius: 9px;
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
.texto-filter{
    font-family: 'Poppins-Medium';
}
.btn-filter{
    font-family: 'Poppins-Regular';
    font-size: 12px;
    border-radius: 9px;
}

.texto-all-products{
    font-family: 'Poppins-Regular';
}
</style>