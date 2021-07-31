let searchInput = document.getElementById('searchInput');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchKey = ''
function handleChange(e) {
	searchKey = e.target.value;
}

let currentId = 1;
const addTodo = () => {
	let div = document.createElement('div');
	let span = document.createElement('span');
	let button = document.createElement('button');
	span.textContent = searchKey;
	span.id =  `${currentId}-span`;
	button.innerText = 'Remove';
	button.id = `${currentId}-button`;
	div.id = currentId;
	div.append(span, button);
	list.appendChild(div);
	currentId++;
}

const handleToDoClick = (e) => {
	if(e.path[0].id.includes('span')) {
		toggleDone(e.path[0].id)
	}
	if(e.path[0].id.includes('button')) {
		removeToDo(e.path[0].id)
	}
}

const removeToDo = (id) => {
	console.log(id);
	let divId = id.split('-')[0];
	let elementToRemove = document.getElementById(divId);
	list.removeChild(elementToRemove);
}


const toggleDone = (elementId) => {
	let elementToEdit = document.getElementById(elementId);
    elementToEdit.classList.toggle('is-done');
}

searchInput.addEventListener('change', (e) => handleChange(e));
button.addEventListener('click', addTodo);
list.addEventListener('click', (e) => handleToDoClick(e));

// let currentElement = {
// 	id: null,
// 	isDone: false
// }

// {
// 	0: false,
// 	1: true,
// }