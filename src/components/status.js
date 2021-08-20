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

  static changeIcon() {
    this.inputs = document.querySelectorAll('.text');
    this.trashes = document.querySelectorAll('.trash');
    this.inputs.map((input, index) => {
      input.addEventListener('focus', () => {
	this.trashes[index].classList.toggle('d-none');
      input.parentNode.querySelector('open').classList.toggle('d-none');
      input.parentNode.style.backgroundColor = '#f9f9f9';
      input.style.backgroundColor = '#f9f9f9';

      const listAll = document.querySelector('#list').childNodes;

      listAll.forEach((list) => {
	const liText = list.querySelector('.text');     
	  
	  if (liText !== input) {
            liText.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
            liText.parentNode.querySelector('.open').classList.remove('d-none');
            liText.parentNode.style.backgroundColor = '';
            liText.style.backgroundColor = '';
	  }
	});
      });
    });
  }
}
