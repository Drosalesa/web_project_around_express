import mongoose from "mongoose";
import type { RequestHandler, Request, Response } from "express";
import User from "../models/user.js";

const getUsers: RequestHandler = async (req: Request, res: Response) => {
    const users = await User.find({});
    res.json(users);
}

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      throw Object.assign(new Error("No se encontró ningún usuario con ese id"), {
        statusCode: 404
      });
    }
    res.send(user);
}

const createUser = async (req: Request, res: Response) => {
    const user = await User.create({
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar
    })
    res.status(201).send(user)
}

const getCurrentUser = async (req: Request, res: Response) => {
    const currentUser = await User.findById(req.user?._id);
    res.send(currentUser);
}

const updateCurrentUser = async (req: Request, res: Response) => {
    const currentUser = await User.findByIdAndUpdate(
        req.user?._id,
    {
        name: req.body.name,
        about: req.body.about,
    }, { new: true, runValidators: true });
    res.send(currentUser);
}

const updateAvatar = async (req: Request, res: Response) => {
    const currentUser = await User.findByIdAndUpdate(
        req.user?._id,
    {
        avatar: req.body.avatar,
    }, { new: true, runValidators: true });
    res.send(currentUser);
}

export {getUsers, getUserById, createUser, getCurrentUser, updateCurrentUser, updateAvatar}