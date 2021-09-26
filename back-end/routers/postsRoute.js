const express = require('express');
const {getAllPosts, createOnePost, updateOnePost, deleteOnePost} = require('../controllers/postsController.js');
const { route } = require('./authRoute');
const {verifyToken} = require('../middlewares/verifyToken')
const Router = express.Router();

Router.route('/').get(getAllPosts).post(verifyToken, createOnePost);

Router.route('/:postId').put(verifyToken, updateOnePost).delete(verifyToken, deleteOnePost);

module.exports = Router;