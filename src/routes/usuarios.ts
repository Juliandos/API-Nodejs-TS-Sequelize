import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } from "@/controllers/usuarios";

const router = Router();

// GET all usuarios
router.get("/", getUsuarios);

// GET one usuario by id
router.get("/:id", getUsuario);

// CREATE new usuario
router.post("/", createUsuario);

// UPDATE usuario
router.put("/:id", updateUsuario);

// DELETE usuario
router.delete("/:id", deleteUsuario);

export { router };
