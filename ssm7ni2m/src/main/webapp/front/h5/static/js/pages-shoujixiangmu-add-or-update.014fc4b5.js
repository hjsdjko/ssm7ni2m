(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoujixiangmu-add-or-update"],{"0709":function(r,i,e){var t=e("3ee7");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e("4f06").default;a("f206c48c",t,!0,{sourceMap:!1,shadowMode:!1})},"1a11":function(r,i,e){"use strict";e.r(i);var t=e("bc132"),a=e("5ca7");for(var n in a)"default"!==n&&function(r){e.d(i,r,(function(){return a[r]}))}(n);e("4d50");var o,u=e("f0c5"),g=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"ed4a16ae",null,!1,t["a"],o);i["default"]=g.exports},3421:function(r,i,e){"use strict";var t=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a481"),e("c5f6"),e("f559"),e("ac6a"),e("28a5"),e("96cf");var a=t(e("3b8d")),n=t(e("e2b1")),o={data:function(){return{cross:"",ruleForm:{xiangmumingcheng:"",xiangmuleixing:"",xiangmutupian:"",xiangmuzhuangtai:"",quexianshuliang:"",xiangmuxinxi:"",gengxinriqi:"",yonghuming:"",sfsh:"",shhf:"",userid:""},xiangmuleixingOptions:[],xiangmuleixingIndex:0,xiangmuzhuangtaiOptions:[],xiangmuzhuangtaiIndex:0,user:{},ro:{xiangmumingcheng:!1,xiangmuleixing:!1,xiangmutupian:!1,xiangmuzhuangtai:!1,quexianshuliang:!1,xiangmuxinxi:!1,gengxinriqi:!1,yonghuming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(i){var e,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.gengxinriqi=this.$utils.getCurDate(),e=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(e);case 4:return t=r.sent,this.user=t.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ro.yonghuming=!0,r.next=10,this.$api.option("xiangmuleixing","xiangmuleixing",{});case 10:if(t=r.sent,this.xiangmuleixingOptions=t.data,this.xiangmuzhuangtaiOptions="进行中,已完成".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){r.next=21;break}return this.ruleForm.id=i.id,r.next=19,this.$api.info("shoujixiangmu",this.ruleForm.id);case 19:t=r.sent,this.ruleForm=t.data;case 21:if(this.cross=i.cross,!i.cross){r.next=65;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 25:if((r.t1=r.t0()).done){r.next=65;break}if(n=r.t1.value,"xiangmumingcheng"!=n){r.next=31;break}return this.ruleForm.xiangmumingcheng=a[n],this.ro.xiangmumingcheng=!0,r.abrupt("continue",25);case 31:if("xiangmuleixing"!=n){r.next=35;break}return this.ruleForm.xiangmuleixing=a[n],this.ro.xiangmuleixing=!0,r.abrupt("continue",25);case 35:if("xiangmutupian"!=n){r.next=39;break}return this.ruleForm.xiangmutupian=a[n],this.ro.xiangmutupian=!0,r.abrupt("continue",25);case 39:if("xiangmuzhuangtai"!=n){r.next=43;break}return this.ruleForm.xiangmuzhuangtai=a[n],this.ro.xiangmuzhuangtai=!0,r.abrupt("continue",25);case 43:if("quexianshuliang"!=n){r.next=47;break}return this.ruleForm.quexianshuliang=a[n],this.ro.quexianshuliang=!0,r.abrupt("continue",25);case 47:if("xiangmuxinxi"!=n){r.next=51;break}return this.ruleForm.xiangmuxinxi=a[n],this.ro.xiangmuxinxi=!0,r.abrupt("continue",25);case 51:if("gengxinriqi"!=n){r.next=55;break}return this.ruleForm.gengxinriqi=a[n],this.ro.gengxinriqi=!0,r.abrupt("continue",25);case 55:if("yonghuming"!=n){r.next=59;break}return this.ruleForm.yonghuming=a[n],this.ro.yonghuming=!0,r.abrupt("continue",25);case 59:if("userid"!=n){r.next=63;break}return this.ruleForm.userid=a[n],this.ro.userid=!0,r.abrupt("continue",25);case 63:r.next=25;break;case 65:this.styleChange();case 66:case"end":return r.stop()}}),r,this)})));function i(i){return r.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinriqiChange:function(r){this.ruleForm.gengxinriqi=r.target.value,this.$forceUpdate()},xiangmuleixingChange:function(r){this.xiangmuleixingIndex=r.target.value,this.ruleForm.xiangmuleixing=this.xiangmuleixingOptions[this.xiangmuleixingIndex]},xiangmuzhuangtaiChange:function(r){this.xiangmuzhuangtaiIndex=r.target.value,this.ruleForm.xiangmuzhuangtai=this.xiangmuzhuangtaiOptions[this.xiangmuzhuangtaiIndex]},xiangmutupianTap:function(){var r=this;this.$api.upload((function(i){r.ruleForm.xiangmutupian="upload/"+i.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var i,e,t,a,n,o,u,g,d,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.xiangmumingcheng){r.next=3;break}return this.$utils.msg("项目名称不能为空"),r.abrupt("return");case 3:if(this.ruleForm.xiangmuzhuangtai){r.next=6;break}return this.$utils.msg("项目状态不能为空"),r.abrupt("return");case 6:if(this.ruleForm.quexianshuliang){r.next=9;break}return this.$utils.msg("缺陷数量不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.quexianshuliang||this.$validate.isIntNumer(this.ruleForm.quexianshuliang)){r.next=12;break}return this.$utils.msg("缺陷数量应输入整数"),r.abrupt("return");case 12:if(!this.cross){r.next=28;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=28;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=24;break}for(u in o)u==a&&(o[u]=n);return g=uni.getStorageSync("crossTable"),r.next=22,this.$api.update("".concat(g),o);case 22:r.next=28;break;case 24:i=Number(uni.getStorageSync("userid")),e=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 28:if(!e||!i){r.next=50;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=e,d={page:1,limit:10,crossuserid:i,crossrefid:e},r.next=34,this.$api.list("shoujixiangmu",d);case 34:if(s=r.sent,!(s.data.total>=t)){r.next=40;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 40:if(!this.ruleForm.id){r.next=45;break}return r.next=43,this.$api.update("shoujixiangmu",this.ruleForm);case 43:r.next=47;break;case 45:return r.next=47,this.$api.add("shoujixiangmu",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:r.next=58;break;case 50:if(!this.ruleForm.id){r.next=55;break}return r.next=53,this.$api.update("shoujixiangmu",this.ruleForm);case 53:r.next=57;break;case 55:return r.next=57,this.$api.add("shoujixiangmu",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return r.stop()}}),r,this)})));function i(){return r.apply(this,arguments)}return i}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===r?e-=60:"end"===r&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};i.default=o},"3ee7":function(r,i,e){var t=e("24fb");i=t(!1),i.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-ed4a16ae]{padding:%?20?%}.content[data-v-ed4a16ae]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-ed4a16ae]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-ed4a16ae]{width:%?180?%}.avator[data-v-ed4a16ae]{width:%?150?%;height:%?60?%}.right-input[data-v-ed4a16ae]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-ed4a16ae]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-ed4a16ae]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-ed4a16ae]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-ed4a16ae]{border:0}.cu-form-group uni-input[data-v-ed4a16ae]{padding:0 %?30?%}.uni-input[data-v-ed4a16ae]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-ed4a16ae]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-ed4a16ae]::after{line-height:%?80?%}.select .uni-input[data-v-ed4a16ae]{line-height:%?80?%}.input .right-input[data-v-ed4a16ae]{line-height:%?88?%}',""]),r.exports=i},"4d50":function(r,i,e){"use strict";var t=e("0709"),a=e.n(t);a.a},"5ca7":function(r,i,e){"use strict";e.r(i);var t=e("3421"),a=e.n(t);for(var n in t)"default"!==n&&function(r){e.d(i,r,(function(){return t[r]}))}(n);i["default"]=a.a},bc132:function(r,i,e){"use strict";var t,a=function(){var r=this,i=r.$createElement,e=r._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("项目名称")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xiangmumingcheng,placeholder:"项目名称"},model:{value:r.ruleForm.xiangmumingcheng,callback:function(i){r.$set(r.ruleForm,"xiangmumingcheng",i)},expression:"ruleForm.xiangmumingcheng"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("项目类型")]),e("v-uni-picker",{attrs:{value:r.xiangmuleixingIndex,range:r.xiangmuleixingOptions},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.xiangmuleixingChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xiangmuleixing?r.ruleForm.xiangmuleixing:"请选择项目类型"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.xiangmutupianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("项目图片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.xiangmutupian?e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.xiangmutupian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("项目状态")]),e("v-uni-picker",{attrs:{value:r.xiangmuzhuangtaiIndex,range:r.xiangmuzhuangtaiOptions},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.xiangmuzhuangtaiChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xiangmuzhuangtai?r.ruleForm.xiangmuzhuangtai:"请选择项目状态"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("缺陷数量")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.quexianshuliang,placeholder:"缺陷数量"},model:{value:r.ruleForm.quexianshuliang,callback:function(i){r.$set(r.ruleForm,"quexianshuliang",i)},expression:"ruleForm.quexianshuliang"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("更新日期")]),e("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.gengxinriqi},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.gengxinriqiChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.gengxinriqi?r.ruleForm.gengxinriqi:"请选择更新日期"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户名")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.yonghuming,placeholder:"用户名"},model:{value:r.ruleForm.yonghuming,callback:function(i){r.$set(r.ruleForm,"yonghuming",i)},expression:"ruleForm.yonghuming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("项目信息")]),e("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"项目信息"},model:{value:r.ruleForm.xiangmuxinxi,callback:function(i){r.$set(r.ruleForm,"xiangmuxinxi",i)},expression:"ruleForm.xiangmuxinxi"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return t}))}}]);