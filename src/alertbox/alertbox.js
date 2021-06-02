
function promptBox(message) {
    let app = document.getElementById('root');
    let box = document.createElement('div')
    box.id = 'promptBox'
    let context = document.createElement('p')
    context.className = 'context'
    context.innerText = message
    box.appendChild(context)
    app.appendChild(box)
    let s = setTimeout(() => {
        box.remove()
        clearTimeout(s)
    }, 1200);

}

export default promptBox