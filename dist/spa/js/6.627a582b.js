(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"562b":function(t,o,i){"use strict";i.r(o);var a=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("q-page",{staticClass:"container-detail-promotion q-pt-md"},[i("q-breadcrumbs",{staticClass:"q-px-md text-grey breadcrumbs-promotions",attrs:{gutter:"sm","active-color":"grey"}},[i("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Todas las promociones",to:"/promotions"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Almacén"}})],1),i("div",{staticClass:"container-detail-promotion2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md q-gutter-sm q-pa-md"},[i("q-carousel",{attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:t.slide,callback:function(o){t.slide=o},expression:"slide"}},t._l(t.images,(function(t,o){return i("q-carousel-slide",{key:o+1,staticClass:"border-img-slide",attrs:{name:o+1,"img-src":t}})})),1)],1),i("div",{staticClass:"col q-gutter-sm q-pa-md"},[i("div",{staticClass:"text-title-promotion"},[t._v(t._s(t.promotion.name))]),i("div",{staticClass:"text-ID-promotion q-mb-md"},[t._v("Categoría: "+t._s(t.promotion.category.name))]),i("q-separator",{staticClass:"mb-detail"}),i("div",{staticClass:"text-fventa-promotion"},[t._v("Costo:")]),i("div",{staticClass:"text-price_fventa-promotion mb-detail"},[t._v(t._s(t.promotion.coin)+"  "+t._s(t.promotion.price))]),t.promotion.quantity>0?i("div",{staticClass:"mb-detail"},[i("div",{staticClass:"text-detail-promotion"},[t._v("Cantidad Disponible :")]),i("div",{staticClass:"text-quantity"},[t._v(t._s(t.promotion.quantity))])]):t._e(),t.promotion.quantity<1?i("div",{staticClass:"mb-detail"},[i("div",{staticClass:"text-quantity-none"},[t._v("NO Disponible")])]):t._e(),i("div",{staticClass:"text-quantity-promotion"},[t._v("cantidad :")]),t.promotion.quantity<1?i("div",{staticClass:"row mb-detail",attrs:{disabled:"true"}},[i("div",{staticClass:"col-6 col-sm-4"},[i("div",{staticClass:"border"},[i("span",{staticClass:"border"},[i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"md"},on:{click:function(o){return t.decreaseProdQty()}}}),t._v("\n                  "+t._s(t.counter)+"\n                "),i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"md"},on:{click:function(o){return t.increaseProdQty()}}})],1)])]),i("div",{staticClass:"col-6 col-md"},[i("q-btn",{staticClass:"btn-promotion",attrs:{label:"Agregar",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(o){return t.ToShoppingcart()}}})],1)]):t._e(),t.promotion.quantity>0?i("div",{staticClass:"row mb-detail"},[i("div",{staticClass:"col-6 col-md"},[i("div",{staticClass:"border"},[i("span",{staticClass:"border"},[i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"md"},on:{click:function(o){return t.decreaseProdQty()}}}),t._v("\n                  "+t._s(t.counter)+"\n                "),i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"md"},on:{click:function(o){return t.increaseProdQty()}}})],1)])]),i("div",{staticClass:"col-6 col-md"},[i("q-btn",{staticClass:"btn-promotion",attrs:{label:"Agregar",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(o){return t.ToShoppingcart()}}})],1)]):t._e(),i("div",{staticClass:"title-nota-extra mb-detail"},[t._v(t._s(t.status_cart))]),i("div",{staticClass:"title-nota-extra"},[i("b",[t._v("Productos:")])]),i("q-list",{staticClass:"rounded-borders",attrs:{dense:""}},t._l(t.promotion.promotion_detail,(function(o){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o.product.id,attrs:{clickable:""}},[i("q-item-section",{staticClass:"title-nota-extra"},[t._v("\n             "+t._s(o.quantity)+" - "+t._s(o.product.name)+"\n            ")])],1)})),1)],1)])]),i("div",{staticClass:"container-description-promotion q-px-md q-pt-lg"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"text-title-promotion"},[t._v("Descripción de la promoción")]),i("div",{staticClass:"text-description q-pa-md text-justify"},[t._v(t._s(t.promotion.description))])])])]),i("featured-products-carousel-component"),i("footer-component")],1)},s=[],e=i("e4fd"),r=i("4cd5"),n=i("e741"),c=i("9410"),l=i("5a9e"),d=i("f508"),m=Object(e["defineComponent"])({components:{FeaturedProductsCarouselComponent:r["a"],FooterComponent:n["a"]},data(){return{counter:0,slide:1,images:[],status_cart:"",promotion:[{id:this.$route.params.id,name:"",description:"",coin:"",price:"",quantity:null,image:null,category:[{name:""}],promotion_detail:[]}]}},mounted(){this.getPromotionDetail(),this.refreshComponent()},methods:{verifySession(){let t=localStorage.getItem("token"),o=localStorage.getItem("username");return null!=t&&null!=o},getPromotionDetail(){c["a"].getPromotion(this.$route.params.id).subscribe({next:t=>{this.promotion=t;t.promotion_detail;let o=1;for(this.images[0]=this.promotion.image,o=0;o<+t.promotion_detail.length;o++)this.images[o+1]=t.promotion_detail[o].product.image;this.verifyShoppingcart()}})},ToShoppingcart(){if(1==this.verifySession()){if(this.counter<1)return void this.showNotif("Debe agregar una cantidad","red-10");if(this.counter>this.promotion.quantity)return void this.showNotif("La Cantidad Supera lo disponible de esta Promoción","red-10");d["a"].show();const t={promotion:this.promotion.id,quantity:this.counter};l["a"].savePromotionShoppingCart(t).subscribe({next:t=>{d["a"].hide(),"200"==t.status?this.showNotif(t.data,"red-8"):(this.showNotif(t.data,"blue-8"),this.verifyShoppingcart())},complete:()=>{d["a"].hide()},error:t=>{d["a"].hide(),this.showNotif(t,"red-10")}})}else this.showNotif("Inicia Sesión para agrerar a tu carrito de compra","red-10")},verifyShoppingcart(){l["a"].searchPromotionShoppingcart(this.$route.params.id).subscribe({next:t=>{this.counter=t.data,this.status_cart="Promoción está en su Carrito de Compra"},complete:()=>{}})},increaseProdQty(){this.counter<this.promotion.quantity&&this.counter++},decreaseProdQty(){this.counter>1&&this.counter--},showNotif(t,o){this.$q.notify({message:t,color:o,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})},refreshComponent(){this.$watch((()=>this.$route.params.id),((t,o)=>{this.getPromotionDetail()}))}}}),p=m,u=(i("a705"),i("2877")),b=i("9989"),h=i("ead5"),v=i("079e"),C=i("880c"),g=i("62cd"),f=i("eb85"),_=i("9c40"),q=i("1c1c"),y=i("66e5"),x=i("4074"),w=i("714f"),P=i("eebe"),S=i.n(P),Q=Object(u["a"])(p,a,s,!1,null,null,null);o["default"]=Q.exports;S()(Q,"components",{QPage:b["a"],QBreadcrumbs:h["a"],QBreadcrumbsEl:v["a"],QCarousel:C["a"],QCarouselSlide:g["a"],QSeparator:f["a"],QBtn:_["a"],QList:q["a"],QItem:y["a"],QItemSection:x["a"]}),S()(Q,"directives",{Ripple:w["a"]})},"8a19":function(t,o,i){},a705:function(t,o,i){"use strict";i("8a19")}}]);