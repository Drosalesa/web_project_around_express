import fs from "node:fs/promises";
import path from "node:path";
import type { RequestHandler } from "express";

type UserData = {
    name: string;
    about: string;
    avatar: string;
    _id: string;
}

const usersPath = path.join(import.meta.dirname, "../../data/users.json");

const getUsers: RequestHandler = async (req, res) => {
    const data = await fs.readFile(usersPath, "utf8");
    res.json(JSON.parse(data));
}

const getUserById: RequestHandler = async (req, res) => {
    const userId = req.params.userId;
    const data = await fs.readFile(usersPath, "utf8");
    const users = JSON.parse(data);
    const user = users.find((user: UserData) => user._id === userId);
    console.log(userId);
    console.log(user);
    if(!user) {
        return res.status(404).json({"message": "ID de usuario no encontrado"})
    }
    res.json(user);
}

export {getUsers, getUserById}