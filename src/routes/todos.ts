import { Router } from "express";
import { createToDo } from "../controllers/todos";

const router = Router();

router.get("/");
router.post("/", createToDo);
router.patch("/:id");
router.delete("/:id");

export default router;
