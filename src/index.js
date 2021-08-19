import './style.css';
import Completed from './components/status.js' ;


const ul = document.querySelectorAll("ul");
const todos = JSON.parse(localStorage.getItem('todo')) || [
  {
    description: "Take a shower",
    completed: false,
    //index: 1,
  },
  {
    description:"Read my new book",
    completed: false,
    //index: 2,
  },
  {
    description: "Wash asdfasdfasdfasdf dishes",
    completed: true,
    //index: 3,
  },
  {
    description: "Go at the supermarket",
    completed: true,
    //index: 4,
  },
];

const displayTodos = () => {
  todos.forEach((item, index) => {
    console.log(item);
    const checkItem = item.completed ? 'checked' : '';
    const lineTrought = item.completed ? 'trought-line' : '';
    item.index = index;
    console.log(item.description);
    const listElement =   
     `<li>` +
	`<input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${checkItem}> ` +
	  `<h4 class="text ${lineTrought} trought-line"> ${item.description} </h4>` +
	  `<img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="Vertical Menu">` +
      `</li>`;
    console.log(listElement);
    ul[0].insertAdjacentHTML(
              'beforeend',
      listElement      ); 
  });
  Completed.completeTodo(todos);
}

displayTodos();
