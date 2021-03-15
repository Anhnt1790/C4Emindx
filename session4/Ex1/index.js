// let product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'White',
// };
// for (let i = 0; i < product.lenght; i++) {
//     console.log(product[i]);
// }
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};

for(let prop in product){
    console.log(prop + ':' + product[prop]);
}
