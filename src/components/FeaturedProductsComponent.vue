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
                                     <q-btn label="Ver Más" text-color="black" color="white" size="md" class="btn"></q-btn>   
                                </div>
                            </div>
                            <div class="col q-pa-md">
                                <div class="img-mpagos q-pa-md">
                                    <q-img src="~assets/img/Wallet-rafiki.svg"></q-img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container col-12 col-md text-white bg-red-10">
                        <div class="row items-center">
                            <div class="col-12 col-md q-pa-md">
                                <div class="img-ventasmd">
                                     <q-img src="~assets/img/Checking-boxes-rafiki.svg"></q-img>
                                </div>
                            </div>
                            <div class="col q-pa-md q-mx-md">
                                <div class="pdt-ventasmd text-h6 text-right">
                                    Ventas al mayor y al detal
                                </div>
                                <div class="column items-end q-pt-md">
                                    <q-btn label="Ver Más" text-color="black" color="white" size="md" class="btn"></q-btn>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
 
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent ( { name: 'FeaturedProductsComponent' } )
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

.pdt-mpagos{
    /* padding-top: 30%; */
    font-family: 'Poppins-SemiBold';
    /* font-size: 25px; */
}

.btn-mpagos{
    font-family: 'Poppins-SemiBold';
}
.pdt-ventasmd{
    /* padding-top: 30%; */
    font-family: 'Poppins-SemiBold';
    /* font-size: 25px; */
}

/* .hola{
    padding-left: 35%;
} */
.container:hover .img-mpagos{
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}
.container:hover .img-ventasmd{
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