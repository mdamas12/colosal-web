<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8 q-pa-sm" height-hint="64">
            <q-toolbar class="toolbar-header">
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" class="q-mr-sm" />
                <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
                    <img src="~assets/img/logo.png" @click="$router.push('/')" class="cursor-pointer">
                </q-toolbar-title>
                <q-space />
                <q-input rounded outlined dense v-model="search" color="bluesito" placeholder="¿Que estas buscando?" class="input-header">
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
    </q-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'HeaderComponent',
  data () {
    return {
      search: '',
      showInitSession: false,
      password: '',
      isPwd: true
    }
  }
})
</script>

<style>
    .tooblar-header{
        height: 64px
    }
    .input-header{
        width: 50%
    }
</style>
