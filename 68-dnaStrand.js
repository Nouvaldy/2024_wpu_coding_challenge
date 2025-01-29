//day 68/366
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
    return dna.split('').map( x => {
        return {A: 'T', T: 'A', C: 'G', G: 'C'}[x];
    }
).join('');
}