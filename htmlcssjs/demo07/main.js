//var bodyElements = document.body.getElementsByTagName("*");
var bodyChildNodes = document.body.childNodes,
    bodyChildTags = [];


bodyChildNodes.forEach(function(el){
  if(el.nodeName.indexOf('#') < 0 && el.nodeName !== 'SCRIPT') {
      bodyChildTags.push(el);
  }
});
console.log(bodyChildTags, bodyChildNodes)