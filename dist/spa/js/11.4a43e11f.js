(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"455f":function(t,s,e){"use strict";e.r(s);var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("example-component",{attrs:{title:"Purchase Detail component"}}),e("purchase-detail-component")],1)},a=[],i=e("e4fd"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-shopping-cart-title "},[e("div",{staticClass:"row q-pa-xs"},[e("div",{staticClass:"col2"},[e("q-btn",{staticClass:"btn-back",attrs:{flat:"",icon:"keyboard_backspace",color:"bluesito",label:"Regresar"},on:{click:function(s){return t.$router.back()}}})],1)]),e("div",{staticClass:"row justify-evenly items-start content-center"},[e("div",{staticClass:"col-8 q-mx-md"},[e("div",{staticClass:"col-8"},[e("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[e("q-item",[e("q-item-section",[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col text-center"},[e("q-item-label",{staticClass:"title-detail-purchase"},[t._v("Detalle de Compra")])],1)])])],1),e("q-separator"),e("div",{staticClass:"row items-center q-pa-sm"},[e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tNro Orden\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.id)+"\n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tCliente\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.customer.first_name)+"\n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tFecha\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.created.substring(0,10))+"\n\t\t\t\t\t\t\t\t\t")])])],1)])]),e("div",{staticClass:"row items-center q-pa-sm"},[e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tForma de Pago\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.payment_type)+"\n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBanco\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.bank.name)+"\n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tMoneda\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.coin)+"\n\t\t\t\t\t\t\t\t\t")])])],1)])]),e("div",{staticClass:"row items-center q-pa-sm"},[e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tMonto\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.coin)+" "+t._s(t.purchase.amount)+"\n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tReferencia\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.reference)+" \n\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-sm text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.status)+" \n\t\t\t\t\t\t\t\t\t")])])],1)])])],1)],1),e("div",{staticClass:"row q-mx-xs"},t._l(t.purchase.detail_sale,(function(s){return e("div",{key:s.id,staticClass:"col-12 col-sm-12"},[null!=s.product?e("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-12 col-md text-center"},[e("q-img",{staticClass:"img-product",attrs:{src:s.product.image}})],1),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.brand.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-md text-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCantidad\n\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity_sold)+"\n\t\t\t\t\t\t\t\t\t\t")])])],1),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-name-product text-bluesito"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.amount)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)])])]):t._e(),null!=s.promotion?e("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-12 col-md text-center"},[e("q-img",{staticClass:"img-product",attrs:{src:s.promotion.image}})],1),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.description)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-md text-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCantidad\n\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity_sold)+"\n\t\t\t\t\t\t\t\t\t\t")])])],1),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s(s.promotion.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),e("div",{staticClass:"col-12 col-md text-center"},[e("div",{staticClass:"column items-center"},[e("q-card-section",{staticClass:"q-pa-sm text-center"},[e("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col text-name-product text-bluesito"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s(s.amount)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)])])]):t._e()],1)})),0)]),1==t.reference_band?e("div",{staticClass:"col-12 col-md q-mb-md"},[e("q-card",{staticClass:"my-card q-mx-md q-mt-xl",attrs:{flat:"",bordered:""}},[e("q-card-section",{staticClass:"bg-blue-1"},[e("div",{staticClass:"column items-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md title-reference-purchase"},[t._v("\n\t\t\t\t\t\t\t\t\tAgregar Referencia de pago\n\t\t\t\t\t\t\t\t")])])])]),e("q-separator"),e("q-item-section",[e("div",{staticClass:"row q-pt-md"},[e("div",{staticClass:"col-12 col-md q-px-md"},[e("q-input",{staticClass:"font-input",attrs:{label:"Escribe Numero de Referencia"},model:{value:t.referencecode,callback:function(s){t.referencecode=s},expression:"referencecode"}})],1)])]),e("q-card-section",[e("div",{staticClass:"column items-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-btn",{attrs:{color:"blue-9","text-color":"white",label:"Guardar"},on:{click:function(s){return t.updatePurchase()}}})],1)])])])],1)],1):t._e()])])},o=[],r=e("5cff"),l=Object(i["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[];return{cantidad:0,products:[],subtotal:0,purchase:t,referencecode:"",reference_band:!0}},methods:{getPurchaseDetail(){let t=this.$route.params.id;r["a"].GetPurchaseDetail(t).subscribe({next:t=>{this.purchase=t,null==this.purchase.bank&&(this.purchase.bank={name:"N/A"}),"EFECTIVO"==this.purchase.payment_type&&(this.purchase.reference="N/A"),(this.purchase.reference||"EFECTIVO"==this.purchase.payment_type)&&(this.reference_band=!1),console.log(this.purchase)},complete:()=>{}})},updatePurchase(){let t=this.$route.params.id,s={reference:this.referencecode};r["a"].updateReference(t,s).subscribe({next:t=>{this.getPurchaseDetail()},complete:()=>{this.showNotif("Referencia Registrada con Exito","green-8")},error:()=>{this.showNotif("Error al Tratar de Guardar la Referencia","red-7")}})},showNotif(t,s){this.$q.notify({message:t,color:s,actions:[{label:"Ok",color:"white",handler:()=>{}}]})}},mounted(){const t=this;t.getPurchaseDetail()}}),d=l,m=(e("8a35"),e("2877")),u=e("9c40"),v=e("f09f"),p=e("66e5"),C=e("4074"),x=e("0170"),_=e("eb85"),h=e("a370"),q=e("068f"),f=e("27f9"),b=e("eebe"),g=e.n(b),w=Object(m["a"])(d,n,o,!1,null,null,null),y=w.exports;g()(w,"components",{QBtn:u["a"],QCard:v["a"],QItem:p["a"],QItemSection:C["a"],QItemLabel:x["a"],QSeparator:_["a"],QCardSection:h["a"],QImg:q["a"],QInput:f["a"]});var k=Object(i["defineComponent"])({name:"PurchaseDetail",components:{PurchaseDetailComponent:y}}),P=k,O=e("9989"),Q=Object(m["a"])(P,c,a,!1,null,null,null);s["default"]=Q.exports;g()(Q,"components",{QPage:O["a"]})},4818:function(t,s,e){},"8a35":function(t,s,e){"use strict";e("4818")}}]);