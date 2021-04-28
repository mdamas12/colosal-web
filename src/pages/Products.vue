<template>
  <q-page class="container-products q-pt-md">
    <q-breadcrumbs gutter="sm" class="q-px-md text-grey breadcrumbs-products-list" active-color="grey">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Todos los productos" class="texto-breadcrumbs text-bluesito"/>
    </q-breadcrumbs>
    <div class="container-products2">
      <q-layout view="hHh Lpr lff" container style="min-height: 1570px" class="rounded-borders">
        <q-header class="bg-hueso">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="bluesito" />
            <div>
              <div class="text-h7 q-mr-sm texto-filter">Ordenar por:</div>
            </div>
            <div class="q-pr-md">
              <q-select borderless transition-show="scale" transition-hide="scale" v-model="orderBy" :options= "optionsFilter" option-label="label" @input="optionsOrder()" behavior="menu" option-value="value" map-options class="texto-filter"/>
            </div>
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
              <q-item clickable 
                      v-ripple 
                      :active="categorie.id === idCategorie"
                      active-class="my-menu-link"
                      v-for="categorie in categories" :key="categorie.id" class="font-title-splitter" @click="getId(categorie.id)">
                <q-item-section>{{categorie.name}}</q-item-section>
              </q-item>
              <q-separator />
          </q-list>
        </q-scroll-area>
        </q-drawer>
      <q-page-container>
      <div class="q-pa-md">
       <!-- <q-input label="Buscar" v-model="search" @keyup.enter="productsFilter"/> -->
          <div class="row" v-if="load">
            <div class="col-4 col-12-md q-gutter-sm q-pa-md" v-for="skeleton in 9" :key="skeleton.id">
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
            <!-- <div class="col-12 col-md q-gutter-sm q-pa-md">
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
            </div> -->
          </div>
          <div class="row justify-center q-mb-md" v-else>
            <div class="col justify-center text-center">
              <div class="row justify-center">
                <div class="col-12 col-md-4 q-pa-md q-gutter-sm cursor-pointer" v-for="product in products" :key="product.id">
                  <q-card class="my-card card2 q-pa-md" @click="$router.push({ path: `/products/detail/${product.id}/` })">
                    <q-card-section class="text-center">
                      <!-- Concatenando el dominio porque no lo manda el servicio al crearlo desde el panel -->
                      <q-img :src="product.image" class="img-product2" style="max-width:150px; height: 150px;"></q-img>
                    </q-card-section>
                    <q-card-section class="text-center hc">
                      <div class="text-name-product">
                        <q-item-label lines="2">
                          {{product.name}}
                        </q-item-label>
                      </div>
                      <div class="text-description-product">
                        <q-item-label lines="2">
                           {{product.description}}
                        </q-item-label>
                      </div>
                    </q-card-section>
                    <q-card-section class="text-center q-pt-none">
                      <div class="text-price-product">
                        {{product.coin}} {{product.price}}
                      </div>
                    </q-card-section>
                    <q-card-section v-if="product.quantity > 1" class="text-center q-pt-none">
                      <div class="text-quantity-products">
                        {{product.quantity}} Disponibles
                      </div>
                    </q-card-section>
                      <q-card-section v-if="product.quantity == 1" class="text-center q-pt-none">
                      <div class="text-quantity-products">
                        {{product.quantity}} Disponible
                      </div>
                    </q-card-section>
                      <!-- </q-card-section> -->
                      <q-card-section v-if="product.quantity < 1" class="text-center q-pt-none">
                      <div class="text-quantity-products-none">
                         No Disponible
                      </div>
                    </q-card-section>
                    <q-card-section v-if="product.quantity > 0" class="text-center">
                      <q-btn label="Agregar" color="redsito" text-color="white" icon="shopping_cart" class="btn-product" size="md"></q-btn>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <q-pagination
              v-if="numberOfPages > 1"
              v-model="pagination.page"
              :min="currentPage"
              :max="numberOfPages"
              :direction-links="true"
              color="black"
              :boundary-numbers="false"
              @click="getPagination()"
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
import ProductsServices from '../services/home/products/product.service'
import CategoriesServices from '../services/home/categories/categorie.services'
import FooterComponent from 'src/components/FooterComponent.vue'
import { colors } from 'quasar'

