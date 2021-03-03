<template>
<q-page>
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey" active-color="grey">
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Promociones" class="texto-breadcrumbs text-bluesito"/>
        </q-breadcrumbs>
     <div class="container-skeleton-list q-pa-md q-mb-sm" v-if="load">
    <!-- <div class="col q-px-md q-mb-md"> -->
        <q-skeleton type="QToolbar" square animation="wave" class="bg-indigo-10"/>
        <q-item v-for="sk in 5" :key="sk">
            <q-item-section>
                <q-item-label>
                     <q-skeleton type="text" square height="20px" width="5%" animation="wave" />
                </q-item-label>
                <q-item-label caption>
                    <q-skeleton type="text" square height="20px" width="10%" animation="wave" />
                </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator />
        <!-- </div> -->
    </div>    
    <div class="container-list-promotions q-pa-md q-mb-sm" v-else>
        <q-toolbar class="bg-indigo-10 text-white shadow-2">
            <q-toolbar-title class="title-promotions">Promociones</q-toolbar-title>
        </q-toolbar>
        <q-list bordered separator>
            <q-item clickable v-ripple v-for="list in 5" :key="list">
                <q-item-section>
                <q-item-label class="font-items-list">Combo 1</q-item-label>
                <q-item-label caption class="font-items-list">Description</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
     <footer-component></footer-component>
</q-page>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
export default defineComponent ({
    components: {FooterComponent},
    data(){
        return {
            load: true
        }
    },
    mounted (){
        setTimeout(() => {
            this.load = false
        }, 3000)
    }
})
</script>

<style>
.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}
.container-skeleton-list{
    padding-left: 12%;
    padding-right: 12%;
}
.container-list-promotions{
    padding-left: 12%;
    padding-right: 12%;
}
.title-promotions{
    font-family: 'Poppins-Regular';
}
.font-items-list{
    font-family: 'Poppins-Regular';
}
</style>