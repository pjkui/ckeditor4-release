﻿var hljs=new function(){function a(a){return a.replace(/&/gm,"\x26amp;").replace(/</gm,"\x26lt;").replace(/>/gm,"\x26gt;")}function b(a,b){var r=a&&a.exec(b);return r&&0==r.index}function c(a){return Array.prototype.map.call(a.childNodes,function(a){return 3==a.nodeType?m.useBR?a.nodeValue.replace(/\n/g,""):a.nodeValue:"br"==a.nodeName.toLowerCase()?"\n":c(a)}).join("")}function f(a){a=(a.className+" "+(a.parentNode?a.parentNode.className:"")).split(/\s+/);a=a.map(function(a){return a.replace(/^language-/,
"")});return a.filter(function(a){return B(a)||"no-highlight"==a})[0]}function h(a,b){var r={},e;for(e in a)r[e]=a[e];if(b)for(e in b)r[e]=b[e];return r}function w(a){var b=[];(function e(a,k){for(var c=a.firstChild;c;c=c.nextSibling)3==c.nodeType?k+=c.nodeValue.length:"br"==c.nodeName.toLowerCase()?k+=1:1==c.nodeType&&(b.push({event:"start",offset:k,node:c}),k=e(c,k),b.push({event:"stop",offset:k,node:c}));return k})(a,0);return b}function G(b,c,r){function e(){return b.length&&c.length?b[0].offset!=
c[0].offset?b[0].offset<c[0].offset?b:c:"start"==c[0].event?b:c:b.length?b:c}function d(b){n+="\x3c"+b.nodeName.toLowerCase()+Array.prototype.map.call(b.attributes,function(b){return" "+b.nodeName+'\x3d"'+a(b.value)+'"'}).join("")+"\x3e"}function E(a){n+="\x3c/"+a.nodeName.toLowerCase()+"\x3e"}function f(a){("start"==a.event?d:E)(a.node)}for(var h=0,n="",q=[];b.length||c.length;){var g=e(),n=n+a(r.substr(h,g[0].offset-h)),h=g[0].offset;if(g==b){q.reverse().forEach(E);do f(g.splice(0,1)[0]),g=e();
while(g==b&&g.length&&g[0].offset==h);q.reverse().forEach(d)}else"start"==g[0].event?q.push(g[0].node):q.pop(),f(g.splice(0,1)[0])}return n+a(r.substr(h))}function H(a){function b(a){return a&&a.source||a}function c(d,e){return RegExp(b(d),"m"+(a.cI?"i":"")+(e?"g":""))}function e(d,f){if(!d.compiled){d.compiled=!0;d.k=d.k||d.bK;if(d.k){var m=function(b,d){a.cI&&(d=d.toLowerCase());d.split(" ").forEach(function(a){a=a.split("|");u[a[0]]=[b,a[1]?Number(a[1]):1]})},u={};"string"==typeof d.k?m("keyword",
d.k):Object.keys(d.k).forEach(function(a){m(a,d.k[a])});d.k=u}d.lR=c(d.l||/\b[A-Za-z0-9_]+\b/,!0);f&&(d.bK&&(d.b=d.bK.split(" ").join("|")),d.b||(d.b=/\B|\b/),d.bR=c(d.b),d.e||d.eW||(d.e=/\B|\b/),d.e&&(d.eR=c(d.e)),d.tE=b(d.e)||"",d.eW&&f.tE&&(d.tE+=(d.e?"|":"")+f.tE));d.i&&(d.iR=c(d.i));void 0===d.r&&(d.r=1);d.c||(d.c=[]);var n=[];d.c.forEach(function(a){a.v?a.v.forEach(function(b){n.push(h(a,b))}):n.push("self"==a?d:a)});d.c=n;d.c.forEach(function(a){e(a,d)});d.starts&&e(d.starts,f);var q=d.c.map(function(a){return a.bK?
"\\.?\\b("+a.b+")\\b\\.?":a.b}).concat([d.tE]).concat([d.i]).map(b).filter(Boolean);d.t=q.length?c(q.join("|"),!0):{exec:function(a){return null}};d.continuation={}}}e(a)}function C(c,f,r,e){function d(a,c){if(b(a.eR,c))return a;if(a.eW)return d(a.parent,c)}function h(a,b,d,c){c='\x3cspan class\x3d"'+(c?"":m.classPrefix);return c+(a+'"\x3e')+b+(d?"":"\x3c/span\x3e")}function t(){var b;if(void 0!==g.sL)g.sL&&!u[g.sL]?b=a(p):(b=g.sL?C(g.sL,p,!0,g.continuation.top):D(p),0<g.r&&(v+=b.r),"continuous"==
g.subLanguageMode&&(g.continuation.top=b.top),b=h(b.language,b.value,!1,!0));else if(b=a(p),g.k){var d="",c=0;g.lR.lastIndex=0;for(var e=g.lR.exec(b);e;){var d=d+b.substr(c,e.index-c),c=g,k=e,k=q.cI?k[0].toLowerCase():k[0];(c=c.k.hasOwnProperty(k)&&c.k[k])?(v+=c[1],d+=h(c[0],e[0])):d+=e[0];c=g.lR.lastIndex;e=g.lR.exec(b)}b=d+b.substr(c)}return b}function w(b,d){var c=b.cN?h(b.cN,"",!0):"";b.rB?(l+=c,p=""):b.eB?(l+=a(d)+c,p=""):(l+=c,p=d);g=Object.create(b,{parent:{value:g}})}function n(c,e){p+=c;
if(void 0===e)return l+=t(),0;var k;a:{k=g;for(var f=0;f<k.c.length;f++)if(b(k.c[f].bR,e)){k=k.c[f];break a}k=void 0}if(k)return l+=t(),w(k,e),k.rB?0:e.length;if(k=d(g,e)){f=g;f.rE||f.eE||(p+=e);l+=t();do g.cN&&(l+="\x3c/span\x3e"),v+=g.r,g=g.parent;while(g!=k.parent);f.eE&&(l+=a(e));p="";k.starts&&w(k.starts,"");return f.rE?0:e.length}if(!r&&b(g.iR,e))throw Error('Illegal lexeme "'+e+'" for mode "'+(g.cN||"\x3cunnamed\x3e")+'"');p+=e;return e.length||1}var q=B(c);if(!q)throw Error('Unknown language: "'+
c+'"');H(q);var g=e||q,l="";for(e=g;e!=q;e=e.parent)e.cN&&(l=h(e.cN,l,!0));var p="",v=0;try{for(var x,z,y=0;;){g.t.lastIndex=y;x=g.t.exec(f);if(!x)break;z=n(f.substr(y,x.index-y),x[0]);y=x.index+z}n(f.substr(y));for(e=g;e.parent;e=e.parent)e.cN&&(l+="\x3c/span\x3e");return{r:v,value:l,language:c,top:g}}catch(A){if(-1!=A.message.indexOf("Illegal"))return{r:0,value:a(f)};throw A;}}function D(b,c){c=c||m.languages||Object.keys(u);var f={r:0,value:a(b)},e=f;c.forEach(function(a){if(B(a)){var c=C(a,b,
!1);c.language=a;c.r>e.r&&(e=c);c.r>f.r&&(e=f,f=c)}});e.language&&(f.second_best=e);return f}function z(a){m.tabReplace&&(a=a.replace(/^((<[^>]+>|\t)+)/gm,function(a,b,c,d){return b.replace(/\t/g,m.tabReplace)}));m.useBR&&(a=a.replace(/\n/g,"\x3cbr\x3e"));return a}function A(a){var b=c(a),h=f(a);if("no-highlight"!=h){var e=h?C(h,b,!0):D(b),d=w(a);if(d.length){var m=document.createElementNS("http://www.w3.org/1999/xhtml","pre");m.innerHTML=e.value;e.value=G(d,w(m),b)}e.value=z(e.value);a.innerHTML=
e.value;a.className+=" hljs "+(!h&&e.language||"");a.result={language:e.language,re:e.r};e.second_best&&(a.second_best={language:e.second_best.language,re:e.second_best.r})}}function t(){if(!t.called){t.called=!0;var a=document.querySelectorAll("pre code");Array.prototype.forEach.call(a,A)}}function B(a){return u[a]||u[F[a]]}var m={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},u={},F={};this.highlight=C;this.highlightAuto=D;this.fixMarkup=z;this.highlightBlock=A;this.configure=function(a){m=
h(m,a)};this.initHighlighting=t;this.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",t,!1);addEventListener("load",t,!1)};this.registerLanguage=function(a,b){var c=u[a]=b(this);c.aliases&&c.aliases.forEach(function(b){F[b]=a})};this.getLanguage=B;this.inherit=h;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!\x3d|!\x3d\x3d|%|%\x3d|\x26|\x26\x26|\x26\x3d|\\*|\\*\x3d|\\+|\\+\x3d|,|-|-\x3d|/\x3d|/|:|;|\x3c\x3c|\x3c\x3c\x3d|\x3c\x3d|\x3c|\x3d\x3d\x3d|\x3d\x3d|\x3d|\x3e\x3e\x3e\x3d|\x3e\x3e\x3d|\x3e\x3d|\x3e\x3e\x3e|\x3e\x3e|\x3e|\\?|\\[|\\{|\\(|\\^|\\^\x3d|\\||\\|\x3d|\\|\\||~";
this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,
r:0};this.UTM={cN:"title",b:this.UIR,r:0}};
hljs.registerLanguage("bash",function(a){var b={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},c={cN:"string",b:/"/,e:/"/,c:[a.BE,b,{cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]}]};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},
c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[a.inherit(a.TM,{b:/\w[\w\d_]*/})],r:0},a.HCM,a.NM,c,{cN:"string",b:/'/,e:/'/},b]}});
hljs.registerLanguage("cs",function(a){return{k:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",
b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",b:"///|\x3c!--|--\x3e"},{cN:"xmlDocTag",b:"\x3c/?",e:"\x3e"}]},a.CLCM,a.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a.ASM,a.QSM,a.CNM,{bK:"protected public private internal",e:/[{;=]/,k:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield",
c:[{bK:"class namespace interface",starts:{c:[a.TM]}},{b:a.IR+"\\s*\\(",rB:!0,c:[a.TM]}]}]}});
hljs.registerLanguage("ruby",function(a){var b={cN:"yardoctag",b:"@[A-Za-z]+"},c={cN:"comment",v:[{b:"#",e:"$",c:[b]},{b:"^\\\x3dbegin",e:"^\\\x3dend",c:[b],r:10},{b:"^__END__",e:"\\n$"}]},b={cN:"subst",b:"#\\{",e:"}",k:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"},f={cN:"string",c:[a.BE,b],v:[{b:/'/,
e:/'/},{b:/"/,e:/"/},{b:"%[qw]?\\(",e:"\\)"},{b:"%[qw]?\\[",e:"\\]"},{b:"%[qw]?{",e:"}"},{b:"%[qw]?\x3c",e:"\x3e",r:10},{b:"%[qw]?/",e:"/",r:10},{b:"%[qw]?%",e:"%",r:10},{b:"%[qw]?-",e:"-",r:10},{b:"%[qw]?\\|",e:"\\|",r:10},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},h={cN:"params",b:"\\(",e:"\\)",k:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"};
a=[f,c,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[a.inherit(a.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"\x3c\\s*",c:[{cN:"parent",b:"("+a.IR+"::)?"+a.IR}]},c]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[a.inherit(a.TM,{b:"[a-zA-Z_]\\w*[!?\x3d]?|[-+~]\\@|\x3c\x3c|\x3e\x3e|\x3d~|\x3d\x3d\x3d?|\x3c\x3d\x3e|[\x3c\x3e]\x3d?|\\*\\*|[-/+%^\x26*~`|]|\\[\\]\x3d?"}),h,c]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[f,{b:"[a-zA-Z_]\\w*[!?\x3d]?|[-+~]\\@|\x3c\x3c|\x3e\x3e|\x3d~|\x3d\x3d\x3d?|\x3c\x3d\x3e|[\x3c\x3e]\x3d?|\\*\\*|[-/+%^\x26*~`|]|\\[\\]\x3d?"}],
r:0},{cN:"symbol",b:a.UIR+"(\\!|\\?)?:",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+a.RSR+")\\s*",c:[c,{cN:"regexp",c:[a.BE,b],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];b.c=a;h.c=a;return{k:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
c:a}});hljs.registerLanguage("diff",function(a){return{c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});
hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},
c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});
hljs.registerLanguage("xml",function(a){a={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var b={eW:!0,i:/</,r:0,c:[a,{cN:"attribute",b:"[A-Za-z0-9\\._:-]+",r:0},{b:"\x3d",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:!0,c:[{cN:"doctype",b:"\x3c!DOCTYPE",e:"\x3e",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"\x3c!--",e:"--\x3e",r:10},{cN:"cdata",b:"\x3c\\!\\[CDATA\\[",e:"\\]\\]\x3e",r:10},{cN:"tag",b:"\x3cstyle(?\x3d\\s|\x3e|$)",
e:"\x3e",k:{title:"style"},c:[b],starts:{e:"\x3c/style\x3e",rE:!0,sL:"css"}},{cN:"tag",b:"\x3cscript(?\x3d\\s|\x3e|$)",e:"\x3e",k:{title:"script"},c:[b],starts:{e:"\x3c/script\x3e",rE:!0,sL:"javascript"}},{b:"\x3c%",e:"%\x3e",sL:"vbscript"},a,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"\x3c/?",e:"/?\x3e",c:[{cN:"title",b:"[^ /\x3e\x3c]+",r:0},b]}]}});
hljs.registerLanguage("markdown",function(a){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[\x3d-]{2,}$"}]},{b:"\x3c",e:"\x3e",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^\x3e\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,
rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",e:"$",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:!0,eE:!0},{cN:"link_url",b:"\\s",e:"$"}]}]}});
hljs.registerLanguage("css",function(a){var b={cN:"function",b:"[a-zA-Z-][a-zA-Z0-9_-]*\\(",e:"\\)",c:["self",a.NM,a.ASM,a.QSM]};return{cI:!0,i:"[\x3d/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[b,a.ASM,a.QSM,
a.NM]}]},{cN:"tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});
hljs.registerLanguage("http",function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|\x3d",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}});
hljs.registerLanguage("java",function(a){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},a.CLCM,a.CBLCLM,a.ASM,a.QSM,{bK:"protected public private",
e:/[{;=]/,k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"class",bK:"class interface",eW:!0,i:/[:"<>]/,c:[{bK:"extends implements",r:10},a.UTM]},{b:a.UIR+"\\s*\\(",rB:!0,c:[a.UTM]}]},a.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});
hljs.registerLanguage("php",function(a){var b={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},c={cN:"preprocessor",b:/<\?(php)?|\?>/},f={cN:"string",c:[a.BE,c],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null})]},h={v:[a.BNM,a.CNM]};return{cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
c:[a.CLCM,a.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},c]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:a.UIR},{cN:"string",b:"\x3c\x3c\x3c['\"]?\\w+['\"]?$",e:"^\\w+;",c:[a.BE]},c,b,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[a.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",b,a.CBLCLM,f,h]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},a.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[a.UTM]},{bK:"use",e:";",
c:[a.UTM]},{b:"\x3d\x3e"},f,h]}});
hljs.registerLanguage("python",function(a){var b={cN:"prompt",b:/^(>>>|\.\.\.) /},c={cN:"string",c:[a.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[b],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[b],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},a.ASM,a.QSM]},f={cN:"number",r:0,v:[{b:a.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:a.CNR+"[lLjJ]?"}]},h={e:/:/,i:/[${=;\n]/,c:[a.UTM,{cN:"params",b:/\(/,e:/\)/,c:["self",b,f,c]}]};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},
i:/(<\/|->|\?)/,c:[b,f,c,a.HCM,a.inherit(h,{cN:"function",bK:"def",r:10}),a.inherit(h,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});
hljs.registerLanguage("sql",function(a){return{cI:!0,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:!0,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},
c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}});hljs.registerLanguage("ini",function(a){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*\x3d[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[a.QSM,a.NM],r:0}]}]}});
hljs.registerLanguage("perl",function(a){var b={cN:"subst",b:"[$@]\\{",e:"\\}",k:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"},
c={b:"-\x3e{",e:"}"},f={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@\*][^\s\w{]/,r:0}]},h={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};a=[f,a.HCM,h,{cN:"comment",b:"^\\\x3d\\w",e:"\\\x3dcut",eW:!0},c,{cN:"string",c:[a.BE,b,f],v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\\x3c",e:"\\\x3e",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",
c:[a.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[a.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\\x3d\\\x3e",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+a.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[a.HCM,h,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[a.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",
b:"-\\w\\b",r:0}];b.c=a;c.c=a;return{k:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
c:a}});
hljs.registerLanguage("objectivec",function(a){var b=/[a-zA-Z@][a-zA-Z0-9_]*/;return{k:{keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",
built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},
l:b,i:"\x3c/",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"\x3c",e:"\x3e"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"(@interface|@class|@protocol|@implementation)\\b",e:"({|$)",k:"@interface @class @protocol @implementation",l:b,c:[a.UTM]},{cN:"variable",b:"\\."+a.UIR,r:0}]}});
hljs.registerLanguage("coffeescript",function(a){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"},c=
a.inherit(a.TM,{b:"[A-Za-z$_][0-9A-Za-z$_]*"}),f={cN:"subst",b:/#\{/,e:/}/,k:b},h=[a.BNM,a.inherit(a.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[a.BE]},{b:/'/,e:/'/,c:[a.BE]},{b:/"""/,e:/"""/,c:[a.BE,f]},{b:/"/,e:/"/,c:[a.BE,f]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[f,a.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?\x3d\\s|\\W|$)"}]},{cN:"property",b:"@[A-Za-z$_][0-9A-Za-z$_]*"},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];f.c=h;return{k:b,c:h.concat([{cN:"comment",
b:"###",e:"###"},a.HCM,{cN:"function",b:"([A-Za-z$_][0-9A-Za-z$_]*\\s*\x3d\\s*)?(\\(.*\\))?\\s*\\B[-\x3d]\x3e",e:"[-\x3d]\x3e",rB:!0,c:[c,{cN:"params",b:"\\(",rB:!0,c:[{b:/\(/,e:/\)/,k:b,c:["self"].concat(h)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[c]},c]},{cN:"attribute",b:"[A-Za-z$_][0-9A-Za-z$_]*:",e:":",rB:!0,eE:!0,r:0}])}});
hljs.registerLanguage("nginx",function(a){var b={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+a.UIR}]};return{c:[a.HCM,{b:a.UIR+"\\s",e:";|{",rB:!0,c:[a.inherit(a.UTM,{starts:{eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"\x3d\x3e",c:[a.HCM,{cN:"string",c:[a.BE,b],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0},{cN:"regexp",
c:[a.BE,b],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},b]}})],r:0}],i:"[^\\s\\}]"}});
hljs.registerLanguage("json",function(a){var b={literal:"true false null"},c=[a.QSM,a.CNM],f={cN:"value",e:",",eW:!0,eE:!0,c:c,k:b},h={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[a.BE],i:"\\n",starts:f}],i:"\\S"};a={b:"\\[",e:"\\]",c:[a.inherit(f,{cN:null})],i:"\\S"};c.splice(c.length,0,h,a);return{c:c,k:b,i:"\\S"}});
hljs.registerLanguage("apache",function(a){var b={cN:"number",b:"[\\$%]\\d+"};return{cI:!0,c:[a.HCM,{cN:"tag",b:"\x3c/?",e:"\x3e"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",b]},b,a.QSM]}}],i:/\S/}});
hljs.registerLanguage("cpp",function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};
return{aliases:["c"],k:b,i:"\x3c/",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"include\\s*\x3c",e:"\x3e",i:"\\n"},a.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*\x3c",e:"\x3e",k:b,r:10,c:["self"]}]}});
hljs.registerLanguage("makefile",function(a){var b={cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]};return{c:[a.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[b]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,c:[a.QSM,b]}]}});