import express from 'express'
const router = express.Router()
import * as Category from '../controllers/categoryController.js'
import {uploadFile} from '../middleware/uploadFile.js'


router.post('/addCategory',uploadFile.single('file'),Category.addCategory)
router.get('/getCategory', Category.getCategory)


export default router
