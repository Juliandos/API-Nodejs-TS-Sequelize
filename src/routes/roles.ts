import { getRol } from '@/controllers/roles';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', getRol);

export {router};