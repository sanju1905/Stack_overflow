// Import necessary modules and model
import express from 'express';
import { Thoughts, Videos, Photos, Audio, shareSubmit } from "../controllers/PublicController.js";
import { Insta } from "../models/Quiz.js";

const router = express.Router();

router.get('/Thoughts', Thoughts);
router.get('/Videos', Videos);
router.get('/Photos', Photos);
router.get('/Audio', Audio);
router.post('/share', shareSubmit);

export default router;
