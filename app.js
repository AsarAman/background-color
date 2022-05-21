let color = ['red', 'green', 'blue', 'yellow']

const button = document.querySelector('#change')
const update = document.querySelector('.update')
 
button.addEventListener('click', function() { 
const random = randomNum()
document.body.style.backgroundColor = color[random]
update.textContent = color[random]

})

function randomNum() {
    return (Math.floor (Math.random() * color.length))
}