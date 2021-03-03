<template>
<div class="container-categories-1 q-pt-md">
     <div class="container-categories q-pt-none">
        <div class="row q-pa-md">
            <div class="col q-px-lg">
                <div class="text-title">
                    Categorías
                </div>
            </div>
        </div>
        <!-- <div class="row q-pa-md justify-center" v-if="load">
            <div class="col justify-center text-center padding-cat">
                <div class="row">
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="240px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="240px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="240px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                </div>
            </div>
        </div>
        <div class="row q-pa-md justify-center" v-else>
            <div class="col justify-center text-center padding-cat">
                <div class="row">
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-carniceria q-pa-md">
                            <q-img src="~assets/img/img-carniceria.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie q-pa-md">
                            Carnicería
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-bebidas q-pa-md">
                            <q-img src="~assets/img/img-bebidas.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie q-pa-md">
                            Bebidas
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-almacen q-pa-md">
                            <q-img src="~assets/img/img-almacen.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        
                        <div class="text-title-categorie q-pa-md">
                            Almacén
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container q-px-md">
            <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                arrows
                control-color="red-10"
                class="container-carousel q-px-lg q-pt-md bg-redp"
            >
                <q-carousel-slide :name="1" class="col q-pt-none">
                <div class="row" v-if="load">
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="250px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="250px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <q-card-section align="center" class="q-gutter-md">
                            <q-skeleton type="circle" size="250px" bordered />
                        </q-card-section>
                        <q-card-actions align="center" class="q-pt-sm">
                            <q-skeleton type="QBtn" class="q-mb-sm" bordered />
                        </q-card-actions>    
                    </div>
                </div> 
                   <div class="row" v-else>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-carniceria q-pa-md">
                            <q-img src="~assets/img/img-carniceria.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie q-pa-md">
                            Carnicería
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-bebidas q-pa-md">
                            <q-img src="~assets/img/img-bebidas.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie q-pa-md">
                            Bebidas
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-almacen q-pa-md">
                            <q-img src="~assets/img/img-almacen.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        
                        <div class="text-title-categorie q-pa-md">
                            Almacén
                        </div>
                    </div>
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="col q-pt-none">
                   <div class="row">
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-carniceria q-pa-md">
                            <q-img src="~assets/img/img-carniceria.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie">
                            Carnicería
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-bebidas q-pa-md">
                            <q-img src="~assets/img/img-bebidas.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie">
                            Bebidas
                        </div>
                    </div>
                    <div class="col-12 col-md text-center q-gutter-sm">
                        <div class="div-almacen q-pa-md">
                            <q-img src="~assets/img/img-almacen.png" class="image-categorie"></q-img>
                            <div class="middle">
                                <q-btn color="white" text-color="black" label="Ver todo" icon-right="keyboard_arrow_right" class="btn-category"></q-btn>
                            </div>
                        </div>
                        <div class="text-title-categorie">
                            Almacén
                        </div>
                    </div>
                </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</div>
   
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent
    ( { name: 'CategoriesComponent',
        data(){
            return{
                slide:1,
                load:true
            }
        },
        mounted(){
            setTimeout(() => {
            this.load = false
        }, 3000)
        }
     } )
</script>

<style>
.container-categories-1{
    background-color:#FAF3EB;
    padding-left: 10%;
    padding-right: 10%;
}
.container-categories{
    background-color: #FAF3EB;
    padding-left: 3%;
    padding-right: 3%;
}
.container-carousel{
    height: 415px;
}
.text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
.text-title-categorie{
    font-family: 'Poppins-SemiBold';
    font-size: 24px;
    color: #B31E1A;
}

.image-categorie{
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
}
.div-carniceria{
    position: relative;
}
.div-bebidas{
    position: relative;
}
.div-almacen{
    position: relative;
}

.middle{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.div-carniceria:hover .image-categorie{
    opacity: 0.6;
}

.div-carniceria:hover .middle{
    opacity: 1;
}
.div-bebidas:hover .image-categorie{
    opacity: 0.6;
}

.div-bebidas:hover .middle{
    opacity: 1;
}
.div-almacen:hover .image-categorie{
    opacity: 0.6;
}

.div-almacen:hover .middle{
    opacity: 1;
}

.btn-category{
    border-radius: 9px;
    font-family: 'Poppins-SemiBold';
}

.padding-cat{
    padding-left: 12%;
    padding-right: 12%;
}

@media (min-width: 1700px){
    .container-categories-1{
        padding-left: 11%;
        padding-right: 11%;
    }
    .container-carousel{
    height: 530px;
}
}

</style>