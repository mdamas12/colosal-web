<template>
<q-page>


	<div class="container-shopping-cart-title ">
		<q-breadcrumbs gutter="sm" class="q-px-md text-grey q-pt-md breadcrumbs-carrito" active-color="grey" style="font-size: 15px">
			<q-breadcrumbs-el label="Volver a Home" icon="arrow_back" to="/" class="texto-breadcrumbs"/>
			<q-breadcrumbs-el label="Carrito" class="texto-breadcrumbs text-bluesito"/>
    	</q-breadcrumbs>
		<div class="row q-ma-md">
			<div class="col-12 col-md-8" >
				<div class="row q-my-sm q-mb-lg">
					<div class="col">
						<!-- <q-card flat class="q-mb-sm q-pa-lg bg-azul-tenue"> -->
							<!-- <q-card-header> -->
								<div class="row title-text-carrito text-center">
									Carrito de compras
								</div>
							<!-- </q-card-header> -->
						<!-- </q-card>		 -->
					</div>
				</div>

				<div class="row q-mx-xs">
				 
					<div class="col-12" v-for="(shoppingcart, index) in products" :key="shoppingcart.id">
						<q-card flat bordered class="card-products-shopping q-mb-md" v-if="shoppingcart.product != null">
							<div class="row items-center">
								<div class="col-12 col-sm-2 text-center">
									<q-img :src="shoppingcart.product.image" class="img-product q-ml-md"></q-img>
								</div>
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-name-product-car">
												{{shoppingcart.product.name}}
											</div>
											<div class="col text-description-product-car">
												{{shoppingcart.product.brand.name}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-3">
									<q-card-section>
										<!-- <div class="col text-description-product-car text-center">
											 <div  v-if="shoppingcart.product.quantity > 5"><b>Existen {{shoppingcart.product.quantity}} en Disponibles</b></div>
							   				 <div  v-if="shoppingcart.product.quantity <= 5 && shoppingcart.product.quantity > 0 "><b>Solo quedan {{shoppingcart.product.quantity}} Disponibles</b></div>
							   				 <div v-if="shoppingcart.product.quantity == 0"><b> Este Producto no esta Disponible</b></div>
										</div> -->
										<div class="text-center">
											<q-card flat bordered>
												<!-- <q-card-section> -->
													<div class="row items-center">
														<div class="col">
															<q-btn flat round color="primary" icon="remove" size="sm" @click="decreaseProdQty(index)"/>
														</div>
														<div class="col text-name-product-car">
															{{shoppingcart.quantity}} 
														</div>
														<div class="col">
															<q-btn flat round color="primary" icon="add" size="sm" @click="increaseProdQty(index)"/>
														</div>										
													</div>
												<!-- </q-card-section> -->
											</q-card>
										</div>
										<div class="col-3 text-center q-pt-sm">
											<q-btn label="Actualizar" flat rounded color="redsito" text-color="red" icon="shopping_cart" class="btn-shopp" dense size="sm" @click="Shoppingcart(index)"></q-btn>					
										</div>
									</q-card-section>
								</div>				 
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-price-product-car">
												Precio
											</div>
											<div class="col text-description-product-car">
												{{shoppingcart.product.coin}} {{shoppingcart.product.price}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-name-product-car">
												SUBTOTAL
											</div>
											<div class="col text-name-product-car">
												{{shoppingcart.product.coin}} {{(shoppingcart.product.price * shoppingcart.quantity).toFixed(2)}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-1 text-center">
									<q-btn flat round text-color="redsito" icon="delete_outline" @click="confirmDelete(shoppingcart.id)"/>
								</div>
							</div>
						</q-card>
						<q-card flat bordered class="card-products-shopping q-mb-md" v-if="shoppingcart.promotion != null">
							<div class="row items-center">
								<div class="col-12 col-sm-2 text-center">
									<q-img :src="shoppingcart.promotion.image" class="img-product q-ml-md"></q-img>
								</div>
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-name-product-car">
												{{shoppingcart.promotion.name}}
											</div>
											<div class="col text-description-product-car">
												{{shoppingcart.promotion.description}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-3">
									<q-card-section>
										<!-- <div class="col text-description-product-car text-center">
											 <div  v-if="shoppingcart.promotion.quantity > 5"><b>Existen {{shoppingcart.promotion.quantity}} Disponibles</b></div>
							   				 <div  v-if="shoppingcart.promotion.quantity <= 5 && shoppingcart.promotion.quantity > 0 "><b>Solo quedan {{shoppingcart.promotion.quantity}} Disponibles</b></div>
							   				 <div v-if="shoppingcart.promotion.quantity == 0"><b> Este Producto no esta Disponible</b></div>
										</div> -->
										<div class="text-center">
											<q-card flat bordered>
												<!-- <q-card-section> -->
													<div class="row items-center">
														<div class="col">
															<q-btn flat round color="primary" icon="remove" size="sm" @click="decreaseProdQty(index)"/>
														</div>
														<div class="col text-name-product-car">
															{{shoppingcart.quantity}} 
														</div>
														<div class="col">
															<q-btn flat round color="primary" icon="add" size="sm" @click="increaseProdQty(index)"/>
														</div>										
													</div>
												<!-- </q-card-section> -->
											</q-card>
										</div>
										<div class="col-3 text-center q-pt-sm">
											<q-btn label="Actualizar" flat rounded color="redsito" text-color="red" icon="shopping_cart" class="btn-shopp" dense size="sm" @click="Shoppingcart(index)"></q-btn>					
										</div>
									</q-card-section>
								</div>		 
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-description-product-car">
												Precio
											</div>
											<div class="col text-description-product-car">
												{{shoppingcart.promotion.coin}} {{shoppingcart.promotion.price}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-2 text-center">
									<div class="column items-center">
										<q-card-section class="text-center">
											<div class="col text-name-product-car">
												SUBTOTAL
											</div>
											<div class="col text-name-product-car">
												{{shoppingcart.promotion.coin}} {{(shoppingcart.promotion.price * shoppingcart.quantity).toFixed(2)}}
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-12 col-sm-1 text-center">
									<q-btn flat round text-color="redsito" icon="delete_outline" @click=" confirmDelete(shoppingcart.id)"/>
								</div>
							</div>
						</q-card>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4 text-center padd-ts">
				<q-card flat bordered class="card-products-shopping q-mx-md q-mt-sm">
					<q-card-section class="text-center">
						<div class="row justify-between text-center">
							<div class="col-2 self-start text-name-product-car">
								Subtotal
							</div>
							<div class="container">
								<div class="col-2 wrap self-end text-name-product-car">
									<strong>${{subtotal.toFixed(2)}}</strong>
								</div>
							</div>
						</div>
					</q-card-section>
					<q-card-section>
						<div class="row justify-between text-center">
							<div class="col-2 self-start text-name-product-car">
								Descuentos 
							</div>
							<div class="container">
								<div class="col-2 wrap self-end text-name-product-car">
									<strong>$0.00</strong>
								</div>
							</div>
						</div>
					</q-card-section>
					<q-separator/>
					<q-card-section class="text-center">
						<div class="row justify-between text-center">
							<div class="col-2 self-start text-name-product-car">
								TOTAL
							</div>
							<div class="container">
								<div class="col-2 wrap self-end text-total-product-car">
									<strong>${{subtotal.toFixed(2)}}</strong>
								</div>
							</div>
						</div>
					</q-card-section>
					<q-separator/>
					<q-card-section class="text-center">
						<div class="column items-center">
							<div class="row text-center">
								<div class="col">
									<q-btn color="redsito" text-color="white" icon-right="arrow_forward_ios" label="finalizar pedido" class="btn-car" size="md" @click="goToPurchase()"></q-btn>
								</div>
							</div>
						</div>
					</q-card-section>
				</q-card>
			</div>
		</div>

      <q-dialog persistent v-model="ShowMsg" >
      <q-card class="my-card" style="max-width:100%; width:440px">
        <q-toolbar class="text-bluesito">
          <q-toolbar-title class="title-session">
              <h4 class="title-error">¡Advertencia!</h4>  
              <q-item-label class="subtitle-error">La Cantidad Solicitada no está disponible </q-item-label>
          </q-toolbar-title>
          <q-btn flat icon="close" round v-close-popup />
        </q-toolbar>
        <q-separator />
        <q-item-section>
           <div class="row q-pt-md">
                <div class="col">
                  <div class="container text-center q-pa-md">
                    <q-item-label class="text-msg-error"> Haz click en "ok" y verifica tus productos. </q-item-label>  
                  </div>
                </div>
              </div>
           </q-item-section>
        <q-separator />
           
          <q-card-actions vertical align="center">
            <q-btn label="OK" color="red-7" class="btn-init-session q-mb-md" size="sm" @click="CloseShowMsg()"></q-btn>
         </q-card-actions>
         <q-separator />
           <!-- </q-item> -->
          </q-card>
        </q-dialog>	
	</div>
	<footer-component></footer-component>
	<q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="white" @click="goToWz()">
        <img src="~assets/img/whatsapp-icon.svg" style=" width: 25px;" >
      </q-btn>
    </q-page-sticky>
	</q-page>
</template>
 
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ShoppingcartService   from "../../services/home/shoppingcart/shoppingcart.service";
import FooterComponent from 'src/components/FooterComponent.vue'
import { Loading } from "quasar";
// export default defineComponent ( { name: 'ShoppingCartComponent',
export default defineComponent ( { components: {FooterComponent},

	data (){

		var products : any = []
		var counter : any = []

		return {
			cantidad: 0,
			products: products,
			subtotal : 0,
			counter : counter,
			ShowMsg : false,
			
		}
	},
	methods: {

		verifySession(){
			let token = localStorage.getItem("token")
			let username = localStorage.getItem("username")
			if ((token != null) && (username != null)) {

				return true;
			}
			else{
				return false;
			
			}
		},
		increaseProdQty(index : number){
			
			if (this.products[index].product != null){
			
				if (this.products[index].quantity < this.products[index].product.quantity){ //compruebo que no se pase de la cantidad de stock
					this.products[index].quantity += 1
					this.SubTotal()
				}
			}
			else{
				
              if (this.products[index].quantity < this.products[index].promotion.quantity){ //compruebo que no se pase de la cantidad de stock
					this.products[index].quantity += 1
					this.SubTotal()
				}

			}
		},
		decreaseProdQty(index : number){


			if (this.products[index].quantity > 1){ 
					this.products[index].quantity--
					this.SubTotal()
				}
			
	
		},

		listCart(){
			let subscription = ShoppingcartService.getListCart().subscribe( {
			next: (data:any) => {
				//console.log(data)
				this.products = data.results
				
				for (let i = 0; i < this.products.length; i++){
					if (this.products[i].product != null){
                    	if (this.products[i].quantity > this.products[i].product.quantity){
							this.ShowMsg = true;
							this.products[i].quantity = this.products[i].product.quantity							
     					}
						this.counter[i] = this.products[i].quantity
					}
					else{

					    if (this.products[i].quantity > this.products[i].promotion.quantity){
							this.ShowMsg = true;
							this.products[i].quantity = this.products[i].promotion.quantity							
     					}
						this.counter[i] = this.products[i].quantity
					}
								
					
                }	
			},
			complete: () => {
				this.SubTotal()
			}
			});
        },
	  SubTotal(){
		 this.subtotal = 0

		 this.products.forEach((element : any) => {

			 if (element.product){
		
			   this.subtotal = Number(this.subtotal) + (Number(element.product.price) * Number(element.quantity))
			  
			 }
			 else{
				this.subtotal = Number(this.subtotal) + (Number(element.promotion.price) * Number(element.quantity)) 
			 
			}
		 });
	  },
	  DeleteItemShop(id_item : number){
		let subscription = ShoppingcartService.DeleteShopCart(id_item).subscribe( {
			next: (resp : any) =>{
				this.showNotif(resp, 'blue-8');
			},
			complete: () => {
				this.listCart()
			},
			error: (resp : any) =>{
				this.showNotif(resp, 'red-8');
			}
			});
	  },
	 Shoppingcart(id : number){   
		
        if (this.verifySession() == true){
            
			let data = {}

            if(this.products[id].quantity == 0){
                this.showNotif("Debe agregar cantidad en producto", 'red-10');
                return 
            }
			if (this.products[id].product != null) {

				if (this.products[id].quantity > this.products[id].product.quantity){
					this.showNotif("La Cantidad Supera al stock de este Producto", 'red-10');
					return
				}
				if (this.counter[id] ==  this.products[id].quantity){
					this.showNotif("No has modificado la cantidad", 'red-10');
					return
				}
			     data = {
					'quantity' : this.products[id].quantity,
					'product' : this.products[id].product.id,
					'promotion' : null
				}

			}
			else{

				if (this.products[id].quantity > this.products[id].promotion.quantity){
					this.showNotif("La Cantidad Supera la disponible", 'red-10');
					return
				}
				if (this.counter[id] ==  this.products[id].quantity){
					this.showNotif("No has modificado la cantidad", 'red-10');
					return
				}
			    data = {
					'quantity' : this.products[id].quantity,
					'promotion' : this.products[id].promotion.id,
					'product' : null
				}

			}
            Loading.show();
          
			let shopp_id = this.products[id].id
		
            let subscription = ShoppingcartService.UpdateShoppingCart(shopp_id,data).subscribe( {
             complete: (resp : any)   => {
               Loading.hide();
             },
			 next: (resp : any) =>{
				Loading.hide();
				this.showNotif(resp, 'blue-8');
				this.listCart();
				return
			 },
             error: (resp : any) => {
               Loading.hide();
               this.showNotif(resp, 'red-10');
              }
            });
        }
        else{
           this.showNotif("Debe Iniciar Sesión", 'red-10');
           //this.showInitSession = true;
        }
    },
	goToPurchase(){
      //this.showInitSession = false
      this.$router.push('/purchases')
    },
	CloseShowMsg(){
		this.ShowMsg = false;
	},
	confirmDelete(item : any) {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Quieres Eliminar este producto?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
		this.DeleteItemShop(item)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
	showNotif (message : string, color : string) {
      this.$q.notify({
        message: message,
        color: color,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
	goToWz(){
      window.location.href = "https://wa.me/584128770825?text=Hola%20buen%20dia."
    }

	},
	 mounted () {
        const vm = this;
        vm.listCart();
        //vm.pagination.rowsNumber = vm.count;
  
	}
})
</script>

<style>
    .btn-shopp{
		font-family: 'Poppins-SemiBold';
	    font-size: 9px;
		color:#FAFAFA;
		margin: 2px 0 ;
	}
    .container-shopping-cart-title {
			background: #F2F7FF;
    }

		.text-name-product-car{
			font-family: 'Poppins-SemiBold';
			font-size: 14px;
		}

		.text-total-product-car{
			font-family: 'Poppins-SemiBold';
			font-size: 14px;
		}

		.text-price-product-car{
			font-family: 'Poppins-SemiBold';
			font-size: 16px;
		}

		.text-description-product-car{
				font-family: 'Poppins-Regular';
				font-size: 16px;
		}

		.title-text-carrito{
				font-family: 'Poppins-SemiBold';
				font-size: 24px;
				color:#0F2A55
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

		.texto-breadcrumbs{
			font-family: 'Poppins-Regular';
		}

		@media(min-width:767px){
			.container-shopping-cart-title{
				padding-left: 11%;
				padding-right: 11%;
				background-color: #F2F7FF;
			}

			.padd-ts{
				padding-top: 60px;
			}
		}
</style>