(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"562b":function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("q-page",{staticClass:"container-detail-promotion q-pt-md"},[i("q-breadcrumbs",{staticClass:"q-px-md text-grey",attrs:{gutter:"sm","active-color":"grey"}},[i("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Todas las promociones",to:"/promotions"}}),i("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Almacén"}})],1),i("div",{staticClass:"container-detail-promotion2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md q-gutter-sm q-pa-md"},[i("q-carousel",{attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:t.slide,callback:function(o){t.slide=o},expression:"slide"}},t._l(t.promotion.promotion_detail,(function(t,o){return i("q-carousel-slide",{staticClass:"border-img-slide",attrs:{name:o+1,"img-src":"http://minimarketcolosal.com/api"+t.product.image}})})),1)],1),i("div",{staticClass:"col q-gutter-sm q-pa-md"},[i("div",{staticClass:"text-title-promotion"},[t._v(t._s(t.promotion.name))]),i("div",{staticClass:"text-title-brand"},[t._v(t._s(t.promotion.category.name))]),i("div",{staticClass:"text-ID-promotion"},[t._v("ID Promoción: "+t._s(t.promotion.id))]),i("div",{staticClass:"text-detail-promotion"},[t._v("Detail:")]),i("div",{staticClass:"text-price-promotion"},[t._v(t._s(t.promotion.price))]),i("div",{staticClass:"text-fventa-promotion"},[t._v("Mayor:")]),i("div",{staticClass:"text-price_fventa-promotion"},[t._v(t._s(t.promotion.price))]),i("div",{staticClass:"text-quantity-promotion"},[t._v("Cantidad:")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 col-md"},[i("div",{staticClass:"border"},[i("span",{staticClass:"border"},[i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"md"},on:{click:function(o){t.counter-=1}}}),t._v("\n                  "+t._s(t.counter)+"\n                "),i("q-btn",{staticClass:"btn-promotion",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"md"},on:{click:function(o){t.counter+=1}}})],1)])]),i("div",{staticClass:"col-6 col-md"},[i("q-btn",{staticClass:"btn-promotion",attrs:{label:"Agregar",color:"red-10","text-color":"white",icon:"shopping_cart",size:"md"}})],1)]),i("div",{staticClass:"title-nota-extra"},[i("b",[t._v("Productos:")])]),i("q-list",{staticClass:"rounded-borders",attrs:{dense:""}},t._l(t.promotion.promotion_detail,(function(o){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",[t._v("\n              - "+t._s(o.product.name)+"\n            ")])],1)})),1)],1)])]),i("div",{staticClass:"container-description-promotion q-px-md q-pt-lg"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"text-title-promotion"},[t._v("Descripción de la promoción")]),i("div",{staticClass:"text-description q-pa-md text-justify"},[t._v(t._s(t.promotion.description))])])])]),i("featured-products-carousel-component"),i("footer-component")],1)},e=[],a=i("e4fd"),r=i("4cd5"),n=i("e741"),c=i("9410"),l=Object(a["defineComponent"])({components:{FeaturedProductsCarouselComponent:r["a"],FooterComponent:n["a"]},data(){return{counter:0,slide:1,promotion:[{id:this.$route.params.id,name:"",description:"",coin:"",price:"",quantity:null,image:"",category:[{name:""}],promotion_detail:[]}]}},mounted(){this.getPromotionDetail(),this.refreshComponent()},methods:{getPromotionDetail(){c["a"].getPromotion(this.$route.params.id).subscribe({next:t=>{console.log(t),this.promotion=t}})},refreshComponent(){this.$watch((()=>this.$route.params.id),((t,o)=>{this.getPromotionDetail()}))}}}),d=l,m=(i("a705"),i("2877")),p=i("9989"),u=i("ead5"),v=i("079e"),b=i("880c"),C=i("62cd"),_=i("9c40"),f=i("1c1c"),q=i("66e5"),g=i("4074"),x=i("714f"),h=i("eebe"),w=i.n(h),Q=Object(m["a"])(d,s,e,!1,null,null,null);o["default"]=Q.exports;w()(Q,"components",{QPage:p["a"],QBreadcrumbs:u["a"],QBreadcrumbsEl:v["a"],QCarousel:b["a"],QCarouselSlide:C["a"],QBtn:_["a"],QList:f["a"],QItem:q["a"],QItemSection:g["a"]}),w()(Q,"directives",{Ripple:x["a"]})},"8a19":function(t,o,i){},a705:function(t,o,i){"use strict";i("8a19")}}]);