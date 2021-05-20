<template>
  <q-page>
    <div class="container-purschases-order bg-azul-tenue">
       <q-breadcrumbs gutter="sm" class="q-px-md text-grey q-pt-md breadcrumbs-purchases-order bg-azul-tenue" active-color="grey" style="font-size: 15px">
                <q-breadcrumbs-el label="Volver a Home" icon="arrow_back" to="/" class="texto-breadcrumbs"/>
                <q-breadcrumbs-el label="Mis Compras" class="texto-breadcrumbs text-bluesito"/>
    	    </q-breadcrumbs>
      <div class="row">
         <div class="col-md-12 col-xs-12 q-pa-sm">
        <!-- <div class="row full-width q-my-xl text-center">
					<div class="col">
						<q-card flat bordered class="q-mb-sm q-pa-sm">
							<q-card-header>
								<div class="row title-addresses">
									Ordenes de Compra
								</div>
							</q-card-header>
						</q-card>		
					</div>
				</div> -->
        <div class="container text-center q-pa-md">
          <div class="row text-center">
            <div class="col-12 col-md text-center">
              <q-card class="q-pa-md">
                <q-card-header class="text-center">
								<div class="row title-addresses text-center">
								  Estatus de Ordenes 
								</div>
							</q-card-header>
              </q-card>
            </div>
          </div>
        </div>

        <div class="q-pa-md">
          <q-tabs
            v-model="tab"
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
              v-model="tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="text-center"
              keep-alive
            >
              <q-tab-panel name="validate" class="bg-azul-tenue">
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

              <q-tab-panel name="deliver" class="bg-azul-tenue">
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

              <q-tab-panel name="processed" class="bg-azul-tenue">
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
      </div>
      </div>
    </div>
     
       <!-- <q-card class="my-card q-px-md">
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
                </q-card> -->

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
      // tab_purchases: 'validate',
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
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
      ],
      columns2: [
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
        { name: 'reference', label: 'Referencia Pago', field: 'reference', sortable: true, align: 'center', headerClasses: 'bg-blue-1', },
      ],
      columns3: [
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
     goToWz(){
      window.location.href = "https://wa.me/584128770825?text=Hola%20buen%20dia."
    }
 
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

  .breadcrumbs-purchases-order{
    font-family: 'Poppins-Regular';
    font-size: 12px;
  }
  .tittle-text{
    font-family: 'Poppins-SemiBold';
			font-size: 20px;
      color: rgb(3, 29, 177)
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
    .title-addresses{
        font-family: 'Poppins-SemiBold';
        font-size: 20px;
        color: #3D3D3D
    }

    @media(min-width:767px){
      .container-purschases-order{
        padding-left: 10%;
        padding-right: 10%;
      }
    }
</style>