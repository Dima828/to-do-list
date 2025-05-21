const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = JSON.parse(localStorage.getItem('notes')) ||[
    {
        title: '123',
        complited: false,
    },
    {
        title: '321',
        complited: true,
    },
]

function saveLocal(){
    localStorage.setItem('notes', JSON.stringify(notes))
}

function render(){
    listElement.innerHTML = ''
    if(notes.length == 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    saveLocal()
}

render()

createBtn.onclick = function(){
    if(inputElement.value.length === 0){
        return
    }else{
        const newNote = {
            title: inputElement.value,
            complited: false,
        }
        notes.push(newNote)
        render()
        inputElement.value = ''
    }  
}

listElement.onclick = function(event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type == 'toggle'){
            notes[index].complited = !notes[index].complited
        }else if (type == 'remove'){
            notes.splice(index, 1)
        }
}

render()

}

function getNoteTemplate(note, index){
    return `
        <li class="list-group-item">
            <span class="${note.complited ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                    <span class="btn btn-small btn-${note.complited ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                    <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
                </span>
        </li>`
}