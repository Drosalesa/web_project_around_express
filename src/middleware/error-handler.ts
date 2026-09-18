import type { Request, Response, NextFunction } from "express";

function errorHandler(
  err: Error & { statusCode?: number },
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error(err);

  let { statusCode = 500 } = err;

  if (err.name === "ValidationError" || err.name === "CastError") {
    statusCode = 400;
  }

  const message =
    statusCode === 500 ? "Ha ocurrido un error en el servidor" : err.message;

  res.status(statusCode).send({ message });
}

function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    success: false,
    data: null,
    error: `Ruta ${req.method} ${req.path} no encontrada`,
  });
  next();
}

export { errorHandler, notFoundHandler };