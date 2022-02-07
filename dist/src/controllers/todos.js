"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newToDo = new todo_1.ToDo(Math.random().toString(), text);
    TODOS.push(newToDo);
    res.status(201).json({
        message: "Created a todo.",
        createdToDo: newToDo,
    });
};
exports.createToDo = createToDo;
