
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select('*')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .select('*')
    .first()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const {title, description, price, item_image} = req.body;
  const insertClassified = {title, description, price, item_image};
  knex('classifieds')
    .insert(insertClassified, ['id', 'title', 'description', 'price', 'item_image', 'created_at'])
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/:id', (req, res, next) => {
  knex('classifieds')
    .update(req.body, ['id', 'title', 'description', 'price', 'item_image'])
    .where('id', req.params.id)
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .del(['id', 'title', 'description', 'price', 'item_image'])
    .then((data) => {
      res.send(data[0])
    })
    .catch((err) => {
      next(err);
    })
});

module.exports = router;
