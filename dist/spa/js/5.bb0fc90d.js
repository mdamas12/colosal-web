(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"7d98":function(t,e,a){"use strict";a("9df9")},"9df9":function(t,e,a){},a665:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"container-detail-product q-pt-md"},[a("q-breadcrumbs",{staticClass:"q-px-md text-grey",attrs:{gutter:"sm","active-color":"grey"}},[a("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),a("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Todos los productos",to:"/products"}}),a("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Almacén"}})],1),a("div",{staticClass:"container-detail-product2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md q-gutter-sm q-pa-md"},[a("q-carousel",{attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(this.getDataDetail.picture,(function(t,e){return a("q-carousel-slide",{key:e+1,staticClass:"border-img-slide",attrs:{"img-src":t.image,name:e+1}})})),1)],1),a("div",{staticClass:"col q-gutter-sm q-pa-md"},[a("div",{staticClass:"text-title-product"},[t._v(t._s(t.getDataDetail.name))]),a("div",{staticClass:"text-title-brand"},[t._v(t._s(t.getDataDetail.brand.name))]),a("div",{staticClass:"text-ID-product"},[t._v("ID Producto: "+t._s(t.getDataDetail.id))]),a("div",{staticClass:"text-detail-product"},[t._v("Detail:")]),a("div",{staticClass:"text-price-product"},[t._v(t._s(t.getDataDetail.price))]),a("div",{staticClass:"text-fventa-product"},[t._v("Mayor:")]),a("div",{staticClass:"text-price_fventa-product"},[t._v(t._s(t.getDataDetail.price))]),a("div",{staticClass:"text-quantity-product"},[t._v("Cantidad:")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md"},[a("div",{staticClass:"border"},[a("span",{staticClass:"border"},[a("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"md"},on:{click:function(e){return t.decreaseProdQty()}}}),t._v("\n                            "+t._s(t.counter)+"\n                            "),a("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"md"},on:{click:function(e){return t.increaseProdQty()}}})],1)])]),""==t.status_cart?a("div",{staticClass:"col-6 col-md"},[a("q-btn",{staticClass:"btn-product",attrs:{label:"AGREGAR",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(e){return t.Shoppingcart()}}})],1):t._e(),""!=t.status_cart?a("div",{staticClass:"col-6 col-md"},[a("q-btn",{staticClass:"btn-product",attrs:{label:"Actualizar",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(e){return t.Shoppingcart()}}})],1):t._e()]),a("div",{staticClass:"text-msj-cart"},[a("b",[t._v(t._s(t.status_cart))])]),a("div",{staticClass:"title-nota-extra"},[a("b",[t._v("Descripción del producto:")])]),a("div",{staticClass:"text-nota-extra text-justify q-pr-md"},[t._v(t._s(t.getDataDetail.description))]),a("div",{staticClass:"text-msj-stock"},[a("b",[t._v("Solo quedan "+t._s(t.getDataDetail.quantity)+" en stock")])])])])]),a("featured-products-carousel-component"),a("footer-component")],1)},i=[],r=a("e4fd"),o=a("4cd5"),c=a("e741"),n=a("ed50");class d{constructor(t){this.id=t.id,this.name=t.name,this.description=t.description,this.coin=t.coin,this.price=t.price,this.quantity=t.quantity,this.image=t.image,this.category=t.category,this.brand=t.brand,this.detail_product=t.detail_product;let e=t.picture;if(this.picture=e.map((t=>new l(t))),this.image){let t={image:this.image};this.picture.push(new l(t))}}}class l{constructor(t){this.image=t.image}}var u=a("5a9e"),p=a("f508"),h=Object(r["defineComponent"])({components:{FeaturedProductsCarouselComponent:o["a"],FooterComponent:c["a"]},data(){return{counter:0,status_cart:"",slide:1,showInitSession:!1,getDataDetail:[{id:this.$route.params.id,name:"",description:"",coin:"",price:"",quantitity:null,image:"",category:[{name:""}],brand:[{name:""}]}]}},mounted(){this.getProductDetail(),this.verifyShoppingcart(),this.refreshComponent()},methods:{increaseProdQty(){this.counter<=this.getDataDetail.quantity&&this.counter++},decreaseProdQty(){this.counter>1&&this.counter--},getProductDetail(){n["a"].getProductDetail(this.$route.params.id).subscribe({next:t=>{this.getDataDetail=new d(t)}})},refreshComponent(){this.$watch((()=>this.$route.params.id),((t,e)=>{this.getProductDetail()}))},verifySession(){let t=localStorage.getItem("token"),e=localStorage.getItem("username");return null!=t&&null!=e},verifyShoppingcart(){u["a"].searchShoppingcart(this.$route.params.id).subscribe({next:t=>{this.counter=t,this.status_cart="Este producto se encuentra en su Carrito de Compra"},complete:()=>{},error:t=>{this.counter=0}})},Shoppingcart(){if(1==this.verifySession()){if(0==this.counter)return void this.showNotif("Debe agregar cantidad en producto","red-10");if(this.counter>this.getDataDetail.quantity)return void this.showNotif("La Cantidad Supera al stock de este Producto","red-10");p["a"].show();const t={product:this.getDataDetail.id,quantity:this.counter};u["a"].saveShoppingCart(t).subscribe({next:t=>{p["a"].hide(),"200"==t.status?(this.showNotif(t.data,"red-8"),this.getProductDetail()):(this.showNotif(t.data,"blue-8"),this.verifyShoppingcart())},complete:()=>{p["a"].hide()},error:()=>{p["a"].hide(),this.showNotif("Error al agregar producto","red-10")}})}else this.showNotif("Debe Iniciar Sesion","red-10"),this.showInitSession=!0},showNotif(t,e){this.$q.notify({message:t,color:e,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})}}}),m=h,g=(a("7d98"),a("2877")),b=a("9989"),v=a("ead5"),f=a("079e"),C=a("880c"),D=a("62cd"),_=a("9c40"),q=a("eebe"),y=a.n(q),w=Object(g["a"])(m,s,i,!1,null,null,null);e["default"]=w.exports;y()(w,"components",{QPage:b["a"],QBreadcrumbs:v["a"],QBreadcrumbsEl:f["a"],QCarousel:C["a"],QCarouselSlide:D["a"],QBtn:_["a"]})}}]);