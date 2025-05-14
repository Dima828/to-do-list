const inputelement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

createBtn.onclick = function(){
    if(inputelement.value.length === 0){
        return
    }else{
        listElement.insertAdjacentHTML('beforeend', `
        <li class="list-group-item">
            <span>${inputelement.value}</span>
                <span>
                    <span class="btn btn-small btn-success">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span>
        </li>`)

        inputelement.value = ''
    }  
    
}