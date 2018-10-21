'use strict'

const db = require('APP/db')
const Sequelize = require('sequelize')
const Product = db.model('products')
const Batch = db.model('batch')
console.log("batch", Batch)
console.log("product", Product)

  module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    if (req.body.longDescription && req.body.founderInfo && req.body.shortDescription && req.body.productName){
      Product.create({
        name: req.body.productName,
        description: req.body.longDescription,
        informationOnFounders: req.body.founderInfo,
        shortDescription: req.body.shortDescription,
        link: req.body.link,
        status: "review"
      })
      .then((product) => {
        res.send(product)
      }).catch(()=>{
        res.send('error')
      })
    }
    else{
      res.end()
    }
  })

  .get('/featured', (req, res, next)=>{
    let currentBatch;
    console.log("Badtch", Batch)
    Batch.findOne().then((batch)=>{
      Product.findAll({
        where:{
          status: 'accepted',
          batch: batch.batch 
        }
      })
      .then((products)=>{
        res.send(products)
      })
    })
    .catch(()=>{
      res.send('error')
    })
  })

  .get('/recent', (req, res, next)=>{
    let currentBatch;
    console.log("Badtch", Batch)
    Batch.findOne()
    .then((batch)=>{
      Product.findAll({
        where:{
          status: 'rejected',
          batch: batch.batch 
        }
      })
      .then((products)=>{
        res.send(products)
      })
    })
    .catch(()=>{
      res.send('error')
    })
  })

  .get('/past', (req, res, next)=>{
    let currentBatch;
    console.log("Badtch", Batch)
    Batch.findOne()
    .then((batch)=>{
      Product.findAll({
        where:{
          status: 'accepted',
          batch: {
            [Op.ne]: batch.batch
          }
        }
      })
      .then((products)=>{
        res.send(products)
      })
    })
    .catch(()=>{
      res.send('error')
    })
  })

  .get('/admin', (req, res, next)=>{
    const Op = Sequelize.Op
    Product.findAll({
      where:{
        status:{
          [Op.or]: ["review", "accepted"]
        }
      }
    }).then((inReviewProducts)=>{
      res.send(inReviewProducts)
    })
    .catch(()=>{
      res.send('error')
    })
  })

  .put('/', (req, res, next)=>{
    const productId = req.body.productId;
    const status = req.body.status;
    let batchNumber;
    Batch.findOrCreate()
    .then(btchNum)=>{
      batchNumber = btchNum
      Product.update({
        status,
        batch: batchNumber
      }, {
        where: {
          id: productId
        }
      })
        .then((resp => {
          res.json(resp)
        }))
    }
  })