export default class Completed {
  static updateLocalStorage(list) {
    const data = JSON.stringify(list);
    localStorage.setItem('todo', data);
  }

  static completeTodo(list) {
    this.checkboxx = document.querySelectorAll('.checkbox');
    this.checkboxx.forEach((checkbox, index) => {
      checkbox.addEventListener('change', function checked() {
	if (this.checked) {
	  checkbox.parentNode.querySelector('.text').classList.add('trought-line');
	  list[index].completed = true;
	} else {
	  checkbox.parentNode.querySelector('.text').classList.remove('trought-line');
	  list[index].completed = false;
	}
	Completed.updateLocalStorage(list);
      });
    });
  }
}
