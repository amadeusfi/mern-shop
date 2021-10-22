import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// all the routes points to a controllers function

//@desc Fetch all Products
//@route GET /api/products
//@access Public

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
