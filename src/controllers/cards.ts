import mongoose from "mongoose";
import type { RequestHandler } from "express";
import Card from "../models/card.js";

const getCards: RequestHandler = async (req, res) => {
    const cards = await Card.find({});
    const currentUserId = req.user?._id;

    const cardsWithIsLiked = cards.map((card) => ({
      ...card.toObject(),
      isLiked: card.likes.some((id) => id.toString() === currentUserId),
    }));
    res.send(cardsWithIsLiked);
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
    return res.status(404).send({message: "Carta no encontrada"});
  };
  res.send(card);
}

const likeCard: RequestHandler = async (req, res) => {
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user?._id } },
    { new: true }
  );
  if (!card) {
    return res.status(404).send({message: "Carta no encontrada"});
  };
  const currentUserId = req.user?._id;

  res.send({
    ...card.toObject(),
    isLiked: card.likes.some((id) => id.toString() === currentUserId)
  });
}

const dislikeCard: RequestHandler = async (req, res) => {
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user?._id } },
    { new: true },
  );
  if (!card) {
    return res.status(404).send({message: "Carta no encontrada"});
  };
  const currentUserId = req.user?._id;

  res.send({
    ...card.toObject(),
    isLiked: card.likes.some((id) => id.toString() === currentUserId)
  });
};

export {getCards, createCard, deleteCard, likeCard, dislikeCard};