(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"149d":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("q-page",[i("example-component",{attrs:{title:"Example component"}}),i("shopping-cart-component")],1)},o=[],a=i("e4fd"),c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container-shopping-cart-title "},[i("q-breadcrumbs",{staticClass:"q-px-md text-grey q-pt-md breadcrumbs-carrito",attrs:{gutter:"sm","active-color":"grey"}},[i("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Carrito"}})],1),i("div",{staticClass:"row q-ma-md"},[i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"row q-my-sm"},[i("div",{staticClass:"col"},[i("q-card",{staticClass:"q-mb-sm q-pa-lg",attrs:{flat:"",bordered:""}},[i("q-card-header",[i("div",{staticClass:"row title-text text-center"},[t._v("\n\t\t\t\t\t\t\t\t\tCarrito de compras\n\t\t\t\t\t\t\t\t")])])],1)],1)]),i("div",{staticClass:"row q-mx-xs"},t._l(t.products,(function(s,e){return i("div",{key:s.id,staticClass:"col-12"},[null!=s.product?i("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.product.image}})],1),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center text-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.brand.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-3"},[i("q-card-section",[i("div",{staticClass:"col text-description-product-car text-center"},[s.product.quantity>5?i("div",[i("b",[t._v("Existen "+t._s(s.product.quantity)+" en Disponibles")])]):t._e(),s.product.quantity<=5&&s.product.quantity>0?i("div",[i("b",[t._v("Solo quedan "+t._s(s.product.quantity)+" Disponibles")])]):t._e(),0==s.product.quantity?i("div",[i("b",[t._v(" Este Producto no esta Disponible")])]):t._e()]),i("div",{staticClass:"text-center"},[i("q-card",{attrs:{flat:"",bordered:""}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col"},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"remove"},on:{click:function(s){return t.decreaseProdQty(e)}}})],1),i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col"},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add"},on:{click:function(s){return t.increaseProdQty(e)}}})],1)])])],1),i("div",{staticClass:"col-3 text-center"},[i("q-btn",{staticClass:"btn-shopp",attrs:{label:"Actualizar cantidad",color:"redsito","text-color":"white",icon:"shopping_cart",dense:"",size:"sm"},on:{click:function(s){return t.Shoppingcart(e)}}})],1)])],1),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-price-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s((s.product.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-1 text-center"},[i("q-btn",{attrs:{flat:"",round:"","text-color":"redsito",icon:"delete_outline"},on:{click:function(i){return t.confirmDelete(s.id)}}})],1)])]):t._e(),null!=s.promotion?i("q-card",{staticClass:"my-card q-mb-md",attrs:{flat:"",bordered:""}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.promotion.image}})],1),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.brand.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-3"},[i("q-card-section",[i("div",{staticClass:"col text-description-product-car text-center"},[s.promotion.quantity>5?i("div",[i("b",[t._v("Existen "+t._s(s.promotion.quantity)+" Disponibles")])]):t._e(),s.promotion.quantity<=5&&s.promotion.quantity>0?i("div",[i("b",[t._v("Solo quedan "+t._s(s.promotion.quantity)+" Disponibles")])]):t._e(),0==s.promotion.quantity?i("div",[i("b",[t._v(" Este Producto no esta Disponible")])]):t._e()]),i("div",{staticClass:"text-center"},[i("q-card",{attrs:{flat:"",bordered:""}},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col"},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"remove"},on:{click:function(s){return t.decreaseProdQty(e)}}})],1),i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col"},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add"},on:{click:function(s){return t.increaseProdQty(e)}}})],1)])])],1),i("div",{staticClass:"col-3 col-sm"},[i("q-btn",{staticClass:"btn-shopp",attrs:{label:"Actualizar cantidad",color:"redsito","text-color":"white",icon:"shopping_cart",dense:"",size:"sm"},on:{click:function(s){return t.Shoppingcart(e)}}})],1)])],1),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s(s.promotion.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-2 text-center"},[i("div",{staticClass:"column items-center"},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),i("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s((s.promotion.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),i("div",{staticClass:"col-12 col-sm-1 text-center"},[i("q-btn",{attrs:{flat:"",round:"","text-color":"redsito",icon:"delete_outline"},on:{click:function(i){return t.confirmDelete(s.id)}}})],1)])]):t._e()],1)})),0)]),i("div",{staticClass:"col-12 col-md-4 text-center"},[i("q-card",{staticClass:"my-card q-mx-md q-mt-sm",attrs:{flat:"",bordered:""}},[i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"row justify-between text-center"},[i("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tSubtotal\n\t\t\t\t\t\t\t")]),i("div",{staticClass:"col-2 wrap self-end text-name-product-car"},[i("strong",[t._v("$"+t._s(t.subtotal.toFixed(2)))])])])]),i("q-card-section",[i("div",{staticClass:"row justify-between text-center"},[i("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tDescuentos \n\t\t\t\t\t\t\t")]),i("div",{staticClass:"col-2 wrap self-end text-name-product-car"},[i("strong",[t._v("$0.00")])])])]),i("q-separator"),i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"row justify-between text-center"},[i("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tTOTAL\n\t\t\t\t\t\t\t")]),i("div",{staticClass:"col-2 wrap self-end text-total-product-car"},[i("strong",[t._v("$"+t._s(t.subtotal.toFixed(2)))])])])]),i("q-separator"),i("q-card-section",{staticClass:"text-center"},[i("div",{staticClass:"column items-center"},[i("div",{staticClass:"row text-center"},[i("div",{staticClass:"col"},[i("q-btn",{staticClass:"btn-car",attrs:{color:"redsito","text-color":"white","icon-right":"arrow_forward_ios",label:"finalizar pedido",size:"md"},on:{click:function(s){return t.goToPurchase()}}})],1)])])])],1)],1)]),i("q-dialog",{attrs:{persistent:""},model:{value:t.ShowMsg,callback:function(s){t.ShowMsg=s},expression:"ShowMsg"}},[i("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[i("q-toolbar",{staticClass:"text-bluesito"},[i("q-toolbar-title",{staticClass:"title-session"},[i("h4",{staticClass:"title-error"},[t._v("¡Advertencia!")]),i("q-item-label",{staticClass:"subtitle-error"},[t._v("La Cantidad Solicitada no está disponible ")])],1),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),i("q-separator"),i("q-item-section",[i("div",{staticClass:"row q-pt-md"},[i("div",{staticClass:"col"},[i("div",{staticClass:"container text-center q-pa-md"},[i("q-item-label",{staticClass:"text-msg-error"},[t._v(' Haz click en "ok" y verifica tus productos. ')])],1)])])]),i("q-separator"),i("q-card-actions",{attrs:{vertical:"",align:"center"}},[i("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"OK",color:"red-7",size:"sm"},on:{click:function(s){return t.CloseShowMsg()}}})],1),i("q-separator")],1)],1)],1)},r=[],n=i("5a9e"),l=i("f508"),d=Object(a["defineComponent"])({name:"ShoppingCartComponent",data(){var t=[],s=[];return{cantidad:0,products:t,subtotal:0,counter:s,ShowMsg:!1}},methods:{verifySession(){let t=localStorage.getItem("token"),s=localStorage.getItem("username");return null!=t&&null!=s},increaseProdQty(t){null!=this.products[t].product?this.products[t].quantity<this.products[t].product.quantity&&(this.products[t].quantity+=1,this.SubTotal()):this.products[t].quantity<this.products[t].promotion.quantity&&(this.products[t].quantity+=1,this.SubTotal())},decreaseProdQty(t){this.products[t].quantity>1&&(this.products[t].quantity--,this.SubTotal())},listCart(){n["a"].getListCart().subscribe({next:t=>{this.products=t.results;for(let s=0;s<this.products.length;s++)null!=this.products[s].product?(this.products[s].quantity>this.products[s].product.quantity&&(this.ShowMsg=!0,this.products[s].quantity=this.products[s].product.quantity),this.counter[s]=this.products[s].quantity):(this.products[s].quantity>this.products[s].promotion.quantity&&(this.ShowMsg=!0,this.products[s].quantity=this.products[s].promotion.quantity),this.counter[s]=this.products[s].quantity)},complete:()=>{this.SubTotal()}})},SubTotal(){this.subtotal=0,this.products.forEach((t=>{t.product?this.subtotal=Number(this.subtotal)+Number(t.product.price)*Number(t.quantity):this.subtotal=Number(this.subtotal)+Number(t.promotion.price)*Number(t.quantity)}))},DeleteItemShop(t){n["a"].DeleteShopCart(t).subscribe({next:t=>{this.showNotif(t,"blue-8")},complete:()=>{this.listCart()},error:t=>{this.showNotif(t,"red-8")}})},Shoppingcart(t){if(1==this.verifySession()){let s={};if(0==this.products[t].quantity)return void this.showNotif("Debe agregar cantidad en producto","red-10");if(null!=this.products[t].product){if(this.products[t].quantity>this.products[t].product.quantity)return void this.showNotif("La Cantidad Supera al stock de este Producto","red-10");if(this.counter[t]==this.products[t].quantity)return void this.showNotif("No has modificado la cantidad","red-10");s={quantity:this.products[t].quantity,product:this.products[t].product.id,promotion:null}}else{if(this.products[t].quantity>this.products[t].promotion.quantity)return void this.showNotif("La Cantidad Supera la disponible","red-10");if(this.counter[t]==this.products[t].quantity)return void this.showNotif("No has modificado la cantidad","red-10");s={quantity:this.products[t].quantity,promotion:this.products[t].promotion.id,product:null}}l["a"].show();let i=this.products[t].id;n["a"].UpdateShoppingCart(i,s).subscribe({complete:t=>{l["a"].hide()},next:t=>{l["a"].hide(),this.showNotif(t,"blue-8"),this.listCart()},error:t=>{l["a"].hide(),this.showNotif(t,"red-10")}})}else this.showNotif("Debe Iniciar Sesión","red-10")},goToPurchase(){this.$router.push("/purchases")},CloseShowMsg(){this.ShowMsg=!1},confirmDelete(t){this.$q.dialog({title:"Confirmar",message:"¿Quieres Eliminar este producto?",cancel:!0,persistent:!0,color:"red-10"}).onOk((()=>{this.DeleteItemShop(t)})).onCancel((()=>{}))},showNotif(t,s){this.$q.notify({message:t,color:s,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})}},mounted(){const t=this;t.listCart()}}),u=d,p=(i("64a7"),i("2877")),m=i("ead5"),h=i("079e"),v=i("f09f"),C=i("068f"),q=i("a370"),b=i("9c40"),x=i("eb85"),f=i("24e8"),y=i("65c6"),_=i("6ac5"),g=i("0170"),w=i("4074"),S=i("4b7e"),Q=i("66e5"),k=i("7f67"),N=i("eebe"),D=i.n(N),T=Object(p["a"])(u,c,r,!1,null,null,null),P=T.exports;D()(T,"components",{QBreadcrumbs:m["a"],QBreadcrumbsEl:h["a"],QCard:v["a"],QImg:C["a"],QCardSection:q["a"],QBtn:b["a"],QSeparator:x["a"],QDialog:f["a"],QToolbar:y["a"],QToolbarTitle:_["a"],QItemLabel:g["a"],QItemSection:w["a"],QCardActions:S["a"],QItem:Q["a"]}),D()(T,"directives",{ClosePopup:k["a"]});var E=Object(a["defineComponent"])({name:"ShoppingCart",components:{ShoppingCartComponent:P}}),O=E,I=i("9989"),M=Object(p["a"])(O,e,o,!1,null,null,null);s["default"]=M.exports;D()(M,"components",{QPage:I["a"]})},"64a7":function(t,s,i){"use strict";i("bc82")},bc82:function(t,s,i){}}]);