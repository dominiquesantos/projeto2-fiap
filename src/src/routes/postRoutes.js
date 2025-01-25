const express = require('express');
const router = express.Router();
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require('../controllers/postController');

// Rota para pegar todos os posts
router.get('/posts', getAllPosts);

// Rota para criar um novo post
router.post('/posts', createPost);

// Rota para pegar um post específico por ID
router.get('/posts/:id', getPostById);

// Rota para atualizar um post
router.put('/posts/:id', updatePost);

// Rota para deletar um post
router.delete('/posts/:id', deletePost);

module.exports = router;
