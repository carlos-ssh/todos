import './style.css';
import Completed from './components/status.js' ;


const ul = document.querySelectorAll("ul");
const todos = JSON.parse(localStorage.getItem('todo')) || [];

const displayTodos = () => {
  todos.forEach((item, index) => {
    const checkItem = item.completed ? 'checked' : '';
    const lineTrought = item.completed ? 'trought-line' : '';
    item.index = index;
    ul[0].innerHTML += `
      <li>
	<input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${checkItem}>
	  <h4 class="text ${lineTrought}">
	    ${item.description}
	  </h4>
	  <img class="drop" src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="vertical menu"/>
      </li>`;
  });
 
  Completed.completeTodo(todos);
  Completed.changeIcon();
}

displayTodos();

const clearItems = () => {
  const ul = document.getElementById('list');
  ul.innerHTML = '';
};

const addTodo = () => {
  const input = document.getElementById('input');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
     const todo = input.value;
      if (todo) {
	const newTodo = {
	  description: todo,
	  completed: false,
	  index: todos.length
	};
	todos.push(newTodo);
	clearItems();
	displayTodos();
	Completed.updateLocalStorage(todos);
      }
      input.value = '';
      event.preventDefault();
    }
  });
};

addTodo();

const clearAllCompleted = () => {
  const ul = document.getElementById('list');
  const clearItems = document.getElementById('clear-items-completed');
  clearItems.addEventListener('click', () => {
    todos = todos.filter((todo) => !todo.completed);
    ul.innerHTML = '';
    displayItems();
    IsCompleted.updateLocalStorage(todos);
  });
};

clearAllCompleted();

const remove = () => {
  window.addEventListener('click', (e) => {
    const ul = document.getElementById('list');
    if (e.target && e.target.className.includes('trash')) {
      const id = parseInt(e.target.parentNode.id, 10);
      todos.filter((todo) => todo.index !== id);
      ul.innerHTML = '';
      displayItems();
      IsCompleted.updateLocalStorage(todos);
    } else if (e.target && !e.target.className.includes('text')) {
      const allLi = document.querySelector('#list').childNodes;
      allLi.forEach((list) => {
        const innerInput = list.querySelector('.text');

        innerInput.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
        innerInput.parentNode.querySelector('.open').classList.remove('d-none');
        innerInput.parentNode.style.backgroundColor = '';
        innerInput.style.backgroundColor = '';
      });
    }
  });
};

remove();
