<template>
  <q-page class="container-products q-pt-md">
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Todos los productos" class="texto-breadcrumbs"/>
    </q-breadcrumbs>
    <div>
      <q-layout view="hHh Lpr lff" container style="min-height: 1570px" class="rounded-borders">
        <q-header class="bg-hueso">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="bluesito" />
            <div>
              <div class="text-h7 q-mr-sm texto-filter">Ordenar por:</div>
            </div>
            <div class="q-pr-sm"><q-btn label="Popular" text-color="dark" icon-right="keyboard_arrow_down" class="btn-filter"></q-btn></div>
          </q-toolbar>
        </q-header>
        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="500"
          bordered
          content-class="bg-white"
        >
        <q-scroll-area class="fit">
          <q-list>
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
              <q-expansion-item group="somegroup" label="Varios" header-class="font-title-splitter">
                <q-card>
                  <q-card-section class="font-product-splitter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
          </q-list>
        </q-scroll-area>
        </q-drawer>
      <q-page-container>
      <div class="q-pa-md">
       <q-input label="Buscar" />
          <div class="row" v-if="load">
            <div class="col-12 col-md q-gutter-sm q-pa-md">
              <q-card class="q-pt-md skeleton-card-all-products">
                <q-card-section align="center" class="q-gutter-md">
                   <q-skeleton type="circle" size="130px" bordered />
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
              <q-card class="q-pt-md skeleton-card-all-products">
                <q-card-section align="center" class="q-gutter-md">
                  <q-skeleton type="circle" size="130px" bordered />
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
              <q-card class="q-pt-md skeleton-card-all-products">
                <q-card-section align="center" class="q-gutter-md">
                  <q-skeleton type="circle" size="130px" bordered />
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
          <div class="row justify-center q-mb-md" v-else>
            <div class="col justify-center text-center">
              <div class="row justify-center">
                <div class="col-4 col-12-md q-pa-md q-gutter-sm cursor-pointer" v-for="product in products" :key="product.id">
                  <q-card class="my-card card2 q-pa-md" @click="$router.push('/products/detail')">
                    <q-card-section class="text-center">
                      <!-- Concatenando el dominio porque no lo manda el servicio al crearlo desde el panel -->
                      <q-img :src="'http://localhost:8000' + product.image" class="img-product2"></q-img>
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
                      <q-btn label="Agregar" color="redsito" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
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
      </q-page-container>
      </q-layout>
    </div>
    <footer-component></footer-component>
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
import axios from 'axios'

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: true
  }
]

export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      splitterModel: 30, // start at 50%
      current: 3,
      load: true,
      drawer: false,
      menuList,
      products: [],
      search: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.load = false
    }, 3000)
  },
  // computed: {
  // filtro: {
  // get(){
  // return this.search
  // },
  // set(value){
  // value = value.toLowerCase()
  // this.productsFilter = this.products.filter(
  // item => item.search.toLowerCase().indexOf(value) !== -1)
  // this.search = value
  // }
  // }
  // },
  created () {
    this.getAllProducts()
  },
  methods: {
    getAllProducts () {
      axios.get('http://localhost:8000/panel/products/')
        .then(response => {
          this.products = response.data.results
          console.log(response.data.results)
        })
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
.texto-breadcrumbs{
    font-family: 'Poppins-Regular';
}

.my-card{
    border-radius: 9px;
}
.my-card:hover .img-product2{
    -webkit-transform: scale(1.00);
    transform: scale(1.00);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}
.card2{
    min-height: 420px;
}
.skeleton-card-all-products{
    min-height: 420px;
    border-radius: 27px;
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
    color: black;
}
.btn-filter{
    font-family: 'Poppins-Regular';
    font-size: 12px;
    border-radius: 9px;
}
.texto-all-products{
    font-family: 'Poppins-Regular';
}
@media (min-width:1023px){
    .img-product2{
        width: 50%;
    }
}
@media (min-width:1900px){
    .card2{
        min-height: 520px;
    }
    .skeleton-card{
        min-height: 520px;
    }
}
</style>
