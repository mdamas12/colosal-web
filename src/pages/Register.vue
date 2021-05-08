<template>
    <q-page>
        <div class="container q-pt-lg q-mb-xl bg-hueso">
             <div class="container-registro bg-hueso">
            <div class="container-title-register bg-hueso q-mx-lg">
                <div class="row q-pa-md">
                    <div class="col">
                        <q-card flat bordered>
                            <q-item>
                                <q-item-section class="padd-card">
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

                <q-card-section class="q-py-md">
                    <q-item>
                        <q-item-section>
                            <div class="row">
                                <div class="col-12 col-md q-px-md q-mb-sm">
                                    <q-input label="Nombre(s) y Apellido(s)*" v-model="username" class="font-input"></q-input>
                                </div>
                            </div>

                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Correo Electrónico*" v-model="email" class="font-input"
                                      lazy-rules
                                      :rules="[val => !!val || 'Debe ingresar el correo', isValidEmail]"
                                    ></q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar correo" v-model="email_confirm" class="font-input"
                                       lazy-rules
                                       :rules="[val => !!val || 'Debe ingresar el correo', isValidEmail]"
                                    ></q-input>
                                </div>
                            </div>
                            <div class="row q-pt-md">
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Contraseña*" v-model="password" class="font-input" :type="isPwd ? 'password' : 'text'"
                                      lazy-rules
                                      :rules="[val => !!val || 'Debe ingresar una contraseña', isValidPassword]"
                                    >
                                    <template v-slot:append>
                                        <q-icon
                                            :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            @click="isPwd = !isPwd"
                                            />
                                    </template>
                                    </q-input>
                                </div>
                                <div class="col-12 col-md q-px-md">
                                    <q-input label="Confirmar contraseña" v-model="password_confirm" class="font-input" :type="isPwd ? 'password' : 'text'"
                                      lazy-rules
                                      :rules="[val => !!val || 'Debe ingresar una contraseña', isValidPassword]"
                                    >
                                    <template v-slot:append>
                                        <q-icon
                                            :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            @click="isPwd = !isPwd"
                                            />
                                    </template>
                                    </q-input>
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
                    <q-btn label="Registrarme" color="bluesito" class="btn-register" @click="checkinformations()"></q-btn>
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
import UsersService   from "../services/home/users/user.service";
import { Loading } from "quasar";
export default defineComponent({
  components: { FooterComponent },
  data () {
    return {
      model: null,
      right: false,
      username : '',
      email : '',
      email_confirm : '',
      password : '',
      password_confirm : '',
      loading: false,
      isPwd: true, 
    }
  },
  methods: {

        showNotif (message , color) {
        this.$q.notify({
            message: message,
            color: color,
            actions: [
            { label: '', color: 'white', handler: () => { /* ... */ } }
            ]
        })
        },
        checkinformations(){
        if (this.username == "" || this.email == "" || this.email_confirm == "" || this.password == "" || this.password_confirm == ""){
            this.showNotif("Faltan campos por completar", 'red-10');
            return;
        };
        if (this.email != this.email_confirm){
            this.showNotif("Campo Email No coincide con Email de confirmacion", 'red-10');
            return; 
        }
        if (this.password != this.password_confirm){
            this.showNotif("la contrasenia No coincide con la contrasenia de confirmacion", 'red-10');
            return; 
        }
        if (this.right == false) {
           this.showNotif("Debes Aceptar las condiciones para continuar con el registro", 'red-10');
            return; 
        }
        //console.log("everything in order. Creating user...");
        this.Register();
        },
        Register(){
            Loading.show()

            let credentials = {
                'username' : this.email,
                'email' : this.email,
                'password1' : this.password,
                'password2' : this.password_confirm,
                'is_superuser' : false,
                'first_name' : this.username,
            }

            let subscription = UsersService.Register(credentials).subscribe({
                complete: () => {
                    Loading.hide()
                    this.showNotif("Usuario Registrado", 'green-5')
                    this.$store.dispatch('app/updateLogin')
                    this.$router.push('/')
                },
                error: err => {
                    console.log(err)
                    Loading.hide();
   
   
   if(err.response.status == 400){
                        this.showNotif("ERROR: Email ya existente", 'red-10');
                    }else{
                        this.showNotif("ERROR: Ocurrio un problema, por favor intente nuevamente mas tarde y si persiste, contacte al administrador de la pagina", 'red-10');
                    }
                }
            });
        },

        isValidEmail (val) {
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || 'Correo inválido';
            },
        isValidPassword (val) {
        //    const password_validator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            const password_validator = /^(?=.*[a-zA-Z0-9]).{8,}$/;
           return password_validator.test(val) || 'La Contraseña debe tener al menos : 8 caracteres';
        },
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
.padd-card{
    padding: 16px 0px 16px 0px;
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
