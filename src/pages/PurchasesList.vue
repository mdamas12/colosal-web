<template>
  <q-page>
    <div class="q-pa-md">
      <q-card>
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
        <q-table
          :data="listPurchases"
          :columns="columns"
          row-key="id"
          :loading="!isFetched"
        >
          <template v-slot:body-cell-status="props">
            <q-td row-key="status" :props="props">
              <div>
                <q-badge :class="(props.row.status == 'POR VALIDAR') ? 'bg-red' : (props.row.status == 'POR ENTREGAR') ? 'bg-blue' : 'bg-green'" :label="props.row.status" />
              </div>
            </q-td>
          </template>
        </q-table>
      </q-card> 
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import PurchasesService from '../services/home/purchases/purchase.service'
export default Vue.extend({
  data() {
    return {
      isFetched: false,
      listPurchases: [],
      columns: [
        {
          name: 'id',
          required: true,
          label: "Nro. Orden",
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          headerClasses: 'bg-blue-1',
          align: 'center'
        },
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`, headerClasses: 'bg-blue-1', align: 'center'},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true, headerClasses: 'bg-blue-1', align: 'center' },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`, headerClasses: 'bg-blue-1', align: 'center'},
        { name: 'amount', label: 'Monto', field: 'amount', headerClasses: 'bg-blue-1', align: 'center' },
        { name: 'coin', label: 'Moneda', field: 'coin', headerClasses: 'bg-blue-1', align: 'center' },
        { name: 'status', label: 'Estado', field: 'status', headerClasses: 'bg-blue-1', align: 'center' },
      ]
    }
  },
  mounted() {
    const vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      PurchasesService.getPurchasesList().subscribe({
        next: data => {
          console.log(data.results);
          for (let i = 0; i < data.results.length; i++){
            this.listPurchases.push({id: data.results[i].id, created: data.results[i].created.substring(0,10), payment_type: data.results[i].payment_type, bank: data.results[i].bank, amount: data.results[i].amount, coin: data.results[i].coin, status: data.results[i].status})
          }
        },
        complete: () => {
          console.log("[completed]")
          this.isFetched = true
        }
      })
    }
  }  
})
</script>
<style>
  .title-addresses{
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: #3D3D3D
  }
</style>