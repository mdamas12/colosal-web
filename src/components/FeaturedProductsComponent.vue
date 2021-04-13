<template>
<div class="container-featured-products-1 q-pb-xl q-pt-lg">
    <div class="container-featured-products">
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="container col-12 col-md text-white bg-primary img-mdp-ventas">
                        <div class="row items-center">
                            <div class="col-12 col-md q-pa-md">
                                <div class="pdt-mpagos q-mx-md text-h6 col-12 col-md">
                                    Conoce nuestros métodos de pago
                                </div>
                                <div class="col-12 col-md q-pt-md q-mx-md">
                                     <q-btn @click="alert=true" label="Ver Más" text-color="black" color="white" size="md" class="btn"></q-btn></div>
                            </div>
                            <div class="col q-pa-md">
                                <div class="img-mpagos q-pa-md">
                                    <q-img src="~assets/img/Wallet-rafiki.svg"></q-img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-ws col-12 col-md text-white">
                        <div class="row items-center">
                            <div class="col-12 col-md q-pa-md">
                                <div class="img-ventasmd q-pt-md">
                                     <q-img src="~assets/img/Personaje-Whatsapp.svg"></q-img>
                                </div>
                            </div>
                            <div class="col q-pt-md q-mx-md">
                                <div class="pdt-ventasmd text-h6 text-right">
                                    Contáctanos a nuestro WhatsApp
                                </div>
                                <div class="column items-end q-pa-md">
                                    <q-btn label="Iniciar chat" text-color="black" color="white" size="md" class="btn"></q-btn>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <q-dialog v-model="alert">
      <q-card>
          <q-card-section class="q-pa-md">
            <q-list padding v-if="payments" v-for="payment in payments" :key="payment.id">
              <q-item>
                <q-item-section>
                <q-item-label><b>Banco: </b>{{payment.name}}</q-item-label>
                <q-item-label><b>Titular: </b>{{payment.account_owner}}</q-item-label>
                <q-item-label><b>Nro de cuenta: </b>{{payment.account_number}}</q-item-label>
                <q-item-label><b>Email: </b>{{payment.email}}</q-item-label>
                <q-item-label><b>Telefono: </b>{{payment.phone}}</q-item-label>
                <q-item-label><b>Metodos de pago: </b> {{payment.getMethods()}} </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced />
            </q-list>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
      </q-card>
    </q-dialog>
</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import PaymentsService from "../services/home/payments.service";
import Payment from "../models/payments/Payment"
export default defineComponent({
   name: 'FeaturedProductsComponent',
    data () {
      return {
        alert : false,
        payments : []
      }
    },
    created () {
      this.getPaymentMethods()
    },
    methods: { 
      getPaymentMethods () {
        let vm = this
        PaymentsService.getPaymentMethods().subscribe({
          next: data =>{
            vm.payments = data.map(item => new Payment(item))
           console.log(data)
          },
          error: err => {
            console.log(err);
          }
        });
      }
    }
  })
</script>
<style>
  .container-featured-products-1{
    padding-left: 13%;
    padding-right: 13%;
    background-color: #FAFAFA;
  }
  .container-featured-products{
    background-color: #FAFAFA;
  }
  .container-ws{
    background-color: #00BFA5;
   }
  .pdt-mpagos{
    font-family: 'Poppins-SemiBold';
  }
  .btn-mpagos{
    font-family: 'Poppins-SemiBold';
  }
  .pdt-ventasmd{
    font-family: 'Poppins-SemiBold';
  }
  .container:hover .img-mpagos{
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
  }
  .container-ws:hover .img-ventasmd{
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
  }
  .img-mpagos{
    padding-top: 13%;
  }
  .img-ventasmd{
    padding-top: 13%;
   }
  .btn-ventasmd{
    font-family: 'Poppins-SemiBold';
  }
  .btn{
    border-radius: 9px;
  }
  .btn-product{
    border-radius: 9px;
    font-family: 'Poppins-SemiBold';
    }
  .enlace-ver{
    color:#EB0004;
    font-family: 'Poppins-Regular';
    font-size: 19px;
  }
  .my-card:hover .img-product{
    -webkit-transform: scale(1.00);
     transform: scale(1.00);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
  }
  .text-title{
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
  }
  .text-name-product{
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
  }
  .text-description-product{
    font-family: 'Poppins-Regular';
    font-size: 16px;
  }
  .text-price-product{
    font-family: 'Poppins-SemiBold';
    font-size: 24px;
   }
  @media (min-width:320px) and (max-width: 1023px) {
    .img-ventasmd{
      width: 60%;
    }
    .img-mpagos{
      width: 60%;
    }
    }
</style>
