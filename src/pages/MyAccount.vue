<template>
  <q-page>
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
            <!-- <q-tab name="security" label="Seguridad" class="font-tabs-item"/> -->
            <!-- <q-tab name="addresses" label="Direcciones" class="font-tabs-item"/> -->
            <q-tab name="order-status" label="Estatus de Ordenes" class="font-tabs-item"/>
            <!-- <q-tab name="shopping-history" label="Historial de Compras" class="font-tabs-item"/> -->
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
          <!-- <q-tab-panel name="security">
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
          </q-tab-panel> -->

           <!-- <q-tab-panel name="addresses">
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
          </q-tab-panel> -->
            <q-tab-panel name="order-status">
                <q-card class="my-card q-px-md">
                    <q-item>
                        <q-item-section>
                            <div class="row items-center">
                                <div class="col text-center">
                                    <q-item-label class="title-addresses">Estatus de Ordenes</q-item-label>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-card-section>
                        <div class="q-pa-md">
                            <q-tabs
                                v-model="tab_purchases"
                                align="justify"
                                narrow-indicator
                                class="q-mb-lg"
                            >
                            <q-tab class="text-red font-tab-table" name="validate" label="Por validar">
                                <div v-if="toValidate.length > 0">
                                    <q-badge rounded color="red" :label="toValidate.length" floating class="q-mb-xl" />
                                </div>
                            </q-tab>
                            <q-tab class="text-indigo-10 font-tab-table" name="deliver" label="Por entregar">
                                <div v-if="toDeliver.length > 0">
                                    <q-badge rounded color="indigo-10" :label="toDeliver.length" floating />
                                </div>
                            </q-tab>
                            <q-tab class="text-green font-tab-table" name="processed" label="Procesado" />
                            </q-tabs>
                            <div class="q-gutter-y-sm">
                                <q-tab-panels
                                    v-model="tab_purchases"
                                    animated
                                    transition-prev="jump-up"
                                    transition-next="jump-down"
                                    class="text-center"
                                    keep-alive
                                >
                                <q-tab-panel name="validate">
                                    <q-table
                                        title="Por Validar"
                                        :data="toValidate"
                                        :columns="columns1"
                                        row-key="id"
                                        :loading="!isValidateFetched"
                                        class="font-body-table"
                                    >
                                    <template v-slot:header="props">
                                        <q-tr :props="props">
                                            <q-th
                                                v-for="col in props.cols"
                                                :key="col.name"
                                                :props="props"
                                                class="font-header-table"
                                                >
                                                {{ col.label }}
                                            </q-th>
                                        </q-tr>
                                    </template>
                                    <template v-slot:body="props" >
                                        <q-tr :props="props" @click="GoDetail(props.row)">   
                                            <q-td
                                                v-for="col in props.cols"
                                                :key="col.name"
                                                :props="props"
                                                            
                                            >
                                                {{ col.value }}
                                            </q-td>
                                        </q-tr>
                                        <q-tr v-show="props.expand" :props="props">
                                            <q-td colspan="100%">
                                                <div class="column items-end">
                                                    <div class="row">
                                                        <q-btn flat round color="red-10" icon="delete" class="q-mr-sm float-right" @click="confirmDelete(props.row)" />
                                                        <q-btn color="indigo-10" label="Validar" class="q-mr-xs q-pa-xs float-right" @click="changeSaleStatus(props.row, 'POR ENTREGAR')" />
                                                    </div>
                                                </div>
                                            </q-td>
                                        </q-tr>
                                    </template>
                                    </q-table>
                                </q-tab-panel>
                                <q-tab-panel name="deliver">
                                    <q-table
                                        title="Por Entregar"
                                        :data="toDeliver"
                                        :columns="columns2"
                                        row-key="id"
                                        :loading="!isDeliverFetched"
                                        class="font-body-table"
                                    >
                                        <template v-slot:header="props">
                                            <q-tr :props="props">
                                                <q-th
                                                    v-for="col in props.cols"
                                                    :key="col.name"
                                                    :props="props"
                                                    class="font-header-table"
                                                >
                                                    {{ col.label }}
                                                </q-th>
                                            </q-tr>
                                        </template>
                                        <template v-slot:body="props" >
                                            <q-tr :props="props" @click="GoDetail(props.row)">
                                                <q-td
                                                    v-for="col in props.cols"
                                                    :key="col.name"
                                                    :props="props"
                                                >
                                                    {{ col.value }}
                                                </q-td>
                                            </q-tr>
                                            <q-tr v-show="props.expand" :props="props">
                                                <q-td colspan="100%">
                                                    <div class="column items-end">
                                                        <div class="row">
                                                            <q-btn color="indigo-10" label="Regresar" class="q-mr-xs q-pa-xs float-right" @click="changeSaleStatus(props.row, 'POR VALIDAR')" />
                                                            <q-btn color="green" label="Procesar" class="float-right" @click="changeSaleStatus(props.row, 'PROCESADA')" />
                                                        </div>
                                                    </div>
                                                </q-td>
                                            </q-tr>
                                        </template>
                                    </q-table>
                                </q-tab-panel>
                                <q-tab-panel name="processed">
                                    <q-table
                                        title="Procesado"
                                        :data="processed"
                                        :columns="columns3"
                                        row-key="id"
                                        :loading="!isProcessedFetched"
                                        class="font-body-table"
                                    >
                                        <template v-slot:header="props">
                                            <q-tr :props="props">
                                                <q-th
                                                    v-for="col in props.cols"
                                                    :key="col.name"
                                                    :props="props"
                                                    class="font-header-table"
                                                >
                                                    {{ col.label }}
                                                </q-th>
                                            </q-tr>
                                        </template>
                                        <template v-slot:body="props"  >
                                            <q-tr :props="props" @click="GoDetail(props.row)">
                                                <q-td
                                                    v-for="col in props.cols"
                                                    :key="col.name"
                                                    :props="props"
                                                >
                                                    {{ col.value }}
                                                </q-td>
                                            </q-tr>
                                            <q-tr v-show="props.expand" :props="props">
                                                <q-td colspan="100%">
                                                    <div class="column items-end">
                                                        <div class="row">
                                                            <q-btn color="indigo-10" label="REGRESAR" class="float-right" @click="changeSaleStatus(props.row, 'POR ENTREGAR')" />
                                                        </div>
                                                    </div>
                                                </q-td>
                                            </q-tr>
                                        </template>
                                    </q-table>
                                </q-tab-panel>
                                </q-tab-panels>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
          <!-- <q-tab-panel name="shopping-history">
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
          </q-tab-panel> -->
        </q-tab-panels>
        <q-dialog persistent v-model="PurchaseEdit" >
            <q-card class="my-card" style="max-width:100%; width:440px">
                <q-toolbar class="text-bluesito">
                <q-toolbar-title class="title-session">
                    Agregar Referencia de Pago 
                </q-toolbar-title>
                <q-btn flat icon="close" round v-close-popup />
                </q-toolbar>
                <q-separator />
                <q-item class="q-pt-md">
                <q-item-section>
                    <div class="row q-pt-md">
                        <div class="col-12 col-md q-px-md">
                            <q-input label="Numero de Referencia" v-model="referencecode" class="font-input"></q-input>
                        </div>
                    </div>
                </q-item-section>
                </q-item>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar" color="bluesito" class="btn-init-session q-mb-md" size="sm" @click="updatePurchase()"></q-btn>
                </q-card-actions>
                <q-separator />
            </q-card>
        </q-dialog>
        <q-dialog persistent v-model="ShowMsg" >
            <q-card class="my-card" style="max-width:100%; width:440px">
                <q-toolbar class="text-bluesito">
                    <q-toolbar-title class="title-session">
                        Tipo de Pago en efectivo 
                    </q-toolbar-title>
                    <q-btn flat icon="close" round v-close-popup />
                </q-toolbar>
                <q-separator />
                <div class="container text-center q-pa-md">
                    <q-item-label class="label-register">Seleccione pagar en efectivo, Confirmar tu pedido, te contactaremos.</q-item-label>
                </div>
                <q-card-actions vertical align="center">
                    <q-btn label="Guardar" color="bluesito" class="btn-init-session q-mb-md" size="sm" @click="CloseMsg()"></q-btn>
                </q-card-actions>
                <q-separator />
            </q-card>
        </q-dialog>
        </div>
        </q-page-container>
    </q-layout>
    <footer-component></footer-component>
  </q-page>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import PurchaseService   from 'src/services/purchases/purchase.services'
