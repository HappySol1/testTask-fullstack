(function(){"use strict";var e={9079:function(e,t,s){var a=s(9242),n=s(3396);const o={class:"container"};function r(e,t,s,a,r,l){const c=(0,n.up)("user"),i=(0,n.up)("chat");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(c),(0,n.Wm)(i)])}const l=e=>((0,n.dD)("data-v-7e48ec0c"),e=e(),(0,n.Cn)(),e),c={class:"login-form"},i=l((()=>(0,n._)("label",{for:"login",class:"login-form__label"},"Введите логин",-1)));function u(e,t,s,o,r,l){return(0,n.wg)(),(0,n.iD)("div",c,[i,(0,n.wy)((0,n._)("input",{id:"login","onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e),class:"login-form__input",onBlur:t[1]||(t[1]=(...e)=>l.updateStore&&l.updateStore(...e)),onKeyup:t[2]||(t[2]=(0,a.D2)(((...e)=>l.blur&&l.blur(...e)),["enter"])),type:"text"},null,544),[[a.nr,r.name]])])}var d=s(65),g={data(){return{name:""}},methods:{...(0,d.nv)({setName:"setName"}),blur(e){e.target.blur()},updateStore(){localStorage.setItem("name",this.name),this.setName(this.name)}},mounted(){let e=localStorage.getItem("name");e&&(this.name=e,this.setName(e))}},m=s(89);const h=(0,m.Z)(g,[["render",u],["__scopeId","data-v-7e48ec0c"]]);var v=h,_=s(7139);const f=e=>((0,n.dD)("data-v-1b63c8b8"),e=e(),(0,n.Cn)(),e),p={class:"chat"},b={key:0,class:"chat__loader"},w=f((()=>(0,n._)("div",{class:"lds-dual-ring"},null,-1))),y=[w],k=f((()=>(0,n._)("div",{class:"chat__header"},null,-1))),C={class:"chat__history",ref:"scrollableBlock"},x={class:"message__sender"},q={class:"message__wrap"},R=["onClick"],A={class:"message__text"},P=f((()=>(0,n._)("div",{class:"message__like-button"},null,-1))),O={class:"message__time"},D={class:"chat__message"},M={class:"chat__message-wrap"},I=f((()=>(0,n._)("img",{src:"Arrow.svg"},null,-1))),S=[I];function N(e,t,s,o,r,l){return(0,n.wg)(),(0,n.iD)("div",p,[e.getIsRequest?((0,n.wg)(),(0,n.iD)("div",b,y)):(0,n.kq)("",!0),k,(0,n._)("div",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.messeges,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"message",key:t.id},[(0,n._)("div",x,(0,_.zw)(t.username),1),(0,n._)("div",q,[(0,n._)("div",{class:"message__delete",onClick:s=>e.deletePost(t.id)},null,8,R),(0,n._)("div",A,(0,_.zw)(t.text),1),P,(0,n._)("div",O,(0,_.zw)(t.created_at),1)])])))),128))],512),(0,n._)("div",D,[(0,n._)("div",M,[(0,n.wy)((0,n._)("input",{class:"chat__message-input",onKeyup:t[0]||(t[0]=(0,a.D2)(((...e)=>l.sendmassage&&l.sendmassage(...e)),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),type:"text"},null,544),[[a.nr,r.value]]),(0,n._)("div",{class:"chat__message-sendbtn",onClick:t[2]||(t[2]=(...e)=>l.sendmassage&&l.sendmassage(...e))},S)])])])}var j={data(){return{value:""}},methods:{...(0,d.nv)({addMessage:"addMessage",getPosts:"getPosts",deletePost:"deletePost"}),sendmassage(e){this.value&&(this.addMessage(this.value),this.value="",e.target.blur())}},computed:{...(0,d.Se)({messeges:"getMessagesArr",getIsRequest:"getIsRequest"}),name(){return this.data}},mounted(){this.getPosts()},watch:{messeges(){this.$nextTick((()=>{const e=this.$refs.scrollableBlock,t=e.scrollHeight;e.scrollTop=t}))}}};const T=(0,m.Z)(j,[["render",N],["__scopeId","data-v-1b63c8b8"]]);var z=T,Z={name:"App",components:{user:v,chat:z}};const B=(0,m.Z)(Z,[["render",r]]);var K=B,U=s(4161);const H=U.Z.create({baseURL:"http://dzpages.ru/api/",headers:{"Content-Type":"text/plain"}});var V=H;const W=()=>V.get("/get_all_posts"),$=e=>V.post("/create_post",e),E=e=>V["delete"]("/delete_post",{params:{id:e}});s(2801);const F="mysecretkey";function L(e){let t="";for(let s=0;s<e.length;s++)t+=String.fromCharCode(F.charCodeAt(s%F.length)^e.charCodeAt(s));return btoa(t)}function Y(e){e=atob(e);let t="";for(let s=0;s<e.length;s++)t+=String.fromCharCode(F.charCodeAt(s%F.length)^e.charCodeAt(s));return t}var G=(0,d.MT)({state:{isRequest:!1,messagesArr:[],name:""},getters:{getIsRequest(e){return e.isRequest},getMessagesArr(e){return e.messagesArr}},mutations:{setName(e,t){e.name=t},toggleisRequest(e,t){e.isRequest=t},addMessage(e,t){e.messagesArr=[...e.messagesArr,{...t,text:Y(t.text)}]},addPosts(e,t){e.messagesArr=t,console.log(t),console.log(t.map((e=>e.text=Y(e.text))))}},actions:{setName({commit:e},t){e("setName",t)},addMessage({commit:e,state:t},s){L(s);e("toggleisRequest",!0),$({text:L(s),username:t.name?t.name:"Аноним"}).then((t=>{e("addMessage",t.data),e("toggleisRequest",!1)})).catch((e=>{console.log(e)}))},getPosts({commit:e}){e("toggleisRequest",!0),W().then((t=>{e("addPosts",t.data),e("toggleisRequest",!1)})).catch((e=>{console.log(e)}))},deletePost({commit:e,dispatch:t},s){console.log(s),e("toggleisRequest",!0),E(s).then((e=>{t("getPosts")})).catch((e=>{console.log(e)}))}}});(0,a.ri)(K).use(G).mount("#app")}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,o){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],o=e[u][2];for(var l=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,r=a[0],l=a[1],c=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)var u=c(s)}for(t&&t(a);i<r.length;i++)o=r[i],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},a=self["webpackChunktesttask"]=self["webpackChunktesttask"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9079)}));a=s.O(a)})();
//# sourceMappingURL=app.217c11bb.js.map