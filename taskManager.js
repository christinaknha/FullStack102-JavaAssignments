let taskManager = (function() {
    let task = []

    function addTask(tasks) {
        task.push(tasks);
    }

    function displayTasks() {
        console.log(task)
    }

    return {
        addTask: addTask,
        displayTasks: displayTasks
    };

})();

taskManager.addTask("make breakfast")
taskManager.addTask("wash dishes")
taskManager.addTask("sweep floor")
taskManager.displayTasks()
