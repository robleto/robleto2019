
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"1365",
  
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
      "function":"__v",
      "vtp_name":"product",
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
      "function":"__html",
      "priority":60,
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",10,0]],
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
      "setup_tags":["list",["tag",10,0]],
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
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" id=\"comscore_init_script_",["escape",["macro",26],3],"\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"17054958\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.id=\"comscore_script_",["escape",["macro",26],7],"\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/b.scorecardresearch.com\/p?c1=2\u0026amp;c2=17054958\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E\n"],
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
      "vtp_enableNewCustomerReportingCheckbox":false,
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
      "vtp_enableNewCustomerReportingCheckbox":false,
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
      "vtp_enableNewCustomerReportingCheckbox":false,
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
      "vtp_enableNewCustomerReportingCheckbox":false,
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
      "setup_tags":["list",["tag",151,0]],
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
      "function":"__hl",
      "tag_id":1503
    },{
      "function":"__cl",
      "tag_id":1504
    },{
      "function":"__cl",
      "tag_id":1505
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_933",
      "tag_id":1506
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1024",
      "tag_id":1507
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1025",
      "tag_id":1508
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1027",
      "tag_id":1509
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1030",
      "tag_id":1510
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1032",
      "tag_id":1511
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1033",
      "tag_id":1512
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1034",
      "tag_id":1513
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1035",
      "tag_id":1514
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1036",
      "tag_id":1515
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1037",
      "tag_id":1516
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1038",
      "tag_id":1517
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1039",
      "tag_id":1518
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1040",
      "tag_id":1519
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1041",
      "tag_id":1520
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1042",
      "tag_id":1521
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1043",
      "tag_id":1522
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1133",
      "tag_id":1523
    },{
      "function":"__cl",
      "tag_id":1524
    },{
      "function":"__cl",
      "tag_id":1525
    },{
      "function":"__cl",
      "tag_id":1526
    },{
      "function":"__cl",
      "tag_id":1527
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1303",
      "tag_id":1528
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1304",
      "tag_id":1529
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"122374_1331",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1530
    },{
      "function":"__cl",
      "tag_id":1531
    },{
      "function":"__cl",
      "tag_id":1532
    },{
      "function":"__cl",
      "tag_id":1533
    },{
      "function":"__cl",
      "tag_id":1534
    },{
      "function":"__cl",
      "tag_id":1535
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1392",
      "tag_id":1536
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1406",
      "tag_id":1537
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1407",
      "tag_id":1538
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1408",
      "tag_id":1539
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1409",
      "tag_id":1540
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1415",
      "tag_id":1541
    },{
      "function":"__cl",
      "tag_id":1542
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"122374_1469",
      "tag_id":1543
    },{
      "function":"__cl",
      "tag_id":1544
    },{
      "function":"__cl",
      "tag_id":1545
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
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var sha256Email=\"",["escape",["macro",27],7],"\";\"\"!=sha256Email?fbq(\"init\",\"1561515534098628\",{em:sha256Email}):fbq(\"init\",\"1561515534098628\");\nfbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1561515534098628\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.btoa||(window.btoa=base64.encode);window.atob||(window.atob=base64.decode);\"remove\"in Element.prototype||(Element.prototype.remove=function(){this.parentNode\u0026\u0026this.parentNode.removeChild(this)});var uid=",["escape",["macro",28],8,16],";if(\"\"!=uid\u0026\u00260!=uid){var pingPoint=\"\/\/infotron.fool.com\/ping?p\\x3d\",actionData=JSON.stringify({Id:uid,Actions:[{Action:\"url\",Value:window.location.pathname+window.location.search}]});encoded_string=window.btoa(actionData);var el=document.createElement(\"script\");el.src=\npingPoint+encoded_string;el.type=\"text\/javascript\";el.id=\"actionData\";el.onreadystatechange=el.onload=function(){var a=el.readyState;a\u0026\u0026!\/loaded|complete\/.test(a)||el.remove()};document.body.appendChild(el)}}catch(a){};\u003C\/script\u003E"],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-p4jUuewM-vyu5\",labels:\"_fp.event.Subscription Signup,_fp.pcat.",["escape",["macro",29],7],"\",orderid:\"",["escape",["macro",30],7],"\",revenue:\"",["escape",["macro",31],7],"\",event:\"refresh\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/pixel.quantserve.com\/pixel\/p-p4jUuewM-vyu5.gif?labels=_fp.event.Subscription+Signup,_fp.pcat.INSERT+PRODUCT+CATEGORY\u0026amp;orderid=INSERT+ORDER+ID\u0026amp;revenue=INSERT+REVENUE\" style=\"display: none;\" border=\"0\" height=\"1\" width=\"1\" alt=\"Quantcast\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cdiv id=\"infotron_pixel_1\" style=\"display:none\"\u003E\u003C\/div\u003E\n\n\u003Cscript id=\"infotron_pixel_script_block\" type=\"text\/gtmscript\"\u003Efunction infotron_pixel_1(a){document.getElementById(\"infotron_pixel_1\").innerHTML=a}function getScript(a,c){var b=document.createElement(\"script\");b.src=a+\"\\x26callback\\x3d\"+c;b.id=c+\"_script\";document.getElementsByTagName(\"head\")[0].appendChild(b)}window._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",28],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",25],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}}getScript(\"\/\/infotron.fool.com\/pitcher\/get_pitch?placement\\x3dpixel1\",\"infotron_pixel_1\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":368
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"pebblepost_init_script\" type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];\nif(\"undefined\"!==typeof window._pp){window._pp.siteId=1058;var siteUid=\"",["escape",["macro",28],7],"\";\"\"!=siteUid\u0026\u00260!=siteUid\u0026\u0026(window._pp.siteUId=siteUid);var utm_source=\"",["escape",["macro",25],7],"\";if(\"\"!=utm_source){var d=new Date;_pp.tags=utm_source+(d.getMonth()+1)+d.getFullYear()}(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.id=\"pebblepost_script\";a.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var b=document.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)})()};\u003C\/script\u003E"],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"",["escape",["macro",31],7],"\";AWIN.Tracking.Sale.channel=\"",["escape",["macro",33],7],"\";AWIN.Tracking.Sale.orderRef=\"",["escape",["macro",30],7],"\";AWIN.Tracking.Sale.parts=\"",["escape",["macro",34],7],":",["escape",["macro",31],7],"\";AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.currency=\"USD\";AWIN.Tracking.Sale.voucher=\"\";\u003C\/script\u003E  \n\u003Cform style=\"display: none;\" name=\"aw_basket_form\"\u003E\n\u003Ctextarea wrap=\"physical\" id=\"aw_basket\"\u003E\nAW:P|12195|",["escape",["macro",30],2],"|",["escape",["macro",35],2],"|",["escape",["macro",34],2],"|",["escape",["macro",31],2],"|1|",["escape",["macro",35],2],"|",["escape",["macro",34],2],"|\n\u003C\/textarea\u003E\n\u003C\/form\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/12195.js\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/www.awin1.com\/sread.img?tt=ns\u0026amp;tv=2\u0026amp;merchant=12195\u0026amp;amount=",["escape",["macro",31],12],"\u0026amp;ch=",["escape",["macro",33],12],"\u0026amp;parts=",["escape",["macro",34],12],":",["escape",["macro",31],12],"\u0026amp;ref=",["escape",["macro",30],12],"\u0026amp;testmode=0\"\u003E\n\n"],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=unescape(encodeURIComponent(\"",["escape",["macro",36],7],"\")).trim().toLowerCase(),quantity=1;\nwindow.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setHashedEmail\",email:hashedEmail},{event:\"trackTransaction\",id:\"",["escape",["macro",30],7],"\",item:[{id:\"",["escape",["macro",29],7],"\",price:",["escape",["macro",31],8,16],",quantity:1}]});\u003C\/script\u003E"],
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
      "setup_tags":["list",["tag",189,0]],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\",hashedEmail=\"",["escape",["macro",6],7],"\",price=",["escape",["macro",37],8,16],";window.criteo_q.push({event:\"setAccount\",account:27608},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:hashedEmail},{event:\"viewBasket\",item:[{id:1,price:price,quantity:1}]});\u003C\/script\u003E"],
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
      "setup_tags":["list",["tag",181,0]],
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
      "setup_tags":["list",["tag",151,0]],
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"email_signup\",email:\"",["escape",["macro",38],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":608
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"product_purchase\",email:\"",["escape",["macro",36],7],"\",conversionId:\"",["escape",["macro",30],7],"\",amount:\"",["escape",["macro",31],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
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
      "setup_tags":["list",["tag",181,0]],
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
      "setup_tags":["list",["tag",146,0]],
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
      "setup_tags":["list",["tag",232,0]],
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
      "setup_tags":["list",["tag",232,0]],
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
      "setup_tags":["list",["tag",231,0]],
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
      "setup_tags":["list",["tag",231,0]],
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
      "setup_tags":["list",["tag",233,0]],
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
      "setup_tags":["list",["tag",233,0]],
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
      "setup_tags":["list",["tag",230,0]],
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
      "setup_tags":["list",["tag",230,0]],
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
      "setup_tags":["list",["tag",146,0]],
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
      "setup_tags":["list",["tag",146,0]],
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
      "setup_tags":["list",["tag",146,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"CompleteRegistration\",{value:\"",["escape",["macro",31],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1434
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"4621783881168919\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=4621783881168919\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
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
      "setup_tags":["list",["tag",244,0]],
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
      "setup_tags":["list",["tag",244,0]],
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
      "setup_tags":["list",["tag",146,0]],
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
      "setup_tags":["list",["tag",146,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",31],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1476
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,a,c,d,e){if(!a)for(a=a||{},window.permutive=a,a.q=[],a.config=e||{},a.config.projectId=c,a.config.apiKey=d,a.config.environment=a.config.environment||\"production\",b=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Cb.length;c++)d=b[c],a[d]=function(f){return function(){var g=Array.prototype.slice.call(arguments,0);a.q.push({functionName:f,arguments:g})}}(d)}(document,window.permutive,\"93bfda6d-607a-4f67-9c40-61e8b08a03e1\",\"a66d0828-41a5-4477-98f1-d07b9be85233\",\n{});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var b=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",b?JSON.parse(b):[])}});\npermutive.addon(\"web\",{page:{type:",["escape",["macro",0],8,16],",article:{id:",["escape",["macro",40],8,16],",author:",["escape",["macro",41],8,16],",bureau:",["escape",["macro",42],8,16],",headline:",["escape",["macro",43],8,16],",publishedTime:",["escape",["macro",44],8,16],",tags:",["escape",["macro",45],8,16],",tickers:",["escape",["macro",46],8,16],",section:",["escape",["macro",47],8,16],",collection:",["escape",["macro",48],8,16],"}}});\u003C\/script\u003E\n  \u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/93bfda6d-607a-4f67-9c40-61e8b08a03e1-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
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
      "setup_tags":["list",["tag",253,0]],
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
      "setup_tags":["list",["tag",253,0]],
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
      "arg0":["macro",25],
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
      "arg0":["macro",32],
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
      "arg0":["macro",25],
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
      "arg0":["macro",39],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",39],
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
      "arg0":["macro",25],
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
    [["if",0,1],["add",13,7]],
    [["if",1,2],["add",14,153]],
    [["if",3],["add",15,86]],
    [["if",5],["unless",4],["add",16]],
    [["if",1,6],["add",17]],
    [["if",1,7],["add",18]],
    [["if",1,10],["add",19]],
    [["if",1,11],["add",20]],
    [["if",1,12],["add",21]],
    [["if",1,13],["add",22,146]],
    [["if",1,14],["add",23]],
    [["if",15,16],["add",24]],
    [["if",16,17],["add",25]],
    [["if",1,18],["add",26]],
    [["if",1,19],["add",26]],
    [["if",1,20],["add",26]],
    [["if",1,21],["add",26]],
    [["if",1,22],["add",26]],
    [["if",1,23],["add",26]],
    [["if",1,24],["add",27]],
    [["if",1,25],["add",27]],
    [["if",1,26],["add",27]],
    [["if",3,27],["add",28,69]],
    [["if",16,28],["add",29,70]],
    [["if",1,29],["add",30,146]],
    [["if",1],["unless",29,30,31,32,33,34,35,36,37,38],["add",31,74,79,80,81,82,147,151,152,159,162,167,189,230,231,232,233,244,252]],
    [["if",1,39],["add",32,67]],
    [["if",1,40],["add",32]],
    [["if",1,41],["add",32]],
    [["if",1,42],["add",33,55]],
    [["if",1,43],["add",34,58]],
    [["if",1,44],["add",35]],
    [["if",1,45],["add",36]],
    [["if",1,48],["add",37]],
    [["if",1,49],["add",38]],
    [["if",1,50],["add",39]],
    [["if",1,51],["add",40,1]],
    [["if",1,52],["add",41]],
    [["if",1,47,53],["add",41]],
    [["if",47,54,55,56],["add",42]],
    [["if",1,47],["add",43,185,187,0,202,12,207,236,239]],
    [["if",47,55,57,58],["add",44,54,188,193,194,197,203,204,209,234]],
    [["if",1,59],["add",45]],
    [["if",1,60],["add",45]],
    [["if",1,61],["add",45,46,47,48,50,51,53]],
    [["if",1,62],["add",45,48,50,53]],
    [["if",1,63],["add",45,48]],
    [["if",1,64],["add",45,46]],
    [["if",1,65],["add",45,53]],
    [["if",1,66],["add",46]],
    [["if",1,67],["add",47]],
    [["if",1,68],["add",48]],
    [["if",1,69],["add",48]],
    [["if",1,70],["add",48]],
    [["if",1,71],["add",48]],
    [["if",1,72],["add",49]],
    [["if",1,73],["add",49]],
    [["if",1,74],["add",49]],
    [["if",1,75],["add",49,51]],
    [["if",1,76],["add",49]],
    [["if",1,77],["add",49]],
    [["if",1,78],["add",49]],
    [["if",1,79],["add",49]],
    [["if",1,80],["add",49]],
    [["if",1,81],["add",49]],
    [["if",1,82],["add",49]],
    [["if",1,83],["add",49]],
    [["if",1,84],["add",49]],
    [["if",1,85],["add",49]],
    [["if",1,86],["add",49]],
    [["if",1,87],["add",49]],
    [["if",1,88],["add",49]],
    [["if",1,89],["add",49]],
    [["if",1,90],["add",50]],
    [["if",1,91],["add",50]],
    [["if",1,92],["add",50,53]],
    [["if",1,93],["add",50]],
    [["if",1,94],["add",50,53]],
    [["if",1,95],["add",50,51]],
    [["if",1,96],["add",50]],
    [["if",1,97],["add",50]],
    [["if",1,98],["add",50,51,53]],
    [["if",1,99],["add",50]],
    [["if",1,100],["add",50,53]],
    [["if",1,101],["add",50,53]],
    [["if",1,102],["add",50,221]],
    [["if",1,103],["add",50]],
    [["if",1,104],["add",50,53]],
    [["if",1,105],["add",50]],
    [["if",1,106],["add",50,53]],
    [["if",1,107],["add",50,53]],
    [["if",1,108],["add",50]],
    [["if",1],["unless",109,110],["add",50],["block",183,184]],
    [["if",1,111],["add",50]],
    [["if",1,112],["add",50]],
    [["if",1,113],["add",50]],
    [["if",1,114],["add",50]],
    [["if",1,115],["add",50]],
    [["if",1,116],["add",50,53]],
    [["if",1,117],["add",51]],
    [["if",1,118],["add",51]],
    [["if",1,119],["add",51]],
    [["if",55,120,121],["add",52]],
    [["if",1,122],["add",53]],
    [["if",1,123],["add",53]],
    [["if",1,124],["add",53]],
    [["if",1,125],["add",53]],
    [["if",1,126],["add",53]],
    [["if",1,127],["add",53]],
    [["if",1,128],["add",53]],
    [["if",1,129],["add",53]],
    [["if",1,130],["add",56]],
    [["if",1,131],["add",57,59,60]],
    [["if",55,132,133],["add",61,62]],
    [["if",55,134,135],["add",63,64]],
    [["if",47,54,55,136],["add",65,66]],
    [["if",137,138],["add",68]],
    [["if",3,139],["add",71,196]],
    [["if",138,140],["add",72]],
    [["if",138,141],["add",73]],
    [["if",138,144],["add",75]],
    [["if",16,143],["add",76,180],["block",74]],
    [["if",3,142],["add",77,195],["block",74]],
    [["if",1,145],["unless",146,147,148,149,150],["add",78,146]],
    [["if",29,138,151,152,153],["add",83]],
    [["if",29,138,154],["add",84]],
    [["if",29,138,155,156,157],["add",85]],
    [["if",16],["add",87,160,168,177,251]],
    [["if",138,158,159],["add",88]],
    [["if",138,159,160],["add",89]],
    [["if",162],["unless",161],["add",90]],
    [["if",55,164,165,166],["add",91]],
    [["if",47,55,167,168],["add",92]],
    [["if",47,55,169,170],["add",93]],
    [["if",47,55,171,172],["add",94]],
    [["if",1,173],["add",95]],
    [["if",1,174],["add",96]],
    [["if",1,175],["add",97]],
    [["if",1,176],["add",98]],
    [["if",1,177],["add",99]],
    [["if",138,178,179],["add",100]],
    [["if",138,180,181],["add",101]],
    [["if",1],["add",102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,130,131,132,133,134,136,137,138,139,140,141,143,144,158,192,199,211,247,10,181]],
    [["if",1,182],["add",128]],
    [["if",183],["add",129]],
    [["if",1,184,185],["add",135]],
    [["if",1,186],["add",142]],
    [["if",1,187],["add",145]],
    [["if",3,188],["add",145]],
    [["if",1,189],["unless",37,190],["add",11]],
    [["if",189,191],["unless",37,190],["add",11]],
    [["if",1,192],["add",146,156]],
    [["if",1,193],["add",146,155]],
    [["if",1,194],["add",146,155]],
    [["if",1,195],["add",146]],
    [["if",1,190],["unless",200,201,202,203,204,205,206],["add",148]],
    [["if",1,205],["add",148]],
    [["if",1,207],["add",149]],
    [["if",1,208],["add",149]],
    [["if",1,37],["add",150,161,156],["block",147]],
    [["if",1,209],["add",154]],
    [["if",1,210],["add",155]],
    [["if",1,211],["add",157]],
    [["if",1,212],["add",163,166]],
    [["if",1,213],["add",164,165]],
    [["if",1,215],["add",169,172]],
    [["if",1,216],["add",170,171]],
    [["if",1,217],["add",173,176]],
    [["if",1,218],["add",174,175]],
    [["if",3,219],["add",178]],
    [["if",3,220],["add",179]],
    [["if",16,221],["add",182,222,224,227,229,246]],
    [["if",162],["add",183]],
    [["if",222],["add",184]],
    [["if",16,223],["add",186,249]],
    [["if",3,224],["add",190]],
    [["if",16,225],["add",191]],
    [["if",3,226],["add",198,223,225,226,228,245]],
    [["if",3,227],["add",200]],
    [["if",16,228],["add",201]],
    [["if",16,229],["add",205]],
    [["if",3,230],["add",206]],
    [["if",3,231],["add",208]],
    [["if",1,47,232],["add",210]],
    [["if",3,233],["add",212]],
    [["if",16,234],["add",213]],
    [["if",16,235],["add",214]],
    [["if",3,236],["add",215]],
    [["if",16,237],["add",216]],
    [["if",3,238],["add",217]],
    [["if",3,239],["add",218]],
    [["if",16,240],["add",219]],
    [["if",241,242,243],["add",220]],
    [["if",1,244,245],["add",235]],
    [["if",246,247],["add",237]],
    [["if",1,248],["add",238,250]],
    [["if",138,249,250,251],["add",240]],
    [["if",1,252],["add",241]],
    [["if",1,253],["add",241]],
    [["if",16,254],["add",242]],
    [["if",3,255],["add",3]],
    [["if",16,256],["add",4]],
    [["if",1,257],["add",243]],
    [["if",16,258],["add",2]],
    [["if",1,259],["add",9,8]],
    [["if",246,260],["add",248]],
    [["if",1,261],["add",253]],
    [["if",3,262],["add",254]],
    [["if",16,263],["add",255]],
    [["if",3,264],["add",5]],
    [["if",16,265],["add",6]],
    [["if",8,9],["block",18]],
    [["if",1,46,47],["block",36,37,38,39,40]],
    [["if",1,8],["block",74,79,80,81,82,146,151,152,162,167,181,189,192,199,211,230,231,232,233,244,253]],
    [["if",1,163],["block",90]],
    [["if",1,196],["block",147]],
    [["if",197],["block",147,161]],
    [["if",1,198],["block",147,161]],
    [["if",1,199],["block",147]],
    [["if",1,214],["block",167]]]
},
"runtime":[[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__hjtc","__crto","__twitter_website_tag","__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={vg:!0},ja={};try{ja.__proto__=ia;ha=ja.vg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.li=b.prototype},ma=this||self,qa=function(a){if(a&&a!=ma)return na(a.document);null===oa&&(oa=na(ma.document));return oa},sa=/^[\w+/_-]+[=]{0,2}$/,oa=null,na=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ua=function(a,b){function c(){}c.prototype=b.prototype;a.li=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gi=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},xa=function(a){return a};var ya=function(a,b){this.a=a;this.i=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.B={};this.m=!1;this.F={}};Aa.prototype.get=function(a){return this.B["dust."+a]};Aa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Aa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Aa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else za(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.uc=function(){for(var a=Ba(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Da=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={Mh:function(f){c=f},We:function(){c&&a(c,1)},Oh:function(f){d=f},Ia:function(f){d&&a(d,f)},ii:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},lh:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},Tg:a};e.onFnConsume=e.Mh;e.consumeFn=e.We;e.onStorageConsume=e.Oh;e.consumeStorage=e.Ia;e.setMax=e.ii;e.getConsumed=e.lh;e.reset=e.reset;e.consume=e.Tg;return e};var Ea=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Aa;this.a=this.B=void 0};Ea.prototype.add=function(a,b){Fa(this,a,b,!1)};var Fa=function(a,b,c,d){if(!a.i.m)if(a.F.Ia(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ea.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ia(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ea.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ea.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ga=function(a){var b=new Ea(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ha=function(){},Ia=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},Ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},A=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},La=function(a,b){if(a&&Ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ma=function(a,b){if(!Ja(a)||
!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Oa=function(a,b){for(var c=new Na,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Qa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Sa=function(a){return Math.round(Number(a))||0},Ta=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ua=function(a){var b=[];if(Ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Va=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Wa=function(){return(new Date).getTime()},Na=function(){this.prefix="gtm.";this.values={}};Na.prototype.set=function(a,b){this.values[this.prefix+a]=b};Na.prototype.get=function(a){return this.values[this.prefix+a]};
var Xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},db=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},eb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},gb=function(a,b){var c=D;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=A(b,d))return}return d},
ib=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},jb=function(a){var b=[];Pa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var kb=function(a,b){Aa.call(this);this.a=a;this.P=b};la(kb,Aa);kb.prototype.toString=function(){return this.a};kb.prototype.uc=function(){return new k(Ba(this))};kb.prototype.i=function(a,b){a.F.We();return this.P.apply(lb(this,a),Array.prototype.slice.call(arguments,1))};var lb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ka(d)?mb(e,d):d};c.prototype.F=function(d){return nb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
kb.prototype.La=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var nb=function(a,b){for(var c,d=0;d<b.length&&!(c=mb(a,b[d]),c instanceof ya);d++);return c},mb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof kb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ob=function(){Aa.call(this)};la(ob,Aa);ob.prototype.uc=function(){return new k(Ba(this))};var pb={control:function(a,b){return new ya(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ia(a.length+f.length);return new kb(a,function(){return function(g){var h=Ga(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),r=
0;r<p;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=nb(h,f);if(t instanceof ya)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ia(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ia(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new ob,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ia(g);c.set(e,f)}return c},undefined:function(){}};var qb=function(){this.m=Da();this.a=new Ea(this.m)},rb=function(a,b,c){var d=new kb(b,c);d.m=!0;a.a.set(b,d)};qb.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};qb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=mb(this.a,arguments[c]);return b};qb.prototype.B=function(a,b){var c=Ga(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=mb(c,arguments[e]);return d};var sb=function(a){if(a instanceof sb)return a;this.qa=a};sb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var tb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ub=function(a){if(null==a)return String(a);var b=tb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},vb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},wb=function(a){if(!a||"object"!=ub(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!vb(a,"constructor")&&!vb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||vb(a,b)},F=function(a,b){var c=b||("array"==ub(a)?[]:{}),d;for(d in a)if(vb(a,d)){var e=a[d];"array"==ub(e)?("array"!=ub(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):wb(e)?(wb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var yb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=A(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.uc(),r=0;r<p.length();r++)m[p.get(r)]=g(h.get(p.get(r)));return m}if(h instanceof ob){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof kb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=xb(u[v],b,!!c);var x=b?b.F:Da(),y=new Ea(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},xb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=A(d,
h);if(-1<l)return e[l];if(Ka(h)||Qa(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(wb(h)){var r=new ob;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new kb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=yb(this.a(v[x]),b,!!c);return g((0,this.m.P)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;};return g(a)};var zb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ab=function(a){if(void 0===a||Ka(a)||wb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Bb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=zb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=zb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Cb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Db=new ya("break"),Eb=new ya("continue"),Fb=function(a,b){return this.a(a)+this.a(b)},Jb=function(a,b){return this.a(a)&&this.a(b)},Kb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=A(Cb,b))return xb(a[b].apply(a,zb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof kb){var e=zb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=A(Bb.supportedMethods,b)){var f=zb(c);f.unshift(this.m);
return Bb[b].apply(a,f)}}if(a instanceof kb||a instanceof ob){if(a.has(b)){var g=a.get(b);if(g instanceof kb){var h=zb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof kb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,zb(c))}if(a instanceof sb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Lb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Mb=function(a){var b=Ga(this.m),c=nb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Nb=function(){return Db},Ob=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ya)return d}},Pb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Fa(b,d,e,
!0)}}},Qb=function(){return Eb},Rb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Sb=function(a,b){return this.a(a)/this.a(b)},Tb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof sb,d=b instanceof sb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Ub=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Vb(a,b,c){if("string"===typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=nb(e,c);if(f instanceof ya){if("break"===f.a)break;if("return"===f.a)return f}}else if(b instanceof ob||b instanceof k||b instanceof kb)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var m=a(g.get(l)),p=nb(m,c);if(p instanceof ya){if("break"===p.a)break;if("return"===p.a)return p}}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);f.add(a,e);return f},b,c)},$b=function(a,b,c,d){function e(p,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,p.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ga(g);for(e(g,h);mb(h,b);){var l=nb(h,d);if(l instanceof ya){if("break"===l.a)break;if("return"===l.a)return l}var m=Ga(g);e(h,m);mb(m,c);h=m}},ac=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");
return b.get(a)},bc=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof ob||a instanceof k||a instanceof kb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof sb)return;return c},cc=function(a,b){return this.a(a)>this.a(b)},dc=function(a,b){return this.a(a)>=this.a(b)},ec=function(a,b){a=this.a(a);b=this.a(b);a instanceof sb&&(a=a.qa);b instanceof sb&&(b=b.qa);
return a===b},fc=function(a,b){return!ec.call(this,a,b)},gc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ya)return e},hc=function(a,b){return this.a(a)<this.a(b)},ic=function(a,b){return this.a(a)<=this.a(b)},jc=function(a,b){return this.a(a)%this.a(b)},kc=function(a,b){return this.a(a)*this.a(b)},mc=function(a){return-this.a(a)},nc=function(a){return!this.a(a)},oc=function(a,b){return!Tb.call(this,a,b)},pc=function(){return null},qc=function(a,b){return this.a(a)||
this.a(b)},rc=function(a,b){var c=this.a(a);this.a(b);return c},sc=function(a){return this.a(a)},tc=function(a){return Array.prototype.slice.apply(arguments)},uc=function(a){return new ya("return",this.a(a))},vc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof kb||a instanceof k||a instanceof ob)&&a.set(b,c);return c},wc=function(a,b){return this.a(a)-this.a(b)},xc=function(a,b,c){a=this.a(a);var d=
this.a(b),e=this.a(c);if(!Ka(d)||!Ka(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ya){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof ya&&("return"===f.a||"continue"===f.a)))return f},yc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},zc=function(a){a=this.a(a);return a instanceof kb?"function":typeof a},
Ac=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Bc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof ya){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},Cc=function(a){return~Number(this.a(a))},Ec=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))>>
Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Hc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Ic=function(a,b){return Number(this.a(a))^Number(this.a(b))},Jc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Lc=function(){this.a=new qb;Kc(this)};Lc.prototype.oc=function(a){return Mc(this.a.i(a))};
var Oc=function(a,b){return Mc(Nc.a.B(a,b))},Kc=function(a){var b=function(d,e){var f=a.a,g=String(e);pb.hasOwnProperty(d)&&rb(f,g||d,pb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){rb(a.a,String(d),e)};c(0,Fb);c(1,Jb);c(2,Kb);c(3,Lb);c(53,Mb);c(4,Nb);c(5,Ob);c(52,Pb);c(6,Qb);c(9,Ob);c(50,Rb);c(10,Sb);c(12,Tb);c(13,Ub);c(47,Wb);c(54,Xb);c(55,Yb);c(63,$b);c(15,ac);c(16,bc);c(17,bc);c(18,cc);c(19,dc);c(20,ec);c(21,fc);c(22,gc);c(23,hc);c(24,ic);c(25,jc);
c(26,kc);c(27,mc);c(28,nc);c(29,oc);c(45,pc);c(30,qc);c(32,rc);c(33,rc);c(34,sc);c(35,sc);c(46,tc);c(36,uc);c(43,vc);c(37,wc);c(38,xc);c(39,yc);c(40,zc);c(41,Ac);c(42,Bc);c(58,Cc);c(57,Ec);c(60,Fc);c(61,Gc);c(56,Hc);c(62,Ic);c(59,Jc)},Qc=function(){var a=Nc,b=Pc();rb(a.a,"require",b)},Rc=function(a,b){a.a.a.P=b};
function Mc(a){if(a instanceof ya||a instanceof kb||a instanceof k||a instanceof ob||a instanceof sb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Sc=[],Tc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Uc=function(a){return Tc[a]},Vc=/[\x00\x22\x26\x27\x3c\x3e]/g;
Sc[2]=function(a){return String(a).replace(Vc,Uc)};Sc[3]=function(a){return String(a).replace(Vc,Uc)};var Zc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,$c={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ad=function(a){return $c[a]};Sc[7]=function(a){return String(a).replace(Zc,ad)};
Sc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Zc,ad)+"'"}};var gd=/['()]/g,hd=function(a){return"%"+a.charCodeAt(0).toString(16)};Sc[12]=function(a){var b=
encodeURIComponent(String(a));gd.lastIndex=0;return gd.test(b)?b.replace(gd,hd):b};var id=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,jd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ld=function(a){return jd[a]};var md=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;Sc[14]=function(a){var b=String(a);return md.test(b)?b.replace(id,ld):"#zSoyz"};Sc[16]=function(a){return a};var nd;
var od=[],pd=[],qd=[],rd=[],sd=[],td={},ud,vd,wd,xd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},yd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=td[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Te&&b.Te(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):nd(c,e,b)},Ad=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=zd(a[e],b,c));return d},Bd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=td[b];return c?c.priorityOverride||0:0},zd=function(a,b,c){if(Ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(zd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=od[f];if(!g||b.td(g))return;c[f]=!0;try{var h=Ad(g,b,c);h.vtp_gtmEventId=b.id;d=yd(h,b);wd&&(d=wd.Vg(d,h))}catch(y){b.ff&&b.ff(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[zd(a[l],b,c)]=zd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=zd(a[p],b,c);vd&&(m=m||r===vd.Zb);d.push(r)}return vd&&m?vd.Yg(d):d.join("");case "escape":d=zd(a[1],b,c);if(vd&&Ka(a[1])&&"macro"===a[1][0]&&vd.yh(a))return vd.Th(d);d=String(d);for(var t=2;t<a.length;t++)Sc[a[t]]&&(d=Sc[a[t]](d));return d;case "tag":var q=a[1];if(!rd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{Ze:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Cd(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Cd=function(a,b,c){try{return ud(Ad(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Dd=function(){var a=function(b){return{toString:function(){return b}}};return{xf:a("consent"),Sd:a("convert_case_to"),Td:a("convert_false_to"),Ud:a("convert_null_to"),Vd:a("convert_true_to"),Wd:a("convert_undefined_to"),yi:a("debug_mode_metadata"),Ha:a("function"),lg:a("instance_name"),mg:a("live_only"),og:a("malware_disabled"),pg:a("metadata"),Bi:a("original_vendor_template_id"),rg:a("once_per_event"),Je:a("once_per_load"),Ne:a("setup_tags"),Oe:a("tag_id"),Pe:a("teardown_tags")}}();var Ed=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Ed,Error);function Fd(a,b){if(Ka(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Fd(a[c],b[c])}};var Gd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Gd,Error);var Hd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Jd=function(){return function(a,b){a instanceof Gd||(a=new Gd(a,Id));b&&a.a.push(b);throw a;}};function Id(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Kd=null,Nd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Kd=Ld(a);for(var e=0;e<pd.length;e++){var f=pd[e],g=Md(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<rd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Md=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Kd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ld=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Cd(qd[c],a));return b[c]}};var Od={Vg:function(a,b){b[Dd.Sd]&&"string"===typeof a&&(a=1==b[Dd.Sd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Dd.Ud)&&null===a&&(a=b[Dd.Ud]);b.hasOwnProperty(Dd.Wd)&&void 0===a&&(a=b[Dd.Wd]);b.hasOwnProperty(Dd.Vd)&&!0===a&&(a=b[Dd.Vd]);b.hasOwnProperty(Dd.Td)&&!1===a&&(a=b[Dd.Td]);return a}};var Pd=function(){this.a={}};function Qd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Ed(c,d,g);}}function Rd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Qd(e,b,d,g);Qd(f,b,d,g)}}}};var Vd=function(a){var b=Sd.C,c=this;this.i=new Pd;this.a={};var d={},e=Rd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Pa(a,function(f,g){var h={};Pa(g,function(l,m){var p=Td(l,m);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,m){var p=h[l];if(!p)throw Ud(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);p.apply(void 0,r);e.apply(void 0,r)}})},Xd=function(a){return Wd.a[a]||
function(){}};function Td(a,b){var c=xd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Ud;try{return yd(c)}catch(d){return{assert:function(e){throw new Ed(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Ud(a,b,c){return new Ed(a,b,c)};var Yd=!1;var Zd={};Zd.si=Ta('');Zd.eh=Ta('');var $d=Yd,ae=Zd.eh,be=Zd.si;
var te=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ue=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;te(b,"/*")&&(b=b.slice(0,-2));te(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ve=/^[a-z0-9-]+$/i,we=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ye=function(a,b){var c;if(!(c=!xe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ve.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!we.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),r=p.slice(0,p.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=ue(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},xe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ze,Ae=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Ig&&(l["fix_"+m]=!0),l.af=l.af||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=h.indexOf("--\x3e");if(0<=q)return{content:h.substr(4,q),length:q+3}},endTag:function(){var q=h.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=h.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,Y:q.Y,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=h.match(c);if(q){var u={};q[2].replace(e,function(v,x,y,w,B){var z=y||w||B||f.test(x)&&x||null,C=document.createElement("div");C.innerHTML=z;u[x]=C.textContent||C.innerText||z});return{tagName:q[1],Y:u,Gc:!!q[3],length:q[0].length}}},chars:function(){var q=
h.indexOf("<");return{length:0<=q?q:h.length}}},t=function(){for(var q in p)if(p[q].test(h)){var u=r[q]();return u?(u.type=u.type||q,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.af&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ef=function(){return this[this.length-1]};v.vd=function(C){var E=this.ef();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};v.Ug=
function(C){for(var E=0,G;G=this[E];E++)if(G.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Gc=q.test(C.tagName)||C.Gc);return C},y=t,w=function(){h="</"+v.pop().tagName+">"+h},B={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&v.vd("TABLE")?(h="<TBODY>"+h,z()):l.Li&&u.test(E)&&v.Ug(E)?v.vd(E)?w():(h="</"+C.tagName+">"+h,z()):C.Gc||v.push(C)},endTag:function(C){v.ef()?l.gh&&!v.vd(C.tagName)?w():v.pop():l.gh&&(y(),z())}},z=function(){var C=h,E=x(y());h=C;if(E&&
B[E.type])B[E.type](E)};t=function(){z();return x(y())}}();return{append:function(q){h+=q},Zh:t,Pi:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=h;h="";return q},Qi:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Si="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Ri=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);ze=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,t){d(t,
function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var h={zg:a,Ag:a,Bg:a,Cg:a,Jg:a,Kg:function(r){return r},done:a,error:function(r){throw r;},bi:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function r(q,u,v){var x="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,v):
q.removeAttribute(x)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Lb:v.defaultView||v.parentWindow,Wa:v,xc:ze("",{Ig:!0}),fd:[q],Fd:"",Gd:v.createElement(q.nodeName),Ib:[],Oa:[]});r(this.Gd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Oa,arguments);for(var q;!this.kc&&this.Oa.length;)q=this.Oa.shift(),"function"===typeof q?this.Pg(q):this.Pd(q)};t.prototype.Pg=function(q){var u={type:"function",value:q.name||q.toString()};this.Bd(u);q.call(this.Lb,this.Wa);this.hf(u)};
t.prototype.Pd=function(q){this.xc.append(q);for(var u,v=[],x,y;(u=this.xc.Zh())&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.wi(v);x&&this.rh(u);y&&this.sh(u)};t.prototype.wi=function(q){var u=this.Mg(q);u.Re&&(u.rd=this.Fd+u.Re,this.Fd+=u.Xh,this.Gd.innerHTML=u.rd,this.ui())};t.prototype.Mg=function(q){var u=this.fd.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.Y){if(!/^noscript$/i.test(w.tagName)){var B=
u++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==w.Y.id&&"ps-style"!==w.Y.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+B+(w.Gc?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Ti:q,raw:v.join(""),Re:x.join(""),Xh:y.join("")}};t.prototype.ui=function(){for(var q,u=[this.Gd];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.fd[r(q,"id")]=q,r(q,"id",null));var x=q.parentNode&&r(q.parentNode,"proxyof");
x&&this.fd[x].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.rh=function(q){var u=this.xc.clear();u&&this.Oa.unshift(u);q.src=q.Y.src||q.Y.Di;q.src&&this.Ib.length?this.kc=q:this.Bd(q);var v=this;this.vi(q,function(){v.hf(q)})};t.prototype.sh=function(q){var u=this.xc.clear();u&&this.Oa.unshift(u);q.type=q.Y.type||q.Y.TYPE||"text/css";this.xi(q);u&&this.write()};t.prototype.xi=function(q){var u=this.Og(q);this.vh(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Wa.createTextNode(q.content)))};t.prototype.Og=function(q){var u=this.Wa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.Y,function(v,x){u.setAttribute(v,x)});return u};t.prototype.vh=function(q){this.Pd('<span id="ps-style"/>');var u=this.Wa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.Bd=function(q){q.Ph=this.Oa;this.Oa=[];this.Ib.unshift(q)};t.prototype.hf=function(q){q!==this.Ib[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ib.shift(),this.write.apply(this,q.Ph),!this.Ib.length&&this.kc&&(this.Bd(this.kc),this.kc=null))};t.prototype.vi=function(q,u){var v=this.Ng(q),x=this.ki(v),y=this.options.zg;q.src&&(v.src=q.src,this.fi(v,x?y:function(){u();y()}));try{this.uh(v),q.src&&!x||u()}catch(w){this.options.error(w),u()}};t.prototype.Ng=function(q){var u=this.Wa.createElement(q.tagName);d(q.Y,function(v,x){u.setAttribute(v,x)});q.content&&(u.text=q.content);return u};t.prototype.uh=function(q){this.Pd('<span id="ps-script"/>');
var u=this.Wa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.fi=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);u()}})};t.prototype.ki=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.bi&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var x=u.shift(),y;x&&(y=x[x.length-1],y.Ag(),x.stream=t.apply(null,x),y.Bg())}function t(x,y,w){function B(G){G=w.Kg(G);v.write(G);w.Cg(G)}v=new p(x,w);v.id=q++;v.name=w.name||v.id;var z=x.ownerDocument,C={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return B(g(arguments).join(""))},writeln:function(){return B(g(arguments).join("")+"\n")}});var E=v.Lb.onerror||a;v.Lb.onerror=function(G,M,P){w.error({msg:G+
" - "+M+":"+P});E.apply(v.Lb,arguments)};v.write(y,function(){e(z,C);v.Lb.onerror=E;w.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=f(w,h);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Ni?x[0]:x;var B=[x,y,w];x.Sh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};w.Jg(B);u.push(B);v||r();return x.Sh},{streams:{},Oi:u,Fi:p})}();Ae=l.postscribe}})();var Be=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ce={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Be.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof kb?p="Fn":l instanceof k?p="List":l instanceof ob?p="DustMap":
l instanceof sb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Ce[h]||h)+".");}}};function De(a){return""+a}
function Ee(a,b){var c=[];return c};var Fe=function(a,b){var c=new kb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Ge=function(a,b){var c=new ob,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,Fe(a+"_"+d,e)):(Ja(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var He=function(a,b){H(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ob;return d=Ge("AssertApiSubject",c)};var Ie=function(a,b){H(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ob;return d=Ge("AssertThatSubject",c)};function Je(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(yb(arguments[d],c));return xb(a.apply(null,b))}}var Le=function(){for(var a=Math,b=Ke,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Je(a[e].bind(a)))}return c};var Me=function(a){var b;return b};var Ne=function(a){var b;return b};var Oe=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Pe=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Qe=function(a){H(this.i.a,["message:?string"],arguments);};var Re=function(a,b){H(this.i.a,["min:!number","max:!number"],arguments);return Ma(a,b)};var Se=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Hg.apply(null,Array.prototype.slice.call(arguments,1))};var Te=function(){Se(this,"read_container_data");var a=new ob;a.set("containerId",'GTM-HQ4K');a.set("version",'1365');a.set("environmentName",'');a.set("debugMode",$d);a.set("previewMode",be);a.set("environmentMode",ae);a.m=!0;return a};var Ue=function(){return(new Date).getTime()};var Ve=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof kb)return"function";if(a instanceof sb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var We=function(a){function b(c){return function(d){try{return c(d)}catch(e){($d||be)&&a.call(this,e.message)}}}return{parse:b(function(c){return xb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(yb(c))})}};var Xe=function(a){return Sa(yb(a,this.m))};var Ye=function(a){return Number(yb(a,this.m))};var Ze=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var $e=function(a,b,c){var d=null,e=!1;H(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new ob;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof ob&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var Ke="floor ceil round max min abs pow sqrt".split(" ");var af=function(){var a={};return{mh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ji:function(b,c){a[b]=c},reset:function(){a={}}}},bf=function(a,b){H(this.i.a,["apiName:!string","mock:?*"],arguments);};var cf=function(){this.a={};this.i={}};cf.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
cf.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ia(b)?Fe(a,b):Ge(a,b)};
var ef=function(a){var b=df;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ia(b)?Fe("getUserAgent",b):Ge("getUserAgent",b)};function ff(){var a={};return a};var I={vb:"_ee",dd:"_syn",Ei:"_uei",Ci:"_pci",Nc:"event_callback",Vb:"event_timeout",ka:"gtag.config"};I.Da="gtag.get";I.Ca="purchase";I.Rb="refund";I.hb="begin_checkout";I.Pb="add_to_cart";I.Qb="remove_from_cart";I.Gf="view_cart";I.Yd="add_to_wishlist";I.Qa="view_item";I.Jf="view_promotion";I.If="select_promotion";I.Hf="select_item";I.Ic="view_item_list";I.Xd="add_payment_info";I.Ff="add_shipping_info";
I.xa="value_key",I.wa="value_callback";I.fa="allow_ad_personalization_signals";I.Wc="restricted_data_processing";I.ib="allow_google_signals";I.ia="cookie_expires";I.Ub="cookie_update";I.sb="session_duration";I.na="user_properties";I.Ga="transport_url";I.N="ads_data_redaction";I.s="ad_storage";I.M="analytics_storage";I.yf="region";I.zf="wait_for_update";I.Be=[I.Ca,I.Rb,I.hb,I.Pb,I.Qb,I.Gf,I.Yd,I.Qa,I.Jf,I.If,I.Ic,I.Hf,I.Xd,I.Ff];I.Ae=[I.fa,I.ib,I.Ub];I.Ce=[I.ia,I.Vb,I.sb];var gf={},hf=function(a,b){gf[a]=gf[a]||[];gf[a][b]=!0},jf=function(a){for(var b=[],c=gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var kf=function(a){hf("GTM",a)};function lf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,lf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ua(lf,Error);lf.prototype.name="CustomError";var mf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");lf.call(this,d+c[e])};ua(mf,lf);mf.prototype.name="AssertionError";var nf=function(a,b){throw new mf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var of=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},pf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var qf,rf=function(){if(void 0===qf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){ma.console&&ma.console.error(c.message)}qf=a}else qf=a}return qf};var tf=function(a,b){this.a=b===sf?a:""};tf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var sf={};var uf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vf;a:{var wf=ma.navigator;if(wf){var xf=wf.userAgent;if(xf){vf=xf;break a}}vf=""}var yf=function(a){return-1!=vf.indexOf(a)};var Af=function(a,b,c){this.a=c===zf?a:""};Af.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Bf=function(a){if(a instanceof Af&&a.constructor===Af)return a.a;nf("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},zf={},Cf=new Af(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,zf);var Df={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ef=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Bf(Cf);return!c.parentElement}),Ff=function(a,b){if(a.tagName&&Df[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Ef())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Bf(b)};var Gf=function(a){var b=rf(),c=b?b.createHTML(a):a;return new Af(c,null,zf)};var D=window,L=document,Hf=navigator,If=L.currentScript&&L.currentScript.src,Jf=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Kf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=rf(),g=f?f.createScriptURL(a):a;e=new tf(g,sf);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||ma;if(m.Element&&m.Location){h=m;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;nf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof tf&&e.constructor===tf?t=e.a:(nf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=qa(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Kf(d,b);c&&(d.onerror=c);var u=qa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Mf=function(){if(If){var a=If.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Nf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Kf(c,b);void 0!==a&&(c.src=a);return c},Of=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Qf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){D.setTimeout(a,0)},Rf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tf=function(a){var b=L.createElement("div");Ff(b,Gf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Uf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Vf=function(a){Hf.sendBeacon&&Hf.sendBeacon(a)||Of(a)},Wf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Xf={},Yf=function(a){return void 0==Xf[a]?!1:Xf[a]};var Zf=[];function $f(){var a=Jf("google_tag_data",{});a.ics||(a.ics={entries:{},set:ag,update:bg,addListener:cg,notifyListeners:dg,active:!1});return a.ics}
function ag(a,b,c,d,e,f){var g=$f();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&D.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,eg(a),dg(),hf("TAGGING",2))},f)}}}
function bg(a,b){var c=$f();c.active=!0;if(void 0!=b){var d=fg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=fg(a);f.quiet?(f.quiet=!1,eg(a)):g!==d&&eg(a)}}function cg(a,b){Zf.push({Ve:a,hh:b})}function eg(a){for(var b=0;b<Zf.length;++b){var c=Zf[b];Ka(c.Ve)&&-1!==c.Ve.indexOf(a)&&(c.lf=!0)}}function dg(a){for(var b=0;b<Zf.length;++b){var c=Zf[b];if(c.lf){c.lf=!1;try{c.hh({Ue:a})}catch(d){}}}}
var fg=function(a){var b=$f().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},gg=function(a){return!($f().entries[a]||{}).quiet},hg=function(){return Yf("gtag_cs_api")?$f().active:!1},ig=function(a,b){$f().addListener(a,b)},jg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!gg(b[e]))return!0;return!1}if(c()){var d=!1;ig(b,function(e){d||c()||(d=!0,a(e))})}else a({})},kg=function(a,b){if(!1===fg(b)){var c=!1;ig([b],function(d){!c&&fg(b)&&(a(d),c=!0)})}};var lg=[I.s,I.M],mg=function(a){var b=a[I.yf];b&&kf(40);var c=a[I.zf];c&&kf(41);for(var d=Ka(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<lg.length;f++){var g=lg[f],h=a[lg[f]],l=d[e];$f().set(g,h,l,"","",c)}},ng=function(a,b){for(var c=0;c<lg.length;c++){var d=lg[c],e=a[lg[c]];$f().update(d,e)}$f().notifyListeners(b)},og=function(a){var b=fg(a);return void 0!=b?b:!0},pg=function(){for(var a=[],b=0;b<lg.length;b++){var c=fg(lg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},qg=function(a,b){jg(a,b)};var sg=function(a){return rg?L.querySelectorAll(a):null},tg=function(a,b){if(!rg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ug=!1;if(L.querySelectorAll)try{var vg=L.querySelectorAll(":root");vg&&1==vg.length&&vg[0]==L.documentElement&&(ug=!0)}catch(a){}var rg=ug;var Sd={},O=null,Jg=Math.random();Sd.C="GTM-HQ4K";Sd.cc="al2";Sd.Ai="";var Kg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Lg={__paused:!0,__tg:!0},Mg;for(Mg in Kg)Kg.hasOwnProperty(Mg)&&(Lg[Mg]=!0);var Ng="www.googletagmanager.com/gtm.js";
var Og=Ng,Pg=Ta(""),Qg=null,Rg=null,Sg="//www.googletagmanager.com/a?id="+Sd.C+"&cv=1365",Tg={},Ug={},Vg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Wg={},Xg=new Na,Yg={},Zg={},bh={name:"dataLayer",set:function(a,b){F(ib(a,b),Yg);$g()},get:function(a){return ah(a,2)},reset:function(){Xg=new Na;Yg={};$g()}},ah=function(a,b){return 2!=b?Xg.get(a):ch(a.split("."))},ch=function(a){for(var b=Yg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},dh=function(a,b){Zg.hasOwnProperty(a)||(Xg.set(a,b),F(ib(a,b),Yg),$g())},$g=function(a){Pa(Zg,function(b,c){Xg.set(b,c);F(ib(b,void 0),Yg);F(ib(b,c),Yg);a&&delete Zg[b]})},
eh=function(a,b,c){Wg[a]=Wg[a]||{};var d=1!==c?ch(b.split(".")):Xg.get(b);"array"===ub(d)||"object"===ub(d)?Wg[a][b]=F(d):Wg[a][b]=d},fh=function(a,b){if(Wg[a])return Wg[a][b]},gh=function(a,b){Wg[a]&&delete Wg[a][b]};var jh={},kh=function(a,b){if(D._gtmexpgrp&&D._gtmexpgrp.hasOwnProperty(a))return D._gtmexpgrp[a];void 0===jh[a]&&(jh[a]=Math.floor(Math.random()*b));return jh[a]};var lh=/:[0-9]+$/,mh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ph=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=nh(a.protocol)||nh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(lh,"").toLowerCase());return oh(a,b,c,d,e)},oh=function(a,b,c,d,e){var f,g=nh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=qh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(lh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=A(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=mh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},nh=function(a){return a?a.replace(":",
"").toLowerCase():""},qh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},rh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(lh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},sh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=rh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function th(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var vh=function(a,b,c,d){return uh(d)?th(a,String(b||document.cookie),c):[]},yh=function(a,b,c,d,e){if(uh(e)){var f=wh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=xh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=xh(f,function(g){return g.Fb},c);return f[0]?f[0].id:void 0}}};function zh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=vh(b,f,!1,d).indexOf(c)}
var Dh=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!uh(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ah(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Jh);g=e(g,"samesite",
c.di);c.gi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Bh(),r=void 0,t=!1,q=0;q<p.length;++q){var u="none"!==p[q]?p[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){r=x;continue}t=!0;if(!Ch(u,c.path)&&zh(v,a,b,c.Ka))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Ch(m,c.path)?1:zh(g,a,b,c.Ka)?0:1},Eh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Dh(a,b,c)};
function xh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function wh(a,b,c){for(var d=[],e=vh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Fb:1*l[1]||1}))}}return d}
var Ah=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Fh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Gh=/(^|\.)doubleclick\.net$/i,Ch=function(a,b){return Gh.test(document.location.hostname)||"/"===b&&Fh.test(a)},Bh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Gh.test(e)||Fh.test(e)||a.push("none");
return a},uh=function(a){if(!Yf("gtag_cs_api")||!a||!hg())return!0;if(!gg(a))return!1;var b=fg(a);return null==b?!0:!!b};var Hh=function(){for(var a=Hf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Wa()/1E3)].join(".")},Kh=function(a,b,c,d,e){var f=Ih(b);return yh(a,f,Jh(c),d,e)},Lh=function(a,b,c,d){var e=""+Ih(c),f=Jh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ih=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Jh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Mh(a,b,c){var d,e=a.Eb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Wa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Nh=["1"],Oh={},Sh=function(a){var b=Ph(a.prefix);Oh[b]||Qh(b,a.path,a.domain)||(Rh(b,Hh(),a),Qh(b,a.path,a.domain))};function Rh(a,b,c){var d=Lh(b,"1",c.domain,c.path),e=Mh(c);e.Ka="ad_storage";Eh(a,d,e)}function Qh(a,b,c){var d=Kh(a,b,c,Nh,"ad_storage");d&&(Oh[a]=d);return d}function Ph(a){return(a||"_gcl")+"_au"};function Th(){for(var a=Uh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Vh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Uh,Wh;function Xh(a){Uh=Uh||Vh();Wh=Wh||Th();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(p=64));b.push(Uh[l],Uh[m],Uh[p],Uh[r])}return b.join("")}
function Yh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Wh[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Uh=Uh||Vh();Wh=Wh||Th();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Zh;var ci=function(){var a=$h,b=ai,c=bi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Pf(L,"mousedown",d);Pf(L,"keyup",d);Pf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},di=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bi().decorators.push(f)},ei=function(a,b,c){for(var d=bi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Za(e,g.callback())}}return e},bi=function(){var a=Jf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var fi=/(.*?)\*(.*?)\*(.*)/,gi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hi=/^(?:www\.|m\.|amp\.)+/,ii=/([^?#]+)(\?[^#]*)?(#.*)?/;function ji(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var li=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xh(String(d))))}var e=b.join("*");return["1",ki(e),e].join("*")},ki=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Zh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Zh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Zh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ni=function(){return function(a){var b=rh(D.location.href),c=b.search.replace("?",""),d=mh(c,"_gl",!1,!0)||"";a.query=mi(d)||{};var e=ph(b,"fragment").match(ji("_gl"));a.fragment=mi(e&&e[3]||"")||{}}},oi=function(a){var b=ni(),c=bi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Za(d,e.query),a&&Za(d,e.fragment));return d},
mi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=fi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=0;p<b;++p)if(m===ki(h,p)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Yh(t[q+1]);return r}}}}catch(u){}};
function pi(a,b,c,d){function e(p){var r=p,t=ji(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}p=q;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=ii.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function qi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ei(b,1,c),e=ei(b,2,c),f=ei(b,3,c);if(db(d)){var g=li(d);c?ri("_gl",g,a):si("_gl",g,a,!1)}if(!c&&db(e)){var h=li(e);si("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){si(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){ri(m,p,r);break a}}"string"==typeof r&&pi(m,p,r,void 0)}}
function si(a,b,c,d){if(c.href){var e=pi(a,b,c.href,void 0===d?!1:d);uf.test(e)&&(c.href=e)}}
function ri(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pi(a,b,c.action);uf.test(m)&&(c.action=m)}}}
var $h=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qi(e,e.hostname)}}catch(g){}},ai=function(a){try{if(a.action){var b=ph(rh(a.action),"host");qi(a,b)}}catch(c){}},ti=function(a,b,c,d){ci();di(a,b,"fragment"===c?2:1,!!d,!1)},ui=function(a,b){ci();di(a,[oh(D.location,"host",!0)],b,!0,!0)},vi=function(){var a=L.location.hostname,b=gi.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(hi,""),l=e.replace(hi,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},wi=function(a,b){return!1===a?!1:a||b||vi()};var xi=/^\w+$/,yi=/^[\w-]+$/,zi=/^~?[\w-]+$/,Ai={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bi=function(){if(!Yf("gtag_cs_api")||!hg())return!0;var a=fg("ad_storage");return null==a?!0:!!a},Ci=function(a,b){gg("ad_storage")?Bi()?a():kg(a,"ad_storage"):b?hf("TAGGING",3):jg(function(){Ci(a,!0)},["ad_storage"])},Fi=function(a){var b=[];if(!L.cookie)return b;var c=vh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Di(c[d]);e&&-1===A(b,e)&&b.push(e)}return Ei(b)};
function Gi(a){return a&&"string"==typeof a&&a.match(xi)?a:"_gcl"}
var Ii=function(){var a=rh(D.location.href),b=ph(a,"query",!1,void 0,"gclid"),c=ph(a,"query",!1,void 0,"gclsrc"),d=ph(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||mh(e,"gclid",!1,void 0);c=c||mh(e,"gclsrc",!1,void 0)}return Hi(b,c,d)},Hi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ki=function(a){var b=Ii();Ci(function(){Ji(b,a)})};
function Ji(a,b,c){function d(l,m){var p=Li(l,e);p&&Eh(p,m,f)}b=b||{};var e=Gi(b.prefix);c=c||Wa();var f=Mh(b,c,!0);f.Ka="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Vi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ni=function(a,b){var c=oi(!0);Ci(function(){for(var d=Gi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Ai[f]){var g=Li(f,d),h=c[g];if(h){var l=Math.min(Mi(h),Wa()),m;b:{for(var p=l,r=vh(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mi(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Mh(b,l,!0);q.Ka="ad_storage";Eh(g,h,q)}}}}Ji(Hi(c.gclid,c.gclsrc),b)})},Li=function(a,b){var c=Ai[a];if(void 0!==c)return b+c},Mi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Di(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Oi=function(a,b,c,d,e){if(Ka(b)){var f=Gi(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Li(a[l],f);if(m){var p=vh(m,L.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Ci(function(){ti(g,b,c,d)})}},Ei=function(a){return a.filter(function(b){return zi.test(b)})},Pi=function(a,b){for(var c=Gi(b.prefix),d={},e=0;e<a.length;e++)Ai[a[e]]&&(d[a[e]]=Ai[a[e]]);Ci(function(){Pa(d,function(f,g){var h=vh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Mi(l),
p={};p[f]=[Di(l)];Ji(p,b,m)}})})};function Qi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ri=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(hg()){var c=Ii();if(Qi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ui(function(){return d},3);ui(function(){var e={};return e._up="1",e},1)}}},Si=function(){var a;if(Bi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Md:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Md]||(g[b[h].Md]=[]),g[b[h].Md].push({timestamp:l[1],jh:l[2]}))}a=g}else a={};return a};var Ti=/^\d+\.fls\.doubleclick\.net$/;function Ui(a,b){gg(I.s)?og(I.s)?a():kg(a,I.s):b?kf(42):qg(function(){Ui(a,!0)},[I.s])}function Vi(a){var b=rh(D.location.href),c=ph(b,"host",!1);if(c&&c.match(Ti)){var d=ph(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wi(a,b,c){if("aw"==a||"dc"==a){var d=Vi("gcl"+a);if(d)return d.split(".")}var e=Gi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!og(I.s)&&c,g;g=Ii()[a]||[];if(0<g.length)return f?["0"]:g}var h=Li(a,e);return h?Fi(h):[]}
var Xi=function(a){var b=Vi("gac");if(b)return!og(I.s)&&a?"0":decodeURIComponent(b);var c=Si(),d=[];Pa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].jh);g=Ei(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Yi=function(a,b){var c=Ii().dc||[];Ui(function(){Sh(b);var d=Oh[Ph(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Vf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=Ph(b.prefix),p=Oh[m];p&&Rh(m,p,b)}})};var Zi=/[A-Z]+/,$i=/\s/,aj=function(a){if(n(a)&&(a=Va(a),!$i.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Zi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},cj=function(a){for(var b={},c=0;c<a.length;++c){var d=aj(a[c]);d&&(b[d.id]=d)}bj(b);var e=[];Pa(b,function(f,g){e.push(g)});return e};
function bj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var dj=function(){var a=!1;return a};var fj=function(a,b,c,d){return(2===ej()||d||"http:"!=D.location.protocol?a:b)+c},ej=function(){var a=Mf(),b;if(1===a)a:{var c=Og;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tj=function(a){return og(I.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=sh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},uj=function(){var a;if(!(a=Pg)){var b;if(!0===D._gtmdgs)b=!0;else{var c=Hf&&Hf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Sa("5");return kh(1,100)<d?kh(2,2):-1},vj=function(a){var b;return b};var wj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bj=function(a){var b;ah("gtm.allowlist")&&kf(52);b=ah("gtm.allowlist");b||(b=ah("gtm.whitelist"));b&&kf(9);
var c=b&&eb(Ua(b),xj),d;ah("gtm.blocklist")&&kf(51);d=ah("gtm.blocklist");d||(d=ah("gtm.blacklist"));d||(d=ah("tagTypeBlacklist"))&&kf(3);d?kf(8):d=[];Aj()&&(d=Ua(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=A(Ua(d),"google")&&kf(2);var e=
d&&eb(Ua(d),yj),f={};return function(g){var h=g&&g[Dd.Ha];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Ug[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>A(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>A(c,l[r])){kf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=A(e,h);if(q)t=q;else{var u=Oa(e,l||[]);u&&kf(10);t=u}}var v=!m||t;v||!(0<=A(l,"sandboxedScripts"))||c&&-1!==A(c,"sandboxedScripts")||(v=Oa(e,zj));return f[h]=v}},Aj=
function(){return wj.test(D.location&&D.location.hostname)};var Cj={active:!0,isAllowed:function(){return!0}},Dj=function(a){var b=O.zones;return b?b.checkState(Sd.C,a):Cj},Ej=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Fj=function(){},Gj=function(){};var Hj=!1,Ij=0,Jj=[];function Kj(a){if(!Hj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Hj=!0;for(var e=0;e<Jj.length;e++)N(Jj[e])}Jj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Lj(){if(!Hj&&140>Ij){Ij++;try{L.documentElement.doScroll("left"),Kj()}catch(a){D.setTimeout(Lj,50)}}}var Mj=function(a){Hj?a():Jj.push(a)};var Nj={},Oj={},Pj=function(a,b,c,d){if(!Oj[a]||Lg[b]||"__zone"===b)return-1;var e={};wb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return Oj[a].tags.push(e)-1},Qj=function(a,b,c,d){if(Oj[a]){var e=Oj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Rj(a){for(var b=Nj[a]||[],c=0;c<b.length;c++)b[c]();Nj[a]={push:function(d){d(Sd.C,Oj[a])}}}
var Uj=function(a,b,c){Oj[a]={tags:[]};Ia(b)&&Sj(a,b);c&&D.setTimeout(function(){return Rj(a)},Number(c));return Tj(a)},Sj=function(a,b){Nj[a]=Nj[a]||[];Nj[a].push(Ya(function(){return N(function(){b(Sd.C,Oj[a])})}))};function Tj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ya(function(){b++;d&&b>=c&&Rj(a)})},Gg:function(){d=!0;b>=c&&Rj(a)}}};var Vj=function(){function a(d){return!Ja(d)||0>d?0:d}if(!O._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ja(bh.get("gtm.start"))?bh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Rg-b)}}};var Zj={},ak=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},bk=!1;
var ck=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||kf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Vj();return D[b]},dk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ak();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},ek=function(a){};
var gk=function(a){},fk=function(){return D.GoogleAnalyticsObject||"ga"},hk=function(a,b){return function(){var c=ak(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var mk=function(){return"&tc="+rd.filter(function(a){return a}).length},pk=function(){2022<=nk().length&&ok()},rk=function(){qk||(qk=D.setTimeout(ok,500))},ok=function(){qk&&(D.clearTimeout(qk),qk=void 0);void 0===sk||tk[sk]&&!uk&&!vk||(wk[sk]||xk.Ah()||0>=yk--?(kf(1),wk[sk]=!0):(xk.$h(),Of(nk()),tk[sk]=!0,zk=Ak=Bk=vk=uk=""))},nk=function(){var a=sk;if(void 0===a)return"";var b=jf("GTM"),c=jf("TAGGING");return[Ck,tk[a]?"":"&es=1",Dk[a],b?"&u="+b:"",c?"&ut="+c:"",mk(),uk,vk,Bk?Bk:"",Ak,zk,"&z=0"].join("")},
Ek=function(){return[Sg,"&v=3&t=t","&pid="+Ma(),"&rv="+Sd.cc].join("")},Fk="0.005000">Math.random(),Ck=Ek(),Gk=function(){Ck=Ek()},tk={},uk="",vk="",zk="",Ak="",Bk="",sk=void 0,Dk={},wk={},qk=void 0,xk=function(a,b){var c=0,d=0;return{Ah:function(){if(c<a)return!1;Wa()-d>=b&&(c=0);return c>=a},$h:function(){Wa()-d>=b&&(c=0);c++;d=Wa()}}}(2,1E3),yk=1E3,Hk=function(a,b,c){if(Fk&&!wk[a]&&b){a!==sk&&(ok(),sk=a);var d,e=String(b[Dd.Ha]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;uk=uk?uk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(td[g]?"1":"2")+d;zk=zk?zk+"."+h:"&ti="+h;rk();pk()}},Ik=function(a,b,c){if(Fk&&!wk[a]){a!==sk&&(ok(),sk=a);var d=c+b;vk=vk?vk+"."+d:"&epr="+d;rk();pk()}},Jk=function(a,b,c){};
var Kk=function(){return!1},Lk=function(){var a={};return function(b,c,d){}};function Mk(a,b,c,d){var e=rd[a],f=Nk(a,b,c,d);if(!f)return null;var g=zd(e[Dd.Ne],c,[]);if(g&&g.length){var h=g[0];f=Mk(h.index,{J:f,I:1===h.Ze?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Nk(a,b,c,d){function e(){if(f[Dd.og])h();else{var x=Ad(f,c,[]);var B=Pj(c.id,String(f[Dd.Ha]),Number(f[Dd.Oe]),x[Dd.pg]),z=!1;x.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=Wa()-E;Hk(c.id,rd[a],"5");Qj(c.id,B,"success",
G);g()}};x.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=Wa()-E;Hk(c.id,rd[a],"6");Qj(c.id,B,"failure",G);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Hk(c.id,f,"1");var C=function(){var G=Wa()-E;Hk(c.id,f,"7");Qj(c.id,B,"exception",G);z||(z=!0,h())};var E=Wa();try{yd(x,c)}catch(G){C(G)}}}var f=rd[a],g=b.J,h=b.I,l=b.terminate;if(c.td(f))return null;var m=zd(f[Dd.Pe],c,[]);if(m&&m.length){var p=m[0],r=Mk(p.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===p.Ze?l:r}if(f[Dd.Je]||f[Dd.rg]){var t=f[Dd.Je]?sd:c.mi,q=g,u=h;if(!t[a]){e=Ya(e);
var v=Ok(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Ok(a,b,c){var d=[],e=[];b[a]=Pk(d,e,c);return{J:function(){b[a]=Qk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Rk;for(var f=0;f<e.length;f++)e[f]()}}}function Pk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Qk(a){a()}function Rk(a,b){b()};var Uk=function(a,b,c){for(var d=[],e=0;e<rd.length;e++)if(a[e]){var f=rd[e];var g=c.add();try{var h=Mk(e,{J:g,I:g,terminate:g},b,e);h?d.push({uf:e,nf:Bd(f),oc:h}):(Sk(e,b),g())}catch(m){g()}}c.Gg();d.sort(Tk);for(var l=0;l<d.length;l++)d[l].oc();return 0<d.length};function Tk(a,b){var c,d=b.nf,e=a.nf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.uf,h=b.uf;f=g>h?1:g<h?-1:0}return f}
function Sk(a,b){if(!Fk)return;var c=function(d){var e=b.td(rd[d])?"3":"4",f=zd(rd[d][Dd.Ne],b,[]);f&&f.length&&c(f[0].index);Hk(b.id,rd[d],e);var g=zd(rd[d][Dd.Pe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Vk=!1,$k=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Vk)return!1;Vk=!0}var d=Dj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Dj(Number.MAX_SAFE_INTEGER);}if(f)return!1}Fk&&!wk[b]&&sk!==b&&(ok(),sk=b,zk=uk="",Dk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,rk());
var g={id:b,name:c,td:Bj(d.isAllowed),mi:[],ff:function(){kf(6)},Te:Wk(b)},h=Uj(b,a.eventCallback,a.eventTimeout);Xk(b);var l=Nd(g);e&&(l=Yk(l));var m=Uk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||gk(Sd.C);switch(c){case "gtm.init":kf(19),m&&kf(20)}return Zk(l,
m)};function Wk(a){return function(b){Fk&&(Ab(b)||Jk(a,"input",b))}}function Xk(a){eh(a,"event",1);eh(a,"ecommerce",1);eh(a,"gtm");}
function Yk(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Kg[String(rd[c][Dd.Ha])]&&(b[c]=!0);return b}function Zk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&rd[c]&&!Lg[String(rd[c][Dd.Ha])])return!0;return!1}function al(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return rh(""+c+b).href}}function bl(a,b){return cl()?al(a,b):void 0}function cl(){var a=!1;return a};var dl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},el=function(a){var b=new dl;b.eventModel=a;return b},fl=function(a,b){a.targetConfig=b;return a},gl=function(a,b){a.containerConfig=b;return a},hl=function(a,b){a.a=b;return a},il=function(a,b){a.globalConfig=b;return a},jl=function(a,b){a.J=b;return a},kl=function(a,b){a.I=b;return a};
dl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ll=function(a){function b(e){Pa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Pa(c,function(e){d.push(e)});return d};var ml;if(3===Sd.cc.length)ml="g";else{var nl="G";ml=nl}
var ol={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ml,OPT:"o"},pl=function(a){var b=Sd.C.split("-"),c=b[0].toUpperCase(),d=ol[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Sd.cc.length){var g="w";f="2"+g}else f="";return f+d+Sd.cc+e};var ql=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var rl=function(){return yf("iPhone")&&!yf("iPod")&&!yf("iPad")};yf("Opera");yf("Trident")||yf("MSIE");yf("Edge");!yf("Gecko")||-1!=vf.toLowerCase().indexOf("webkit")&&!yf("Edge")||yf("Trident")||yf("MSIE")||yf("Edge");-1!=vf.toLowerCase().indexOf("webkit")&&!yf("Edge")&&yf("Mobile");yf("Macintosh");yf("Windows");yf("Linux")||yf("CrOS");var sl=ma.navigator||null;sl&&(sl.appVersion||"").indexOf("X11");yf("Android");rl();yf("iPad");yf("iPod");rl()||yf("iPad")||yf("iPod");vf.toLowerCase().indexOf("kaios");var tl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var ul=function(){};var vl=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},wl=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(wl,ul);var yl=function(a){return"function"===typeof a.i.__tcfapi||null!=xl(a)};
wl.prototype.addEventListener=function(a){var b={},c=pf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=vl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{zl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};wl.prototype.removeEventListener=function(a){a&&a.listenerId&&zl(this,"removeEventListener",null,a.listenerId)};
var Bl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Al(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&Al(a.purpose.consents,b)}else l=Yf("ticdac");else l=1===h?a.purpose&&a.vendor?
Al(a.purpose.legitimateInterests,b)&&Al(a.vendor.legitimateInterests,void 0===d?"755":d):Yf("ticdac"):!0;return l},Al=function(a,b){return!(!a||!a[b])},zl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(xl(a)){Cl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},xl=function(a){if(a.a)return a.a;a.a=tl(a.i,"__tcfapiLocator");return a.a},Cl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},ql(a.i,a.m))};var Dl={1:0,3:0,4:0,7:3,9:3,10:3};function El(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Fl=El("",550),Gl=El("",500);function Hl(){var a=O.tcf||{};return O.tcf=a}
var Il=function(a,b){this.m=a;this.a=b;this.i=Wa();},Jl=function(a){},Kl=function(a){},Ql=function(){var a=Hl(),b=new wl(D,3E3),c=new Il(b,a);if((Ll()?!0===D.gtag_enable_tcf_support:!1!==D.gtag_enable_tcf_support)&&!a.active&&("function"===typeof D.__tcfapi||yl(b))){a.active=!0;a.Gb={};Ml();var d=setTimeout(function(){Nl(a);Ol(a);d=null},Gl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Nl(a),Ol(a),Jl(c);else{var f;if(!1===e.gdprApplies)f=Pl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Dl)if(Dl.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var r=l;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=vl(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===r.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
Yf("tugac")&&void 0===l.gdprApplies&&!m||Yf("tntac")&&("string"!==typeof l.tcString||!l.tcString.length)?!0:Bl(l,"1",0):!1}else g[h]=Bl(e,h,Dl[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Gb=f,Ol(a),Jl(c))}}),Kl(c)}catch(e){d&&(clearTimeout(d),d=null),Nl(a),Ol(a)}}};function Nl(a){a.type="e";a.tcString="tcunavailable";a.Gb=Pl()}function Ml(){var a={};mg((a.ad_storage="denied",a.wait_for_update=Fl,a))}
var Ll=function(){var a=!1;a=!0;return a};function Pl(){var a={},b;for(b in Dl)Dl.hasOwnProperty(b)&&(a[b]=!0);return a}function Ol(a){var b={};ng((b.ad_storage=a.Gb["1"]?"granted":"denied",b))}
var Rl=function(){var a=Hl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Sl=function(){var a=Hl();return a.active?a.tcString||"":""},Tl=function(a){if(!Dl.hasOwnProperty(String(a)))return!0;var b=Hl();return b.active&&b.Gb?!!b.Gb[String(a)]:!0};function Ul(a,b,c){function d(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(z,C){C&&u.push(z+"="+encodeURIComponent(C))},x="https://www.google.com";if(hg()){var y=og(I.s);v("gcs",pg());r&&v("gcu","1");v("rnd",p);if((!f||g&&"aw.ds"!==g)&&og(I.s)){var w=Fi("_gcl_aw");v("gclaw",w.join("."))}v("url",String(D.location).split(/[?#]/)[0]);v("dclid",Vl(b,h));!y&&b&&(x="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Sl());"1"===oi(!1)._up&&v("gtm_up","1");v("gclid",Vl(b,f));v("gclsrc",g);v("gtm",pl(!c));var B=x+"/pagead/landing?"+u.join("&");Vf(B)}}var e=Ii(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=hg();if(l||m){var p=""+Hh();m?qg(function(){d();og(I.s)||kg(function(r){return d(!0,r.Ue)},I.s)},[I.s]):d()}}function Vl(a,b){var c=a&&!og(I.s);return b&&c?"0":b}var Wl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,
null))}return!1};
var Xl=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};kf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Yl=function(a){var b=Xl(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var em=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),gm=["SCRIPT","IMG","SVG","PATH","BR"],hm=["BR"];function im(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=im(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function jm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=gm.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=hm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],r=0;r<m.length;r++){var t=m[r],q=t.textContent;t.value&&(q=t.value);if(q){var u=q.match(em);if(u){var v=
u[0],x;if(D.location){var y=oh(D.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Ui:v})}}}for(var w=[],B=10<p.length?"3":l.status,z=0;z<p.length&&10>z;z++){var C=p[z].element;w.push({querySelector:im(C),tagName:C.tagName,isVisible:!Wl(C),type:1})}return{elements:w,status:B}}var Sm=function(){var a=!0;Tl(7)&&Tl(9)&&Tl(10)||(a=!1);var b=!0;b=!1;b&&!Rm()&&(a=!1);return a},Rm=function(){var a=!0;Tl(3)&&Tl(4)||(a=!1);return a};function on(){var a=O;return a.gcq=a.gcq||new pn}
var qn=function(a,b,c){on().register(a,b,c)},rn=function(a,b,c,d){on().push("event",[b,a],c,d)},sn=function(a,b){on().push("config",[a],b)},tn=function(a,b,c){on().push("get",[a,b],c)},un={},vn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},wn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},pn=function(){this.m={};this.i={};this.a=[]},xn=function(a,b){var c=aj(b);return a.m[c.containerId]=a.m[c.containerId]||new vn},
yn=function(a,b,c){if(b){var d=aj(b);if(d&&1===xn(a,b).status){xn(a,b).status=2;var e={};Fk&&(e.timeoutId=D.setTimeout(function(){kf(38);rk()},3E3));a.push("require",[e],d.containerId);un[d.containerId]=Wa();if(dj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=bl(c,g)||h;Lf(l)}}}},zn=function(a,b,c,d){if(d.ca){var e=xn(a,d.ca),f=e.m;if(f){var g=F(c),h=F(e.targetConfig[d.ca]),l=F(e.containerConfig),m=F(e.i),p=F(a.i),r=ah("gtm.uniqueEventId"),t=aj(d.ca).prefix,q=kl(jl(il(hl(gl(fl(el(g),h),l),m),p),function(){Ik(r,t,"2");}),function(){
Ik(r,t,"3");});try{Ik(r,t,"1");f(d.ca,b,d.m,q)}catch(u){Ik(r,t,"4");}}}};
pn.prototype.register=function(a,b,c){if(3!==xn(this,a).status){xn(this,a).m=b;xn(this,a).status=3;c&&(xn(this,a).i=c);var d=aj(a),e=un[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=ah("gtm.uniqueEventId"),l=g,m=Wa()-f;if(Fk&&!wk[h]){h!==sk&&(ok(),sk=h);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Ak=Ak?Ak+","+p:"&cl="+p}delete un[d.containerId]}this.flush()}};
pn.prototype.push=function(a,b,c,d){var e=Math.floor(Wa()/1E3);yn(this,c,b[0][I.Ga]||this.i[I.Ga]);this.a.push(new wn(a,e,c,b,d));d||this.flush()};
pn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==xn(this,c.ca).status&&!a)return;Fk&&D.clearTimeout(c.a[0].timeoutId);break;case "set":Pa(c.a[0],function(p,r){F(ib(p,r),b.i)});break;case "config":var d=c.a[0],e=!!d[I.Yb];delete d[I.Yb];var f=xn(this,c.ca),g=aj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||zn(this,I.ka,d,c);f.a=!0;delete d[I.vb];h?F(d,f.containerConfig):
F(d,f.targetConfig[c.ca]);break;case "event":zn(this,c.a[1],c.a[0],c);break;case "get":var l={},m=(l[I.xa]=c.a[0],l[I.wa]=c.a[1],l);zn(this,I.Da,m,c);}this.a.shift()}};var An=function(a,b,c){};var Bn=function(a,b,c,d){};var Cn=function(a){};var Dn=function(a,b,c){};var En=function(a,b){
return!0};var Fn=function(a,b){var c;H(this.i.a,["path:!string"],[a]);Se(this,"access_globals","execute",a);for(var d=a.split("."),e=D,f=e[d[0]],g=1;f&&g<d.length;g++){e=f;f=f[d[g]];}if("function"!==ub(f))return;var h=!1;
for(var l=[],m=1;m<arguments.length;m++)l.push(yb(arguments[m],this.m,h));var p=(0,this.m.P)(f,e,l);c=xb(p,this.m);void 0===c&&void 0!==p&&kf(45);return c};var Gn=function(a){};var Hn=!1,In=[];function Jn(){if(!Hn){Hn=!0;for(var a=0;a<In.length;a++)N(In[a])}}var Kn=function(a){Hn?N(a):In.push(a)};var Ln=function(a){H(this.i.a,["listener:!Fn"],arguments);Se(this,"process_dom_events","window","load");Kn(yb(a))};var Mn=function(a,b){var c;var d=!1;var e=xb(c,this.m,d);void 0===e&&void 0!==c&&kf(45);return e};var Nn=function(a){var b;H(this.i.a,["path:!string"],arguments);Se(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=xb(b,this.m,f);void 0===g&&void 0!==b&&kf(45);return g};var On=function(a,b){var c=null,d=!1;H(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Se(this,"access_globals","readwrite",a);Se(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=gb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ia(l))return null;if(l)return xb(l,this.m,d);var m;l=function(){if(!Ia(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),r=gb(p,e),t=p[p.length-1];if(void 0===r)throw Error("Path "+p+" does not exist.");m=r[t];void 0===m&&(m=[],r[t]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return xb(c,this.m,d)};var Pn=function(a){var b;H(this.i.a,["path:!string"],arguments);Se(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=gb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ia(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return xb(b,this.m,h)};var Qn=function(a){var b;return b};var Rn=function(a,b){b=void 0===b?!0:b;var c;return c};var Sn=function(a){var b=null;return b};var Tn=function(a,b){var c;return c};var Un=function(a,b){var c;return c};var Vn=function(a){var b="";return b};var Wn=function(a){var b="";return b};var df=function(){Se(this,"get_user_agent");return D.navigator.userAgent};var Xn=function(a,b){};var Yn={},Zn=function(a,b,c,d){H(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Se(this,"inject_script",a);var e=this.m,f=function(){b instanceof kb&&b.La(e)},g=function(){c instanceof kb&&c.La(e)};if(!d){Lf(a,f,g);return}var h=d;Yn[h]?(Yn[h].onSuccess.push(f),Yn[h].onFailure.push(g)):(Yn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Yn[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=Yn[h].onFailure,m=0;m<l.length;m++)N(l[m]);Yn[h]=null},Lf(a,f,g));};var $n=function(){return!1},ao={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var bo=function(){};var co=function(a,b){var c=!1;return c};var eo=function(){var a="";return a};var fo=function(){var a="";return a};var go=function(a,b,c){};var ho=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var io=function(a,b,c){H(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Se(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=D,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=yb(b,this.m,d),!0;return!1};var jo=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ko=function(a,b,c){var d=this;};var lo={},mo={};lo.getItem=function(a){var b=null;return b};
lo.setItem=function(a,b){};
lo.removeItem=function(a){};lo.clear=function(){};var no=function(a){var b;return b};var Pc=function(){var a=new cf;dj()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",Xn),a.add("injectScript",Zn));var b=go;a.add("Math",Le());a.add("TestHelper",ff());a.add("addEventCallback",Cn);a.add("aliasInWindow",En);a.add("assertApi",He);a.add("assertThat",Ie);a.add("callInWindow",
Fn);a.add("callLater",Gn);a.add("copyFromDataLayer",Mn);a.add("copyFromWindow",Nn);a.add("createArgumentsQueue",On);a.add("createQueue",Pn);a.add("decodeUri",Me);a.add("decodeUriComponent",Ne);a.add("encodeUri",Oe);a.add("encodeUriComponent",Pe);a.add("fail",Qe);a.add("fromBase64",Qn,!("atob"in D));a.add("generateRandom",Re);a.add("getContainerVersion",Te);a.add("getCookieValues",Rn);a.add("getQueryParameters",Tn);a.add("getReferrerQueryParameters",Un);a.add("getReferrerUrl",Vn);a.add("getTimestamp",
Ue);a.add("getTimestampMillis",Ue);a.add("getType",Ve);a.add("getUrl",Wn);a.add("localStorage",ao,!$n());a.add("logToConsole",bo);a.add("makeInteger",Xe);a.add("makeNumber",Ye);a.add("makeString",Ze);a.add("makeTableMap",$e);a.add("mock",bf);a.add("queryPermission",co);a.add("readCharacterSet",eo);a.add("readTitle",fo);a.add("sendPixel",b);a.add("setCookie",ho);a.add("setInWindow",io);a.add("sha256",ko);a.add("templateStorage",lo);a.add("toBase64",no,!("btoa"in D));a.add("JSON",We(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ab();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Nc,Wd;
function oo(){var a=data.runtime||[],b=data.runtime_lines;Nc=new Lc;po();nd=function(e,f,g){qo(f);var h=new ob;Pa(f,function(q,u){var v=xb(u);void 0===v&&void 0!==u&&kf(44);h.set(q,v)});Nc.a.a.B=Jd();var l={Hg:Xd(e),eventId:void 0!==g?g.id:void 0,Ab:function(){return e},log:function(){}};if(Kk()){var m=Lk(),p=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(p=q);7===u&&(r=v);m(q,u,v)},m:af()};l.log=function(q,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:q,source:r,message:v})}}}var t=
Oc(l,[e,h]);Nc.a.a.B=void 0;t instanceof ya&&"return"===t.a&&(t=t.i);return yb(t)};Qc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ka(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Fd(d,b[c]);Nc.oc(d)}}function qo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){N(b)});Ia(c)&&(a.gtmOnFailure=function(){N(c)})}
function po(){var a=Nc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Rc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function ro(a){void 0!==a&&Pa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ug[e]=Ug[e]||[];Ug[e].push(b)}})};var so="HA GF G UA AW DC".split(" "),to=!1,uo={},vo=!1;function wo(a,b){var c={event:a};b&&(c.eventModel=F(b),b[I.Nc]&&(c.eventCallback=b[I.Nc]),b[I.Vb]&&(c.eventTimeout=b[I.Vb]));return c}function xo(){return to}
var Ao={config:function(a){},event:function(a){var b=a[1];if(n(b)&&!(3<a.length)){var c;if(2<a.length){if(!wb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=wo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return vo=!0,xo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Wd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&wb(a[1])?b=F(a[1]):3==a.length&&n(a[1])&&(b={},wb(a[2])||Ka(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){xo()&&F(a[2],{subcommand:a[1]})}if(3===a.length){kf(39);var c=Vg(),d=a[1];"default"===d?(b(),mg(a[2])):"update"===d&&(b(),ng(a[2],c))}}};
Ao.get=function(a){};var Bo={policy:!0};
var Co=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Eo=function(a){var b=Do(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Vo=function(a){if(Uo(a))return a;this.a=a};Vo.prototype.qh=function(){return this.a};var Uo=function(a){return!a||"object"!==ub(a)||wb(a)?!1:"getUntrustedUpdateValue"in a};Vo.prototype.getUntrustedUpdateValue=Vo.prototype.qh;var Wo=[],Xo=!1,Yo=function(a){return D["dataLayer"].push(a)},Zo=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function $o(a){var b=a._clear;Pa(a,function(d,e){"_clear"!==d&&(b&&dh(d,void 0),dh(d,e))});Qg||(Qg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Vg(),a["gtm.uniqueEventId"]=c,dh("gtm.uniqueEventId",c));return $k(a)}
function ap(){for(var a=!1;!Xo&&0<Wo.length;){Xo=!0;delete Yg.eventModel;$g();var b=Wo.shift();if(null!=b){var c=Uo(b);if(c){var d=b;b=Uo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ah(g,1);if(Ka(h)||wb(h))h=F(h);Zg[g]=h}}try{if(Ia(b))try{b.call(bh)}catch(v){}else if(Ka(b)){var l=
b;if(n(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),t=ah(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(v){}}}else{if(Qa(b)){a:{var q=b;if(q.length&&n(q[0])){var u=Ao[q[0]];if(u&&(!c||!Bo[q[0]])){b=u(q);break a}}b=void 0}if(!b){Xo=!1;continue}}a=$o(b)||a}}finally{c&&$g(!0)}}Xo=!1}return!a}
function bp(){var a=ap();try{Co(D["dataLayer"],Sd.C)}catch(b){}return a}
var dp=function(){var a=Jf("dataLayer",[]),b=Jf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Mj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Vo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Wo.push.apply(Wo,e);if(300<
this.length)for(kf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ap()&&h};var d=a.slice(0);Wo.push.apply(Wo,d);cp()&&N(bp)},cp=function(){var a=!0;return a};var ep={};ep.Zb=new String("undefined");
var fp=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ep.Zb?b:a[d]);return c.join("")}};fp.prototype.toString=function(){return this.a("undefined")};fp.prototype.valueOf=fp.prototype.toString;ep.ug=fp;ep.bd={};ep.Yg=function(a){return new fp(a)};var gp={};ep.ai=function(a,b){var c=Vg();gp[c]=[a,b];return c};ep.Xe=function(a){var b=a?0:1;return function(c){var d=gp[c];if(d&&"function"===typeof d[b])d[b]();gp[c]=void 0}};ep.yh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ep.Th=function(a){if(a===ep.Zb)return a;var b=Vg();ep.bd[b]=a;return'google_tag_manager["'+Sd.C+'"].macro('+b+")"};ep.Kh=function(a,b,c){a instanceof ep.ug&&(a=a.a(ep.ai(b,c)),b=Ha);return{rd:a,J:b}};var hp=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ip=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},jp=function(a,b,c){ip(a)[b]=c},kp=function(a,b,c,d){var e=ip(a),f=Xa(e,b,d);e[b]=c(f)},lp=function(a,b,c){var d=ip(a);return Xa(d,b,c)};var mp=["input","select","textarea"],np=["button","hidden","image","reset","submit"],op=function(a){var b=a.tagName.toLowerCase();return!La(mp,function(c){return c===b})||"input"===b&&La(np,function(c){return c===a.type.toLowerCase()})?!1:!0},pp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Uf(a,["form"],100)},qp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(op(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var rp=!!D.MutationObserver,sp=void 0,tp=function(a){if(!sp){var b=function(){var c=L.body;if(c)if(rp)(new MutationObserver(function(){for(var e=0;e<sp.length;e++)N(sp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<sp.length;e++)N(sp[e])}))})}};sp=[];L.body?b():N(b)}sp.push(a)};var Fp=D.clearTimeout,Gp=D.setTimeout,T=function(a,b,c){if(dj()){b&&N(b)}else return Lf(a,b,c)},Hp=function(){return new Date},Ip=function(){return D.location.href},Jp=function(a){return ph(rh(a),"fragment")},Kp=function(a){return qh(rh(a))},Lp=function(a,b){return ah(a,b||2)},Mp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Yo(a)):d=Yo(a);return d},Np=function(a,b){D[a]=b},W=function(a,b,c){b&&
(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Op=function(a,b,c){return vh(a,b,void 0===c?!0:!!c)},Pp=function(a,b,c){return 0===Eh(a,b,c)},Qp=function(a,b){if(dj()){b&&N(b)}else Nf(a,b)},Rp=function(a){return!!lp(a,"init",!1)},Sp=function(a){jp(a,"init",!0)},Tp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Og;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(fj("https://","http://",c))},Up=function(a,
b){var c=a[b];return c},Vp=function(a,b,c){Fk&&(Ab(a)||Jk(c,b,a))};
var Wp=ep.Kh;function sq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var tq=new Na;function uq(a,b){function c(g){var h=rh(g),l=ph(h,"protocol"),m=ph(h,"host",!0),p=ph(h,"port"),r=ph(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function vq(a){return wq(a)?1:0}
function wq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ka(c)){for(var d=0;d<c.length;d++){var e=F(a,{});F({arg1:c[d],any_of:void 0},e);if(vq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return sq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=A(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var r=String(c)+p,t=tq.get(r);t||(t=new RegExp(c,p),tq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return uq(b,c)}return!1};var xq={},yq=encodeURI,X=encodeURIComponent,zq=Of;var Aq=function(a,b){if(!a)return!1;var c=ph(rh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Bq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};xq.zh=function(){var a=!1;return a};function Kr(){return D.gaGlobal=D.gaGlobal||{}}var Lr=function(){var a=Kr();a.hid=a.hid||Ma();return a.hid},Mr=function(a,b){var c=Kr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var ns=window,os=document,ps=function(a){var b=ns._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ns["ga-disable-"+a])return!0;try{var c=ns.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=th("AMP_TOKEN",String(os.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return os.getElementById("__gaOptOutExtension")?!0:!1};
function ss(a){delete a.eventModel[I.vb];us(a.eventModel)}var us=function(a){Pa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.na]||{};Pa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xs=function(a,b,c){rn(b,c,a)},ys=function(a,b,c){rn(b,c,a,!0)},Bs=function(a,b){};
function As(a,b){}var Z={b:{}};Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"1365"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var B=[],z=w.split(","),C=0;C<z.length;C++){var E=Number(z[C]);if(isNaN(E))return[];p.test(z[C])||B.push(E)}return B}function c(){var w=0,B=0;return function(){var z=Xl(),C=z.height;w=Math.max(v.scrollLeft+z.width,w);B=Math.max(v.scrollTop+C,B);return{ah:w,bh:B}}}function d(){q=W("self");
u=q.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(w,B,z,C){var E=l(B),G={},M;for(M in E){G.Pa=M;if(E.hasOwnProperty(G.Pa)){var P=Number(G.Pa);w<P||(Mp({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[G.Pa].join(",")}),kp("sdl",B,function(ba){return function(ca){delete ca[ba.Pa];return ca}}(G),{}))}G={Pa:G.Pa}}}function f(){var w=y(),B=w.ah,z=w.bh,C=B/v.scrollWidth*100,E=z/v.scrollHeight*100;e(B,
"horiz.pix",r.ac,t.Ee);e(C,"horiz.pct",r.$b,t.Ee);e(z,"vert.pix",r.ac,t.Qe);e(E,"vert.pct",r.$b,t.Qe);jp("sdl","pending",!1)}function g(){var w=250,B=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(w=50,B=!0);var z=0,C=!1,E=function(){C?z=Gp(E,w):(z=0,f(),Rp("sdl")&&!a()&&(Qf(q,"scroll",G),Qf(q,"resize",G),jp("sdl","init",!1)));C=!1},G=function(){B&&y();z?C=!0:(z=Gp(E,w),jp("sdl","pending",!0))};return G}function h(w,B,z){if(B){var C=b(String(w));kp("sdl",z,function(E){for(var G=0;G<
C.length;G++){var M=String(C[G]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(B)}return E},{})}}function l(w){return lp("sdl",w,{})}function m(w){N(w.vtp_gtmOnSuccess);var B=w.vtp_uniqueTriggerId,z=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,E=w.vtp_verticalThresholdUnits,G=w.vtp_verticalThresholdsPixels,M=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case r.ac:h(z,B,"horiz.pix");break;case r.$b:h(C,B,"horiz.pct")}switch(E){case r.ac:h(G,B,"vert.pix");
break;case r.$b:h(M,B,"vert.pct")}Rp("sdl")?lp("sdl","pending")||(x||(d(),x=!0),N(function(){return f()})):(d(),x=!0,v&&(Sp("sdl"),jp("sdl","pending",!0),N(function(){f();if(a()){var P=g();Pf(q,"scroll",P);Pf(q,"resize",P)}else jp("sdl","init",!1)})))}var p=/^\s*$/,r={$b:"PERCENT",ac:"PIXELS"},t={Qe:"vertical",Ee:"horizontal"},q,u,v,x=!1,y;(function(w){Z.__sdl=w;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?m(w):Kn(function(){m(w)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);Vp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Ia(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Bq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:pl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Sl();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){T(b,d,c)};hg()?qg(function(){og(I.s)?e():kg(e,I.s)},[I.s]):(Vj(),e())})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(fh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Lp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ph(rh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Kp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=hp(c,"gtm.click");Mp(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Rp("cl")){var c=W("document");Pf(c,"click",a,!0);Sp("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Vp(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Op(a.vtp_name,Lp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,r,t){if(!n(t))throw d(p,{},"Key must be a string.");if("read"===r){if(-1<A(e,t))return}else if("write"===r){if(-1<A(f,t))return}else if("readwrite"===r){if(-1<A(f,t)&&-1<A(e,t))return}else if("execute"===r){if(-1<A(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(p,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ma(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Lp("gtm.url",1);c=c||Ip();var d=b[a("vtp_component")];if(!d||"URL"==d)return Kp(String(c));var e=rh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ka(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var r=ph(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=ph(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Lp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Vp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.ua=["google"],function(){function a(m,p){if(hg()&&!d[m]){var r=function(){var t=ak(),q="gtm"+Vg(),u=h(p),v={name:q};g(u,v,!0);t("create",m,v);t(function(){t.remove(q)})};kg(r,I.M);kg(r,I.s);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},g=function(m,p,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var u=f[q]?Ta(m[q]):m[q];"anonymizeIp"!=q||u||(u=void 0);p[q]=u;t++}return t},h=function(m){var p={};m.vtp_gaSettings&&F(Bq(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),p);F(Bq(m.vtp_fieldsToSet,"fieldName","value"),p);og(I.M)||(p.storage="none");og(I.s)||(p.allowAdFeatures=!1,p.storeGac=!1);Sm()||(p.allowAdFeatures=!1);Rm()||(p.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(p._x_19=m.vtp_transportUrl);return p},l=function(m){function p(wa,R){void 0!==R&&C("set",wa,R)}var r={},t={},q={},u={};if(m.vtp_gaSettings){var v=
m.vtp_gaSettings;F(Bq(v.vtp_contentGroup,"index","group"),t);F(Bq(v.vtp_dimension,"index","dimension"),q);F(Bq(v.vtp_metric,"index","metric"),u);var x=F(v);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;m=F(m,x)}F(Bq(m.vtp_contentGroup,"index","group"),t);F(Bq(m.vtp_dimension,"index","dimension"),q);F(Bq(m.vtp_metric,"index","metric"),u);var y=h(m),w=ck(m.vtp_functionName);if(Ia(w)){var B="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(z=m.vtp_trackerName,B=z+"."):(z="gtm"+Vg(),B=z+".");var C=function(wa){var R=[].slice.call(arguments,0);R[0]=B+R[0];w.apply(window,R)},E=function(wa,R){return void 0===R?R:wa(R)},G=function(wa,R){if(R)for(var hb in R)R.hasOwnProperty(hb)&&C("set",wa+hb,R[hb])},M=function(){},
P={name:z};g(y,P,!0);var ba=m.vtp_trackingId||r.trackingId;w("create",ba,P);C("set","&gtm",pl(!0));hg()&&(C("set","&gcs",pg()),a(ba,m));y._x_19&&(null==If&&delete y._x_19,y._x_20&&!c[z]&&(c[z]=!0,w(hk(z,String(y._x_20)))));m.vtp_enableRecaptcha&&C("require","recaptcha","recaptcha.js");(function(wa,R){void 0!==m[R]&&C("set",wa,m[R])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",u);var ca={};g(y,ca,!1)&&C("set",ca);var ea;m.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var wa=y&&y.hitCallback;Ia(wa)&&wa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());var J={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:E(String,m.vtp_eventLabel||r.label),eventValue:E(Sa,m.vtp_eventValue||r.value)};g(ea,J,!1);C("send",J);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ra="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","displayfeatures",void 0,{cookieName:ra})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Ra=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:Ra})}ea?C("send","pageview",ea):C("send","pageview");}if(!b){var fb=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(fb="internal/"+fb);b=!0;var Dc=bl(y._x_19,"/analytics.js"),fe=fj("https:","http:","//www.google-analytics.com/"+fb,y&&!!y.forceSSL);T("analytics.js"===fb&&Dc?Dc:fe,function(){var wa=ak();wa&&wa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};(function(m){Z.__ua=m;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(m){qg(function(){l(m)},
[I.M,I.s])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(ye(rh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||vi())&&Ni(a,h));Ki(h);Pi(["aw","dc"],h);Yi(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Oi(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var p=Lp(I.N);Ul(!1,void 0!=p&&!1!==p);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&Ri()})}();

Z.b.aev=["google"],function(){function a(q,u){var v=fh(q,"gtm");if(v)return v[u]}function b(q,u,v,x){x||(x="element");var y=q+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var B=a(q,x);if(B&&(w=v(B),p[y]=w,r.push(y),35<r.length)){var z=r.shift();delete p[z]}}return w}function c(q,u,v){var x=a(q,t[u]);return void 0!==x?x:v}function d(q,u){if(!q)return!1;var v=e(Ip());Ka(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(z){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(q))return!1}else{var B=w;if(0!=B.length){if(0<=e(q).indexOf(B))return!1;x.push(e(B))}}}return!Aq(q,x)}function e(q){m.test(q)||(q="http://"+q);return ph(rh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+q,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Rf(q,"value");case "button":return Sf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)op(q.elements[v])&&
u++;return u}}function l(q,u,v){var x=a(q,"interactedFormField");return x&&Rf(x,u)||v}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,x=q.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Sf)||v;case "URL":var w;a:{var B=String(a(u,"elementUrl")||v||""),z=rh(B),C=String(q.vtp_component||"URL");switch(C){case "URL":w=B;break a;case "IS_OUTBOUND":w=d(B,q.vtp_affiliatedDomains);break a;default:w=ph(z,C,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return w;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(u,
x,v);else{var G=q.vtp_attribute,M=a(u,"element");E=M&&Rf(M,G)||v||""}return E;case "MD":var P=q.vtp_mdValue,ba=b(u,"MD",Ap);return P&&ba?Dp(ba,P)||v:ba||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);Vp(ca,"aev",q.vtp_gtmEventId);return ca}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=F(a),c=b;c[Dd.Ha]=null;c[Dd.lg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Ip()}function b(f,g){Pf(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Kp(l),T:Jp(l)})})}function c(f,g){Pf(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Kp(l),T:Jp(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ia(m))try{l[f]=function(p,r,t){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:Kp(Ip()),
T:Jp(Ip())})}}catch(p){}}function e(){var f={source:null,state:W("history").state||null,url:Kp(Ip()),T:Jp(Ip())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.T!=g.T){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.T,"gtm.newUrlFragment":g.T,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Mp(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=
0})(function(f){var g=W("self");if(!Rp("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);Sp("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=W("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=
0})(function(g){function h(y,w,B){return"DATA_LAYER"===y?Lp(B):g[w]}function l(){u("gdpr_consent",Sl());}function m(){}function p(y){var w=!0;y&&m();w&&b.push(r)}Vj();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:pl()};g.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=Lp(I.N)&&!1!==Lp(I.N)&&(r.google_gtm_url_processor=function(y){return y=tj(y)});var t=function(y){return function(w,B,z){var C=h(y,B,z);C&&(r[w]=C)}},
q=t("JSON");q("google_conversion_currency","vtp_currencyCode");q("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(q=t(g.vtp_productReportingDataSource),q("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),q("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),q("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),q("google_basket_discount","vtp_discount","discount"),q("google_conversion_items","vtp_items","items"),r.google_conversion_items&&
r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,w){void 0!==w&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[y]=w)},v=function(y){return function(w,B,z,C){var E=h(y,B,z);C(E)&&u(w,E)}};(function(){})();g.vtp_transportUrl&&(r.google_transport_url=g.vtp_transportUrl);var x=bl(g.vtp_transportUrl,"/pagead/conversion_async.js");x||(x=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
g.vtp_enableNewCustomerReporting&&(q=v(g.vtp_newCustomerReportingDataSource),q("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),q("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===
oi(!1)._up&&u("gtm_up","1");l();(function(){hg()?qg(function(){l();var y=og(I.s),w=!y&&void 0!=Lp(I.N)&&!1!==Lp(I.N);!g.vtp_transportUrl&&w&&(r.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",pg());p(y);y||kg(function(){l();r=F(r);!g.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;u("gcs",pg());u("gcu","1");p(!0)},I.s)},[I.s]):p(!0)})();a||(a=!0,T(x,f(),e(x)))})}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=W(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",function(){var g=of(W("UET"),{ti:b.vtp_tagId,q:d});D[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();
Z.b.fsl=[],function(){function a(){var e=W("document"),f=c(),g=HTMLFormElement.prototype.submit;Pf(e,"click",function(h){var l=h.target;if(l&&(l=Uf(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Rf(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=L.getElementById(l.form):m=Uf(l,["form"],100);m&&f.store(m,l)}},!1);Pf(e,"submit",function(h){var l=h.target;if(!l)return h.returnValue;var m=h.defaultPrevented||!1===h.returnValue,p=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));g.call(l);q&&l.removeChild(q)}},m,p,r))t=!1;else return m||(h.preventDefault&&h.preventDefault(),h.returnValue=!1),!1;return h.returnValue},!1);HTMLFormElement.prototype.submit=function(){var h=this,l=b(h),m=!0;d(h,function(){m&&g.call(h)},!1,l)&&(g.call(h),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return La(e,function(h){return h.form===
g})};return{store:function(g,h){var l=f(g);l?l.button=h:e.push({form:g,button:h})},get:function(g){var h=f(g);return h?h.button:null}}}function d(e,f,g,h,l){var m=lp("fsl",g?"nv.mwt":"mwt",0),p;p=g?lp("fsl","nv.ids",[]):lp("fsl","ids",[]);if(!p.length)return!0;var r=hp(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(h&&m){if(!Mp(r,Zo(f),m))return!1}else Mp(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,h=Number(e.vtp_waitForTagsTimeout);if(!h||0>=h)h=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(h,r)};kp("fsl","mwt",m,0);g||kp("fsl","nv.mwt",m,0)}var p=function(r){r.push(l);return r};kp("fsl","ids",p,[]);g||kp("fsl","nv.ids",p,[]);Rp("fsl")||(a(),Sp("fsl"));N(e.vtp_gtmOnSuccess)})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return ep.Zb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=L.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Kf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Mj(function(){var g,h=O;h.postscribe||(h.postscribe=Ae);g=h.postscribe;var l={done:e},m=L.createElement("div");m.style.display="none";m.style.visibility="hidden";L.body.appendChild(m);try{g(m,d,l)}catch(p){N(f)}})};var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=Wp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.rd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Tf(g),h,e)()}else Gp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Tf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}zq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.xh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Uf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=lp("lcl",h?"nv.mwt":"mwt",0),m;m=h?lp("lcl","nv.ids",[]):lp("lcl","ids",[]);if(m.length){var p=hp(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var r=String(Up(g,"rel")||""),t=!!La(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&kf(36);var q=W((Up(g,"target")||"_self").substring(1)),u=!0;if(Mp(p,Zo(function(){var v;if(v=u&&q){var x;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(w){if(!c.createEvent){x=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.xh=!0;f.target.dispatchEvent(y);x=!0}else x=!1;v=!x}v&&(q.location.href=Up(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Mp(p,function(){},l||2E3);return!0}}};Pf(c,"click",e,!1);Pf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Up(d,"href"),g=f.indexOf("#"),h=Up(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Kp(f),m=Kp(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};kp("lcl","mwt",h,0);e||kp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};kp("lcl","ids",l,[]);e||kp("lcl","nv.ids",l,[]);Rp("lcl")||(a(),Sp("lcl"));N(c.vtp_gtmOnSuccess)})}();


var Cs={};Cs.macro=function(a){if(ep.bd.hasOwnProperty(a))return ep.bd[a]},Cs.onHtmlSuccess=ep.Xe(!0),Cs.onHtmlFailure=ep.Xe(!1);Cs.dataLayer=bh;Cs.callback=function(a){Tg.hasOwnProperty(a)&&Ia(Tg[a])&&Tg[a]();delete Tg[a]};function Ds(){O[Sd.C]=Cs;Za(Ug,Z.b);vd=vd||ep;wd=Od}
function Es(){Xf.gtm_3pds=!0;Xf.gtag_cs_api=!0;O=D.google_tag_manager=D.google_tag_manager||{};Ql();if(O[Sd.C]){var a=O.zones;a&&a.unregisterChild(Sd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)od.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)rd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)qd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);pd.push(r)}td=Z;ud=vq;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;oo();Wd=new Vd(q);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Ug[w]=x}ro(v);Ds();dp();
Hj=!1;Ij=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Kj();else{Pf(L,"DOMContentLoaded",Kj);Pf(L,"readystatechange",Kj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(G){}B&&Lj()}Pf(D,"load",Kj)}Hn=!1;"complete"===L.readyState?Jn():Pf(D,"load",Jn);
a:{if(!Fk)break a;D.setInterval(Gk,864E5);}Rg=(new Date).getTime();}}
(function(a){var b=!0;b=!1;if(b){a();return}var c=function(){var g=
D["google.tagmanager.debugui2.queue"];g||(g=[],D["google.tagmanager.debugui2.queue"]=g,Lf("https://www.googletagmanager.com/debug/bootstrap"));return g},d="x"===ph(D.location,"query",!1,void 0,"gtm_debug");if(!d&&L.referrer){var e=rh(L.referrer);d="tagassistant.google.com"===oh(e,"host")}if(!d){var f=vh("__TAG_ASSISTANT");d=f.length&&f[0].length}D.__TAG_ASSISTANT_API&&(d=!0);if(d&&If){c().push({messageType:"CONTAINER_STARTING",data:{scriptSource:If,resume:function(){a()}}});return}
a()})(Es);

})()
