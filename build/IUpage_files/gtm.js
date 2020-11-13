
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"1369",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"foolcomPageType"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"campaign",
      "vtp_defaultValue":"unknown",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){b:{var c=\"Visitor\\x3d\";var a=document.cookie.split(\";\");for(var b=0;b\u003Ca.length;b++){var e=a[b].trim();if(0==e.indexOf(c)){a=e.substring(c.length,e.length);break b}}a=\"\"}c={};if(a)for(a=a.split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b];e=d.substring(0,d.indexOf(\"\\x3d\"));d=d.substring(d.indexOf(\"\\x3d\")+1);c[e]=d}return\"username\"in c\u0026\u0026-1!==c.username.indexOf(\"TMF\")?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EmailReady.hashed_email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"TMF",
      "vtp_name":"OrderResults.Partner"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Source"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Uid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.PixelUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.ProductId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.PromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.Skin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.OrderType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderPageView.IsBackend"
    },{
      "function":"__v",
      "vtp_name":"product",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=function(c){c+=\"\\x3d\";for(var a=document.cookie.split(\";\"),d=0;d\u003Ca.length;d++){for(var b=a[d];\" \"===b.charAt(0);)b=b.substring(1,b.length);if(0===b.indexOf(c))return b.substring(c.length,b.length)}return null};a=a(\"utms\");a=a.split(\"\\x26\");var e=\"\";a.forEach(function(a,f){a=a.split(\"\\x3d\");\"utm_source\"==a[0]\u0026\u0026(e=a[1])});return e})();"]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EmailReady.hashed_email_256"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie)return Fool.Cookie.getValues(\"Visitor\").uid;if(\"undefined\"!==typeof jQuery.cookie){var b=jQuery.cookie(\"Visitor\");var a=\"uid\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);b=null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"));return b}return 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.PromotionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.OrderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1.00",
      "vtp_name":"OrderResults.Price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){b:{var c=\"PlookieUsmf\\x3d\";var a=document.cookie.split(\";\");for(var b=0;b\u003Ca.length;b++){var e=a[b].trim();if(0==e.indexOf(c)){a=e.substring(c.length,e.length);break b}}a=\"\"}c={};if(a)for(a=a.split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b];e=d.substring(0,d.indexOf(\"\\x3d\"));d=d.substring(d.indexOf(\"\\x3d\")+1);c[e]=d}return\"C\"in c\u0026\u00260\u003Cc.C?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.Source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.ProductName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.ProductId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AddToCart.Price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.HashedEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isEcapped"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleUUID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleBureau"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleHeadline"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articlePublishedTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleTickers"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleCollection"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"Article"
    },{
      "function":"__k",
      "vtp_name":"Fool"
    },{
      "function":"__k",
      "vtp_name":"Sookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie?\"true\"==Fool.Cookie.getValues(\"Fool\").R?\"true\":\"false\":\"undefined\"!==typeof jQuery.cookie?\"true\"==getSubCookie(jQuery.cookie(\"Fool\"),\"R\")?\"true\":\"false\":!1})();"]
    },{
      "function":"__k",
      "vtp_name":"orderpage"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_name":"virtualUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"esafbtxt0000004\",\"esafbtxt0000006\",\"isafbtxt0000007\"],c=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(window.location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))};return(-1\u003Cb.indexOf(c(\"source\"))).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie)return Fool.Cookie.getValues(\"Visitor\").visits;if(\"undefined\"!==typeof jQuery.cookie){var b=jQuery.cookie(\"Visitor\");var a=\"visits\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);b=null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"));return b}return 0})();"]
    },{
      "function":"__v",
      "vtp_name":"source",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof jQuery})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003CjQuery(\".confirmPasswordHotSpot\").size()})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__ctv"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function A(){var h=\"\",l={};return{track:function(w,k){k.referrerFromTrackingLibrary=document.referrer;var m=UAParser();k.browserName=m.browser.name;k.browserVersion=m.browser.name+\"-\"+m.browser.major;k.browserEngine=m.engine.name;k.broswerDevice=m.device.type;k.browserOS=m.os.name+\" \"+m.os.version;\"undefined\"!==typeof analytics?(h=\"segmentio\",l=analytics):\"undefined\"!==typeof Keen?(h=\"keen\",l=Keen):\"undefined\"!==typeof keen\u0026\u0026(h=\"keen\",l=keen);switch(h){case \"segmentio\":l.track(w,k);break;\ncase \"keen\":l.addEvent(w,k)}}}}(function(h,l){var w=\"\",k=\"?\",m=\"function\",x=\"undefined\",B=\"object\",e=\"major\",g=\"model\",a=\"name\",c=\"type\",f=\"vendor\",b=\"version\",q=\"architecture\",C=\"console\",n=\"mobile\",p=\"tablet\",A=\"smarttv\",u={has:function(a,b){return-1!==b.toLowerCase().indexOf(a.toLowerCase())},lowerize:function(a){return a.toLowerCase()}},v=function(){for(var a,b=0,d,e,f,g,c,h=arguments;b\u003Ch.length;b+=2){c=h[b];var k=h[b+1];if(typeof a===x)for(f in a={},k)d=k[f],typeof d===B?a[d[0]]=l:a[d]=l;for(d=\ne=0;d\u003Cc.length;d++)if(g=c[d].exec(this.getUA())){for(f=0;f\u003Ck.length;f++)c=g[++e],d=k[f],typeof d===B\u0026\u00260\u003Cd.length?2==d.length?a[d[0]]=typeof d[1]==m?d[1].call(this,c):d[1]:3==d.length?a[d[0]]=typeof d[1]!==m||d[1].exec\u0026\u0026d[1].test?c?c.replace(d[1],d[2]):l:c?d[1].call(this,c,d[2]):l:4==d.length\u0026\u0026(a[d[0]]=c?d[3].call(this,c.replace(d[1],d[2])):l):a[d]=c?c:l;break}if(g)break}return a},t=function(a,b){for(var d in b)if(typeof b[d]===B\u0026\u00260\u003Cb[d].length)for(var c=0;c\u003Cb[d].length;c++){if(u.has(b[d][c],a))return d===\nk?l:d}else if(u.has(b[d],a))return d===k?l:d;return a},E={1:[\"\/8\",\"\/1\",\"\/3\"],2:\"\/4\",\"?\":\"\/\"},F={\"1.0\":\"\/8\",\"1.2\":\"\/1\",\"1.3\":\"\/3\",\"2.0\":\"\/412\",\"2.0.2\":\"\/416\",\"2.0.3\":\"\/417\",\"2.0.4\":\"\/419\",\"?\":\"\/\"},G={\"Evo Shift 4G\":\"7373KT\"},H={HTC:\"APA\",Sprint:\"Sprint\"},D={ME:\"4.90\",\"NT 3.11\":\"NT3.51\",\"NT 4.0\":\"NT4.0\",2E3:\"NT 5.0\",XP:[\"NT 5.1\",\"NT 5.2\"],Vista:\"NT 6.0\",7:\"NT 6.1\",8:\"NT 6.2\",\"8.1\":\"NT 6.3\",RT:\"ARM\"},I=[[\/(opera\\smini)\\\/((\\d+)?[\\w\\.-]+)\/i,\/(opera\\s[mobiletab]+).+version\\\/((\\d+)?[\\w\\.-]+)\/i,\/(opera).+version\\\/((\\d+)?[\\w\\.]+)\/i,\n\/(opera)[\\\/\\s]+((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/\\s(opr)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Opera\"],b,e],[\/(kindle)\\\/((\\d+)?[\\w\\.]+)\/i,\/(lunascape|maxthon|netfront|jasmine|blazer)[\\\/\\s]?((\\d+)?[\\w\\.]+)*\/i,\/(avant\\s|iemobile|slim|baidu)(?:browser)?[\\\/\\s]?((\\d+)?[\\w\\.]*)\/i,\/(?:ms|\\()(ie)\\s((\\d+)?[\\w\\.]+)\/i,\/(rekonq)((?:\\\/)[\\w\\.]+)*\/i,\/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\\\/((\\d+)?[\\w\\.-]+)\/i],[a,b,e],[\/(trident).+rv[:\\s]((\\d+)?[\\w\\.]+).+like\\sgecko\/i],[[a,\"IE\"],b,e],[\/(yabrowser)\\\/((\\d+)?[\\w\\.]+)\/i],\n[[a,\"Yandex\"],b,e],[\/(comodo_dragon)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\/_\/g,\" \"],b,e],[\/(chrome|omniweb|arora|[tizenoka]{5}\\s?browser)\\\/v?((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(dolfin)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Dolphin\"],b,e],[\/((?:android.+)crmo|crios)\\\/((\\d+)?[\\w\\.]+)\/i],[[a,\"Chrome\"],b,e],[\/version\\\/((\\d+)?[\\w\\.]+).+?mobile\\\/\\w+\\s(safari)\/i],[b,e,[a,\"Mobile Safari\"]],[\/version\\\/((\\d+)?[\\w\\.]+).+?(mobile\\s?safari|safari)\/i],[b,e,a],[\/webkit.+?(mobile\\s?safari|safari)((\\\/[\\w\\.]+))\/i],[a,[e,t,E],[b,t,F]],[\/(konqueror)\\\/((\\d+)?[\\w\\.]+)\/i,\n\/(webkit|khtml)\\\/((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(navigator|netscape)\\\/((\\d+)?[\\w\\.-]+)\/i],[[a,\"Netscape\"],b,e],[\/(swiftfox)\/i,\/(icedragon|iceweasel|camino|chimera|fennec|maemo\\sbrowser|minimo|conkeror)[\\\/\\s]?((\\d+)?[\\w\\.\\+]+)\/i,\/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\\\/((\\d+)?[\\w\\.-]+)\/i,\/(mozilla)\\\/((\\d+)?[\\w\\.]+).+rv:.+gecko\\\/\\d+\/i,\/(uc\\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\\\/\\s]?((\\d+)?[\\w\\.]+)\/i,\/(links)\\s\\(((\\d+)?[\\w\\.]+)\/i,\/(gobrowser)\\\/?((\\d+)?[\\w\\.]+)*\/i,\n\/(ice\\s?browser)\\\/v?((\\d+)?[\\w\\._]+)\/i,\/(mosaic)[\\\/\\s]((\\d+)?[\\w\\.]+)\/i],[a,b,e],[\/(apple(?:coremedia|))\\\/((\\d+)[\\w\\._]+)\/i,\/(coremedia) v((\\d+)[\\w\\._]+)\/i],[a,b,e],[\/(aqualung|lyssna|bsplayer)\\\/([\\w\\.-]+)\/i],[a,b],[\/(ares|ossproxy)\\s((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\\\/((\\d+)[\\w\\.-]+)\/i,\/(clementine|music player daemon)\\s((\\d+)[\\w\\.-]+)\/i,\/(lg player|nexplayer)\\s((\\d+)[\\d\\.]+)\/i,\/player\\\/(nexplayer|lg player)\\s((\\d+)[\\w\\.-]+)\/i],\n[a,b,e],[\/(nexplayer)\\s((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(flrp)\\\/((\\d+)[\\w\\.-]+)\/i],[[a,\"Flip Player\"],b,e],[\/(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)\/i],[a],[\/(gstreamer) souphttpsrc (?:\\([^\\)]+\\)){0,1} libsoup\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(htc streaming player)\\s[\\w_]+\\s\\\/\\s((\\d+)[\\d\\.]+)\/i,\/(java|python-urllib|python-requests|wget|libcurl)\\\/((\\d+)[\\w\\.-_]+)\/i,\/(lavf)((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(htc_one_s)\\\/((\\d+)[\\d\\.]+)\/i],[[a,\/_\/g,\" \"],b,e],[\/(mplayer)(?:\\s|\\\/)(?:(?:sherpya-){0,1}svn)(?:-|\\s)(r\\d+(?:-\\d+[\\w\\.-]+){0,1})\/i],\n[a,b],[\/(mplayer)(?:\\s|\\\/)((\\d+)[\\w\\.-]+)\/i,\/(mplayer) unknown-((\\d+)[\\w\\.\\-]+)\/i],[a,b,e],[\/(mplayer)\/i,\/(yourmuze)\/i,\/(media player classic|nero showtime)\/i],[a],[\/(nero (?:home|scout))\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(nokia\\d+)\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/\\s(songbird)\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(winamp)3 version ((\\d+)[\\w\\.-]+)\/i,\/(winamp)\\s((\\d+)[\\w\\.-]+)\/i,\/(winamp)mpeg\\\/((\\d+)[\\w\\.-]+)\/i],[a,b,e],[\/(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)\/i],[a],[\/(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\\\/((\\d+)[\\w\\.-]+)\/i],\n[a,b,e],[\/(smp)((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(vlc) media player - version ((\\d+)[\\w\\.]+)\/i,\/(vlc)\\\/((\\d+)[\\w\\.-]+)\/i,\/(xbmc|gvfs|xine|xmms|irapp)\\\/((\\d+)[\\w\\.-]+)\/i,\/(foobar2000)\\\/((\\d+)[\\d\\.]+)\/i,\/(itunes)\\\/((\\d+)[\\d\\.]+)\/i],[a,b,e],[\/(wmplayer)\\\/((\\d+)[\\w\\.-]+)\/i,\/(windows-media-player)\\\/((\\d+)[\\w\\.-]+)\/i],[[a,\/-\/g,\" \"],b,e],[\/windows\\\/((\\d+)[\\w\\.-]+) upnp\\\/[\\d\\.]+ dlnadoc\\\/[\\d\\.]+ (home media server)\/i],[b,e,[a,\"Windows\"]],[\/(com\\.riseupradioalarm)\\\/((\\d+)[\\d\\.]*)\/i],[a,b,e],[\/(rad.io)\\s((\\d+)[\\d\\.]+)\/i,\n\/(radio.(?:de|at|fr))\\s((\\d+)[\\d\\.]+)\/i],[[a,\"rad.io\"],b,e]],J=[[\/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\\)]\/i],[[q,\"amd64\"]],[\/(ia32(?=;))\/i],[[q,u.lowerize]],[\/((?:i[346]|x)86)[;\\)]\/i],[[q,\"ia32\"]],[\/windows\\s(ce|mobile);\\sppc;\/i],[[q,\"arm\"]],[\/((?:ppc|powerpc)(?:64)?)(?:\\smac|;|\\))\/i],[[q,\/ower\/,\"\",u.lowerize]],[\/(sun4\\w)[;\\)]\/i],[[q,\"sparc\"]],[\/(ia64(?=;)|68k(?=\\))|arm(?=v\\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)\/i],[q,u.lowerize]],K=[[\/\\((ipad|playbook);[\\w\\s\\);-]+(rim|apple)\/i],[g,f,\n[c,p]],[\/applecoremedia\\\/[\\w\\.]+ \\((ipad)\/],[g,[f,\"Apple\"],[c,p]],[\/(apple\\s{0,1}tv)\/i],[[g,\"Apple TV\"],[f,\"Apple\"]],[\/(hp).+(touchpad)\/i,\/(kindle)\\\/([\\w\\.]+)\/i,\/\\s(nook)[\\w\\s]+build\\\/(\\w+)\/i,\/(dell)\\s(strea[kpr\\s\\d]*[\\dko])\/i],[f,g,[c,p]],[\/\\((ip[honed|\\s\\w*]+);.+(apple)\/i],[g,f,[c,n]],[\/\\((ip[honed|\\s\\w*]+);\/i],[g,[f,\"Apple\"],[c,n]],[\/(blackberry)[\\s-]?(\\w+)\/i,\/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\\s_-]?([\\w-]+)*\/i,\/(hp)\\s([\\w\\s]+\\w)\/i,\/(asus)-?(\\w+)\/i],\n[f,g,[c,n]],[\/\\((bb10);\\s(\\w+)\/i],[[f,\"BlackBerry\"],g,[c,n]],[\/android.+((transfo[prime\\s]{4,10}\\s\\w+|eeepc|slider\\s\\w+))\/i],[[f,\"Asus\"],g,[c,p]],[\/(sony)\\s(tablet\\s[ps])\/i],[f,g,[c,p]],[\/(nintendo)\\s([wids3u]+)\/i],[f,g,[c,C]],[\/((playstation)\\s[3portablevi]+)\/i],[[f,\"Sony\"],g,[c,C]],[\/(sprint\\s(\\w+))\/i],[[f,t,H],[g,t,G],[c,n]],[\/(htc)[;_\\s-]+([\\w\\s]+(?=\\))|\\w+)*\/i,\/(zte)-(\\w+)*\/i,\/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\\s)sony)[_\\s-]?([\\w-]+)*\/i],[f,[g,\/_\/g,\" \"],[c,n]],[\/\\s((milestone|droid(?:[2-4x]|\\s(?:bionic|x2|pro|razr))?(:?\\s4g)?))[\\w\\s]+build\\\/\/i,\n\/(mot)[\\s-]?(\\w+)*\/i],[[f,\"Motorola\"],g,[c,n]],[\/android.+\\s((mz60\\d|xoom[\\s2]{0,2}))\\sbuild\\\/\/i],[[f,\"Motorola\"],g,[c,p]],[\/android.+((sch-i[89]0\\d|shw-m380s|gt-p\\d{4}|gt-n8000|sgh-t8[56]9))\/i],[[f,\"Samsung\"],g,[c,p]],[\/((s[cgp]h-\\w+|gt-\\w+|galaxy\\snexus))\/i,\/(sam[sung]*)[\\s-]*(\\w+-?[\\w-]*)*\/i,\/sec-((sgh\\w+))\/i],[[f,\"Samsung\"],g,[c,n]],[\/(sie)-(\\w+)*\/i],[[f,\"Siemens\"],g,[c,n]],[\/(maemo|nokia).*(n900|lumia\\s\\d+)\/i,\/(nokia)[\\s_-]?([\\w-]+)*\/i],[[f,\"Nokia\"],g,[c,n]],[\/android\\s3\\.[\\s\\w-;]{10}((a\\d{3}))\/i],\n[[f,\"Acer\"],g,[c,p]],[\/android\\s3\\.[\\s\\w-;]{10}(lg?)-([06cv9]{3,4})\/i],[[f,\"LG\"],g,[c,p]],[\/((nexus\\s[45]))\/i,\/(lg)[e;\\s-\\\/]+(\\w+)*\/i],[[f,\"LG\"],g,[c,n]],[\/android.+((ideatab[a-z0-9\\-\\s]+))\/i],[[f,\"Lenovo\"],g,[c,p]],[\/(lg) netcast\\.tv\/i],[f,[c,A]],[\/(mobile|tablet);.+rv:.+gecko\\\/\/i],[c,f,g]],L=[[\/(presto)\\\/([\\w\\.]+)\/i,\/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\\\/([\\w\\.]+)\/i,\/(khtml|tasman|links)[\\\/\\s]\\(?([\\w\\.]+)\/i,\/(icab)[\\\/\\s]([23]\\.[\\d\\.]+)\/i],[a,b],[\/rv:([\\w\\.]+).*(gecko)\/i],[b,a]],M=[[\/microsoft\\s(windows)\\s(vista|xp)\/i],\n[a,b],[\/(windows)\\snt\\s6\\.2;\\s(arm)\/i,\/(windows\\sphone(?:\\sos)*|windows\\smobile|windows)[\\s\\\/]?([ntce\\d\\.\\s]+\\w)\/i],[a,[b,t,D]],[\/(win(?=3|9|n)|win\\s9x\\s)([nt\\d\\.]+)\/i],[[a,\"Windows\"],[b,t,D]],[\/\\((bb)(10);\/i],[[a,\"BlackBerry\"],b],[\/(blackberry)\\w*\\\/?([\\w\\.]+)*\/i,\/(tizen)\\\/([\\w\\.]+)\/i,\/(android|webos|palmos|qnx|bada|rim\\stablet\\sos|meego)[\\\/\\s-]?([\\w\\.]+)*\/i],[a,b],[\/(symbian\\s?os|symbos|s60(?=;))[\\\/\\s-]?([\\w\\.]+)*\/i],[[a,\"Symbian\"],b],[\/mozilla.+\\(mobile;.+gecko.+firefox\/i],[[a,\"Firefox OS\"],b],\n[\/(nintendo|playstation)\\s([wids3portablevu]+)\/i,\/(mint)[\\\/\\s\\(]?(\\w+)*\/i,\/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\\\/\\s-]?([\\w\\.-]+)*\/i,\/(hurd|linux)\\s?([\\w\\.]+)*\/i,\/(gnu)\\s?([\\w\\.]+)*\/i],[a,b],[\/(cros)\\s[\\w]+\\s([\\w\\.]+\\w)\/i],[[a,\"Chromium OS\"],b],[\/(sunos)\\s?([\\w\\.]+\\d)*\/i],[[a,\"Solaris\"],b],[\/\\s([frentopc-]{0,4}bsd|dragonfly)\\s?([\\w\\.]+)*\/i],[a,b],[\/(ip[honead]+)(?:.*os\\s*([\\w]+)*\\slike\\smac|;\\sopera)\/i],[[a,\"iOS\"],[b,\/_\/g,\".\"]],\n[\/(mac\\sos\\sx)\\s?([\\w\\s\\.]+\\w)*\/i],[a,[b,\/_\/g,\".\"]],[\/(haiku)\\s(\\w+)\/i,\/(aix)\\s((\\d)(?=\\.|\\)|\\s)[\\w\\.]*)*\/i,\/(macintosh|mac(?=_powerpc)|plan\\s9|minix|beos|os\\\/2|amigaos|morphos|risc\\sos)\/i,\/(unix)\\s?([\\w\\.]+)*\/i],[a,b]],r=function(a){var b=a||(h\u0026\u0026h.navigator\u0026\u0026h.navigator.userAgent?h.navigator.userAgent:w);if(!(this instanceof r))return(new r(a)).getResult();this.getBrowser=function(){return v.apply(this,I)};this.getCPU=function(){return v.apply(this,J)};this.getDevice=function(){return v.apply(this,\nK)};this.getEngine=function(){return v.apply(this,L)};this.getOS=function(){return v.apply(this,M)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return b};this.setUA=function(a){b=a;return this};this.setUA(b)};if(typeof exports!==x)typeof module!==x\u0026\u0026module.exports\u0026\u0026(exports=module.exports=r),exports.UAParser=r;else if(h.UAParser=r,typeof define===m\u0026\u0026define.amd\u0026\u0026\ndefine(function(){return r}),typeof h.jQuery!==x){var y=h.jQuery,z=new r;y.ua=z.getResult();y.ua.get=function(){return z.getUA()};y.ua.set=function(a){z.setUA(a);a=z.getResult();for(var b in a)y.ua[b]=a[b]}}})(this);return A()})();"]
    },{
      "function":"__v",
      "vtp_name":"EcapOccurred",
      "vtp_defaultValue":"false",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof Fool\u0026\u0026\"undefined\"!==typeof Fool.Cookie?\"undefined\"!=typeof Fool.Cookie.getValues(\"PlookieUsmf\")[\"1255\"]:\"undefined\"!==typeof jQuery.cookie?\"undefined\"!=typeof getSubCookie(jQuery.cookie(\"PlookieUsmf\"),\"1255\"):!1})();"]
    },{
      "function":"__v",
      "vtp_name":"campaign",
      "vtp_defaultValue":"unknown",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__j",
      "vtp_name":"order"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.order;return\"undefined\"===typeof a||\"undefined\"===typeof a.serviceName?!1:a.serviceName})();"]
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_params"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof window._pp})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cwindow.location.href.indexOf(\".aspx\")\u0026\u00260\u003Cdocument.getElementsByTagName(\"h1\").length)for(var b=document.getElementsByTagName(\"h1\"),a=0;a\u003Cb.length;a++)if(h1=b[a],\"404\"==h1.innerText)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.href.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent||navigator.vendor||window.opera;return\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(a)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(a.substr(0,\n4))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={desktop:769,tablet:321,mobile:0},a;for(a in b)if(window.screen.width\u003E=b[a])return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.HashedEmail256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedEmail256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedFirstname256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedLastname256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedCity256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedState256"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderResults.HashedZipcode256"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"page_slug",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Campaign"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_id",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EcapResults.Term"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"002906dcc853f6eb1963e0797b4404c5ad\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":519
    },{
      "function":"__html",
      "priority":88,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\" src=\"https:\/\/embed.evenfinancial.com\/script\/helper\/bundle.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":521
    },{
      "function":"__html",
      "priority":70,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/www.jwclicks.com\/scripts\/sdk\/everflow.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EEF.conversion({aid:24});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1459
    },{
      "function":"__html",
      "priority":61,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/go.stocktrak.com\/conversion.gif\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1443
    },{
      "function":"__html",
      "priority":61,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/go.stocktrak.com\/conversion.gif\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1445
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af3f1f8708166749008a0\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1509
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af3fcf8708166749008a1\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1511
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af45cf8708166749008a3\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1513
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af440f8708166749008a2\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1515
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af476f8708166749008a4\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1517
    },{
      "function":"__img",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af47ef8708166749008a5\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1519
    },{
      "function":"__html",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",16,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EobApi(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1501
    },{
      "function":"__html",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",16,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EobApi(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1502
    },{
      "function":"__html",
      "priority":50,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1496
    },{
      "function":"__html",
      "priority":50,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:\"10000\",properties:{pixelId:\"10136530\"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||\"complete\"==f||\"loaded\"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1497
    },{
      "function":"__html",
      "priority":49,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/www.jwclicks.com\/scripts\/sdk\/everflow.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EEF.click({offer_id:EF.urlParameter(\"oid\"),affiliate_id:EF.urlParameter(\"affid\"),sub1:EF.urlParameter(\"sub1\"),sub2:EF.urlParameter(\"sub2\"),sub3:EF.urlParameter(\"sub3\"),sub4:EF.urlParameter(\"sub4\"),sub5:EF.urlParameter(\"sub5\"),uid:EF.urlParameter(\"uid\"),transaction_id:EF.urlParameter(\"_ef_transaction_id\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1463
    },{
      "function":"__html",
      "priority":40,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(a,b){var e=\"00e9ce2f1c669946a79bfac548f4eebd1a\";if(a.obApi)b=function(d){return\"[object Array]\"===Object.prototype.toString.call(d)?d:[d]},a.obApi.marketerId=b(a.obApi.marketerId).concat(b(e));else{var c=a.obApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.1\";c.loaded=!0;c.marketerId=e;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,\nb)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1500
    },{
      "function":"__html",
      "priority":10,
      "unlimited":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"comscore_init_script_",["escape",["macro",27],3],"\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"17054958\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.id=\"comscore_script_",["escape",["macro",27],7],"\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/b.scorecardresearch.com\/p?c1=2\u0026amp;c2=17054958\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\n \u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2614449390740\");pintrk(\"page\");\u003C\/script\u003E\n \u003Cnoscript\u003E\n   \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2614449390740\u0026amp;event=init\u0026amp;noscript=1\"\u003E\n \u003C\/noscript\u003E\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":591
    },{
      "function":"__cl",
      "tag_id":61
    },{
      "function":"__img",
      "vtp_useCacheBuster":false,
      "vtp_url":["template","\/\/","infotron.fool.com\/pitcher\/record_user_attribute\/VideoPageAbandon\/",["escape",["macro",3],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "tag_id":138
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/infotron.fool.com\/pitcher\/record_user_attribute\/Ecap\/",["escape",["macro",3],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":143
    },{
      "function":"__img",
      "vtp_useCacheBuster":false,
      "vtp_url":["template","\/\/","infotron.fool.com\/pitcher\/record_user_attribute\/EcapLP\/",["escape",["macro",3],3]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "tag_id":144
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/","p.rfihub.com\/ca.gif?rb=9749\u0026ca=20562175"],
      "vtp_cacheBusterQueryParam":"ra",
      "vtp_randomNumber":["macro",4],
      "tag_id":218
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_accountId":"27608",
      "vtp_hashedEmail":["macro",6],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",7],
      "tag_id":385
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"821251",
      "tag_id":405
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"831400",
      "tag_id":406
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"831462",
      "tag_id":407
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"240466",
      "tag_id":408
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"859171",
      "tag_id":409
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.dianomi.com\/pixeltrack.pl?t=FOOL",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":422
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5151830\u0026amp;Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":423
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110002;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":440
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110005;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":441
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"803689071",
      "vtp_conversionLabel":"38sWCJbu64MBEO-knf8C",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":449
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"803689071",
      "vtp_conversionLabel":"POO1CKuq84MBEO-knf8C",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":450
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"927869",
      "tag_id":451
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":456
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimpj\/N553.amex\/B22113503.236413603;dc_trk_aid=433913379;dc_trk_cid=110088570;u=MF8110025;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":462
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B24714563.283731297;dc_trk_aid=477516124;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":463
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B24714563.283560062;dc_trk_aid=477516136;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":464
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B24714563.283731564;dc_trk_aid=477516115;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":465
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":467
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":468
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":469
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":470
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":471
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":472
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":473
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":474
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":487
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":490
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":491
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":492
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":493
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N7285.3096THEMOTLEYFOOL\/B10441782.231577213;dc_trk_aid=318634803;dc_trk_cid=79790866;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":494
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":496
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":497
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.dianomi.com\/pixeltrack.pl?t=boa.cash.rewards",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":502
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":515
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":520
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263893893;dc_trk_aid=459488087;dc_trk_cid=126743288;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":530
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263893890;dc_trk_aid=459490076;dc_trk_cid=126743279;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":531
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263841982;dc_trk_aid=459490037;dc_trk_cid=126759705;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":532
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N84001.3096THEMOTLEYFOOL\/B23594548.263531162;dc_trk_aid=459467199;dc_trk_cid=126826489;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":533
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N3941.fool.com\/B24714563.283731300;dc_trk_aid=477516121;dc_trk_cid=67442974;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":534
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N805.mf2004\/B23455123.260317876;dc_trk_aid=456628666;dc_trk_cid=124759388;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":535
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":557
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":558
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":559
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":560
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":561
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":562
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/trackimp\/N970858.1970501CONSUMERTRACK\/B22519465.243404464;dc_trk_aid=440113133;dc_trk_cid=114145505;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":563
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WiderFunnel Event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",15],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":566
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"760307589",
      "vtp_conversionLabel":"a5vxCIbAipYBEIW_xeoC",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":568
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"760307589",
      "vtp_conversionLabel":"T-lNCIX99ZUBEIW_xeoC",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":569
    },{
      "function":"__baut",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",160,0]],
      "once_per_event":true,
      "vtp_eventCategory":"ecap",
      "vtp_tagId":"5151830",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "tag_id":570
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page Modal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click modal CTA",
      "vtp_eventLabel":["macro",15],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":574
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Chrome Extension Hello Bar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click button CTA",
      "vtp_eventLabel":["macro",16],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":576
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":585
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"5 Free Stocks Modal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click modal CTA",
      "vtp_eventLabel":["macro",15],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":586
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":587
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Signup",
      "vtp_twitter_pixel_id":"o1oqt",
      "tag_id":588
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"252959",
      "tag_id":609
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1376554",
      "tag_id":619
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"803689071",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":648
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1069646824",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":649
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"760307589",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":650
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Question CTA",
      "vtp_eventLabel":"Yes",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":651
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Continue CTA",
      "vtp_eventLabel":"Continue",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":652
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Advertorial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click Question CTA",
      "vtp_eventLabel":"No",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":653
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=430113\u0026ec=ulead",
      "tag_id":654
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=430113\u0026ec=usale",
      "tag_id":655
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA Button",
      "vtp_eventLabel":"In-content CTA",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":656
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"FE Order Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA Button",
      "vtp_eventLabel":"Sticky Header CTA",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":657
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template",["escape",["macro",18],14,3],"?uid=",["escape",["macro",17],12],"\u0026product_id=",["escape",["macro",19],12],"\u0026promo_code=",["escape",["macro",20],12],"\u0026source=",["escape",["macro",21],12],"\u0026skin=",["escape",["macro",22],12],"\u0026order_type=",["escape",["macro",23],12],"\u0026is_backend=",["escape",["macro",24],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":658
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1411
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1412
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1413
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1416
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1424
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1425
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1426
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1427
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1428
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SA Premium LP",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click primary CTA",
      "vtp_eventLabel":["macro",16],
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1472
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"The Daily Upside Opt-in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA",
      "vtp_eventLabel":"Investing News",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1474
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Article Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Key Points CTA Click",
      "vtp_eventLabel":"Learn more",
      "vtp_trackingId":"UA-3262475-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1503
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/gwmtracking.com\/p\/v\/1\/5f9af3ddf87081667490089f\/format\/img?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":1505
    },{
      "function":"__hl",
      "tag_id":1520
    },{
      "function":"__cl",
      "tag_id":1521
    },{
      "function":"__cl",
      "tag_id":1522
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_933",
      "tag_id":1523
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1024",
      "tag_id":1524
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1025",
      "tag_id":1525
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1027",
      "tag_id":1526
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1030",
      "tag_id":1527
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1032",
      "tag_id":1528
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1033",
      "tag_id":1529
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1034",
      "tag_id":1530
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1035",
      "tag_id":1531
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1036",
      "tag_id":1532
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1037",
      "tag_id":1533
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1038",
      "tag_id":1534
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1039",
      "tag_id":1535
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1040",
      "tag_id":1536
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1041",
      "tag_id":1537
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1042",
      "tag_id":1538
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1043",
      "tag_id":1539
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1133",
      "tag_id":1540
    },{
      "function":"__cl",
      "tag_id":1541
    },{
      "function":"__cl",
      "tag_id":1542
    },{
      "function":"__cl",
      "tag_id":1543
    },{
      "function":"__cl",
      "tag_id":1544
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1303",
      "tag_id":1545
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1304",
      "tag_id":1546
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"122374_1331",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1547
    },{
      "function":"__cl",
      "tag_id":1548
    },{
      "function":"__cl",
      "tag_id":1549
    },{
      "function":"__cl",
      "tag_id":1550
    },{
      "function":"__cl",
      "tag_id":1551
    },{
      "function":"__cl",
      "tag_id":1552
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1392",
      "tag_id":1553
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1406",
      "tag_id":1554
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1407",
      "tag_id":1555
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1408",
      "tag_id":1556
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1409",
      "tag_id":1557
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1415",
      "tag_id":1558
    },{
      "function":"__cl",
      "tag_id":1559
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1469",
      "tag_id":1560
    },{
      "function":"__cl",
      "tag_id":1561
    },{
      "function":"__cl",
      "tag_id":1562
    },{
      "function":"__cl",
      "tag_id":1563
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getQueryStringParam=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(window.location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))},gtmAid=getQueryStringParam(\"vsaid\"),gtmSource=getQueryStringParam(\"src\"),gtmIid=getQueryStringParam(\"iid\"),isExternal=\"e\"==gtmSource.substr(0,1),isEcapWidget=\"ewd\"==gtmSource.substr(6,3);\nif(isExternal){var externalPartner=gtmSource.substr(3,3);dataLayer.push({event:\"externalEcapPartner_\"+externalPartner})}setTimeout(\"trackEcap()\",1E3);function trackEcap(){dataLayer.push({event:\"ecapDataHelperComplete\"})};\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var sha256Email=\"",["escape",["macro",28],7],"\";\"\"!=sha256Email?fbq(\"init\",\"1561515534098628\",{em:sha256Email}):fbq(\"init\",\"1561515534098628\");\nfbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":"\u003Cdiv id=\"infotron_pixel_1\" style=\"display:none\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"infotron_pixel_2\" style=\"display:none\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"infotron_pixel_3\" style=\"display:none\"\u003E\u003C\/div\u003E\n\n\u003Cscript id=\"infotron_pixel_script_block\" type=\"text\/gtmscript\"\u003Efunction infotron_pixel_1(a){document.getElementById(\"infotron_pixel_1\").innerHTML=a}function infotron_pixel_2(a){document.getElementById(\"infotron_pixel_2\").innerHTML=a}function infotron_pixel_3(a){document.getElementById(\"infotron_pixel_3\").innerHTML=a}function getScript(a,c){var b=document.createElement(\"script\");b.src=a+\"\\x26callback\\x3d\"+c;b.id=c+\"_script\";document.getElementsByTagName(\"head\")[0].appendChild(b)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.defineSlot(\"\/3910\/usmf.newsletters\",[470,300],\"div-gpt-ad-1433440511681-0\").addService(googletag.pubads()).setCollapseEmptyDiv(!0);googletag.enableServices()});\njQuery.ajax({url:\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",dataType:\"script\",cache:!0,success:function(){jQuery(\"#InfotronNewsletterArticlePitch\").after('\\x3cdiv id\\x3d\"div-gpt-ad-1433440511681-0\" style\\x3d\"width:470px; height:300px;\"\\x3e');googletag.cmd.push(function(){googletag.display(\"div-gpt-ad-1433440511681-0\")})}});\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"centro.pixel.ad\/iap\/37735c612e457a4b\";(new Image).src=ssaUrl;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Enull!==document.getElementById(\"upsell-fool-pass-form\")\u0026\u0026(!0!==jQuery(\"#upsell-fool-pass-form\").is(\":visible\")?Infotrack.track(\"FoolPass Fail\",{category:\"FoolPass\",label:\"Fool Pass Failed to Show When it Should\"}):Infotrack.track(\"FoolPass Success\",{category:\"FoolPass\",label:\"Fool Pass Showed When it was Supposed To\"}));\u003C\/script\u003E  \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5151830\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":292
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\" id=\"twitter_script\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" id=\"twitter_init_script\"\u003Etwttr.conversion.trackPid(\"nuo4p\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar campaign=\"",["escape",["macro",3],7],"\";if(\"\"!=campaign){var campaignKeenClient=new Keen({projectId:\"5798087538314468b82abada\",writeKey:\"e188d9ad4223e77b9e6a3345f6865cb1f19e6b48643b08ef456dd33052f8c0bf5e7ec2f32cfdc8f47fcd30e40ee411d8f3d332d4d617fb829456ce6f89cdc5ebe4837c3dfdc2786625ffcf64d8e035c6a82a3ea7c66e867d4327c4d3609ba7d2\"});campaignKeenClient.addEvent(\"CampaignTraffic\",{type:\"video\",campaign:\"",["escape",["macro",3],7],"\"})};\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.6.3\/css\/font-awesome.min.css\"\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Lato:700|Lora:400,400italic\"\u003E\n\n\u003Cstyle\u003E\n    #ouibounce-modal {\n        display: none;  \n    }\n  \n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK\/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat fixed transparent\\9;\n  z-index: 9998;\n  color: #fff;\n  transition: opacity 500ms;\n}\n\n#ouibounce-modal header {\n  text-align: center;\n}\n#ouibounce-modal header h1 {\n  font-size: 50px;\n  margin: 10px auto;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n}\n#ouibounce-modal header h1 u {\n  color: #1E824C;\n}\n#ouibounce-modal header h2 {\n  margin: 0 auto 10px auto;\n  color: #34495e;\n  font-size: 36px;\n  font-family: 'Lora', serif;\n}\n\n.fa-ul {\n  display: table;\n  margin: 0 auto;\n  font-family: 'Lora', serif;\n}\n.fa-ul li {\n  margin: 0 auto;\n}\n\n.popup {\n  margin: 0px;\n  padding: 20px;\n  z-index: 9999;\n  padding-bottom: 0px;\n  text-align: left;\n  background: #fff;\n  border-radius: 5px;\n  width: 570px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: #000;\n}\n\n.btn-large {\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n  font-weight: bold;\n  background-color: #ffc579;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffc579), to(#fb9d23));\n  background-image: -webkit-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -moz-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -ms-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: -o-linear-gradient(top, #ffc579, #fb9d23);\n  background-image: linear-gradient(to bottom, #ffc579, #fb9d23);\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  max-width: 60%;\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 5px;\n  color: #000;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 24px;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.btn-large:hover {\n  transition: all 1s;\n  background-color: #ffaf46;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffaf46), to(#e78404));\n  background-image: -webkit-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -moz-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -ms-linear-gradient(top, #ffaf46, #e78404);\n  background-image: -o-linear-gradient(top, #ffaf46, #e78404);\n  background-image: linear-gradient(to bottom, #ffaf46, #e78404);\n}\n.btn-large:active {\n  transition: all 60ms ease;\n  transform: scale(0.97);\n  opacity: .75;\n}\n\n.popup .closePopupCross {\n  position: absolute;\n    right: 5px;\n    top: 1px;\n}\n.popup .closePopupCross:hover {\n  color: #919191;\n}\n\n  \n\u003C\/style\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.1.3\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/ouibounce\/0.0.11\/ouibounce.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"UK HERE\");\njQuery(document).ready(function(){jQuery(\"body\").prepend('\\x3cdiv id\\x3d\"ouibounce-modal\"\\x3e \\x3cdiv class\\x3d\"overlay\"\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"popup\"\\x3e \\x3ca class\\x3d\"closePopupNow closePopupCross\" href\\x3d\"#\"\\x3e\\x3cspan class\\x3d\"fa fa-times-circle\"\\x3e\\x3c\/span\\x3e\\x3c\/a\\x3e \\x3cdiv class\\x3d\"content\"\\x3e \\x3cheader\\x3e \\x3cimg src\\x3d\"http:\/\/g.foolcdn.com\/art\/shop\/newsletters\/tmf\/logo_InvestBetter.png\" alt\\x3d\"\"\/\\x3e \\x3ch1\\x3e\\x3cu\\x3eFREE\\x3c\/u\\x3e 7-Day Trial\\x3c\/h1\\x3e \\x3ch2\\x3eTest drive\\x3c\/br\\x3e \\x3cem\\x3eMotley Fool\\x3c\/em\\x3e\\x3c\/br\\x3e \\x3cem\\x3eStock Advisor\\x3c\/em\\x3e\\x3c\/br\\x3e for 7 days...\\x3c\/h2\\x3e \\x3c\/header\\x3e \\x3cul class\\x3d\"fa-ul\"\\x3e \\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eSee every stock recommendation\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eDownload every stock report\\x3c\/li\\x3e\\x3cli\\x3e\\x3ci class\\x3d\"fa-li fa fa-check-square-o\"\\x3e\\x3c\/i\\x3eGet unlimited access to our investing materials\\x3c\/li\\x3e\\x3c\/ul\\x3e \\x3ca href\\x3d\"http:\/\/www.fool.com\/mms\/mark\/eip-saft\" class\\x3d\"btn-large \"\\x3eStart My \\x3cu\\x3e\\x3cb\\x3eFREE\\x3c\/b\\x3e\\x3c\/u\\x3e Trial\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');jQuery(\".closePopupNow, .closeLeavePage, .overlay\").click(function(){jQuery(\".overlay, .popup\").fadeOut(500)});\nouibounce(document.getElementById(\"ouibounce-modal\"),{aggressive:!0,timer:0,callback:function(){console.log(\"ouibounce fired!\")}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":330
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  .overlayElement {font-size: 14px; position: relative; visibility: visible; border-style: none; background-color: #fff;}\n   .overlayElement h1 {font-size:36px; margin:0 0 20px;} \n  .overlayElement h3 {font-size: 20px; margin:0 0 20px;}\n  .overlayElement p {line-height: 1.4em; margin:0 0 12px;}\n \u003C\/style\u003E \n\n\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n Reqwest! A general purpose XHR connection manager\n license MIT (c) Dustin Diaz 2014\n https:\/\/github.com\/ded\/reqwest\n*\/\n!function(b,d,g){\"undefined\"!=typeof module\u0026\u0026module.exports?module.exports=g():\"function\"==typeof define\u0026\u0026define.amd?define(g):d[b]=g()}(\"reqwest\",this,function(){function b(a,e,c){return function(){if(a._aborted)return c(a.request);a.request\u0026\u00264==a.request[t]\u0026\u0026(a.request.onreadystatechange=O,P.test(a.request.status)?e(a.request):c(a.request))}}function d(a,e){var c=e.headers||{},b;c.Accept=c.Accept||r.accept[e.type]||r.accept[\"*\"];e.crossOrigin||c[F]||(c[F]=r.requestedWith);c[G]||(c[G]=e.contentType||\nr.contentType);for(b in c)c.hasOwnProperty(b)\u0026\u0026\"setRequestHeader\"in a\u0026\u0026a.setRequestHeader(b,c[b])}function g(a){u=a}function l(a,e){return a+(\/\\?\/.test(a)?\"\\x26\":\"?\")+e}function v(a,e,c,b){var d=Q++,f=a.jsonpCallback||\"callback\";a=a.jsonpCallbackName||m.getcallbackPrefix(d);var n=new RegExp(\"((^|\\\\?|\\x26)\"+f+\")\\x3d([^\\x26]+)\"),k=b.match(n),h=H.createElement(\"script\"),q=0,r=-1!==navigator.userAgent.indexOf(\"MSIE 10.0\");return k?\"?\"===k[3]?b=b.replace(n,\"$1\\x3d\"+a):a=k[3]:b=l(b,f+\"\\x3d\"+a),p[a]=g,h.type=\n\"text\/javascript\",h.src=b,h.async=!0,\"undefined\"!=typeof h.onreadystatechange\u0026\u0026!r\u0026\u0026(h.htmlFor=h.id=\"_reqwest_\"+d),h.onload=h.onreadystatechange=function(){if(h[t]\u0026\u0026\"complete\"!==h[t]\u0026\u0026\"loaded\"!==h[t]||q)return!1;h.onload=h.onreadystatechange=null;h.onclick\u0026\u0026h.onclick();e(u);u=void 0;x.removeChild(h);q=1},x.appendChild(h),{abort:function(){h.onload=h.onreadystatechange=null;c({},\"Request is aborted: timeout\",{});u=void 0;x.removeChild(h);q=1}}}function y(a,e){var c=this.o,q=(c.method||\"GET\").toUpperCase(),\nw=\"string\"==typeof c?c:c.url,f=!1!==c.processData\u0026\u0026c.data\u0026\u0026\"string\"!=typeof c.data?m.toQueryString(c.data):c.data||null,n=!1;(\"jsonp\"==c.type||\"GET\"==q)\u0026\u0026f\u0026\u0026(w=l(w,f),f=null);if(\"jsonp\"==c.type)a=v(c,a,e,w);else{var k=c.xhr\u0026\u0026c.xhr(c)||R(c);k.open(q,w,!1===c.async?!1:!0);d(k,c);\"undefined\"!=typeof c.withCredentials\u0026\u0026\"undefined\"!=typeof k.withCredentials\u0026\u0026(k.withCredentials=!!c.withCredentials);a=(p[z]\u0026\u0026k instanceof p[z]?(k.onload=a,k.onerror=e,k.onprogress=function(){},n=!0):k.onreadystatechange=b(this,\na,e),c.before\u0026\u0026c.before(k),n?setTimeout(function(){k.send(f)},200):k.send(f),k)}return a}function A(a,e){this.o=a;this.fn=e;J.apply(this,arguments)}function S(a){if(a.match(\"json\"))return\"json\";if(a.match(\"javascript\"))return\"js\";if(a.match(\"text\"))return\"html\";if(a.match(\"xml\"))return\"xml\"}function J(a,e){function c(c){a.timeout\u0026\u0026clearTimeout(f.timeout);for(f.timeout=null;0\u003Cf._completeHandlers.length;)f._completeHandlers.shift()(c)}function b(b){var k=a.type||S(b.getResponseHeader(\"Content-Type\"));\nb=\"jsonp\"!==k?f.request:b;var h=K.dataFilter(b.responseText,k);try{b.responseText=h}catch(I){}if(h)switch(k){case \"json\":try{b=p.JSON?p.JSON.parse(h):eval(\"(\"+h+\")\")}catch(I){return d(b,\"Could not parse JSON in response\",I)}break;case \"js\":b=eval(h);break;case \"html\":b=h;break;case \"xml\":b=b.responseXML\u0026\u0026b.responseXML.parseError\u0026\u0026b.responseXML.parseError.errorCode\u0026\u0026b.responseXML.parseError.reason?null:b.responseXML}f._responseArgs.resp=b;f._fulfilled=!0;e(b);for(f._successHandler(b);0\u003Cf._fulfillmentHandlers.length;)b=\nf._fulfillmentHandlers.shift()(b);c(b)}function d(a,b,e){a=f.request;f._responseArgs.resp=a;f._responseArgs.msg=b;f._responseArgs.t=e;for(f._erred=!0;0\u003Cf._errorHandlers.length;)f._errorHandlers.shift()(a,b,e);c(a)}this.url=\"string\"==typeof a?a:a.url;this.timeout=null;this._fulfilled=!1;this._successHandler=function(){};this._fulfillmentHandlers=[];this._errorHandlers=[];this._completeHandlers=[];this._erred=!1;this._responseArgs={};var f=this;e=e||function(){};a.timeout\u0026\u0026(this.timeout=setTimeout(function(){f.abort()},\na.timeout));a.success\u0026\u0026(this._successHandler=function(){a.success.apply(a,arguments)});a.error\u0026\u0026this._errorHandlers.push(function(){a.error.apply(a,arguments)});a.complete\u0026\u0026this._completeHandlers.push(function(){a.complete.apply(a,arguments)});this.request=y.call(this,b,d)}function m(a,b){return new A(a,b)}function B(a){return a?a.replace(\/\\r?\\n\/g,\"\\r\\n\"):\"\"}function L(a,b){var c=a.name,e=a.tagName.toLowerCase(),d=function(a){a\u0026\u0026!a.disabled\u0026\u0026b(c,B(a.attributes.value\u0026\u0026a.attributes.value.specified?\na.value:a.text))},f,g,k;if(!a.disabled\u0026\u0026c)switch(e){case \"input\":\/reset|button|image|file\/i.test(a.type)||(f=\/checkbox\/i.test(a.type),g=\/radio\/i.test(a.type),k=a.value,(!f\u0026\u0026!g||a.checked)\u0026\u0026b(c,B(f\u0026\u0026\"\"===k?\"on\":k)));break;case \"textarea\":b(c,B(a.value));break;case \"select\":if(\"select-one\"===a.type.toLowerCase())d(0\u003C=a.selectedIndex?a.options[a.selectedIndex]:null);else for(e=0;a.length\u0026\u0026e\u003Ca.length;e++)a.options[e].selected\u0026\u0026d(a.options[e])}}function M(){var a=this,b;for(b=0;b\u003Carguments.length;b++){var c=\narguments[b];\/input|select|textarea\/i.test(c.tagName)\u0026\u0026L(c,a);var d,g,f=c,n=[\"input\",\"select\",\"textarea\"];for(g=0;g\u003Cn.length;g++)for(c=f[N](n[g]),d=0;d\u003Cc.length;d++)L(c[d],a)}}function T(){return m.toQueryString(m.serializeArray.apply(null,arguments))}function U(){var a={};return M.apply(function(b,c){b in a?(a[b]\u0026\u0026!C(a[b])\u0026\u0026(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}function D(a,b,c,d){var e,f=\/\\[\\]$\/;if(C(b))for(e=0;b\u0026\u0026e\u003Cb.length;e++){var g=b[e];c||f.test(a)?d(a,g):D(a+\"[\"+(\"object\"==typeof g?\ne:\"\")+\"]\",g,c,d)}else if(b\u0026\u0026\"[object Object]\"===b.toString())for(e in b)D(a+\"[\"+e+\"]\",b[e],c,d);else d(a,b)}var p=window,H=document,P=\/^(20\\d|1223)$\/,N=\"getElementsByTagName\",t=\"readyState\",G=\"Content-Type\",F=\"X-Requested-With\",x=H[N](\"head\")[0],Q=0,V=\"reqwest_\"+ +new Date,u,E=\"XMLHttpRequest\",z=\"XDomainRequest\",O=function(){},C=\"function\"==typeof Array.isArray?Array.isArray:function(a){return a instanceof Array},r={contentType:\"application\/x-www-form-urlencoded\",requestedWith:E,accept:{\"*\":\"text\/javascript, text\/html, application\/xml, text\/xml, *\/*\",\nxml:\"application\/xml, text\/xml\",html:\"text\/html\",text:\"text\/plain\",json:\"application\/json, text\/javascript\",js:\"application\/javascript, text\/javascript\"}},R=function(a){if(!0===a.crossOrigin){if((a=p[E]?new XMLHttpRequest:null)\u0026\u0026\"withCredentials\"in a)return a;if(p[z])return new XDomainRequest;throw Error(\"Browser does not support cross-origin requests\");}return p[E]?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\")},K={dataFilter:function(a){return a}};return A.prototype={abort:function(){this._aborted=\n!0;this.request.abort()},retry:function(){J.call(this,this.o,this.fn)},then:function(a,b){return a=a||function(){},b=b||function(){},this._fulfilled?this._responseArgs.resp=a(this._responseArgs.resp):this._erred?b(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(a),this._errorHandlers.push(b)),this},always:function(a){return this._fulfilled||this._erred?a(this._responseArgs.resp):this._completeHandlers.push(a),this},fail:function(a){return this._erred?\na(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(a),this}},m.serializeArray=function(){var a=[];return M.apply(function(b,c){a.push({name:b,value:c})},arguments),a},m.serialize=function(){if(0===arguments.length)return\"\";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a\u0026\u0026a.nodeType\u0026\u0026c.push(a)\u0026\u0026(a=null),a\u0026\u0026(a=a.type),\"map\"==a?b=U:\"array\"==a?b=m.serializeArray:b=T,b.apply(null,c)},m.toQueryString=function(a,b){var c,d=b||!1,e=[],f=encodeURIComponent;\nb=function(a,b){b=\"function\"==typeof b?b():null==b?\"\":b;e[e.length]=f(a)+\"\\x3d\"+f(b)};if(C(a))for(c=0;a\u0026\u0026c\u003Ca.length;c++)b(a[c].name,a[c].value);else for(c in a)a.hasOwnProperty(c)\u0026\u0026D(c,a[c],d,b);return e.join(\"\\x26\").replace(\/%20\/g,\"+\")},m.getcallbackPrefix=function(){return V},m.compat=function(a,b){return a\u0026\u0026(a.type\u0026\u0026(a.method=a.type)\u0026\u0026delete a.type,a.dataType\u0026\u0026(a.type=a.dataType),a.jsonpCallback\u0026\u0026(a.jsonpCallbackName=a.jsonpCallback)\u0026\u0026delete a.jsonpCallback,a.jsonp\u0026\u0026(a.jsonpCallback=a.jsonp)),\nnew A(a,b)},m.ajaxSetup=function(a){a=a||{};for(var b in a)K[b]=a[b]},m});window.dataLayer=window.dataLayer||[];\nInfotronQueue=function(){return{EventName:\"overrideInPage\",Queue:null,AllKeysInPage:null,AllCallsRegistered:!1,PageId:Math.floor(1E8*Math.random()+1),Register:function(b){this.Queue=this.Queue||{};this.AllKeysInPage=this.AllKeysInPage||{};this.Queue[b]=1;this.AllKeysInPage[b]=1},Unregister:function(b){delete this.Queue[b];this.IsReadyToFire()\u0026\u0026this.Complete()},Length:function(){var b=0;for(key in this.Queue)this.Queue.hasOwnProperty(key)\u0026\u0026b++;return b},EndOfPage:function(b){this.EventName=b;this.AllCallsRegistered=\n!0;this.IsReadyToFire()\u0026\u0026this.Complete()},IsReadyToFire:function(){return(\"complete\"===document.readyState||\"interactive\"===document.readyState)\u0026\u00260==this.Length()},Complete:function(){reqwest({url:\"\/\/infotron.fool.com\/infotrack\/pageview\",data:{pageId:this.PageId},timeout:3E3,type:\"jsonp\",crossOrigin:!0,error:function(b,d){},success:function(b){}});window.dataLayer.push({event:this.EventName})}}};window.infotronQueue=InfotronQueue();var dataLayer=dataLayer||[];\nPitchEngine=function(){return{Url:\"\/\/infotron.fool.com\/pitcher\/get_pitch\",ContainsPitchBase:!1,tryParseInt:function(b,d){null!=b\u0026\u00260\u003Cb.length\u0026\u0026(isNaN(b)||(d=parseInt(b)));return d},initialize:function(b){var d=this,g=window.location.host.split(\".\")[0];if(-1\u003Cg.indexOf(\"test.www\")||-1\u003Cg.indexOf(\"staging.www\"))d.Url=d.Url.replace(\"infotron.fool.com\",g+\".infotron.fool.com\");d.get(b)},get:function(b){window.infotronQueue\u0026\u0026(b.pageId=window.infotronQueue.PageId);var d=this;d.RegisterQueue(b.pitchContainer);\nd.ContainsPitchBase=b.containsPitchBase;d.Params=b;reqwest({url:d.Url,data:b,timeout:3E3,type:\"jsonp\",crossOrigin:!0,error:function(g,l){d.pitcherError(b.pitchContainer)},success:function(g){d.pitcherDone(b.placement,b.pitchContainer,g)}})},pitcherDone:function(b,d,g){var l=this;l.UnRegisterQueue(d);0\u003Cg.length\u0026\u0026(null!=document.getElementById(d)?(l.placeInPage(d,g),window.dataLayer.push({customPitch:\"false\"})):\"article_pitch\"==b\u0026\u0026null!=document.getElementById(\"pitcherPitch\")?(window.dataLayer.push({customPitch:\"false\"}),\nwindow.dataLayer.push({fallBackPitch:\"true\"}),l.placeInPage(\"pitcherPitch\",g)):window.dataLayer.push({customPitch:\"true\"}))},placeInPage:function(b,d){b=document.getElementById(b);b.innerHTML=d;try{var g=b.getElementsByTagName(\"script\");for(d=0;d\u003Cg.length;d++)if(\"\"!=g[d].src){var l=document.createElement(\"script\");l.type=\"text\/javascript\";l.async=!0;l.src=g[d].src;var v=document.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(l,v)}else eval(g[d].text)}catch(y){\"undefined\"!==typeof console\u0026\u0026\n\"undefined\"!==typeof console.error\u0026\u0026console.error(y)}},pitcherError:function(b){var d=this;d.UnRegisterQueue(b)},RegisterQueue:function(b){window.infotronQueue\u0026\u0026window.infotronQueue.Register(b)},UnRegisterQueue:function(b){window.infotronQueue\u0026\u0026window.infotronQueue.Unregister(b)}}};\nFoolPitchEngineTracker=function(){return{DataLayer:null,EventType:\"articlePageView\",initialize:function(b,d){this.DataLayer=\"undefined\"!==typeof b?b:window.dataLayer;\"\"!=d\u0026\u0026(this.EventType=d)},CustomPitch:function(b){this.DataLayer.push({customPitch:b})},Track:function(){this.DataLayer.push({event:\"articlePageView\"})}}};function insertAfter(b,d){d.parentNode.insertBefore(b,d.nextSibling)}var newEl=document.createElement(\"div\");newEl.id=\"InfotronNewsletterOverlayPitch\";var ref=document.querySelector(\"div\");\ninsertAfter(newEl,ref);\"undefined\"!==typeof window.infotronQueue\u0026\u0026window.infotronQueue.Register(\"InfotronNewsletterOverlayPitch\");var pitchEngine=PitchEngine();pitchEngine.initialize({site:\"fool\",placement:\"newsletter_overlay\",pitchContainer:\"InfotronNewsletterOverlayPitch\"});window.infotronQueue.EndOfPage(\"articlePageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":338
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.btoa||(window.btoa=base64.encode);window.atob||(window.atob=base64.decode);\"remove\"in Element.prototype||(Element.prototype.remove=function(){this.parentNode\u0026\u0026this.parentNode.removeChild(this)});var uid=",["escape",["macro",29],8,16],";if(\"\"!=uid\u0026\u00260!=uid){var pingPoint=\"\/\/infotron.fool.com\/ping?p\\x3d\",actionData=JSON.stringify({Id:uid,Actions:[{Action:\"url\",Value:window.location.pathname+window.location.search}]});encoded_string=window.btoa(actionData);var el=document.createElement(\"script\");el.src=\npingPoint+encoded_string;el.type=\"text\/javascript\";el.id=\"actionData\";el.onreadystatechange=el.onload=function(){var a=el.readyState;a\u0026\u0026!\/loaded|complete\/.test(a)||el.remove()};document.body.appendChild(el)}}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":343
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Lato:700%7CLora:400,400italic\"\u003E\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.6.3\/css\/font-awesome.min.css\"\u003E\n  \u003Cstyle\u003E\n  \t#ouibounce-modal {\n        display: none;  \n    }\n    \n    .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK\/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat fixed transparent\\9;\n    z-index: 9998;\n    color: #ffffff;\n    -webkit-transition: opacity 500ms;\n    -moz-transition: opacity 500ms;\n    -o-transition: opacity 500ms;\n    transition: opacity 500ms;\n  }\n  \n  #ouibounce-modal header {\n    text-align: center;\n  }\n  \n  #ouibounce-modal header h1 {\n    font-size: 40px;\n    margin: 25px auto 25px auto;\n    color: #ffffff;\n    font-family: 'Lato', sans-serif;\n  }\n  \n  #ouibounce-modal header h2 {\n    font-size: 35px;\n    font-family: 'Lato', sans-serif;\n    color: #ffffff;\n    margin-top: 0;\n  }\n  \n  .popup {\n    margin: 0px;\n    padding: 10px 15px 35px 15px;\n    z-index: 9999;\n    padding-bottom: 0px;\n    text-align: left;\n    background: #2679be url(https:\/\/g.foolcdn.com\/art\/fool15\/bg\/cap.png) 215px 10px no-repeat;\n    border-radius: 10px;\n    background-size: 467px 280px;\n    width: 100%;\n    max-width: 596px;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    color: #000;\n    border: 2px solid #41719c;\n    box-sizing: border-box;\n  }\n  \n  .popup.resize {\n    top: 0;\n    -webkit-transform: translate(-50%, 0);\n    -moz-transform: translate(-50%, 0);\n    -ms-transform: translate(-50%, 0);\n    -o-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    position: relative;\n  }\n  \n  .logo {\n    background: white;\n    border: 2px solid #2679be;\n    border-radius: 10px;\n    padding: 10px;\n  }\n  \n  .logo img {\n    max-width: 220px;\n    width: 100%;\n  }\n  \n  .block-center {\n    width: 80%;\n    margin: 0 auto;\n  }\n  \n  .btn-large {\n    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n    background-color: transparent;\n    border: 1px solid white;\n    border-radius: 10px;\n    position: relative;\n    display: inline-block;\n    max-width: 38%;\n    width: 100%;\n    font-family: 'Lato', sans-serif;\n    text-align: center;\n    margin: 15px auto;\n    padding: 20px;\n    color: #ffffff!important;\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 24px;\n    text-decoration: none;\n    cursor: pointer;\n    text-decoration: none!important;\n    -webkit-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    -moz-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    -o-transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n    transition: background-color 1s, box-shadow 0.5s, color 1s, opacity 1s, transform 1s;\n  }\n  \n  .btn-large.first {\n    margin-right: 4%;\n  }\n  \n  .btn-large.btn-bg {\n    background-color: #ffffff;\n    color: #2679be!important;\n  }\n  \n  .btn-large:hover,\n  .btn-large.btn-bg:hover {\n    background-color: #ffffff;\n    color: #2679be!important;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n  }\n  \n  .btn-large:active {\n    -webkit-transition: all 60ms ease;\n    -moz-transition: all 60ms ease;\n    -o-transition: all 60ms ease;\n    transition: all 60ms ease;\n    -webkit-transform: scale(0.97);\n    transform: scale(0.97);\n    opacity: .75;\n  }\n  \n .popup .closePopupCross {\n    position: absolute;\n    right: 2px;\n    top: 0px;\n    color: white !important;\n}\n  .popup .closePopupCross:hover {\n    color: #919191 !important;\n  }\n  \n  @media (max-width: 767px) {\n    .popup {\n      background-size: 85%;\n      background-position: 250% 15%;\n    }\n    .logo img {\n      width: 100%;\n      max-width: 326px;\n    }\n    #ouibounce-modal header h1 {\n      font-size: 30px;\n      line-height: 40px;\n    }\n    .btn-large {\n      display: block;\n      width: 100%;\n      max-width: 100%;\n      margin: 15px auto!important;\n      box-sizing: border-box;\n      padding: 0;\n      height: 40px;\n      line-height: 35px;\n      font-size: 14px;\n    }\n    #ouibounce-modal header h2 {\n      font-size: 25px;\n      margin-top: 10px;\n    }\n  }\n  \u003C\/style\u003E\n\n  \u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.1.3\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n  \u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/ouibounce\/0.0.11\/ouibounce.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"UK HERE\");function fixHeight(){jQuery(window).height()\u003C=jQuery(\".popup\").height()?jQuery(\".popup\").addClass(\"resize\"):jQuery(window).height()\u003EjQuery(\".popup\").height()\u0026\u0026jQuery(\".popup\").removeClass(\"resize\")}\njQuery(document).ready(function(){jQuery(\"body\").prepend('\\x3cdiv id\\x3d\"ouibounce-modal\"\\x3e \\x3cdiv class\\x3d\"overlay\"\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"popup\"\\x3e\\x3ca class\\x3d\"closePopupNow closePopupCross\" href\\x3d\"#\"\\x3e\\x3cspan class\\x3d\"fa fa-times-circle\"\\x3e\\x3c\/span\\x3e\\x3c\/a\\x3e  \\x3cdiv class\\x3d\"content\"\\x3e \\x3cheader\\x3e \\x3cdiv class\\x3d\"logo\"\\x3e\\x3cimg src\\x3d\"https:\/\/g.foolcdn.com\/art\/fool15\/bg\/fool-logo.png\" alt\\x3d\"The Motley Fool Logo\"\/\\x3e\\x3c\/div\\x3e\\x3ch1\\x3eVideo not your thing?\\x3c\/h1\\x3e \\x3ch2\\x3eRead the transcript\\x3c\/br\\x3eat your own pace\\x3c\/h2\\x3e \\x3c\/header\\x3e\\x3cdiv class\\x3d\"block-center\"\\x3e\\x3ca id\\x3d\"leave\" class\\x3d\"btn-large first\" tabindex\\x3d\"1\"\\x3eLeave\\x3c\/a\\x3e \\x3ca href\\x3d\"https:\/\/www.fool.com\/investor-alert\/stock-advisor\/sa-applecar\/\" id\\x3d\"exitPopupLink\" class\\x3d\"btn-large btn-bg\" tabindex\\x3d\"2\"\\x3eRead Transcript\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');fixHeight();\njQuery(\".closePopupNow, .closeLeavePage, .overlay,#leave\").click(function(){jQuery(\".overlay, .popup\").fadeOut(500)});ouibounce(document.getElementById(\"ouibounce-modal\"),{aggressive:!0,timer:0,callback:function(){console.log(\"ouibounce fired!\")}})});jQuery(window).resize(function(){fixHeight()});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar getQueryStringParam=getQueryStringParam||function(b){b=b.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");b=\"[\\\\?\\x26]\"+b+\"\\x3d([^\\x26#]*)\";b=new RegExp(b);b=b.exec(window.location.search);return null==b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"))},updateQueryStringParam=updateQueryStringParam||function(b,d,a){var c,e=new RegExp(\"([?\\x26])\"+b+\"\\x3d.*?(\\x26|#|$)(.*)\",\"gi\");return(a||(a=window.location.href),e.test(a))?\"undefined\"!=typeof d\u0026\u0026null!==d?a.replace(e,\"$1\"+b+\"\\x3d\"+d+\"$2$3\"):(c=a.split(\"#\"),\na=c[0].replace(e,\"$1$3\").replace(\/(\u0026|\\?)$\/,\"\"),\"undefined\"!=typeof c[1]\u0026\u0026null!==c[1]\u0026\u0026(a+=\"#\"+c[1]),a):\"undefined\"!=typeof d\u0026\u0026null!==d?(e=-1!==a.indexOf(\"?\")?\"\\x26\":\"?\",c=a.split(\"#\"),a=c[0]+e+b+\"\\x3d\"+d,\"undefined\"!=typeof c[1]\u0026\u0026null!==c[1]\u0026\u0026(a+=\"#\"+c[1]),a):a};\n$(window).load(function(){if(\"function\"==typeof getQueryStringParam\u0026\u0026\"function\"==typeof updateQueryStringParam){var b=getQueryStringParam(\"source\")||getQueryStringParam(\"psource\"),d=getQueryStringParam(\"aid\")||getQueryStringParam(\"paid\"),a=$(\"#exitPopupLink\")[0];b\u0026\u0026(a.href=updateQueryStringParam(\"source\",b,a.href));d\u0026\u0026(a.href=updateQueryStringParam(\"aid\",d,a.href))}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":351
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Default\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":352
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Default\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":353
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\",labels:\"_fp.event.Subscription Signup,_fp.pcat.",["escape",["macro",30],7],"\",orderid:\"",["escape",["macro",31],7],"\",revenue:\"",["escape",["macro",32],7],"\",event:\"refresh\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Subscription+Signup,_fp.pcat.INSERT+PRODUCT+CATEGORY\u0026amp;orderid=INSERT+ORDER+ID\u0026amp;revenue=INSERT+REVENUE\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cdiv id=\"infotron_pixel_1\" style=\"display:none\"\u003E\u003C\/div\u003E\n\n\u003Cscript id=\"infotron_pixel_script_block\" type=\"text\/gtmscript\"\u003Efunction infotron_pixel_1(a){document.getElementById(\"infotron_pixel_1\").innerHTML=a}function getScript(a,c){var b=document.createElement(\"script\");b.src=a+\"\\x26callback\\x3d\"+c;b.id=c+\"_script\";document.getElementsByTagName(\"head\")[0].appendChild(b)}window._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",29],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",26],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}}getScript(\"\/\/infotron.fool.com\/pitcher\/get_pitch?placement\\x3dpixel1\",\"infotron_pixel_1\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":368
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"pebblepost_init_script\" type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",29],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",26],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.id=\"pebblepost_script\";a.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var b=document.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)})()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":375
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.210099621;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d210099621\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":378
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.210030182;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d210030182\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"10 Common Questions About ETFs [Paid Post]\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/409057485;209442234;h\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.209442234;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());\nvar pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d209442234\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"First Job out of College? How to Get an Easy A on Your 401(k) [Paid Post]\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/409189652;209444889;b\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.209444889;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d209444889\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"",["escape",["macro",32],7],"\";AWIN.Tracking.Sale.channel=\"",["escape",["macro",34],7],"\";AWIN.Tracking.Sale.orderRef=\"",["escape",["macro",31],7],"\";AWIN.Tracking.Sale.parts=\"",["escape",["macro",35],7],":",["escape",["macro",32],7],"\";AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.currency=\"USD\";AWIN.Tracking.Sale.voucher=\"\";\u003C\/script\u003E  \n\u003Cform style=\"display: none;\" name=\"aw_basket_form\"\u003E\n\u003Ctextarea wrap=\"physical\" id=\"aw_basket\"\u003E\nAW:P|12195|",["escape",["macro",31],2],"|",["escape",["macro",36],2],"|",["escape",["macro",35],2],"|",["escape",["macro",32],2],"|1|",["escape",["macro",36],2],"|",["escape",["macro",35],2],"|\n\u003C\/textarea\u003E\n\u003C\/form\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/www.awin1.com\/sread.img?tt=ns\u0026amp;tv=2\u0026amp;merchant=12195\u0026amp;amount=",["escape",["macro",32],12],"\u0026amp;ch=",["escape",["macro",34],12],"\u0026amp;parts=",["escape",["macro",35],12],":",["escape",["macro",32],12],"\u0026amp;ref=",["escape",["macro",31],12],"\u0026amp;testmode=0\"\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"It's All Relative - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/410632542;211162178;r\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211162178;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);\nvar pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211162178\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":390
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"Your Investing Life\\u2122: Spending Your Retirement Savings - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/410676425;211211151;l\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211211151;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211211151\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":391
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211167629;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211167629\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":392
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.211165727;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d211165727\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":393
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"How Are ETFs Different from Mutual Funds? - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/412402335;213268321;n\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.213268321;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213268321\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":398
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"read-more-vanguard-pixel\"\u003E\u003C\/div\u003E\n\u003Cdiv id=\"read-more-vanguard-pixel2\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".read-more-section ul li a\")[0].text=\"How to Put a Dynamic Retirement Spending Strategy in Place - Paid Post\";jQuery(\".read-more-section ul li a\")[0].href=\"https:\/\/ad.doubleclick.net\/ddm\/clk\/412401354;213229925;u\";var pixel='\\x3cIMG SRC\\x3d\"https:\/\/ad.doubleclick.net\/ddm\/ad\/N2992.Motley_Fool.com__\/B20415716.213229925;sz\\x3d1x1;ord\\x3d[timestamp];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d?\" BORDER\\x3d0 WIDTH\\x3d1 HEIGHT\\x3d1 ALT\\x3d\"Advertisement\"\\x3e',d=new Date;\npixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#read-more-vanguard-pixel\").append(pixel);var pixel2='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213229925\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e';\njQuery(\"#read-more-vanguard-pixel2\").append(pixel2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":399
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213227708\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":400
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"vanguard-2017-article-pixel\"\u003E\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar pixel='\\x3cimg src\\x3d\"https:\/\/tps30.doubleverify.com\/visit.jpg?ctx\\x3d10583814\\x26cmp\\x3d20415716\\x26sid\\x3d178576\\x26plc\\x3d213229877\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d1045079\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26app\\x3d\\x26sup\\x3d\\x26DVP_EXID\\x3d\\x26DVP_CDID\\x3d\\x26DVP_DMGRV\\x3d\\x26DVP_LAT\\x3d\\x26DVP_LONG\\x3d\\x26dvtagver\\x3d6.1.img\\x26\" alt\\x3d\"\" width\\x3d\"0\" height\\x3d\"0\" \/\\x3e',\nd=new Date;pixel=pixel.replace(\"[timestamp]\",d.getTime());jQuery(\"#vanguard-2017-article-pixel\").append(pixel);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=unescape(encodeURIComponent(\"",["escape",["macro",37],7],"\")).trim().toLowerCase(),quantity=1;\nwindow.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setHashedEmail\",email:hashedEmail},{event:\"trackTransaction\",id:\"",["escape",["macro",31],7],"\",item:[{id:\"",["escape",["macro",30],7],"\",price:",["escape",["macro",32],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":410
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1561515534098628\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":413
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pi_params={};pi_params.company_id=\"1997\";(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/cdn.powerinboxedge.com\/framework\/pi-notify.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nuo4p\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/t.co\/i\/adsct?txn_id=nuo4p\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":420
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"430113\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":425
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",198,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"make_purchase\",id:1008198});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1008198\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q=window.criteo_q||[];var hashedEmail=\"",["escape",["macro",6],7],"\";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:hashedEmail},{event:\"viewItem\",item:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":444
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=\"",["escape",["macro",6],7],"\",price=",["escape",["macro",38],8,16],";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:hashedEmail},{event:\"viewBasket\",item:[{id:1,price:price,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":445
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10064414\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":455
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"sale\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":461
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1150963});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1150963\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":475
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"ApplyNow\",id:1150963});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/trc.taboola.com\/1150963\/log\/3\/unip?en=ApplyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":477
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1008198});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1008198\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":489
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"GenerateLead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":523
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":524
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"e2f4cee7b1d3457da6cceb16018039ee\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/e2f4cee7b1d3457da6cceb16018039ee\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Generic\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":525
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o17j8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o17j8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o17j8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":544
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10064414\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":546
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o184a\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o184a\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o184a\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":547
    },{
      "function":"__html",
      "setup_tags":["list",["tag",160,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({event_category:\"ecap\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":553
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pi_params={};pi_params.company_id=\"2338\";(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/cdn.powerinboxedge.com\/framework\/pi-notify.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":565
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1008198});\u003C\/script\u003E\n\u003Cnoscript\u003E\n   \u003Cimg src=\"\/\/trc.taboola.com\/1008198\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":575
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_2rcna216\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":580
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":581
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":582
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"26011910\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":589
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"Apply_Now\",{event_category:\"Click\",event_label:\"Bing_Ads\",event_value:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":590
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"lead\",{lead_type:\"Apply Now Button\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":592
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar img=document.createElement(\"img\");img.src=\"https:\/\/protect-us.mimecast.com\/s\/MzNtC1wzrXf5O26kFLfoup?domain\\x3dpubads.g.doubleclick.net\"+Math.floor(1E9*Math.random());img.style.position=\"absolute\";img.style.display=\"none\";document.body.appendChild(img);\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/protect-us.mimecast.com\/s\/vfpSC3102Zf0x6XGf2EJVw?domain=pubads.g.doubleclick.net\" width=\"1\" height=\"1\" border=\"0\/\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":593
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/bnm.go2cloud.org\/aff_l?offer_id=970\" width=\"1\" height=\"1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":594
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/data.dianomi.com\/frontend\/pixel2?shortcode=theascent.retargeting\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":596
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/liquidpch.go2cloud.org\/aff_l?offer_id=7440\" width=\"1\" height=\"1\"\u003E\n\n \n\n\u003Cimg src=\"https:\/\/liquidpch.go2cloud.org\/aff_l?offer_id=7473\" width=\"1\" height=\"1\"\u003E\n\n \n\n\u003Cimg src=\"https:\/\/liquidpch.go2cloud.org\/aff_l?offer_id=7472\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":603
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/www.dianomi.com\/pixeltrack.pl?t=the.ascent\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":605
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/data.dianomi.com\/frontend\/pixel2?shortcode=theascent.retargeting.creditcard\" width=\"1\" height=\"1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":606
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/b-code.liadm.com\/a-0264.min.js\" async=\"true\" charset=\"utf-8\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":607
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"email_signup\",email:\"",["escape",["macro",39],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":608
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"product_purchase\",email:\"",["escape",["macro",37],7],"\",conversionId:\"",["escape",["macro",31],7],"\",amount:\"",["escape",["macro",32],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":611
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Ciframe src=\"https:\/\/itstracking.com\/fool\/global-conversion.html\" scrolling=\"no\" frameborder=\"0\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":615
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1376554\u0026amp;conversionId=681387\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":620
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1376554\u0026amp;conversionId=681395\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":621
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"lead\"}}});\u003C\/script\u003E \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":626
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"brlead\"}}});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":627
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"430113\",qstrings:{et:\"custom\",ea:\"brsale\"}}});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":628
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"90pct_Scroll\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":630
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;xsp\\x3d4601000;ord\\x3d1;num\\x3d'+a+'?\" width\\x3d1 height\\x3d1 border\\x3d0\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/pubads.g.doubleclick.net\/activity;xsp=4601000;ord=1;num=1?\" width=\"1\" height=\"1\" border=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":631
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",241,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250761});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":633
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",241,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250761});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":634
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",240,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250760});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":635
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",240,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250760});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":636
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",242,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250762});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":637
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",242,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250762});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":638
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",239,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"lead\",id:1250763});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":639
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",239,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"make_purchase\",id:1250763});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":640
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250763});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250763\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250763\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":641
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250760});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250760\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250760\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":642
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250761});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250761\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250761\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":643
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1250762});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1250762\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1250762\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":644
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"apply_now\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":647
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/6313684.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":659
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/4465084.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":660
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"Instant_Upgrade\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1393
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1069646824\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1069646824\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1396
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0joz\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1418
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"viewContent\",contentType:\"Article\",name:\"btn-clk-yes_All-In\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1430
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"isEcapped\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1433
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"CompleteRegistration\",{value:\"",["escape",["macro",32],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1434
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"364745064760723\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=364745064760723\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1454
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1322302});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1322302\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/trc.taboola.com\/1322302\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1464
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",253,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"video_lead\",id:1322302});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1322302\/log\/3\/unip?en=video_lead\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1465
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",253,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"video_make_purchase\",id:1322302});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"https:\/\/trc.taboola.com\/1322302\/log\/3\/unip?en=video_make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1466
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript nonce=\"iYuYI4Xe\" type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1561515534098628\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"1561515534098628\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1467
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"Upsell\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1468
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:\"10000\",properties:{pixelId:\"10131344\"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||\"complete\"==f||\"loaded\"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10131344\",qstrings:{et:\"custom\",ea:\"sale\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1470
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"https:\/\/js.hs-scripts.com\/5469505.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1471
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",155,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",32],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1476
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,a,c,d,e){if(!a)for(a=a||{},window.permutive=a,a.q=[],a.config=e||{},a.config.projectId=c,a.config.apiKey=d,a.config.environment=a.config.environment||\"production\",b=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Cb.length;c++)d=b[c],a[d]=function(f){return function(){var g=Array.prototype.slice.call(arguments,0);a.q.push({functionName:f,arguments:g})}}(d)}(document,window.permutive,\"93bfda6d-607a-4f67-9c40-61e8b08a03e1\",\"a66d0828-41a5-4477-98f1-d07b9be85233\",\n{});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var b=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",b?JSON.parse(b):[])}});\npermutive.addon(\"web\",{page:{type:",["escape",["macro",0],8,16],",article:{id:",["escape",["macro",41],8,16],",author:",["escape",["macro",42],8,16],",bureau:",["escape",["macro",43],8,16],",headline:",["escape",["macro",44],8,16],",publishedTime:",["escape",["macro",45],8,16],",tags:",["escape",["macro",46],8,16],",tickers:",["escape",["macro",47],8,16],",section:",["escape",["macro",48],8,16],",collection:",["escape",["macro",49],8,16],"}}});\u003C\/script\u003E\n  \u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/93bfda6d-607a-4f67-9c40-61e8b08a03e1-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1477
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=land\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cnoscript\u003E\u003Cimg height=\"0\" width=\"0\" alt=\"\" style=\"display:none\" src=\"https:\/\/c.pmsrv.co\/v2\/acvr?akey=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;noscript=1\u0026amp;ord=0\u0026amp;event=land\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1491
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",262,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=lead\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cnoscript\u003E\u003Cimg height=\"0\" width=\"0\" alt=\"\" style=\"display:none\" src=\"https:\/\/c.pmsrv.co\/v2\/acvr?akey=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;noscript=1\u0026amp;ord=0\u0026amp;event=lead\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1493
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",262,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/c.pmsrv.co\/v2\/conversion\/src?a=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;event=sale\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cnoscript\u003E\u003Cimg height=\"0\" width=\"0\" alt=\"\" style=\"display:none\" src=\"https:\/\/c.pmsrv.co\/v2\/acvr?akey=7ddca2cd-5b7d-410f-8081-0a52c7cb97fd\u0026amp;noscript=1\u0026amp;ord=0\u0026amp;event=sale\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1495
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"article"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"http:\/\/www.fool.com\/video-alert"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"EcapResults"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/ecap\/1255\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"EcapLandingPage"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/fool\/thank-you\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"EmailReady"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/vip\/investor-alert\/biotech\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"order\/e5d1ddf3-a704-4387-8454-6580392b2383"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"fool.com\/vip\/investor-alert\/biotech-vlp\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/order\/fe_offers\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"order\/ec78f908-ebfa-4013-b52a-ea86bb905d59"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"dianomi"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"OrderResults"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"bing"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/synchrony-bank-high-yield-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/american-express-personal-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/marcus-goldman-sachs-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/ally-online-savings-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/discover-savings-review\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/barclays-online-savings-review\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/the-ascent\/banks\/best-savings-accounts\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/landing\/best-savings-accounts\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/savings-accounts\/rates\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"google"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"google"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/ext-content\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"ascent"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/pwa\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"the-blueprint"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"millionacres"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"soapbox"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"premium"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/ecap\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/order\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/video-alert\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-cd-rates\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-5-year-cd-rates\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/best-2-year-cd-rates\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/best-online-stock-brokers-beginners\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/td-ameritrade-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/landing\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/mortgage"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/personal-loans"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/articles\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1409($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_933($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-student-cash-back-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-credit-cards-for-students\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/top-ten\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/beginners-guide\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/fair-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-student-chrome-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-chrome-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-secured-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/bad-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/bad-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/secured-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/what-credit-score-do-i-need-discover-credit-card\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/american-express-blue-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-journey-student-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-vs-discover-credit-cards-which-are-better\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/definitive-guide-securing-higher-credit-limit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-secured-mastercard-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/7-top-credit-cards-amazon-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/chase-freedom-vs-discover-it-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/costco-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/discover-cash-back-calendar\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/blog\/discover-it-cash-back-vs-bank-of-america-cash-rewards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-quicksilver-one-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/capital-one-savorone-cash-rewards-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-amazon-prime-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/chase-amazon-rewards-visa-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/kohls-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/cabelas-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/tj-maxx-credit-card-worth-it\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-cash-back-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-cash-back-credit-card\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-no-annual-fee-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-rewards-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-sign-up-bonus-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/cards-for-gas-and-groceries\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/excellent-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/good-credit\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/these-credit-cards-give-the-most-cash-back\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/best-credit-cards\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/cards-for-excellent-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-review"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-highest\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/best-credit-cards-newlpv1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/0-percent-apr-cards-2\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/0-percent-apr-cards-1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/no-annual-fee-cards-1\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/rewards-cards-1\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"order-results"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/credit-scores-and-bonuses\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/rewards-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/cash-back-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/low-apr-picks\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-cash-back-review-v1\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/the-ascent\/credit-cards\/landing\/business-casual-podcast\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-miles-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/airline-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-travel-cards-no-annual-fee\/"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/bank-of-america-cash-rewards\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1030($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/best-zero-interest-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/discover-it-balance-transfer-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/high-limit-credit-cards\/average-credit\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/low-interest-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/discover-it-balance-transfer-review\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/our-highest-rated-balance-transfer-cards\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/10k-balance-transfer-1\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/10k-balance-transfer-2\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/etrade-review\/"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/best-brokers-iras\/"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/wells-fargo-platinum\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1043($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"https:\/\/www.fool.com\/the-ascent\/offers\/credit-cards\/discover-it-cash-back\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1024($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1133($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"wf-track-"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"bing"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"take-me-to-sa-click"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Make The Motley Fool my homepage"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"twitter"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"twitter"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"5-free-stocks"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/pwa\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/premium\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/order"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/ecap"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.fool.com\/ext"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-gold"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-cta-right"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"Yes!"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-track-continue"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-cta-left"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-silver"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"No"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"button"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"order\/fe_offers\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"tmf-sticky-cta"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"OrderPageView"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.fool.com\/order\/ret"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/bank-accounts\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1407($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/brokerages"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1406($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/personal-loans\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1408($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/the-ascent\/offers\/mortgages\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1415($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/personal-loans\/landing"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/credit-cards\/landing\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/buying-stocks\/landing\/"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/banks\/landing"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/the-ascent\/mortgage\/landing"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"trynow"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"fool.com\/premium\/stock-advisor\/landing\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"tdu-link"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"investing-news"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"key-points-cta"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"fool.com\/investing\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.fool.com\/services\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.fool.com\/about"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"MotleyFoolRuleBreakers"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"MRE"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"order\/instant-upgrade"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"facebook"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"rs2020-lp-op"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/\/www.fool.com\/thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"nextlevelmedia"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/vip\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"boards.fool.com"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"my.fool.com"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.fool.com\/ecap\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/order-results\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Foolwealth_Microsite_Pageview"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"foolwealth.com"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.fool.com\/vip\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/1255"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/1451"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/30"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/1228"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/52"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/50"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"newsletters.fool.com\/1502"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/mutualfunds\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/retirement\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"qa=ndw"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"1255"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"qa=vsl"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/10-common-questions-about-etfs-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/first-job-out-of-college-how-to-get-an-easy-a-on-y"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"your-investing-life-spending-your-retirement-savin"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"its-all-relative-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"how-to-put-a-dynamic-retirement-spending-strategy"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"how-are-etfs-different-from-mutual-funds-paid-post"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"facebook"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"powerinbox"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"taboola"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"OrderPageAddToCart"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"yahoo"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"quora"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"quora"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"taboola"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"reddit"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"reddit"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"investingchannel"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"meta42"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"awin"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/credit-cards\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"liveintent"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"liveintent"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"itstodaymedia"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"linkedin"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"linkedin"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"yahoo"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"brightroll"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"brightroll"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"ext-content"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1331($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"concierge"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/investor-alert\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1392($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/millionacres"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"liveintent"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/ext-content\/all-in-stock-buy-alert-2\/"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"tmf-cta tmf-cta-right tmf-gold"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"facebook"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"stocktrak"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"stocktrak"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/millionacres\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"joywallet"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"joywallet"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)122374_1469($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"performmedia"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"performmedia"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"performmedia"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"outbrain"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"outbrain"
    }],
  "rules":[
    [["if",0,1],["add",19,13]],
    [["if",1,2],["add",20,162]],
    [["if",3],["add",21,9,92]],
    [["if",5],["unless",4],["add",22]],
    [["if",1,6],["add",23]],
    [["if",1,7],["add",24,109]],
    [["if",1,10],["add",25]],
    [["if",1,11],["add",26]],
    [["if",1,12],["add",27]],
    [["if",1,13],["add",28,155]],
    [["if",1,14],["add",29]],
    [["if",15,16],["add",30]],
    [["if",16,17],["add",31]],
    [["if",1,18],["add",32]],
    [["if",1,19],["add",32]],
    [["if",1,20],["add",32]],
    [["if",1,21],["add",32]],
    [["if",1,22],["add",32]],
    [["if",1,23],["add",32]],
    [["if",1,24],["add",33]],
    [["if",1,25],["add",33]],
    [["if",1,26],["add",33]],
    [["if",3,27],["add",34,75]],
    [["if",16,28],["add",35,76]],
    [["if",1,29],["add",36,155]],
    [["if",1],["unless",29,30,31,32,33,34,35,36,37,38],["add",37,80,85,86,87,88,156,160,161,168,171,176,198,239,240,241,242,253,261]],
    [["if",1,39],["add",38,73]],
    [["if",1,40],["add",38]],
    [["if",1,41],["add",38]],
    [["if",1,42],["add",39,61]],
    [["if",1,43],["add",40,64]],
    [["if",1,44],["add",41]],
    [["if",1,45],["add",42]],
    [["if",1,48],["add",43]],
    [["if",1,49],["add",44]],
    [["if",1,50],["add",45]],
    [["if",1,51],["add",46,1]],
    [["if",1,52],["add",47]],
    [["if",1,47,53],["add",47]],
    [["if",47,54,55,56],["add",48]],
    [["if",1,47],["add",49,194,196,0,211,18,216,245,248]],
    [["if",47,55,57,58],["add",50,60,197,202,203,206,212,213,218,243]],
    [["if",1,59],["add",51]],
    [["if",1,60],["add",51]],
    [["if",1,61],["add",51,52,53,54,56,57,59]],
    [["if",1,62],["add",51,54,56,59]],
    [["if",1,63],["add",51,54]],
    [["if",1,64],["add",51,52]],
    [["if",1,65],["add",51,59]],
    [["if",1,66],["add",52]],
    [["if",1,67],["add",53]],
    [["if",1,68],["add",54]],
    [["if",1,69],["add",54]],
    [["if",1,70],["add",54]],
    [["if",1,71],["add",54]],
    [["if",1,72],["add",55]],
    [["if",1,73],["add",55]],
    [["if",1,74],["add",55]],
    [["if",1,75],["add",55,57]],
    [["if",1,76],["add",55]],
    [["if",1,77],["add",55]],
    [["if",1,78],["add",55]],
    [["if",1,79],["add",55]],
    [["if",1,80],["add",55]],
    [["if",1,81],["add",55]],
    [["if",1,82],["add",55]],
    [["if",1,83],["add",55]],
    [["if",1,84],["add",55]],
    [["if",1,85],["add",55]],
    [["if",1,86],["add",55]],
    [["if",1,87],["add",55]],
    [["if",1,88],["add",55]],
    [["if",1,89],["add",55]],
    [["if",1,90],["add",56]],
    [["if",1,91],["add",56]],
    [["if",1,92],["add",56,59]],
    [["if",1,93],["add",56]],
    [["if",1,94],["add",56,59]],
    [["if",1,95],["add",56,57]],
    [["if",1,96],["add",56]],
    [["if",1,97],["add",56]],
    [["if",1,98],["add",56,57,59]],
    [["if",1,99],["add",56]],
    [["if",1,100],["add",56,59]],
    [["if",1,101],["add",56,59]],
    [["if",1,102],["add",56,230]],
    [["if",1,103],["add",56]],
    [["if",1,104],["add",56,59]],
    [["if",1,105],["add",56]],
    [["if",1,106],["add",56,59]],
    [["if",1,107],["add",56,59]],
    [["if",1,108],["add",56]],
    [["if",1],["unless",109,110],["add",56],["block",192,193]],
    [["if",1,111],["add",56]],
    [["if",1,112],["add",56]],
    [["if",1,113],["add",56]],
    [["if",1,114],["add",56]],
    [["if",1,115],["add",56]],
    [["if",1,116],["add",56,59]],
    [["if",1,117],["add",57]],
    [["if",1,118],["add",57]],
    [["if",1,119],["add",57]],
    [["if",55,120,121],["add",58]],
    [["if",1,122],["add",59]],
    [["if",1,123],["add",59]],
    [["if",1,124],["add",59]],
    [["if",1,125],["add",59]],
    [["if",1,126],["add",59]],
    [["if",1,127],["add",59]],
    [["if",1,128],["add",59]],
    [["if",1,129],["add",59]],
    [["if",1,130],["add",62]],
    [["if",1,131],["add",63,65,66]],
    [["if",55,132,133],["add",67,68]],
    [["if",55,134,135],["add",69,70]],
    [["if",47,54,55,136],["add",71,72]],
    [["if",137,138],["add",74]],
    [["if",3,139],["add",77,205]],
    [["if",138,140],["add",78]],
    [["if",138,141],["add",79]],
    [["if",138,144],["add",81]],
    [["if",16,143],["add",82,189],["block",80]],
    [["if",3,142],["add",83,204],["block",80]],
    [["if",1,145],["unless",146,147,148,149,150],["add",84,155]],
    [["if",29,138,151,152,153],["add",89]],
    [["if",29,138,154],["add",90]],
    [["if",29,138,155,156,157],["add",91]],
    [["if",16],["add",93,10,169,177,186,260]],
    [["if",138,158,159],["add",94]],
    [["if",138,159,160],["add",95]],
    [["if",162],["unless",161],["add",96]],
    [["if",55,164,165,166],["add",97]],
    [["if",47,55,167,168],["add",98]],
    [["if",47,55,169,170],["add",99]],
    [["if",47,55,171,172],["add",100]],
    [["if",1,173],["add",101]],
    [["if",1,174],["add",102]],
    [["if",1,175],["add",103]],
    [["if",1,176],["add",104]],
    [["if",1,177],["add",105]],
    [["if",138,178,179],["add",106]],
    [["if",138,180,181],["add",107]],
    [["if",138,182,183],["add",108]],
    [["if",1,184],["add",5]],
    [["if",1,185],["add",6]],
    [["if",1,13,186],["add",7,8]],
    [["if",1],["add",110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,138,139,140,141,142,144,145,146,147,148,149,151,152,153,167,201,208,220,256,16,190]],
    [["if",1,187],["add",136]],
    [["if",188],["add",137]],
    [["if",1,189,190],["add",143]],
    [["if",1,191],["add",150]],
    [["if",1,192],["add",154]],
    [["if",3,193],["add",154]],
    [["if",1,194],["unless",37,195],["add",17]],
    [["if",194,196],["unless",37,195],["add",17]],
    [["if",1,197],["add",155,165]],
    [["if",1,198],["add",155,164]],
    [["if",1,199],["add",155,164]],
    [["if",1,200],["add",155]],
    [["if",1,195],["unless",205,206,207,208,209,210,211],["add",157]],
    [["if",1,210],["add",157]],
    [["if",1,212],["add",158]],
    [["if",1,213],["add",158]],
    [["if",1,37],["add",159,170,165],["block",156]],
    [["if",1,214],["add",163]],
    [["if",1,215],["add",164]],
    [["if",1,216],["add",166]],
    [["if",1,217],["add",172,175]],
    [["if",1,218],["add",173,174]],
    [["if",1,220],["add",178,181]],
    [["if",1,221],["add",179,180]],
    [["if",1,222],["add",182,185]],
    [["if",1,223],["add",183,184]],
    [["if",3,224],["add",187]],
    [["if",3,225],["add",188]],
    [["if",16,226],["add",191,231,233,236,238,255]],
    [["if",162],["add",192]],
    [["if",227],["add",193]],
    [["if",16,228],["add",195,258]],
    [["if",3,229],["add",199]],
    [["if",16,230],["add",200]],
    [["if",3,231],["add",207,232,234,235,237,254]],
    [["if",3,232],["add",209]],
    [["if",16,233],["add",210]],
    [["if",16,234],["add",214]],
    [["if",3,235],["add",215]],
    [["if",3,236],["add",217]],
    [["if",1,47,237],["add",219]],
    [["if",3,238],["add",221]],
    [["if",16,239],["add",222]],
    [["if",16,240],["add",223]],
    [["if",3,241],["add",224]],
    [["if",16,242],["add",225]],
    [["if",3,243],["add",226]],
    [["if",3,244],["add",227]],
    [["if",16,245],["add",228]],
    [["if",246,247,248],["add",229]],
    [["if",1,249,250],["add",244]],
    [["if",251,252],["add",246]],
    [["if",1,253],["add",247,259]],
    [["if",138,254,255,256],["add",249]],
    [["if",1,257],["add",250]],
    [["if",1,258],["add",250]],
    [["if",16,259],["add",251]],
    [["if",3,260],["add",3]],
    [["if",16,261],["add",4]],
    [["if",1,262],["add",252]],
    [["if",16,263],["add",2]],
    [["if",1,264],["add",15,14]],
    [["if",251,265],["add",257]],
    [["if",1,266],["add",262]],
    [["if",3,267],["add",263]],
    [["if",16,268],["add",264]],
    [["if",3,269],["add",11]],
    [["if",16,270],["add",12]],
    [["if",8,9],["block",24]],
    [["if",1,46,47],["block",42,43,44,45,46]],
    [["if",1,8],["block",80,85,86,87,88,155,160,161,171,176,190,198,201,208,220,239,240,241,242,253,262]],
    [["if",1,163],["block",96]],
    [["if",1,201],["block",156]],
    [["if",202],["block",156,170]],
    [["if",1,203],["block",156,170]],
    [["if",1,204],["block",156]],
    [["if",1,219],["block",176]]]
},
"runtime":[[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__hjtc","__twitter_website_tag","__bzi","__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Bg:!0},ja={};try{ja.__proto__=ia;ha=ja.Bg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ri=b.prototype},ma=this||self,qa=function(a){if(a&&a!=ma)return oa(a.document);null===pa&&(pa=oa(ma.document));return pa},ra=/^[\w+/_-]+[=]{0,2}$/,pa=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ra.test(c))return c}return""},ua=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},xa=function(a,b){function c(){}c.prototype=b.prototype;a.ri=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ki=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},ya=function(a){return a};var za=function(a,b){this.a=a;this.i=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.B={};this.m=!1;this.F={}};Ba.prototype.get=function(a){return this.B["dust."+a]};Ba.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Ba.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ca=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Ba;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else Aa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():Aa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.Bc=function(){for(var a=Ca(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Da=function(a,b){if(Aa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return Aa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].sc+g>b[f].max)throw Error("Quota exceeded");b[f].sc+=g}}var b={},c=void 0,d=void 0,e={Rh:function(f){c=f},df:function(){c&&a(c,1)},Th:function(f){d=f},La:function(f){d&&a(d,f)},mi:function(f,g){b[f]=b[f]||{sc:0};b[f].max=g},rh:function(f){return b[f]&&b[f].sc||0},reset:function(){b={}},Zg:a};e.onFnConsume=e.Rh;e.consumeFn=e.df;e.onStorageConsume=e.Th;e.consumeStorage=e.La;e.setMax=e.mi;e.getConsumed=e.rh;e.reset=e.reset;e.consume=e.Zg;return e};var Fa=function(a,b){this.F=a;this.R=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Ba;this.a=this.B=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.i.m)if(a.F.La(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Fa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.La(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Fa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Fa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ha=function(a){var b=new Fa(a.F,a);a.B&&(b.B=a.B);b.R=a.R;b.a=a.a;return b};var Ia=function(){},Ja=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&La(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!Ka(a)||
!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ra=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ta=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Wa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Xa=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ya=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Za=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var $a=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ab=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},cb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},db=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},eb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},gb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Na(b,d))return}return d},
hb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ib=function(a){var b=[];Sa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var jb=function(a,b){Ba.call(this);this.a=a;this.R=b};la(jb,Ba);jb.prototype.toString=function(){return this.a};jb.prototype.Bc=function(){return new k(Ca(this))};jb.prototype.i=function(a,b){a.F.df();return this.R.apply(mb(this,a),Array.prototype.slice.call(arguments,1))};var mb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return La(d)?nb(e,d):d};c.prototype.F=function(d){return ob(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
jb.prototype.Pa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ob=function(a,b){for(var c,d=0;d<b.length&&!(c=nb(a,b[d]),c instanceof za);d++);return c},nb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof jb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var pb=function(){Ba.call(this)};la(pb,Ba);pb.prototype.Bc=function(){return new k(Ca(this))};var qb={control:function(a,b){return new za(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().La(a.length+f.length);return new jb(a,function(){return function(g){var h=Ha(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof za)return l[n];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=ob(h,f);if(t instanceof za)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.La(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.La(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new pb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.La(g);c.set(e,f)}return c},undefined:function(){}};var rb=function(){this.m=Ea();this.a=new Fa(this.m)},sb=function(a,b,c){var d=new jb(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.yc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=nb(this.a,arguments[c]);return b};rb.prototype.B=function(a,b){var c=Ha(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=nb(c,arguments[e]);return d};var tb=function(a){if(a instanceof tb)return a;this.qa=a};tb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ub=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,vb=function(a){if(null==a)return String(a);var b=ub.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},wb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},xb=function(a){if(!a||"object"!=vb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!wb(a,"constructor")&&!wb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||wb(a,b)},E=function(a,b){var c=b||("array"==vb(a)?[]:{}),d;for(d in a)if(wb(a,d)){var e=a[d];"array"==vb(e)?("array"!=vb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):xb(e)?(xb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Ab=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=Ca(h),p=0;p<n.length;p++)l[n[p]]=g(h.get(n[p]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var p=h.Bc(),q=0;q<p.length();q++)n[p.get(q)]=g(h.get(p.get(q)));return n}if(h instanceof pb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof jb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=zb(u[v],b,!!c);var x=b?b.F:Ea(),y=new Fa(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},zb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(La(h)||Ta(h)){var n=new k([]);d.push(h);e.push(n);for(var p in h)h.hasOwnProperty(p)&&n.set(p,g(h[p]));return n}if(xb(h)){var q=new pb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new jb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Ab(this.a(v[x]),b,!!c);return g((0,this.m.R)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Bb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Cb=function(a){if(void 0===a||La(a)||xb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Db={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Bb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Da(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Bb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Da(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Eb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Fb=new za("break"),Gb=new za("continue"),Hb=function(a,b){return this.a(a)+this.a(b)},Ib=function(a,b){return this.a(a)&&this.a(b)},Jb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Eb,b))return zb(a[b].apply(a,Bb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof jb){var e=Bb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Db.supportedMethods,b)){var f=Bb(c);
f.unshift(this.m);return Db[b].apply(a,f)}}if(a instanceof jb||a instanceof pb){if(a.has(b)){var g=a.get(b);if(g instanceof jb){var h=Bb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof jb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Bb(c))}if(a instanceof tb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Kb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Lb=function(a){var b=Ha(this.m),c=ob(b,Array.prototype.slice.apply(arguments));if(c instanceof za)return c},Mb=function(){return Fb},Nb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof za)return d}},Ob=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ga(b,d,e,
!0)}}},Pb=function(){return Gb},Qb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Rb=function(a,b){return this.a(a)/this.a(b)},Sb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof tb,d=b instanceof tb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Tb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ub(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ob(f,d);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}}}function Vb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(f){return f},c);if(b instanceof pb||b instanceof k||b instanceof jb){var d=b.Bc(),e=d.length();return Ub(a,function(){return e},function(f){return d.get(f)},c)}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},$b=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){d.set(a,e);return d},b,c)},ac=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},bc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function Zb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return Ub(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var cc=function(a,b,c,d){function e(p,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,p.get(r))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ha(g);for(e(g,h);nb(h,b);){var l=ob(h,d);if(l instanceof za){if("break"===l.a)break;if("return"===l.a)return l}var n=Ha(g);e(h,n);nb(n,c);h=n}},dc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},ec=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof pb||a instanceof k||a instanceof jb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof tb)return;return c},gc=function(a,b){return this.a(a)>this.a(b)},
hc=function(a,b){return this.a(a)>=this.a(b)},ic=function(a,b){a=this.a(a);b=this.a(b);a instanceof tb&&(a=a.qa);b instanceof tb&&(b=b.qa);return a===b},jc=function(a,b){return!ic.call(this,a,b)},kc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof za)return e},mc=function(a,b){return this.a(a)<this.a(b)},nc=function(a,b){return this.a(a)<=this.a(b)},oc=function(a,b){return this.a(a)%this.a(b)},pc=function(a,b){return this.a(a)*this.a(b)},qc=function(a){return-this.a(a)},
rc=function(a){return!this.a(a)},sc=function(a,b){return!Sb.call(this,a,b)},tc=function(){return null},uc=function(a,b){return this.a(a)||this.a(b)},vc=function(a,b){var c=this.a(a);this.a(b);return c},wc=function(a){return this.a(a)},xc=function(a){return Array.prototype.slice.apply(arguments)},yc=function(a){return new za("return",this.a(a))},zc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof jb||
a instanceof k||a instanceof pb)&&a.set(b,c);return c},Ac=function(a,b){return this.a(a)-this.a(b)},Bc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof za){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof za&&("return"===f.a||"continue"===
f.a)))return f},Dc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Ec=function(a){a=this.a(a);return a instanceof jb?"function":typeof a},Fc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Gc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof za){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Hc=function(a){return~Number(this.a(a))},Ic=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Jc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Lc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Mc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Nc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Oc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Qc=function(){this.a=new rb;Pc(this)};Qc.prototype.yc=function(a){return Rc(this.a.i(a))};
var Tc=function(a,b){return Rc(Sc.a.B(a,b))},Pc=function(a){var b=function(d,e){var f=a.a,g=String(e);qb.hasOwnProperty(d)&&sb(f,g||d,qb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){sb(a.a,String(d),e)};c(0,Hb);c(1,Ib);c(2,Jb);c(3,Kb);c(53,Lb);c(4,Mb);c(5,Nb);c(52,Ob);c(6,Pb);c(9,Nb);c(50,Qb);c(10,Rb);c(12,Sb);c(13,Tb);c(47,Wb);c(54,Xb);c(55,Yb);c(63,cc);c(64,$b);c(65,ac);c(66,bc);c(15,dc);c(16,ec);c(17,ec);c(18,gc);c(19,hc);c(20,ic);c(21,jc);c(22,kc);
c(23,mc);c(24,nc);c(25,oc);c(26,pc);c(27,qc);c(28,rc);c(29,sc);c(45,tc);c(30,uc);c(32,vc);c(33,vc);c(34,wc);c(35,wc);c(46,xc);c(36,yc);c(43,zc);c(37,Ac);c(38,Bc);c(39,Dc);c(40,Ec);c(41,Fc);c(42,Gc);c(58,Hc);c(57,Ic);c(60,Jc);c(61,Lc);c(56,Mc);c(62,Nc);c(59,Oc)},Vc=function(){var a=Sc,b=Uc();sb(a.a,"require",b)},Wc=function(a,b){a.a.a.R=b};
function Rc(a){if(a instanceof za||a instanceof jb||a instanceof k||a instanceof pb||a instanceof tb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Xc=[],Yc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Zc=function(a){return Yc[a]},$c=/[\x00\x22\x26\x27\x3c\x3e]/g;
Xc[2]=function(a){return String(a).replace($c,Zc)};Xc[3]=function(a){return String(a).replace($c,Zc)};var dd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ed={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},fd=function(a){return ed[a]};Xc[7]=function(a){return String(a).replace(dd,fd)};
Xc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(dd,fd)+"'"}};var nd=/['()]/g,od=function(a){return"%"+a.charCodeAt(0).toString(16)};Xc[12]=function(a){var b=
encodeURIComponent(String(a));nd.lastIndex=0;return nd.test(b)?b.replace(nd,od):b};var pd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,qd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},rd=function(a){return qd[a]};var sd=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;Xc[14]=function(a){var b=String(a);return sd.test(b)?b.replace(pd,rd):"#zSoyz"};Xc[16]=function(a){return a};var td;
var ud=[],vd=[],wd=[],xd=[],yd=[],zd={},Ad,Bd,Cd,Dd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ed=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=zd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.af&&b.af(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):td(c,e,b)},Gd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Fd(a[e],b,c));return d},Hd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=zd[b];return c?c.priorityOverride||0:0},Fd=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ud[f];if(!g||b.yd(g))return;c[f]=!0;try{var h=Gd(g,b,c);h.vtp_gtmEventId=b.id;d=Ed(h,b);Cd&&(d=Cd.ah(d,h))}catch(y){b.rf&&b.rf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fd(a[l],b,c)]=Fd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Fd(a[p],b,c);Bd&&(n=n||q===Bd.ic);d.push(q)}return Bd&&n?Bd.eh(d):d.join("");case "escape":d=Fd(a[1],b,c);if(Bd&&La(a[1])&&"macro"===a[1][0]&&Bd.Dh(a))return Bd.Yh(d);d=String(d);for(var t=2;t<a.length;t++)Xc[a[t]]&&(d=Xc[a[t]](d));return d;case "tag":var r=a[1];if(!xd[r])throw Error("Unable to resolve tag reference "+r+".");return d=
{hf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Id(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Id=function(a,b,c){try{return Ad(Gd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jd=function(){var a=function(b){return{toString:function(){return b}}};return{Gf:a("consent"),Xd:a("convert_case_to"),Yd:a("convert_false_to"),Zd:a("convert_null_to"),$d:a("convert_true_to"),ae:a("convert_undefined_to"),Ci:a("debug_mode_metadata"),Ka:a("function"),rg:a("instance_name"),sg:a("live_only"),ug:a("malware_disabled"),vg:a("metadata"),Fi:a("original_vendor_template_id"),yg:a("once_per_event"),Re:a("once_per_load"),Ve:a("setup_tags"),We:a("tag_id"),Xe:a("teardown_tags")}}();var Kd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Kd,Error);function Ld(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ld(a[c],b[c])}};var Md=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Md,Error);var Nd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Pd=function(){return function(a,b){a instanceof Md||(a=new Md(a,Od));b&&a.a.push(b);throw a;}};function Od(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Qd=null,Td=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];Qd=Rd(a);for(var e=0;e<vd.length;e++){var f=vd[e],g=Sd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],p=0;p<xd.length;p++)c[p]&&!d[p]&&(n[p]=!0);return n},Sd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Qd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Qd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Rd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Id(wd[c],a));return b[c]}};var Ud={ah:function(a,b){b[Jd.Xd]&&"string"===typeof a&&(a=1==b[Jd.Xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jd.Zd)&&null===a&&(a=b[Jd.Zd]);b.hasOwnProperty(Jd.ae)&&void 0===a&&(a=b[Jd.ae]);b.hasOwnProperty(Jd.$d)&&!0===a&&(a=b[Jd.$d]);b.hasOwnProperty(Jd.Yd)&&!1===a&&(a=b[Jd.Yd]);return a}};var Vd=function(){this.a={}};function Wd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Kd(c,d,g);}}function Xd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Wd(e,b,d,g);Wd(f,b,d,g)}}}};var ae=function(a){var b=Yd.C,c=this;this.i=new Vd;this.a={};var d={},e=Xd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Sa(a,function(f,g){var h={};Sa(g,function(l,n){var p=Zd(l,n);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,n){var p=h[l];if(!p)throw $d(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ce=function(a){return be.a[a]||
function(){}};function Zd(a,b){var c=Dd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=$d;try{return Ed(c)}catch(d){return{assert:function(e){throw new Kd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function $d(a,b,c){return new Kd(a,b,c)};var de=!1;var ee={};ee.xi=Wa('');ee.kh=Wa('');var fe=de,ge=ee.kh,he=ee.xi;
var we=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},xe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;we(b,"/*")&&(b=b.slice(0,-2));we(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ye=/^[a-z0-9-]+$/i,ze=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Be=function(a,b){var c;if(!(c=!Ae(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ye.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!ze.exec(n))throw Error("Invalid Wildcard");var p=n.slice(8),q=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=xe(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Ae=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Ce,De=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var n in b)b.hasOwnProperty(n)&&(l.Og&&(l["fix_"+n]=!0),l.kf=l.kf||l["fix_"+n]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,Y:r.Y,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,x,y,w,z){var A=y||w||z||f.test(x)&&x||null,C=document.createElement("div");C.innerHTML=A;u[x]=C.textContent||C.innerText||A});return{tagName:r[1],Y:u,Nc:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in p)if(p[r].test(h)){var u=q[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.kf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.qf=function(){return this[this.length-1]};v.Ad=function(C){var D=this.qf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.$g=
function(C){for(var D=0,F;F=this[D];D++)if(F.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Nc=r.test(C.tagName)||C.Nc);return C},y=t,w=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Ad("TABLE")?(h="<TBODY>"+h,A()):l.Pi&&u.test(D)&&v.$g(D)?v.Ad(D)?w():(h="</"+C.tagName+">"+h,A()):C.Nc||v.push(C)},endTag:function(C){v.qf()?l.mh&&!v.Ad(C.tagName)?w():v.pop():l.mh&&(y(),A())}},A=function(){var C=h,D=x(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return x(y())}}();return{append:function(r){h+=r},ci:t,Ti:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},Ui:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Wi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Vi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Ce=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,r){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(r,q[u],u)}function d(q,t,r){for(var u in q)q.hasOwnProperty(u)&&t.call(r,u,q[u])}function e(q,t){d(t,
function(r,u){q[r]=u});return q}function f(q,t){q=q||{};d(t,function(r,u){b(q[r])||(q[r]=u)});return q}function g(q){try{return n.call(q)}catch(r){var t=[];c(q,function(u){t.push(u)});return t}}var h={Fg:a,Gg:a,Hg:a,Ig:a,Pg:a,Qg:function(q){return q},done:a,error:function(q){throw q;},fi:!1},l=this;if(!l.postscribe){var n=Array.prototype.slice,p=function(){function q(r,u,v){var x="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(x,v):
r.removeAttribute(x)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,Ub:v.defaultView||v.parentWindow,cb:v,Ec:Ce("",{Og:!0}),nd:[r],Kd:"",Ld:v.createElement(r.nodeName),Rb:[],Sa:[]});q(this.Ld,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Sa,arguments);for(var r;!this.vc&&this.Sa.length;)r=this.Sa.shift(),"function"===typeof r?this.Vg(r):this.Ud(r)};t.prototype.Vg=function(r){var u={type:"function",value:r.name||r.toString()};this.Fd(u);r.call(this.Ub,this.cb);this.sf(u)};
t.prototype.Ud=function(r){this.Ec.append(r);for(var u,v=[],x,y;(u=this.Ec.ci())&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Ai(v);x&&this.wh(u);y&&this.xh(u)};t.prototype.Ai=function(r){var u=this.Sg(r);u.Ze&&(u.wd=this.Kd+u.Ze,this.Kd+=u.ai,this.Ld.innerHTML=u.wd,this.yi())};t.prototype.Sg=function(r){var u=this.nd.length,v=[],x=[],y=[];c(r,function(w){v.push(w.text);if(w.Y){if(!/^noscript$/i.test(w.tagName)){var z=
u++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==w.Y.id&&"ps-style"!==w.Y.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+z+(w.Nc?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Xi:r,raw:v.join(""),Ze:x.join(""),ai:y.join("")}};t.prototype.yi=function(){for(var r,u=[this.Ld];b(r=u.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.nd[q(r,"id")]=r,q(r,"id",null));var x=r.parentNode&&q(r.parentNode,"proxyof");
x&&this.nd[x].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.wh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.src=r.Y.src||r.Y.Hi;r.src&&this.Rb.length?this.vc=r:this.Fd(r);var v=this;this.zi(r,function(){v.sf(r)})};t.prototype.xh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.type=r.Y.type||r.Y.TYPE||"text/css";this.Bi(r);u&&this.write()};t.prototype.Bi=function(r){var u=this.Ug(r);this.Ah(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.cb.createTextNode(r.content)))};t.prototype.Ug=function(r){var u=this.cb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.Y,function(v,x){u.setAttribute(v,x)});return u};t.prototype.Ah=function(r){this.Ud('<span id="ps-style"/>');var u=this.cb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.Fd=function(r){r.Uh=this.Sa;this.Sa=[];this.Rb.unshift(r)};t.prototype.sf=function(r){r!==this.Rb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Rb.shift(),this.write.apply(this,r.Uh),!this.Rb.length&&this.vc&&(this.Fd(this.vc),this.vc=null))};t.prototype.zi=function(r,u){var v=this.Tg(r),x=this.oi(v),y=this.options.Fg;r.src&&(v.src=r.src,this.ji(v,x?y:function(){u();y()}));try{this.zh(v),r.src&&!x||u()}catch(w){this.options.error(w),u()}};t.prototype.Tg=function(r){var u=this.cb.createElement(r.tagName);d(r.Y,function(v,x){u.setAttribute(v,x)});r.content&&(u.text=r.content);return u};t.prototype.zh=function(r){this.Ud('<span id="ps-script"/>');
var u=this.cb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.ji=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var x=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();x(y);u()}})};t.prototype.oi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.fi&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var x=u.shift(),y;x&&(y=x[x.length-1],y.Gg(),x.stream=t.apply(null,x),y.Hg())}function t(x,y,w){function z(F){F=w.Qg(F);v.write(F);w.Ig(F)}v=new p(x,w);v.id=r++;v.name=w.name||v.id;var A=x.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.Ub.onerror||a;v.Ub.onerror=function(F,M,Q){w.error({msg:F+
" - "+M+":"+Q});D.apply(v.Ub,arguments)};v.write(y,function(){e(A,C);v.Ub.onerror=D;w.done();v=null;q()});return v}var r=0,u=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=f(w,h);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Ri?x[0]:x;var z=[x,y,w];x.Xh={cancel:function(){z.stream?z.stream.abort():z[1]=a}};w.Pg(z);u.push(z);v||q();return x.Xh},{streams:{},Si:u,Ji:p})}();De=l.postscribe}})();var Ee=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Fe={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ee.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof jb?p="Fn":l instanceof k?p="List":l instanceof pb?p="DustMap":
l instanceof tb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Fe[h]||h)+".");}}};function Ge(a){return""+a}
function He(a,b){var c=[];return c};var Ie=function(a,b){var c=new jb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Je=function(a,b){var c=new pb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Ie(a+"_"+d,e)):(Ka(e)||m(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ke=function(a,b){G(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertApiSubject",c)};var Le=function(a,b){G(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertThatSubject",c)};function Me(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(Ab(arguments[d],c));return zb(a.apply(null,b))}}var Oe=function(){for(var a=Math,b=Ne,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Me(a[e].bind(a)))}return c};var Pe=function(a){var b;return b};var Qe=function(a){var b;return b};var Re=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Se=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Te=function(a){G(this.i.a,["message:?string"],arguments);};var Ue=function(a,b){G(this.i.a,["min:!number","max:!number"],arguments);return Pa(a,b)};var Ve=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Ng.apply(null,Array.prototype.slice.call(arguments,1))};var We=function(){Ve(this,"read_container_data");var a=new pb;a.set("containerId",'GTM-HQ4K');a.set("version",'1369');a.set("environmentName",'');a.set("debugMode",fe);a.set("previewMode",he);a.set("environmentMode",ge);a.m=!0;return a};var Xe=function(){return(new Date).getTime()};var Ye=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof jb)return"function";if(a instanceof tb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Ze=function(a){function b(c){return function(d){try{return c(d)}catch(e){(fe||he)&&a.call(this,e.message)}}}return{parse:b(function(c){return zb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Ab(c))})}};var $e=function(a){return Va(Ab(a,this.m))};var af=function(a){return Number(Ab(a,this.m))};var bf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var cf=function(a,b,c){var d=null,e=!1;G(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new pb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof pb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var Ne="floor ceil round max min abs pow sqrt".split(" ");var df=function(){var a={};return{sh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ni:function(b,c){a[b]=c},reset:function(){a={}}}},ef=function(a,b){G(this.i.a,["apiName:!string","mock:?*"],arguments);};var ff=function(){this.a={};this.i={}};ff.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
ff.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ja(b)?Ie(a,b):Je(a,b)};
var gf=function(a,b,c){if(a.i.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.a.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.i[b]=Ja(c)?Ie(b,c):Je(b,c)};function hf(){var a={};return a};var H={Ab:"_ee",ld:"_syn",Ii:"_uei",Gi:"_pci",Tc:"event_callback",bc:"event_timeout",fa:"gtag.config"};H.Ga="gtag.get";H.wa="purchase";H.nb="refund";H.Wa="begin_checkout";H.lb="add_to_cart";H.mb="remove_from_cart";H.Pf="view_cart";H.fe="add_to_wishlist";H.Fa="view_item";H.ee="view_promotion";H.de="select_promotion";H.ce="select_item";H.Yb="view_item_list";H.be="add_payment_info";H.Of="add_shipping_info";
H.za="value_key",H.ya="value_callback";H.ia="allow_ad_personalization_signals";H.bd="restricted_data_processing";H.ob="allow_google_signals";H.ja="cookie_expires";H.ac="cookie_update";H.xb="session_duration";H.na="user_properties";H.Ja="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.M="analytics_storage";H.Hf="region";H.If="wait_for_update";H.Ie=[H.wa,H.nb,H.Wa,H.lb,H.mb,H.Pf,H.fe,H.Fa,H.ee,H.de,H.Yb,H.ce,H.be,H.Of];H.He=[H.ia,H.ob,H.ac];H.Je=[H.ja,H.bc,H.xb];var jf={},kf=function(a,b){jf[a]=jf[a]||[];jf[a][b]=!0},lf=function(a){for(var b=[],c=jf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){kf("GTM",a)};function mf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,mf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}xa(mf,Error);mf.prototype.name="CustomError";var nf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");mf.call(this,d+c[e])};xa(nf,mf);nf.prototype.name="AssertionError";var of=function(a,b){throw new nf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var pf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},qf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var rf,sf=function(){if(void 0===rf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ya,createScript:ya,createScriptURL:ya})}catch(c){ma.console&&ma.console.error(c.message)}rf=a}else rf=a}return rf};var uf=function(a,b){this.a=b===tf?a:""};uf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var tf={};var vf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var wf;a:{var xf=ma.navigator;if(xf){var yf=xf.userAgent;if(yf){wf=yf;break a}}wf=""}var zf=function(a){return-1!=wf.indexOf(a)};var Bf=function(a,b,c){this.a=c===Af?a:""};Bf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Cf=function(a){if(a instanceof Bf&&a.constructor===Bf)return a.a;of("expected object of type SafeHtml, got '"+a+"' of type "+ua(a));return"type_error:SafeHtml"},Af={},Ef=new Bf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Af);var Ff={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Gf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Cf(Ef);return!c.parentElement}),Hf=function(a,b){if(a.tagName&&Ff[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Gf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Cf(b)};var If=function(a){var b=sf(),c=b?b.createHTML(a):a;return new Bf(c,null,Af)};var B=window,L=document,Jf=navigator,Kf=L.currentScript&&L.currentScript.src,Lf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Mf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Nf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=sf(),g=f?f.createScriptURL(a):a;e=new uf(g,tf);var h;a:{try{var l=d&&d.ownerDocument,n=l&&(l.defaultView||l.parentWindow);
n=n||ma;if(n.Element&&n.Location){h=n;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var q=typeof d;if("object"==q&&null!=d||"function"==q)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;of("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof uf&&e.constructor===uf?t=e.a:(of("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ua(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=qa(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);Mf(d,b);c&&(d.onerror=c);var u=qa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Of=function(){if(Kf){var a=Kf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Pf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Mf(c,b);void 0!==a&&(c.src=a);return c},Qf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Rf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Sf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},Tf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Uf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Vf=function(a){var b=L.createElement("div");Hf(b,If("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Xf=function(a){Jf.sendBeacon&&Jf.sendBeacon(a)||Qf(a)},Yf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Zf={},$f=function(a){return void 0==Zf[a]?!1:Zf[a]};var ag=[];function bg(){var a=Lf("google_tag_data",{});a.ics||(a.ics={entries:{},set:cg,update:dg,addListener:eg,notifyListeners:fg,active:!1});return a.ics}
function cg(a,b,c,d,e,f){var g=bg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,p=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,gg(a),fg(),kf("TAGGING",2))},f)}}}
function dg(a,b){var c=bg();c.active=!0;if(void 0!=b){var d=hg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=hg(a);f.quiet?(f.quiet=!1,gg(a)):g!==d&&gg(a)}}function eg(a,b){ag.push({cf:a,nh:b})}function gg(a){for(var b=0;b<ag.length;++b){var c=ag[b];La(c.cf)&&-1!==c.cf.indexOf(a)&&(c.vf=!0)}}function fg(a){for(var b=0;b<ag.length;++b){var c=ag[b];if(c.vf){c.vf=!1;try{c.nh({bf:a})}catch(d){}}}}
var hg=function(a){var b=bg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ig=function(a){return!(bg().entries[a]||{}).quiet},jg=function(){return $f("gtag_cs_api")?bg().active:!1},kg=function(a,b){bg().addListener(a,b)},lg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!ig(b[e]))return!0;return!1}if(c()){var d=!1;kg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},mg=function(a,b){if(!1===hg(b)){var c=!1;kg([b],function(d){!c&&hg(b)&&(a(d),c=!0)})}};var ng=[H.s,H.M],og=function(a){var b=a[H.Hf];b&&I(40);var c=a[H.If];c&&I(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<ng.length;f++){var g=ng[f],h=a[ng[f]],l=d[e];bg().set(g,h,l,"","",c)}},pg=function(a,b){for(var c=0;c<ng.length;c++){var d=ng[c],e=a[ng[c]];bg().update(d,e)}bg().notifyListeners(b)},qg=function(a){var b=hg(a);return void 0!=b?b:!0},rg=function(){for(var a=[],b=0;b<ng.length;b++){var c=hg(ng[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},sg=function(a,b){lg(a,b)};var ug=function(a){return tg?L.querySelectorAll(a):null},vg=function(a,b){if(!tg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},wg=!1;if(L.querySelectorAll)try{var xg=L.querySelectorAll(":root");xg&&1==xg.length&&xg[0]==L.documentElement&&(wg=!0)}catch(a){}var tg=wg;var Yd={},O=null,Lg=Math.random();Yd.C="GTM-HQ4K";Yd.nc="b41";Yd.Ei="";var Mg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ng={__paused:!0,__tg:!0},Og;for(Og in Mg)Mg.hasOwnProperty(Og)&&(Ng[Og]=!0);var Pg="www.googletagmanager.com/gtm.js";
var Qg=Pg,Rg=Wa(""),Sg=null,Tg=null,Ug="//www.googletagmanager.com/a?id="+Yd.C+"&cv=1369",Vg={},Wg={},Xg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Yg={},Zg=new Qa,$g={},ah={},dh={name:"dataLayer",set:function(a,b){E(hb(a,b),$g);bh()},get:function(a){return ch(a,2)},reset:function(){Zg=new Qa;$g={};bh()}},ch=function(a,b){return 2!=b?Zg.get(a):eh(a)},eh=function(a,b){var c=a.split(".");b=b||[];for(var d=$g,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},fh=function(a,b){ah.hasOwnProperty(a)||(Zg.set(a,b),E(hb(a,b),$g),bh())},bh=function(a){Sa(ah,function(b,c){Zg.set(b,c);E(hb(b,
void 0),$g);E(hb(b,c),$g);a&&delete ah[b]})},gh=function(a,b,c){Yg[a]=Yg[a]||{};var d=1!==c?eh(b):Zg.get(b);"array"===vb(d)||"object"===vb(d)?Yg[a][b]=E(d):Yg[a][b]=d},hh=function(a,b){if(Yg[a])return Yg[a][b]},ih=function(a,b){Yg[a]&&delete Yg[a][b]};var lh={},mh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===lh[a]&&(lh[a]=Math.floor(Math.random()*b));return lh[a]};var nh=/:[0-9]+$/,oh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},rh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ph(a.protocol)||ph(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(nh,"").toLowerCase());return qh(a,b,c,d,e)},qh=function(a,b,c,d,e){var f,g=ph(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=sh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(nh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||kf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=oh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ph=function(a){return a?a.replace(":",
"").toLowerCase():""},sh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},th=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||kf("TAGGING",1),c="/"+c);var d=b.hostname.replace(nh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},uh=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=th(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function vh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var xh=function(a,b,c,d){return wh(d)?vh(a,String(b||document.cookie),c):[]},Ah=function(a,b,c,d,e){if(wh(e)){var f=yh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=zh(f,function(g){return g.wc},b);if(1===f.length)return f[0].id;f=zh(f,function(g){return g.Ob},c);return f[0]?f[0].id:void 0}}};function Bh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=xh(b,f,!1,d).indexOf(c)}
var Fh=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!wh(c.Na))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ch(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Oh);g=e(g,"samesite",
c.hi);c.ki&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var p=Dh(),q=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}t=!0;if(!Eh(u,c.path)&&Bh(v,a,b,c.Na))return 0}if(q&&!t)throw q;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Eh(n,c.path)?1:Bh(g,a,b,c.Na)?0:1},Gh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Fh(a,b,c)};
function zh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function yh(a,b,c){for(var d=[],e=xh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),wc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var Ch=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Hh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ih=/(^|\.)doubleclick\.net$/i,Eh=function(a,b){return Ih.test(document.location.hostname)||"/"===b&&Hh.test(a)},Dh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ih.test(e)||Hh.test(e)||a.push("none");
return a},wh=function(a){if(!$f("gtag_cs_api")||!a||!jg())return!0;if(!ig(a))return!1;var b=hg(a);return null==b?!0:!!b};var Jh=function(){for(var a=Jf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Za()/1E3)].join(".")},Mh=function(a,b,c,d,e){var f=Kh(b);return Ah(a,f,Lh(c),d,e)},Nh=function(a,b,c,d){var e=""+Kh(c),f=Lh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Kh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Lh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Oh(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Za())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ph=["1"],Qh={},Uh=function(a){var b=Rh(a.prefix);Qh[b]||Sh(b,a.path,a.domain)||(Th(b,Jh(),a),Sh(b,a.path,a.domain))};function Th(a,b,c){var d=Nh(b,"1",c.domain,c.path),e=Oh(c);e.Na="ad_storage";Gh(a,d,e)}function Sh(a,b,c){var d=Mh(a,b,c,Ph,"ad_storage");d&&(Qh[a]=d);return d}function Rh(a){return(a||"_gcl")+"_au"};function Vh(){for(var a=Wh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wh,Yh;function Zh(a){Wh=Wh||Xh();Yh=Yh||Vh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(Wh[l],Wh[n],Wh[p],Wh[q])}return b.join("")}
function $h(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=Yh[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}Wh=Wh||Xh();Yh=Yh||Vh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var bi;var fi=function(){var a=ci,b=di,c=ei(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Rf(L,"mousedown",d);Rf(L,"keyup",d);Rf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},gi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ei().decorators.push(f)},hi=function(a,b,c){for(var d=ei().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,p=!!g.sameHost;if(l&&(p||n!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&cb(e,g.callback())}}return e},ei=function(){var a=Lf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ii=/(.*?)\*(.*?)\*(.*)/,ji=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ki=/^(?:www\.|m\.|amp\.)+/,li=/([^?#]+)(\?[^#]*)?(#.*)?/;function mi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var oi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zh(String(d))))}var e=b.join("*");return["1",ni(e),e].join("*")},ni=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=bi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}bi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^bi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},qi=function(){return function(a){var b=th(B.location.href),c=b.search.replace("?",""),d=oh(c,"_gl",!1,!0)||"";a.query=pi(d)||{};var e=rh(b,"fragment").match(mi("_gl"));a.fragment=pi(e&&e[3]||"")||{}}},ri=function(a){var b=qi(),c=ei();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(cb(d,e.query),a&&cb(d,e.fragment));return d},
pi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ii.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],p=0;p<b;++p)if(n===ni(h,p)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=$h(t[r+1]);return q}}}}catch(u){}};
function si(a,b,c,d){function e(p){var q=p,t=mi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=li.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function ti(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=hi(b,1,c),e=hi(b,2,c),f=hi(b,3,c);if(db(d)){var g=oi(d);c?ui("_gl",g,a):vi("_gl",g,a,!1)}if(!c&&db(e)){var h=oi(e);vi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){vi(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ui(n,p,q);break a}}"string"==typeof q&&si(n,p,q,void 0)}}
function vi(a,b,c,d){if(c.href){var e=si(a,b,c.href,void 0===d?!1:d);vf.test(e)&&(c.href=e)}}
function ui(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=si(a,b,c.action);vf.test(n)&&(c.action=n)}}}
var ci=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ti(e,e.hostname)}}catch(g){}},di=function(a){try{if(a.action){var b=rh(th(a.action),"host");ti(a,b)}}catch(c){}},wi=function(a,b,c,d){fi();gi(a,b,"fragment"===c?2:1,!!d,!1)},xi=function(a,b){fi();gi(a,[qh(B.location,"host",!0)],b,!0,!0)},yi=function(){var a=L.location.hostname,b=ji.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(ki,""),l=e.replace(ki,""),n;if(!(n=h===l)){var p="."+l;n=h.substring(h.length-p.length,h.length)===p}return n},zi=function(a,b){return!1===a?!1:a||b||yi()};var Ai=/^\w+$/,Bi=/^[\w-]+$/,Ci=/^~?[\w-]+$/,Di={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Ei=function(){if(!$f("gtag_cs_api")||!jg())return!0;var a=hg("ad_storage");return null==a?!0:!!a},Fi=function(a,b){ig("ad_storage")?Ei()?a():mg(a,"ad_storage"):b?kf("TAGGING",3):lg(function(){Fi(a,!0)},["ad_storage"])},Ii=function(a){var b=[];if(!L.cookie)return b;var c=xh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Gi(c[d]);e&&-1===Na(b,e)&&b.push(e)}return Hi(b)};
function Ji(a){return a&&"string"==typeof a&&a.match(Ai)?a:"_gcl"}
var Li=function(){var a=th(B.location.href),b=rh(a,"query",!1,void 0,"gclid"),c=rh(a,"query",!1,void 0,"gclsrc"),d=rh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||oh(e,"gclid",!1,void 0);c=c||oh(e,"gclsrc",!1,void 0)}return Ki(b,c,d)},Ki=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Bi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":$f("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ni=function(a){var b=Li();Fi(function(){Mi(b,a)})};
function Mi(a,b,c){function d(l,n){var p=Oi(l,e);p&&Gh(p,n,f)}b=b||{};var e=Ji(b.prefix);c=c||Za();var f=Oh(b,c,!0);f.Na="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Zi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Qi=function(a,b){var c=ri(!0);Fi(function(){for(var d=Ji(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Di[f]){var g=Oi(f,d),h=c[g];if(h){var l=Math.min(Pi(h),Za()),n;b:{for(var p=l,q=xh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Pi(q[t])>p){n=!0;break b}n=!1}if(!n){var r=Oh(b,l,!0);r.Na="ad_storage";Gh(g,h,r)}}}}Mi(Ki(c.gclid,c.gclsrc),b)})},Oi=function(a,b){var c=Di[a];if(void 0!==c)return b+c},Pi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Gi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ri=function(a,b,c,d,e){if(La(b)){var f=Ji(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Oi(a[l],f);if(n){var p=xh(n,L.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};Fi(function(){wi(g,b,c,d)})}},Hi=function(a){return a.filter(function(b){return Ci.test(b)})},Si=function(a,b){for(var c=Ji(b.prefix),d={},e=0;e<a.length;e++)Di[a[e]]&&(d[a[e]]=Di[a[e]]);Fi(function(){Sa(d,function(f,g){var h=xh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=Pi(l),
p={};p[f]=[Gi(l)];Mi(p,b,n)}})})};function Ti(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ui=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(jg()){var c=Li();if(Ti(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);xi(function(){return d},3);xi(function(){var e={};return e._up="1",e},1)}}},Vi=function(){var a;if(Ei()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Rd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Rd]||(g[b[h].Rd]=[]),g[b[h].Rd].push({timestamp:l[1],ph:l[2]}))}a=g}else a={};return a};var Wi=/^\d+\.fls\.doubleclick\.net$/;function Xi(a,b){ig(H.s)?qg(H.s)?a():mg(a,H.s):b?I(42):sg(function(){Xi(a,!0)},[H.s])}function Yi(a){var b=th(B.location.href),c=rh(b,"host",!1);if(c&&c.match(Wi)){var d=rh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Zi(a,b,c){if("aw"==a||"dc"==a){var d=Yi("gcl"+a);if(d)return d.split(".")}var e=Ji(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!qg(H.s)&&c,g;g=Li()[a]||[];if(0<g.length)return f?["0"]:g}var h=Oi(a,e);return h?Ii(h):[]}
var $i=function(a){var b=Yi("gac");if(b)return!qg(H.s)&&a?"0":decodeURIComponent(b);var c=Vi(),d=[];Sa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].ph);g=Hi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},aj=function(a,b){var c=Li().dc||[];Xi(function(){Uh(b);var d=Qh[Rh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Xf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=Rh(b.prefix),p=Qh[n];p&&Th(n,p,b)}})};var bj=/[A-Z]+/,cj=/\s/,dj=function(a){if(m(a)&&(a=Ya(a),!cj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(bj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},fj=function(a){for(var b={},c=0;c<a.length;++c){var d=dj(a[c]);d&&(b[d.id]=d)}ej(b);var e=[];Sa(b,function(f,g){e.push(g)});return e};
function ej(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var gj=function(){var a=!1;return a};var ij=function(a,b,c,d){return(2===hj()||d||"http:"!=B.location.protocol?a:b)+c},hj=function(){var a=Of(),b;if(1===a)a:{var c=Qg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var wj=function(a){return qg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=uh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},xj=function(){var a;if(!(a=Rg)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Jf&&Jf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return mh(1,100)<d?mh(2,2):-1},yj=function(a){var b;return b};var zj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ej=function(a){var b;ch("gtm.allowlist")&&I(52);b=ch("gtm.allowlist");b||(b=ch("gtm.whitelist"));b&&I(9);
var c=b&&eb(Xa(b),Aj),d;ch("gtm.blocklist")&&I(51);d=ch("gtm.blocklist");d||(d=ch("gtm.blacklist"));d||(d=ch("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Dj()&&(d=Xa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na(Xa(d),"google")&&I(2);var e=
d&&eb(Xa(d),Bj),f={};return function(g){var h=g&&g[Jd.Ka];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Wg[h]||[],n=a(h,l);if(b){var p;if(p=n)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){I(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var t=!1;if(d){var r=0<=Na(e,h);if(r)t=r;else{var u=Ra(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Ra(e,Cj));return f[h]=v}},
Dj=function(){return zj.test(B.location&&B.location.hostname)};var Fj={active:!0,isAllowed:function(){return!0}},Gj=function(a){var b=O.zones;return b?b.checkState(Yd.C,a):Fj},Hj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Ij=function(){},Jj=function(){};var Kj=!1,Lj=0,Mj=[];function Nj(a){if(!Kj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Kj=!0;for(var e=0;e<Mj.length;e++)N(Mj[e])}Mj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Oj(){if(!Kj&&140>Lj){Lj++;try{L.documentElement.doScroll("left"),Nj()}catch(a){B.setTimeout(Oj,50)}}}var Pj=function(a){Kj?a():Mj.push(a)};var Qj={},Rj={},Sj=function(a,b,c,d){if(!Rj[a]||Ng[b]||"__zone"===b)return-1;var e={};xb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Rj[a].tags.push(e)-1},Tj=function(a,b,c,d){if(Rj[a]){var e=Rj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Uj(a){for(var b=Qj[a]||[],c=0;c<b.length;c++)b[c]();Qj[a]={push:function(d){d(Yd.C,Rj[a])}}}
var Xj=function(a,b,c){Rj[a]={tags:[]};Ja(b)&&Vj(a,b);c&&B.setTimeout(function(){return Uj(a)},Number(c));return Wj(a)},Vj=function(a,b){Qj[a]=Qj[a]||[];Qj[a].push(ab(function(){return N(function(){b(Yd.C,Rj[a])})}))};function Wj(a){var b=0,c=0,d=!1;return{add:function(){c++;return ab(function(){b++;d&&b>=c&&Uj(a)})},Mg:function(){d=!0;b>=c&&Uj(a)}}};var Yj=function(){function a(d){return!Ka(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ka(dh.get("gtm.start"))?dh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Tg-b)}}};var ck={},dk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},ek=!1;
var fk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Yj();return B[b]},gk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=dk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},hk=function(a){};
var jk=function(a){},ik=function(){return B.GoogleAnalyticsObject||"ga"},kk=function(a,b){return function(){var c=dk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var pk=function(){return"&tc="+xd.filter(function(a){return a}).length},sk=function(){2022<=qk().length&&rk()},uk=function(){tk||(tk=B.setTimeout(rk,500))},rk=function(){tk&&(B.clearTimeout(tk),tk=void 0);void 0===vk||wk[vk]&&!xk&&!yk||(zk[vk]||Ak.Fh()||0>=Bk--?(I(1),zk[vk]=!0):(Ak.di(),Qf(qk()),wk[vk]=!0,Ck=Dk=Ek=yk=xk=""))},qk=function(){var a=vk;if(void 0===a)return"";var b=lf("GTM"),c=lf("TAGGING");return[Fk,wk[a]?"":"&es=1",Gk[a],b?"&u="+b:"",c?"&ut="+c:"",pk(),xk,yk,Ek?Ek:"",Dk,Ck,"&z=0"].join("")},
Hk=function(){return[Ug,"&v=3&t=t","&pid="+Pa(),"&rv="+Yd.nc].join("")},Ik="0.005000">Math.random(),Fk=Hk(),Jk=function(){Fk=Hk()},wk={},xk="",yk="",Ck="",Dk="",Ek="",vk=void 0,Gk={},zk={},tk=void 0,Ak=function(a,b){var c=0,d=0;return{Fh:function(){if(c<a)return!1;Za()-d>=b&&(c=0);return c>=a},di:function(){Za()-d>=b&&(c=0);c++;d=Za()}}}(2,1E3),Bk=1E3,Kk=function(a,b,c){if(Ik&&!zk[a]&&b){a!==vk&&(rk(),vk=a);var d,e=String(b[Jd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;xk=xk?xk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(zd[g]?"1":"2")+d;Ck=Ck?Ck+"."+h:"&ti="+h;uk();sk()}},Lk=function(a,b,c){if(Ik&&!zk[a]){a!==vk&&(rk(),vk=a);var d=c+b;yk=yk?yk+"."+d:"&epr="+d;uk();sk()}},Mk=function(a,b,c){};
var Nk=function(){return!1},Ok=function(){var a={};return function(b,c,d){}};function Pk(a,b,c,d){var e=xd[a],f=Qk(a,b,c,d);if(!f)return null;var g=Fd(e[Jd.Ve],c,[]);if(g&&g.length){var h=g[0];f=Pk(h.index,{J:f,I:1===h.hf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qk(a,b,c,d){function e(){if(f[Jd.ug])h();else{var x=Gd(f,c,[]);var z=Sj(c.id,String(f[Jd.Ka]),Number(f[Jd.We]),x[Jd.vg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"5");Tj(c.id,z,"success",
F);g()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"6");Tj(c.id,z,"failure",F);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Kk(c.id,f,"1");var C=function(){var F=Za()-D;Kk(c.id,f,"7");Tj(c.id,z,"exception",F);A||(A=!0,h())};var D=Za();try{Ed(x,c)}catch(F){C(F)}}}var f=xd[a],g=b.J,h=b.I,l=b.terminate;if(c.yd(f))return null;var n=Fd(f[Jd.Xe],c,[]);if(n&&n.length){var p=n[0],q=Pk(p.index,{J:g,I:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.hf?l:q}if(f[Jd.Re]||f[Jd.yg]){var t=f[Jd.Re]?yd:c.si,r=g,u=h;if(!t[a]){e=ab(e);
var v=Rk(a,t,e);g=v.J;h=v.I}return function(){t[a](r,u)}}return e}function Rk(a,b,c){var d=[],e=[];b[a]=Sk(d,e,c);return{J:function(){b[a]=Tk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Uk;for(var f=0;f<e.length;f++)e[f]()}}}function Sk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tk(a){a()}function Uk(a,b){b()};var Xk=function(a,b,c){for(var d=[],e=0;e<xd.length;e++)if(a[e]){var f=xd[e];var g=c.add();try{var h=Pk(e,{J:g,I:g,terminate:g},b,e);h?d.push({Df:e,wf:Hd(f),yc:h}):(Vk(e,b),g())}catch(n){g()}}c.Mg();d.sort(Wk);for(var l=0;l<d.length;l++)d[l].yc();return 0<d.length};function Wk(a,b){var c,d=b.wf,e=a.wf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Df,h=b.Df;f=g>h?1:g<h?-1:0}return f}
function Vk(a,b){if(!Ik)return;var c=function(d){var e=b.yd(xd[d])?"3":"4",f=Fd(xd[d][Jd.Ve],b,[]);f&&f.length&&c(f[0].index);Kk(b.id,xd[d],e);var g=Fd(xd[d][Jd.Xe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yk=!1,cl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Yk)return!1;Yk=!0}var d=Gj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Gj(Number.MAX_SAFE_INTEGER);}if(f)return!1}Ik&&!zk[b]&&vk!==b&&(rk(),vk=b,Ck=xk="",Gk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,uk());
var g={id:b,name:c,yd:Ej(d.isAllowed),si:[],rf:function(){I(6)},af:Zk(b)},h=Xj(b,a.eventCallback,a.eventTimeout);$k(b);var l=Td(g);e&&(l=al(l));var n=Xk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||jk(Yd.C);switch(c){case "gtm.init":I(19),n&&I(20)}return bl(l,
n)};function Zk(a){return function(b){Ik&&(Cb(b)||Mk(a,"input",b))}}function $k(a){gh(a,"event",1);gh(a,"ecommerce",1);gh(a,"gtm");gh(a,"eventModel");}
function al(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Mg[String(xd[c][Jd.Ka])]&&(b[c]=!0);return b}function bl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&xd[c]&&!Ng[String(xd[c][Jd.Ka])])return!0;return!1}function dl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return th(""+c+b).href}}function el(a,b){return fl()?dl(a,b):void 0}function fl(){var a=!1;return a};var gl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},hl=function(a){var b=new gl;b.eventModel=a;return b},il=function(a,b){a.targetConfig=b;return a},jl=function(a,b){a.containerConfig=b;return a},kl=function(a,b){a.a=b;return a},ll=function(a,b){a.globalConfig=b;return a},ml=function(a,b){a.J=b;return a},nl=function(a,b){a.I=b;return a};
gl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ol=function(a){function b(e){Sa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Sa(c,function(e){d.push(e)});return d};var pl;if(3===Yd.nc.length)pl="g";else{var ql="G";pl=ql}
var rl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pl,OPT:"o"},sl=function(a){var b=Yd.C.split("-"),c=b[0].toUpperCase(),d=rl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Yd.nc.length){var g="w";f="2"+g}else f="";return f+d+Yd.nc+e};var tl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ul=function(){return zf("iPhone")&&!zf("iPod")&&!zf("iPad")};zf("Opera");zf("Trident")||zf("MSIE");zf("Edge");!zf("Gecko")||-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")||zf("Trident")||zf("MSIE")||zf("Edge");-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")&&zf("Mobile");zf("Macintosh");zf("Windows");zf("Linux")||zf("CrOS");var vl=ma.navigator||null;vl&&(vl.appVersion||"").indexOf("X11");zf("Android");ul();zf("iPad");zf("iPod");ul()||zf("iPad")||zf("iPod");wf.toLowerCase().indexOf("kaios");var wl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var xl=function(){};var yl=function(a){if($f("tteai")){if(void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent)return 2}else if(void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0),void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0),void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==
a.listenerId&&"number"!==typeof a.listenerId)return 2;return a.cmpStatus&&"error"!==a.cmpStatus?0:3},zl=function(a,b){this.i=a;this.a=null;this.B={};this.R=0;this.F=void 0===b?500:b;this.m=null};la(zl,xl);var Bl=function(a){return"function"===typeof a.i.__tcfapi||null!=Al(a)};
zl.prototype.addEventListener=function(a){var b={},c=qf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=yl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Cl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};zl.prototype.removeEventListener=function(a){a&&a.listenerId&&Cl(this,"removeEventListener",null,a.listenerId)};
var El=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var n=Dl(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:n&&Dl(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?Dl(a.purpose.legitimateInterests,
b)&&Dl(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Dl=function(a,b){return!(!a||!a[b])},Cl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Al(a)){Fl(a);var f=++a.R;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Al=function(a){if(a.a)return a.a;a.a=wl(a.i,"__tcfapiLocator");return a.a},Fl=function(a){a.m||(a.m=function(b){try{var c,d;"string"===
typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},tl(a.i,a.m))};var Gl={1:0,3:0,4:0,7:3,9:3,10:3};function Hl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Il=Hl("",550),Jl=Hl("",500);function Kl(){var a=O.tcf||{};return O.tcf=a}
var Ll=function(a,b){this.m=a;this.a=b;this.i=Za();},Ml=function(a){},Nl=function(a){},Tl=function(){var a=Kl(),b=new zl(B,3E3),c=new Ll(b,a);if((Ol()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||Bl(b))){a.active=!0;a.Pb={};Pl();var d=setTimeout(function(){Ql(a);Rl(a);d=null},Jl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Ql(a),Rl(a),Ml(c);else{var f;if(!1===e.gdprApplies)f=Sl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Gl)if(Gl.hasOwnProperty(h))if("1"===h){var l=e,n=!0;n=void 0===n?!1:n;var p;var q=l;!1===q.gdprApplies?p=!0:(void 0===q.internalErrorState&&(q.internalErrorState=yl(q)),p="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!n||"string"!==typeof l.tcString||!l.tcString.length?!0:El(l,"1",0):!1}else g[h]=El(e,h,Gl[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,Rl(a),Ml(c))}}),Nl(c)}catch(e){d&&(clearTimeout(d),d=null),Ql(a),Rl(a)}}};function Ql(a){a.type="e";a.tcString="tcunavailable";a.Pb=Sl()}function Pl(){var a={};og((a.ad_storage="denied",a.wait_for_update=Il,a))}
var Ol=function(){var a=!1;a=!0;return a};function Sl(){var a={},b;for(b in Gl)Gl.hasOwnProperty(b)&&(a[b]=!0);return a}function Rl(a){var b={};pg((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var Ul=function(){var a=Kl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Vl=function(){var a=Kl();return a.active?a.tcString||"":""},Wl=function(a){if(!Gl.hasOwnProperty(String(a)))return!0;var b=Kl();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};function Xl(a,b,c){function d(p){var q;O.reported_gclid||(O.reported_gclid={});q=O.reported_gclid;var t=f+(p?"gcu":"gcs");if(!q[t]){q[t]=!0;var r=[],u=function(z,A){A&&r.push(z+"="+encodeURIComponent(A))},v="https://www.google.com";if(jg()){var x=qg(H.s);u("gcs",rg());p&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+Jh());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&qg(H.s)){var y=Ii("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",Yl(b,h));!x&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",Vl());"1"===ri(!1)._up&&u("gtm_up","1");u("gclid",Yl(b,f));u("gclsrc",g);u("gtm",sl(!c));var w=v+"/pagead/landing?"+r.join("&");Xf(w)}}var e=Li(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=jg();if(l||n)n?sg(function(){d();qg(H.s)||mg(function(p){return d(!0,p.bf)},H.s)},[H.s]):d()}
function Yl(a,b){var c=a&&!qg(H.s);return b&&c?"0":b}var Zl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var $l=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},am=function(a){var b=$l(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var hm=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),im=["SCRIPT","IMG","SVG","PATH","BR"],jm=["BR"];function km(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=km(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function lm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=im.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=jm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],q=0;q<n.length;q++){var t=n[q],r=t.textContent;t.value&&(r=t.value);if(r){var u=r.match(hm);if(u){var v=
u[0],x;if(B.location){var y=qh(B.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Yi:v})}}}for(var w=[],z=10<p.length?"3":l.status,A=0;A<p.length&&10>A;A++){var C=p[A].element;w.push({querySelector:km(C),tagName:C.tagName,isVisible:!Zl(C),type:1})}return{elements:w,status:z}}var Vm=function(){var a=!0;Wl(7)&&Wl(9)&&Wl(10)||(a=!1);var b=!0;b=!1;b&&!Um()&&(a=!1);return a},Um=function(){var a=!0;Wl(3)&&Wl(4)||(a=!1);return a};function rn(){var a=O;return a.gcq=a.gcq||new sn}
var tn=function(a,b,c){rn().register(a,b,c)},un=function(a,b,c,d){rn().push("event",[b,a],c,d)},vn=function(a,b){rn().push("config",[a],b)},wn=function(a){rn().push("set",[a])},xn=function(a,b,c){rn().push("get",[a,b],c)},yn=function(a){return rn().getRemoteConfig(a)},zn={},An=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.a={};this.m=null;this.i=!1},Bn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},sn=function(){this.m={};this.i={};this.a=[]},
Cn=function(a,b){var c=dj(b);return a.m[c.containerId]=a.m[c.containerId]||new An},Dn=function(a,b,c){if(b){var d=dj(b);if(d&&1===Cn(a,b).status){Cn(a,b).status=2;var e={};Ik&&(e.timeoutId=B.setTimeout(function(){I(38);uk()},3E3));a.push("require",[e],d.containerId);zn[d.containerId]=Za();if(gj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=el(c,g)||h;Nf(l)}}}},En=function(a,b,c,d){if(d.ca){var e=Cn(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.a),p=E(a.i),q=ch("gtm.uniqueEventId"),t=dj(d.ca).prefix,r=nl(ml(ll(kl(jl(il(hl(g),h),l),n),p),function(){Lk(q,t,"2");}),
function(){Lk(q,t,"3");});try{Lk(q,t,"1");f(d.ca,b,d.m,r)}catch(u){Lk(q,t,"4");}}}};
sn.prototype.register=function(a,b,c){var d=Cn(this,a);if(3!==d.status){d.m=b;d.status=3;if(c){d.a=c}var e=dj(a),f=zn[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=ch("gtm.uniqueEventId"),n=h,p=Za()-g;if(Ik&&!zk[l]){l!==vk&&(rk(),vk=l);var q=n+"."+Math.floor(g-f)+"."+Math.floor(p);
Dk=Dk?Dk+","+q:"&cl="+q}delete zn[e.containerId]}this.flush()}};sn.prototype.push=function(a,b,c,d){var e=Math.floor(Za()/1E3);Dn(this,c,b[0][H.Ja]||this.i[H.Ja]);this.a.push(new Bn(a,e,c,b,d));d||this.flush()};
sn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Cn(this,c.ca).status&&!a)return;Ik&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Sa(c.a[0],function(p,q){E(hb(p,q),b.i)});break;case "config":var d=c.a[0],e=!!d[H.hc];delete d[H.hc];var f=Cn(this,c.ca),g=dj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.i&&e||En(this,H.fa,d,c);f.i=!0;delete d[H.Ab];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":En(this,c.a[1],c.a[0],c);break;case "get":var l={},n=(l[H.za]=c.a[0],l[H.ya]=c.a[1],l);En(this,H.Ga,n,c);}this.a.shift()}};sn.prototype.getRemoteConfig=function(a){return Cn(this,a).a};var Fn=function(a,b,c){};var Gn=function(a,b,c,d){};var Hn=function(a){};var In=function(a,b,c){};var Jn=function(a,b){
return!0};var Kn=function(a,b){var c;G(this.i.a,["path:!string"],[a]);Ve(this,"access_globals","execute",a);for(var d=a.split("."),e=B,f=e[d[0]],g=1;f&&g<d.length;g++){e=f;f=f[d[g]];}if("function"!==vb(f))return;var h=!1;
for(var l=[],n=1;n<arguments.length;n++)l.push(Ab(arguments[n],this.m,h));var p=(0,this.m.R)(f,e,l);c=zb(p,this.m);void 0===c&&void 0!==p&&I(45);return c};var Ln=function(a){};var Mn=!1,Nn=[];function On(){if(!Mn){Mn=!0;for(var a=0;a<Nn.length;a++)N(Nn[a])}}var Pn=function(a){Mn?N(a):Nn.push(a)};var Qn=function(a){G(this.i.a,["listener:!Fn"],arguments);Ve(this,"process_dom_events","window","load");Pn(Ab(a))};var Rn=function(a,b){var c;var e=!1;var f=zb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var Sn=function(a){var b;G(this.i.a,["path:!string"],arguments);Ve(this,"access_globals","read",a);var c=a.split("."),d=B,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=zb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var Tn=function(a,b){var c=null,d=!1;G(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Ve(this,"access_globals","readwrite",a);Ve(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=gb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ja(l))return null;if(l)return zb(l,this.m,d);var n;l=function(){if(!Ja(n.push))throw Error("Object at "+b+" in window is not an array.");n.push.call(n,arguments)};g[h]=l;var p=b.split("."),q=gb(p,e),t=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");n=q[t];void 0===n&&(n=[],q[t]=n);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return zb(c,this.m,d)};var Un=function(a){var b;G(this.i.a,["path:!string"],arguments);Ve(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=gb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ja(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return zb(b,this.m,h)};var Vn=function(a){var b;return b};var Wn=function(a,b){b=void 0===b?!0:b;var c;return c};var Xn=function(a){var b=null;return b};var Yn=function(a,b){var c;return c};var Zn=function(a,b){var c;return c};var $n=function(a){var b="";return b};function ao(a,b){};var bo=function(a){var b="";return b};var co=function(){Ve(this,"get_user_agent");return B.navigator.userAgent};var eo=function(a,b){};var fo={},go=function(a,b,c,d){G(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ve(this,"inject_script",a);var e=this.m,f=function(){b instanceof jb&&b.Pa(e)},g=function(){c instanceof jb&&c.Pa(e)};if(!d){Nf(a,f,g);return}var h=d;fo[h]?(fo[h].onSuccess.push(f),fo[h].onFailure.push(g)):(fo[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=fo[h].onSuccess,n=0;n<l.length;n++)N(l[n]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=fo[h].onFailure,n=0;n<l.length;n++)N(l[n]);fo[h]=null},Nf(a,f,g));};var ho=function(){return!1},io={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var jo=function(){};var ko=function(a,b){var c=!1;return c};var lo=function(){var a="";return a};var mo=function(){var a="";return a};var no=function(a,b,c){};var oo=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var po=function(a,b,c){G(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ve(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=B,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Ab(b,this.m,d),!0;return!1};function qo(a,b,c){};var ro=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var so=function(a,b,c){var d=this;};var to={},uo={};to.getItem=function(a){var b=null;return b};
to.setItem=function(a,b){};
to.removeItem=function(a){};to.clear=function(){};var vo=function(a){var b;return b};var Uc=function(){var a=new ff;gj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",eo),a.add("injectScript",go));var b=no;a.add("Math",Oe());a.add("TestHelper",hf());a.add("addEventCallback",Hn);a.add("aliasInWindow",Jn);a.add("assertApi",Ke);a.add("assertThat",Le);a.add("callInWindow",
Kn);a.add("callLater",Ln);a.add("copyFromDataLayer",Rn);a.add("copyFromWindow",Sn);a.add("createArgumentsQueue",Tn);a.add("createQueue",Un);a.add("decodeUri",Pe);a.add("decodeUriComponent",Qe);a.add("encodeUri",Re);a.add("encodeUriComponent",Se);a.add("fail",Te);a.add("fromBase64",Vn,!("atob"in B));a.add("generateRandom",Ue);a.add("getContainerVersion",We);a.add("getCookieValues",Wn);a.add("getQueryParameters",Yn);a.add("getReferrerQueryParameters",Zn);a.add("getReferrerUrl",$n);a.add("getTimestamp",
Xe);a.add("getTimestampMillis",Xe);a.add("getType",Ye);a.add("getUrl",bo);a.add("localStorage",io,!ho());a.add("logToConsole",jo);a.add("makeInteger",$e);a.add("makeNumber",af);a.add("makeString",bf);a.add("makeTableMap",cf);a.add("mock",ef);a.add("queryPermission",ko);a.add("readCharacterSet",lo);a.add("readTitle",mo);a.add("sendPixel",b);a.add("setCookie",oo);a.add("setInWindow",po);a.add("sha256",so);a.add("templateStorage",to);a.add("toBase64",vo,!("btoa"in B));a.add("JSON",Ze(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;
if(f){var g=f.Ib();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Sc,be;
function wo(){var a=data.runtime||[],b=data.runtime_lines;Sc=new Qc;xo();td=function(e,f,g){yo(f);var h=new pb;Sa(f,function(r,u){var v=zb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});Sc.a.a.B=Pd();var l={Ng:ce(e),eventId:void 0!==g?g.id:void 0,Ib:function(){return e},log:function(){}};if(Nk()){var n=Ok(),p=void 0,q=void 0;l.da={i:{},a:function(r,u,v){1===u&&(p=r);7===u&&(q=v);n(r,u,v)},m:df()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);n(p,4,{level:r,source:q,message:v})}}}var t=
Tc(l,[e,h]);Sc.a.a.B=void 0;t instanceof za&&"return"===t.a&&(t=t.i);return Ab(t)};Vc();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ld(d,b[c]);Sc.yc(d)}}function yo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){N(b)});Ja(c)&&(a.gtmOnFailure=function(){N(c)})}
function xo(){var a=Sc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Wc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function zo(a){void 0!==a&&Sa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Wg[e]=Wg[e]||[];Wg[e].push(b)}})};var Ao="HA GF G UA AW DC".split(" "),Bo=!1,Co={},Do=!1;function Eo(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Tc]&&(c.eventCallback=b[H.Tc]),b[H.bc]&&(c.eventTimeout=b[H.bc]));return c}function Fo(){return Bo}
var Io={config:function(a){},event:function(a){var b=a[1];if(!(2>
a.length)&&m(b)){var c;if(2<a.length){if(!xb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Eo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Do=!0,Fo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=be.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&xb(a[1])?b=E(a[1]):3==a.length&&m(a[1])&&(b={},xb(a[2])||La(a[2])?
b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Fo()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Xg(),d=a[1];"default"===d?(b(),og(a[2])):"update"===d&&(b(),pg(a[2],c))}}};
Io.get=function(a){};var Jo={policy:!0};
var Ko=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mo=function(a){var b=Lo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var cp=function(a){if(bp(a))return a;this.a=a};cp.prototype.vh=function(){return this.a};var bp=function(a){return!a||"object"!==vb(a)||xb(a)?!1:"getUntrustedUpdateValue"in a};cp.prototype.getUntrustedUpdateValue=cp.prototype.vh;var dp=[],ep=!1,fp=function(a){return B["dataLayer"].push(a)},gp=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function hp(a){var b=a._clear;Sa(a,function(d,e){"_clear"!==d&&(b&&fh(d,void 0),fh(d,e))});Sg||(Sg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Xg(),a["gtm.uniqueEventId"]=c,fh("gtm.uniqueEventId",c));return cl(a)}
function ip(){for(var a=!1;!ep&&0<dp.length;){ep=!0;delete $g.eventModel;bh();var b=dp.shift();if(null!=b){var c=bp(b);if(c){var d=b;b=bp(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ch(g,1);if(La(h)||xb(h))h=E(h);ah[g]=h}}try{if(Ja(b))try{b.call(dh)}catch(v){}else if(La(b)){var l=
b;if(m(l[0])){var n=l[0].split("."),p=n.pop(),q=l.slice(1),t=ch(n.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,q)}catch(v){}}}else{if(Ta(b)){a:{var r=b;if(r.length&&m(r[0])){var u=Io[r[0]];if(u&&(!c||!Jo[r[0]])){b=u(r);break a}}b=void 0}if(!b){ep=!1;continue}}a=hp(b)||a}}finally{c&&bh(!0)}}ep=!1}return!a}
function jp(){var a=ip();try{Ko(B["dataLayer"],Yd.C)}catch(b){}return a}
var lp=function(){var a=Lf("dataLayer",[]),b=Lf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Pj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new cp(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);dp.push.apply(dp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ip()&&h};var d=a.slice(0);dp.push.apply(dp,d);kp()&&N(jp)},kp=function(){var a=!0;return a};var mp={};mp.ic=new String("undefined");
var np=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===mp.ic?b:a[d]);return c.join("")}};np.prototype.toString=function(){return this.a("undefined")};np.prototype.valueOf=np.prototype.toString;mp.Ag=np;mp.jd={};mp.eh=function(a){return new np(a)};var op={};mp.ei=function(a,b){var c=Xg();op[c]=[a,b];return c};mp.ef=function(a){var b=a?0:1;return function(c){var d=op[c];if(d&&"function"===typeof d[b])d[b]();op[c]=void 0}};mp.Dh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};mp.Yh=function(a){if(a===mp.ic)return a;var b=Xg();mp.jd[b]=a;return'google_tag_manager["'+Yd.C+'"].macro('+b+")"};mp.Ph=function(a,b,c){a instanceof mp.Ag&&(a=a.a(mp.ei(b,c)),b=Ia);return{wd:a,J:b}};var pp=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Tf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},qp=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},rp=function(a,b,c){qp(a)[b]=c},sp=function(a,b,c,d){var e=qp(a),f=$a(e,b,d);e[b]=c(f)},tp=function(a,b,c){var d=qp(a);return $a(d,b,c)};var up=["input","select","textarea"],vp=["button","hidden","image","reset","submit"],wp=function(a){var b=a.tagName.toLowerCase();return!Oa(up,function(c){return c===b})||"input"===b&&Oa(vp,function(c){return c===a.type.toLowerCase()})?!1:!0},xp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Wf(a,["form"],100)},yp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(wp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var zp=!!B.MutationObserver,Ap=void 0,Bp=function(a){if(!Ap){var b=function(){var c=L.body;if(c)if(zp)(new MutationObserver(function(){for(var e=0;e<Ap.length;e++)N(Ap[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Rf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ap.length;e++)N(Ap[e])}))})}};Ap=[];L.body?b():N(b)}Ap.push(a)};var Np=B.clearTimeout,Op=B.setTimeout,S=function(a,b,c){if(gj()){b&&N(b)}else return Nf(a,b,c)},Pp=function(){return new Date},Qp=function(){return B.location.href},Rp=function(a){return rh(th(a),"fragment")},Sp=function(a){return sh(th(a))},Tp=function(a,b){return ch(a,b||2)},Up=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fp(a)):d=fp(a);return d},Vp=function(a,b){B[a]=b},T=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Wp=function(a,b,c){return xh(a,b,void 0===c?!0:!!c)},Xp=function(a,b,c){return 0===Gh(a,b,c)},Yp=function(a,b){if(gj()){b&&N(b)}else Pf(a,b)},Zp=function(a){return!!tp(a,"init",!1)},$p=function(a){rp(a,"init",!0)},aq=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Qg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(ij("https://","http://",c))},bq=function(a,
b){var c=a[b];return c},cq=function(a,b,c){Ik&&(Cb(a)||Mk(c,b,a))};
var dq=mp.Ph;function Aq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Bq=new Qa;function Cq(a,b){function c(g){var h=th(g),l=rh(h,"protocol"),n=rh(h,"host",!0),p=rh(h,"port"),q=rh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Dq(a){return Eq(a)?1:0}
function Eq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Dq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Aq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=Bq.get(q);t||(t=new RegExp(c,p),Bq.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Cq(b,c)}return!1};var Fq={},Gq=encodeURI,W=encodeURIComponent,Hq=Qf;var Iq=function(a,b){if(!a)return!1;var c=rh(th(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Jq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Fq.Eh=function(){var a=!1;return a};var tr=null,ur=[],vr=0,wr=null;function xr(){var a=Za()-vr;0<=a?(wr&&(B.clearTimeout(wr),wr=null),yr()):wr||(wr=B.setTimeout(function(){yr();wr=null},0-a))}function yr(){vr=Za();var a=ur;ur=[];var b,c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];b=c?c.call(a):{next:da(a)};for(var d=b.next();!d.done;d=b.next()){var e=d.value;e()}tr&&(tr.takeRecords(),ur.length||(tr&&(tr.disconnect(),tr=null),wr&&(B.clearTimeout(wr),wr=null)))};function as(){return B.gaGlobal=B.gaGlobal||{}}var bs=function(){var a=as();a.hid=a.hid||Pa();return a.hid},cs=function(a,b){var c=as();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Ks=function(a,b){var c;var d=ls(a);d?(js(d,a)||(I(25),a.abort()),c=d):c=void 0;var e=c,f;a:{var g=a.L[H.Xa];g?(g=""+g,gs(g,a)||(I(31),a.abort()),cs(g,qg(H.M)),f=g):(I(32),a.abort(),f="")}return{clientId:f,Af:e}};var Ls=window,Ms=document,Ns=function(a){var b=Ls._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ls["ga-disable-"+a])return!0;try{var c=Ls.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=vh("AMP_TOKEN",String(Ms.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ms.getElementById("__gaOptOutExtension")?!0:!1};function Qs(a){delete a.eventModel[H.Ab];Ts(a.eventModel)}var Ts=function(a){Sa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Sa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Ws=function(a,b,c){un(b,c,a)},Xs=function(a,b,c){un(b,c,a,!0)},Zs=function(a,b){};
function Ys(a,b){}var Z={b:{}};Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"1369"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var z=[],A=w.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var w=0,z=0;return function(){var A=$l(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);z=Math.max(v.scrollTop+C,z);return{hh:w,ih:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(w,z,A,C){var D=l(z),F={},M;for(M in D){F.Ua=M;if(D.hasOwnProperty(F.Ua)){var Q=Number(F.Ua);w<Q||(Up({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[F.Ua].join(",")}),sp("sdl",z,function(ba){return function(ca){delete ca[ba.Ua];return ca}}(F),{}))}F={Ua:F.Ua}}}function f(){var w=y(),z=w.hh,A=w.ih,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,
"horiz.pix",q.kc,t.Ke);e(C,"horiz.pct",q.jc,t.Ke);e(A,"vert.pix",q.kc,t.Ye);e(D,"vert.pct",q.jc,t.Ye);rp("sdl","pending",!1)}function g(){var w=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(w=50,z=!0);var A=0,C=!1,D=function(){C?A=Op(D,w):(A=0,f(),Zp("sdl")&&!a()&&(Sf(r,"scroll",F),Sf(r,"resize",F),rp("sdl","init",!1)));C=!1},F=function(){z&&y();A?C=!0:(A=Op(D,w),rp("sdl","pending",!0))};return F}function h(w,z,A){if(z){var C=b(String(w));sp("sdl",A,function(D){for(var F=0;F<
C.length;F++){var M=String(C[F]);D.hasOwnProperty(M)||(D[M]=[]);D[M].push(z)}return D},{})}}function l(w){return tp("sdl",w,{})}function n(w){N(w.vtp_gtmOnSuccess);var z=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,D=w.vtp_verticalThresholdUnits,F=w.vtp_verticalThresholdsPixels,M=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.kc:h(A,z,"horiz.pix");break;case q.jc:h(C,z,"horiz.pct")}switch(D){case q.kc:h(F,z,"vert.pix");
break;case q.jc:h(M,z,"vert.pct")}Zp("sdl")?tp("sdl","pending")||(x||(d(),x=!0),N(function(){return f()})):(d(),x=!0,v&&($p("sdl"),rp("sdl","pending",!0),N(function(){f();if(a()){var Q=g();Rf(r,"scroll",Q);Rf(r,"resize",Q)}else rp("sdl","init",!1)})))}var p=/^\s*$/,q={jc:"PERCENT",kc:"PIXELS"},t={Ye:"vertical",Ke:"horizontal"},r,u,v,x=!1,y;(function(w){Z.__sdl=w;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?n(w):Pn(function(){n(w)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);cq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=T("google_trackConversion");if(Ja(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Jq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:sl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Vl();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){S(b,d,c)};jg()?sg(function(){qg(H.s)?e():mg(e,H.s)},[H.s]):(Yj(),e())})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(hh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Tp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?rh(th(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Sp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=pp(c,"gtm.click");Up(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Zp("cl")){var c=T("document");Rf(c,"click",a,!0);$p("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];cq(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Wp(a.vtp_name,Tp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(p,q,t){if(!m(t))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Na(e,t))return}else if("write"===q){if(-1<Na(f,t))return}else if("readwrite"===q){if(-1<Na(f,t)&&-1<Na(e,t))return}else if("execute"===q){if(-1<Na(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Tp("gtm.url",1);c=c||Qp();var d=b[a("vtp_component")];if(!d||"URL"==d)return Sp(String(c));var e=th(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?La(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var p=0;p<n.length;p++){var q=rh(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=rh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Tp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;cq(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.ua=["google"],function(){function a(q){return qg(q)}function b(q,t){if(jg()&&!e[q]){var r=function(){var u=dk(),v="gtm"+Xg(),x=n(t),y={name:v};l(x,y,!0);u("create",q,y);u(function(){u.remove(v)})};mg(r,H.M);mg(r,H.s);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var x=g[v]?Wa(q[v]):q[v];"anonymizeIp"!=v||x||
(x=void 0);t[v]=x;u++}return u},n=function(q){var t={};q.vtp_gaSettings&&E(Jq(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Jq(q.vtp_fieldsToSet,"fieldName","value"),t);qg(H.M)||(t.storage="none");qg(H.s)||(t.allowAdFeatures=!1,t.storeGac=!1);Vm()||(t.allowAdFeatures=!1);Um()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},p=function(q){function t(ta,P){void 0!==P&&F("set",ta,P)}var r={},u={},v={},x={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;E(Jq(y.vtp_contentGroup,"index","group"),u);E(Jq(y.vtp_dimension,"index","dimension"),v);E(Jq(y.vtp_metric,"index","metric"),x);var w=E(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=
void 0;w.vtp_metric=void 0;q=E(q,w)}E(Jq(q.vtp_contentGroup,"index","group"),u);E(Jq(q.vtp_dimension,"index","dimension"),v);E(Jq(q.vtp_metric,"index","metric"),x);var z=n(q),A=fk(q.vtp_functionName);if(Ja(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Xg(),C=D+".");var F=function(ta){var P=[].slice.call(arguments,0);P[0]=C+P[0];A.apply(window,P)},M=function(ta,P){return void 0===P?P:ta(P)},Q=function(ta,P){if(P)for(var fb in P)P.hasOwnProperty(fb)&&
F("set",ta+fb,P[fb])},ba=function(){},ca={name:D};l(z,ca,!0);var va=q.vtp_trackingId||r.trackingId;A("create",va,ca);F("set","&gtm",sl(!0));
jg()&&(F("set","&gcs",rg()),b(va,q));z._x_19&&(null==Kf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(kk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ta,P){void 0!==q[P]&&F("set",ta,q[P])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",x);var J={};l(z,J,!1)&&F("set",J);var K;
q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ta=z&&z.hitCallback;Ja(ta)&&ta();q.vtp_gtmOnSuccess()});if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());var V={hitType:"event",eventCategory:String(q.vtp_eventCategory||r.category),eventAction:String(q.vtp_eventAction||r.action),eventLabel:M(String,q.vtp_eventLabel||r.label),eventValue:M(Va,q.vtp_eventValue||
r.value)};l(K,V,!1);F("send",V);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var fc=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:fc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Cc="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:Cc})}K?F("send","pageview",K):F("send","pageview");Wa(z.urlPassthrough)&&hk(C)}if(!c){var jd=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(jd="internal/"+jd);c=!0;var kd=el(z._x_19,"/analytics.js"),Df=ij("https:","http:","//www.google-analytics.com/"+jd,z&&!!z.forceSSL);S("analytics.js"===jd&&kd?kd:Df,function(){var ta=dk();ta&&ta.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(q){sg(function(){p(q)},[H.M,H.s])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Script URL must be a string.");try{if(Be(th(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||yi())&&Qi(a,h));Ni(h);Si(["aw","dc"],h);aj(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ri(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var p=Tp(H.N);Xl(!1,void 0!=p&&!1!==p);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&Ui()})}();
Z.b.aev=["google"],function(){function a(r,u){var v=hh(r,"gtm");if(v)return v[u]}function b(r,u,v,x){x||(x="element");var y=r+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var z=a(r,x);if(z&&(w=v(z),p[y]=w,q.push(y),35<q.length)){var A=q.shift();delete p[A]}}return w}function c(r,u,v){var x=a(r,t[u]);return void 0!==x?x:v}function d(r,u){if(!r)return!1;var v=e(Qp());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(r))return!1}else{var z=w;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;x.push(e(z))}}}return!Iq(r,x)}function e(r){n.test(r)||(r="http://"+r);return rh(th(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+r,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return Tf(r,"value");case "button":return Uf(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)wp(r.elements[v])&&
u++;return u}}function l(r,u,v){var x=a(r,"interactedFormField");return x&&Tf(x,u)||v}var n=/^https?:\/\//i,p={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,x=r.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Uf)||v;case "URL":var w;a:{var z=String(a(u,"elementUrl")||v||""),A=th(z),C=String(r.vtp_component||"URL");switch(C){case "URL":w=z;break a;case "IS_OUTBOUND":w=d(z,r.vtp_affiliatedDomains);break a;default:w=rh(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return w;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
x,v);else{var F=r.vtp_attribute,M=a(u,"element");D=M&&Tf(M,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,ba=b(u,"MD",Ip);return Q&&ba?Lp(ba,Q)||v:ba||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);cq(ca,"aev",r.vtp_gtmEventId);return ca}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Jd.Ka]=null;c[Jd.rg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Qp()}function b(f,g){Rf(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Sp(l),T:Rp(l)})})}function c(f,g){Rf(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Sp(l),T:Rp(l)})})}function d(f,g,h){var l=g.history,n=l[f];if(Ja(n))try{l[f]=function(p,q,t){n.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:Sp(Qp()),
T:Rp(Qp())})}}catch(p){}}function e(){var f={source:null,state:T("history").state||null,url:Sp(Qp()),T:Rp(Qp())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.T!=g.T){var n={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.T,"gtm.newUrlFragment":g.T,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Up(n)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=
0})(function(f){var g=T("self");if(!Zp("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);$p("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=T("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=
0})(function(g){function h(y,w,z){return"DATA_LAYER"===y?Tp(z):g[w]}function l(){u("gdpr_consent",Vl());}function n(){}function p(y){var w=!0;y&&n();w&&b.push(q)}Yj();var q={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:sl()};g.vtp_rdp&&(q.google_restricted_data_processing=!0);void 0!=Tp(H.N)&&!1!==Tp(H.N)&&(q.google_gtm_url_processor=function(y){return y=wj(y)});var t=function(y){return function(w,z,A){var C=h(y,z,A);C&&(q[w]=C)}},
r=t("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(r=t(g.vtp_productReportingDataSource),r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),q.google_conversion_items&&
q.google_conversion_items.map&&(q.google_conversion_items=q.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,w){void 0!==w&&((q.google_additional_conversion_params=q.google_additional_conversion_params||{})[y]=w)},v=function(y){return function(w,z,A,C){var D=h(y,z,A);C(D)&&u(w,D)}};(function(){})();g.vtp_transportUrl&&(q.google_transport_url=g.vtp_transportUrl);var x=el(g.vtp_transportUrl,"/pagead/conversion_async.js");x||(x=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
g.vtp_enableNewCustomerReporting&&(r=v(g.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(q.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),q.google_read_gcl_cookie_opt_out=!1):q.google_read_gcl_cookie_opt_out=!0;"1"===
ri(!1)._up&&u("gtm_up","1");l();(function(){jg()?sg(function(){l();var y=qg(H.s),w=!y&&void 0!=Tp(H.N)&&!1!==Tp(H.N);!g.vtp_transportUrl&&w&&(q.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",rg());p(y);y||mg(function(){l();q=E(q);!g.vtp_transportUrl&&q.google_transport_url&&delete q.google_transport_url;u("gcs",rg());u("gcu","1");p(!0)},H.s)},[H.s]):p(!0)})();a||(a=!0,S(x,f(),e(x)))})}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=pf(T("UET"),{ti:b.vtp_tagId,q:d});B[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();
Z.b.fsl=[],function(){function a(){var e=T("document"),f=c(),g=HTMLFormElement.prototype.submit;Rf(e,"click",function(h){var l=h.target;if(l&&(l=Wf(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Tf(l,"value")){var n;l.form?l.form.tagName?n=l.form:n=L.getElementById(l.form):n=Wf(l,["form"],100);n&&f.store(n,l)}},!1);Rf(e,"submit",function(h){var l=h.target;if(!l)return h.returnValue;var n=h.defaultPrevented||!1===h.returnValue,p=b(l)&&!n,q=f.get(l),t=!0;if(d(l,function(){if(t){var r;
q&&(r=e.createElement("input"),r.type="hidden",r.name=q.name,r.value=q.value,l.appendChild(r));g.call(l);r&&l.removeChild(r)}},n,p,q))t=!1;else return n||(h.preventDefault&&h.preventDefault(),h.returnValue=!1),!1;return h.returnValue},!1);HTMLFormElement.prototype.submit=function(){var h=this,l=b(h),n=!0;d(h,function(){n&&g.call(h)},!1,l)&&(g.call(h),n=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Oa(e,function(h){return h.form===
g})};return{store:function(g,h){var l=f(g);l?l.button=h:e.push({form:g,button:h})},get:function(g){var h=f(g);return h?h.button:null}}}function d(e,f,g,h,l){var n=tp("fsl",g?"nv.mwt":"mwt",0),p;p=g?tp("fsl","nv.ids",[]):tp("fsl","ids",[]);if(!p.length)return!0;var q=pp(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);q["gtm.elementUrl"]=t;l&&(q["gtm.formSubmitElement"]=l);if(h&&n){if(!Up(q,gp(f),n))return!1}else Up(q,function(){},n||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,h=Number(e.vtp_waitForTagsTimeout);if(!h||0>=h)h=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var n=function(q){return Math.max(h,q)};sp("fsl","mwt",n,0);g||sp("fsl","nv.mwt",n,0)}var p=function(q){q.push(l);return q};sp("fsl","ids",p,[]);g||sp("fsl","nv.ids",p,[]);Zp("fsl")||(a(),$p("fsl"));N(e.vtp_gtmOnSuccess)})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return mp.ic})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(n.src=p,Mf(n,l));d.insertBefore(n,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Pj(function(){var g=O.postscribe,h={done:e},l=L.createElement("div");l.style.display="none";l.style.visibility="hidden";L.body.appendChild(l);try{g(l,d,h)}catch(n){N(f)}})};var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=dq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.wd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Vf(g),h,e)()}else Op(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=
!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Vf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Hq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=T("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Ch||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Wf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=tp("lcl",h?"nv.mwt":"mwt",0),n;n=h?tp("lcl","nv.ids",[]):tp("lcl","ids",[]);if(n.length){var p=pp(g,"gtm.linkClick",n);if(b(f,g,c)&&!h&&l&&g.href){var q=String(bq(g,"rel")||""),t=!!Oa(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=T((bq(g,"target")||"_self").substring(1)),u=!0;if(Up(p,gp(function(){var v;if(v=u&&r){var x;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(w){if(!c.createEvent){x=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Ch=!0;f.target.dispatchEvent(y);x=!0}else x=!1;v=!x}v&&(r.location.href=bq(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Up(p,function(){},l||2E3);return!0}}};Rf(c,"click",e,!1);Rf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=bq(d,"href"),g=f.indexOf("#"),h=bq(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Sp(f),n=Sp(e.location);return l!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(n){return Math.max(f,n)};sp("lcl","mwt",h,0);e||sp("lcl","nv.mwt",h,0)}var l=function(n){n.push(g);return n};sp("lcl","ids",l,[]);e||sp("lcl","nv.ids",l,[]);Zp("lcl")||(a(),$p("lcl"));N(c.vtp_gtmOnSuccess)})}();


var $s={};$s.macro=function(a){if(mp.jd.hasOwnProperty(a))return mp.jd[a]},$s.onHtmlSuccess=mp.ef(!0),$s.onHtmlFailure=mp.ef(!1);$s.dataLayer=dh;$s.callback=function(a){Vg.hasOwnProperty(a)&&Ja(Vg[a])&&Vg[a]();delete Vg[a]};$s.bootstrap=0;$s._spx=!1;function at(){O[Yd.C]=$s;cb(Wg,Z.b);Bd=Bd||mp;Cd=Ud}
function bt(){Zf.gtm_3pds=!0;Zf.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};Tl();if(O[Yd.C]){var a=O.zones;a&&a.unregisterChild(Yd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ud.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)xd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)wd.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],q={},t=0;t<p.length;t++)q[p[t][0]]=Array.prototype.slice.call(p[t],1);vd.push(q)}zd=Z;Ad=Dq;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;wo();be=new ae(r);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Wg[w]=x}zo(v);at();lp();
Kj=!1;Lj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Nj();else{Rf(L,"DOMContentLoaded",Nj);Rf(L,"readystatechange",Nj);if(L.createEventObject&&L.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(M){}z&&Oj()}Rf(B,"load",Nj)}Mn=!1;"complete"===L.readyState?On():Rf(B,"load",On);
a:{if(!Ik)break a;B.setInterval(Jk,864E5);}var F=O;F.postscribe||(F.postscribe=B.postscribe||De);Tg=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var n=B["google.tagmanager.debugui2.queue"];n||(n=[],B["google.tagmanager.debugui2.queue"]=n,Nf("https://www.googletagmanager.com/debug/bootstrap"));return n},g="x"===rh(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=th(L.referrer);g="tagassistant.google.com"===qh(h,"host")}if(!g){var l=xh("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Kf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Kf,resume:function(){a()}}});return}a()})(bt);

})()
