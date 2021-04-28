<template>
<q-page>
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey q-pt-sm breadcrumbs-promotion" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Promociones" class="texto-breadcrumbs text-bluesito"/>
    </q-breadcrumbs>
     <!-- <div class="container-skeleton-list q-pa-md q-mb-sm" v-if="load">
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
    </div> -->
    <div class="container-list-promotions q-pa-md">
      <div class="row justify-center q-mb-md">
        <div class="col-12 col-md-4 q-pa-md q-gutter-sm" v-for="promotion in promotions" :key="promotion.id">
          <q-card class="my-card card2 q-pa-md text-center cursor-pointer" @click="$router.push({ path: `/promotions/detail/${promotion.id}/` })">
            <q-card-section>
              <div class="text-name-promotion">
                {{promotion.name}}
              </div>
              <div class="text-description-promotion">
                {{promotion.description}}
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-price-promotion">
                 {{promotion.coin}} {{promotion.price}}
              </div>

              <div v-if="promotion.quantity > 0" >
                <div class="text-detail-promotion">Cantidad Disponible :</div>
                <div class="text-quantity">{{promotion.quantity}}</div>
              </div>
              <div v-if="promotion.quantity  < 1" >
                <div class="text-quantity-none">Promocion NO Disponible</div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="q-pt-none" v-if="promotion.quantity > 0">
                <q-btn label="Agregar" color="red-10" text-color="white" icon="shopping_cart" size="md" class="btn-promotions"></q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row justify-center q-mb-md">
      <q-pagination
        v-if="numberOfPages > 1"
        v-model="pagination.page"
        :min="currentPage"
        :max="numberOfPages"
        :direction-links="true"
        color="black"
        :boundary-numbers="false"
        @click="getAllPromotions()"
      >
      </q-pagination>
    </div>
    <footer-component></footer-component>
</q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
import PromotionsService from '../services/home/promotions/promotion.service'

export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      load: true,
      promotions: [],
      pagination: {
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0,
        currentPage: 1
      },
      id: null,
      limit: 25,
      numberOfPages: 0,
      count: 0,
      currentPage: 1,
      totalPages: 1,
    }
  },
  created () {
    this.getAllPromotions()
  },
  mounted () {
    setTimeout(() => {
      this.load = false
    }, 3000)
  },
  methods: {
    getAllPromotions () {
      this.pagination.currentPage = this.pagination.page
      this.offset = this.limit * (this.pagination.page - 1)
      PromotionsService.getPromotions(this.limit, this.offset).subscribe({
        next: data => {
          console.log(data.results)
          this.promotions = data.results
          this.numberOfPages = Math.ceil(data.count / this.limit)
        },
        complete: () => console.log('[complete]')
      })
    }
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
.text-name-promotion{
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #000000;
}
.text-description-promotion{
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #000000;
}
.text-price-promotion{
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
  color: #000000;
}
.btn-promotions{
  border-radius: 9px;
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
}

.text-quantity{

  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #060485;

}

.text-quantity-none{

  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #ce0707;

}

.breadcrumbs-promotion{
  padding-left: 13%;
  padding-right: 13%;
}
</style>
