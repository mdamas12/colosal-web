(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"149d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("example-component",{attrs:{title:"Example component"}}),e("shopping-cart-component")],1)},i=[],o=e("e4fd"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("div",{staticClass:"container-shopping-cart-title "},[a("q-breadcrumbs",{staticClass:"q-px-md text-grey q-pt-md breadcrumbs-carrito",staticStyle:{"font-size":"15px"},attrs:{gutter:"sm","active-color":"grey"}},[a("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Volver a Home",icon:"arrow_back",to:"/"}}),a("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Carrito"}})],1),a("div",{staticClass:"row q-ma-md"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"row q-my-sm q-mb-lg"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row title-text-carrito text-center"},[t._v("\n\t\t\t\t\t\t\t\t\tCarrito de compras\n\t\t\t\t\t\t\t\t")])])]),a("div",{staticClass:"row q-mx-xs"},t._l(t.products,(function(s,e){return a("div",{key:s.id,staticClass:"col-12"},[null!=s.product?a("q-card",{staticClass:"card-products-shopping q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.product.image}})],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.brand.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-3"},[a("q-card-section",[a("div",{staticClass:"text-center"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"remove",size:"sm"},on:{click:function(s){return t.decreaseProdQty(e)}}})],1),a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add",size:"sm"},on:{click:function(s){return t.increaseProdQty(e)}}})],1)])])],1),a("div",{staticClass:"col-3 text-center q-pt-sm"},[a("q-btn",{staticClass:"btn-shopp",attrs:{label:"Actualizar",flat:"",rounded:"",color:"redsito","text-color":"red",icon:"shopping_cart",dense:"",size:"sm"},on:{click:function(s){return t.Shoppingcart(e)}}})],1)])],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-price-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s(s.product.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.product.coin)+" "+t._s((s.product.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-1 text-center"},[a("q-btn",{attrs:{flat:"",round:"","text-color":"redsito",icon:"delete_outline"},on:{click:function(e){return t.confirmDelete(s.id)}}})],1)])]):t._e(),null!=s.promotion?a("q-card",{staticClass:"card-products-shopping q-mb-md",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("q-img",{staticClass:"img-product q-ml-md",attrs:{src:s.promotion.image}})],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.description)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-3"},[a("q-card-section",[a("div",{staticClass:"text-center"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"remove",size:"sm"},on:{click:function(s){return t.decreaseProdQty(e)}}})],1),a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.quantity)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col"},[a("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"add",size:"sm"},on:{click:function(s){return t.increaseProdQty(e)}}})],1)])])],1),a("div",{staticClass:"col-3 text-center q-pt-sm"},[a("q-btn",{staticClass:"btn-shopp",attrs:{label:"Actualizar",flat:"",rounded:"",color:"redsito","text-color":"red",icon:"shopping_cart",dense:"",size:"sm"},on:{click:function(s){return t.Shoppingcart(e)}}})],1)])],1),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPrecio\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-description-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s(s.promotion.price)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-2 text-center"},[a("div",{staticClass:"column items-center"},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSUBTOTAL\n\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"col text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.promotion.coin)+" "+t._s((s.promotion.price*s.quantity).toFixed(2))+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)]),a("div",{staticClass:"col-12 col-sm-1 text-center"},[a("q-btn",{attrs:{flat:"",round:"","text-color":"redsito",icon:"delete_outline"},on:{click:function(e){return t.confirmDelete(s.id)}}})],1)])]):t._e()],1)})),0)]),a("div",{staticClass:"col-12 col-md-4 text-center padd-ts"},[a("q-card",{staticClass:"card-products-shopping q-mx-md q-mt-sm",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tSubtotal\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-2 wrap self-end text-name-product-car"},[a("strong",[t._v("$"+t._s(t.subtotal.toFixed(2)))])])])])]),a("q-card-section",[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tDescuentos \n\t\t\t\t\t\t\t")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-2 wrap self-end text-name-product-car"},[a("strong",[t._v("$0.00")])])])])]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row justify-between text-center"},[a("div",{staticClass:"col-2 self-start text-name-product-car"},[t._v("\n\t\t\t\t\t\t\t\tTOTAL\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-2 wrap self-end text-total-product-car"},[a("strong",[t._v("$"+t._s(t.subtotal.toFixed(2)))])])])])]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"column items-center"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"btn-car",attrs:{color:"redsito","text-color":"white","icon-right":"arrow_forward_ios",label:"finalizar pedido",size:"md"},on:{click:function(s){return t.goToPurchase()}}})],1)])])])],1)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:t.ShowMsg,callback:function(s){t.ShowMsg=s},expression:"ShowMsg"}},[a("q-card",{staticClass:"my-card",staticStyle:{"max-width":"100%",width:"440px"}},[a("q-toolbar",{staticClass:"text-bluesito"},[a("q-toolbar-title",{staticClass:"title-session"},[a("h4",{staticClass:"title-error"},[t._v("¡Advertencia!")]),a("q-item-label",{staticClass:"subtitle-error"},[t._v("La Cantidad Solicitada no está disponible ")])],1),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close",round:""}})],1),a("q-separator"),a("q-item-section",[a("div",{staticClass:"row q-pt-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"container text-center q-pa-md"},[a("q-item-label",{staticClass:"text-msg-error"},[t._v(' Haz click en "ok" y verifica tus productos. ')])],1)])])]),a("q-separator"),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"btn-init-session q-mb-md",attrs:{label:"OK",color:"red-7",size:"sm"},on:{click:function(s){return t.CloseShowMsg()}}})],1),a("q-separator")],1)],1)],1),a("footer-component"),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{fab:"",color:"white"},on:{click:function(s){return t.goToWz()}}},[a("img",{staticStyle:{width:"25px"},attrs:{src:e("c60a")}})])],1)],1)},r=[],n=e("5a9e"),l=e("e741"),d=e("f508"),u=Object(o["defineComponent"])({components:{FooterComponent:l["a"]},data(){var t=[],s=[];return{cantidad:0,products:t,subtotal:0,counter:s,ShowMsg:!1}},methods:{verifySession(){let t=localStorage.getItem("token"),s=localStorage.getItem("username");return null!=t&&null!=s},increaseProdQty(t){null!=this.products[t].product?this.products[t].quantity<this.products[t].product.quantity&&(this.products[t].quantity+=1,this.SubTotal()):this.products[t].quantity<this.products[t].promotion.quantity&&(this.products[t].quantity+=1,this.SubTotal())},decreaseProdQty(t){this.products[t].quantity>1&&(this.products[t].quantity--,this.SubTotal())},listCart(){n["a"].getListCart().subscribe({next:t=>{this.products=t.results;for(let s=0;s<this.products.length;s++)null!=this.products[s].product?(this.products[s].quantity>this.products[s].product.quantity&&(this.ShowMsg=!0,this.products[s].quantity=this.products[s].product.quantity),this.counter[s]=this.products[s].quantity):(this.products[s].quantity>this.products[s].promotion.quantity&&(this.ShowMsg=!0,this.products[s].quantity=this.products[s].promotion.quantity),this.counter[s]=this.products[s].quantity)},complete:()=>{this.SubTotal()}})},SubTotal(){this.subtotal=0,this.products.forEach((t=>{t.product?this.subtotal=Number(this.subtotal)+Number(t.product.price)*Number(t.quantity):this.subtotal=Number(this.subtotal)+Number(t.promotion.price)*Number(t.quantity)}))},DeleteItemShop(t){n["a"].DeleteShopCart(t).subscribe({next:t=>{this.showNotif(t,"blue-8")},complete:()=>{this.listCart()},error:t=>{this.showNotif(t,"red-8")}})},Shoppingcart(t){if(1==this.verifySession()){let s={};if(0==this.products[t].quantity)return void this.showNotif("Debe agregar cantidad en producto","red-10");if(null!=this.products[t].product){if(this.products[t].quantity>this.products[t].product.quantity)return void this.showNotif("La Cantidad Supera al stock de este Producto","red-10");if(this.counter[t]==this.products[t].quantity)return void this.showNotif("No has modificado la cantidad","red-10");s={quantity:this.products[t].quantity,product:this.products[t].product.id,promotion:null}}else{if(this.products[t].quantity>this.products[t].promotion.quantity)return void this.showNotif("La Cantidad Supera la disponible","red-10");if(this.counter[t]==this.products[t].quantity)return void this.showNotif("No has modificado la cantidad","red-10");s={quantity:this.products[t].quantity,promotion:this.products[t].promotion.id,product:null}}d["a"].show();let e=this.products[t].id;n["a"].UpdateShoppingCart(e,s).subscribe({complete:t=>{d["a"].hide()},next:t=>{d["a"].hide(),this.showNotif(t,"blue-8"),this.listCart()},error:t=>{d["a"].hide(),this.showNotif(t,"red-10")}})}else this.showNotif("Debe Iniciar Sesión","red-10")},goToPurchase(){this.$router.push("/purchases")},CloseShowMsg(){this.ShowMsg=!1},confirmDelete(t){this.$q.dialog({title:"Confirmar",message:"¿Quieres Eliminar este producto?",cancel:!0,persistent:!0,color:"red-10"}).onOk((()=>{this.DeleteItemShop(t)})).onCancel((()=>{}))},showNotif(t,s){this.$q.notify({message:t,color:s,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})},goToWz(){window.location.href="https://wa.me/584128770825?text=Hola%20buen%20dia."}},mounted(){const t=this;t.listCart()}}),p=u,m=(e("64a7"),e("2877")),h=e("9989"),C=e("ead5"),v=e("079e"),b=e("f09f"),q=e("068f"),f=e("a370"),x=e("9c40"),g=e("eb85"),y=e("24e8"),w=e("65c6"),_=e("6ac5"),S=e("0170"),k=e("4074"),Q=e("4b7e"),N=e("66e5"),T=e("de5e"),z=e("7f67"),P=e("eebe"),D=e.n(P),O=Object(m["a"])(p,c,r,!1,null,null,null),I=O.exports;D()(O,"components",{QPage:h["a"],QBreadcrumbs:C["a"],QBreadcrumbsEl:v["a"],QCard:b["a"],QImg:q["a"],QCardSection:f["a"],QBtn:x["a"],QSeparator:g["a"],QDialog:y["a"],QToolbar:w["a"],QToolbarTitle:_["a"],QItemLabel:S["a"],QItemSection:k["a"],QCardActions:Q["a"],QItem:N["a"],QPageSticky:T["a"]}),D()(O,"directives",{ClosePopup:z["a"]});var M=Object(o["defineComponent"])({name:"ShoppingCart",components:{ShoppingCartComponent:I}}),L=M,$=Object(m["a"])(L,a,i,!1,null,null,null);s["default"]=$.exports;D()($,"components",{QPage:h["a"]})},"64a7":function(t,s,e){"use strict";e("bc82")},bc82:function(t,s,e){}}]);