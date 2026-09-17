import mongoose from "mongoose";
import type { RequestHandler } from "express";
import Card from "../models/card.js";
import type { REPLCommand } from "repl";
import { request } from "http";

const getCards: RequestHandler = async (req, res) => {
    const cards = await Card.find({});
    res.send(cards);
}

const createCard: RequestHandler = async (req, res) => {
  const card = await Card.create({
    name: req.body.name,
    link: req.body.link,
    owner: String(req.user?._id)
  })
  res.status(201).send(card);
}

const deleteCard: RequestHandler = async (req, res) => {
  const card = await Card.findByIdAndDelete(req.body._id)
  if (!card) {
        return res.status(404).send({message: "Carta no encontrado"});
    };
    res.send(card);
}

const likeCard: RequestHandler = async (req, res) => {
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user?._id } }, // agrega _id si aún no está en el array
    { new: true }
  );
  res.send(card);
}

export const dislikeCard: RequestHandler = async (req, res) => {
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user?._id } }, // elimina _id del array
    { new: true },
  );
  res.send(card);
};

export {getCards, createCard, deleteCard}