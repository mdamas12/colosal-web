(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{4749:function(t,s,a){"use strict";a("e2a9")},"6b8a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("example-component",{attrs:{title:"Purchase component"}}),a("purchase-component")],1)},c=[],i=a("e4fd"),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-shopping-cart-title "},[a("div",{staticClass:"row"}),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"row q-my-lg"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text text-center"},[t._v("\n\t\t\t\t\t\t\t\t\tFinaliza tu Compra\n\t\t\t\t\t\t\t\t")])])],1)],1)]),a("div",{staticClass:"row full-width q-my-xl"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text-principal text-bluesito"},[t._v("\n\t\t\t\t\t\t\t\t\tSelecciona un método de pago:\n\t\t\t\t\t\t\t\t")])]),a("q-radio",{staticClass:"font-checkbox-mp",attrs:{val:"TRANSFERENCIA $","unchecked-icon":"visibility_off","checked-icon":"visibility",label:"Transferencia $"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox-mp",attrs:{val:"TRANSFERENCIA BS",label:"Transferencia Bs"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox-mp",attrs:{val:"ZELLE",label:"Zelle"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox-mp",attrs:{val:"PAGO MOVIL",label:"Pago Móvil"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("q-radio",{staticClass:"font-checkbox-mp",attrs:{val:"EFECTIVO",label:"Efectivo"},model:{value:t.Tpago,callback:function(s){t.Tpago=s},expression:"Tpago"}}),a("div",{staticClass:"row"},t._l(t.banks,(function(s){return a("div",{key:s.id,staticClass:"col-12 col-md-6"},[a("q-card-section",{staticClass:"banks"},[a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle "},[t._v("Banco:")]),a("strong",[t._v(" "+t._s(s.bank.name)+" ")])]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Títular:")]),t._v(" "+t._s(s.bank.account_owner)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Identificación:")]),t._v("  "+t._s(s.bank.owner_id)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Cuenta N:")]),t._v("  "+t._s(s.bank.account_number)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Teléfono:")]),t._v(" "+t._s(s.bank.phone)+" \n                                        ")]),a("div",{staticClass:"col desc"},[a("span",{staticClass:"tittle"},[t._v("Email:")]),t._v(" "+t._s(s.bank.email)+" \n                                        ")]),a("div",{staticClass:"col-1"},[a("q-btn",{attrs:{color:"green-7","text-color":"white",label:"Seleccionar",size:"sm"},on:{click:function(a){return t.Selectbank(s.id)}}})],1)])],1)})),0)],1)],1)]),a("div",{staticClass:"row q-mx-xs"},t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"col-12"},[null!=s.product?a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.product.image}})],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-3 text-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t          Cantidad\n                  \t")]),a("div",{staticClass:"text-center"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row justify-evenly items-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])],1)],1)])],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s((s.product.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)])])]):t._e(),null!=s.promotion?a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.promotion.image}})],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-3 text-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product items-center"},[t._v("\n                       Cantidad \n\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"text-center"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row justify-evenly items-center"},[a("div",{staticClass:"col text-name-product self-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])],1)],1)])],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s(s.promotion.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s((s.promotion.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)])])]):t._e()],1)})),0)]),a("div",{staticClass:"col-12 col-md-4 text-center"},[a("q-card",{staticClass:"my-card q-mx-md q-mt-lg",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product"},[t._v("\n\t\t\t\t\t\t\t\tSubtotal\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end text-name-product"},[a("strong",[t._v("$"+t._s(t.subtotal))])])])]),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product"},[t._v("\n\t\t\t\t\t\t\t\tDescuentos\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end text-name-product"},[a("strong",[t._v("$0.00")])])])]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product"},[t._v("\n\t\t\t\t\t\t\t\tTOTAL\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end text-total-purchase"},[a("strong",[t._v("$"+t._s(t.subtotal.toFixed(2)))])])])]),a("q-separator"),0!=t.bankSelect.length?a("q-card-section",{directives:[{name:"show",rawName:"v-show",value:t.bankSelectShow,expression:"bankSelectShow"}]},[a("div",{staticClass:"col-2 self-start text-name-product"},[a("strong",[t._v("Banco Seleccionado:")])]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Banco:")]),t._v(" "+t._s(t.bankSelect.bank.name)+" \n                 ")]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Títular:")]),t._v(" "+t._s(t.bankSelect.bank.account_owner)+" \n                 ")]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Identificación:")]),t._v("  "+t._s(t.bankSelect.bank.owner_id)+" \n                ")]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Cuenta N:")]),t._v("  "+t._s(t.bankSelect.bank.account_number)+" \n                ")]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Teléfono:")]),t._v(" "+t._s(t.bankSelect.bank.phone)+" \n                ")]),a("div",{staticClass:"col desc text-description-banks"},[a("span",{staticClass:"tittle"},[t._v("Email:")]),t._v(" "+t._s(t.bankSelect.bank.email)+" \n                ")])]):t._e(),a("q-separator"),a("q-card-section",[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"btn-car",attrs:{color:"redsito","text-color":"white","icon-right":"arrow_forward_ios",label:"finalizar pedido",size:"md"},on:{click:function(s){return t.PurchaseNext()}}})],1)])])])],1)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:t.showProcessPayment,callback:function(s){t.showProcessPayment=s},expression:"showProcessPayment"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[t._v("\n              ¡Último Paso!\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("div",{staticClass:"q-mt-xs",attrs:{align:"center"}},[a("span",{staticClass:"label-register text-center"},[t._v("Ya casi terminas tu compra,"),a("br"),t._v(" indícanos el número de transferencia.")])]),a("q-item",{staticClass:"q-pt-xs"},[a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col-12 col-md q-px-md"},[a("q-input",{staticClass:"font-input",attrs:{label:"N-Referencia"},model:{value:t.Referencia,callback:function(s){t.Referencia=s},expression:"Referencia"}})],1)])])],1),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Procesar Compra",color:"bluesito",size:"md"},on:{click:function(s){return t.PurchaseEnd()}}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Recuerda, si no tiene aún la referencia, puedes procesar la compra y buscarla en órdenes de compra, tienes 24 Horas para validar el pago; de lo contrario la compra será anulada. ")])],1)])])])],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showProcessPaymentEfectivo,callback:function(s){t.showProcessPaymentEfectivo=s},expression:"showProcessPaymentEfectivo"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[t._v("\n              ¡Último Paso!\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Genial, Has seleccionado método de pago en efectivo, al procesar la compra nuestro agente se pondrá en contacto contigo. ")])],1)])])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Procesar Compra",color:"bluesito",size:"md"},on:{click:function(s){return t.PurchaseEnd()}}})],1),a("q-separator")],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showSaleReady,callback:function(s){t.showSaleReady=s},expression:"showSaleReady"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-purchase"},[t._v("\n              ¡Genial, tu compra ha sido procesada!\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"label-register"},[t._v("Recuerda, en tu perfil estan tus órdenes de compras ")])],1)])])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"Ok",color:"bluesito",size:"md"},on:{click:function(s){return t.GotoHome()}}})],1),a("q-separator")],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.showErrorFaltaStock,callback:function(s){t.showErrorFaltaStock=s},expression:"showErrorFaltaStock"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[a("h4",{staticClass:"title-error"},[t._v("¡Oh no!")]),a("q-item-label",{staticClass:"subtitle-error"},[t._v("Tenemos un problema: ")])],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"text-msg-error"},[t._v(" "+t._s(t.rep_stock)+" "),a("br"),a("br")]),a("q-item-label",{staticClass:"text-msg-error"},[t._v(' Haz click en "ok" para volver al carrito y verificar el producto. ')])],1)])])]),a("q-separator"),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"OK",color:"red-7",size:"sm"},on:{click:function(s){return t.GoToShoppingCart()}}})],1),a("q-separator")],1)],1)],1)},l=[],n=a("5a9e"),r=a("5cff"),d=Object(i["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[],s=[];return{cantidad:0,products:s,banks:t,bankSelect:[],subtotal:0,Tpago:"",rep_stock:"",bankSelectShow:!1,showProcessPayment:!1,showProcessPaymentEfectivo:!1,showSaleReady:!1,showErrorFaltaStock:!1,Referencia:""}},methods:{increaseProdQty(){this.cantidad++},decreaseProdQty(){this.cantidad>0&&this.cantidad--},listCart(){n["a"].getListCart().subscribe({next:t=>{this.products=t.results},complete:()=>{this.SubTotal()}})},SubTotal(){this.subtotal=0,this.products.forEach((t=>this.subtotal=Number(this.subtotal)+Number(t.amount)))},viewMetodo(){if("EFECTIVO"===this.Tpago)this.bankSelect=[];else{r["a"].Getpayments(this.Tpago).subscribe({next:t=>{this.banks=t,console.log(this.banks)},complete:()=>{}})}},Selectbank(t){this.banks.forEach((s=>{s.id==t&&(this.bankSelect=s,this.bankSelectShow=!0)}))},PurchaseNext(){""!=this.Tpago&&0!=this.bankSelect.length?this.showProcessPayment=!0:"EFECTIVO"==this.Tpago&&0===this.bankSelect.length?this.showProcessPaymentEfectivo=!0:this.showNotif("No Has Seleccionado una forma de pago","red-7")},PurchaseEnd(){let t={payment_type:this.Tpago,bank:this.bankSelect,amount:this.subtotal,reference:this.Referencia,products:this.products};r["a"].SaveSale(t).subscribe({next:t=>{this.showProcessPaymentEfectivo=!1,this.showProcessPayment=!1,this.showSaleReady=!0},complete:()=>{},error:t=>{this.showProcessPayment=!1,this.rep_stock=t,this.showErrorFaltaStock=!0}})},showNotif(t,s){this.$q.notify({message:t,color:s,actions:[{label:"Ok",color:"white",handler:()=>{}}]})},GotoHome(){this.showSaleReady=!1,this.$router.push("/")},GoToShoppingCart(){this.showErrorFaltaStock=!1,this.$router.push("/cart")}},mounted(){const t=this;t.listCart()},watch:{Tpago(t){this.viewMetodo()}}}),p=d,m=(a("4749"),a("2877")),v=a("f09f"),u=a("3786"),C=a("a370"),b=a("9c40"),h=a("068f"),q=a("eb85"),x=a("24e8"),_=a("65c6"),f=a("6ac5"),w=a("66e5"),k=a("4074"),g=a("27f9"),S=a("4b7e"),y=a("0170"),T=a("7f67"),P=a("eebe"),E=a.n(P),N=Object(m["a"])(p,o,l,!1,null,null,null),R=N.exports;E()(N,"components",{QCard:v["a"],QRadio:u["a"],QCardSection:C["a"],QBtn:b["a"],QImg:h["a"],QSeparator:q["a"],QDialog:x["a"],QToolbar:_["a"],QToolbarTitle:f["a"],QItem:w["a"],QItemSection:k["a"],QInput:g["a"],QCardActions:S["a"],QItemLabel:y["a"]}),E()(N,"directives",{ClosePopup:T["a"]});var Q=Object(i["defineComponent"])({name:"Purchase",components:{PurchaseComponent:R}}),O=Q,F=a("9989"),I=Object(m["a"])(O,e,c,!1,null,null,null);s["default"]=I.exports;E()(I,"components",{QPage:F["a"]})},e2a9:function(t,s,a){}}]);