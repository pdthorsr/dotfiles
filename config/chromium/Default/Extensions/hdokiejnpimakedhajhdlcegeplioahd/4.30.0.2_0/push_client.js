var lp=lp||{};lp.pushClient=function(){var e;function n(n,a,s,o){function i(){e.send({channel:"/meta/handshake",version:"1.0",supportedConnectionTypes:["callback-polling"]})}function l(n){try{var c,t=JSON.parse(n.data)[0];switch(t.channel){case"/meta/connect":e.send({clientId:t.clientId,connectionType:"websocket",channel:"/meta/connect"});break;case"/meta/handshake":t.successful&&(e.send({clientId:t.clientId,connectionType:"websocket",channel:"/meta/connect"}),e.send({clientId:t.clientId,subscription:a,channel:"/meta/subscribe"}));break;case"/ping":case"/meta/subscribe":break;case a:void 0!==t.data.av_update&&s()}}catch(e){console.log("Caught error "+e)}}e&&c(),e=new t(n.replace(/^http(s?):/gi,"ws$1:"),i,l,o)}function c(){e&&"function"==typeof e.close&&e.close(),e=null}function t(e,n,c,t){var a;function s(){(a=new WebSocket(e)).onopen=n,a.onmessage=c}s();var o=setInterval(function(){a.readyState!==a.OPEN&&a.readyState!==a.CONNECTING&&s()},t);this.close=function e(){clearInterval(o),a.close(),a=null},this.send=function e(n){a.readyState===a.OPEN&&a.send(JSON.stringify(n))}}return{connect:n,disconnect:c}}();
//# sourceMappingURL=sourcemaps/push_client.js.map
