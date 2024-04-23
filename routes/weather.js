import express from 'express';
import { welcomeMsg, searchByCity } from '../controllers/weatherControllers.js';

const router = express.Router();

router.get("/", welcomeMsg)
router.get("/:input", searchByCity)

export default router;