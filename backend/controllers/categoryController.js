import { json } from 'express'
import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

export const addCategory = async(req,res) => {
    const image = req.file
    const data = req.body
    const category = await Category.findOne({name : data.name})
    if(!category){
        const newCategory = new Category({
            name: data.name,
            image: image.path
        })
        await newCategory.save()
        console.log(newCategory)
        res.json({msg:'Category Added'})
    }
    res.json({msg:'Category Already exist!'})
}


export const getCategory = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Category.countDocuments({ ...keyword })
    const category = await Category.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ category, page, pages: Math.ceil(count / pageSize) })
  })