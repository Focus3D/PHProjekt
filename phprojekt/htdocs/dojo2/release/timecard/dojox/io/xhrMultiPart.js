//>>built
define("dojox/io/xhrMultiPart",["dojo/_base/kernel","dojo/_base/array","dojo/_base/xhr","dojo/query","dojox/uuid/generateRandomUuid"],function(f,k,l,h,i){function g(a,e){if(!a.name&&!a.content)throw Error("Each part of a multi-part request requires 'name' and 'content'.");var b=[];b.push("--"+e,'Content-Disposition: form-data; name="'+a.name+'"'+(a.filename?'; filename="'+a.filename+'"':""));if(a.contentType){var c="Content-Type: "+a.contentType;a.charset&&(c+="; Charset="+a.charset);b.push(c)}a.contentTransferEncoding&&
b.push("Content-Transfer-Encoding: "+a.contentTransferEncoding);b.push("",a.content);return b}function j(a,e){var b=f.formToObject(a),c=[],d;for(d in b)f.isArray(b[d])?f.forEach(b[d],function(a){c=c.concat(g({name:d,content:a},e))}):c=c.concat(g({name:d,content:b[d]},e));return c}f.getObject("io.xhrMultiPart",!0,dojox);dojox.io.xhrMultiPart=function(a){if(!a.file&&!a.content&&!a.form)throw Error("content, file or form must be provided to dojox.io.xhrMultiPart's arguments");var e=i(),b=[],c="";if(a.file||
a.content){var d=a.file||a.content;f.forEach(f.isArray(d)?d:[d],function(a){b=b.concat(g(a,e))})}else if(a.form){if(h("input[type=file]",a.form).length)throw Error("dojox.io.xhrMultiPart cannot post files that are values of an INPUT TYPE=FILE.  Use dojo.io.iframe.send() instead.");b=j(a.form,e)}b.length&&(b.push("--"+e+"--",""),c=b.join("\r\n"));return f.rawXhrPost(f.mixin(a,{contentType:"multipart/form-data; boundary="+e,postData:c}))};return dojox.io.xhrMultiPart});