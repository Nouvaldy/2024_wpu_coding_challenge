//day 51/366
//https://www.codewars.com/kata/514a024011ea4fb54200004b

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

function domainName(url){
    return url.split(/[./]/).find(e => !['','http:','www','https:'].includes(e))
}

console.log(domainName('https://www.codewars.com/kata'))