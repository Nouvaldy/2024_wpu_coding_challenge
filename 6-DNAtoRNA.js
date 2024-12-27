//WPU Programming Challenge
//Day 6/366
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
// result=""
// for(i=0; i<dna.length; i++){
//     if(dna[i]=="T"){
//         result += "U"
//     }
//     else 
//     result += dna[i]
// }
//     return result
// }

DNAtoRNA = (dna) => dna.replaceAll("T", "U")

  console.log(DNAtoRNA("GTCTAT")) //GUCUAU