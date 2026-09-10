import type { Request, Response, NextFunction } from "express";

const MAINTENANCE_MODE = false;

export const checkMaintenance = (req: Request, res: Response, next: NextFunction) => {
    if (MAINTENANCE_MODE) {
        res.status(503).json({ message: "Servicio temporalmente no disponible por mantenimiento." });
        return;
    };
    next();
};