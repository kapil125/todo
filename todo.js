const addBtn = document.getElementById("add-btn");
const userEntered = document.querySelector("input");
let a = 0;

const render = () => {
  let userEntered = document.querySelector("input");
  if (userEntered.value === "") {
    alert("Noting To Add");
  } else {
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.id = `a${a}`; //Giving every li element a unique id ...It will help to remove respective li element
    a++;
    li.innerHTML = `
        <p>${userEntered.value}</p>
        <img src="img/close.png" id="remove-btn" alt="">
        `;
    userEntered.value = "";
    ul.append(li);
    const removeBtn = li.querySelector("img");
    const remover = (li) => {
      let toDel = document.getElementById(`${li}`);
      toDel.remove();
    };
    removeBtn.addEventListener("click", remover.bind(this, li.id));
  }
};

addBtn.addEventListener("click", render);