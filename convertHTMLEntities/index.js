function convertHTML(str) {

 var and = new RegExp(/([\&\/])/, 'g');
 var arrowL = new RegExp(/([\<\/])/, 'g');
 var arrowR = new RegExp(/([\>\/])/, 'g');
 var singleQ = new RegExp(/([\\"\/])/, 'g');
 var doubleQ = new RegExp(/([\'\/])/, 'g');
  
 str = str.replace(and, "&amp;").replace(arrowL, "&lt;").replace(arrowR, "&gt;").replace(singleQ, "&quot;").replace(doubleQ, "&apos;");
// str = str.replace(arrowL, "&lt;");
// str = str.replace(arrowR, "&gt;");
// str = str.replace(singleQ, "&quot;");
// str = str.replace(doubleQ, "&apos;");
  
  return str;
}

convertHTML("Dolce & Gabbana");