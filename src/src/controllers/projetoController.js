// src/controllers/projetoController.js
const Post = require('../models/postModel');

// Função para pegar todos os posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para criar um novo post
const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para buscar um post específico
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para atualizar um post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para deletar um post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json({ message: 'Post deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllPosts, createPost, getPostById, updatePost, deletePost };
