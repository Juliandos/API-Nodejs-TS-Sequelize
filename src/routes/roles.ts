import { Router } from "express";
import { getRoles, getRol, createRol, updateRol, deleteRol } from "@/controllers/roles";

const router = Router();

// GET all roles
router.get("/", getRoles);

// GET one role by id
router.get("/:id", getRol);

// CREATE new role
router.post("/", createRol);

// UPDATE role
router.put("/:id", updateRol);

// DELETE role
router.delete("/:id", deleteRol);

export { router };
