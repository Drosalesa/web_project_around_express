import mongoose from "mongoose";
import type { RequestHandler, Request, Response } from "express";
import User from "../models/user.js";

type UserData = {
    name: string;
    about: string;
    avatar: string;
    _id: string;
}

const getUsers: RequestHandler = async (req: Request, res: Response) => {
    const users = await User.find({});
    res.json(users);
}

const getUserById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
        return res.status(400).send({ message: "ID inválido" });
    }
    const user = await User.findById(id);
    res.send(user);
}

const createUser: RequestHandler = async (req, res) => {
    const user = User.create({
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar
    })
    res.status(201).send(user)
}

export {getUsers, getUserById, createUser}