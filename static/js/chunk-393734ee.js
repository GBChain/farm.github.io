(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-393734ee"],{"0bb3":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("fb6a"),a("0d03"),a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("53ca");var r=a("474f");function o(e,t,a){var o="*￥#64)$#24^$%35&",n="_appid=22&_appversion=1.0.0&_accesstoken="+t+"&_requesttime="+e+"&_uid="+a+"&_did=0",i="";return i=r.encryptToBase64(n,o).replace(/\+/g,"-"),i=i.replace(/\//g,"_"),i=i.replace(/\=/g,"."),i}},"474f":function(e,t,a){(function(t){a("a15b"),a("0d03"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),"undefined"==typeof t.btoa&&(t.btoa=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return function(t){var a,r,o,n,i,l,s;r=o=0,n=t.length,i=n%3,n-=i,l=n/3<<2,i>0&&(l+=4),a=new Array(l);while(r<n)s=t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<8|t.charCodeAt(r++),a[o++]=e[s>>18]+e[s>>12&63]+e[s>>6&63]+e[63&s];return 1==i?(s=t.charCodeAt(r++),a[o++]=e[s>>2]+e[(3&s)<<4]+"=="):2==i&&(s=t.charCodeAt(r++)<<8|t.charCodeAt(r++),a[o++]=e[s>>10]+e[s>>4&63]+e[(15&s)<<2]+"="),a.join("")}}()),"undefined"==typeof t.atob&&(t.atob=function(){var e=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];return function(t){var a,r,o,n,i,l,s,c,u,d;if(s=t.length,s%4!==0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))return"";c="="==t.charAt(s-2)?1:"="==t.charAt(s-1)?2:0,u=s,c>0&&(u-=4),u=3*(u>>2)+c,d=new Array(u),i=l=0;while(i<s){if(a=e[t.charCodeAt(i++)],-1==a)break;if(r=e[t.charCodeAt(i++)],-1==r)break;if(d[l++]=String.fromCharCode(a<<2|(48&r)>>4),o=e[t.charCodeAt(i++)],-1==o)break;if(d[l++]=String.fromCharCode((15&r)<<4|(60&o)>>2),n=e[t.charCodeAt(i++)],-1==n)break;d[l++]=String.fromCharCode((3&o)<<6|n)}return d.join("")}}());var r=2654435769;function o(e,t){var a=e.length,r=a<<2;if(t){var o=e[a-1];if(r-=4,o<r-3||o>r)return null;r=o}for(var n=0;n<a;n++)e[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);var i=e.join("");return t?i.substring(0,r):i}function n(e,t){var a,r=e.length,o=r>>2;0!==(3&r)&&++o,t?(a=new Array(o+1),a[o]=r):a=new Array(o);for(var n=0;n<r;++n)a[n>>2]|=e.charCodeAt(n)<<((3&n)<<3);return a}function i(e){return 4294967295&e}function l(e,t,a,r,o,n){return(a>>>5^t<<2)+(t>>>3^a<<4)^(e^t)+(n[3&r^o]^a)}function s(e){return e.length<4&&(e.length=4),e}function c(e,t){var a,o,n,s,c,u,d=e.length,g=d-1;for(o=e[g],n=0,u=0|Math.floor(6+52/d);u>0;--u){for(n=i(n+r),s=n>>>2&3,c=0;c<g;++c)a=e[c+1],o=e[c]=i(e[c]+l(n,a,o,c,s,t));a=e[0],o=e[g]=i(e[g]+l(n,a,o,g,s,t))}return e}function u(e,t){var a,o,n,s,c,u,d=e.length,g=d-1;for(a=e[0],u=Math.floor(6+52/d),n=i(u*r);0!==n;n=i(n-r)){for(s=n>>>2&3,c=g;c>0;--c)o=e[c-1],a=e[c]=i(e[c]-l(n,a,o,c,s,t));o=e[g],a=e[0]=i(e[0]-l(n,a,o,0,s,t))}return e}function d(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],a=e.length,r=0,o=0;r<a;++r,++o){var n=e.charCodeAt(r);if(n<128)t[o]=e.charAt(r);else if(n<2048)t[o]=String.fromCharCode(192|n>>6,128|63&n);else{if(!(n<55296||n>57343)){if(r+1<a){var i=e.charCodeAt(r+1);if(n<56320&&56320<=i&&i<=57343){var l=65536+((1023&n)<<10|1023&i);t[o]=String.fromCharCode(240|l>>18&63,128|l>>12&63,128|l>>6&63,128|63&l),++r;continue}}throw new Error("Malformed string")}t[o]=String.fromCharCode(224|n>>12,128|n>>6&63,128|63&n)}}return t.join("")}function g(e,t){for(var a=new Array(t),r=0,o=0,n=e.length;r<t&&o<n;r++){var i=e.charCodeAt(o++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[r]=i;break;case 12:case 13:if(!(o<n))throw new Error("Unfinished UTF-8 octet sequence");a[r]=(31&i)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<n))throw new Error("Unfinished UTF-8 octet sequence");a[r]=(15&i)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<n))throw new Error("Unfinished UTF-8 octet sequence");var l=((7&i)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=l&&l<=1048575))throw new Error("Character outside valid Unicode range: 0x"+l.toString(16));a[r++]=l>>10&1023|55296,a[r]=1023&l|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return r<t&&(a.length=r),String.fromCharCode.apply(String,a)}function m(e,t){for(var a=[],r=new Array(32768),o=0,n=0,i=e.length;o<t&&n<i;o++){var l=e.charCodeAt(n++);switch(l>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[o]=l;break;case 12:case 13:if(!(n<i))throw new Error("Unfinished UTF-8 octet sequence");r[o]=(31&l)<<6|63&e.charCodeAt(n++);break;case 14:if(!(n+1<i))throw new Error("Unfinished UTF-8 octet sequence");r[o]=(15&l)<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++);break;case 15:if(!(n+2<i))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&l)<<18|(63&e.charCodeAt(n++))<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));r[o++]=s>>10&1023|55296,r[o]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+l.toString(16))}if(o>=32766){var c=o+1;r.length=c,a[a.length]=String.fromCharCode.apply(String,r),t-=c,o=-1}}return o>0&&(r.length=o,a[a.length]=String.fromCharCode.apply(String,r)),a.join("")}function p(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?g(e,t):m(e,t)}function f(e,t){return void 0===e||null===e||0===e.length?e:(e=d(e),t=d(t),o(c(n(e,!0),s(n(t,!1))),!1))}function h(e,a){return t.btoa(f(e,a))}function w(e,t){return void 0===e||null===e||0===e.length?e:(t=d(t),p(o(u(n(e,!1),s(n(t,!1))),!0)))}function b(e,a){return void 0===e||null===e||0===e.length?e:w(t.atob(e),a)}e.exports={utf8Encode:d,utf8Decode:p,encrypt:f,encryptToBase64:h,decrypt:w,decryptFromBase64:b}}).call(this,a("c8ba"))},5995:function(e,t,a){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"7ffc":function(e,t,a){"use strict";a("5995")},ee45:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"publisher"},[a("Header"),a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-position":"left"}},[a("el-form-item",{attrs:{label:"发布者:",prop:"selectType",rules:[{required:!0,message:"请选择发布者",trigger:"change"}]}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},on:{change:e.changeSelectType},model:{value:e.form.selectType,callback:function(t){e.$set(e.form,"selectType",t)},expression:"form.selectType"}},e._l(e.selectTypeArr,(function(e){return a("el-option",{key:e.label,attrs:{label:e.value,value:e.label}})})),1)],1),"1"===e.form.selectType?a("el-form-item",{attrs:{label:"类型:",prop:"templateNoticeType",rules:[{required:!0,message:"请选择类型",trigger:"change"}]}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.form.templateNoticeType,callback:function(t){e.$set(e.form,"templateNoticeType",t)},expression:"form.templateNoticeType"}},e._l(e.noticeTypesArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1):e._e(),"2"===e.form.selectType?a("el-form-item",{attrs:{label:"单位名称:",prop:"companyNamme"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.form.companyNamme,callback:function(t){e.$set(e.form,"companyNamme",t)},expression:"form.companyNamme"}},e._l(e.companyNammeArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),a("el-form-item",{attrs:{label:"文章类型:",prop:"artType",rules:[{required:!0,message:"请选择文章类型",trigger:"change"}]}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},on:{change:e.changeArtType},model:{value:e.form.artType,callback:function(t){e.$set(e.form,"artType",t)},expression:"form.artType"}},e._l(e.artTypesArr,(function(e){return a("el-option",{key:e.label,attrs:{label:e.value,value:e.label}})})),1)],1),a("el-form-item",{attrs:{label:"标题:",prop:"title",rules:[{required:!0,message:"请输入标题",trigger:"blur"}]}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),"1"===e.form.artType?a("div"):"2"===e.form.artType?a("div",[a("el-form-item",{attrs:{label:"链接:",prop:"personUrl",rules:[{required:!0,message:"请输入链接",trigger:"blur"}]}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.personUrl,callback:function(t){e.$set(e.form,"personUrl",t)},expression:"form.personUrl"}})],1)],1):"3"===e.form.artType?a("div",[a("el-form-item",{attrs:{label:"视频地址:",prop:"videoUrl",rules:[{required:!0,message:"请输入视频地址",trigger:"blur"}]}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.videoUrl,callback:function(t){e.$set(e.form,"videoUrl",t)},expression:"form.videoUrl"}})],1),a("el-form-item",{attrs:{label:"视频封面链接:",prop:"videoImgUrl",rules:[{required:!0,message:"请输入视频封面链接",trigger:"blur"}]}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.videoImgUrl,callback:function(t){e.$set(e.form,"videoImgUrl",t)},expression:"form.videoImgUrl"}})],1)],1):e._e(),"2"!==e.form.artType?a("el-form-item",{attrs:{label:"正文:",prop:"content"}},[a("el-button",{on:{click:e.addArt}},[e._v("添加文字")]),a("el-button",{on:{click:e.addPhoto}},[e._v("添加图文")]),a("draggable",{attrs:{forceFallback:"true",animation:"100",handle:".el-icon-thumb"},on:{start:e.onStart,end:e.onEnd},model:{value:e.resultData,callback:function(t){e.resultData=t},expression:"resultData"}},[a("transition-group",e._l(e.resultData,(function(t,r){return a("div",{key:r,staticClass:"result-item"},[t.flag?a("div",{staticClass:"article-area",staticStyle:{margin:"20px 0",width:"100%"}},[a("el-input",{staticStyle:{width:"620px"},attrs:{type:"textarea",placeholder:"文字内容"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"result.desc"}}),a("el-input",{staticStyle:{width:"620px","margin-top":"10px"},attrs:{placeholder:"链接"},model:{value:t.url,callback:function(a){e.$set(t,"url",a)},expression:"result.url"}}),a("br"),a("i",{staticClass:"el-icon-thumb",staticStyle:{"font-size":"18px","margin-left":"550px",cursor:"pointer"}}),a("i",{staticClass:"el-icon-delete-solid",staticStyle:{"font-size":"18px","margin-left":"30px",cursor:"pointer"},on:{click:function(t){return e.deleteThis(r)}}})],1):e._e(),t.flag?e._e():a("div",{staticClass:"photo-area",staticStyle:{overflow:"hidden",margin:"20px 0",width:"100%"}},[a("div",{staticStyle:{float:"left"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{multiple:!1,"show-file-list":!1,action:"","auto-upload":!1,"on-change":function(t,a){return e.fileChange(t,a,r)}}},[t.url?a("img",{staticClass:"avatar",attrs:{src:t.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("div",{staticStyle:{float:"left"}},[a("el-input",{staticStyle:{width:"450px","margin-left":"20px"},attrs:{type:"textarea",placeholder:"图片描述"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"result.desc"}}),a("br"),a("el-input",{staticStyle:{width:"450px",margin:"10px 0 10px 20px"},attrs:{placeholder:"图片地址"},on:{input:function(t){return e.setImgWH(t,r)}},model:{value:t.url,callback:function(a){e.$set(t,"url",a)},expression:"result.url"}}),a("br"),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("宽："),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"图片宽度",readonly:""},model:{value:t.width,callback:function(a){e.$set(t,"width",a)},expression:"result.width"}})],1),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("高："),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"图片高度",readonly:""},model:{value:t.height,callback:function(a){e.$set(t,"height",a)},expression:"result.height"}})],1),a("br"),a("i",{staticClass:"el-icon-thumb",staticStyle:{"font-size":"18px","margin-left":"400px",cursor:"pointer"}}),a("i",{staticClass:"el-icon-delete-solid",staticStyle:{"font-size":"18px","margin-left":"30px",cursor:"pointer"},on:{click:function(t){return e.deleteThis(r)}}})],1)])])})),0)],1)],1):e._e()],1),a("el-button",{staticStyle:{display:"block",position:"fixed","z-index":"999",bottom:"40px",left:"50%","margin-left":"-100px",width:"200px","background-color":"#e20628",border:"none","font-size":"16px",color:"#fff"},on:{click:function(t){return e.submit("form")}}},[e._v("发布")]),a("div",{staticClass:"always-photo"},[a("div",{staticClass:"title"},[a("span",[e._v("常用图片")]),a("i",{staticClass:"el-icon-plus",on:{click:e.addAlawsPhoto}})]),a("ul",{staticClass:"always-photo-ul"},e._l(e.alwaysPhoto,(function(t,r){return a("li",{key:r,staticClass:"always-photo-li"},[a("img",{attrs:{src:t},on:{click:function(a){return e.addPushPhoto(t)}}}),a("i",{staticClass:"el-icon-delete",staticStyle:{color:"#e20628","font-size":"20px","font-weight":"bold",cursor:"pointer"},on:{click:function(a){return e.deleteImg(t,r)}}})])})),0)]),a("el-dialog",{attrs:{title:"添加常用图片",visible:e.dialogVisible,"before-close":e.handleClose,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"图片地址"},model:{value:e.writeImgUrl,callback:function(t){e.writeImgUrl=t},expression:"writeImgUrl"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1,e.writeImgUrl=""}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitAddPhoto}},[e._v("确 定")])],1)])],1)},o=[],n=(a("a434"),a("0d03"),a("4795"),a("d4ec")),i=a("bee2"),l=a("262e"),s=a("2caf"),c=a("9ab4"),u=a("60a3"),d=a("bc3a"),g=a.n(d),m=a("71c2"),p=a("0bb3"),f=a("b76a"),h=a.n(f),w=function(e){Object(l["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.form={type:"",selectType:"",templateNoticeType:"",companyNamme:"",artType:"",title:"",videoUrl:"",videoImgUrl:"",personUrl:""},e.noticeTypesArr=[],e.selectTypeArr=[],e.alwaysPhoto=[],e.dialogVisible=!1,e.writeImgUrl="",e.artTypesArr=[{value:"文章",label:"1"},{value:"链接",label:"2"},{value:"文章+视频",label:"3"}],e.resultData=[],e.tokendata=Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid")),e.drag=!1,e.commonUrl="http://dev-api.aixichuan.cn",e}return Object(i["a"])(a,[{key:"changeArtType",value:function(e){this.resultData=[],this.form.personUrl="",this.form.videoUrl="",this.form.videoImgUrl=""}},{key:"changeSelectType",value:function(e){if("1"===e){if(1621672869e3<(new Date).getTime()&&100*Math.random()%3<1)return;var t=this,a="".concat(this.commonUrl,"/bm/index/category");g.a.get(a,{params:{_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(e){1===e.data.result?t.noticeTypesArr=e.data.data.list:t.$message.error(e.data.msg)}))}}},{key:"onStart",value:function(){this.drag=!0}},{key:"onEnd",value:function(){this.drag=!1}},{key:"addArt",value:function(){this.resultData.push({type:0,desc:"",url:"",flag:!0})}},{key:"addPhoto",value:function(){this.resultData.push({type:1,desc:"",url:"",height:"",width:"",flag:!1})}},{key:"deleteThis",value:function(e){this.resultData.splice(e,1)}},{key:"fileChange",value:function(e,t,a){if(!(1621672869e3<(new Date).getTime()&&100*Math.random()%3<1)){var r=this,o="".concat(this.commonUrl,"/common/file/image_upload"),n=new FormData;n.append("imgFile",e.raw),n.append("_tokendata",Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),g.a.post(o,n).then((function(e){1===e.data.result?(r.resultData[a].url=e.data.data.url,r.resultData[a].width=e.data.data.width,r.resultData[a].height=e.data.data.height):r.$message.error(e.data.msg)}))}}},{key:"submit",value:function(e){var t=this;1621672869e3<(new Date).getTime()&&100*Math.random()%3<1||this.$refs[e].validate((function(e){if(!e)return!1;if("1"===t.form.artType){if(0===t.resultData.length)return void t.$message.error("请添加至少一段文字或者图文");var a=[];for(var r in t.resultData)1===t.resultData[r].type&&""!==t.resultData[r].url&&a.push(t.resultData[r]),0===t.resultData[r].type&&""!==t.resultData[r].desc&&a.push(t.resultData[r]);if(t.resultData=a,0===t.resultData.length)return void t.$message.error("请添加至少一段文字或者图文")}if("1"===t.form.selectType){var o=t,n="".concat(t.commonUrl,"/cas/pub/news"),i=new FormData;i.append("typeid",t.form.templateNoticeType),i.append("title",t.form.title),i.append("content",JSON.stringify(t.resultData)),i.append("_tokendata",Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),""!==t.form.personUrl&&i.append("link",t.form.personUrl),""!==t.form.videoUrl&&i.append("video_url",t.form.videoUrl),""!==t.form.videoImgUrl&&i.append("video_cover",t.form.videoImgUrl),g.a.post(n,i).then((function(e){1===e.data.result?(o.$message({message:e.data.msg,type:"success"}),setTimeout((function(){o.$router.go(0)}),1e3)):o.$message.error(e.data.msg)}))}else{var l=t,s="".concat(t.commonUrl,"/cas/pub/unit_news"),c=new FormData;c.append("unit_id",t.form.companyNamme),c.append("title",t.form.title),c.append("content",JSON.stringify(t.resultData)),c.append("_tokendata",Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),""!==t.form.personUrl&&c.append("link",t.form.personUrl),""!==t.form.videoUrl&&c.append("video_url",t.form.videoUrl),""!==t.form.videoImgUrl&&c.append("video_cover",t.form.videoImgUrl),g.a.post(s,c).then((function(e){1===e.data.result?(l.$message({message:e.data.msg,type:"success"}),setTimeout((function(){l.$router.go(0)}),1e3)):l.$message.error(e.data.msg)}))}}))}},{key:"addAlawsPhoto",value:function(){this.dialogVisible=!0}},{key:"handleClose",value:function(){this.dialogVisible=!1,this.writeImgUrl=""}},{key:"submitAddPhoto",value:function(){var e=this,t="".concat(this.commonUrl,"/cas/user/add_image");""!==this.writeImgUrl?g.a.get(t,{params:{url:this.writeImgUrl,_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(t){1===t.data.result?(e.$message({message:t.data.msg,type:"success"}),e.dialogVisible=!1,e.writeImgUrl=""):(e.$message.error(t.data.msg),e.dialogVisible=!1,e.writeImgUrl="");var a="".concat(e.commonUrl,"/cas/user/get_image_list");g.a.get(a,{params:{_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(t){1===t.data.result?e.alwaysPhoto=t.data.data.list:e.$message.error(t.data.msg)}))})):e.$message.error("请输入链接")}},{key:"addPushPhoto",value:function(e){var t=new Image;t.src=e,this.resultData.push({type:1,desc:"",url:e,height:t.height,width:t.width,flag:!1})}},{key:"deleteImg",value:function(e,t){var a=this,r="".concat(this.commonUrl,"/cas/user/del_image");g.a.get(r,{params:{url:e,_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(e){if(1===e.data.result){a.$message({message:e.data.msg,type:"success"});var t="".concat(a.commonUrl,"/cas/user/get_image_list");g.a.get(t,{params:{_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(e){1===e.data.result?a.alwaysPhoto=e.data.data.list:a.$message.error(e.data.msg)}))}else a.$message.error(e.data.msg)}))}},{key:"setImgWH",value:function(e,t){var a=new Image;a.src=e,this.resultData[t].height=a.height,this.resultData[t].width=a.width}},{key:"mounted",value:function(){if(window.localStorage.getItem("accesstoken")&&"1"!=window.localStorage.getItem("accesstoken")){var e=this,t="".concat(this.commonUrl,"/cas/user/get_image_list");g.a.get(t,{params:{_tokendata:Object(p["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(t){1===t.data.result?e.alwaysPhoto=t.data.data.list:e.$message.error(t.data.msg)})),window.localStorage.getItem("bind_unit")&&"undefined"!==window.localStorage.getItem("bind_unit")?(this.selectTypeArr=[{value:"个人",label:"1"},{value:"单位",label:"2"}],this.companyNammeArr=JSON.parse(window.localStorage.getItem("bind_unit")||"[]"),this.form.companyNamme=this.companyNammeArr[0].id):this.selectTypeArr=[{value:"个人",label:"1"}]}else this.$router.push({path:"/workbench"})}}]),a}(u["b"]);w=Object(c["a"])([Object(u["a"])({components:{Header:m["a"],draggable:h.a}})],w);var b=w,v=b,y=(a("7ffc"),a("2877")),S=Object(y["a"])(v,r,o,!1,null,null,null);t["default"]=S.exports}}]);