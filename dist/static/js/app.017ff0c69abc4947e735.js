webpackJsonp([1],{"1MP9":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s,o=n("VU/8")({name:"App"},i,!1,function(t){n("VjeZ")},null,null).exports,r=n("/ocq"),c=n("Xxa5"),l=n.n(c),u=n("exGp"),d=n.n(u),m=n("mtWM"),p=n.n(m),h=this,g=(s=d()(l.a.mark(function t(e,n){var a,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=location.protocol+"//"+location.host+"/server/sendSlackMsg",(i={}).channel=e,i.msg=n,p.a.post(a,i).then(function(t){}).catch(function(t){console.log("슬랙 메시지 전송 실패")});case 5:case"end":return t.stop()}},t,h)})),function(t,e){return s.apply(this,arguments)}),v={name:"WelComePage",data:function(){return{participant:0}},methods:{clickMainStart:function(){g("welcome","새로운 유저가 테스트를 시작했어요!"),this.$router.push("/guide")}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"fontCookierun msgMt8vh"},[t._v("\n        지금까지 "+t._s(t.participant)+" 마리가 참여해토\n    ")]),t._v(" "),n("div",{staticClass:"btnWrapper fontNexonBold",on:{click:function(e){return t.clickMainStart()}}},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#FEDEDF"}},[t._v("시작")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("h1",{staticClass:"fontYeoljeongdo font3em msgMt3vh"},[this._v("B"),e("span",{attrs:{id:"bunny"}},[this._v("unny")]),this._v("BTI")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var f=n("VU/8")(v,b,!1,function(t){n("qe5T")},"data-v-16d485fe",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-modaltor",{attrs:{visible:t.open},on:{hide:t.hideModal}},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),n("button",{on:{click:function(e){t.open=!0}}},[t._v("modal-basic")])],1)},staticRenderFns:[]};var I=n("VU/8")({data:function(){return{open:!1}},methods:{hideModal:function(){this.open=!1}}},_,!1,function(t){n("cAVx")},"data-v-cf5f0f4a",null).exports,k={components:{CheckUploadPage:I},name:"guidePage",data:function(){return{showCheck:!1,url:null,img:null}},methods:{btnUploadImage:function(){this.image=null,document.getElementById("uploadBtn").click()},uploadImage:function(t){this.img=t.target.files[0],this.url=URL.createObjectURL(this.img),this.showCheck=!0},sendUploadImage:function(){var t=this,e=new FileReader;e.readAsDataURL(this.img),console.log("before: "),e.onload=function(e){localStorage.removeItem("uploadImage"),localStorage.setItem("uploadImage",e.target.result),t.goQuestion()}},hideModal:function(){this.showCheck=!1},goQuestion:function(t){this.$router.push("/question")}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.btnUploadImage}},[t._v("\n            업로드\n      ")]),t._v(" "),n("input",{attrs:{type:"file",id:"uploadBtn",name:"camera",capture:"camera",accept:"image/*"},on:{change:t.uploadImage}}),t._v(" "),n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.goQuestion}},[t._v("그냥 할래요")]),t._v(" "),n("input",{attrs:{type:"button",id:"skipBtn"}})],1)]),t._v(" "),n("vue-modaltor",{attrs:{visible:t.showCheck},on:{hide:t.hideModal}},[n("img",{attrs:{src:t.url,id:"check_img"}}),t._v(" "),n("div",{staticClass:"btnWrapper"},[n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.btnUploadImage}},[t._v("다시 선택")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.sendUploadImage}},[t._v("시작")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("div",{staticClass:"msg"},[e("span",{staticClass:"fontNexonRegular"},[this._v("\n        내 토끼의 발바닥 사진을 올려주시면"),e("br"),this._v("결과에 반영할게요!"),e("br"),e("br"),this._v("\n        아래 초록색 상자처럼"),e("br"),e("b",[this._v("발바닥만")]),this._v(" 잘라서 보내주세요!\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var x=n("VU/8")(k,C,!1,function(t){n("1MP9")},"data-v-7a77abb8",null).exports,U={name:"QuestionPage",data:function(){return{questions:["내 토끼를 부르면 바로 돌아오거나 뛰어온다","처음 보는 사람들에게 내 토끼는?","안겼을 때 내 토끼의 반응은?","집사가 집을 비웠을 때 내 토끼의 반응은?","다른 토끼와 만났을 때 내 토끼는?","주변 사람들이 내 토끼에 대해 하는 말은?","케이지 청소를 할 때 내 토끼의 반응은?","화났을 때 내 토끼는?","내 토끼의 머리를 쓰다듬으면 고개를 바로 숙인다","내 토끼는 편식을 한다"],selections:[["맞아요","아니에요"],["무서워!! 경계한다","간식주세요~ 반갑게 맞이한다"],["가만히 있는다","벗어나려 애쓴다"],["잠잔다zzz","지금이 기회! 여기저기 탐험한다"],["어울리지 않고 혼자 있는다","호기심을 보이며 같이 논다"],["개구쟁이네!","시크하네!"],["내 영역이야! 화를 낸다","별로 상관 없어! 무반응"],["폭풍 스텀핑!!","스텀핑은 하지 않는다"],["맞아요","아니에요"],["맞아요","아니에요"]],selectedAnswer:[],questionIndex:0,img:null,resultDict:{DODO:1,INSSA:2,AGYO:3,SUNDING:4}}},methods:{selectAnswer:function(t){var e=this;if(this.selectedAnswer.push(t),this.questionIndex++,this.questionIndex+1>this.questions.length){var n=new FormData;if(n.append("answers",this.selectedAnswer),localStorage.getItem("uploadImage")){this.img=localStorage.getItem("uploadImage");var a=this.dataURLtoFile(this.img,"image.png");n.append("image",a)}else n.append("image",null);var i=location.protocol+"//"+location.host+"/server/bbti";p.a.post(i,n).then(function(t){localStorage.removeItem("uploadImage");var n=e.resultDict[t.data.bbti];e.$router.push({name:"ResultPage",params:{resultId:n}})}).catch(function(t){g("error","결과를 얻는 데 실패했어요! 오류메시지=> "+t);var n=Math.floor(10*Math.random())%4+1;e.$router.push({name:"ResultPage",params:{resultId:n}})})}},dataURLtoFile:function(t,e){for(var n=t.split(","),a=n[0].match(/:(.*?);/)[1],i=atob(n[1]),s=i.length,o=new Uint8Array(s);s--;)o[s]=i.charCodeAt(s);return new File([o],e,{type:a})},getImgUrl:function(){return"/static/images/question_"+(this.questionIndex+1)+".png"}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti fontNexonRegular"},[n("h4",[t._v(t._s(t.questionIndex+1)+" / "+t._s(t.questions.length)+" ")]),t._v(" "),n("span",[t._v(t._s(t.questions[t.questionIndex]))])]),t._v(" "),n("div",{staticClass:"mainBbti"},[n("div",{staticStyle:{height:"45vh","text-align":"center"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}})])]),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},t._l(t.selections[t.questionIndex],function(e,a){return n("div",{key:a},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#dff3e3"},on:{click:function(e){return t.selectAnswer(a)}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)}),0)])])},staticRenderFns:[]};var B=n("VU/8")(U,w,!1,function(t){n("xrrm")},"data-v-a639bf3a",null).exports,y=n("eMjc"),M=n.n(y),q={name:"ResultPage",data:function(){return{resultId:this.$route.params.resultId,resultTitle:["경계심 가득한 도도한","누가 뭐래도 나는<br>이구역 인싸!","함께해서 행복한<br>애교쟁이","순딩이 울애기"],resultText:["야생성을 간직하고 있어요<br>예민한 곳을 만지는 건 허용하지 않아요<br>먹이사슬의 최하층에 있는 게 토끼니까<br>경계심 많고 겁 많은 건 이해돼요<br>가끔은 애교있는 다른 토끼들 이야기를<br>들으면 조금은 섭섭하긴 해요<br>하지만 여전히 예쁜 내 토끼에요","일반적인 토끼의 규칙은<br>내 토끼에게 적용되지 않아요.<br>가끔 얘가 토끼인지 사람인지 모르겠어요.<br>그동안 먹여주고 입혀주고(?)<br>재워준 건 난데<br>집사고 뭐고 사람을 좋아하는 편이에요.<br>간식이라도 가지고 있으면 난리남!","사람을 좋아하는 토끼!<br>집사 껌딱지!<br>애교가 많아서 하루하루<br>나를 행복하게 만들어줘요<br>집사에게 긍정적인 기운을<br>뿜뿜 뿜어준답니다!","너무 순딩순딩한 인형 같은 토끼!<br>다른 토끼들은 허락하지 않는 곳까지<br>만질 수 있게 해줘요<br>"],imgCaptured:null,blah:null}},methods:{getImgUrl:function(){return"/static/images/result_type_"+this.resultId+".png"},getImgWebUrl:function(){return(location.protocol+"//"+location.host+this.getImgUrl()).replace(".png","_kakao.png")},shareKakao:function(){console.log(this.getImgWebUrl()),Kakao.Link.createDefaultButton({container:"#btnKakao",objectType:"feed",content:{title:"내 토끼는 무슨 유형?",description:this.resultTitle[this.resultId-1].replace("<br>"," "),imageUrl:this.getImgWebUrl(),link:{mobileWebUrl:"https://bbti.site"}},buttons:[{title:"결과 보기",link:{mobileWebUrl:location.href}},{title:"나도 해보기",link:{mobileWebUrl:"https://bbti.site"}}]})},captureImage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.html2canvas=M.a,M()(document.body).then(function(t){console.log(t.toDataURL("image/png"))}).catch(function(t){console.log(t)})},redo:function(){this.$router.push("/guide")}},mounted:function(){this.shareKakao()}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti"},[n("h1",{staticClass:"fontKotraBold font2em msgMt3vh"},[n("span",{attrs:{id:"bunny"},domProps:{innerHTML:t._s(t.resultTitle[t.resultId-1])}})])]),t._v(" "),n("div",{staticClass:"mainBbti"},[n("div",{staticStyle:{height:"45vh","text-align":"center"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}}),t._v(" "),n("img",{attrs:{src:t.imgCaptured}})]),t._v(" "),n("v-alert",{staticClass:"fontNexonRegular lhWide",staticStyle:{"background-color":"rgb(225 225 225 / 45%)"},attrs:{border:"top"},domProps:{innerHTML:t._s(t.resultText[t.resultId-1])}}),t._v(" "),n("div",{staticClass:"btnWrapper fontNexonBold btnFlex",attrs:{"data-html2canvas-ignore":"true"}},[t._m(0),t._v(" "),n("button",{on:{click:t.captureImage}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/download_black.png"}})]),t._v(" "),n("button",{on:{click:t.redo}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/redo_black.png"}})])])],1),t._v(" "),n("div",{staticClass:"bottomBbti",staticStyle:{height:"10vh"}},[n("img",{attrs:{src:t.blah}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{id:"btnKakao"}},[e("img",{staticClass:"btnImg",attrs:{src:"/static/icons/kakao-talk_black.png"}})])}]};var S=n("VU/8")(q,R,!1,function(t){n("keff")},"data-v-4b9587ec",null).exports;a.default.use(r.a);var P=new r.a({mode:"hash",routes:[{path:"/",name:"WelComePage",component:f},{path:"/guide",name:"GuidePage",component:x},{path:"/check",name:"CheckUploadPage",component:I},{path:"/question",name:"QuestionPage",component:B},{path:"/result/:resultId",name:"ResultPage",component:S}]}),$=n("3EgV"),E=n.n($),W=(n("7zck"),n("sYCn")),A=n.n(W);a.default.use(E.a),a.default.use(A.a);var F=new E.a({});a.default.config.productionTip=!1,Kakao.init("0a5e2d5eac3367c0b50c2f71f0e7f5b1"),console.log(Kakao.isInitialized()),new a.default({el:"#app",router:P,vuetify:F,components:{App:o},template:"<App/>"})},VjeZ:function(t,e){},cAVx:function(t,e){},keff:function(t,e){},qe5T:function(t,e){},xrrm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.017ff0c69abc4947e735.js.map