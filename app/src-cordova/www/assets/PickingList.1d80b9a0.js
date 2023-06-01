import{Q as p}from"./QItemLabel.d797dbce.js";import{Q as le,a as X,b as L}from"./QList.961a0366.js";import{_ as ce,az as de,J as ue,aP as re,r as Q,c as o,w as F,o as ge,M as w,V as I,f as n,R as s,aR as me,F as O,S as r,U as c,X as Y,W as pe,aS as fe,Y as H,$ as K,O as ve,m as U,aT as he,aB as be,aA as _e}from"./index.c1f9df61.js";import{Q as ye,a as ke,b as Ce}from"./QBar.f570072f.js";import{C as De}from"./ClosePopup.f2a4bb7c.js";import{u as Se}from"./use-quasar.03141881.js";import{a as V}from"./index.2885cb15.js";import{u as $e}from"./vue-i18n.runtime.esm-bundler.76c89422.js";import"./selection.a9e35a2a.js";const Qe=de({name:"PickingList",data(){return{}},setup(){const e=ue();re();const l=Se(),f=Q(0),g=Q({}),y=Q(!1),q=Q([]),{t}=$e(),k=o({get:()=>e.state.fabchange.fab1}),A=o({get:()=>e.state.fabchange.fab2}),Z=o({get:()=>e.state.fabchange.fab3}),x=o({get:()=>e.state.fabchange.fab4}),P=o({get:()=>e.state.screenchange.screenscroll}),j=o({get:()=>e.state.loginauth.authin}),E=o({get:()=>e.state.loginauth.login_name}),v=o({get:()=>e.state.loginauth.operator}),h=o({get:()=>e.state.settings.openid}),b=o({get:()=>e.state.langchange.lang}),m=o({get:()=>e.state.settings.server}),N=o({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),ee=o({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),ae=o({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),te=o({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),ne=o({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),C=o({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),D=o({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),M=o({get:()=>e.state.scanchanged.bar_scanned}),u=o({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),S=o({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),R=o({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function J(a){if(a!==null){var i=m.value.split(":"),d=a.split(":");return i[0]!==d[0]?i[0]+":"+d[1]:d}else return null}function $(a){C.value=[],u.value=m.value+"dn/pickinglistfilter/?pick_qty__gt=0&picking_status=0",z(a)}function z(a){V.get(u.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:h.value,language:b.value,operator:v.value}}).then(i=>{if(i.data.detail)l.notify({type:"negative",message:t("notice.mobile_scan.notice1")});else{var d=[];C.value.forEach(_=>{d.push(_)}),i.data.results.forEach(_=>{d.push(_)}),C.value=d,R.value=J(i.data.previous),S.value=J(i.data.next)}}).catch(i=>{l.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})}function oe(a){g.value=JSON.parse(JSON.stringify(a)),y.value=!0}function G(){y.value=!1}function se(a){u.value=m.value+"dn/list/?dn_code="+g.value.dn_code,V.get(u.value,{headers:{"Content-Type":'application/json, charset="utf-8"',token:h.value,language:b.value,operator:v.value}}).then(i=>{i.data.detail?l.notify({type:"negative",message:t("notice.mobile_scan.notice1")}):ie(i.data.results[0])}).catch(i=>{l.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})}function ie(a){if(g.value.picked_qty===""||g.value.picked_qty===0)l.notify({type:"negative",message:t("notice.mobile_dn.notice12")});else{u.value=m.value+"dn/picked/"+a.id+"/";const i={creater:E.value,customer:a.customer,dn_code:a.dn_code,goodsData:[g.value]};V.post(u.value,i,{headers:{"Content-Type":"application/json",token:h.value,language:b.value,operator:v.value}}).then(d=>{d.data.detail||l.notify({message:t("notice.mobile_dn.notice13")}),G(),$("")}).catch(d=>{l.notify({message:t("notice.network_error")})})}}return F(M,(a,i)=>{D.value==="GOODS"?$("&goods_code="+N.value):D.value==="DN"&&$("&dn_code="+N.value)}),F(P,(a,i)=>{a===1?S.value!==null&&(u.value=S.value,f.value=1):f.value=0}),F(f,(a,i)=>{a===1&&(j.value==="0"?l.notify({type:"negative",message:t("notice.mobile_userlogin.notice9")}):z(""))}),ge(()=>{D.value="DN",$("")}),{t,fab1:k,fab2:A,fab3:Z,fab4:x,screenscroll:P,authin:j,login_name:E,openid:h,operator:v,lang:b,requestauth:f,baseurl:m,apiurl:u,apiurlnext:S,apiurlprevious:R,scandata:N,datadetail:ee,tablelist:C,asndata:ae,dndata:te,bindata:ne,scanmode:D,bar_scanned:M,submitdata:g,dialogForm:y,dataSubmit:oe,cancelSubmitData:G,submitData:se,options:q,error1:t("notice.mobile_asn.notice11"),filterFn(a,i,d){if(a.length<2){d();return}i(()=>{const _=a.toLowerCase();u.value=m.value+"binset/?bin_name__icontains=",V.get(u.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:h.value,language:b.value,operator:v.value}}).then(T=>{if(!T.data.detail){var W=[];T.data.results.forEach(B=>{W.push(B.bin_name)}),q.value=W.filter(B=>B.toLowerCase().indexOf(_)>-1)}}).catch(T=>{l.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})})}}}}),we={style:{float:"right",padding:"15px 15px 15px 0"}};function Ve(e,l,f,g,y,q){return w(),I(O,null,[n(le,{bordered:"",padding:""},{default:s(()=>[n(X,null,{default:s(()=>[n(L,null,{default:s(()=>[n(p,{overline:""},{default:s(()=>[r(c(e.$t("outbound.pickinglist")),1)]),_:1}),n(p,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice11")),1)]),_:1})]),_:1})]),_:1}),n(Y,{spaced:""}),(w(!0),I(O,null,pe(e.tablelist,(t,k)=>(w(),I(O,{key:k},[n(X,null,{default:s(()=>[n(L,{onClick:A=>e.dataSubmit(t)},{default:s(()=>[n(p,null,{default:s(()=>[r(c(t.dn_code),1)]),_:2},1024),n(p,{caption:"",lines:"2"},{default:s(()=>[r(c(e.$t("goods.view_goodslist.goods_code"))+": "+c(t.goods_code),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(L,{side:"",top:""},{default:s(()=>[n(p,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice14"))+c(t.bin_name),1)]),_:2},1024),n(p,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice15"))+c(t.pick_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),K(n(Y,{spaced:"",inset:"item"},null,512),[[_e,k+1!==e.tablelist.length]])],64))),128))]),_:1}),n(me,{modelValue:e.dialogForm,"onUpdate:modelValue":l[2]||(l[2]=t=>e.dialogForm=t)},{default:s(()=>[n(fe,{class:"shadow-24"},{default:s(()=>[n(ye,{class:"bg-light-blue-10 text-white rounded-borders",style:{height:"50px"}},{default:s(()=>[H("div",null,c(e.submitdata.goods_code),1),n(ke),K((w(),ve(U,{dense:"",flat:"",icon:"close"},{default:s(()=>[n(Ce,null,{default:s(()=>[r(c(e.$t("index.close")),1)]),_:1})]),_:1})),[[De]])]),_:1}),n(he,{class:"scroll"},{default:s(()=>[n(be,{dense:"",outlined:"",square:"",debounce:"500",modelValue:e.submitdata.picked_qty,"onUpdate:modelValue":l[0]||(l[0]=t=>e.submitdata.picked_qty=t),modelModifiers:{number:!0},type:"number",label:e.$t("stock.view_stocklist.goods_qty"),style:{"margin-bottom":"5px"},onClick:l[1]||(l[1]=t=>e.submitdata.picked_qty=""),rules:[t=>t&&t>0||e.error1]},null,8,["modelValue","label","rules"])]),_:1}),H("div",we,[n(U,{color:"white","text-color":"black",style:{"margin-right":"25px"},onClick:e.cancelSubmitData},{default:s(()=>[r(c(e.$t("cancel")),1)]),_:1},8,["onClick"]),n(U,{color:"primary",onClick:e.submitData},{default:s(()=>[r(c(e.$t("submit")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])],64)}var Ae=ce(Qe,[["render",Ve]]);export{Ae as default};
