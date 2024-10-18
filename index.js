const fs = require("fs");
const filePath = "./tasks.json";
const [, , command, ...args] = process.argv;
// console.log(args);

switch (command) {
  case "add":
    addTask(args.join(" "));
    break;
  case "list":
    listTasks(args.slice(0).join(" "));
    break;
  case "delete":
    deleteTask(parseInt(args[0]));
    break;
  case "update":
    updateTask(parseInt(args[0]), args.slice(1).join(" "));
    break;
  case "mark":
    markTask(parseInt(args[0]), args.slice(1).join(" "));
    //  console.log(args.slice(1).join(' '))
    break;
  default:
    console.log("Unknown Command use add list delete update and mark");
}
function loadTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}
function addTask(description) {
  const tasks = loadTasks();
  // console.log(tasks.length)
  const newTask = {
    id: tasks.length + 1,
    description,
    status: "not-done",
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Task Added :", description);
}
function listTasks(filter) {
  let tasks = loadTasks();
  if (tasks.length == 0) {
    console.log("No tasks found");
  } else if (filter !== "") {
    // console.log('ss')
    tasks = tasks.filter((task) => task.status === filter);
    tasks.forEach((task) => {
      console.log(`${task.id}. [${task.status}] - ${task.description}`);
    });
  } else {
    tasks.forEach((task) => {
      console.log(`${task.id}. [${task.status}] - ${task.description}`);
    });
  }
}
function deleteTask(id) {
  let tasks = loadTasks();
  let task = tasks.find((task)=>task.id==id)
  if(task){
    tasks = tasks.filter((task) => task.id != id);
  saveTasks(tasks);
  console.log("Task Deleted:", id);
  }else{
    console.log('Task not Found')
  }
}
function updateTask(id, newDescription) {
  const tasks = loadTasks();
  const task = tasks.find((task) => (task.id = id));
  if (task) {
    task.description = newDescription;
    saveTasks(tasks);
    console.log("Task updated:", id);
  } else {
    console.log("Task not found:", id);
  }
}
function markTask(id, status) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id == id);
  if (task) {
    // console.log(status==='in progress');
    if (["in-progress", "done", "not-done"].includes(status)) {
      task.status = status;
      saveTasks(tasks);
      console.log(`Task marked as ${status}:`, id);
      // console.log(`Task marked as ${status}:`,id)
    } else {
      console.log('Invalid status. Use "in-progress","done" ,or "not-done');
    }
  } else {
    console.log("Task not found:", id);
  }
}
