webpackJsonp([1],{"7zck":function(t,e){},L4z6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("mcmQ")},null,null).exports,r=n("/ocq"),o=n("mtWM"),l=n.n(o),c={name:"WelComePage",data:function(){return{participant:0,pageViewVisible:!1}},methods:{getPageView:function(){var t=this,e=this.$store.state.apiUrl+"pageView";l.a.get(e).then(function(e){t.participant=e.data,t.pageViewVisible=!0}).catch(function(){})},clickMainStart:function(){this.$router.push("/guide")}},mounted:function(){this.getPageView()}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"app2"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold",on:{click:function(e){return t.clickMainStart()}}},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#FEDEDF"}},[t._v("시작")])],1),t._v(" "),t.pageViewVisible?n("div",{staticClass:"fontCookierun msgMt8vh"},[t._v("\n            지금까지 "+t._s(t.participant)+" 마리가 참여해토\n        ")]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("h1",{staticClass:"fontYeoljeongdo font3em msgMt3vh"},[this._v("B"),e("span",{attrs:{id:"bunny"}},[this._v("unny")]),this._v("BTI-DEV")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var d=n("VU/8")(c,u,!1,function(t){n("PDCi")},"data-v-e807d626",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-modaltor",{attrs:{visible:t.open},on:{hide:t.hideModal}},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),n("button",{on:{click:function(e){t.open=!0}}},[t._v("modal-basic")])],1)},staticRenderFns:[]};var m=n("VU/8")({data:function(){return{open:!1}},methods:{hideModal:function(){this.open=!1}}},p,!1,function(t){n("L4z6")},"data-v-8a826094",null).exports,h=n("Xxa5"),v=n.n(h),g=n("exGp"),f=n.n(g),b=n("NYxO");a.default.use(b.a);var _,I=new b.a.Store({state:{apiUrl:"https://bbti.site/server/",envHost:"https://bbti.site"}}),C=this,k=(_=f()(v.a.mark(function t(e,n){var a,i;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=I.state.apiUrl+"sendSlackMsg",(i={}).channel=e,i.msg=n,l.a.post(a,i).then(function(t){}).catch(function(t){console.log("슬랙 메시지 전송 실패"+t)});case 5:case"end":return t.stop()}},t,C)})),function(t,e){return _.apply(this,arguments)}),w={components:{CheckUploadPage:m},name:"guidePage",data:function(){return{showCheck:!1,url:null,img:null}},methods:{btnUploadImage:function(){this.image=null,document.getElementById("uploadBtn").click()},uploadImage:function(t){alert(1);try{this.img=t.target.files[0],this.url=URL.createObjectURL(this.img),this.showCheck=!0}catch(t){k("error","uploadImage error")}alert(2)},sendUploadImage:function(){var t=this,e=new FileReader;e.readAsDataURL(this.img),console.log("before: "),e.onload=function(e){localStorage.removeItem("uploadImage"),localStorage.setItem("uploadImage",e.target.result),t.goQuestion()}},hideModal:function(){this.showCheck=!1},goQuestion:function(t){this.$router.push("/question")}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"app2"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.btnUploadImage}},[t._v("\n                업로드\n          ")]),t._v(" "),n("input",{attrs:{type:"file",id:"uploadBtn",name:"camera",capture:"camera",accept:"file_extension|image/*"},on:{change:t.uploadImage}}),t._v(" "),n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.goQuestion}},[t._v("그냥 할래요")]),t._v(" "),n("input",{attrs:{type:"button",id:"skipBtn"}})],1)]),t._v(" "),n("vue-modaltor",{attrs:{visible:t.showCheck},on:{hide:t.hideModal}},[n("img",{attrs:{src:t.url,id:"check_img"}}),t._v(" "),n("div",{staticClass:"btnWrapper"},[n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.btnUploadImage}},[t._v("다시 선택")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.sendUploadImage}},[t._v("시작")])],1)])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("div",{staticClass:"msg"},[e("span",{staticClass:"fontNexonRegular"},[this._v("\n            내 토끼의 발바닥 사진을 올려주시면"),e("br"),this._v("결과에 반영할게요!"),e("br"),e("br"),this._v("\n            아래 분홍색 상자처럼"),e("br"),e("b",[this._v("발바닥만")]),this._v(" 잘라서 보내주세요!\n          ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var U=n("VU/8")(w,x,!1,function(t){n("a4gD")},"data-v-780989c9",null).exports,y={name:"QuestionPage",data:function(){return{questions:["내 토끼를 부르면 내게 온다","처음 보는 사람들에게 내 토끼는?","안겼을 때 내 토끼의 반응은?","집사가 집을 비웠을 때 내 토끼의 반응은?","다른 토끼와 만났을 때 내 토끼는?","주변 사람들이 내 토끼에 대해 하는 말은?","케이지 청소를 할 때 내 토끼의 반응은?","화났을 때 내 토끼는?","내 토끼는 쓰담쓰담을 좋아한다","내 토끼는 편식을 한다"],selections:[["맞아요","아니에요"],["무서워!! 경계한다","간식주세요~ 반갑게 맞이한다"],["가만히 있는다","벗어나려 애쓴다"],["잠잔다zzz","지금이 기회! 여기저기 탐험한다"],["어울리지 않고 혼자 있는다","호기심을 보이며 같이 논다"],["개구쟁이네!","시크하네!"],["내 영역이야! 화를 낸다","별로 상관 없어! 무반응"],["폭풍 스텀핑!!","스텀핑은 하지 않는다"],["맞아요","아니에요"],["맞아요","아니에요"]],selectedAnswer:[],questionIndex:0,img:null,resultDict:{DODO:1,INSSA:2,AGYO:3,SUNDING:4}}},methods:{selectAnswer:function(t){var e=this;if(this.selectedAnswer.push(t),this.questionIndex++,this.questionIndex+1>this.questions.length){var n=new FormData;if(n.append("answers",this.selectedAnswer),localStorage.getItem("uploadImage")){this.img=localStorage.getItem("uploadImage");var a=this.dataURLtoFile(this.img,"image.png");n.append("image",a)}else n.append("image",null);var i=this.$store.state.apiUrl+"bbti";l.a.post(i,n).then(function(t){localStorage.removeItem("uploadImage");var n=e.resultDict[t.data.bbti];e.$router.push({name:"ResultPage",params:{resultId:n}})}).catch(function(){var t=Math.floor(10*Math.random())%4+1;e.$router.push({name:"ResultPage",params:{resultId:t}})})}},dataURLtoFile:function(t,e){for(var n=t.split(","),a=n[0].match(/:(.*?);/)[1],i=atob(n[1]),s=i.length,r=new Uint8Array(s);s--;)r[s]=i.charCodeAt(s);return new File([r],e,{type:a})},getImgUrl:function(){return"/static/images/question_"+(this.questionIndex+1)+".png"}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"app2"}},[t.questionIndex<10?n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti fontNexonRegular"},[n("div",{staticStyle:{"line-height":"5vh","text-align":"center"}},[n("span",[n("b",[t._v(t._s(t.questionIndex+1)+" / "+t._s(t.questions.length))])]),n("br")])]),t._v(" "),n("div",{staticClass:"mainBbti",staticStyle:{"text-align":"center"}},[n("h2",{staticStyle:{"word-break":"keep-all"}},[t._v(t._s(t.questions[t.questionIndex]))]),t._v(" "),n("div",{attrs:{id:"imgWrapper"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}})])]),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},[n("div",t._l(t.selections[t.questionIndex],function(e,a){return n("v-btn",{key:a,staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#dff3e3"},on:{click:function(e){return t.selectAnswer(a)}}},[t._v("\n              "+t._s(e)+"\n            ")])}),1)])])]):t._e()])])},staticRenderFns:[]};var S=n("VU/8")(y,D,!1,function(t){n("rxQi")},"data-v-67e7b0de",null).exports,R=n("eMjc"),$=n.n(R),q={name:"ResultPage",data:function(){return{resultId:this.$route.params.resultId,resultTitle:["경계심 가득한 도도한","누가 뭐래도 나는<br>이구역 인싸!","함께해서 행복한<br>애교쟁이","순딩이 울애기"],resultText:["￮ 야생성을 간직하고 있는 고양이 같은 토끼!<br>￮ 예민한 곳을 만지는 건 허용하지 않아요<br>￮ 조금씩 마음을 열어줄 때 집사 맘은 더 사르르 녹아요<br>￮ 산책은 좋아하지 않을 확률이 높답니다<br>￮ 익숙한 공간인 집 안에서만 지내도 행복해요<br>￮ 자신의 공간이라고 느낄 수 있는 은신처를 만들어주는 걸 추천해요!","￮ 일반적인 토끼의 규칙은 내 토끼에게 적용되지 않아요.<br>￮ 가끔 얘가 토끼인지 강아지인지 모르겠어요.<br>￮ 그동안 먹여주고 입혀주고(?) 재워준 건 난데 집사고 뭐고 간식이라도 가진 사람이 있으면 난리남!<br>￮ 조금은 내멋대로인 활달한 성격을 가졌어요<br>￮ 에너지를 발산할 수 있는 환경을 조성해주면 좋을 것 같아요.","￮ 사람을 좋아하는 토끼! 집사 껌딱지!<br>￮ 애교가 많아서 하루하루 나를 행복하게 만들어줘요<br>￮ 이런 토끼와 함께 사는 집사는 로또 맞은 격! 가장 적은 성격 유형이랍니다<br>￮ 애교가 많은 토끼인 만큼 집사도 토끼와 많은 시간을 보낼 수 있도록 노력하는 게 좋을 것 같네요!","￮ 너무 순딩순딩한 인형 같은 토끼!<br>￮ 다른 토끼들은 허락하지 않는 곳까지 만질 수 있게 해줘요<br>￮ 집사와 교감이 잘 되는 유형!<br>￮ 토끼는 주인의 품 속에서 자고싶어할 지도 ?!<br>￮ 하지만 다른 토끼들을 만났을 때에도 순하다는 보장은 없으니 조심하세요!"],imgCaptured:null,envHost:""}},methods:{getImgUrl:function(){return"/static/images/result_type_"+this.resultId+".png"},getImgWebUrl:function(){return this.envHost+this.getImgUrl()},shareKakao:function(){console.log(this.getImgWebUrl());try{Kakao.Link.createDefaultButton({container:"#btnKakao",objectType:"feed",content:{title:"내 토끼는 무슨 유형?",description:this.resultTitle[this.resultId-1].replace("<br>"," "),imageUrl:this.getImgWebUrl(),link:{webUrl:this.envHost,mobileWebUrl:this.envHost}},buttons:[{title:"결과 보기",link:{webUrl:this.envHost+"/#/result/"+this.resultId,mobileWebUrl:this.envHost+"/#/result/"+this.resultId}},{title:"나도 해보기",link:{webUrl:this.envHost,mobileWebUrl:this.envHost}}]})}catch(t){k("error","카톡 공유에 실패했어요!")}},captureImage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.html2canvas=$.a,$()(document.body).then(function(t){var e=document.createElement("a");if("string"==typeof e.download){e.href=t.toDataURL("image/png");var n=new Date;e.download="bbti-"+n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate()+".png",document.body.appendChild(e),e.click(),document.body.removeChild(e)}else window.open(t.toDataURL("image/png"))}).catch(function(t){console.log(t)})},redo:function(){this.$router.push("/guide")}},mounted:function(){this.envHost=this.$store.state.envHost,this.shareKakao()}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"app2"}},[n("div",{staticClass:"container",staticStyle:{padding:"0px !important"}},[n("img",{staticStyle:{displat:"block",width:"100%"},attrs:{src:t.getImgUrl()}}),t._v(" "),n("div",{staticStyle:{margin:"0 5%","border-radius":"5px","background-color":"#111"}},[n("v-alert",{staticClass:"fontNexonRegular lhWide",attrs:{border:"top"},domProps:{innerHTML:t._s(t.resultText[t.resultId-1])}})],1),t._v(" "),n("div",{staticClass:"bottomBbti",staticStyle:{height:"15vh"}},[n("div",{staticClass:"btnWrapper fontNexonBold"},[t._m(0),t._v(" "),n("button",{attrs:{"data-html2canvas-ignore":"true"},on:{click:t.captureImage}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/Download-green.png"}})]),t._v(" "),n("button",{attrs:{"data-html2canvas-ignore":"true"},on:{click:t.redo}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/redo-yellow.png"}})])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{id:"btnKakao","data-html2canvas-ignore":"true"}},[e("img",{staticClass:"btnImg",attrs:{src:"/static/icons/kakao-talk-basic.png"}})])}]};var M=n("VU/8")(q,B,!1,function(t){n("oiIH")},"data-v-4c797408",null).exports,E={methods:{send:function(){var t=new FormData;t.append("image",null);for(var e=this.$store.state.apiUrl+"bbti",n=[],a={DODO:0,INSSA:0,AGYO:0,SUNDING:0},i=0;i<2;i++){n.push(i);for(var s=0;s<2;s++){n.push(s);for(var r=0;r<2;r++){n.push(r);for(var o=0;o<2;o++){n.push(o);for(var c=0;c<2;c++){n.push(c);for(var u=0;u<2;u++){n.push(u);for(var d=0;d<2;d++){n.push(d);for(var p=0;p<2;p++){n.push(p);for(var m=0;m<2;m++){n.push(m);for(var h=0;h<2;h++)n.push(h),t.append("answers",n),l.a.post(e,t).then(function(e){a[e.data.bbti]++,t.delete("answers"),console.log(a)}).catch(function(){console.log(n),t.delete("answers"),console.log(a)}),n.pop();n.pop()}n.pop()}n.pop()}n.pop()}n.pop()}n.pop()}n.pop()}n.pop()}n.pop()}}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){return t.send()}}},[t._v("쏘기")])])},staticRenderFns:[]},V=n("VU/8")(E,P,!1,null,null,null).exports;a.default.use(r.a);var W=new r.a({mode:"hash",routes:[{path:"/",name:"WelComePage",component:d},{path:"/guide",name:"GuidePage",component:U},{path:"/check",name:"CheckUploadPage",component:m},{path:"/question",name:"QuestionPage",component:S},{path:"/result/:resultId",name:"ResultPage",component:M},{path:"/test",name:"TestPage",component:V}]}),A=n("3EgV"),F=n.n(A),H=(n("7zck"),n("sYCn")),N=n.n(H);a.default.use(F.a),a.default.use(N.a);var L=new F.a({}),T=n("Z3T5");a.default.config.productionTip=!1,Kakao.init("0a5e2d5eac3367c0b50c2f71f0e7f5b1"),console.log(Kakao.isInitialized()),a.default.use(T.a,{config:{id:"UA-193115120-1"}},W),new a.default({el:"#app",router:W,vuetify:L,store:I,components:{App:s},template:"<App/>"})},PDCi:function(t,e){},a4gD:function(t,e){},mcmQ:function(t,e){},oiIH:function(t,e){},rxQi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.75ec40fb759ec244150b.js.map