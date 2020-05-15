
// parse the name and email from the url parm
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

var name = getQueryVariable('name');
var email = getQueryVariable('email');
var full_name = name.split("+");
var first_name = full_name[0];
var last_name = full_name[full_name.length - 1]


// Native selector
function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/{{{first_name}}}/g, first_name);
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/{{{last_name}}}/g, last_name);
}
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/{{{email}}}/g, email);
}
