<template>
    <div class="container-categories q-pa-md">
        <div class="row q-pa-md">
            <div class="col">
                <div class="text-title">
                    Categorías
                </div>
            </div>
        </div>
        <div class="row q-pa-md justify-center">
            <div class="col justify-center text-center">
                <div class="row">
                    <div class="col text-center q-gutter-sm">
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
                    <div class="col text-center q-gutter-sm">
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
                    <div class="col text-center q-gutter-sm">
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent ( { name: 'CategoriesComponent' } )
</script>

<style>
.container-categories{
    background-color: #FAF3EB;
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

</style>