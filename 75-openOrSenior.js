// day 75/366
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
}