`use strict`;

//////////////////////////
// DODAWANIE ZMIENNYCH //
////////////////////////

const list = document.querySelector('.list');
const shopping = document.querySelector('.shopping');
const shoppingList = document.querySelector('.shopping-list')
const newItemInput = document.getElementById("newitem-input")



///////////////////////////////////
// DODAWANIE ELEMENTÓW DO LISTY //
/////////////////////////////////

shopping.addEventListener('submit', (e) => {
    e.preventDefault();
    if(newItemInput.value !== ""){
        const element = document.createElement('div');
        element.classList.add("element")
        element.innerHTML = `
        ${newItemInput.value}
        <div class="buttons"> 
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;    
        shoppingList.appendChild(element);
        newItemInput.value = "";
    } else{
        alert("Musisz podać element");
    }
});
   



////////////////////////////////
// USUWANIE ELEMENTU Z LISTY //
//////////////////////////////

shoppingList.addEventListener("click", (e) =>{
    if (e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
});


