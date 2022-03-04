export const getTasks = async () => {
    const tasks = [{
        "title": "i must create an app",
        "description": "with react native",
        "id": 1
    }, {
        "title": "i must create an server",
        "description": "with node js",
        "id": 2
    }]
    console.log(tasks);
    return tasks
}

export const getTask = async (id) => {
    console.log(`get task ${id}`)
}

export const saveTask = async (newTask) => {
    console.log(newTask)
}

export const updateTask = async (id, newTask) => {
    console.log(`update task id ${id}`)
    console.log(newTask)

}

export const deleteTask = async (id) => {
    console.log(`delete id ${id}`)
}