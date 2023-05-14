const todoList = [
    {id: 1, task: 'tarea numero 1', status: true},
    {id: 2, task: 'tarea numero 2', status: false},
    {id: 3, task: 'tarea numero 3', status: false}
];

const tbody = document.querySelector('tbody');
const textTodo = document.querySelector('#textTodo');
const addTodo  = document.querySelector('#addTodo');
const totalSpan = document.querySelector('#totalSpan');
const checkedSpan = document.querySelector('#checkedSpan');

const pintar = () => {
    let template = '';
    let count = 0;
    for (let todo of todoList) {
        template +=
        `
        <tr>
            <td>${todo.id}</td>
            <td class="${todo.status && 'finish'}">${todo.task}</td>
            <td>
                <input type="checkbox" ${todo.status && 'checked'} onclick="marcar(${count})">
                <i class="fa-solid fa-trash" onclick="remove(${count})"></i>
            </td>
        </tr>
        `;
        count++;
    }
    tbody.innerHTML = template;
    totalSpan.innerHTML = todoList.length;
    checkedSpan.innerHTML = todoList.filter((task) => task.status).length;
}


const marcar = (index) => {
   todoList[index].status = !todoList[index].status;
   pintar();
}

const remove = (index) => {
    todoList.splice(index, 1);
    pintar();
}

addTodo.addEventListener('click', () => {
    const index = todoList.length - 1;
    const actualId = todoList[index].id;
    const newID = actualId + 1;

    const newTodo = { id: newID, task: textTodo.value, status: false };

    todoList.push(newTodo);

    pintar();
});

pintar();