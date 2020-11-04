const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const trash = document.querySelector('.delete');
const search = document.querySelector('.search input');

const newTemplate = (todo) => {
  const newTodo =`<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`
  list.innerHTML+= newTodo;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length)
  {
    console.log(todo);
    newTemplate(todo);
    addForm.reset();
  }
});

// Delete TODOs and
list.addEventListener('click',e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

//Seach Action
const todoFilter = (term) =>{

  Array.from(list.children)
  .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
  .filter((todo)=> todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup' , () =>{
  const term = search.value.trim().toLowerCase();
  todoFilter(term.toLowerCase());

})

