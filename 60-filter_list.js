//day 60/366
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    return l.filter(x => typeof(x) === 'number')
}

console.log(filter_list([1,2,'aasf','1','123',123])); //[1,2,123]