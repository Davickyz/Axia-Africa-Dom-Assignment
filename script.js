const inputText = document.getElementById('input-text');
const addButton = document.getElementById('add-btn');
const ulList = document.querySelector('ul');


function getInput() {
  if (!inputText.value.trim()) return;

  let newList = document.createElement('li');
  newList.innerHTML = `
    <p>${inputText.value}</p>
    <div>
      <button class="completed-list">
        <img class="icon" src="images/carbon--task-complete.svg" alt="completed">
      </button>
      <button class="remove-list">
        <img class="icon" src="images/material-symbols--delete.svg" alt="delete">
      </button>
    </div>
  `;
  ulList.appendChild(newList);

  inputText.value="";

  const completedBtn = newList.querySelector('.completed-list');
  completedBtn.addEventListener('click', function() {
    completedList(this, newList, completedBtn);
  });

  const removeBtn = newList.querySelector('.remove-list');
  removeBtn.addEventListener('click', function() {
    removeItem(this);
  });
}

inputText.addEventListener('keydown', (event) => {
  // console.log(event.target.value);
  if(event.key === 'Enter'){
    getInput();
  };
});

addButton.addEventListener('click', getInput);  

function removeItem(currentRemoveBtn) {
  currentRemoveBtn.closest('li').remove();
};

function completedList(currentCompleteBtn, newList, completedBtn) {
  const listGroup = currentCompleteBtn.closest('li');
  listGroup.querySelector('p').style = 'text-decoration: line-through; color: #545454; font-weight: 300;'
  console.log('line-through');

  const divElememt = newList.querySelector('div');
  const undoCompleteBtn = document.createElement('button');
  undoCompleteBtn.setAttribute('class', 'undo-complete-list')
  undoCompleteBtn.innerHTML= `<img class="icon" src="images/material-symbols--undo.svg" alt="completed">`;
  divElememt.replaceChild(undoCompleteBtn, completedBtn);

  

  undoCompleteBtn.addEventListener('click', () => {
    undoChanges(newList, completedBtn, undoCompleteBtn);
  })
}



function undoChanges (newList, completedBtn, undoCompleteBtn) {
  // const listGroup = currentUndoBtn.closest('li');
  // console.log(listGroup.innerHTML)
  newList.querySelector('p').style = 'text-decoration: none; color:#fff;'
  console.log('reset');

  const divElememt = newList.querySelector('div');
  divElememt.replaceChild(completedBtn, undoCompleteBtn);
}