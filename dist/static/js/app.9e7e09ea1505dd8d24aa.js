webpackJsonp([1],{"1ymh":function(t,e){},"7zck":function(t,e){},Ep0b:function(t,e){},GBll:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("VjeZ")},null,null).exports,o=n("/ocq"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"fontCookierun msgMt8vh"},[t._v("\n        지금까지 "+t._s(t.participant)+" 마리가 참여해토\n    ")]),t._v(" "),n("div",{staticClass:"btnWrapper fontNexonBold",on:{click:function(e){return t.clickMainStart()}}},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#FEDEDF"}},[t._v("시작")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("h1",{staticClass:"fontYeoljeongdo font3em msgMt3vh"},[this._v("B"),e("span",{attrs:{id:"bunny"}},[this._v("unny")]),this._v("BTI")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var c=n("VU/8")({name:"WelComePage",data:function(){return{participant:0}},methods:{clickMainStart:function(){this.$router.push("/guide")}}},r,!1,function(t){n("Ep0b")},"data-v-7cebe9b0",null).exports,l=n("mtWM"),u=n.n(l),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-modaltor",{attrs:{visible:t.open},on:{hide:t.hideModal}},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),n("button",{on:{click:function(e){t.open=!0}}},[t._v("modal-basic")])],1)},staticRenderFns:[]};var v=n("VU/8")({data:function(){return{open:!1}},methods:{hideModal:function(){this.open=!1}}},d,!1,function(t){n("cAVx")},"data-v-cf5f0f4a",null).exports,m={components:{CheckUploadPage:v},name:"guidePage",data:function(){return{showCheck:!1,url:null,img:null}},methods:{btnUploadImage:function(){this.image=null,document.getElementById("uploadBtn").click()},uploadImage:function(t){this.img=t.target.files[0],this.url=URL.createObjectURL(this.img),this.showCheck=!0},sendUploadImage:function(){var t=this,e=new FileReader;e.readAsDataURL(this.img),console.log("before: "),e.onload=function(e){localStorage.setItem("uploadImage",e.target.result),t.goQuestion()}},hideModal:function(){this.showCheck=!1},goQuestion:function(t){this.$router.push("/question")}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.btnUploadImage}},[t._v("\n            업로드\n      ")]),t._v(" "),n("input",{attrs:{type:"file",id:"uploadBtn",name:"camera",capture:"camera",accept:"image/*"},on:{change:t.uploadImage}}),t._v(" "),n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.goQuestion}},[t._v("그냥 할래요")]),t._v(" "),n("input",{attrs:{type:"button",id:"skipBtn"}})],1)]),t._v(" "),n("vue-modaltor",{attrs:{visible:t.showCheck},on:{hide:t.hideModal}},[n("img",{attrs:{src:t.url,id:"check_img"}}),t._v(" "),n("div",{staticClass:"btnWrapper"},[n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.btnUploadImage}},[t._v("다시 선택")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.sendUploadImage}},[t._v("시작")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("div",{staticClass:"msg"},[e("span",{staticClass:"fontNexonRegular"},[this._v("\n        내 토끼의 발바닥 사진을 올려주시면"),e("br"),this._v("결과에 반영할게요!"),e("br"),e("br"),this._v("\n        아래 초록색 상자처럼"),e("br"),e("b",[this._v("발바닥만")]),this._v(" 잘라서 보내주세요!\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var h=n("VU/8")(m,p,!1,function(t){n("1ymh")},"data-v-50afe446",null).exports,f={name:"QuestionPage",data:function(){return{questions:["내 토끼를 부르면 바로 돌아오거나 뛰어온다","처음 보는 사람들에게 내 토끼는?","안겼을 때 내 토끼의 반응은?","집사가 집을 비웠을 때 내 토끼의 반응은?","다른 토끼와 만났을 때 내 토끼는?","주변 사람들이 내 토끼에 대해 하는 말은?","케이지 청소를 할 때 내 토끼의 반응은?","화났을 때 내 토끼는?","내 토끼의 머리를 쓰다듬으면 고개를 바로 숙인다"],selections:[["맞아요","아니에요"],["무서워!! 경계한다","간식주세요~ 반갑게 맞이한다"],["가만히 있는다","벗어나려 애쓴다"],["잠잔다zzz","지금이 기회! 여기저기 탐험한다"],["어울리지 않고 혼자 있는다","호기심을 보이며 같이 논다"],["개구쟁이네!","시크하네!"],["내 영역이야! 화를 낸다","별로 상관 없어! 무반응"],["폭풍 스텀핑!!","스텀핑은 하지 않는다"],["맞아요","아니에요"]],selectedAnswer:[],questionIndex:0,img:null}},methods:{selectAnswer:function(t){if(this.selectedAnswer.push(t),this.questionIndex++,this.questionIndex+1>this.questions.length){this.img=localStorage.getItem("uploadImage");var e=this.dataURLtoFile(this.img,"image.png"),n=new FormData;n.append("image",e),n.append("answers",this.selectedAnswer),u.a.post("http://localhost:8080/server/bbti",n).then(function(t){console.log(t)})}},dataURLtoFile:function(t,e){for(var n=t.split(","),i=n[0].match(/:(.*?);/)[1],a=atob(n[1]),s=a.length,o=new Uint8Array(s);s--;)o[s]=a.charCodeAt(s);return new File([o],e,{type:i})},getImgUrl:function(){return"/static/images/question_"+(this.questionIndex+1)+".png"}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti fontNexonRegular"},[n("h4",[t._v(t._s(t.questionIndex+1)+" / "+t._s(t.questions.length)+" ")]),t._v(" "),n("span",[t._v(t._s(t.questions[t.questionIndex]))])]),t._v(" "),n("div",{staticClass:"mainBbti"},[n("div",{staticStyle:{height:"45vh","text-align":"center"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}})])]),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},t._l(t.selections[t.questionIndex],function(e,i){return n("div",{key:i},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#dff3e3"},on:{click:function(e){return t.selectAnswer(i)}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)}),0)])])},staticRenderFns:[]};var _=n("VU/8")(f,g,!1,function(t){n("GBll")},"data-v-e9e06548",null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"msg1"}},[n("h4",[t._v("내 토끼는")]),t._v(" "),n("h4",[t._v(t._s(t.resultTitle[t.resultId-1])+" 스타일")]),t._v(" "),n("div",[n("img",{staticStyle:{width:"50vh"},attrs:{src:t.getImgUrl()}})])]),t._v(" "),n("v-alert",{attrs:{border:"top",color:"#F1F1F0"}},[t._v("\n    "+t._s(t.resultText[t.resultId-1])+"\n  ")]),t._v(" "),n("v-btn",[t._v("카카오톡 공유")]),t._v(" "),n("v-btn",[t._v("이미지 다운로드")]),t._v(" "),n("v-btn",{on:{click:t.redo}},[t._v("다시 해보기")])],1)},staticRenderFns:[]};var C=n("VU/8")({name:"ResultPage",data:function(){return{resultId:this.$route.params.resultId,resultTitle:["경계심 가득한 도도한","누가 뭐래도 나는 이구역 인싸!","애교쟁이","순딩이"],resultText:["타입1에 대한 글\n길게","타입2에 대한 글","타입3에 대한 글","타입4에 대한 글"]}},methods:{getImgUrl:function(){return"/static/images/result_type_"+this.resultId+".png"},redo:function(){this.$router.push("/guide")}}},b,!1,function(t){n("lMSo")},"data-v-4bee8a4a",null).exports;i.default.use(o.a);var x=new o.a({mode:"history",routes:[{path:"/",name:"WelComePage",component:c},{path:"/guide",name:"GuidePage",component:h},{path:"/check",name:"CheckUploadPage",component:v},{path:"/question",name:"QuestionPage",component:_},{path:"/result/:resultId",name:"ResultPage",component:C}]}),I=n("3EgV"),k=n.n(I),U=(n("7zck"),n("sYCn")),w=n.n(U);i.default.use(k.a),i.default.use(w.a);var q=new k.a({});i.default.config.productionTip=!1,new i.default({el:"#app",router:x,vuetify:q,components:{App:s},template:"<App/>"})},VjeZ:function(t,e){},cAVx:function(t,e){},lMSo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9e7e09ea1505dd8d24aa.js.map