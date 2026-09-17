import { Router } from "express";
import { createUser, getCurrentUser, getUserById, getUsers, updateCurrentUser, updateAvatar } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/me", getCurrentUser);
usersRouter.patch("/me", updateCurrentUser);
usersRouter.patch("/me/avatar", updateAvatar);
usersRouter.get("/:id", getUserById);


export {usersRouter}