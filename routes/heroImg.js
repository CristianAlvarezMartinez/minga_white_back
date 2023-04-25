import {Router}  from "express";
import read from '../controllers/hero_imgs/read.js'
let router = Router()

router.get('/', read)

export default router