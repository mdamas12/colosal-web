<template>
	<div class="container-shopping-cart-title ">
		<div class="row">
		</div>
		<div class="row justify-evenly items-start content-center">
			<div class="col-8 q-mx-md" >
				<div class="row full-width q-my-xl">
					<div class="col">
						<q-card flat bordered class="q-mb-sm q-pa-lg">
							<q-card-header>
								<div class="row title-text">
									Detalle De Compra
								</div>
							</q-card-header>
						</q-card>		
					</div>
				</div>
            <div class="col-8" >                
                <q-card flat bordered class="my-card q-mb-md">
                   <div class="row items-center">
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Referencia
								</div>
                                <div class="col text-desc">
									{{purchase.id}}
								</div>
							</q-card-section>
						</div>
					</div>
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									cliente
								</div>
                                <div class="col text-desc">
								  {{purchase.customer.first_name}}
								</div>
							</q-card-section>
						</div>
					</div>
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Fecha
								</div>
                                <div class="col text-desc">
								    {{purchase.created}}
								</div>
							</q-card-section>
						</div>
					</div>
                    </div>
                    <div class="row items-center">
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Forma de Pago
								</div>
                                <div class="col text-desc">
									 {{purchase.payment_type}}
								</div>
							</q-card-section>
						</div>
					</div>
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Banco
								</div>
                                <div class="col text-desc">
									{{purchase.bank.name}}
								</div>
							</q-card-section>
						</div>
					</div>
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Moneda
								</div>
                                <div class="col text-desc">
									{{purchase.coin}}
								</div>
							</q-card-section>
						</div>
					</div>
                    </div>
                    <div class="row items-center">
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Monto
								</div>
                                <div class="col text-desc">
									{{purchase.coin}} {{purchase.amount}}
								</div>
							</q-card-section>
						</div>
					</div>
                    <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Referencia
								</div>
                                <div class="col text-desc">
									{{purchase.reference}} 
								</div>
							</q-card-section>
						</div>
					</div>
                     <div class="col-4">
						<div class="column items-start">
							<q-card-section>
								<div class="col text-name-product">
									Status
								</div>
                                <div class="col text-desc">
									{{purchase.status}} 
								</div>
							</q-card-section>
						</div>
					</div>
                </div>
			     </q-card>
			   </div>
				
                    
				<div class="row q-mx-xs">
				 
					<div class="col-12" v-for="item in purchase.detail_sale" :key="item.id">
						<q-card flat bordered class="my-card q-mb-md">
							<div class="row items-center">
								<div class="col-1">

									<q-img :src="'http://minimarketcolosal.com/api' + item.product.image" class="img-product"></q-img>
								</div>
							
								<div class="col-3">
									<div class="column items-start">
										<q-card-section>
											<div class="col text-name-product">
												{{item.product.name}}
											</div>
											<div class="col text-description-product">
												{{item.product.description}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-3">
									<q-card-section>
										<div class="col text-description-product">
											Cantidad
										</div>
								       	<div class="col text-description-product">
											{{item.quantity_sold}}
										</div>
									</q-card-section>
								</div>
								<div class="col-3">
									<div class="column items-start">
										<q-card-section>
											<div class="col text-description-product">
												Precio
											</div>
											<div class="col text-description-product">
												{{item.product.coin}} {{item.product.price}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-2">
									<div class="column items-start">
										<q-card-section>
											<div class="col text-name-product">
												SUBTOTAL
											</div>
											<div class="col text-name-product">
												{{item.product.coin}} {{item.amount}}
											</div>
										</q-card-section>
									</div>
								</div>
							</div>
						</q-card>
					</div>
				</div>
			</div>
			<div class="col-3" v-if="reference_band==true">
				<q-card flat bordered class="my-card q-mx-md q-mt-xl">
		          	<q-card-section>
						<div class="column items-center">
							<div class="row">
								<div class="col">
									Agregar Referencia de pago
								</div>
							</div>
						</div>
					</q-card-section>
                    <q-separator/>
                    <q-item-section>
                        <div class="row q-pt-md">
                            <div class="col-12 col-md q-px-md">
                                <q-input label="Escribe Numero de Referencia" v-model="referencecode" class="font-input"></q-input>
                                </div>
                        </div>
                    </q-item-section>
		
					<q-card-section>
						<div class="column items-center">
							<div class="row">
								<div class="col">
									<q-btn color="blue-9" text-color="white"  label="Guardar" @click="updatePurchase()"></q-btn>
								</div>
							</div>
						</div>
					</q-card-section>
				</q-card>
			</div>
		</div>

		
	</div>
</template>
 
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ShoppingcartService   from "../../services/home/shoppingcart/shoppingcart.service";
import PurchaseService   from "../../services/purchases/purchase.services";

export default defineComponent ( { name: 'ShoppingCartComponent',
	data (){
		var purchase : any = []
		return {
			cantidad: 0,
			products: [],
			subtotal : 0,
            purchase : purchase,
            referencecode : '',
            reference_band : true
		}
	},
	methods: {

        getPurchaseDetail(){
            let purchase_id = this.$route.params.id
            let subscription = PurchaseService.GetPurchaseDetail(purchase_id).subscribe( {
			next: (data:any) => {
				this.purchase = data 
                if (this.purchase.bank == null){
                   this.purchase.bank = {
                     'name' : "N/A"
                  }
                }
                if (this.purchase.payment_type == "EFECTIVO"){
                    this.purchase.reference = "N/A"
                }
                if ((this.purchase.reference != "") || (this.purchase.payment_type == "EFECTIVO")) {
                   this.reference_band = false
                }
            
                console.log(this.purchase)	
			},
			complete: () => {}
			});
        },

        updatePurchase(){
            let purchase_id = this.$route.params.id
            let code = {
                'reference' : this.referencecode
            }
        
        PurchaseService.updateReference(purchase_id,code).subscribe({
            next: (data:any) => {
             this.getPurchaseDetail()
            },
            complete: () => {
            this.showNotif("Referencia Registrada con Exito", "green-8")
            },
            error: () => {
            this.showNotif("Error al Tratar de Guardar la Referencia", "red-7")
            }
        })
       },
      showNotif(message : string, color : string) {
        this.$q.notify({
            message: message,
            color: color,
            actions: [
            { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
            ]
        })
      },
	},
	 mounted () {
        const vm = this;
        vm.getPurchaseDetail()
    },
})
</script>

<style>
    .container-shopping-cart-title {
			background: #FAFAFA;
    }

		.text-name-product{
			font-family: 'Poppins-SemiBold';
			font-size: 16px;
		}

		.text-description-product{
				font-family: 'Poppins-Regular';
				font-size: 16px;
		}

		.title-text{
				font-family: 'Poppins-SemiBold';
				font-size: 32px;
		}
        .text-desc{
            color:#666;
            font-family: 'Poppins-SemiBold';
			font-size: 12px;

        }
</style>