(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0b2f":function(t,e){},"67bd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"q-mr-md"},[t._v(t._s(t.$t("download_center.createTime")))]),e("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:t.interval},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{range:""},model:{value:t.createDate1,callback:function(e){t.createDate1=e},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:t.createDate2,callback:function(e){t.createDate2=e},expression:"createDate2"}}),e("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(e){return t.reset()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("download_center.reset")))])],1),e("q-btn",{attrs:{label:t.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(e){return t.downloadlistData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("downloadasnlisttip")))])],1),e("q-btn",{attrs:{label:t.$t("downloadasndetail"),icon:"cloud_download"},on:{click:function(e){return t.downloaddetailData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("downloadasndetailtip")))])],1)],1)],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"dn_code",attrs:{props:a}},[t._v(t._s(a.row.dn_code))]),e("q-td",{key:"dn_status",attrs:{props:a}},[t._v(t._s(a.row.dn_status))]),e("q-td",{key:"total_weight",attrs:{props:a}},[t._v(t._s(a.row.total_weight.toFixed(4)))]),e("q-td",{key:"total_volume",attrs:{props:a}},[t._v(t._s(a.row.total_volume.toFixed(4)))]),e("q-td",{key:"customer",attrs:{props:a}},[t._v(t._s(a.row.customer))]),e("q-td",{key:"creater",attrs:{props:a}},[t._v(t._s(a.row.creater))]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v(t._s(a.row.create_time))]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v(t._s(a.row.update_time))])],1)]}}])})],1),[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.max,expression:"max !== 0"}],staticClass:"q-pa-lg flex flex-center"},[e("div",[t._v(t._s(t.total)+" ")]),e("q-pagination",{attrs:{color:"black",max:t.max,"max-pages":6,"boundary-links":""},on:{click:function(e){return t.getList()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paginationIpt,expression:"paginationIpt"}],staticStyle:{width:"60px","text-align":"center"},domProps:{value:t.paginationIpt},on:{blur:t.changePageEnter,input:function(e){e.target.composing||(t.paginationIpt=e.target.value)}}})])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.max,expression:"max === 0"}],staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},n=[],o=(a("5319"),a("3004")),i=a("bd4c"),r=a("a357"),d=a("18d6"),l={name:"Pageasnlist",data(){return{login_name:"",authin:"0",pathname:"dn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"dn_code",required:!0,label:this.$t("outbound.view_dn.dn_code"),align:"left",field:"dn_code"},{name:"dn_status",label:this.$t("outbound.view_dn.dn_status"),field:"dn_status",align:"center"},{name:"total_weight",label:this.$t("outbound.view_dn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("outbound.view_dn.total_volume"),field:"total_volume",align:"center"},{name:"customer",label:this.$t("outbound.view_dn.customer"),field:"customer",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",searchUrl:"",downloadUrl:"dn/filelist/",downloadDetailUrl:"dn/filedetail/",current:1,max:0,total:0,paginationIpt:1}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(t){t&&(t.to?(this.createDate2=`${t.from} - ${t.to}`,this.date_range=`${t.from},${t.to} 23:59:59`,this.searchUrl=this.pathname+"list/?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"filelist/?create_time__range="+this.date_range,this.downloadDetailUrl=this.pathname+"filedetail/?create_time__range="+this.date_range):(this.createDate2=`${t}`,this.dateArray=t.split("/"),this.searchUrl=this.pathname+"list/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"filelist/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadDetailUrl=this.pathname+"filedetail/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var t=this;Object(o["f"])(t.pathname+"list/?page="+t.current).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),e.results.forEach((e=>{1===e.asn_status&&(e.asn_status=t.$t())})),t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},changePageEnter(t){Number(this.paginationIpt)<1?(this.current=1,this.paginationIpt=1):Number(this.paginationIpt)>this.max?(this.current=this.max,this.paginationIpt=this.max):this.current=Number(this.paginationIpt),this.getList()},getSearchList(){var t=this;Object(o["f"])(t.searchUrl+"&page="+t.current).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;Object(o["f"])(t.pathname_previous,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;Object(o["f"])(t.pathname_next,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},downloadlistData(){var t=this;Object(o["g"])(t.downloadUrl).then((e=>{var a=Date.now(),s=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"list"+s+".csv","\ufeff"+e.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},downloaddetailData(){var t=this;Object(o["g"])(t.downloadDetailUrl).then((e=>{var a=Date.now(),s=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"detail"+s+".csv","\ufeff"+e.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="dn/filelist/",this.downloadDetailUrl="dn/filedetail/",this.createDate2=""}},created(){var t=this;d["a"].has("openid")?t.openid=d["a"].getItem("openid"):(t.openid="",d["a"].set("openid","")),d["a"].has("login_name")?t.login_name=d["a"].getItem("login_name"):(t.login_name="",d["a"].set("login_name","")),d["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=l,u=a("42e1"),_=a("f32d"),h=a("eaac"),p=a("27f9"),m=a("0016"),g=a("7cbe"),b=a("52ee"),f=a("e7a9"),v=a("9c40"),w=a("05c0"),x=a("bd08"),$=a("db86"),y=a("3b16"),k=a("eebe"),q=a.n(k),D=Object(u["a"])(c,s,n,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(D);e["default"]=D.exports;q()(D,"components",{QTable:h["a"],QInput:p["a"],QIcon:m["a"],QPopupProxy:g["a"],QDate:b["a"],QBtnGroup:f["a"],QBtn:v["a"],QTooltip:w["a"],QTr:x["a"],QTd:$["a"],QPagination:y["a"]})},f32d:function(t,e,a){"use strict";var s=a("0b2f"),n=a.n(s);e["default"]=n.a}}]);