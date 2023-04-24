// var express = require('express');
import express from "express";
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import chapterRouter from './chapters.js'
import mangasRouter from './mangas.js'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Minga API',
    subtitle: 'endpoints of Minga'          
  });
});

router.use('/users', userRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoryRouter)
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangasRouter)

export default  router;