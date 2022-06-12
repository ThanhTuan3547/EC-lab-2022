/** 
 * defin json object 
 */

console.clear();

let product = {
    id: 1,
    name: 'iphone'
};

let products = [{
    id: 0, 
    name: 'iphone'
},
{
    id: 1, 
    name : 'ipad',
    price : 199
},
{
    id:2, 
    name: 'phat', 
    price: 1111, 
    type: 'human'
}
]
console.log(product);
console.log(products);
console.log(products[1]);

//? convert json object  to string 

let str = JSON.stringify(product);
console.log(str);

let strProducts = JSON.stringify(products);
console.log(strProducts);

//? convert string to json object 

let objects = JSON.parse(strProducts);

console.log(objects);