import { ResponseError } from "@utils/ResponseError";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error | ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!err) {
    next();
  }
  if (err instanceof ResponseError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
  } else {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
