const task = () => {
    let taskStorage = [];
    function createTask(name, description) {
        return { name, description };
    }

    function addTaskToStorage(name, description) {
        let newTask = createTask(name, description);
        taskStorage.push(newTask);
    }

    return { addTaskToStorage };
};

const tasks = task();

export default tasks;
