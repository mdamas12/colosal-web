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
									Carrito de compras
								</div>
							</q-card-header>
						</q-card>		
					</div>
				</div>
				
				<div class="row q-mx-xs">
				 
					<div class="col-12" v-for="(shoppingcart, index) in products" :key="shoppingcart.id">
						<q-card flat bordered class="my-card q-mb-md">
							<div class="row items-center">
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
											<div class="col-1">
												<q-btn flat text-color="grey-5" icon="delete_outline" label="Eliminar" @click="DeleteItemShop(shoppingcart.id)"/>
											</div>
										</q-card-section>
									</div>
								</div>
								<div class="col-3">
									<q-card-section>
										<div class="col text-description-product">
											Cantidad
										</div>
										<div class="row">
											<q-card flat bordered>
												<q-card-section>
													<div class="row justify-evenly items-center">
														<div class="col">
															<q-btn flat round color="primary" icon="add" @click="increaseProdQty(index)"/>
														</div>
														<div class="col text-name-product self-center q-pl-lg">
															{{shoppingcart.quantity}}
														</div>
														<div class="col q-mr-sm">
															<q-btn flat round color="primary" icon="remove" @click="decreaseProdQty(index)"/>
														</div>
													</div>
												</q-card-section>
											</q-card>
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
												{{shoppingcart.product.coin}} {{shoppingcart.product.price}}
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
												{{shoppingcart.product.coin}} {{shoppingcart.product.price * shoppingcart.quantity}}
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

					<q-card-section>
						<div class="column items-center">
							<div class="row">
								<div class="col">
									<q-btn color="red-10" text-color="white" icon-right="arrow_forward_ios" label="finalizar pedido" @click="goToPurchase()"></q-btn>
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

export default defineComponent ( { name: 'ShoppingCartComponent',
	data (){
		return {
			cantidad: 0,
			products: [],
			subtotal : 0
		}
	},
	methods: {
		increaseProdQty(index : number){
			if (this.products[index].quantity <= this.products[index].product.quantity){ //compruebo que no se pase de la cantidad de stock
				this.products[index].quantity += 1
				this.SubTotal()
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
		 this.products.forEach(element => this.subtotal = Number(this.subtotal) + (Number(element.product.price) * Number(element.quantity)));
	  },
	  DeleteItemShop(id_item){
		let subscription = ShoppingcartService.DeleteShopCart(id_item).subscribe( {
			complete: () => {
				this.listCart()
			}
			});
	  },
	goToPurchase(){
      //this.showInitSession = false
      this.$router.push('/purchases')
    },
	},
	 mounted () {
        const vm = this;
        vm.listCart();
        //vm.pagination.rowsNumber = vm.count;
  
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
</style>