// Write your code here!

let main = document.getElementById('main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
document.head.appendChild(newHeader)

newHeader.innerHTML = 'Rachel is the champion'

