(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"7d98":function(t,e,a){"use strict";a("9df9")},"9df9":function(t,e,a){},a665:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"container-detail-product q-pt-md"},[i("q-breadcrumbs",{staticClass:"q-px-md text-grey menu-breadcrumbs",staticStyle:{"font-size":"15px"},attrs:{gutter:"sm","active-color":"grey"}},[i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Volver a Home",icon:"arrow_back",to:"/"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Todos los productos",to:"/products"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Almacén"}})],1),i("div",{staticClass:"container-detail-product2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md q-gutter-sm fondo-img-detail-product"},[i("q-carousel",{attrs:{animated:"",swipeable:"",padding:"",thumbnails:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(this.getDataDetail.picture,(function(t,e){return i("q-carousel-slide",{key:e+1,staticClass:"border-img-slide column flex-center no-margin",attrs:{"img-src":t.image,name:e+1}})})),1)],1),i("div",{staticClass:"col q-gutter-sm q-pa-md"},[i("div",{staticClass:"text-title-product"},[t._v(t._s(t.getDataDetail.name))]),i("div",{staticClass:"text-ID-product q-mb-md"},[t._v(t._s(t.getDataDetail.brand.name)+" | ID Producto: "+t._s(t.getDataDetail.id)+" ")]),i("q-separator",{staticClass:"mb-detail"}),i("div",{staticClass:"text-fventa-product"},[t._v("Costo:")]),i("div",{staticClass:"text-price_fventa-product mb-detail"},[t._v(t._s(t.getDataDetail.coin)+" "+t._s(t.getDataDetail.price))]),i("div",{staticClass:"title-nota-extra"},[i("b",[t._v("Descripción del producto:")])]),i("div",{staticClass:"text-nota-extra text-justify q-pr-md mb-detail"},[i("q-item-label",{attrs:{lines:"2"}},[t._v("\n                        "+t._s(t.getDataDetail.description)+"\n                    ")])],1),0==t.stock_full?i("div",{staticClass:"text-msj-stock"},[i("b",[t._v(t._s(t.msj_quantity))])]):t._e(),1==t.stock_full?i("div",{staticClass:"text-msj-stock-full"},[i("b",[t._v(t._s(t.msj_quantity))])]):t._e(),t.getDataDetail.quantity>0?i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 col-sm-4"},[i("div",{staticClass:"border"},[i("span",{staticClass:"border"},[i("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"md"},on:{click:function(e){return t.decreaseProdQty()}}}),t._v("\n                            "+t._s(t.counter)+"\n                            "),i("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"md"},on:{click:function(e){return t.increaseProdQty()}}})],1)])]),""==t.status_cart?i("div",{staticClass:"col-6 col-md mb-detail"},[i("q-btn",{staticClass:"btn-product",attrs:{label:"AGREGAR",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(e){return t.Shoppingcart()}}})],1):t._e(),""!=t.status_cart?i("div",{staticClass:"col-6 col-md mb-detail"},[i("q-btn",{staticClass:"btn-product",attrs:{label:"Actualizar",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(e){return t.Shoppingcart()}}})],1):t._e(),i("div",{staticClass:"text-msj-cart text-center mb-detail"},[i("b",[t._v(t._s(t.status_cart))])])]):t._e()],1)])]),i("featured-products-carousel-component"),i("footer-component"),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-btn",{attrs:{fab:"",color:"white"},on:{click:function(e){return t.goToWz()}}},[i("img",{staticStyle:{width:"25px"},attrs:{src:a("c60a")}})])],1)],1)},s=[],o=a("e4fd"),r=a("4cd5"),c=a("e741"),n=a("ed50");class l{constructor(t){this.id=t.id,this.name=t.name,this.description=t.description,this.coin=t.coin,this.price=t.price,this.quantity=t.quantity,this.image=t.image,this.category=t.category,this.brand=t.brand,this.detail_product=t.detail_product;let e=t.picture;if(this.picture=e.map((t=>new d(t))),this.image){let t={image:this.image};this.picture.push(new d(t))}}}class d{constructor(t){this.image=t.image}}var u=a("5a9e"),h=a("f508"),p=Object(o["defineComponent"])({components:{FeaturedProductsCarouselComponent:r["a"],FooterComponent:c["a"]},data(){return{counter:0,status_cart:"",stock_full:!1,slide:1,msj_quantity:"",showInitSession:!1,getDataDetail:[{id:this.$route.params.id,name:"",description:"",coin:"",price:"",quantitity:null,image:"",category:[{name:""}],brand:[{name:""}]}]}},mounted(){this.getProductDetail(),this.verifyShoppingcart(),this.refreshComponent()},methods:{increaseProdQty(){this.counter<=this.getDataDetail.quantity&&this.counter++},decreaseProdQty(){this.counter>1&&this.counter--},getProductDetail(){n["a"].getProductDetail(this.$route.params.id).subscribe({next:t=>{this.getDataDetail=new l(t),this.getDataDetail.quantity<=5&&this.getDataDetail.quantity>1?this.msj_quantity="Solo Quedan "+this.getDataDetail.quantity+" Disponibles":1==this.getDataDetail.quantity?this.msj_quantity="Solo Queda "+this.getDataDetail.quantity+" Disponible":this.getDataDetail.quantity<1?this.msj_quantity="NO Disponible":(this.msj_quantity=this.getDataDetail.quantity+" Disponibles",this.stock_full=!0)}})},refreshComponent(){this.$watch((()=>this.$route.params.id),((t,e)=>{this.getProductDetail()}))},verifySession(){let t=localStorage.getItem("token"),e=localStorage.getItem("username");return null!=t&&null!=e},verifyShoppingcart(){u["a"].searchShoppingcart(this.$route.params.id).subscribe({next:t=>{this.counter=t,this.status_cart="Este producto se encuentra en su Carrito de Compra"},complete:()=>{},error:t=>{this.counter=0}})},Shoppingcart(){if(1==this.verifySession()){if(0==this.counter)return void this.showNotif("Debe agregar cantidad en producto","red-10");if(this.counter>this.getDataDetail.quantity)return void this.showNotif("La Cantidad Supera al stock de este Producto","red-10");h["a"].show();const t={product:this.getDataDetail.id,quantity:this.counter};u["a"].saveShoppingCart(t).subscribe({next:t=>{h["a"].hide(),"200"==t.status?(this.showNotif(t.data,"red-8"),this.getProductDetail()):(this.showNotif(t.data,"blue-8"),this.verifyShoppingcart())},complete:()=>{h["a"].hide()},error:()=>{h["a"].hide(),this.showNotif("Error al agregar producto","red-10")}})}else this.showNotif("Debe Iniciar Sesión","red-10"),this.showInitSession=!0},showNotif(t,e){this.$q.notify({message:t,color:e,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})},goToWz(){window.location.href="https://wa.me/584128770825?text=Hola%20buen%20dia."}}}),m=p,b=(a("7d98"),a("2877")),g=a("9989"),f=a("ead5"),D=a("079e"),_=a("880c"),v=a("62cd"),q=a("f09f"),C=a("a370"),y=a("eb85"),w=a("9c40"),x=a("0170"),S=a("de5e"),k=a("eebe"),Q=a.n(k),P=Object(b["a"])(m,i,s,!1,null,null,null);e["default"]=P.exports;Q()(P,"components",{QPage:g["a"],QBreadcrumbs:f["a"],QBreadcrumbsEl:D["a"],QCarousel:_["a"],QCarouselSlide:v["a"],QCard:q["a"],QCardSection:C["a"],QSeparator:y["a"],QBtn:w["a"],QItemLabel:x["a"],QPageSticky:S["a"]})}}]);