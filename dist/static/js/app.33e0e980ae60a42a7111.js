webpackJsonp([1],{"1MP9":function(t,e){},3096:function(t,e){},"66cI":function(t,e){},"7zck":function(t,e){},Ki8f:function(t,e,n){"use strict";(function(t){var n=("undefined"!=typeof window?window:void 0!==t?t:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o(t){return null!==t&&"object"==typeof t}var r=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},r.prototype.addChild=function(t,e){this._children[t]=e},r.prototype.removeChild=function(t){delete this._children[t]},r.prototype.getChild=function(t){return this._children[t]},r.prototype.hasChild=function(t){return t in this._children},r.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},r.prototype.forEachChild=function(t){i(this._children,t)},r.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},r.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},r.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(r.prototype,a);var s=function(t){this.register([],t,!1)};s.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},s.prototype.update=function(t){!function t(e,n,i){0;n.update(i);if(i.modules)for(var o in i.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),i.modules[o])}}([],this.root,t)},s.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var a=new r(e,n);0===t.length?this.root=a:this.get(t.slice(0,-1)).addChild(t[t.length-1],a);e.modules&&i(e.modules,function(e,i){o.register(t.concat(i),e,n)})},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)},s.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return e.hasChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var i=t.plugins;void 0===i&&(i=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var r=this,a=this.dispatch,u=this.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return u.call(r,t,e,n)},this.strict=o;var l=this._modules.root.state;f(this,l,[],this._modules.root),h(this,l),i.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){n.emit("vuex:mutation",t,e)},{prepend:!0}),t.subscribeAction(function(t,e){n.emit("vuex:action",t,e)},{prepend:!0}))}(this)},l={state:{configurable:!0}};function d(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function p(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;f(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var o=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r={};i(t._wrappedGetters,function(e,n){r[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:r}),c.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),c.nextTick(function(){return o.$destroy()}))}function f(t,e,n,i,o){var r=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=i),!r&&!o){var s=m(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){c.set(s,u,i.state)})}var l=i.context=function(t,e,n){var i=""===e,o={dispatch:i?t.dispatch:function(n,i,o){var r=v(n,i,o),a=r.payload,s=r.options,c=r.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:i?t.commit:function(n,i,o){var r=v(n,i,o),a=r.payload,s=r.options,c=r.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(o){if(o.slice(0,i)===e){var r=o.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[o]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,n)}}}),o}(t,a,n);i.forEachMutation(function(e,n){!function(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,i.state,e)})}(t,a+n,e,l)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,o=e.handler||e;!function(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push(function(e){var o,r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return(o=r)&&"function"==typeof o.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):r})}(t,i,o,l)}),i.forEachGetter(function(e,n){!function(t,e,n,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}(t,a+n,e,l)}),i.forEachChild(function(i,r){f(t,e,n.concat(r),i,o)})}function m(t,e){return e.reduce(function(t,e){return t[e]},t)}function v(t,e,n){return o(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){c&&t===c||
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},u.prototype.commit=function(t,e,n){var i=this,o=v(t,e,n),r=o.type,a=o.payload,s=(o.options,{type:r,payload:a}),c=this._mutations[r];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.slice().forEach(function(t){return t(s,i.state)}))},u.prototype.dispatch=function(t,e){var n=this,i=v(t,e),o=i.type,r=i.payload,a={type:o,payload:r},s=this._actions[o];if(s){try{this._actionSubscribers.slice().filter(function(t){return t.before}).forEach(function(t){return t.before(a,n.state)})}catch(t){0}var c=s.length>1?Promise.all(s.map(function(t){return t(r)})):s[0](r);return new Promise(function(t,e){c.then(function(e){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(a,n.state)})}catch(t){0}t(e)},function(t){try{n._actionSubscribers.filter(function(t){return t.error}).forEach(function(e){return e.error(a,n.state,t)})}catch(t){0}e(t)})})}},u.prototype.subscribe=function(t,e){return d(t,this._subscribers,e)},u.prototype.subscribeAction=function(t,e){return d("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},u.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),f(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])}),p(this)},u.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},u.prototype.hotUpdate=function(t){this._modules.update(t),p(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,l);var b=k(function(t,e){var n={};return C(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=x(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[i].vuex=!0}),n}),_=k(function(t,e){var n={};return C(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=x(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"==typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}}),n}),y=k(function(t,e){var n={};return C(e).forEach(function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){if(!t||x(this.$store,"mapGetters",t))return this.$store.getters[o]},n[i].vuex=!0}),n}),w=k(function(t,e){var n={};return C(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=x(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"==typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}}),n});function C(t){return function(t){return Array.isArray(t)||o(t)}(t)?Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function k(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function x(t,e,n){return t._modulesNamespaceMap[n]}var I={Store:u,install:g,version:"3.4.0",mapState:b,mapMutations:_,mapGetters:y,mapActions:w,createNamespacedHelpers:function(t){return{mapState:b.bind(null,t),mapGetters:y.bind(null,t),mapMutations:_.bind(null,t),mapActions:w.bind(null,t)}}};e.a=I}).call(e,n("DuR2"))},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("d/Pf")},null,null).exports,a=n("/ocq"),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),d=n("mtWM"),p=n.n(d),h=n("Ki8f");i.default.use(h.a);var f,m=new h.a.Store({state:{apiUrl:location.protocol+"//"+location.host+"/server/"}}),v=this,g=(f=l()(c.a.mark(function t(e,n){var i,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=m.state.apiUrl+"sendSlackMsg",(o={}).channel=e,o.msg=n,p.a.post(i,o).then(function(t){}).catch(function(t){console.log("슬랙 메시지 전송 실패")});case 5:case"end":return t.stop()}},t,v)})),function(t,e){return f.apply(this,arguments)}),b={name:"WelComePage",data:function(){return{participant:0,pageViewVisible:!1}},methods:{getPageView:function(){var t=this,e=this.$store.state.apiUrl+"pageView";p.a.get(e).then(function(e){t.participant=e.data,t.pageViewVisible=!0}).catch(function(t){})},clickMainStart:function(){g("welcome","새로운 유저가 테스트를 시작했어요!"),this.$router.push("/guide")}},mounted:function(){this.getPageView()}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[t.pageViewVisible?n("div",{staticClass:"fontCookierun msgMt8vh"},[t._v("\n        지금까지 "+t._s(t.participant)+" 마리가 참여해토\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"btnWrapper fontNexonBold",on:{click:function(e){return t.clickMainStart()}}},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#FEDEDF"}},[t._v("시작")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("h1",{staticClass:"fontYeoljeongdo font3em msgMt3vh"},[this._v("B"),e("span",{attrs:{id:"bunny"}},[this._v("unny")]),this._v("BTI")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var y=n("VU/8")(b,_,!1,function(t){n("66cI")},"data-v-1581b0bf",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-modaltor",{attrs:{visible:t.open},on:{hide:t.hideModal}},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),n("button",{on:{click:function(e){t.open=!0}}},[t._v("modal-basic")])],1)},staticRenderFns:[]};var C=n("VU/8")({data:function(){return{open:!1}},methods:{hideModal:function(){this.open=!1}}},w,!1,function(t){n("cAVx")},"data-v-cf5f0f4a",null).exports,k={components:{CheckUploadPage:C},name:"guidePage",data:function(){return{showCheck:!1,url:null,img:null}},methods:{btnUploadImage:function(){this.image=null,document.getElementById("uploadBtn").click()},uploadImage:function(t){this.img=t.target.files[0],this.url=URL.createObjectURL(this.img),this.showCheck=!0},sendUploadImage:function(){var t=this,e=new FileReader;e.readAsDataURL(this.img),console.log("before: "),e.onload=function(e){localStorage.removeItem("uploadImage"),localStorage.setItem("uploadImage",e.target.result),t.goQuestion()}},hideModal:function(){this.showCheck=!1},goQuestion:function(t){this.$router.push("/question")}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.btnUploadImage}},[t._v("\n            업로드\n      ")]),t._v(" "),n("input",{attrs:{type:"file",id:"uploadBtn",name:"camera",capture:"camera",accept:"image/*"},on:{change:t.uploadImage}}),t._v(" "),n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#cee6b4"},on:{click:t.goQuestion}},[t._v("그냥 할래요")]),t._v(" "),n("input",{attrs:{type:"button",id:"skipBtn"}})],1)]),t._v(" "),n("vue-modaltor",{attrs:{visible:t.showCheck},on:{hide:t.hideModal}},[n("img",{attrs:{src:t.url,id:"check_img"}}),t._v(" "),n("div",{staticClass:"btnWrapper"},[n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.btnUploadImage}},[t._v("다시 선택")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.sendUploadImage}},[t._v("시작")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBbti"},[e("div",{staticClass:"msg"},[e("span",{staticClass:"fontNexonRegular"},[this._v("\n        내 토끼의 발바닥 사진을 올려주시면"),e("br"),this._v("결과에 반영할게요!"),e("br"),e("br"),this._v("\n        아래 초록색 상자처럼"),e("br"),e("b",[this._v("발바닥만")]),this._v(" 잘라서 보내주세요!\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainBbti"},[e("div",{staticClass:"imgSection"})])}]};var I=n("VU/8")(k,x,!1,function(t){n("1MP9")},"data-v-7a77abb8",null).exports,M={name:"QuestionPage",data:function(){return{questions:["내 토끼를 부르면 바로 돌아오거나 뛰어온다","처음 보는 사람들에게 내 토끼는?","안겼을 때 내 토끼의 반응은?","집사가 집을 비웠을 때 내 토끼의 반응은?","다른 토끼와 만났을 때 내 토끼는?","주변 사람들이 내 토끼에 대해 하는 말은?","케이지 청소를 할 때 내 토끼의 반응은?","화났을 때 내 토끼는?","내 토끼의 머리를 쓰다듬으면 고개를 바로 숙인다","내 토끼는 편식을 한다"],selections:[["맞아요","아니에요"],["무서워!! 경계한다","간식주세요~ 반갑게 맞이한다"],["가만히 있는다","벗어나려 애쓴다"],["잠잔다zzz","지금이 기회! 여기저기 탐험한다"],["어울리지 않고 혼자 있는다","호기심을 보이며 같이 논다"],["개구쟁이네!","시크하네!"],["내 영역이야! 화를 낸다","별로 상관 없어! 무반응"],["폭풍 스텀핑!!","스텀핑은 하지 않는다"],["맞아요","아니에요"],["맞아요","아니에요"]],selectedAnswer:[],questionIndex:0,img:null,resultDict:{DODO:1,INSSA:2,AGYO:3,SUNDING:4}}},methods:{selectAnswer:function(t){var e=this;if(this.selectedAnswer.push(t),this.questionIndex++,this.questionIndex+1>this.questions.length){var n=new FormData;if(n.append("answers",this.selectedAnswer),localStorage.getItem("uploadImage")){this.img=localStorage.getItem("uploadImage");var i=this.dataURLtoFile(this.img,"image.png");n.append("image",i)}else n.append("image",null);var o=this.$store.state.apiUrl+"bbti";p.a.post(o,n).then(function(t){localStorage.removeItem("uploadImage");var n=e.resultDict[t.data.bbti];e.$router.push({name:"ResultPage",params:{resultId:n}})}).catch(function(t){g("error","결과를 얻는 데 실패했어요! 오류메시지=> "+t);var n=Math.floor(10*Math.random())%4+1;e.$router.push({name:"ResultPage",params:{resultId:n}})})}},dataURLtoFile:function(t,e){for(var n=t.split(","),i=n[0].match(/:(.*?);/)[1],o=atob(n[1]),r=o.length,a=new Uint8Array(r);r--;)a[r]=o.charCodeAt(r);return new File([a],e,{type:i})},getImgUrl:function(){return"/static/images/question_"+(this.questionIndex+1)+".png"}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti fontNexonRegular"},[n("h4",[t._v(t._s(t.questionIndex+1)+" / "+t._s(t.questions.length)+" ")]),t._v(" "),n("span",[t._v(t._s(t.questions[t.questionIndex]))])]),t._v(" "),n("div",{staticClass:"mainBbti"},[n("div",{staticStyle:{height:"45vh","text-align":"center"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}})])]),t._v(" "),n("div",{staticClass:"bottomBbti"},[n("div",{staticClass:"btnWrapper fontNexonBold"},t._l(t.selections[t.questionIndex],function(e,i){return n("div",{key:i},[n("v-btn",{staticClass:"btnMain",attrs:{depressed:"",rounded:"","x-large":"",color:"#dff3e3"},on:{click:function(e){return t.selectAnswer(i)}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)}),0)])])},staticRenderFns:[]};var E=n("VU/8")(M,$,!1,function(t){n("3096")},"data-v-90451e0a",null).exports,U=n("eMjc"),S=n.n(U),O={name:"ResultPage",data:function(){return{resultId:this.$route.params.resultId,resultTitle:["경계심 가득한 도도한","누가 뭐래도 나는<br>이구역 인싸!","함께해서 행복한<br>애교쟁이","순딩이 울애기"],resultText:["야생성을 간직하고 있어요<br>예민한 곳을 만지는 건 허용하지 않아요<br>먹이사슬의 최하층에 있는 게 토끼니까<br>경계심 많고 겁 많은 건 이해돼요<br>가끔은 애교있는 다른 토끼들 이야기를<br>들으면 조금은 섭섭하긴 해요<br>하지만 여전히 예쁜 내 토끼에요","일반적인 토끼의 규칙은<br>내 토끼에게 적용되지 않아요.<br>가끔 얘가 토끼인지 사람인지 모르겠어요.<br>그동안 먹여주고 입혀주고(?)<br>재워준 건 난데<br>집사고 뭐고 사람을 좋아하는 편이에요.<br>간식이라도 가지고 있으면 난리남!","사람을 좋아하는 토끼!<br>집사 껌딱지!<br>애교가 많아서 하루하루<br>나를 행복하게 만들어줘요<br>집사에게 긍정적인 기운을<br>뿜뿜 뿜어준답니다!","너무 순딩순딩한 인형 같은 토끼!<br>다른 토끼들은 허락하지 않는 곳까지<br>만질 수 있게 해줘요<br>"],imgCaptured:null}},methods:{getImgUrl:function(){return"/static/images/result_type_"+this.resultId+".png"},getImgWebUrl:function(){return(location.protocol+"//"+location.host+this.getImgUrl()).replace(".png","_kakao.png")},shareKakao:function(){console.log(this.getImgWebUrl()),Kakao.Link.createDefaultButton({container:"#btnKakao",objectType:"feed",content:{title:"내 토끼는 무슨 유형?",description:this.resultTitle[this.resultId-1].replace("<br>"," "),imageUrl:this.getImgWebUrl(),link:{mobileWebUrl:"https://bbti.site"}},buttons:[{title:"결과 보기",link:{mobileWebUrl:location.href}},{title:"나도 해보기",link:{mobileWebUrl:"https://bbti.site"}}]})},captureImage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.html2canvas=S.a,S()(document.body).then(function(t){var e=document.createElement("a");if("string"==typeof e.download){e.href=t.toDataURL("image/png");var n=new Date;e.download="bbti-"+n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate()+".png",document.body.appendChild(e),e.click(),document.body.removeChild(e)}else window.open(t.toDataURL("image/png"))}).catch(function(t){console.log(t)})},redo:function(){this.$router.push("/guide")}},mounted:function(){this.shareKakao()}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"topBbti"},[n("h1",{staticClass:"fontKotraBold font2em msgMt3vh"},[n("span",{attrs:{id:"bunny"},domProps:{innerHTML:t._s(t.resultTitle[t.resultId-1])}})])]),t._v(" "),n("div",{staticClass:"mainBbti"},[n("div",{staticStyle:{height:"45vh","text-align":"center"}},[n("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.getImgUrl()}}),t._v(" "),n("img",{attrs:{src:t.imgCaptured}})]),t._v(" "),n("v-alert",{staticClass:"fontNexonRegular lhWide",staticStyle:{"background-color":"rgb(225 225 225 / 45%)"},attrs:{border:"top"},domProps:{innerHTML:t._s(t.resultText[t.resultId-1])}}),t._v(" "),n("div",{staticClass:"btnWrapper fontNexonBold btnFlex"},[t._m(0),t._v(" "),n("button",{attrs:{"data-html2canvas-ignore":"true"},on:{click:t.captureImage}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/download_black.png"}})]),t._v(" "),n("button",{attrs:{"data-html2canvas-ignore":"true"},on:{click:t.redo}},[n("img",{staticClass:"btnImg",attrs:{src:"/static/icons/redo_black.png"}})])])],1),t._v(" "),n("div",{staticClass:"bottomBbti",staticStyle:{height:"10vh"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{id:"btnKakao","data-html2canvas-ignore":"true"}},[e("img",{staticClass:"btnImg",attrs:{src:"/static/icons/kakao-talk_black.png"}})])}]};var A=n("VU/8")(O,P,!1,function(t){n("ooxE")},"data-v-c175bdd2",null).exports;i.default.use(a.a);var j=new a.a({mode:"hash",routes:[{path:"/",name:"WelComePage",component:y},{path:"/guide",name:"GuidePage",component:I},{path:"/check",name:"CheckUploadPage",component:C},{path:"/question",name:"QuestionPage",component:E},{path:"/result/:resultId",name:"ResultPage",component:A}]}),B=n("3EgV"),R=n.n(B),V=(n("7zck"),n("sYCn")),G=n.n(V);i.default.use(R.a),i.default.use(G.a);var N=new R.a({});i.default.config.productionTip=!1,Kakao.init("0a5e2d5eac3367c0b50c2f71f0e7f5b1"),console.log(Kakao.isInitialized()),new i.default({el:"#app",router:j,vuetify:N,store:m,components:{App:r},template:"<App/>"})},cAVx:function(t,e){},"d/Pf":function(t,e){},ooxE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.33e0e980ae60a42a7111.js.map