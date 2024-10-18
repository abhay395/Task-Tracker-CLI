# Task-Tracker-CLI

A simple command-line tool for tracking your tasks efficiently. With Task-Tracker-CLI, you can easily add, delete, update, and mark tasks as "in-progress," "not-done," or "done." It's perfect for managing your daily activities directly from the terminal.

[**project URL**](https://github.com/abhay395/Task-Tracker-CLI) 

## Table of Contents
- [Features](#features)
- [Add Task](#add-task)
- [List Tasks](#list-tasks)
- [Delete Task](#delete-task)
- [Update Task](#update-task)
- [Mark Task](#mark-task)

## Features

- **Add Task:** Quickly add tasks to your list.
- **List Tasks:** View all tasks based on their status.
- **Delete Task:** Remove tasks you no longer need.
- **Update Task:** Edit task descriptions.
- **Mark Task:** Change the status of a task to "in-progress," "not-done," or "done."

## Add Task

To add a new task, use the `add` command followed by the task description:

```bash
node index.js add "Complete the project documentation"
```

After adding a task, a success message will appear confirming that the task has been added.

## List Tasks

You can list tasks based on their status using the `list` command. If no status is specified, all tasks will be displayed:

```bash
# List all tasks
node index.js list

# List tasks based on status (e.g., "done", "in-progress", "not-done")
node index.js list done
```

This command will display tasks that match the given status. If no status is specified, all tasks will be shown.

## Delete Task

To delete a task, use the `delete` command followed by the task ID:

```bash
node index.js delete 3
```

The task with the given ID will be removed. If the ID doesn't exist, you will see an error message indicating that the task wasn't found.

## Update Task

To update an existing task, use the `update` command followed by the task ID and the new description:

```bash
node index.js update 2 "Review the latest code changes"
```

This will update the task's description with the specified ID.

## Mark Task

Change the status of a task using the `mark` command. You can mark tasks as "in-progress," "not-done," or "done":

```bash
node index.js mark 1 done
```

The task's status will be updated based on the provided ID.
