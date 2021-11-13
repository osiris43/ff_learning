setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'9b0d65419c9344daa360bba46f2cf335',
                comparisonItems:[{name : 'cmp', value : 23252695},{name : 'plmt', value : 23252730}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1636111487556994');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("9b0d65419c9344daa360bba46f2cf335",false);var dvObj=$dvbsr;var impId='9b0d65419c9344daa360bba46f2cf335';var htmlRate=20;var runTag=-1;var lab=0;var sources=0;var adid='5805310216650691202';var urlTypeId=1288;var ddt=1;var bundleID='';var date='20211105';var prefix='IBV20210726';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var l={dvp_ac_version:"0511"},m=window,e=0,t=m.navigator,n=m.location,r=window.chrome,a=void 0;try{a=window.top}catch(e){}try{for(;m.parent&&m!=m.parent&&m.parent.document&&(m=m.parent,!(10<e++)););}catch(e){}var c={};function p(e,t){c[e]=!!t}function o(e){var t,r=0;for(t in e)e[t]&&(r+=Math.pow(2,t));return r}var u=function(e){for(var t={};0<e;){for(var r=1,n=0;2*r<=e;)r*=2,n++;t[n]=!0,e-=r}return t}(sources),g=m.document;function d(e){return g.querySelector?g.querySelector(e):null}function f(e){return g.querySelectorAll?g.querySelectorAll(e):null}function v(){function e(e,t){for(var r=0;r<e.length;r++){var n=e.item(r).getBoundingClientRect();if(n.height*n.width>1.1*t)return l.dvp_adad=parseInt(n.width)+"x"+parseInt(n.height),1}}var t,r;3==ddt&&(a=(t=parseInt(m.document.documentElement.clientWidth||0))*(r=parseInt(m.document.documentElement.clientHeight||0)),l.dvp_adfr=t+"x"+r,0<(r=g.getElementsByTagName("video")).length&&p(33,!0),0==a?p(30,!0):(p(30,!1),e(r,a)&&p(6,!0),e(g.getElementsByTagName("iframe"),a)&&p(32,!0)));var n=[],a=2==ddt||3==ddt,o=f('script[src*="player/player.js?p="]');if(o&&0<o.length)for(p(29,!0),a&&(l.DVPF_IBV_PLAYER=1),i=0;i<o.length;i++)(d=o[i].src)&&(c=d.match(/appb=([^&]*)/))&&c[1]&&n.push(c[1]);var d,c,u=f('script[id="aniviewJS"]');if(u&&0<u.length)for(p(29,!0),a&&(l.DVPF_IBV_PLAYER=1),i=0;i<u.length;i++)(d=u[i].innerText)&&(c=d.match&&d.match(/AV_APPPKGNAME=([^&]*)/))&&c[1]&&n.push(c[1]);l.dvp_acibv=n.join("_"),a&&(l.DVPF_IBV_BUNDLE=n.join(";"))}p(0,m==a),p(1,""==g.title),a==m&&(p(23,"top"==g.title),p(19,d('iframe[src="subframe.html"]')),p(45,d('iframe[src$=".html"]:not([src*="/"])'))),v(),setTimeout(function(){v(),l.bsigr!=o(c)&&(p(31,!0),l.bsigr=o(c),dvObj.registerEventCall(impId,l),u[31]&&w(""))},3e3),p(34,!!m.__monet__),t&&t.getBattery?t.getBattery().then(function(e){l.dvp_ndp2=e.charging,dvObj.registerEventCall(impId,l.dvp_ndp2)}):l.dvp_ndp2="NA";try{p(4,!(!t||!t.webdriver));var h=t&&Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"hardwareConcurrency"),s=h&&h.value&&h.value.toString();p(5,!(!(s=s||h&&h.get&&h.get.toString())||!s.indexOf||-1!=s.indexOf("native code"))),p(7,!!m.AbstractRange),p(8,!!(g.__fxdriver_evaluate||g.__fxdriver_unwrapped||g.__fxdriver_script_fn||g.documentElement&&g.documentElement.getAttribute&&g.documentElement.getAttribute("fxdriver"))),p(9,m.frameElement&&'<iframe width="100%" height="100%" style="width: 100%; height: 100%; transform: scale(1); transform-origin: 0px 0px;"></iframe>'==m.frameElement.outerHTML),p(10,m.onerror&&-1!=m.onerror.toString().indexOf("editor/console")),p(11,null===m.onerror),p(12,"function"==typeof m.CSS),p(13,!m.HID),p(14,!m.NavigatorUAData),p(15,m.fetch&&-1==m.fetch.toString().indexOf("native code")),p(16,!!m.SharedArrayBuffer),p(17,!!m.HTMLContentElement),p(18,!!m.HTMLShadowElement),p(21,0==m.innerHeight&&0==m.innerWidth),p(22,0==m.outerHeight&&0==m.outerWidth),p(24,600==m.innerHeight&&800==m.innerWidth),p(25,600==m.outerHeight&&800==m.outerWidth);var _=function(){try{a&&a.navigator&&a.navigator.deviceMemory,a&&a.chrome;return!(window==a)}catch(e){return!1}}();p(35,_);h=!1,s=!1;_&&(h=(window.navigator&&window.navigator.deviceMemory)!==(a.navigator&&a.navigator.deviceMemory),s=!r!=!a.chrome),p(36,h),p(37,s),p(39,!r),p(40,!!(m.webdriver||g.__webdriver_unwrapped||g.__webdriver_script_fn||g.__webdriver_evaluate||g.documentElement&&g.documentElement.getAttribute("webdriver"))),p(47,!(!m.__nightmare&&!m.phantom))}catch(e){}function w(e){var a,o,t="",d=n&&n.hostname;function r(e,t){var r,n;XMLHttpRequest&&(r=new XMLHttpRequest,(n=new FormData).append("key",prefix+"/"+date+"/"+a+"/"+d+"/"+o+"_"+adid+"_"+impId+"_"+t+".html"),n.append("file",e.document.documentElement&&e.document.documentElement.outerHTML),r.open("POST","https://storage.googleapis.com/gp-ms-us-gcs-fraud",!0),r.send(n))}3==ddt&&bundleID&&0<bundleID.length&&(d=0!=(2&urlTypeId)&&n?n.hostname+"/"+bundleID:bundleID),(new Date).getTime()%100<htmlRate&&(1==lab||function(){if(1==runTag){if(0==sources)return 1;for(i in u)if(c[i])return t="bit_"+i,1}}())&&(0==(a=e+t).length&&(a="default"),o=function(){var e=[];for(i in c)c[i]&&e.push(i);return e.join("_")}()||"default",r(m,"top"),m!=window&&r(window,"iframe_tag"),m!=window.parent&&r(window.parent,"iframe_tag_parent"),m!=window.parent.parent&&r(window.parent.parent,"iframe_tag_parent_parent"),(e=g.getElementById&&g.getElementById("adloaderframe"))&&r(e.contentWindow,"iframe_top_child"),p(3,!0))}w(""),l.bsigr=o(c),dvObj.registerEventCall(impId,l)}()}catch(e){try{dvObj.registerEventCall(impId,{dvp_ace:String.prototype.substring?String(e).substring(0,150):String.prototype.slice?String(e).slice(0,150):"String Error."})}catch(e){dvObj.registerEventCall(impId,{dvp_ace:"Generic Error."})}}}catch(e){}});


try{__tagObject_callback_707942580584({ImpressionID:"9b0d65419c9344daa360bba46f2cf335", ServerPublicDns:"tps702.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "9b0d65419c9344daa360bba46f2cf335");}catch(e){}
try{__verify_callback_707942580584({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "9b0d65419c9344daa360bba46f2cf335");}catch(e){}
