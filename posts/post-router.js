const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  // get data from database and return it to client
  // select * from posts
	db.select('*')
		.from('posts')
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
