// function findShort(s){
//     return s.split(' ').map(x => x.length).sort((a,b) => a-b)[0]
// }

// function findShort(s){
//     return s.split(' ').reduce((acc, curr, idx, arr) => (acc.length<curr.length) ? acc : curr).length
// }

// function findShort(s){
//     return s.split(' ').sort((a,b) => a.length-b.length)[0].length
// }

function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length))
}

//Hindari .sort() karena expensive, O(n log(n))

console.log(findShort(`ProofOfStake BTC Mine MadeSafeCoin Steem Steem Dogecoin ProofOfWork Ethereum Factom Ethereum Factom Ethereum LiteCoin Ripple ProofOfWork Mine BTC`)); //3
console.log(findShort("Brother Let's travel abroad shall we")); //2