const inputText = document.getElementById('input-text');
const addButton = document.getElementById('add-btn');
const ulList = document.querySelector('ul');


function getInput() {
  if (!inputText.value.trim()) return;

  let newList = document.createElement('li');
  newList.innerHTML = `
    <p>${inputText.value}</p>
    <button class="remove-list">Remove</button>
  `;
  ulList.appendChild(newList);

  inputText.value="";
  
  const removeBtn = newList.querySelector('.remove-list');
  removeBtn.addEventListener('click', function() {
    removeItem(this);
  });
}

addButton.addEventListener('click', getInput);  

function removeItem(button) {
  button.closest('li').remove();
};