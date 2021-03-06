/*___meta___touch/module/truck.23648f77.js*/
!function(win,doc,undefined){"use strict";
function sendStat(a){window.MT&&MT.log&&MT.log.send(LOG_STATIC,{cate:"truck",loadCount:a.xhrCount+a.lsCount,sumSize:a.xhrSize+a.lsSize,duration:(new Date).getTime()-a.startTime,xhrCount:a.xhrCount,lsCount:a.lsCount,xhrSize:a.xhrSize,lsSize:a.lsSize},.1)}var LOG_STATIC="STATIC",LOG_ERROR="ERROR",MT=win.MT,__defineQueue=[],uniformIndex=0,requirejs={},assets={},util={};
if(win.define&&win.define.amd)
	return!1;util={isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},depExtend:function(a,b){function c(a,d){if(!d[a]){d[a]=b[a]?{count:0,link:b[a]}:{count:0,link:[]};for(var e=0;e<d[a].link.length;e++)c(d[a].link[e],d),d[d[a].link[e]].count++}}
function d(a){var b=[];for(f in a)0==a[f].count&&b.push(f);
	for(var c=0;c<b.length;c++)
		for(var d=a[b[c]],e=0;e<d.link.length;e++)a[d.link[e]].count--,0===a[d.link[e]].count&&b.push(d.link[e]);
			for(var f in a)if(0!==a[f].count)throw"Cycling dependencies occured:"+f;return b.reverse()}
				for(var e={},f=0;f<a.length;f++)c(a[f],e);
					return d(e)},extend:function(a,b,c){
						for(var d in b)"_"===d.indexOf(0)||(c||a[d])&&!c||(a[d]=b[d]);
							return a},baseUrl:function(){
var a=/[^?#]*\//,b=doc.scripts,c=doc.getElementById("truckjsnode")||b[b.length-1];return c.src.match(a)&&c.src.match(a)[0]}()};var LS={isSupported:function(){try{if(!("localStorage"in window&&window.localStorage))return!1;localStorage.setItem("~_~",1),localStorage.removeItem("~_~")}catch(a){return!1}return!0}(),getItem:function(a){try{return localStorage.getItem(a)}catch(b){}},setItem:function(a,b){try{localStorage.setItem(a,b)}catch(c){}},removeItem:function(a){try{localStorage.removeItem(a)}catch(b){}}};assets={config:function(a){var b={cacheKey:"rslist",cachePrefix:"s~",prefix:"",isDev:!1},c=!1;
return util.extend(a,b,c),this.config=a},resources:null,initialize:function(){
var a,b=this;if(util.isFunction(b.config)&&this.config(),a=b.config,a.revision&&LS.isSupported){b.resources=localStorage[a.cachePrefix+a.cacheKey],b.resources?(b.resources=JSON.parse(b.resources),b._updateWholeCache()):b.resources={};try{localStorage.setItem(a.cachePrefix+a.cacheKey,JSON.stringify(b.resources))}catch(c){localStorage.clear(),b.resources={}}}else b.resources={}},_updateWholeCache:function(){
var a,b,c,d=this,e=d.config,f=d.resources,g=e.revision;for(a in g)c=g.hasOwnProperty(a)&&f.hasOwnProperty(a)&&(b=g[a])===f[a].v&&localStorage[e.cachePrefix+a]&&localStorage[e.cachePrefix+a].length===f[a].l,c||(f[a]=undefined,localStorage.removeItem(e.cachePrefix+a))},updateCachedItem:function(a,b){
if(!LS.isSupported)return!1;var c=this,d=c.resources,e=c.config,f=e.revision,g=a.id;d[g]={v:f&&f[g],l:b.length},d[g].v&&(LS.setItem(e.cachePrefix+g,b),LS.setItem(e.cachePrefix+e.cacheKey,JSON.stringify(d)))},getCachedItem:function(a){return LS.getItem(this.config.cachePrefix+a.id)}};var Module=function(a){this.id=a.id||"anonymous",this.callback=a.callback||null,this.depend=a.depend||[],this.requireing=[],this.following=[],this.status=a.status||"inited",this.result=a.result,requirejs.addModule(this)};
if(Module.prototype={constructor:Module,inited:function(){},loading:function(){"inited"==this.status&&requirejs.loadModules([this])},loaded:function(){("loading"==this.status||"inited"==this.status)&&(this.status="loaded",this.depending())},depending:function(){if("loaded"==this.status){this.status="depending";for(var a=0;a<this.depend.length;a++){
var b=requirejs.getModule(this.depend[a]);b||(b=new Module({id:this.depend[a]})),"executed"!=b.status&&(b.following.push(this),this.requireing.push(b))}if(0==this.requireing.length)this.ready();else{var c=requirejs.config.combo;
if(c)var d=util.depExtend(this.depend,c.deps);else 
var d=this.depend;for(var e=[],a=0;a<d.length;a++)
{var f=d[a],b=requirejs.getModule(f);b||(b=new Module({id:f})),"inited"==b.status&&e.push(b)}
var g={sumCount:d.length,startTime:(new Date).getTime(),lsCount:0,lsSize:0};requirejs.loadModules(e,g)}}},ready:function()
var a=this;"depending"==this.status&&0==this.requireing.length&&(this.status="ready",this.executing(),setTimeout(function()
{for(var b=0;b<a.following.length;b++){
	var c=a.following[b];c.requireing.splice(c.requireing.indexOf(a),1),0==c.requireing.length&&c.ready()}a.following=[]}))},executing:function(){"ready"===this.status&&(this.status="executing",this.result=util.isFunction(this.callback)?this.callback.apply({},requirejs.getResults(this.depend)):this.callback,this.executed())},executed:function(){this.status="executed"}},requirejs={version:"0.2.2",moduleList:{},addModule:function(a){this.moduleList[a.id]=a},getModule:function(a){return this.moduleList[a]},config:function(a){var b={baseUrl:util.baseUrl},c=!0;return util.extend(b,a||{},c),this.config=b},define:function(a,b){util.isFunction(a)&&(b=a,a=[]),__defineQueue.push({callback:b,depend:a})},require:function(a,b){util.isFunction(a)&&(b=a,a=[]),util.isFunction(this.config)&&this.config(),util.isFunction(assets.config)&&(assets.config(this.config),assets.initialize());
var c=new Module({id:"require"+uniformIndex++,callback:b,depend:a,status:"loaded"});c.depending()},id2Url:function(a){var b="",c=a.split("."),d=c.length;return this.config.revision&&this.config.revision[a]&&(b=this.config.revision[a],c.splice(d-1,0,b),a=c.join(".")),this.config.prefix+a},loadModules:function(a,b){
for(var c=this,d=this.config.combo,e=0;e<a.length;e++)if(assets.resources[a[e].id]){var f=assets.getCachedItem(a[e]);f.replace(/\s+/,"")?c._geval(f,a[e].id):(console.error(a[e].id+" is blank"),MT.log.send(LOG_ERROR,{cate:"module_blank",error:a[e].id})),a[e].callback=__defineQueue[0].callback,a[e].depend=__defineQueue[0].depend,a[e].loaded(),__defineQueue=[],a.splice(e,1),e--,b.lsCount++,b.lsSize+=f.length}
if(d&&a.length>0){for(var g=d.url,h=[],e=0;e<a.length;e++)h.push(this.id2Url(a[e].id)),a[e].status="loading";this._fetchByXHR(g+h.join(";"),function(c){
if(c)var d=c.split(/\/\*___meta___.*\*\//);
for(var e=0;e<a.length;e++)a[e].callback=__defineQueue[e].callback,a[e].depend=__defineQueue[e].depend,!c||d&&d[e+1]||console.error(a[e],d),c&&(a.length!==d.length-1?MT.log.send(LOG_ERROR,{cate:"module_length_error",url:g+h.join(";")}):assets.updateCachedItem(a[e],d[e+1])),a[e].loaded();__defineQueue=[],b.xhrSize=c&&c.length,b.xhrCount=h.length,sendStat(b)})}
	else 0!=a.length?a.forEach(function(a){a.status="loading",c._fetchByXHR(c.config.baseUrl+c.id2Url(a.id),function(b){a.callback=__defineQueue[0].callback,a.depend=__defineQueue[0].depend,b&&assets.updateCachedItem(a,b),a.loaded(),__defineQueue=[]},a.id)}):(b.xhrCount=0,b.xhrSize=0,sendStat(b))},
		getResults:function(a){
var b,c=this,d=[];
return a.forEach(function(a){b=c.getModule(a),b&&"executed"==b.status?d.push(b.result):console.log("get result faild:"+a)}),d},
_fetchByXHR:function(a,b,c){
var d=this,e=new XMLHttpRequest,f=/^([\w]+:)\/\//.test(a)?RegExp.$1:window.location.protocol;e.open("GET",a,!0),e.onreadystatechange=function(){4==e.readyState&&(e.status>=200&&e.status<300||304===e.status||0===e.status&&"file:"===f?(e.onreadystatechange=null,c&&-1==e.responseText.indexOf("define")?-1!=c.indexOf("css.js")?d._geval('define([],function(){var s=document.createElement("style");s.innerHTML='+JSON.stringify(e.responseText)+";document.head.appendChild(s);});",c):d._geval("define([],function(){return "+JSON.stringify(e.responseText)+";});"):d._geval(e.responseText,c),b(e.responseText)):d._fetchByInject(a,b))},e.send(null)},_fetchByInject:function(a,b){
var c=doc.createElement("script"),d=(Date.now(),document.getElementsByTagName("script")[0]);c.type="text/javascript",c.async=!0,c.src=a,
.onload=function(){b()},d.parentNode.insertBefore(c,d)},
_geval:function(src,name){
	try{name&&(src+="\n //@ sourceURL="+name),eval(src)}catch(e){console.log(e)}}},win.require=function(){requirejs.require.apply(requirejs,arguments)},win.define=function(){requirejs.define.apply(requirejs,arguments)},win.define.amd={},new Module({id:"LocalStorage",status:"executed",result:LS}),win.requirejs&&win.requirejs.__requirejsConfig&&requirejs.config(win.requirejs.__requirejsConfig),win.requirejs&&win.requirejs.__require){
	var load=function(){setTimeout(function(){
		for(var a=0;a<win.requirejs.__require.length;a++)require(win.requirejs.__require[a][0],win.requirejs.__require[a][1]);win.requirejs=requirejs})},readyRE=/complete|loaded|interactive/;readyRE.test(document.readyState)&&document.body?load():document.addEventListener("DOMContentLoaded",load,!1)}else win.requirejs=requirejs}(window,document);