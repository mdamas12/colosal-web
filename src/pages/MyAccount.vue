<template>
    <q-page>
       <!-- <q-splitter
            v-model="splitterModel"
        >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-tabs"
        >
        <div class="row">
            <div class="col">
                <div class="container">
             <q-tab name="personal-info" label="Información personal" class="font-tabs-item" />
        </div>
            </div>
        </div>
        
         
          <q-tab name="security" label="Seguridad" class="font-tabs-item"/>
          <q-tab name="addresses" label="Direcciones" class="font-tabs-item"/>
          <q-tab name="order-status" label="Estatus de Ordenes" class="font-tabs-item"/>
          <q-tab name="shopping-history" label="Historial de Compras" class="font-tabs-item"/>
        </q-tabs>
        <br><br><br>
        <div class="row">
            <div class="col">
                <div class="container text-center">
                    <a href="" class="enlace-logout-session">Cerrar sesión</a>
                </div>
            </div>
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="personal-info" class="q-px-xl">
            <q-card class="my-card card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-personal-info">Información personal</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                 <q-item class="q-pt-md">
                    <q-item-section avatar class="q-px-lg">
                        <q-avatar size="84px">
                            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <div class="row">
                            <div class="col-4">
                                <q-btn label="Cargar foto" class="btn-photo"></q-btn>
                            </div>
                        </div>
                    <q-item-label caption class="label-photo">
                        Lorem ipsum dolor sit amet, consetetur
                    </q-item-label>
                    </q-item-section>
                </q-item>
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nombre(s) y Apellido(s)*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Correo Electrónico*" class="font-input"></q-input>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Teléfono móvil*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Teléfono casa (opcional)" class="font-input"></q-input>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="security">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-seguridad">Seguridad</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <q-item-label class="label-password">Nueva contraseña</q-item-label>
                            <div class="row">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nueva contraseña" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar contraseña" class="font-input"></q-input>
                                </div>
                            </div>
                            <q-item-label class="q-pt-xl label-update-email">Actualizar correo electrónico</q-item-label>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nuevo correo" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar correo" class="font-input"></q-input>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>

           <q-tab-panel name="addresses">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Dirección de entrega</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <div class="row">
                                <div class="col-12 col-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Ciudad" class="font-select"/>
                                    <q-item-label class="label-ciudad q-pt-sm">Solo está disponible en las ciudades, solo San Félix y Puerto Ordaz.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Zona" class="font-select"/>
                                    <q-item-label class="label-zona q-pt-sm">Solo está disponible en las zonas aquí listadas.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md">
                                    <q-input label="Dirección de entrega" class="font-input"></q-input>
                                    <q-item-label class="label-direccion q-pt-sm">Por favor, escriba la dirección en la que desea recibir su compra, con el mayor detalle posible. Incluya un punto de referencia.</q-item-label>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="order-status">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Estatus de ordenes</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-markup-table class="q-pt-lg">
                    <thead class="bg-cielo">
                        <tr>
                            <th class="text-center font-title-table">#Nro Orden</th>
                            <th class="text-center font-title-table">Fecha</th>
                            <th class="text-center font-title-table">Monto</th>
                            <th class="text-center font-title-table">Estado de la orden</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="amarillo badge-status">
                                Por validar
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="primary badge-status">
                                Por Entregar
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="positive badge-status">
                                Procesado
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                           <q-badge color="redsito badge-status">
                                Cancelado
                            </q-badge>
                        </td>
                    </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="shopping-history">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Historial de compras</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-markup-table class="q-pt-lg">
                    <thead class="bg-cielo">
                        <tr>
                            <th class="text-center font-title-table">#Nro Orden</th>
                            <th class="text-center font-title-table">Fecha</th>
                            <th class="text-center font-title-table">Método de pago</th>
                            <th class="text-center font-title-table">Monto</th>
                            <th class="text-center font-title-table">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter> -->
    <q-layout view="hHh Lpr lff" container style="min-height: 550px" class="rounded-borders">
        <q-header class="bg-white">
             <q-toolbar>
              <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="bluesito" />
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
             <q-tabs
          v-model="tab"
          vertical
          class="text-tabs"
        >
        <div class="row">
            <div class="col">
                <div class="container">
             <q-tab name="personal-info" label="Información personal" class="font-tabs-item" />
        </div>
            </div>
        </div>
        
         
          <q-tab name="security" label="Seguridad" class="font-tabs-item"/>
          <q-tab name="addresses" label="Direcciones" class="font-tabs-item"/>
          <q-tab name="order-status" label="Estatus de Ordenes" class="font-tabs-item"/>
          <q-tab name="shopping-history" label="Historial de Compras" class="font-tabs-item"/>
        </q-tabs>
        </q-drawer>
        <q-page-container>
            <div>
                <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
                >
                 <q-tab-panel name="personal-info">
            <q-card class="my-card card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-personal-info">Información personal</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                 <q-item class="q-pt-md">
                    <q-item-section avatar class="q-px-lg">
                        <q-avatar size="84px">
                            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <div class="row">
                            <div class="col-4">
                                <q-btn label="Cargar foto" class="btn-photo"></q-btn>
                            </div>
                        </div>
                    <q-item-label caption class="label-photo">
                        Lorem ipsum dolor sit amet, consetetur
                    </q-item-label>
                    </q-item-section>
                </q-item>
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nombre(s) y Apellido(s)*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Correo Electrónico*" class="font-input"></q-input>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Teléfono móvil*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Teléfono casa (opcional)" class="font-input"></q-input>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>
          <q-tab-panel name="security">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-seguridad">Seguridad</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <q-item-label class="label-password">Nueva contraseña</q-item-label>
                            <div class="row">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nueva contraseña" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar contraseña" class="font-input"></q-input>
                                </div>
                            </div>
                            <q-item-label class="q-pt-xl label-update-email">Actualizar correo electrónico</q-item-label>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Nuevo correo" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar correo" class="font-input"></q-input>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>

           <q-tab-panel name="addresses">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Dirección de entrega</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <div class="row">
                                <div class="col-12 col-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Ciudad" class="font-select"/>
                                    <q-item-label class="label-ciudad q-pt-sm">Solo está disponible en las ciudades, solo San Félix y Puerto Ordaz.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Zona" class="font-select"/>
                                    <q-item-label class="label-zona q-pt-sm">Solo está disponible en las zonas aquí listadas.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md">
                                    <q-input label="Dirección de entrega" class="font-input"></q-input>
                                    <q-item-label class="label-direccion q-pt-sm">Por favor, escriba la dirección en la que desea recibir su compra, con el mayor detalle posible. Incluya un punto de referencia.</q-item-label>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar cambios" color="bluesito" class="btn-register q-mb-md" size="md"></q-btn>
                </q-card-actions>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="order-status">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Estatus de ordenes</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-markup-table class="q-pt-lg">
                    <thead class="bg-cielo">
                        <tr>
                            <th class="text-center font-title-table">#Nro Orden</th>
                            <th class="text-center font-title-table">Fecha</th>
                            <th class="text-center font-title-table">Monto</th>
                            <th class="text-center font-title-table">Estado de la orden</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="amarillo badge-status">
                                Por validar
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="primary badge-status">
                                Por Entregar
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                            <q-badge color="positive badge-status">
                                Procesado
                            </q-badge>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">
                           <q-badge color="redsito badge-status">
                                Cancelado
                            </q-badge>
                        </td>
                    </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="shopping-history">
           <q-card class="my-card">
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col text-center">
                                <q-item-label class="title-addresses">Historial de compras</q-item-label>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                 <q-separator />
                <q-markup-table class="q-pt-lg">
                    <thead class="bg-cielo">
                        <tr>
                            <th class="text-center font-title-table">#Nro Orden</th>
                            <th class="text-center font-title-table">Fecha</th>
                            <th class="text-center font-title-table">Método de pago</th>
                            <th class="text-center font-title-table">Monto</th>
                            <th class="text-center font-title-table">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    <tr>
                        <td class="text-center font-items-table">1123234</td>
                        <td class="text-center font-items-table">00/00/0000</td>
                        <td class="text-center font-items-table">Banco de Venezuela</td>
                        <td class="text-center font-items-table">000.000.00</td>
                        <td class="text-center">Estado</td>
                    </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
          </q-tab-panel>
                </q-tab-panels>
            </div>
        </q-page-container>
    </q-layout>
        <footer-component></footer-component>
    </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
