(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"149d":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("example-component",{attrs:{title:"Example component"}}),a("shopping-cart-component")],1)},o=[],e=a("e4fd"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-shopping-cart-title "},[a("div",{staticClass:"row"}),a("div",{staticClass:"row q-ma-md"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"row q-my-xl"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[a("q-card-header",[a("div",{staticClass:"row title-text"},[t._v("\n\t\t\t\t\t\t\t\t\tCarrito de compras\n\t\t\t\t\t\t\t\t")])])],1)],1)]),a("div",{staticClass:"row q-mx-xs"},t._l(t.products,(function(s,i){return a("div",{key:s.id,staticClass:"col-12"},[a("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-2"},[a("q-img",{staticClass:"img-product q-ml-md",attrs:{src:t.process.env.API_URL+s.product.image}})],1),a("div",{staticClass:"col-2"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.description)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-3"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[s.product.quantity>5?a("div",[a("b",[t._v("Existen "+t._s(s.product.quantity)+" en Disponibles")])]):t._e(),s.product.quantity<=5&&s.product.quantity>0?a("div",[a("b",[t._v("Solo quedan "+t._s(s.product.quantity)+" Disponibles")])]):t._e(),0==s.product.quantity?a("div",[a("b",[t._v(" Este Producto no esta Disponible")])]):t._e()]),a("div",[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row justify-evenly items-center"},[a("div",{staticClass:"col q-mr-sm"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"remove"},on:{click:function(s){return t.decreaseProdQty(i)}}})],1),a("div",{staticClass:"col text-name-product self-center q-pl-lg"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add"},on:{click:function(s){return t.increaseProdQty(i)}}})],1)])])],1)],1),a("div",{staticClass:"col-3 col-sm"},[a("q-btn",{staticClass:"btn-shopp",attrs:{label:"Actualizar cantidad",color:"red-8","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(s){return t.Shoppingcart(i)}}})],1)])],1),a("div",{staticClass:"col-2"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"column items-start"},[a("q-card-section",[a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price*s.quantity)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-1"},[a("q-btn",{attrs:{flat:"",round:"","text-color":"red",icon:"delete_outline"},on:{click:function(a){return t.DeleteItemShop(s.id)}}})],1)])])],1)})),0)]),a("div",{staticClass:"col-4"},[a("q-card",{staticClass:"my-card q-mx-md q-mt-xl",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tSubtotal\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$"+t._s(t.subtotal))])])])]),a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tDescuentos\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$0.00")])])])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"col-2 self-start"},[t._v("\n\t\t\t\t\t\t\t\tTOTAL\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"col-2 wrap self-end"},[a("strong",[t._v("$"+t._s(t.subtotal))])])])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{color:"red-10","text-color":"white","icon-right":"arrow_forward_ios",label:"finalizar pedido"},on:{click:function(s){return t.goToPurchase()}}})],1)])])])],1)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:t.ShowMsg,callback:function(s){t.ShowMsg=s},expression:"ShowMsg"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[a("h4",{staticClass:"title-error"},[t._v("¡Advertencia!")]),a("q-item-label",{staticClass:"subtitle-error"},[t._v("La Cantidad Solicitada no esta disponible ")])],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"text-msg-error"},[t._v(' Haz click en "ok" y verifica tus productos. ')])],1)])])]),a("q-separator"),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"OK",color:"red-7",size:"sm"},on:{click:function(s){return t.CloseShowMsg()}}})],1),a("q-separator")],1)],1)],1)},c=[],n=a("5a9e"),l=a("f508"),d=Object(e["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[],s=[];return{cantidad:0,products:t,subtotal:0,counter:s,ShowMsg:!1}},methods:{verifySession(){let t=localStorage.getItem("token"),s=localStorage.getItem("username");return null!=t&&null!=s},increaseProdQty(t){this.products[t].quantity<this.products[t].product.quantity&&(this.products[t].quantity+=1,this.SubTotal())},decreaseProdQty(t){this.products[t].quantity>1&&(this.products[t].quantity--,this.SubTotal())},listCart(){n["a"].getListCart().subscribe({next:t=>{this.products=t.results;for(let s=0;s<this.products.length;s++)this.products[s].quantity>this.products[s].product.quantity&&(this.ShowMsg=!0,this.products[s].quantity=this.products[s].product.quantity),this.counter[s]=this.products[s].quantity},complete:()=>{this.SubTotal()}})},SubTotal(){this.subtotal=0,this.products.forEach((t=>this.subtotal=Number(this.subtotal)+Number(t.product.price)*Number(t.quantity)))},DeleteItemShop(t){n["a"].DeleteShopCart(t).subscribe({complete:()=>{this.listCart()}})},Shoppingcart(t){if(1==this.verifySession()){if(0==this.products[t].quantity)return void this.showNotif("Debe agregar cantidad en producto","red-10");if(this.products[t].quantity>this.products[t].product.quantity)return void this.showNotif("La Cantidad Supera al stock de este Producto","red-10");if(this.counter[t]==this.products[t].quantity)return void this.showNotif("no has modificado la cantidad","red-10");l["a"].show();const s={quantity:this.products[t].quantity,product:this.products[t].product.id};let a=this.products[t].id;n["a"].UpdateShoppingCart(a,s).subscribe({complete:t=>{l["a"].hide()},next:t=>(l["a"].hide(),"200"==t.status?(this.showNotif(t.data,"red-8"),void this.listCart()):(this.showNotif(t.data,"blue-8"),void this.listCart())),error:t=>{l["a"].hide(),this.showNotif("Error al agregar producto","red-10")}})}else this.showNotif("Debe Iniciar Sesion","red-10")},goToPurchase(){this.$router.push("/purchases")},CloseShowMsg(){this.ShowMsg=!1},showNotif(t,s){this.$q.notify({message:t,color:s,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})}},mounted(){const t=this;t.listCart()}}),u=d,p=(a("64a7"),a("2877")),h=a("f09f"),v=a("068f"),m=a("a370"),C=a("9c40"),q=a("eb85"),b=a("24e8"),f=a("65c6"),w=a("6ac5"),g=a("0170"),y=a("4074"),_=a("4b7e"),S=a("66e5"),x=a("7f67"),Q=a("eebe"),k=a.n(Q),T=Object(p["a"])(u,r,c,!1,null,null,null),N=T.exports;k()(T,"components",{QCard:h["a"],QImg:v["a"],QCardSection:m["a"],QBtn:C["a"],QSeparator:q["a"],QDialog:b["a"],QToolbar:f["a"],QToolbarTitle:w["a"],QItemLabel:g["a"],QItemSection:y["a"],QCardActions:_["a"],QItem:S["a"]}),k()(T,"directives",{ClosePopup:x["a"]});var P=Object(e["defineComponent"])({name:"ShoppingCart",components:{ShoppingCartComponent:N}}),D=P,I=a("9989"),j=Object(p["a"])(D,i,o,!1,null,null,null);s["default"]=j.exports;k()(j,"components",{QPage:I["a"]})},"64a7":function(t,s,a){"use strict";a("bc82")},bc82:function(t,s,a){}}]);