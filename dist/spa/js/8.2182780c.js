(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{4045:function(t,e,a){},"6eb0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"container-products q-pt-md"},[a("q-breadcrumbs",{staticClass:"q-px-md text-grey",attrs:{gutter:"sm","active-color":"grey"}},[a("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),a("q-breadcrumbs-el",{staticClass:"texto-breadcrumbs",attrs:{label:"Todos los productos"}})],1),a("div",[a("q-layout",{staticClass:"rounded-borders",staticStyle:{"min-height":"1570px"},attrs:{view:"hHh Lpr lff",container:""}},[a("q-header",{staticClass:"bg-hueso"},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu",color:"bluesito"},on:{click:function(e){t.drawer=!t.drawer}}}),a("div",[a("div",{staticClass:"text-h7 q-mr-sm texto-filter"},[t._v("Ordenar por:")])]),a("div",{staticClass:"q-pr-md"},[a("q-select",{staticClass:"texto-filter",attrs:{borderless:"","transition-show":"scale","transition-hide":"scale",options:t.optionsFilter,"option-label":"label",behavior:"menu","option-value":"value","map-options":""},on:{input:function(e){return t.optionsOrder()}},model:{value:t.orderBy,callback:function(e){t.orderBy=e},expression:"orderBy"}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-white"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",[a("q-item-label",{staticClass:"font-category-splitter q-pa-md"},[t._v("Categorías")]),t._l(t.categories,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"font-title-splitter",attrs:{clickable:"",active:e.id===t.idCategorie,"active-class":"my-menu-link"},on:{click:function(a){return t.getId(e.id)}}},[a("q-item-section",[t._v(t._s(e.name))])],1)})),a("q-separator")],2)],1)],1),a("q-page-container",[a("div",{staticClass:"q-pa-md"},[t.load?a("div",{staticClass:"row"},t._l(9,(function(t){return a("div",{key:t.id,staticClass:"col-4 col-12-md q-gutter-sm q-pa-md"},[a("q-card",{staticClass:"q-pt-md skeleton-card-all-products"},[a("q-card-section",{staticClass:"q-gutter-md",attrs:{align:"center"}},[a("q-skeleton",{attrs:{type:"circle",size:"130px",bordered:""}})],1),a("q-card-section",[a("q-item-section",{staticClass:"q-mx-md q-py-sm"},[a("q-item-label",[a("q-skeleton",{attrs:{type:"text"}})],1),a("q-item-label",{attrs:{caption:""}},[a("q-skeleton",{attrs:{type:"text"}})],1)],1)],1),a("q-card-section",[a("q-item-section",{staticClass:"q-mx-md"},[a("q-item-label",[a("q-skeleton",{staticClass:"q-px-md q-mb-sm",attrs:{type:"text"}})],1)],1)],1),a("q-card-actions",{attrs:{align:"center"}},[a("q-skeleton",{staticClass:"q-mb-sm",attrs:{type:"QBtn",bordered:""}})],1)],1)],1)})),0):a("div",{staticClass:"row justify-center q-mb-md"},[a("div",{staticClass:"col justify-center text-center"},[a("div",{staticClass:"row justify-center"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-12 col-md-4 q-pa-md q-gutter-sm cursor-pointer"},[a("q-card",{staticClass:"my-card card2 q-pa-md",on:{click:function(a){return t.$router.push({path:"/products/detail/"+e.id+"/"})}}},[a("q-card-section",{staticClass:"text-center"},[a("q-img",{staticClass:"img-product2",attrs:{src:"http://minimarketcolosal.com/api"+e.image}})],1),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-name-product"},[t._v("\n                      "+t._s(e.name)+"\n                    ")]),a("div",{staticClass:"text-description-product"},[t._v("\n                      "+t._s(e.description)+"\n                    ")])]),a("q-card-section",{staticClass:"text-center q-pt-none"},[a("div",{staticClass:"text-price-product"},[t._v("\n                      "+t._s(e.price)+"\n                    ")])]),a("q-card-section",{staticClass:"text-center"},[a("q-btn",{staticClass:"btn-product",attrs:{label:"Agregar",color:"redsito","text-color":"white",icon:"shopping_cart",size:"md"}})],1)],1)],1)})),0)])]),a("div",{staticClass:"row justify-center"},[t.numberOfPages>1?a("q-pagination",{attrs:{min:t.currentPage,max:t.numberOfPages,"direction-links":!0,color:"black","boundary-numbers":!1},on:{click:function(e){return t.getPagination()}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}}):t._e()],1)])])],1)],1),a("footer-component")],1)},i=[],r=a("e4fd"),o=a("ed50"),n=a("1856"),c=a("e741"),l=a("bc78");const{getPaletteColor:d}=l["a"],p=[{icon:"inbox",label:"Inbox",separator:!0},{icon:"send",label:"Outbox",separator:!1},{icon:"delete",label:"Trash",separator:!1},{icon:"error",label:"Spam",separator:!0},{icon:"settings",label:"Settings",separator:!1},{icon:"feedback",label:"Send Feedback",separator:!1},{icon:"help",iconColor:"primary",label:"Help",separator:!0}];var u=Object(r["defineComponent"])({components:{FooterComponent:c["a"]},props:["idCategorie"],data(){return{splitterModel:30,current:3,load:!0,drawer:!1,menuList:p,products:[],categories:[],search:"",page:1,currentPage:1,totalPages:1,limit:25,numberOfPages:0,count:0,orderBy:{label:"Categoria",value:2},optionsFilter:[{label:"Categoria",value:2},{label:"Nombre",value:1}],id:null,offset:0,pagination:{page:1,rowsPerPage:25,rowsNumber:0,currentPage:1},filtroPagination:1,idCategorie:null}},created(){this.getAllCategories(),this.idCategorie?this.getId(this.idCategorie):this.optionsOrder()},methods:{getAllCategories(){n["a"].getListCategories().subscribe({next:t=>{console.log(t),this.categories=t}})},getId(t){console.log("estoy en esta categoria:",t),this.load=!0,this.idCategorie=t,this.filtroPagination=2,this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),o["a"].getProductsCategorie(t,this.limit,this.offset).subscribe({next:t=>{this.products=t.results,this.numberOfPages=Math.ceil(t.count/this.limit),this.load=!1},complete:()=>console.log("[complete]")})},optionsOrder(){this.load=!0,this.filtroPagination=1,this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),o["a"].orderProducts(this.orderBy.value,this.limit,this.offset).subscribe({next:t=>{this.products=t.results,this.numberOfPages=Math.ceil(t.count/this.limit),this.load=!1},complete:()=>console.log("[complete]")})},optionsOrder2(){this.load=!0,this.pagination.currentPage=this.pagination.page,this.offset=this.limit*(this.pagination.page-1),o["a"].getProviders(this.limit,this.offset).subscribe({next:t=>{this.products=t.results,this.numberOfPages=Math.ceil(t.count/this.limit),console.log(this.numberOfPages),this.load=!1},complete:()=>console.log("[complete]")})},getPagination(){switch(this.filtroPagination){case 1:this.optionsOrder();break;case 2:this.getId(idCategorie);break}}}}),g=u,m=(a("93f1"),a("2877")),b=a("9989"),h=a("ead5"),f=a("079e"),q=a("4d5a"),C=a("e359"),v=a("65c6"),x=a("9c40"),k=a("ddd8"),y=a("9404"),P=a("4983"),w=a("1c1c"),Q=a("0170"),_=a("66e5"),O=a("4074"),I=a("eb85"),S=a("09e3"),B=a("27f9"),j=a("f09f"),L=a("a370"),A=a("293e"),F=a("4b7e"),M=a("068f"),H=a("3b16"),N=a("b498"),T=a("714f"),$=a("eebe"),z=a.n($),E=Object(m["a"])(g,s,i,!1,null,null,null);e["default"]=E.exports;z()(E,"components",{QPage:b["a"],QBreadcrumbs:h["a"],QBreadcrumbsEl:f["a"],QLayout:q["a"],QHeader:C["a"],QToolbar:v["a"],QBtn:x["a"],QSelect:k["a"],QDrawer:y["a"],QScrollArea:P["a"],QList:w["a"],QItemLabel:Q["a"],QItem:_["a"],QItemSection:O["a"],QSeparator:I["a"],QPageContainer:S["a"],QInput:B["a"],QCard:j["a"],QCardSection:L["a"],QSkeleton:A["a"],QCardActions:F["a"],QImg:M["a"],QPagination:H["a"],QColor:N["a"]}),z()(E,"directives",{Ripple:T["a"]})},"93f1":function(t,e,a){"use strict";a("4045")}}]);