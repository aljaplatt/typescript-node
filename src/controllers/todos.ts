import { RequestHandler } from "express";
import { ToDo } from "../models/todo";

const TODOS: ToDo[] = [];

export const createToDo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newToDo = new ToDo(Math.random().toString(), text);

  TODOS.push(newToDo);

  res.status(201).json({
    message: "Created a todo.",
    createdToDo: newToDo,
  });
};
