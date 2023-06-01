import{Q as d}from"./QItemLabel.9fc1e402.js";import{Q as H,b as C,a as x}from"./QList.51918774.js";import{_ as J,aD as K,L as W,aS as X,r as ee,c as t,w as D,o as ae,R as $,S as te,U as s,f as n,Y as g,Z as c,a1 as F,$ as M,a0 as ne,F as R,V as se,a3 as oe}from"./index.f89e22ff.js";import{u as ce}from"./use-quasar.9196b276.js";import{a as ie}from"./index.e56f7e34.js";import{u as le}from"./vue-i18n.runtime.esm-bundler.386ff9c8.js";import"./axios.e6fce94e.js";const de=K({name:"GoodsStock",data(){return{}},setup(){const e=W(),w=X(),h=ce(),r=ee(0),{t:u}=le(),y=t({get:()=>e.state.fabchange.fab1}),i=t({get:()=>e.state.fabchange.fab2}),m=t({get:()=>e.state.fabchange.fab3}),L=t({get:()=>e.state.fabchange.fab4}),Q=t({get:()=>e.state.linkchange.oldlink,set:a=>{e.commit("linkchange/OldLinkChanged",a)}}),O=t({get:()=>e.state.linkchange.newlink,set:a=>{e.commit("linkchange/NewLinkChanged",a)}}),V=t({get:()=>e.state.screenchange.screenscroll}),N=t({get:()=>e.state.loginauth.authin}),j=t({get:()=>e.state.loginauth.login_name}),B=t({get:()=>e.state.loginauth.operator}),G=t({get:()=>e.state.settings.openid}),A=t({get:()=>e.state.langchange.lang}),_=t({get:()=>e.state.settings.server}),k=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),P=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),Y=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),Z=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),z=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),f=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),p=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),I=t({get:()=>e.state.scanchanged.bar_scanned,set:a=>{e.commit("scanchanged/BarScannedChanged",a)}}),v=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),b=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),T=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function U(a){if(a!==null){var o=_.value.split(":"),l=a.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function E(a){k.value=a,p.value="GOODS",Q.value="goodsstock",O.value="binstock",w.push({name:"binstock"})}function q(a){ie.get(v.value+a,{headers:{"Content-Type":"application/json",token:G.value,language:A.value,operator:B.value}}).then(o=>{if(o.data.detail)h.notify({type:"negative",message:u("notice.mobile_scan.notice1")});else{var l=[];f.value.forEach(S=>{l.push(S)}),o.data.results.forEach(S=>{l.push(S)}),f.value=l,T.value=U(o.data.previous),b.value=U(o.data.next)}}).catch(o=>{h.notify({type:"negative",message:u("notice.mobile_scan.notice3")})})}return D(V,(a,o)=>{a>=.95?b.value!==null&&(v.value=b.value,r.value=1):r.value=0}),D(r,(a,o)=>{a===1&&q("")}),D(I,(a,o)=>{p.value==="GOODS"&&E(k.value)}),ae(()=>{N.value==="0"?h.notify({type:"negative",message:u("notice.mobile_userlogin.notice9")}):(p.value="GOODS",v.value=_.value+"stock/list/?ordering=-id",f.value=[],q(""))}),{t:u,fab1:y,fab2:i,fab3:m,fab4:L,oldlink:Q,newlink:O,screenscroll:V,authin:N,login_name:j,openid:G,operator:B,lang:A,requestauth:r,baseurl:_,apiurl:v,apiurlnext:b,apiurlprevious:T,scandata:k,datadetail:P,tablelist:f,asndata:Y,dndata:Z,bindata:z,scanmode:p,bar_scanned:I,DetailLine:E}}});function ge(e,w,h,r,u,y){return $(),te(H,{bordered:"",padding:""},{default:s(()=>[n(x,null,{default:s(()=>[n(C,null,{default:s(()=>[n(d,{overline:""},{default:s(()=>[g(c(e.$t("notice.mobile_goodsstock.notice1")),1)]),_:1}),n(d,{caption:""},{default:s(()=>[g(c(e.$t("notice.mobile_goodsstock.notice2")),1)]),_:1})]),_:1})]),_:1}),n(F,{spaced:""}),($(!0),M(R,null,ne(e.tablelist,(i,m)=>($(),M(R,{key:m},[n(x,null,{default:s(()=>[n(C,{onClick:L=>e.DetailLine(i.goods_code)},{default:s(()=>[n(d,null,{default:s(()=>[g(c(i.goods_code),1)]),_:2},1024),n(d,{caption:"",lines:"2"},{default:s(()=>[g(c(i.goods_desc),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(C,{side:"",top:""},{default:s(()=>[n(d,{caption:""},{default:s(()=>[g(c(e.$t("notice.mobile_goodsstock.notice3"))+":"+c(i.onhand_stock),1)]),_:2},1024),n(d,{caption:""},{default:s(()=>[g(c(e.$t("notice.mobile_goodsstock.notice4"))+c(i.can_order_stock),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),se(n(F,{spaced:"",inset:"item"},null,512),[[oe,m+1!==e.tablelist.length]])],64))),128))]),_:1})}var be=J(de,[["render",ge]]);export{be as default};
