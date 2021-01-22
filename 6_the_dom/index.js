// alert("hey")

// best way to grab an element from the dom (or query the dom) is using querySelector
//// here we're grabbing the first 'p' tag it comes across and ignores the rest
const para = document.querySelector('p')
console.log(para)

//class selector // here it grabs the first error class it comes across
const para2 = document.querySelector('.error')
console.log(para2)

// if there's another error class 
const para3 = document.querySelector('div.error')
console.log(para3)

// to grab multiple elements

const paras = document.querySelectorAll('p')
// console.log(paras)

// to get one at a certain position, such as the 2nd <p>
console.log(paras[1])

// get element by ID
const title = document.getElementById('page-title')
console.log(title)