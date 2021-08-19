import './style.css';
import Completed from './components/status.js' ;


const ul = document.querySelectorAll("ul");
const todos = JSON.parse(localStorage.getItem('todo')) || [
  {
    desctiption: "Take a shower",
    completed: false,
    index: 1,
  },
  {
    desctiption: "Read my new book",
    completed: false,
    index: 2,
  },
  {
    description: "Wash dishes",
    completed: true,
    index: 3,
  },
  {
    desctiption: "Go at the supermarket",
    completed: true,
    index: 4,
  },
];

const displayTodos = () => {
  todos.forEach((item, index) => {
    const checkItem = item.completed ? 'checked' : '';
    const lineTrought = item.completed ? 'trought-line' : '';
    item.index = index;
    ul.innerHTML += `
      <li>
	<input type="checkbox" class="checkbox" id="checkbox-${ item.index }" ${checkItem}>
	  <h4 class="text ${ lineTrought }"> ${ item.description } </h4>
	  <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="Vertical Menu">
      </li>
    `;
  });
  Completed.completeTodo(todos);
}

displayTodos();
