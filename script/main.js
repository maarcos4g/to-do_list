const inputAdd = document.getElementById('inputTask');

const button = document.querySelector('#push');
button.addEventListener('click', addTask);

function addTask() {
    if (inputAdd.value != '') {
        document.getElementById('tasks').innerHTML += `
        <div class="task">
        <span id="taskName">
        ${inputAdd.value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>
        `;
        inputAdd.value = '';
        const buttonDelete = document.querySelectorAll('.delete');
        for (let index = 0; index < buttonDelete.length; index++) {
            buttonDelete[index].onclick = function () {
                this.parentNode.remove();
            };
        }

        const tasks = document.querySelectorAll('.task');
        for (let index = 0; index < tasks.length; index++) {
            tasks[index].onclick = function() {
                this.classList.toggle('completed');
            };
        }
    } else {
        alert('Campo vazio. Preencha com sua tarefa.');
    }
}