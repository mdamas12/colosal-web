(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"92b5":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("q-breadcrumbs",{staticClass:"q-px-md text-grey q-pt-md breadcrumbs-promotion bg-azul-tenue",attrs:{gutter:"sm","active-color":"grey"}},[o("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),o("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs text-bluesito",attrs:{label:"Promociones"}})],1),o("div",{staticClass:"container-list-promotions q-pa-md"},[o("div",{staticClass:"row q-mb-md"},t._l(t.promotions,(function(e){return o("div",{key:e.id,staticClass:"col-12 col-md-4 q-pa-md q-gutter-sm"},[o("q-card",{staticClass:"my-card card2 q-pa-md text-center cursor-pointer"},[o("q-card-section",{staticClass:"text-center"},[o("q-img",{staticClass:"img-promotions",staticStyle:{"max-width":"150px",height:"150px"},attrs:{src:e.image},on:{click:function(o){return t.$router.push({path:"/promotions/detail/"+e.id+"/"})}}})],1),o("q-card-section",{on:{click:function(o){return t.$router.push({path:"/promotions/detail/"+e.id+"/"})}}},[o("div",{staticClass:"text-name-promotion"},[t._v("\n                "+t._s(e.name)+" \n              ")]),o("div",{staticClass:"text-description-promotion"},[t._v("\n                "+t._s(e.description)+"\n              ")])]),o("q-card-section",[o("div",{staticClass:"text-price-promotion"},[t._v("\n                 "+t._s(e.coin)+" "+t._s(e.price)+"\n              ")]),e.quantity<1?o("div",[o("div",{staticClass:"text-quantity-none-promotion"},[t._v("NO Disponible")])]):t._e()]),o("q-card-section",{staticClass:"q-pt-none"},[e.quantity>0?o("div",{staticClass:"q-pt-none"},[o("div",{staticClass:"row items-center justify-around"},[o("div",{staticClass:"col-lg-5"},[o("div",{staticClass:"row items-center justify-center"},[o("q-card",{attrs:{flat:"",bordered:""}},[o("div",{staticClass:"col-8 q-px-lg q-py-sm quantity-product-feature"},[t._v("\n                                "+t._s(e.shopp)+"\n                              ")])]),o("div",{staticClass:"col-3"},[o("div",{staticClass:"row items-center"},[o("div",{staticClass:"col justify-center"},[o("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"indigo-10",icon:"add",size:"xs"},on:{click:function(o){return t.increaseProdQty(e.index)}}})],1)]),o("div",{staticClass:"row items-center"},[o("div",{staticClass:"col justify-center"},[o("q-btn",{staticClass:"btn-product",attrs:{flat:"",round:"",color:"redsito",icon:"remove",size:"xs"},on:{click:function(o){return t.decreaseProdQty(e.index)}}})],1)])])],1)]),o("div",{staticClass:"col-lg-7"},[o("div",{staticClass:"row items-center justify-center"},[o("div",{staticClass:"col justify-center q-pt-xs"},[o("q-btn",{staticClass:"btn-product",attrs:{label:"Agregar",color:"blue","text-color":"white",icon:"shopping_cart",size:"md"},on:{click:function(o){return o.stopPropagation(),t.Shoppingcart(e.id,e.shopp)}}})],1)])])])]):t._e()])],1)],1)})),0)]),o("div",{staticClass:"row justify-center q-mb-md"},[t.numberOfPages>1?o("q-pagination",{attrs:{min:t.currentPage,max:t.numberOfPages,"direction-links":!0,color:"black","boundary-numbers":!1},on:{click:function(e){return t.getAllPromotions()}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}}):t._e()],1),o("footer-component")],1)},s=[],a=o("e4fd"),n=o("e741"),r=o("9410"),c=o("5a9e"),l=o("f508"),d=Object(a["defineComponent"])({components:{FooterComponent:n["a"]},data(){return{load:!0,promotions:[],incart:[],pagination:{page:1,rowsPerPage:25,rowsNumber:0,currentPage:1},id:null,limit:25,numberOfPages:0,count:0,currentPage:1,totalPages:1}},created(){this.getAllPromotions()},mounted(){setTimeout((()=>{this.load=!1}),3e3)},methods:{getAllPromotions(){this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),r["a"].getPromotions(this.limit,this.offset).subscribe({next:t=>{let e=t.results;this.verifySession()&&c["a"].getListCart().subscribe({next:t=>{let o=t.results;for(let i=0;i<e.length;i++){let t=!1;e[i].shopp=0,e[i].index=i;for(let s=0;s<o.length;s++)null!=o[s].promotion&&0==t&&e[i].id==o[s].promotion.id&&(this.incart[i]=!0,e[i].shopp=o[s].quantity,t=!0),null!=o[s].promotion&&0==t&&e[i].id!=o[s].promotion.id&&(this.incart[i]=!1)}this.promotions=e},error:t=>{console.log(t.response.data)},complete:()=>{}}),this.numberOfPages=Math.ceil(t.count/this.limit)},complete:()=>console.log("[complete]")})},Shoppingcart(t,e){if(1==this.verifySession()){if(0==e)return void this.showNotif("Debe agregar cantidad en producto","red-10");l["a"].show();const o={promotion:t,quantity:e};c["a"].savePromotionShoppingCart(o).subscribe({next:t=>{l["a"].hide(),"200"==t.status?this.showNotif(t.data,"red-8"):this.showNotif(t.data,"blue-8")},complete:()=>{l["a"].hide()},error:()=>{l["a"].hide(),this.showNotif("Error al agregar producto","red-10")}})}else this.showNotif("Debe Iniciar Sesión","red-10"),this.showInitSession=!0},verifySession(){let t=localStorage.getItem("token"),e=localStorage.getItem("username");return null!=t&&null!=e},increaseProdQty(t){this.promotions[t].shopp<this.promotions[t].quantity&&(this.promotions[t].shopp+=1)},decreaseProdQty(t){this.promotions[t].shopp>0&&(this.promotions[t].shopp-=1)},showNotif(t,e){this.$q.notify({message:t,color:e,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"Ok",color:"white",handler:()=>{}}]})}}}),p=d,u=(o("eb48"),o("2877")),m=o("9989"),h=o("ead5"),g=o("079e"),b=o("293e"),f=o("66e5"),v=o("4074"),q=o("0170"),C=o("eb85"),y=o("65c6"),x=o("6ac5"),w=o("1c1c"),P=o("f09f"),Q=o("a370"),_=o("068f"),k=o("9c40"),S=o("3b16"),j=o("714f"),I=o("eebe"),N=o.n(I),O=Object(u["a"])(p,i,s,!1,null,null,null);e["default"]=O.exports;N()(O,"components",{QPage:m["a"],QBreadcrumbs:h["a"],QBreadcrumbsEl:g["a"],QSkeleton:b["a"],QItem:f["a"],QItemSection:v["a"],QItemLabel:q["a"],QSeparator:C["a"],QToolbar:y["a"],QToolbarTitle:x["a"],QList:w["a"],QCard:P["a"],QCardSection:Q["a"],QImg:_["a"],QBtn:k["a"],QPagination:S["a"]}),N()(O,"directives",{Ripple:j["a"]})},a6de:function(t,e,o){},eb48:function(t,e,o){"use strict";o("a6de")}}]);