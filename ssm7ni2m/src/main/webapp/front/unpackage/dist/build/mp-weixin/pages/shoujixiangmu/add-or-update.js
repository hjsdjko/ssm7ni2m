(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shoujixiangmu/add-or-update"],{"1c50":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var o=n[r](u),s=o.value}catch(g){return void i(g)}o.done?e(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("3500"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{xiangmumingcheng:"",xiangmuleixing:"",xiangmutupian:"",xiangmuzhuangtai:"",quexianshuliang:"",xiangmuxinxi:"",gengxinriqi:"",yonghuming:"",sfsh:"",shhf:"",userid:""},xiangmuleixingOptions:[],xiangmuleixingIndex:0,xiangmuzhuangtaiOptions:[],xiangmuzhuangtaiIndex:0,user:{},ro:{xiangmumingcheng:!1,xiangmuleixing:!1,xiangmutupian:!1,xiangmuzhuangtai:!1,quexianshuliang:!1,xiangmuxinxi:!1,gengxinriqi:!1,yonghuming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var i=this;return u(t.default.mark((function a(){var r,u,o,s;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i.ruleForm.gengxinriqi=i.$utils.getCurDate(),r=n.getStorageSync("nowTable"),a.next=4,i.$api.session(r);case 4:return u=a.sent,i.user=u.data,i.ruleForm.yonghuming=i.user.yonghuming,i.ro.yonghuming=!0,a.next=10,i.$api.option("xiangmuleixing","xiangmuleixing",{});case 10:if(u=a.sent,i.xiangmuleixingOptions=u.data,i.xiangmuzhuangtaiOptions="进行中,已完成".split(","),i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=21;break}return i.ruleForm.id=e.id,a.next=19,i.$api.info("shoujixiangmu",i.ruleForm.id);case 19:u=a.sent,i.ruleForm=u.data;case 21:if(i.cross=e.cross,!e.cross){a.next=65;break}o=n.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 25:if((a.t1=a.t0()).done){a.next=65;break}if(s=a.t1.value,"xiangmumingcheng"!=s){a.next=31;break}return i.ruleForm.xiangmumingcheng=o[s],i.ro.xiangmumingcheng=!0,a.abrupt("continue",25);case 31:if("xiangmuleixing"!=s){a.next=35;break}return i.ruleForm.xiangmuleixing=o[s],i.ro.xiangmuleixing=!0,a.abrupt("continue",25);case 35:if("xiangmutupian"!=s){a.next=39;break}return i.ruleForm.xiangmutupian=o[s],i.ro.xiangmutupian=!0,a.abrupt("continue",25);case 39:if("xiangmuzhuangtai"!=s){a.next=43;break}return i.ruleForm.xiangmuzhuangtai=o[s],i.ro.xiangmuzhuangtai=!0,a.abrupt("continue",25);case 43:if("quexianshuliang"!=s){a.next=47;break}return i.ruleForm.quexianshuliang=o[s],i.ro.quexianshuliang=!0,a.abrupt("continue",25);case 47:if("xiangmuxinxi"!=s){a.next=51;break}return i.ruleForm.xiangmuxinxi=o[s],i.ro.xiangmuxinxi=!0,a.abrupt("continue",25);case 51:if("gengxinriqi"!=s){a.next=55;break}return i.ruleForm.gengxinriqi=o[s],i.ro.gengxinriqi=!0,a.abrupt("continue",25);case 55:if("yonghuming"!=s){a.next=59;break}return i.ruleForm.yonghuming=o[s],i.ro.yonghuming=!0,a.abrupt("continue",25);case 59:if("userid"!=s){a.next=63;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,a.abrupt("continue",25);case 63:a.next=25;break;case 65:i.styleChange();case 66:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinriqiChange:function(n){this.ruleForm.gengxinriqi=n.target.value,this.$forceUpdate()},xiangmuleixingChange:function(n){this.xiangmuleixingIndex=n.target.value,this.ruleForm.xiangmuleixing=this.xiangmuleixingOptions[this.xiangmuleixingIndex]},xiangmuzhuangtaiChange:function(n){this.xiangmuzhuangtaiIndex=n.target.value,this.ruleForm.xiangmuzhuangtai=this.xiangmuzhuangtaiOptions[this.xiangmuzhuangtaiIndex]},xiangmutupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.xiangmutupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function i(){var a,r,u,o,s,g,c,x,l,m;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.ruleForm.xiangmumingcheng){i.next=3;break}return e.$utils.msg("项目名称不能为空"),i.abrupt("return");case 3:if(e.ruleForm.xiangmuzhuangtai){i.next=6;break}return e.$utils.msg("项目状态不能为空"),i.abrupt("return");case 6:if(e.ruleForm.quexianshuliang){i.next=9;break}return e.$utils.msg("缺陷数量不能为空"),i.abrupt("return");case 9:if(!e.ruleForm.quexianshuliang||e.$validate.isIntNumer(e.ruleForm.quexianshuliang)){i.next=12;break}return e.$utils.msg("缺陷数量应输入整数"),i.abrupt("return");case 12:if(!e.cross){i.next=28;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){i.next=28;break}if(g=n.getStorageSync("crossObj"),o.startsWith("[")){i.next=24;break}for(c in g)c==o&&(g[c]=s);return x=n.getStorageSync("crossTable"),i.next=22,e.$api.update("".concat(x),g);case 22:i.next=28;break;case 24:a=Number(n.getStorageSync("userid")),r=g["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!r||!a){i.next=50;break}return e.ruleForm.crossuserid=a,e.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:a,crossrefid:r},i.next=34,e.$api.list("shoujixiangmu",l);case 34:if(m=i.sent,!(m.data.total>=u)){i.next=40;break}return e.$utils.msg(n.getStorageSync("tips")),i.abrupt("return",!1);case 40:if(!e.ruleForm.id){i.next=45;break}return i.next=43,e.$api.update("shoujixiangmu",e.ruleForm);case 43:i.next=47;break;case 45:return i.next=47,e.$api.add("shoujixiangmu",e.ruleForm);case 47:e.$utils.msgBack("提交成功");case 48:i.next=58;break;case 50:if(!e.ruleForm.id){i.next=55;break}return i.next=53,e.$api.update("shoujixiangmu",e.ruleForm);case 53:i.next=57;break;case 55:return i.next=57,e.$api.add("shoujixiangmu",e.ruleForm);case 57:e.$utils.msgBack("提交成功");case 58:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},2381:function(n,e,i){"use strict";var t=i("b12f"),a=i.n(t);a.a},"44e6":function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}));var a=function(){var n=this,e=n.$createElement;n._self._c},r=[]},"4c3e":function(n,e,i){"use strict";i.r(e);var t=i("44e6"),a=i("4ef6");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("2381");var u,o=i("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"25886b70",null,!1,t["a"],u);e["default"]=s.exports},"4ef6":function(n,e,i){"use strict";i.r(e);var t=i("1c50"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},b12f:function(n,e,i){},f629:function(n,e,i){"use strict";(function(n){i("99fc");t(i("66fd"));var e=t(i("4c3e"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])}},[["f629","common/runtime","common/vendor"]]]);