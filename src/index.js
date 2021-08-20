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
}

displayTodos();
