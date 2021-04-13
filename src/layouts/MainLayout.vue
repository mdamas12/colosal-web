<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8 q-pa-sm" height-hint="64">
            <q-toolbar class="toolbar-header">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" class="q-mr-sm" />
                <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
                    <img src="~assets/img/logo.png" @click="$router.push('/')" class="cursor-pointer">
                </q-toolbar-title>
                <q-space />
                <q-input rounded outlined dense v-model="search" @keyup="searchProduct" color="bluesito" placeholder="¿Que estas buscando?" style="width: 40%">
                  <template v-slot:prepend>
                    <q-icon v-if="search === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="clearSearch()" />
                  </template>
                </q-input>
                <q-space />
                <div class="q-gutter-sm row items-center no-wrap">
                  <q-item-label class="label-register"> </q-item-label>
                  <q-btn v-show="SessionCotrol" flat icon="users" text-color="redsito" class="q-ml-sm btn-menu">{{name}}
                    <q-icon name="keyboard_arrow_down" color="bluesito"/>
                    <q-menu class="menux" fit :offset="[0, 20]" transition-show="jump-down" transition-hide="jump-up" :content-style="{ backgroundColor: '#FFFFFF', color: '#020B68'}">
                      <q-list>
                        <q-item clickable v-close-popup class="font-list">
                          <q-item-section><a href="#" class="text-myacount" @click="myaccount()">Mi Perfil</a></q-item-section>
                        </q-item>
                        <q-separator />
                          <q-item clickable v-close-popup class="font-list">
                            <q-item-section><a href="#" class="text-myacount" @click="GoPurchaseOrder()">Mis Compras</a></q-item-section>
                        </q-item>
                        <q-separator />
                          <q-item clickable v-close-popup class="font-list">
                            <q-item-section><a href="#" class="text-myacount" @click="Logout()">Cerrar Sesion</a></q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                 </q-btn>
                 <q-btn v-show="SessionClean" flat color="dark" icon-right="keyboard_arrow_down" label="Iniciar Sesion" class="q-mr-md btn-sign"  @click.stop="showInitSession = true" />
                  
                 <q-btn icon="shopping_cart" color="indigo-10" text-color="white" label="Carrito" class="btn-car"  size="md" @click="Shoppingcart()"></q-btn>
                </div>
            </q-toolbar>
                <q-list v-if="products" v-for="product in products" :key="product.id" separator>
                  <q-item clickable class="text-center q-px-md" @click="clickToProduct(product.id)">
                    <q-item-section>
                      {{product.name}}
                    </q-item-section>
                  </q-item>
                </q-list>
              <div class="row justify-center" v-if="searching && products.length == 0">
                <q-circular-progress
                    indeterminate
                    size="50px"
                    class="q-ma-md"
                  />
              </div>

    </q-header>

    <q-dialog persistent v-model="showInitSession" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              Inicia Sesión 
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-item class="q-pt-md">
          <q-item-section>
              <div class="row q-pt-md">
                   <div class="col-12 col-md q-px-md">
                      <q-input label="Email" v-model="email" class="font-input"></q-input>
                      </div>
               </div>
                  <div class="row q-pt-md">
                      <div class="col-12 col-md q-px-md">
                         <q-input label="Contraseña" v-model="password" :type="isPwd ? 'password' : 'text'" class="font-input">
                            <template v-slot:append>
                               <q-icon
                                 :name="isPwd ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                 @click="isPwd = !isPwd"
                                />
                            </template>
                            </q-input>
                       </div>
                   </div>
                   <div class="row q-pt-md">
                       <div class="col col-md q-px-md">
                          <a href="" class="enlace-olvido-password">He olvidado mi contraseña</a>
                        </div>
                  </div>
          </q-item-section>
        </q-item>
        <q-card-actions vertical align="center">
            <q-btn label="Iniciar Sesión" color="bluesito" class="btn-init-session q-mb-md" size="md" @click="checkLogin()"></q-btn>
        </q-card-actions>
         <q-separator />
         <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                     <q-item-label class="label-register">¿No tienes cuenta? </q-item-label>
                     <q-btn flat label="REGÍSTRATE" @click="goToRegister()"></q-btn>
                  </div>
                </div>
              </div>
           </q-item-section>
            </q-item>
          </q-card>
        </q-dialog>
        <q-page-container>
          <router-view />
        </q-page-container>
    </q-layout>

</template>

<script lang="ts">

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
import Vue from 'vue'
import { defineComponent, ref } from '@vue/composition-api';
import { Loading } from "quasar";
import UsersService   from "../services/home/users/user.service";
import ProductsServices from '../services/home/products/product.service'

export default defineComponent({
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    const leftDrawerOpen = ref(false)
    // const essentialLinks = ref(linksData)

    return {       
      leftDrawerOpen, 
      showInitSession: false, 
      password: '', 
      isPwd: true, 
      search: '', 
      products: [], 
      name : '',
      searching : false, 
      email: '', SessionCotrol: false, SessionClean : true }
  },

  methods: {
    goToRegister(){
      this.showInitSession = false
      this.$router.push('/register')
    },
    GoPurchaseOrder(){
      this.$router.push('/purchases-orders')
    },
    clearSearch(){
        this.search = ''
        this.products = []
    },
    clickToProduct(productID : number){
        this.clearSearch()
        this.$router.push({ path: `/products/detail/${productID}/` })
    },
    myaccount(){
      this.$router.push('/my-account')
    },
    searchProduct () {
      let vm = this
      this.products = []
      if (vm.search.length > 2) {
        vm.searching = true
        ProductsServices.searchProduct(vm.search).subscribe({
          next: (data : any) => {
            vm.searching = false
            vm.products = data.results
            console.log(data)
          }
        })
      } 
    },
    getId (id : any) {
      console.log('estoy imprimiendo:', id)
    },

      showNotif (message : any, color: any) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: '', color: 'white', handler: () => { /* ... */ } }
        ]
      })
     },
     
     checkLogin(){
      if (this.email === "" || this.password == null){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      this.Login();
    },
    Login(){
      Loading.show();
      const credentials = {
        username : this.email,
        password : this.password
      };
    
        let subscription = UsersService.Login(credentials).subscribe( {
          complete: () => {
            Loading.hide();
            if (this.verifySession() == true){
            this.showNotif("Ha iniciado sesion", 'green-10');
            this.showInitSession = false;
            this.email = '';
            this.password = '';
            }
          },
          error: () => {
              Loading.hide();
              this.showNotif("Los datos proporcionados son incorrectos", 'red-10');
            }
        });
      },
      Logout() {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          if (this.verifySession() == false){
            this.showNotif("Sesión cerrada exitosamente", 'blue-7');
          }
      },
      Shoppingcart(){
        
        if (this.verifySession() == true){
           this.$router.push('/cart')
        }
        else{
           this.showInitSession = true;
        }
  
      },
      verifySession(){
      let token = localStorage.getItem("token")
      let username = localStorage.getItem("username")
      if ((token != null) && (username != null)) {
          this.name = username;
          this.SessionClean = false;
          this.SessionCotrol = true;
          return true;
      }
      else{
        this.name = '';
        this.SessionClean = true;
        this.SessionCotrol = false;
        return false;
       
      }
    
    }

  },

    mounted(){
      let token = localStorage.getItem("token")
      let username =  localStorage.getItem("username")
      if ((token != null) && (username != null)) {
          this.name = username
          this.SessionClean = false;
          this.SessionCotrol = true;

      }
      else{
        this.name = '';
        this.SessionClean = true;
        this.SessionCotrol = false;
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
.text-myacount{
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: #020B68;
  text-decoration: none;
}
</style>
