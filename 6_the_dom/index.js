// alert("hey")

//best way to grab an element from the dom (or query the dom) is using querySelector
//// here we're grabbing the first 'p' tag it comes across and ignores the rest
const para = document.querySelector('p')
console.log(para)

//class selector
const para2 = document.querySelector('.error')
console.log(para2)