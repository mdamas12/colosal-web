(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"455f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("example-component",{attrs:{title:"Purchase Detail component"}}),a("purchase-detail-component")],1)},c=[],i=a("e4fd"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-shopping-cart-title "},[a("div",{staticClass:"row"}),a("div",{staticClass:"row justify-evenly items-start content-center"},[a("div",{staticClass:"col-8 q-mx-md"},[a("div",{staticClass:"row full-width q-my-xl"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text"},[t._v("\n\t\t\t\t\t\t\t\t\tDetalle De Compra\n\t\t\t\t\t\t\t\t")])])],1)],1)]),a("div",{staticClass:"col-8"},[a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tReferencia\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.id)+"\n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tcliente\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t  "+t._s(t.purchase.customer.first_name)+"\n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tFecha\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t    "+t._s(t.purchase.created)+"\n\t\t\t\t\t\t\t\t")])])],1)])]),a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tForma de Pago\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t "+t._s(t.purchase.payment_type)+"\n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tBanco\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.bank.name)+"\n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tMoneda\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.coin)+"\n\t\t\t\t\t\t\t\t")])])],1)])]),a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tMonto\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.coin)+" "+t._s(t.purchase.amount)+"\n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tReferencia\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.reference)+" \n\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-desc"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.purchase.status)+" \n\t\t\t\t\t\t\t\t")])])],1)])])])],1),a("div",{staticClass:"row q-mx-xs"},t._l(t.purchase.detail_sale,(function(s){return a("div",{key:s.id,staticClass:"col-12"},[a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-1"},[a("q-img",{staticClass:"img-product",attrs:{src:"http://localhost:8000"+s.product.image}})],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.description)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-3"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCantidad\n\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity_sold)+"\n\t\t\t\t\t\t\t\t\t\t")])])],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.amount)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)])])])],1)})),0)]),1==t.reference_band?a("div",{staticClass:"col-3"},[a("q-card",{staticClass:"my-card q-mx-md q-mt-xl",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("\n\t\t\t\t\t\t\t\t\tAgregar Referencia de pago\n\t\t\t\t\t\t\t\t")])])])]),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col-12 col-md q-px-md"},[a("q-input",{staticClass:"font-input",attrs:{label:"Escribe Numero de Referencia"},model:{value:t.referencecode,callback:function(s){t.referencecode=s},expression:"referencecode"}})],1)])]),a("q-card-section",[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{color:"blue-9","text-color":"white",label:"Guardar"},on:{click:function(s){return t.updatePurchase()}}})],1)])])])],1)],1):t._e()])])},r=[],o=a("5cff"),l=Object(i["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[];return{cantidad:0,products:[],subtotal:0,purchase:t,referencecode:"",reference_band:!0}},methods:{getPurchaseDetail(){let t=this.$route.params.id;o["a"].GetPurchaseDetail(t).subscribe({next:t=>{this.purchase=t,null==this.purchase.bank&&(this.purchase.bank={name:"N/A"}),"EFECTIVO"==this.purchase.payment_type&&(this.purchase.reference="N/A"),""==this.purchase.reference&&"EFECTIVO"!=this.purchase.payment_type||(this.reference_band=!1),console.log(this.purchase)},complete:()=>{}})},updatePurchase(){let t=this.$route.params.id,s={reference:this.referencecode};o["a"].updateReference(t,s).subscribe({next:t=>{this.getPurchaseDetail()},complete:()=>{this.showNotif("Referencia Registrada con Exito","green-8")},error:()=>{this.showNotif("Error al Tratar de Guardar la Referencia","red-7")}})},showNotif(t,s){this.$q.notify({message:t,color:s,actions:[{label:"Ok",color:"white",handler:()=>{}}]})}},mounted(){const t=this;t.getPurchaseDetail()}}),d=l,u=(a("8a35"),a("2877")),v=a("f09f"),m=a("a370"),p=a("068f"),C=a("eb85"),h=a("4074"),_=a("27f9"),f=a("9c40"),x=a("eebe"),q=a.n(x),b=Object(u["a"])(d,n,r,!1,null,null,null),w=b.exports;q()(b,"components",{QCard:v["a"],QCardSection:m["a"],QImg:p["a"],QSeparator:C["a"],QItemSection:h["a"],QInput:_["a"],QBtn:f["a"]});var g=Object(i["defineComponent"])({name:"PurchaseDetail",components:{PurchaseDetailComponent:w}}),y=g,P=a("9989"),k=Object(u["a"])(y,e,c,!1,null,null,null);s["default"]=k.exports;q()(k,"components",{QPage:P["a"]})},4818:function(t,s,a){},"8a35":function(t,s,a){"use strict";a("4818")}}]);