import FooterComponent from 'src/components/FooterComponent.vue'
export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      tab: 'personal-info',
      tab_purchases: 'validate',
      text: '',
      PurchaseEdit: false,
      ShowMsg : false,
      PurchaseId : '',
      referencecode : '',
      splitterModel: 20,
      model: null,
      options: ['Puerto Ordaz', 'San Felix'],
      drawer: false,
      isValidateFetched: false,
      isDeliverFetched: false,
      isProcessedFetched: false,
      toValidate: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
        reference: '',
      }],
      toDeliver: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
        reference: '',
      }],
      processed: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
        reference: '',
      }], 
      columns1: [
        {
          name: 'id',
          required: true,
          label: 'Nro Orden',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          align: 'center',
          headerClasses: 'bg-blue-1',
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'coin', label: 'Moneda', field: 'coin', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'amount', label: 'Monto', field: 'amount', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true, align: 'center', headerClasses: 'bg-blue-1',},
      ],
      columns2: [
        {
          name: 'id',
          required: true,
          label:  'Nro Orden',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          align: 'center',
          headerClasses: 'bg-blue-1',
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'coin', label: 'Moneda', field: 'coin', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'amount', label: 'Monto', field: 'amount', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
      ],
      columns3: [
        {
          name: 'id',
          required: true,
          label:  'Nro Orden',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          align: 'center',
          headerClasses: 'bg-blue-1',
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`, align: 'center', headerClasses: 'bg-blue-1',},
        { name: 'coin', label: 'Moneda', field: 'coin', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'amount', label: 'Monto', field: 'amount', align: 'center', headerClasses: 'bg-blue-1', },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
      ]
    }
  },
  mounted (){
    const vm = this;
    vm.onRequest();
  },
    methods: {
    onRequest(){
      this.toValidate.pop();
      this.toDeliver.pop();
      this.processed.pop();
      // busca de ventas por validar
      PurchaseService.getSalesByStatus(1).subscribe({
        next: data => {
          console.log(data);
          let bank_name = ''
          
          for (let i = 0; i < data.length; i++){
            if (data[i].bank == null){
               data[i].bank = {
                 'name' : "N/A"
               }
            }
            this.reference = data[i].reference
        
            this.toValidate.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank , coin: data[i].coin, amount: data[i].amount, status: data[i].status, reference: data[i].reference});
          };
        },
        complete: () => {
          console.log("[completed]")
          this.isValidateFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
        }
      })
    },

    GoDetail(purchase, value){
        this.$router.push({ path: `/purchases/detail/${purchase.id}/` })
    },

    showNotif(message , color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
     },
  },
    watch: {
    tab_purchases: function(){
      if (this.tab_purchases === 'deliver' && !this.isDeliverFetched) {
        console.log('current tab: ' + this.tab + '\nwas it fetched?: ' + this.isDeliverFetched)
        PurchaseService.getSalesByStatus(2).subscribe({
          next: data => {
            console.log(data);
            
                for (let i = 0; i < data.length; i++){
                  if (data[i].bank == null){
                     data[i].bank = {
                        'name' : "N/A"
                      }
                    }
                  this.toDeliver.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank, coin: data[i].coin, amount: data[i].amount, status: data[i].status, reference: data[i].reference});
                }
            
          },
          complete: () => {
            this.isDeliverFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
          },
          error: () => {
             alert("vacia")
          }
        })
      }else if (this.tab_purchases === 'processed' && !this.isProcessedFetched){
        console.log('current tab: ' + this.tab + '\nwas it fetched?: ' + this.isProcessedFetched)
        // busqueda de ventas procesadas
        PurchaseService.getSalesByStatus(3).subscribe({
          next: data => {
            console.log(data);
            for (let i = 0; i < data.length; i++){
              if (data[i].bank == null){
               data[i].bank = {
                 'name' : "N/A"
               }
            }
              this.processed.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank, coin: data[i].coin, amount: data[i].amount, status: data[i].status, reference: data[i].reference});
              // console.log("toValidate: "+this.toValidate+"\ntoDeliver: "+this.toDeliver+"\nprocessed: "+this.processed);
            };
          },
          complete: () => {          
            this.isProcessedFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
          }
        })
      }
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
    .font-tab-table{
        font-family: 'Poppins-Medium';
    }
    .font-header-table{
        font-family: 'Poppins-SemiBold';
    }
    .font-body-table{
        font-family: 'Poppins-Regular';
    }
</style>