const { getPaletteColor } = colors


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
  props: ['idCategorie'],
  data () {
    return {
      splitterModel: 30, // start at 50%
      current: 3,
      load: true,
      drawer: false,
      menuList,
      products: [],
      categories: [],
      search: '',
      page: 1,
      currentPage: 1,
      totalPages: 1,
      limit: 25,
      numberOfPages: 0,
      count: 0,
      orderBy: { label: 'Categoría', value: 2 },
      optionsFilter: [{ label: 'Categoría', value: 2 }, { label: 'Nombre', value: 1 }],
      id: null,
      offset: 0,
      pagination: {
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0,
        currentPage: 1
      },
      filtroPagination: 1
    }
  },
  // mounted () {
  //   setTimeout(() => {
  //     this.load = false
  //   }, 3000)
  // },
  created () {
    // this.getAllProducts()
    this.getAllCategories()
    if(this.idCategorie){
      this.getId(this.idCategorie)
    }else{
      this.optionsOrder()
    }
    // this.productsFilter()
  },
  methods: {
    // getAllProducts () {
    //   this.filtroPagination=2
    //   ProductsServices.getProducts().subscribe({
    //     next: data => {
    //       this.products = data.results
    //       this.count = data.count
    //       console.log(data.count)
    //       console.log(data)
    //     },
    //     complete: () => console.log('[complete]')
    //   })
    // },
    // productsFilter() {
    //   // console.log(`name: ${this.search}`)
    //   this.filtroPagination=3
    //   ProductsServices.searchProduct(this.search).subscribe({
    //     next: data => {
    //       console.log(data)
    //       console.log(data.results.length)
    //       this.products = data.results
    //     }
    //   })
    // },
    // orderProducts() {
    //   ProductsServices.orderProducts(this.id).subscribe({
    //     next: data => {
    //       this.products = data.results
    //     },
    //     complete: () => console.log('[complete]')
    //   })
    // },
    getAllCategories () {
      CategoriesServices.getListCategories().subscribe({
        next: data => {
          console.log(data)
          this.categories = data
        },
        error: error =>{
            console.log(error)
        }
      })
    },
    getId (id) {
      console.log('estoy en esta categoria:', id)
      this.load = true
      this.idCategorie = id
      this.filtroPagination = 2
      this.pagination.currentPage = this.pagination.page
      this.offset = this.limit * (this.pagination.page - 1)
      ProductsServices.getProductsCategorie(id, this.limit, this.offset).subscribe({
        next: data => {
          this.products = data.results
          this.numberOfPages = Math.ceil(data.count / this.limit)
          this.load = false
        },
        complete: () => console.log('[complete]')
      })
    },
    optionsOrder () {
      this.load = true
      this.filtroPagination = 1
      this.pagination.currentPage = this.pagination.page
      this.offset = this.limit * (this.pagination.page - 1)
      ProductsServices.orderProducts(this.orderBy.value, this.limit, this.offset).subscribe({
        next: data => {
          this.products = data.results
          this.numberOfPages = Math.ceil(data.count / this.limit)
          this.load = false
        },
        complete: () => console.log('[complete]')
      })
    },
    optionsOrder2 () {
      this.load = true
      this.pagination.currentPage = this.pagination.page
      this.offset = this.limit * (this.pagination.page - 1)
      ProductsServices.getProviders(this.limit, this.offset).subscribe({
        next: data => {
          this.products = data.results
          this.numberOfPages = Math.ceil(data.count / this.limit)
          console.log(this.numberOfPages)
          this.load = false
        },
        complete: () => console.log('[complete]')
      })
    },
    getPagination () {
      switch (this.filtroPagination) {
        case 1:
          this.optionsOrder()
          break
        case 2:
          this.getId(idCategorie)
          break
      }
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
    min-height: 360px;
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
    font-size: 18px;
}
.text-description-product{
    font-family: 'Poppins-Regular';
    font-size: 16px;
}
.text-price-product{
    font-family: 'Poppins-SemiBold';
    font-size: 22px;
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
.hc{
  height: 91px;
}

@media (min-width:767px){
  .breadcrumbs-products-list{
    padding-left: 13%;
    padding-right: 13%;
  }
  .container-products2{
    padding-left: 13%;
    padding-right: 13%;
  }
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
.my-menu-link{
  color: white;
  background: var(--q-color-primary) !important
}


.text-quantity-products{

  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #060485;

}

.text-quantity-products-none{

  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #ce0707;
  margin: 68px 0 0 0;

}
</style>
