(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{4749:function(t,s,a){"use strict";a("e2a9")},"6b8a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("example-component",{attrs:{title:"Purchase component"}}),a("purchase-component")],1)},i=[],o=a("e4fd"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-shopping-cart-title "},[a("div",{staticClass:"row"}),a("div",{staticClass:"row justify-evenly items-start content-center"},[a("div",{staticClass:"col-8 q-mx-md"},[a("div",{staticClass:"row full-width q-my-xl"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text"},[t._v("\n\t\t\t\t\t\t\t\t\tFinaliza tu Compra\n\t\t\t\t\t\t\t\t")])])],1)],1)]),a("div",{staticClass:"row full-width q-my-xl"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text-principal"},[t._v("\n\t\t\t\t\t\t\t\t\tSelecciona un metodo de pago:\n\t\t\t\t\t\t\t\t")])]),a("q-radio",{staticClass:"font-checkbox",attrs:{val:"TRANSFERENCIA $","unchecked-icon":"visibility_off","checked-icon":"visibility",label:"Transferencia $"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox",attrs:{val:"TRANSFERENCIA BS",label:"Transferencia Bs"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox",attrs:{val:"ZELLE",label:"Zelle"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox",attrs:{val:"PAGO MOVIL",label:"Pago Movil"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox",attrs:{val:"EFECTIVO",label:"Efectivo"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("div",{staticClass:"row"},t._l(t.banks,(function(s){return a("div",{key:s.id,staticClass:"col-6"},[a("q-card-section",{staticClass:"banks"},[a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Banco:")]),a("strong",[t._v(" "+t._s(s.bank.name)+" ")])]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Titular:")]),t._v(" "+t._s(s.bank.account_owner)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Identificacion:")]),t._v("  "+t._s(s.bank.owner_id)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Cuenta N:")]),t._v("  "+t._s(s.bank.account_number)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Telefono:")]),t._v(" "+t._s(s.bank.phone)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Email:")]),t._v(" "+t._s(s.bank.email)+" \n                                        ")]),a("div",{staticClass:"col-1"},[a("q-btn",{attrs:{color:"green-7","text-color":"white",label:"Seleccionar",size:"sm"},on:{click:function(a){return t.Selectbank(s.id)}}})],1)])],1)})),0)],1)],1)]),a("div",{staticClass:"row q-mx-xs"},[a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text-principal"},[t._v("\n\t\t\t\t\t\t\t\t   Verifica los productos seleccionados:\t\n\t\t\t\t\t\t\t\t")])]),t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"row items-center separador"},[a("div",{staticClass:"col-1"},[a("q-img",{staticClass:"img-product",attrs:{src:t.process.env.API_URL+s.product.image}})],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.description)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-3"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCantidad\n\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[a("strong",[t._v(t._s(s.quantity)+" ")])])])],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[a("strong",[t._v(" "+t._s(s.product.coin)+" "+t._s(s.product.price)+" ")])])])],1)]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product"},[a("strong",[t._v(t._s(s.product.coin)+" "+t._s(s.amount))])])])],1)])])}))],2)],1)])]),a("div",{staticClass:"col-3"},[a("q-card",{staticClass:"my-card q-mx-md q-mt-xl",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tSubtotal\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$"+t._s(t.subtotal))])])])]),a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tDescuentos\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$0.00")])])])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tTOTAL\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$"+t._s(t.subtotal))])])])]),a("q-separator"),0!=t.bankSelect.length?a("q-card-section",{directives:[{name:"show",rawName:"v-show",value:t.bankSelectShow,expression:"bankSelectShow"}]},[a("div",{staticClass:"col-2 self-start"},[a("strong",[t._v("Banco Seleccionado:")])]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Banco:")]),t._v(" "+t._s(t.bankSelect.bank.name)+" \n                 ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Titular:")]),t._v(" "+t._s(t.bankSelect.bank.account_owner)+" \n                 ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Identificacion:")]),t._v("  "+t._s(t.bankSelect.bank.owner_id)+" \n                ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Cuenta N:")]),t._v("  "+t._s(t.bankSelect.bank.account_number)+" \n                ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Telefono:")]),t._v(" "+t._s(t.bankSelect.bank.phone)+" \n                ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Email:")]),t._v(" "+t._s(t.bankSelect.bank.email)+" \n                ")])]):t._e(),a("q-separator"),a("q-card-section",[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{color:"red-10","text-color":"white","icon-right":"arrow_forward_ios",label:"finalizar pedido"},on:{click:function(s){return t.PurchaseNext()}}})],1)])])])],1)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:t.showProcessPayment,callback:function(s){t.showProcessPayment=s},expression:"showProcessPayment"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[t._v("\n              Ultimo Paso!\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("div",{staticClass:"q-mt-xs",attrs:{align:"center"}},[a("span",{staticClass:"label-register text-center"},[t._v("Ya casi terminas tu compra,"),a("br"),t._v(" indicanos el numero de transferencia.")])]),a("q-item",{staticClass:"q-pt-xs"},[a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col-12 col-md q-px-md"},[a("q-input",{staticClass:"font-input",attrs:{label:"N-Referencia"},model:{value:t.Referencia,callback:function(s){t.Referencia=s},expression:"Referencia"}})],1)])])],1),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Procesar Compra",color:"bluesito",size:"md"},on:{click:function(s){return t.PurchaseEnd()}}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Recuerda, si no tiene aun la referencia, puedes procesar la compra y buscarla en Ordenes de compra, tienes 24 Horas para validar el pago; de lo contrario la compra sera anulada. ")])],1)])])])],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showProcessPaymentEfectivo,callback:function(s){t.showProcessPaymentEfectivo=s},expression:"showProcessPaymentEfectivo"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[t._v("\n              Ultimo Paso!\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Genial, Has seleccionado metodo de pago en efectivo, al procesar la compra nuestro agente se pondra en contacto contigo. ")])],1)])])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Procesar Compra",color:"bluesito",size:"md"},on:{click:function(s){return t.PurchaseEnd()}}})],1),a("q-separator")],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showSaleReady,callback:function(s){t.showSaleReady=s},expression:"showSaleReady"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[t._v("\n              Genial! Tu Compra ha Sido Procesada\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Recuerda, en tu perfil estan tus ordenes d compras ")])],1)])])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Ok",color:"bluesito",size:"md"},on:{click:function(s){return t.GotoHome()}}})],1),a("q-separator")],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showErrorFaltaStock,callback:function(s){t.showErrorFaltaStock=s},expression:"showErrorFaltaStock"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[a("h4",{staticClass:"title-error"},[t._v("¡Oh no!")]),a("q-item-label",{staticClass:"subtitle-error"},[t._v("Tenemos un problema: ")])],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"text-msg-error"},[t._v(" "+t._s(t.rep_stock)+" "),a("br"),a("br")]),a("q-item-label",{staticClass:"text-msg-error"},[t._v(' Haz click en "ok" para volver al carrito y verificar el producto. ')])],1)])])]),a("q-separator"),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"OK",color:"red-7",size:"sm"},on:{click:function(s){return t.GoToShoppingCart()}}})],1),a("q-separator")],1)],1)],1)},l=[],r=a("5a9e"),n=a("5cff"),d=Object(o["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[],s=[];return{cantidad:0,products:s,banks:t,bankSelect:[],subtotal:0,Tpago:"",rep_stock:"",bankSelectShow:!1,showProcessPayment:!1,showProcessPaymentEfectivo:!1,showSaleReady:!1,showErrorFaltaStock:!1,Referencia:""}},methods:{increaseProdQty(){this.cantidad++},decreaseProdQty(){this.cantidad>0&&this.cantidad--},listCart(){r["a"].getListCart().subscribe({next:t=>{this.products=t.results},complete:()=>{this.SubTotal()}})},SubTotal(){this.subtotal=0,this.products.forEach((t=>this.subtotal=Number(this.subtotal)+Number(t.amount)))},viewMetodo(){if("EFECTIVO"===this.Tpago)this.bankSelect=[];else{n["a"].Getpayments(this.Tpago).subscribe({next:t=>{this.banks=t,console.log(this.banks)},complete:()=>{}})}},Selectbank(t){this.banks.forEach((s=>{s.id==t&&(this.bankSelect=s,this.bankSelectShow=!0)}))},PurchaseNext(){""!=this.Tpago&&0!=this.bankSelect.length?this.showProcessPayment=!0:"EFECTIVO"==this.Tpago&&0===this.bankSelect.length?this.showProcessPaymentEfectivo=!0:this.showNotif("No Has Seleccionado una forma de pago","red-7")},PurchaseEnd(){let t={payment_type:this.Tpago,bank:this.bankSelect,amount:this.subtotal,reference:this.Referencia,products:this.products};n["a"].SaveSale(t).subscribe({next:t=>{"200"==t.status?(this.showProcessPayment=!1,this.rep_stock=t.data,this.showErrorFaltaStock=!0):(this.showProcessPaymentEfectivo=!1,this.showProcessPayment=!1,this.showSaleReady=!0)},complete:()=>{this.showNotif("Tu compra ha sido procesada","green-9")},error:()=>{this.showNotif("ha ocurrido un error","red-7")}})},showNotif(t,s){this.$q.notify({message:t,color:s,actions:[{label:"Ok",color:"white",handler:()=>{}}]})},GotoHome(){this.showSaleReady=!1,this.$router.push("/")},GoToShoppingCart(){this.showErrorFaltaStock=!1,this.$router.push("/cart")}},mounted(){const t=this;t.listCart()},watch:{Tpago(t){this.viewMetodo()}}}),p=d,v=(a("4749"),a("2877")),u=a("f09f"),m=a("3786"),b=a("a370"),C=a("9c40"),h=a("068f"),q=a("eb85"),f=a("24e8"),_=a("65c6"),w=a("6ac5"),k=a("66e5"),g=a("4074"),x=a("27f9"),S=a("4b7e"),y=a("0170"),P=a("7f67"),T=a("eebe"),E=a.n(T),N=Object(v["a"])(p,c,l,!1,null,null,null),R=N.exports;E()(N,"components",{QCard:u["a"],QRadio:m["a"],QCardSection:b["a"],QBtn:C["a"],QImg:h["a"],QSeparator:q["a"],QDialog:f["a"],QToolbar:_["a"],QToolbarTitle:w["a"],QItem:k["a"],QItemSection:g["a"],QInput:x["a"],QCardActions:S["a"],QItemLabel:y["a"]}),E()(N,"directives",{ClosePopup:P["a"]});var Q=Object(o["defineComponent"])({name:"Purchase",components:{PurchaseComponent:R}}),O=Q,I=a("9989"),F=Object(v["a"])(O,e,i,!1,null,null,null);s["default"]=F.exports;E()(F,"components",{QPage:I["a"]})},e2a9:function(t,s,a){}}]);