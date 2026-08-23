JavaScript（script.js）
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const task = taskInput.value;

  if (task === "") {
    alert("やることを入力してください");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  // クリックすると完了状態にする
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // タスクを追加
  taskList.appendChild(li);

  // 入力欄を空にする
  taskInput.value = "";
});
