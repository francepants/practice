// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('You clicked me!')
// })


// get li's

const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // console.log('item was clicked')
    
        // e is the event
        // console.log(e)

        // e.target tell us which one (li) we clicked on
        // console.log(e.target)

        e.target.style.textDecoration = 'line-through'
    })
})