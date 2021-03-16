<template>
    <q-page>
        <div class="container q-pt-lg q-mb-xl bg-hueso">
             <div class="container-registro bg-hueso">
            <div class="container-title-register bg-hueso q-mx-lg">
                <div class="row q-pa-md">
                    <div class="col">
                        <q-card>
                            <q-item>
                                <q-item-section>
                                    <q-item-label class="text-h5">Formulario de registro</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-form bg-hueso q-pa-md">
            <q-card>
                <q-item>
                    <q-item-section>
                        <div class="row items-center">
                            <div class="col">
                                <q-item-label class="title-datos">Completa tus datos personales</q-item-label>
                            </div>
                            <div class="col">
                                <q-item-label class="title-field-required text-right">*Campos obligatorios</q-item-label>
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
                            <div class="row">
                                <div class="col-12 col-md q-px-md q-mb-sm">
                                    <q-input label="Nombre(s) y Apellido(s)*" class="font-input"></q-input>
                                </div>
                                <div class="col-3-lg col-12-sm q-px-md q-mb-sm">
                                    <q-select v-model="model" :options="options" />
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Ingrese su nro. de cédula*" class="font-input"></q-input>
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
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Correo Electrónico*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar correo" class="font-input"></q-input>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Contraseña*" class="font-input"></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar contraseña" class="font-input"></q-input>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Ciudad"/>
                                    <q-item-label class="label-ciudad q-pt-sm">Solo está disponible en las ciudades, solo San Félix y Puerto Ordaz.</q-item-label>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-select v-model="model" :options="options" label="Seleccione su Zona"/>
                                    <q-item-label class="label-zona q-pt-sm">Solo está disponible en las zonas aquí listadas.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Dirección de entrega*" class="font-input"></q-input>
                                    <q-item-label class="label-direccion q-pt-sm">Por favor, escriba la dirección en la que desea recibir su compra, con el mayor detalle posible. Incluya un punto de referencia.</q-item-label>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md">
                                    <q-checkbox v-model="right" label="Al registrate estas aceptando nuestros términos y condiciones *" class="font-checkbox" />
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-actions vertical align="center">
                    <q-btn label="Registrarme" color="bluesito" class="btn-register q-mb-md"></q-btn>
                </q-card-actions>
            </q-card>
        </div>
        </div>
        <footer-component></footer-component>
    </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FooterComponent from 'src/components/FooterComponent.vue'
export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      model: null,
      options: ['V', 'E'],
      right: false
    }
  }
})
</script>

<style>
.container-title-register{
    padding-left: 12%;;
    padding-right: 12%;
}
.text-h5{
    font-family: 'Poppins-SemiBold';
}
.title-datos{
    font-family: 'Poppins-SemiBold';
    color: #3D3D3D;
    font-size: 20px;
}
.title-field-required{
    font-family: 'Poppins-Regular';
    color: #444457;
    font-size: 12px;
}
.label-photo{
    font-family: 'Poppins-Regular';
    color: #949494;
    font-size: 12px;
}
.font-input{
    font-family: 'Poppins-Regular';
    font-size: 12px
}
.btn-photo{
    font-family: 'Poppins-Medium';
    font-size: 14px;
    color: #292936
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
.font-checkbox{
    font-family:'Poppins-Medium';
    font-size: 12px;
    color: #3D3D3D

}
.container-form{
    padding-left: 20%;
    padding-right: 20%;
}
.btn-register{
    font-family:'Poppins-Medium';
    font-size: 12px;
    border-radius: 9px;
}

@media(min-width:320px) and (max-width:600px){
    .container-title-register{
    padding-left: 3%;
    padding-right: 3%;
    }
    .container-form{
    padding-left: 4%;
    padding-right: 4%;
    }
}
</style>