export default defineComponent({
    components: {FooterComponent},
    data(){
        return{
            tab: 'personal-info',
            splitterModel: 20,
            model: null,
            options: [
                'Puerto Ordaz', 'San Felix'
            ],
             drawer: false

        }
    }
})
</script>

<style>
.title-personal-info{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
}
.title-seguridad{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
}
.title-addresses{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
}
.font-tabs-item{
    font-family:'Poppins-SemiBold';
    font-size: 14px
}
.font-input{
    font-family: 'Poppins-Regular';
    font-size: 12px
}
.font-select{
    font-family: 'Poppins-Regular';
    font-size: 12px
}
.label-password{
    font-family:'Poppins-Medium';
    font-size: 16px;
    color: #3D3D3D
}
.label-update-email{
    font-family:'Poppins-Medium';
    font-size: 16px;
    color: #3D3D3D
}
.btn-register{
    font-family:'Poppins-Medium';
    font-size: 12px;
    border-radius: 9px;
}
.label-ciudad{
    font-family:'Poppins-Medium';
    font-size: 8px;
    color: #3D3D3D
}
.label-zona{
    font-family:'Poppins-Medium';
    font-size: 8px;
    color: #3D3D3D
}
.label-direccion{
    font-family:'Poppins-Medium';
    font-size: 8px;
    color: #3D3D3D
}
.font-title-table{
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
}
.font-items-table{
    font-family: 'Poppins-Regular';
    font-size: 14px;
}
.btn-status{
    border-radius: 6px;
    font-family: 'Poppins-SemiBold';
    font-size: 12px
}

.badge-status{
     font-family: 'Poppins-SemiBold';
    font-size: 12px;
    height: 25px;
}
.enlace-logout-session{
    font-family:'Poppins-Medium';
    font-size: 14px;
    color: #B31E1A;
    text-decoration: none;
}
</style>