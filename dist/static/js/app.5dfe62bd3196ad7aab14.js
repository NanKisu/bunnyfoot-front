webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("o8nZ")},null,null).exports,c=a("/ocq"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"}),t._v(" "),a("div",{on:{click:function(e){return t.clickMainStart(t.event)}}},[a("div",{staticClass:"main"}),t._v(" "),a("div",{staticClass:"start"})])])},staticRenderFns:[]};var o=a("VU/8")({name:"WelComePage",data:function(){return{}},methods:{clickMainStart:function(t){this.$router.push("/imageSelect")}}},s,!1,function(t){a("kgLy")},"data-v-2fd2eb62",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{on:{click:this.clickImageCapture}},[e("h2",[this._v("이미지 캡쳐")])]),this._v(" "),e("div",{on:{click:this.clickImageUpload}},[e("h2",[this._v("이미지 업로드")])])])},staticRenderFns:[]};var l=a("VU/8")({name:"SeleceMethodPage",data:function(){return{}},methods:{clickImageUpload:function(){this.$router.push("/imageSelect")},clickImageCapture:function(){this.$router.push("/imageCapture")}}},u,!1,function(t){a("p2dZ")},"data-v-50186f7b",null).exports,d=a("mtWM"),h=a.n(d),m={name:"ImageSelectPage",data:function(){return{}},methods:{uploadImage:function(t){var e=this,a=t.target.files[0],n=new FormData;n.append("image",a),h.a.post("http://localhost:8080/imageUpload",n).then(function(t){e.imagePath=t.data.path})}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h4",[this._v("이쁜 토끼 발바닥 사진을 찍어주세요")]),this._v(" "),e("div",{staticClass:"sample_image"}),this._v(" "),e("label",{attrs:{id:"button",for:"camera"}},[this._v("\n    사진 가져오기\n  ")]),this._v(" "),e("input",{attrs:{type:"file",id:"camera",name:"camera",capture:"camera",accept:"image/*"},on:{change:this.uploadImage}})])},staticRenderFns:[]};var p=a("VU/8")(m,v,!1,function(t){a("ch7K")},"data-v-534ae93a",null).exports,f={name:"ImageCapturePage",data:function(){return{video:null}},mounted:function(){this.init()},methods:{init:function(){var t=window.canvas=document.querySelector("canvas");t.width=480,t.height=360,this.video=document.querySelector("video"),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;navigator.getUserMedia({audio:!0,video:!1},this.success,this.fail)},success:function(t){this.video.srcObject=t},fail:function(t){alert("no camera! check errorcode :"+t)}}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"div1"}},[e("video",{attrs:{autoplay:"autoplay"}}),this._v(" "),e("canvas")])])}]};var _=a("VU/8")(f,g,!1,function(t){a("YUNU")},"data-v-155533d7",null).exports;n.a.use(c.a);var U=new c.a({routes:[{path:"/",name:"WelComePage",component:o},{path:"/seletMethod",name:"SeleceMethodPage",component:l},{path:"/imageSelect",name:"ImageSelectPage",component:p},{path:"/imageCapture",name:"ImageCapturePage",component:_}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:U,components:{App:r},template:"<App/>"})},YUNU:function(t,e){},ch7K:function(t,e){},kgLy:function(t,e){},o8nZ:function(t,e){},p2dZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5dfe62bd3196ad7aab14.js.map