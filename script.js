const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

  const task = taskInput.value;

  if (task.trim() === "") {
    alert("やることを入力してください");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);

  taskInput.value = "";
});
