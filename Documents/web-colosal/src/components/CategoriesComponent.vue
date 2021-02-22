<template>
    <div class="container q-pa-md">
        <div class="row q-pa-md">
            <div class="col">
                <div class="text-title">
                    Categorías
                </div>
            </div>
        </div>
        <div class="row q-pa-md">
            <div class="col">
                <div class="row">
                    <div class="col text-center">
                        <q-img src="~assets/img/img-carniceria.png" class="image-categorie"></q-img>
                        <div class="text-title-categorie q-pa-md">
                            Carnicería
                        </div>
                    </div>
                    <div class="col text-center">
                        <q-img src="~assets/img/img-bebidas.png" class="image-categorie"></q-img>
                        <div class="text-title-categorie q-pa-md">
                            Bebidas
                        </div>
                    </div>
                    <div class="col text-center">
                        <q-img src="~assets/img/img-almacen.png" class="image-categorie"></q-img>
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
.container{
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
    width: 70%;
}
</style>