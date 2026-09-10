import { Router } from "express";
import { getUserById, getUsers } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:userId", getUserById);

export {usersRouter}