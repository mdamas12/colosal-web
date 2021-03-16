<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <!-- <div class="container-promo bg-indigo-10 q-pa-md">
        <div class="row">
          <div class="col text-center">
            <div class="text-promo">TODAS TUS COMPRAS DURANTE EL MES DE ENERO ESTARÁN PARTICIPANDO EN LA RIFA DE UNA COCINA</div>
          </div>
        </div>
      </div> -->
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>
          <q-img src="~assets/img/logo.png" style="width:98px" class="cursor-pointer gt-xs " @click="$router.push('/')">
          </q-img>
          <q-btn flat icon="menu" text-color="redsito" class="q-ml-sm btn-menu">
                <q-menu class="menux" fit :offset="[0, 20]" transition-show="jump-down" transition-hide="jump-up" :content-style="{ backgroundColor: '#FFFFFF', color: '#020B68'}">
                  <q-list>
                    <q-item clickable class="font-list">
                      <q-item-section>Almacén</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" color="bluesito"/>
                        </q-item-section>
                        <q-menu anchor="top end" self="top start">
                          <q-list>
                            <q-item v-for="n in 3" :key="n" clickable class="font-list">
                              <q-item-section>Harinas y pastas</q-item-section>
                              <q-item-section side>
                                <q-icon name="keyboard_arrow_right" color="bluesito" />
                              </q-item-section>
                              <q-menu anchor="top end" self="top start">
                                  <q-list>
                                    <q-item v-for="n in 3" :key="n" clickable class="font-list">
                                      <q-item-section>Granos y café</q-item-section>
                                      <q-item-section side>
                                        <q-icon name="keyboard_arrow_right" color="bluesito" />
                                      </q-item-section>
                                    </q-item>
                                  </q-list>
                              </q-menu>
                            </q-item>
                          </q-list>
                        </q-menu>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup to="/products" class="font-all-products">
              <q-item-section><a href="/products">Todos los productos</a></q-item-section>
            </q-item>
                  </q-list>
                </q-menu>
          </q-btn>
              <div class="absolute-center gt-sm">
                <q-input rounded outlined label="¿Que estas buscando?" style="width:476px" color="bluesito">
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
        </q-toolbar-title>
        <div>
          <q-btn flat color="dark" icon-right="keyboard_arrow_down" label="Mi cuenta" class="q-mr-md btn-sign"  @click.stop="showInitSession = true" />
          <q-btn icon="shopping_cart" color="indigo-10" text-color="white" label="Carrito" class="btn-car"  size="md"></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-dialog
    persistent
    v-model="showInitSession"
    >
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
                              <q-input label="Correo electrónico" class="font-input"></q-input>
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

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  // components: { EssentialLink },
  setup () {
    const leftDrawerOpen = ref(false)
    const essentialLinks = ref(linksData)

    return { leftDrawerOpen, essentialLinks, showInitSession: false, password: '', isPwd: true }
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
