//day 44/366
//https://www.codewars.com/kata/597c684822bc9388f600010f/

// class Dinglemouse{
//     constructor( firstName, lastName ) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    
//     getFullName(){
//         if (this.firstName && this.lastName) return this.firstName+" "+this.lastName;
//         if (this.firstName) return this.firstName;
//         if (this.lastName) return this.lastName;
//         else return '';
//     }
// }

class Dinglemouse{
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(){
        return (this.firstName+" "+this.lastName).trim();
    }
}

console.log(new Dinglemouse('', "Eastwood").getFullName()); //'Eastwood'
console.log(new Dinglemouse('Abraham', "Eastwood").getFullName()); //'Abraham Eastwood'
console.log(new Dinglemouse('', "").getFullName()); // ''