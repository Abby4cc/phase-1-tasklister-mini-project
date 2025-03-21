document.addEventListener("DOMContentLoaded", function() {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const taskText = taskInput.value.trim(); 
      if (taskText === "") return; 

      addTask(taskText); 
      taskInput.value = ""; 
  });

  function addTask(taskText) {
      const listItem = document.createElement("li"); 
      listItem.textContent = taskText; 

      const deleteButton = document.createElement("button"); 
      deleteButton.textContent = "remove";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function() {
          listItem.remove(); 
      });

      listItem.appendChild(deleteButton); 
      taskList.appendChild(listItem); 
  }
});