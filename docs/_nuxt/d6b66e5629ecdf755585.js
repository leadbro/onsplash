(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,t,n){var i=n(206);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("61ebd4ae",i,!1,{sourceMap:!1})},188:function(e,t,n){var i=n(208);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("7f2dc5ee",i,!1,{sourceMap:!1})},189:function(e,t,n){var i=n(210);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("7e091c74",i,!1,{sourceMap:!1})},190:function(e,t,n){var i=n(215);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("4e0457a4",i,!1,{sourceMap:!1})},191:function(e,t,n){var i=n(217);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("5d65c562",i,!1,{sourceMap:!1})},205:function(e,t,n){"use strict";var i=n(187);n.n(i).a},206:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"\n.carousel-button{display:block;cursor:pointer;background:none;border:none;outline:none;padding:0;opacity:.6;transition:all .3s\n}\n.carousel-button__icon{fill:#fff;height:100%;width:100%\n}\n.carousel-button--prev .carousel-button__icon{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)\n}\n.carousel-button[aria-disabled=true]{cursor:default;opacity:.2\n}\n.carousel-button[aria-disabled=false]:hover{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n.carousel-button::-moz-focus-inner{border:0\n}",""])},207:function(e,t,n){"use strict";var i=n(188);n.n(i).a},208:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"\n.carousel{position:relative\n}\n.carousel__button{--carousel-button-size:1.6rem;display:none\n}\n@media (min-width:1024px){\n.carousel__button{display:block;height:var(--carousel-button-size);width:var(--carousel-button-size);position:absolute;top:calc(50% - var(--carousel-button-size) / 2)\n}\n}\n.carousel__button--prev{left:-3rem\n}\n.carousel__button--next{right:-3rem\n}\n.carousel__pagination{display:flex;align-items:center;justify-content:center;position:absolute;bottom:-4rem;left:0;right:0;z-index:4\n}\n.carousel__bullet{--carousel-bullet-size:1rem;display:block;cursor:pointer;border:none;border-radius:50%;background-color:hsla(0,0%,100%,.4);outline:none;margin:.5rem;padding:0;height:var(--carousel-bullet-size);width:var(--carousel-bullet-size);transition:background-color .5s\n}\n.carousel__bullet--active{background-color:#ff7043;background-color:var(--color-orange)\n}",""])},209:function(e,t,n){"use strict";var i=n(189);n.n(i).a},210:function(e,t,n){var i=n(211);(e.exports=n(9)(!1)).push([e.i,'\n.banner-carousel__item{margin:0;position:relative;overflow:hidden;background:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.4) 40%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));height:20.5rem\n}\n.banner-carousel__item:after{--spinner-size:4.4rem;--center-postiion:calc(50% - var(--spinner-size) / 2);content:"";display:block;background-image:url('+i(n(212))+");width:var(--spinner-size);height:var(--spinner-size);position:absolute;top:var(--center-postiion);left:var(--center-postiion);z-index:1\n}\n.banner-carousel__image{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;position:relative;z-index:2;opacity:0;transition:opacity .5s\n}\n.banner-carousel__image[lazy=error],.banner-carousel__image[lazy=loaded]{opacity:1\n}\n.banner-carousel__link{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3\n}",""])},212:function(e,t,n){e.exports=n.p+"img/27e2ef1.svg"},214:function(e,t,n){"use strict";var i=n(190);n.n(i).a},215:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,'\n.banner[data-v-36e5b820]{position:relative\n}\n.banner__container[data-v-36e5b820]{padding:4.8rem 0 6rem;position:relative;z-index:2\n}\n@media (min-width:1024px){\n.banner__container[data-v-36e5b820]{padding:10.4rem 0 6rem\n}\n}\n.banner__title[data-v-36e5b820]{color:#fff;font-size:4rem;font-family:-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;font-family:var(--font-base);margin-top:0;margin-bottom:1.6rem\n}\n@media (min-width:1024px){\n.banner__title[data-v-36e5b820]{font-size:5rem;margin-bottom:1.8rem\n}\n}\n.banner__text[data-v-36e5b820]{color:#fff;margin-bottom:2.4rem;font-size:15px\n}\n@media (min-width:1024px){\n.banner__text[data-v-36e5b820]{font-size:18px\n}\n}\n.banner__text p[data-v-36e5b820]{margin:1rem 0\n}\n.banner__button[data-v-36e5b820]{margin-bottom:2.4rem\n}\n.banner__picture[data-v-36e5b820]{overflow:hidden;z-index:1\n}\n.banner__picture[data-v-36e5b820],.banner__picture[data-v-36e5b820]:after{display:block;position:absolute;top:0;right:0;bottom:0;left:0\n}\n.banner__picture[data-v-36e5b820]:after{content:"";background:linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,.6) 40%,rgba(0,0,0,.6) 70%,rgba(0,0,0,.5));z-index:2\n}\n.banner__image[data-v-36e5b820]{display:block;-o-object-fit:cover;object-fit:cover;height:100%;width:100%;position:relative;z-index:1;opacity:0;transition:opacity .5s\n}\n.banner__image[lazy=error][data-v-36e5b820],.banner__image[lazy=loaded][data-v-36e5b820]{opacity:1\n}\n.banner__license[data-v-36e5b820]{color:hsla(0,0%,70%,.7);font-size:13px;text-align:center;padding:2rem;position:relative;z-index:4\n}\n.banner__license a[data-v-36e5b820]{color:hsla(0,0%,100%,.8);text-decoration:none;transition:color .2s\n}\n.banner__license a[data-v-36e5b820]:hover{color:#fff\n}',""])},216:function(e,t,n){"use strict";var i=n(191);n.n(i).a},217:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"\n.page-index{padding-bottom:2rem\n}\n@media (min-width:1024px){\n.page-index{padding-bottom:6rem\n}\n}\n.page-index__title{font-size:3rem;font-family:Roboto,sans-serif;font-family:var(--font-roboto);margin-right:3rem;margin-bottom:1.5rem\n}\n@media (min-width:1024px){\n.page-index__title{font-size:4rem;margin-top:4.2rem;margin-bottom:1.8rem\n}\n}\n.page-index__text{font-size:1.5rem\n}\n@media (min-width:768px){\n.page-index__text{font-size:18px\n}\n}\n.page-index__text p:first-child{margin-top:0\n}",""])},219:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-index"},[t("main-banner"),this._v(" "),this._m(0)],1)};i._withStripped=!0;var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("picture",{staticClass:"banner__picture"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bannerImage,expression:"bannerImage"}],staticClass:"banner__image"})]),e._v(" "),n("div",{staticClass:"banner__container container"},[n("h1",{staticClass:"banner__title"},[e._v("Random Unsplash images")]),e._v(" "),e._m(0),e._v(" "),n("base-button",{staticClass:"banner__button",nativeOn:{click:function(t){return e.onButtonClick(t)}}},[e._v("\n      Refresh\n    ")]),e._v(" "),n("banner-carousel",{ref:"carousel",staticClass:"banner__carousel",attrs:{slides:e.slides}})],1),e._v(" "),e._m(1)])};a._withStripped=!0;var s=n(12),r=n.n(s),o=n(218),l=n(63),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-carousel",{ref:"carousel",staticClass:"banner-carousel",attrs:{slides:e.slides},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.slide;return n("figure",{staticClass:"banner-carousel__item"},[n("a",{staticClass:"banner-carousel__link",attrs:{href:i.link,target:"_blank"}}),e._v(" "),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.imageSrc,expression:"slide.imageSrc"}],staticClass:"banner-carousel__image",attrs:{alt:i.link}})])}}])})};u._withStripped=!0;var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carousel"},[n("div",{ref:"swiper",staticClass:"swiper-container"},[n("div",{staticClass:"carousel__wrapper swiper-wrapper"},e._l(e.slides,function(t){return n("div",{key:t.id,staticClass:"swiper-slide"},[e._t("default",[n("img",{attrs:{src:t.imageSrc}})],{slide:t})],2)}))]),e._v(" "),n("div",{staticClass:"carousel__pagination"}),e._v(" "),n("carousel-button",{staticClass:"carousel__button carousel__button--prev",attrs:{type:"prev"},nativeOn:{click:function(t){return e.slidePrev(t)}}}),e._v(" "),n("carousel-button",{staticClass:"carousel__button carousel__button--next",attrs:{type:"next"},nativeOn:{click:function(t){return e.slideNext(t)}}})],1)};c._withStripped=!0;n(30),n(199);var p=n(202),d=n.n(p),m=(n(203),function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"carousel-button",class:this.buttonClass},[t("svg",{staticClass:"carousel-button__icon",attrs:{viewBox:"0 0 451.846 451.847",xmlns:"http://www.w3.org/2000/svg"}},[t("g",[t("path",{attrs:{d:"M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744\n\t\tL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284\n\t\tc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"}})])])])});m._withStripped=!0;var b={computed:{buttonClass:function(){return{"carousel-button--prev":"prev"===this.type,"carousel-button--next":"next"===this.type}}},props:{type:{type:String,default:"next"}}},_=(n(205),n(1)),v=Object(_.a)(b,m,[],!1,null,null,null);v.options.__file="AppCarouselButton.vue";var f=v.exports,h={data:function(){return{swiper:null,defaultOptions:{navigation:{nextEl:".carousel__button--next",prevEl:".carousel__button--prev"},pagination:{el:".carousel__pagination",bulletClass:"carousel__bullet",bulletActiveClass:"carousel__bullet--active",bulletElement:"button",clickable:!0,type:"bullets"},observer:!0}}},props:{slides:{type:Array,default:function(){return[]}},slidesPerView:{type:Object,default:function(){return{mobile:1,tablet:2,desktop:3}}},spaceBetween:{type:Number,default:30},loop:{type:Boolean,default:!1}},computed:{_slidesPerView:function(){return{mobile:this.slidesPerView.mobile||1,tablet:this.slidesPerView.tablet||2,desktop:this.slidesPerView.desktop||3}},swiperOptions:function(){var e={loop:this.loop,slidesPerView:this._slidesPerView.desktop,spaceBetween:this.spaceBetween,breakpoints:{767:{slidesPerView:this._slidesPerView.mobile},1023:{slidesPerView:this._slidesPerView.tablet}}};return Object.assign({},this.defaultOptions,e)}},methods:{mountInstance:function(){this.swiper||(this.swiper=new d.a(this.$refs.swiper,this.swiperOptions))},slideNext:function(){this.swiper.slideNext()},slidePrev:function(){this.swiper.slidePrev()},update:function(){this.swiper.update(),this.swiper.slideTo(0)}},mounted:function(){this.mountInstance()},components:{CarouselButton:f}},g=(n(207),Object(_.a)(h,c,[],!1,null,null,null));g.options.__file="AppCarousel.vue";var x={components:{AppCarousel:g.exports},methods:{update:function(){this.$refs.carousel.update()}},props:{slides:{type:[],default:function(){return[]}}}},w=(n(209),Object(_.a)(x,u,[],!1,null,null,null));w.options.__file="MainBannerCarousel.vue";var y=w.exports,q={computed:r()({},Object(l.b)({slides:"images/getPictures",bannerImage:"images/getBanner"})),methods:{onButtonClick:Object(o.a)(function(){this.$store.dispatch("images/getRandomImages"),this.$refs.carousel.update()},500)},components:{BannerCarousel:y}},C=(n(214),Object(_.a)(q,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner__text"},[t("p",[this._v("\n        Beautiful, free photos.\n      ")]),this._v(" "),t("p",[this._v("\n        Gifted by the world’s most generous community of photographers.\n      ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner__license"},[this._v("Read more about the "),t("a",{attrs:{target:"_blank",href:"https://unsplash.com/license"}},[this._v("Unsplash License")])])}],!1,null,"36e5b820",null));C.options.__file="MainBanner.vue";var k={data:function(){return{slidesPerView:{mobile:1}}},transition:"bounce",components:{MainBanner:C.exports},fetch:function(e){e.store.dispatch("images/getRandomImages")}},z=(n(216),Object(_.a)(k,i,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",{staticClass:"page-index__title"},[e._v("About Us")]),e._v(" "),n("div",{staticClass:"page-index__text"},[n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio eaque itaque quos suscipit\n        velit. Distinctio fugiat illo odio rem. Alias atque eum illum impedit quas quidem, quis voluptates? Numquam!\n      ")]),e._v(" "),n("p",[e._v("At cumque eaque error, et excepturi expedita fuga laudantium maxime officia officiis quas saepe sequi sunt\n        suscipit tempore tenetur totam vel voluptate. Amet at error, exercitationem harum nobis sunt ullam.\n      ")]),e._v(" "),n("p",[e._v("Doloribus ea error facilis itaque iure iusto molestias necessitatibus nemo nihil officiis quisquam,\n        reprehenderit sed sint sunt unde ut vel veniam vero. Alias assumenda id provident reprehenderit totam ullam\n        veniam.\n      ")]),e._v(" "),n("p",[e._v("A amet dolores eveniet id illum porro quisquam sint voluptate. Architecto eaque illo nesciunt reprehenderit\n        rerum! Doloremque earum, harum inventore molestiae nostrum officia perferendis quaerat quam, quisquam\n        repudiandae suscipit vel?\n      ")]),e._v(" "),n("p",[e._v("Aut consequatur consequuntur debitis maiores optio quos reprehenderit. Aliquid distinctio eius eligendi et,\n        illum iure libero maiores nemo numquam qui quisquam, recusandae sint suscipit. Esse expedita, mollitia?\n        Architecto itaque, nam?\n      ")]),e._v(" "),n("p",[e._v("Consequuntur debitis, doloribus error laudantium magnam necessitatibus nisi pariatur praesentium, qui quod\n        sapiente sed sit tempora veritatis vero vitae voluptatum. Dolorum est excepturi vel? Accusantium dolore in\n        pariatur rem ullam!\n      ")]),e._v(" "),n("p",[e._v("At cum laboriosam quisquam totam ut vero vitae! Amet architecto cupiditate dignissimos dolor earum eos est\n        exercitationem inventore, iste nam nobis, nostrum recusandae rem, repellat repellendus sint suscipit tempore\n        velit!\n      ")]),e._v(" "),n("p",[e._v("Aperiam autem consequatur cum debitis dicta doloribus earum, enim eos ex facilis labore minus, neque nihil\n        non placeat recusandae saepe suscipit! Accusamus alias aliquam deleniti ducimus enim fugiat magnam sapiente.\n      ")])])])}],!1,null,null,null));z.options.__file="index.vue";t.default=z.exports}}]);