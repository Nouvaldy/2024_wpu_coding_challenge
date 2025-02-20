//day 81/366
//https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let ans = p0;
    for(i=0; ans<p; i++) {
        ans = Math.floor(ans*(100+percent)/100 + aug) ;
    } 
    return `Pada awal tahun populasi ${p0} jiwa, dengan pertumbuhan ${percent}%/tahun dan ${aug} imigran per tahun, maka populasi akan melampaui ${p} jiwa dalam waktu ${i} tahun ke depan`;
}

console.log(nbYear(1500, 5, 100, 5000)); //15 tahun
console.log(nbYear(1000, 2.0, 50, 1214)); //4 tahun