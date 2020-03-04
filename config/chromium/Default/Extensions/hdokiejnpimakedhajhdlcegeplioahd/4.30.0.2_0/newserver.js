LPServer=function(){var e=null,t=null,r=function(e,t){e&&e.error&&e.error(t)},n=function(e,t){if(4===e.readyState)if(200===e.status)switch(t.dataType){case"xml":t.success(e.responseXML,e.responseText);break;case"json":var r=null;try{r=JSON.parse(e.responseText)}catch(e){}t.success(r,e.responseText);break;default:t.success(e.responseText)}else t.error&&t.error(e,e.statusText)},o=(i=function(e){var t={};for(var r in e){var n=e[r];if(null!==n&&void 0!==n||(n=""),"object"==typeof n)for(var o in n)n.hasOwnProperty(o)&&(t[r+"["+o+"]"]=n[o]);else t[r]=n}return t},a=function(e,t){e=i(e),t=t||"";var r=[];for(var n in e){var o=e[n];"object"==typeof o?r=r.concat(a(o,n)):(t&&(n=t+"["+n+"]"),r.push(n+"="+encodeURIComponent(o)))}return r},function(e){return a(e).join("&")}),i,a,u=function(e){var t=new XMLHttpRequest,r=e.contentType||"application/x-www-form-urlencoded";e.success&&(t.onload=function(){n(t,e)}),e.error&&(t.onerror=function(){e.error(t,t.statusText)});var i=function(t){if("application/json"!==r)return o(e.data);if("GET"===t)return"";try{return JSON.parse(e.data),e.data}catch(t){return JSON.stringify(e.data)}},a=e.url;if("GET"===e.type){var u=i(e.type);a=e.url+(u.length>0?"?"+u:"")}if(t.open(e.type||"GET",a,!0),e.headers)for(var c in e.headers)e.headers.hasOwnProperty(c)&&t.setRequestHeader(c,e.headers[c]);"POST"===e.type?(t.setRequestHeader("Content-Type",r),e.beforeSend&&e.beforeSend(t,e),t.send(i())):(e.beforeSend&&e.beforeSend(t,e),t.send())},c=function(t,r){K.ajax({type:"POST",url:K.getBaseURL()+"getCSRFToken.php",success:function(r){t(e=r||null)},error:s(r)})},s=function(e){return function(t,r,n){"function"==typeof e?e():console.error(n)}},f=function(e,t,n,o){p(e,t,n,o)||r(t,n)},p=(l=function(e,t,r,n){if(e){var o=e[r];if("function"==typeof o)return o(n,t),!0}return!1},function(e,t,r,n){var o=l(e,t,r,n);return o=l(t.callbacks,t,r,n)||o}),l,d=function(e,t){try{K.logException(e)}catch(e){}if(e instanceof L?r(t,e.message):r(t),LPServer.throwExceptions)throw e},y=function(e,t){return function(n,o){try{if(p(e,t,o))return;if(null===n&&o&&"undefined"!=typeof DOMParser)try{var i;n=(new DOMParser).parseFromString(o,"application/xml")}catch(e){}null===n?r(t,"invalidxml"):g(n,e,t)}catch(e){d(e,t)}}},v=function(e,t){return e.getElementsByTagName(t)},S=function(e,t){var r=v(e,t);return r.length>0?r[0]:null},b=function(e,t){var r=S(e,t);return r?r.textContent:""},g=function(e,t,n){var o=S(e,"result"),i=S(e,"ok"),a=S(e,"error"),u=S(e,"failed");if(o){var c=o.getAttribute("rc"),s=o.getAttribute("msg"),l=o.getAttribute("success"),d=o.getAttribute("ok");if(c)return void f(t,n,c,o);if(s)return void f(t,n,s,o);if(l)return void f(t,n,l,o);if(d)return void f(t,n,"ok");var y=o.textContent.trim();if("ok"===y)return void(p(t,n,"ok")||f(t,n,b(e,"status")));if("bad"===y)return void r(n,b(e,"message"))}else{if(i)return void f(t,n,"ok",i);if(a)return void(p(t,n,a.getAttribute("cause"),a)||f(t,n,a.getAttribute("message"),a));if(u)return void f(t,n,u.getAttribute("reason"),u)}r(n)},k=function(e,t){return function(n,o){try{if(null===n&&o)r(t,"invalidjson");else{if(n.error)return void(p(e,t,n.error,n)||r(t,n.errortxt||n.error));if(n.hasOwnProperty("success")){if(n.success&&p(e,t,"success",n))return;if(!n.success)return void r(t)}else if(n.res){if("success"!==n.res)return void(p(e,t,n.res,n)||r(t,n.errortxt));if(p(e,t,n.res,n))return}else{if(p(e,t,n.reason,n))return;if(p(e,t,n.status,n))return;if(p(e,t,n.cmd,n))return}}e&&"function"==typeof e.default?e.default(n,t):"function"==typeof t.success&&t.success(n)}catch(e){d(e,t)}}},x=function(e,t){return function(n,o){var i;try{i=JSON.parse(n.responseText)}catch(e){return void r(t,"invalidjson")}p(e,t,i.code,i)||r(t,i.message)}},h=function(e,t,r){for(var n=[],o=0;o<r;++o)n.push(C(e,t+o));return n},m=function(t){t.userSupplied=t.userSupplied||{},t.type=void 0===t.type?"POST":t.type,t.url=K.getBaseURL()+t.url,t.data=P(t.data,t.userSupplied.requestArgs),t.data&&void 0===t.data.lpversion&&"undefined"!=typeof lpversion&&(t.data.lpversion=lpversion),void 0===t.error&&t.userSupplied.error&&(t.error=s(t.userSupplied.error)),!t.data||void 0!==t.data.token||void 0!==t.CSRFToken&&!t.CSRFToken||null!==e?K.ajax(t):c(function(){K.ajax(t)},t.userSupplied.error)},T=function(e,t){var r={},n=t.userSupplied;switch("object"!=typeof n&&(n=t.userSupplied={}),typeof t.success){case"string":return r[t.success]=n.success,e(r,n);case"function":return r.default=t.success,e(r,n);default:if(t.callbacks||n.success||n.callbacks)return e(t.callbacks,n)}return null},_=function(t,r){r.data&&void 0===r.data.token&&(void 0===r.CSRFToken||r.CSRFToken)&&(r.data.token=e)},R=function(e){e.dataType="json",e.beforeSend=N(e.beforeSend,_),e.success=T(k,e),m(e)},w=function(e){e.dataType="xml",e.beforeSend=N(e.beforeSend,_),e.success=T(y,e),m(e)},j=function(e){e.dataType="text",e.beforeSend=N(e.beforeSend,_),m(e)},A=function(e,t,r){for(var n in r=r||[],t){var o=e[n],i=t[n];if("object"==typeof i)A(o,i,r.concat(n));else if(typeof o!==i)throw r.push(n),"Extension is missing the following property: "+r.join(".")+" ("+i+")"}},E=function(e,r){for(var n in A(e,q),r)K[n]=r[n];for(var o in F)K[o]=e[o];t=e},C=function(e,t,r){var n=e.getAttribute(t);return void 0===n?r:n},O=function(e,t,r){var n=parseInt(C(e,t,r));return isNaN(n)?r:n},P=function(e){e=e||{};for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];for(var o in n)e[o]=n[o]}return e},N=function(e,t){return e?function(){var r=t.apply(window,arguments);e.apply(window,r||arguments)}:t},q={StringUtils:{translate:"function"},AES:{Encrypt:"function",Decrypt:"function",hex2bin:"function",bin2hex:"function"},enc:"function",dec:"function",RSAKey:"function",createRandomHexString:"function",parse_public_key:"function",parse_private_key:"function",enccbc:"function",make_lp_key_iterations:"function",make_lp_hash_iterations:"function",get_random_password:"function"},F={RSAKey:!0},K={ajax:u,translate:function(){return t.StringUtils.translate.apply(t.StringUtils,arguments)},logException:function(){},hex2bin:function(){return t.AES.hex2bin.apply(t.AES,arguments)},bin2hex:function(){return t.AES.bin2hex.apply(t.AES,arguments)},encryptAES:function(e,r){return t.enc(e,r)},decryptAES:function(e,r){return t.dec(e,r)},encrypt:function(e,r){return t.enc(e,r)},decrypt:function(e,r){try{return t.dec(e,r)}catch(e){return""}},createRandomHexString:function(){return t.createRandomHexString.apply(t,arguments)},parsePublicKey:function(){return t.parse_public_key.apply(t,arguments)},parsePrivateKey:function(e,r){if(!(r=r||t.rsaprivatekeyhex))throw"rsaprivatekeyhex required for this action.";return t.parse_private_key(e,r)},extractPrivateKey:function(e,r){return t.rsa_extract_privatekey(e,r)},encryptCBC:function(){return t.enccbc.apply(t,arguments)},makeKey:function(){return t.make_lp_key_iterations.apply(t,arguments)},makeHash:function(){return t.make_lp_hash_iterations.apply(t,arguments)},makeRandomPassword:function(){return t.get_random_password.apply(t,arguments)},getBaseURL:function(){return t.base_url||""},getLocalKey:function(){return t.g_local_key},setLocalKey:function(e){t.g_local_key=e}},L=function(e){this.message=e,this.stack=(new Error).stack};L.prototype=Object.create(Error.prototype),L.prototype.name="ClientException",L.prototype.constructor=L;var H,U,B=(J=function(t){t.setRequestHeader("X-CSRF-TOKEN",e)},{jsonRequest:function(e){e.dataType="json",e.contentType="application/json",e.beforeSend=N(e.beforeSend,J),e.error=x(e.callbacks,e.userSupplied||{}),m(e)}}),J,M;return{ajax:u,getRecordsFromResponse:h,jsonRequest:R,xmlRequest:w,textRequest:j,initialize:E,ext:K,getNodes:v,getNode:S,getNodeText:b,getAttr:C,getAttrInt:O,extend:P,extendCallback:N,ClientException:L,clearCSRFToken:function(){e=null},getCSRFToken:c,callback:function(e,t){e.callbacks&&"function"==typeof e.callbacks[t]&&e.callbacks[t].apply(window,Array.prototype.slice.call(arguments,2))},lmiapi:B}}();
//# sourceMappingURL=sourcemaps/newserver.js.map
