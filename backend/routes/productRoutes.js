import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  updateProductStock,
  createProductReview,
  getTopProducts,
  getProductByCategory
} from '../controllers/productController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/categoryProducts', getProductByCategory)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.route('/:id/stock').put(protect, updateProductStock)

export default router
