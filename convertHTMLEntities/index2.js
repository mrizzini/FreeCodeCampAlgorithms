// var hashMap = {
//     '&': '&amp;', 
//     '<': '&lt;', 
//     '>': '&gt;', 
//     '"': '&quot;', 
//     "'": '&apos;'
// };

// function convertHTML(str) {
//     var strArray = str.split('');
//     strArray = strArray.map(function(char) {
//         if (hashMap[char]) {
//             return hashMap[char];
//         }
//         return char;
//     });
//     str = strArray.join('');
//     return str;
// }

// convertHTML("Dolce & Gabbana");

// Can convert to one line

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

convertHTML("Dolce & Gabbana");