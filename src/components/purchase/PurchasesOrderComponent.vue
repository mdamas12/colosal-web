<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row full-width q-my-xl">
					<div class="col">
						<q-card flat bordered class="q-mb-sm q-pa-sm">
							<q-card-header>
								<div class="row tittle-text">
									Ordenes de Compra
								</div>
							</q-card-header>
						</q-card>		
					</div>
				</div>
        <div class="q-pa-md">
         
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab class="text-red" name="validate" label="Por validar">
              <div v-if="toValidate.length > 0">
                <q-badge rounded color="red" :label="toValidate.length" floating class="q-mb-xl" />
              </div>
            </q-tab>
            <q-tab class="text-indigo-10" name="deliver" label="Por entregar">
              <div v-if="toDeliver.length > 0">
                
                <q-badge rounded color="indigo-10" :label="toDeliver.length" floating />
              </div>
            </q-tab>
            <q-tab class="text-green" name="processed" label="Procesado" />
          </q-tabs>

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
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
                >


                  <template v-slot:body="props" >
                    <q-tr :props="props" @click="GoDetail(props.row)">
                       
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <q-btn flat round color="red-10" icon="delete" class="q-mr-sm float-right" @click="confirmDelete(props.row)" />
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
                            <q-btn color="indigo-10" label="Validar" class="q-mr-xs q-pa-xs float-right" @click="changeSaleStatus(props.row, 'POR ENTREGAR')" />
                            <!-- <q-btn color="green" label="Procesar" class="float-right" @click="changeSaleStatus(props.row, 'PROCESADA')" /> -->
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
                >


                  <template v-slot:body="props" >
                    <q-tr :props="props" @click="GoDetail(props.row)">
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
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
                >

                  <template v-slot:body="props"  >
                    <q-tr :props="props" @click="GoDetail(props.row)">
               
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
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
      </div>


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
          <q-item-label class="label-register">Selecciones paga en efectivo, Confirmar tu pedido, te contactaremos.</q-item-label>
         
        </div>
        <q-card-actions vertical align="center">
            <q-btn label="Guardar" color="bluesito" class="btn-init-session q-mb-md" size="sm" @click="CloseMsg()"></q-btn>
        </q-card-actions>
         <q-separator />
          </q-card>
        </q-dialog>
   


  </q-page>
</template>

<script>
import Vue from 'vue'
import { Loading } from "quasar";
import PurchaseService   from "../../services/purchases/purchase.services";

export default Vue.extend({
  data () {
    return {
      PurchaseEdit: false,
      ShowMsg : false,
      PurchaseId : '',
      referencecode : '',
      tab: 'validate',
      text: '',
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
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true },
      ],
      columns2: [
        {
          name: 'id',
          required: true,
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true },
      ],
      columns3: [
        {
          name: 'id',
          required: true,
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true },
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
            console.log("referencia pago", this.reference)
        
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
    tab: function(){
      if (this.tab === 'deliver' && !this.isDeliverFetched) {
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
      }else if (this.tab === 'processed' && !this.isProcessedFetched){
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

  .tittle-text{
    font-family: 'Poppins-SemiBold';
			font-size: 20px;
      color: rgb(3, 29, 177)
  }
</style>