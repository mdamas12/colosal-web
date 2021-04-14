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
									Finaliza tu Compra
								</div>
							</q-card-header>
						</q-card>		
					</div>
				</div>
               <div class="row full-width q-my-xl">
					<div class="col">
						<q-card flat bordered class="q-mb-sm q-pa-lg">
							<q-card-header>
								<div class="row title-text-principal">
									Selecciona un metodo de pago:
								</div>
							</q-card-header>
                            <q-radio v-model="Tpago" val="TRANSFERENCIA $" unchecked-icon="visibility_off" checked-icon="visibility" label="Transferencia $" class="font-checkbox"  />
                            <q-radio v-model="Tpago" val="TRANSFERENCIA BS" label="Transferencia Bs" class="font-checkbox"  />
                            <q-radio v-model="Tpago" val="ZELLE" label="Zelle" class="font-checkbox"  />
                            <q-radio v-model="Tpago" val="PAGO MOVIL" label="Pago Movil" class="font-checkbox"  />
                            <q-radio v-model="Tpago" val="EFECTIVO" label="Efectivo" class="font-checkbox"  />
                            <div class="row"> 
                                <div class="col-6" v-for="item in banks" :key="item.id">   
                                    <q-card-section class="banks">
                                        <div class="col desc">
                                            <span class="tittle">Banco:</span>  <strong> {{item.bank.name}} </strong>
                                        </div>
                                        <div class="col desc">
                                            <span class="tittle">Titular:</span> {{item.bank.account_owner}} 
                                        </div>
                                        <div class="col desc">
                                           <span class="tittle">Identificacion:</span>  {{item.bank.owner_id}} 
                                        </div>
                                        <div class="col desc">
                                           <span class="tittle">Cuenta N:</span>  {{item.bank.account_number}} 
                                        </div>
                                        <div class="col desc">
                                            <span class="tittle">Telefono:</span> {{item.bank.phone}} 
                                        </div>
                                        <div class="col desc">
                                            <span class="tittle">Email:</span> {{item.bank.email}} 
                                        </div>
                                        <div class="col-1">
                                            <q-btn  color="green-7" text-color="white"  label="Seleccionar" size="sm"  @click="Selectbank(item.id)"/>
                                        </div>
                                    </q-card-section>
                                </div>
                            </div>
                        </q-card>	
                       
					</div>
				</div>
				
				<div class="row q-mx-xs">
				 
					<div class="col-12" >
						<q-card flat bordered class="my-card q-mb-md" >
                            <q-card-header>
								<div class="row title-text-principal">
								   Verifica los productos seleccionados:	
								</div>
							</q-card-header>
							<div class="row items-center separador" v-for="shoppingcart in products" :key="shoppingcart.id">
								<div class="col-1">

									<q-img :src="'http://localhost:8000' + shoppingcart.product.image" class="img-product"></q-img>
								</div>
							
								<div class="col-3">
									<div class="column items-start">
										<q-card-section>
											<div class="col text-name-product">
												{{shoppingcart.product.name}}
											</div>
											<div class="col text-description-product">
												{{shoppingcart.product.description}}
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
										<strong>{{shoppingcart.quantity}} </strong>
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
												<strong> {{shoppingcart.product.coin}} {{shoppingcart.product.price}} </strong>
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
											<strong>{{shoppingcart.product.coin}} {{shoppingcart.amount}}</strong>
											</div>
										</q-card-section>
									</div>
								</div>
							</div>
						</q-card>
					</div>
				</div>
			</div>
			<div class="col-3">
				<q-card flat bordered class="my-card q-mx-md q-mt-xl">
					<q-card-section>
						<div class="row justify-between">
							<div class="col-2 self-start">
								Subtotal
							</div>
							<div class="col-2 wrap self-end">
								<strong>${{subtotal}}</strong>
							</div>
						</div>
					</q-card-section>

					<q-card-section>
						<div class="row justify-between">
							<div class="col-2 self-start">
								Descuentos
							</div>
							<div class="col-2 wrap self-end">
								<strong>$0.00</strong>
							</div>
						</div>
					</q-card-section>

					<q-separator/>

					<q-card-section>
						<div class="row justify-between">
							<div class="col-2 self-start">
								TOTAL
							</div>
							<div class="col-2 wrap self-end">
								<strong>${{subtotal}}</strong>
							</div>
						</div>
					</q-card-section>

					<q-separator/>

                <q-card-section  v-if="bankSelect.length != 0" v-show="bankSelectShow" >
                  <div class="col-2 self-start">
				   <strong>Banco Seleccionado:</strong>   
				  </div>
                  <div class="col desc">
                     <span class="tittle">Banco:</span> {{bankSelect.bank.name}} 
                 </div>
                 <div class="col desc">
                     <span class="tittle">Titular:</span> {{bankSelect.bank.account_owner}} 
                 </div>
                 <div class="col desc">
                    <span class="tittle">Identificacion:</span>  {{bankSelect.bank.owner_id}} 
                </div>
                <div class="col desc">
                 <span class="tittle">Cuenta N:</span>  {{bankSelect.bank.account_number}} 
                </div>
                <div class="col desc">
                    <span class="tittle">Telefono:</span> {{bankSelect.bank.phone}} 
                </div>
                <div class="col desc">
                    <span class="tittle">Email:</span> {{bankSelect.bank.email}} 
                </div>
             </q-card-section>
             <q-separator/>

					<q-card-section>
						<div class="column items-center">
							<div class="row">
								<div class="col">
									<q-btn color="red-10" text-color="white" icon-right="arrow_forward_ios" label="finalizar pedido" @click="PurchaseNext()" ></q-btn>
								</div>
							</div>
						</div>
					</q-card-section>
				</q-card>

			</div>
    
		</div>

    <q-dialog persistent v-model="showProcessPayment" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              Ultimo Paso!
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
         <div class="q-mt-xs" align="center">
            <span class="label-register text-center">Ya casi terminas tu compra,<br> indicanos el numero de transferencia.</span> 
         </div>
        <q-item class="q-pt-xs">
          <q-item-section>
              <div class="row q-pt-md">
                   <div class="col-12 col-md q-px-md">
                      <q-input label="N-Referencia" v-model="Referencia" class="font-input"></q-input>
                      </div>
               </div>
          </q-item-section>
         </q-item>
          <q-card-actions vertical align="center">
            <q-btn label="Procesar Compra" color="bluesito" class="btn-init-session q-mb-md" size="md" @click="PurchaseEnd()"></q-btn>
         </q-card-actions>
         <q-separator />
         <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                     <q-item-label class="label-register">Recuerda, si no tiene aun la referencia, puedes procesar la compra y buscarla en Ordenes de compra, tienes 24 Horas para validar el pago; de lo contrario la compra sera anulada. </q-item-label>

                  </div>
                </div>
              </div>
           </q-item-section>
           </q-item>
          </q-card>
        </q-dialog>



    <q-dialog persistent v-model="showProcessPaymentEfectivo" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              Ultimo Paso!
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                     <q-item-label class="label-register">Genial, Has seleccionado metodo de pago en efectivo, al procesar la compra nuestro agente se pondra en contacto contigo. </q-item-label>
                     
                  </div>
                </div>
              </div>
           </q-item-section>
          <q-card-actions vertical align="center">
            <q-btn label="Procesar Compra" color="bluesito" class="btn-init-session q-mb-md" size="md" @click="PurchaseEnd()"></q-btn>
         </q-card-actions>
         <q-separator />
 
           </q-item>
          </q-card>
        </q-dialog>


    <q-dialog persistent v-model="showSaleReady" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              Genial! Tu Compra ha Sido Procesada
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                     <q-item-label class="label-register">Recuerda, en tu perfil estan tus ordenes d compras </q-item-label>
                     
                  </div>
                </div>
              </div>
           </q-item-section>
          <q-card-actions vertical align="center">
            <q-btn label="Ok" color="bluesito" class="btn-init-session q-mb-md" size="md" @click="GotoHome()"></q-btn>
         </q-card-actions>
         <q-separator />
 
           </q-item>
          </q-card>
        </q-dialog>


      <q-dialog persistent v-model="showErrorFaltaStock" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              <h4 class="title-error">¡Oh no!</h4>  
              <q-item-label class="subtitle-error">Tenemos un problema: </q-item-label>
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                    
                    <q-item-label class="text-msg-error"> {{rep_stock}} </br></br></q-item-label>
                    <q-item-label class="text-msg-error"> Haz click en "ok" para volver al carrito y verificar el producto. </q-item-label>
                     
                  </div>
                </div>
              </div>
           </q-item-section>
        <q-separator />
           
          <q-card-actions vertical align="center">
            <q-btn label="OK" color="red-7" class="btn-init-session q-mb-md" size="sm" @click="GoToShoppingCart()"></q-btn>
         </q-card-actions>
         <q-separator />
 
           </q-item>
          </q-card>
        </q-dialog>
    
		
	</div>
    




