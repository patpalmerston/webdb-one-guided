const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
	// get data from database and return it to client
	// select * from posts
	// can also do db('posts) like below
	// db('posts').select('id', 'title', 'contents').then().catch()

	// db.select('*')
	// 	.from('posts')
	// 	.then(posts => {
	// 		res.status(200).json(posts);
	// 	})
	// 	.catch(err => {
	// 		res.json(err);
	// 	});

	db('posts')
		.select('id', 'title', 'contents')
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get('/:id', (req, res) => {
	// select * from posts where id = 2
	const { id } = req.params;
	db('posts') // *** you will always get an array, but need to pull the object out with [0] or .first()
		.where({ id })
		.first()
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => {
			res.json(err);
		});
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
