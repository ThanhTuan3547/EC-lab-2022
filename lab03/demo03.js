/**
 * array
 */

console.clear();
let a = [1,2,3,4,5];
for (let i = 0; i < a.length ; i++){
    console.log(a[i]);
}

console.log("---------------------");

a.forEach((item, index) => {
    console.log(index, "=> ", item);
});



let c = a.splice(2,2);
console.log(a);
console.log(c);

let d = a.slice(0,2);
console.log(a);
console.log(d);

let e = a.map((item) => {return item*2;});

console.log(e);

let f = a.filter(item => {return item %2 == 0});
console.log(f);

let g = a.reduce((sum,item) => {return sum + item;}, 1);

console.log(g);