</template>
 
<script lang="ts">

import { defineComponent } from '@vue/composition-api'
import ShoppingcartService   from "../../services/home/shoppingcart/shoppingcart.service";
import PurchaseService   from "../../services/purchases/purchase.services";

export default defineComponent ( { name: 'ShoppingCartComponent',
	data (){
		return {
			cantidad: 0,
			products: [],
      banks: [], 
      bankSelect : [],
			subtotal : 0,
      Tpago: '',
      rep_stock : '',
      bankSelectShow : false,
      showProcessPayment:false,
      showProcessPaymentEfectivo : false,
      showSaleReady : false,
      showErrorFaltaStock : false,
      Referencia : ''
		}
	},
	methods: {
		
		increaseProdQty(){
			this.cantidad++
		},
		decreaseProdQty(){
			if (this.cantidad > 0){
				this.cantidad--
			}
		},

		listCart(){
			let subscription = ShoppingcartService.getListCart().subscribe( {
			next: data => {
				this.products = data.results	
			},
			complete: () => {
				this.SubTotal()
			}
			});
        },
	  SubTotal(){
		 this.subtotal = 0
		 this.products.forEach(element => this.subtotal = Number(this.subtotal) + Number(element.amount));
		 
	  },
      viewMetodo(){
            if (this.Tpago === "EFECTIVO"){
                this.bankSelect = []
            }
            else{
                let subscription = PurchaseService.Getpayments(this.Tpago).subscribe( {
                next: data => {
                    this.banks = data	
                    console.log(this.banks)
                },
                complete: () => {
                    
                }
                });
            }
      },
      Selectbank(payment_id){
          this.banks.forEach(element => {
               
              if (element.id == payment_id){          
                  this.bankSelect = element
                  this.bankSelectShow = true
              }
          });	 

      },
      PurchaseNext(){
          if ((this.Tpago != '') && (this.bankSelect.length != 0)) {
            this.showProcessPayment = true
          }
          else if ((this.Tpago == 'EFECTIVO') && (this.bankSelect.length === 0)) {
            this.showProcessPaymentEfectivo = true
          }
          else{
            this.showNotif("No Has Seleccionado una forma de pago", "red-7")
          }
      },

      PurchaseEnd(){
            let sale = {
                'payment_type' : this.Tpago,
                'bank' : this.bankSelect,
                'amount' : this.subtotal,
                'reference': this.Referencia,
                'products' : this.products
            }

            let subscription = PurchaseService.SaveSale(sale).subscribe( {
			        next: resp => {

                if (resp.status == "200"){
                    
                    this.showProcessPayment = false;
                    this.rep_stock = resp.data;
                    this.showErrorFaltaStock = true;

                }
                else{
                   this.showProcessPaymentEfectivo = false;
                    this.showProcessPayment = false;
                    this.showSaleReady = true;
                }              				       	
		       	},
            complete: () => {
              this.showNotif("Tu compra ha sido procesada", "green-9")
            },
            error: () =>{
                      this.showNotif("ha ocurrido un error", "red-7")
                  }
            });

      },
     showNotif (message : any, color: any) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
     },

     GotoHome(){
         this.showSaleReady = false
         this.$router.push('/')
     },

     GoToShoppingCart(){
         this.showErrorFaltaStock = false;
         this.$router.push('/cart');
     }

	},
	 mounted () {
        const vm = this;
        vm.listCart();
        //vm.pagination.rowsNumber = vm.count;
  
    },
    	watch:{
		Tpago(newOpcion){
			this.viewMetodo(newOpcion)
		
		}
	}
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
        .banks{
            border: #666 solid 1px;
            border-radius: 3px;
            margin: 3px 5px;
            box-shadow: 2px 2px rgb(158, 158, 158);
        }
        .banks .tittle{
            font-family: 'Poppins-Regular';
			font-size: 14px;
        }
          .banks .desc{
            font-family: 'Poppins-SemiBold';
			font-size: 14px;
            margin: 3px 0;
        }

        .separador{
            border-bottom: 1px solid rgb(156, 156, 156);
        }

        .title-text-principal{
          margin: 0 10px;
          font-family: 'Poppins-SemiBold';
          font-weight: 400;
          color: rgb(23, 7, 168)
        }
        .my-card{
            padding:  10px;
        }
        .title-error{
          font-family: 'Poppins-SemiBold';
          font-size: 18px;
          font-weight: 400;
          color: rgb(194, 5, 5)
        }

       .text-msg-error{
          font-family: 'Poppins-SemiBold';
          font-size: 15px;
         
          text-align: left;
          color: rgb(26, 25, 25)
        }
        .subtitle-error{
          font-family: 'Poppins-SemiBold';
          font-size: 15px;
          text-align: center;
          color: rgb(194, 5, 5)
        }
</style>