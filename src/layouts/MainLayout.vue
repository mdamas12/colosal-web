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
          <q-img src="~assets/img/logo.png" style="width:98px" class="cursor-pointer" @click="$router.push('/')">
          </q-img>
          <q-btn flat icon="menu" label="Productos" text-color="redsito" class="q-ml-sm btn-menu">
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
          <q-btn flat color="dark" icon-right="keyboard_arrow_down" label="Mi cuenta" class="q-mr-md btn-sign">
            <q-menu :offset="[0, 20]" transition-show="jump-down"
                transition-hide="jump-up">
              <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>
          <q-btn icon="shopping_cart" color="indigo-10" text-color="white" label="Carrito" class="btn-car"  size="md"></q-btn>

        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

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

    return { leftDrawerOpen, essentialLinks }
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
</style>
