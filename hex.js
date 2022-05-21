let color = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']

const button = document.querySelector('#change')
const update = document.querySelector('.update')

button.addEventListener('click', function() {
    let hex = '#'
    for(let i=0; i<6; i++) {
        hex += color[getRandom()]
    }
    document.body.style.backgroundColor = hex
    update.textContent = hex
})

function getRandom () {
    return Math.floor(Math.random() * color.length)
}