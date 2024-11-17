// script.js
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-btn');
  const inputField = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Add a new to-do item
  addButton.addEventListener('click', addTodoItem);

  // Add item on pressing "Enter" key
  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTodoItem();
    }
  });

  function addTodoItem() {
    const taskText = inputField.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('todo-item');

      const taskPara = document.createElement('p');
      taskPara.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
      });

      listItem.appendChild(taskPara);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);

      // Clear input field
      inputField.value = '';
    }
  }
});
