// arrow functions

// 1
const greet = function() {
    return 'hello, world';
}

// can be rewritten as
const green = () => 'hello, world'
const result = greet()
console.log(result)

// 2
// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//     return total
// }

// can be rewritten as
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}

console.log(bill([1, 2, 3], .07))