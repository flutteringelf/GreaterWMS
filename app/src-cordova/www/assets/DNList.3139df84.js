import{Q as d}from"./QItemLabel.ea638770.js";import{Q as H,b as C,a as j}from"./QList.12b6d0d7.js";import{_ as J,aD as K,L as W,aS as X,r as ee,c as t,w as $,o as ae,R as N,S as te,U as s,f as n,Y as u,Z as c,a1 as x,$ as O,a0 as ne,F as P,V as se,a3 as oe}from"./index.d987244c.js";import{u as ce}from"./use-quasar.1771e891.js";import{a as le}from"./index.9b9dbd7c.js";import{u as ie}from"./vue-i18n.runtime.esm-bundler.cd13b73a.js";import"./axios.d3fea899.js";const de=K({name:"DNList",data(){return{}},setup(){const e=W(),S=X(),m=ce(),r=ee(0),{t:g}=ie(),L=t({get:()=>e.state.fabchange.fab1}),l=t({get:()=>e.state.fabchange.fab2}),h=t({get:()=>e.state.fabchange.fab3}),w=t({get:()=>e.state.fabchange.fab4}),y=t({get:()=>e.state.screenchange.screenscroll}),Q=t({get:()=>e.state.linkchange.oldlink,set:a=>{e.commit("linkchange/OldLinkChanged",a)}}),V=t({get:()=>e.state.linkchange.newlink,set:a=>{e.commit("linkchange/NewLinkChanged",a)}}),A=t({get:()=>e.state.loginauth.authin}),Y=t({get:()=>e.state.loginauth.login_name}),B=t({get:()=>e.state.loginauth.operator}),I=t({get:()=>e.state.settings.openid}),T=t({get:()=>e.state.langchange.lang}),_=t({get:()=>e.state.settings.server}),U=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),Z=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),z=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),D=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),G=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),f=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),p=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),E=t({get:()=>e.state.scanchanged.bar_scanned}),v=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),b=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),q=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function F(a){if(a!==null){var o=_.value.split(":"),i=a.split(":");return o[0]!==i[0]?o[0]+":"+i[1]:i}else return null}function M(a){D.value=a,p.value="DN",Q.value="dnlist",V.value="dndetail",S.push({name:"dndetail"})}function R(a){le.get(v.value+a,{headers:{"Content-Type":"application/json",token:I.value,language:T.value,operator:B.value}}).then(o=>{if(o.data.detail)m.notify({type:"negative",message:g("notice.mobile_scan.notice1")});else{var i=[];f.value.forEach(k=>{i.push(k)}),o.data.results.forEach(k=>{i.push(k)}),f.value=i,q.value=F(o.data.previous),b.value=F(o.data.next)}}).catch(o=>{m.notify({type:"negative",message:g("notice.mobile_scan.notice3")})})}return $(y,(a,o)=>{a>=.95?b.value!==null&&(v.value=b.value,r.value=1):r.value=0}),$(r,(a,o)=>{a===1&&R("")}),$(E,(a,o)=>{p.value==="DN"&&M(U.value)}),ae(()=>{A.value==="0"?m.notify({type:"negative",message:g("notice.mobile_userlogin.notice9")}):(p.value="DN",v.value=_.value+"dn/list/",D.value="",f.value=[],R(""))}),{t:g,fab1:L,fab2:l,fab3:h,fab4:w,screenscroll:y,oldlink:Q,newlink:V,authin:A,login_name:Y,openid:I,operator:B,lang:T,requestauth:r,baseurl:_,apiurl:v,apiurlnext:b,apiurlprevious:q,scandata:U,datadetail:Z,tablelist:f,asndata:z,dndata:D,bindata:G,scanmode:p,bar_scanned:E,DetailLine:M}}});function ue(e,S,m,r,g,L){return N(),te(H,{bordered:"",padding:""},{default:s(()=>[n(j,null,{default:s(()=>[n(C,null,{default:s(()=>[n(d,{overline:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice1")),1)]),_:1}),n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice2")),1)]),_:1})]),_:1})]),_:1}),n(x,{spaced:""}),(N(!0),O(P,null,ne(e.tablelist,(l,h)=>(N(),O(P,{key:h},[n(j,null,{default:s(()=>[n(C,{onClick:w=>e.DetailLine(l.dn_code)},{default:s(()=>[n(d,null,{default:s(()=>[u(c(l.dn_code),1)]),_:2},1024),n(d,{caption:"",lines:"2"},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice3"))+c(l.customer),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(C,{side:"",top:""},{default:s(()=>[n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice4"))+":"+c(l.total_cost),1)]),_:2},1024),n(d,{caption:""},{default:s(()=>[u(c(e.$t("notice.mobile_dn.notice5"))+c(l.dn_status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),se(n(x,{spaced:"",inset:"item"},null,512),[[oe,h+1!==e.tablelist.length]])],64))),128))]),_:1})}var be=J(de,[["render",ue]]);export{be as default};
