import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } from "@/controllers/usuarios";
import { verifyToken } from "@/middlewares/auth.middleware";

const router = Router();

// GET all usuarios
router.get("/", verifyToken, getUsuarios);

// GET one usuario by id
router.get("/:id", getUsuario);

// CREATE new usuario
router.post("/", createUsuario);

// UPDATE usuario
router.put("/:id", updateUsuario);

// DELETE usuario
router.delete("/:id", deleteUsuario);

export { router };
