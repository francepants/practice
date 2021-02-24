// difference of error and success in the p tags
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(p => {
    // console.log(p.innerText)
    // console.log(p.textContent)
    if(p.textContent.includes('error')) {
        p.classList.add('error')
    } else if (p.textContent.includes('success')){
        p.classList.add('success')
    }
})