
const input = document.getElementById("input")
const addButton = document.getElementsByClassName("addButton")[0];//para que devuelva el primer elemento de la lista de clase
const list = document.getElementsByName("list")[0];

//Funcion agregar un nuevo item a la lista

function addTask() {
    const textInput = input.ariaValueMax.trim();

    if (textInput !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = textInput;

        const deleteButton = docuemnt.createElement("button");
        deleteButton.textContent = "eliminar";

        deleteButton.onclick = function () {
            newTask.style.animation = "slideOut 0.5s forwards";

            newTask.addEventListener("animationend", function () {
                list.removeChild(newTask);
            });
        }
        newTask.appendChild(deleteButton);

        list.appendChild(newTask);
        input.value = " ";


    }
}

addButton.addEventListener("click", addTask);

