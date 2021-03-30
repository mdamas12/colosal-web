<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8 q-pa-sm" height-hint="64">
            <q-toolbar class="toolbar-header">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" class="q-mr-sm" />
                <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
                    <img src="~assets/img/logo.png" @click="$router.push('/')" class="cursor-pointer">
                </q-toolbar-title>
                <q-space />
                <q-input rounded outlined dense v-model="search" @keyup="filtroProducts" color="bluesito" placeholder="¿Que estas buscando?" style="width: 40%">
                  <template v-slot:prepend>
                    <q-icon v-if="search === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                  </template>
                </q-input>
                <q-space />
                <div class="q-gutter-sm row items-center no-wrap">
                  <q-btn round flat @click.stop="showInitSession = true">
                    <q-avatar size="30px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    <q-tooltip>Account</q-tooltip>
                  </q-btn>
                  <q-btn round dense flat color="bluesito" icon="shopping_cart">
                    <q-tooltip>Carrito</q-tooltip>
                  </q-btn>
                </div>
            </q-toolbar>
            <q-list v-for="product in filtroProducts()" :key="product.id" separator>
              <q-item clickable class="text-center q-px-md" @click="$router.push({ path: `/products/detail/${product.id}/` })">
                <q-item-section>
                  {{product.name}}
                </q-item-section>
              </q-item>
            </q-list>
        </q-header>
        <q-dialog persistent v-model="showInitSession" >
          <q-card class="my-card" style="max-width:100%; width:440px">
            <q-toolbar class="text-bluesito">
              <q-toolbar-title class="title-session">Inicia Sesión</q-toolbar-title>
              <q-btn flat icon="close" round v-close-popup />
            </q-toolbar>
            <q-separator />
            <q-item class="q-pt-md">
              <q-item-section>
                <div class="row q-pt-md">
                  <div class="col-12 col-md q-px-md">
                    <q-input label="Correo electrónico" class="font-input"></q-input>
                  </div>
                </div>
                <div class="row q-pt-md">
                  <div class="col-12 col-md q-px-md">
                    <q-input label="Contraseña" v-model="password" :type="isPwd ? 'password' : 'text'" class="font-input">
                        <template v-slot:append>
                          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                  </div>
                </div>
                <div class="row q-pt-md">
                  <div class="col col-md q-px-md">
                    <a href="" class="enlace-recordarme">Recordarme</a>
                  </div>
                  <div class="col col-md q-px-md">
                    <a href="" class="enlace-olvido-password">He olvidado mi contraseña</a>
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-card-actions vertical align="center">
              <q-btn label="Iniciar Sesión" color="bluesito" class="btn-init-session q-mb-md" size="md"></q-btn>
            </q-card-actions>
            <q-separator />
            <q-item-section>
              <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center">
                    <q-item-label class="label-register">¿No tienes cuenta? REGÍSTRATE</q-item-label>
                  </div>
                </div>
              </div>
              <q-card-actions vertical align="center">
                <q-btn label="Registrarse" color="cielo" text-color="bluesito" class="btn-register-session q-mb-md" size="md" v-close-popup to="/register"></q-btn>
              </q-card-actions>
            </q-item-section>
          </q-card>
        </q-dialog>
        <q-page-container>
          <router-view />
        </q-page-container>
    </q-layout>

</template>

<script lang="ts">

// const linksData = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

import { defineComponent, ref } from '@vue/composition-api'
import ProductsServices from '../services/home/products/product.service'
export default defineComponent({
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    const leftDrawerOpen = ref(false)
    // const essentialLinks = ref(linksData)

    return { leftDrawerOpen, showInitSession: false, password: '', isPwd: true, search: '', products: '', name }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      ProductsServices.getProducts().subscribe({
        next: data => {
          this.products = data.results
          console.log(data.results)
        },
        complete: () => console.log('[complete]')
      })
    },
    filtroProducts () {
      var data = this.products
      if (this.search === '') {
        let value = ''
        return value
      } else {
        return data.filter((item) => {
          return (item.name.toString().toLowerCase().includes(this.search.toLowerCase())) ? true : false
        })
      }
    },
    productsFilter () {
      ProductsServices.searchProduct(this.search).subscribe({
        next: data => {
          console.log(data)
          this.products = data.results
        }
      })
    },
    getId (id) {
      console.log('estoy imprimiendo:', id)
    }
  }
})
</script>

<style>
.title-menu{
  color: #EB0004;
}
.btn-car{
  border-radius: 9px;
  font-family: 'Poppins-SemiBold';
}
.text-promo{
  font-family: 'Poppins-SemiBold';
  font-size: 10px;
  color: #ffffff;
}
.btn-sign{
  border-radius: 9px;
  font-family: 'Poppins-Regular';
  font-size: 12px;
}
.btn-menu{
  font-family: 'Poppins-Regular';
  font-size: 12px;
}
.font-list{
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
}
.font-all-products{
  font-family: 'Poppins-Medium';
  font-size: 12px;
  color: #020B68;
}
.title-session{
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  color: #020B68;
}
.enlace-recordarme{
  font-family: 'Poppins-Regular';
  font-size: 12px;
   color: #020B68;
}
.enlace-olvido-password{
  font-family: 'Poppins-Regular';
  font-size: 12px;
   color: #020B68;
}
.btn-init-session{
  font-family: 'Poppins-Medium';
  font-size: 12px;
  border-radius: 9px;
}
.label-register{
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #3D3D3D;
}
.btn-register-session{
  font-family: 'Poppins-Medium';
  font-size: 12px;
  border-radius: 9px;
}
</style>
