(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31404181"],{"0bb3":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("fb6a"),r("0d03"),r("a9e3"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("53ca");var a=r("474f");function n(e,t,r){var n="*￥#64)$#24^$%35&",o="_appid=22&_appversion=1.0.0&_accesstoken="+t+"&_requesttime="+e+"&_uid="+r+"&_did=0",i="";return i=a.encryptToBase64(o,n).replace(/\+/g,"-"),i=i.replace(/\//g,"_"),i=i.replace(/\=/g,"."),i}},"474f":function(e,t,r){(function(t){r("a15b"),r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("1276"),"undefined"==typeof t.btoa&&(t.btoa=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return function(t){var r,a,n,o,i,l,s;a=n=0,o=t.length,i=o%3,o-=i,l=o/3<<2,i>0&&(l+=4),r=new Array(l);while(a<o)s=t.charCodeAt(a++)<<16|t.charCodeAt(a++)<<8|t.charCodeAt(a++),r[n++]=e[s>>18]+e[s>>12&63]+e[s>>6&63]+e[63&s];return 1==i?(s=t.charCodeAt(a++),r[n++]=e[s>>2]+e[(3&s)<<4]+"=="):2==i&&(s=t.charCodeAt(a++)<<8|t.charCodeAt(a++),r[n++]=e[s>>10]+e[s>>4&63]+e[(15&s)<<2]+"="),r.join("")}}()),"undefined"==typeof t.atob&&(t.atob=function(){var e=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];return function(t){var r,a,n,o,i,l,s,c,d,u;if(s=t.length,s%4!==0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))return"";c="="==t.charAt(s-2)?1:"="==t.charAt(s-1)?2:0,d=s,c>0&&(d-=4),d=3*(d>>2)+c,u=new Array(d),i=l=0;while(i<s){if(r=e[t.charCodeAt(i++)],-1==r)break;if(a=e[t.charCodeAt(i++)],-1==a)break;if(u[l++]=String.fromCharCode(r<<2|(48&a)>>4),n=e[t.charCodeAt(i++)],-1==n)break;if(u[l++]=String.fromCharCode((15&a)<<4|(60&n)>>2),o=e[t.charCodeAt(i++)],-1==o)break;u[l++]=String.fromCharCode((3&n)<<6|o)}return u.join("")}}());var a=2654435769;function n(e,t){var r=e.length,a=r<<2;if(t){var n=e[r-1];if(a-=4,n<a-3||n>a)return null;a=n}for(var o=0;o<r;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var i=e.join("");return t?i.substring(0,a):i}function o(e,t){var r,a=e.length,n=a>>2;0!==(3&a)&&++n,t?(r=new Array(n+1),r[n]=a):r=new Array(n);for(var o=0;o<a;++o)r[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return r}function i(e){return 4294967295&e}function l(e,t,r,a,n,o){return(r>>>5^t<<2)+(t>>>3^r<<4)^(e^t)+(o[3&a^n]^r)}function s(e){return e.length<4&&(e.length=4),e}function c(e,t){var r,n,o,s,c,d,u=e.length,p=u-1;for(n=e[p],o=0,d=0|Math.floor(6+52/u);d>0;--d){for(o=i(o+a),s=o>>>2&3,c=0;c<p;++c)r=e[c+1],n=e[c]=i(e[c]+l(o,r,n,c,s,t));r=e[0],n=e[p]=i(e[p]+l(o,r,n,p,s,t))}return e}function d(e,t){var r,n,o,s,c,d,u=e.length,p=u-1;for(r=e[0],d=Math.floor(6+52/u),o=i(d*a);0!==o;o=i(o-a)){for(s=o>>>2&3,c=p;c>0;--c)n=e[c-1],r=e[c]=i(e[c]-l(o,r,n,c,s,t));n=e[p],r=e[0]=i(e[0]-l(o,r,n,0,s,t))}return e}function u(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],r=e.length,a=0,n=0;a<r;++a,++n){var o=e.charCodeAt(a);if(o<128)t[n]=e.charAt(a);else if(o<2048)t[n]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(a+1<r){var i=e.charCodeAt(a+1);if(o<56320&&56320<=i&&i<=57343){var l=65536+((1023&o)<<10|1023&i);t[n]=String.fromCharCode(240|l>>18&63,128|l>>12&63,128|l>>6&63,128|63&l),++a;continue}}throw new Error("Malformed string")}t[n]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function p(e,t){for(var r=new Array(t),a=0,n=0,o=e.length;a<t&&n<o;a++){var i=e.charCodeAt(n++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[a]=i;break;case 12:case 13:if(!(n<o))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(31&i)<<6|63&e.charCodeAt(n++);break;case 14:if(!(n+1<o))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(15&i)<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++);break;case 15:if(!(n+2<o))throw new Error("Unfinished UTF-8 octet sequence");var l=((7&i)<<18|(63&e.charCodeAt(n++))<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++))-65536;if(!(0<=l&&l<=1048575))throw new Error("Character outside valid Unicode range: 0x"+l.toString(16));r[a++]=l>>10&1023|55296,r[a]=1023&l|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return a<t&&(r.length=a),String.fromCharCode.apply(String,r)}function f(e,t){for(var r=[],a=new Array(32768),n=0,o=0,i=e.length;n<t&&o<i;n++){var l=e.charCodeAt(o++);switch(l>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[n]=l;break;case 12:case 13:if(!(o<i))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(31&l)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<i))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(15&l)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<i))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&l)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));a[n++]=s>>10&1023|55296,a[n]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+l.toString(16))}if(n>=32766){var c=n+1;a.length=c,r[r.length]=String.fromCharCode.apply(String,a),t-=c,n=-1}}return n>0&&(a.length=n,r[r.length]=String.fromCharCode.apply(String,a)),r.join("")}function m(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?p(e,t):f(e,t)}function g(e,t){return void 0===e||null===e||0===e.length?e:(e=u(e),t=u(t),n(c(o(e,!0),s(o(t,!1))),!1))}function h(e,r){return t.btoa(g(e,r))}function v(e,t){return void 0===e||null===e||0===e.length?e:(t=u(t),m(n(d(o(e,!1),s(o(t,!1))),!0)))}function b(e,r){return void 0===e||null===e||0===e.length?e:v(t.atob(e),r)}e.exports={utf8Encode:u,utf8Decode:m,encrypt:g,encryptToBase64:h,decrypt:v,decryptFromBase64:b}}).call(this,r("c8ba"))},5995:function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"7ffc":function(e,t,r){"use strict";r("5995")},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),o=r("a691"),i=r("50c4"),l=r("7b0b"),s=r("65f0"),c=r("8418"),d=r("1dde"),u=Math.max,p=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d("splice")},{splice:function(e,t){var r,a,d,g,h,v,b=l(this),y=i(b.length),w=n(e,y),x=arguments.length;if(0===x?r=a=0:1===x?(r=0,a=y-w):(r=x-2,a=p(u(o(t),0),y-w)),y+r-a>f)throw TypeError(m);for(d=s(b,a),g=0;g<a;g++)h=w+g,h in b&&c(d,g,b[h]);if(d.length=a,r<a){for(g=w;g<y-a;g++)h=g+a,v=g+r,h in b?b[v]=b[h]:delete b[v];for(g=y;g>y-a+r;g--)delete b[g-1]}else if(r>a)for(g=y-a;g>w;g--)h=g+a-1,v=g+r-1,h in b?b[v]=b[h]:delete b[v];for(g=0;g<r;g++)b[g+w]=arguments[g+2];return b.length=y-a+r,d}})},ee45:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"publisher"},[r("Header"),r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-position":"left"}},[r("el-form-item",{attrs:{label:"发布者:",prop:"selectType",rules:[{required:!0,message:"请选择发布者",trigger:"change"}]}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},on:{change:e.changeSelectType},model:{value:e.form.selectType,callback:function(t){e.$set(e.form,"selectType",t)},expression:"form.selectType"}},e._l(e.selectTypeArr,(function(e){return r("el-option",{key:e.label,attrs:{label:e.value,value:e.label}})})),1)],1),"1"===e.form.selectType?r("el-form-item",{attrs:{label:"类型:",prop:"templateNoticeType",rules:[{required:!0,message:"请选择类型",trigger:"change"}]}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.form.templateNoticeType,callback:function(t){e.$set(e.form,"templateNoticeType",t)},expression:"form.templateNoticeType"}},e._l(e.noticeTypesArr,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1):e._e(),"2"===e.form.selectType?r("el-form-item",{attrs:{label:"单位名称:",prop:"companyNamme"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.form.companyNamme,callback:function(t){e.$set(e.form,"companyNamme",t)},expression:"form.companyNamme"}},e._l(e.companyNammeArr,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),r("el-form-item",{attrs:{label:"文章类型:",prop:"artType"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},on:{change:e.changeArtType},model:{value:e.form.artType,callback:function(t){e.$set(e.form,"artType",t)},expression:"form.artType"}},e._l(e.artTypesArr,(function(e){return r("el-option",{key:e.label,attrs:{label:e.value,value:e.label}})})),1)],1),r("el-form-item",{attrs:{label:"标题:",prop:"title",rules:[{required:!0,message:"请输入标题",trigger:"blur"}]}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),"1"===e.form.artType?r("div"):"2"===e.form.artType?r("div",[r("el-form-item",{attrs:{label:"链接:",prop:"personUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.personUrl,callback:function(t){e.$set(e.form,"personUrl",t)},expression:"form.personUrl"}})],1)],1):"3"===e.form.artType?r("div",[r("el-form-item",{attrs:{label:"视频地址:",prop:"videoUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.videoUrl,callback:function(t){e.$set(e.form,"videoUrl",t)},expression:"form.videoUrl"}})],1),r("el-form-item",{attrs:{label:"视频封面链接:",prop:"videoImgUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:e.form.videoImgUrl,callback:function(t){e.$set(e.form,"videoImgUrl",t)},expression:"form.videoImgUrl"}})],1)],1):e._e(),"2"!==e.form.artType?r("el-form-item",{attrs:{label:"正文:",prop:"content"}},[r("el-button",{on:{click:e.addArt}},[e._v("添加文字")]),r("el-button",{on:{click:e.addPhoto}},[e._v("添加图文")]),e._l(e.resultData,(function(t,a){return r("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{item:t,list:e.resultData,group:"result"},expression:"{ item: result, list: resultData, group: 'result',}"}],key:a,staticClass:"result-item"},[t.flag?r("div",{staticClass:"article-area",staticStyle:{margin:"20px 0",width:"100%"}},[r("el-input",{staticStyle:{width:"620px"},attrs:{type:"textarea",placeholder:"文字内容"},model:{value:t.desc,callback:function(r){e.$set(t,"desc",r)},expression:"result.desc"}}),r("el-input",{staticStyle:{width:"620px","margin-top":"10px"},attrs:{placeholder:"链接"},model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"result.url"}}),r("br"),r("i",{staticClass:"el-icon-thumb",staticStyle:{"font-size":"18px","margin-left":"550px"}}),r("i",{staticClass:"el-icon-delete-solid",staticStyle:{"font-size":"18px","margin-left":"30px"},on:{click:function(t){return e.deleteThis(a)}}})],1):e._e(),t.flag?e._e():r("div",{staticClass:"photo-area",staticStyle:{overflow:"hidden",margin:"20px 0",width:"100%"}},[r("div",{staticStyle:{float:"left"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{multiple:!1,"show-file-list":!1,action:"","auto-upload":!1,"on-change":function(t,r){return e.fileChange(t,r,a)}}},[t.url?r("img",{staticClass:"avatar",attrs:{src:t.url}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("div",{staticStyle:{float:"left"}},[r("el-input",{staticStyle:{width:"450px","margin-left":"20px"},attrs:{type:"textarea",placeholder:"图片描述"},model:{value:t.desc,callback:function(r){e.$set(t,"desc",r)},expression:"result.desc"}}),r("br"),r("el-input",{staticStyle:{width:"450px",margin:"10px 0 10px 20px"},attrs:{placeholder:"图片地址",readonly:""},model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"result.url"}}),r("br"),r("span",{staticStyle:{"margin-left":"20px"}},[e._v("宽："),r("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"图片宽度",readonly:""},model:{value:t.width,callback:function(r){e.$set(t,"width",r)},expression:"result.width"}})],1),r("span",{staticStyle:{"margin-left":"20px"}},[e._v("高："),r("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"图片高度",readonly:""},model:{value:t.height,callback:function(r){e.$set(t,"height",r)},expression:"result.height"}})],1),r("br"),r("i",{staticClass:"el-icon-thumb",staticStyle:{"font-size":"18px","margin-left":"400px"}}),r("i",{staticClass:"el-icon-delete-solid",staticStyle:{"font-size":"18px","margin-left":"30px"},on:{click:function(t){return e.deleteThis(a)}}})],1)])])}))],2):e._e()],1),r("el-button",{staticStyle:{display:"block",position:"fixed","z-index":"999",bottom:"40px",left:"50%","margin-left":"-100px",width:"200px","background-color":"#e20628",border:"none","font-size":"16px",color:"#fff"},on:{click:function(t){return e.submit("form")}}},[e._v("发布")])],1)},n=[],o=(r("a434"),r("0d03"),r("d4ec")),i=r("bee2"),l=r("262e"),s=r("2caf"),c=r("9ab4"),d=r("60a3"),u=r("bc3a"),p=r.n(u),f=r("71c2"),m=r("0bb3"),g=function(e){Object(l["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.form={type:"",selectType:"",templateNoticeType:"",companyNamme:"",artType:"",title:"",videoUrl:"",videoImgUrl:"",personUrl:""},e.noticeTypesArr=[],e.selectTypeArr=[],e.artTypesArr=[{value:"文章",label:"1"},{value:"链接",label:"2"},{value:"文章+视频",label:"3"}],e.resultData=[],e.tokendata=Object(m["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid")),e}return Object(i["a"])(r,[{key:"changeArtType",value:function(e){this.resultData=[],this.form.personUrl="",this.form.videoUrl="",this.form.videoImgUrl=""}},{key:"changeSelectType",value:function(e){if("1"===e){var t=this,r="http://dev-api.aixichuan.cn/bm/index/category";p.a.get(r,{params:{_tokendata:Object(m["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))}}).then((function(e){1===e.data.result?t.noticeTypesArr=e.data.data.list:t.$message.error(e.data.msg)}))}}},{key:"addArt",value:function(){this.resultData.push({type:0,desc:"",url:"",flag:!0})}},{key:"addPhoto",value:function(){this.resultData.push({type:1,desc:"",url:"",height:"",width:"",flag:!1})}},{key:"deleteThis",value:function(e){this.resultData.splice(e,1)}},{key:"fileChange",value:function(e,t,r){var a=this,n="http://dev-api.aixichuan.cn/common/file/image_upload",o=new FormData;o.append("imgFile",e.raw),o.append("_tokendata",Object(m["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),p.a.post(n,o).then((function(e){1===e.data.result?(a.resultData[r].url=e.data.data.url,a.resultData[r].width=e.data.data.width,a.resultData[r].height=e.data.data.height):a.$message.error(e.data.msg)}))}},{key:"submit",value:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;if("1"===t.form.selectType){var r=t,a="http://dev-api.aixichuan.cn/cas/pub/news",n=new FormData;n.append("typeid",t.form.templateNoticeType),n.append("title",t.form.title),n.append("content",JSON.stringify(t.resultData)),n.append("_tokendata",Object(m["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),""!==t.form.personUrl&&n.append("link",t.form.personUrl),""!==t.form.videoUrl&&n.append("video_url",t.form.videoUrl),""!==t.form.videoImgUrl&&n.append("video_cover",t.form.videoImgUrl),p.a.post(a,n).then((function(e){1===e.data.result?r.$message({message:e.data.msg,type:"success"}):r.$message.error(e.data.msg)}))}else{var o=t,i="http://dev-api.aixichuan.cn/cas/pub/unit_news",l=new FormData;l.append("unit_id",t.form.companyNamme),l.append("title",t.form.title),l.append("content",JSON.stringify(t.resultData)),l.append("_tokendata",Object(m["a"])(String((new Date).getTime()).substring(String((new Date).getTime()).length-10,String((new Date).getTime()).length),window.localStorage.getItem("accesstoken"),window.localStorage.getItem("uid"))),""!==t.form.personUrl&&l.append("link",t.form.personUrl),""!==t.form.videoUrl&&l.append("video_url",t.form.videoUrl),""!==t.form.videoImgUrl&&l.append("video_cover",t.form.videoImgUrl),p.a.post(i,l).then((function(e){1===e.data.result?o.$message({message:e.data.msg,type:"success"}):o.$message.error(e.data.msg)}))}}))}},{key:"mounted",value:function(){window.localStorage.getItem("bind_unit")&&"undefined"!==window.localStorage.getItem("bind_unit")?(this.selectTypeArr=[{value:"个人",label:"1"},{value:"单位",label:"2"}],this.companyNammeArr=JSON.parse(window.localStorage.getItem("bind_unit")||"[]"),this.form.companyNamme=this.companyNammeArr[0].id):this.selectTypeArr=[{value:"个人",label:"1"}],this.$dragging.$on("dragged",(function(e){})),this.$dragging.$on("dragend",(function(){}))}}]),r}(d["b"]);g=Object(c["a"])([Object(d["a"])({components:{Header:f["a"]}})],g);var h=g,v=h,b=(r("7ffc"),r("2877")),y=Object(b["a"])(v,a,n,!1,null,null,null);t["default"]=y.exports}}]);