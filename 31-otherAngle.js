//WPU Programming Challenge
//Day 31/366
//https://www.codewars.com/kata/5a023c426975981341000014/

function otherAngle(a, b) {
    if (a<0 || b<0) return 0;
    if (a+b >= 180) return 0;
    else return 180-a-b;
}

console.log(otherAngle(10, 20)); //150