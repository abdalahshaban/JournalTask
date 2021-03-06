const express = require('express');
const { addArticle, editArticle, deleteArticle, aprroveArticle, getArticleInfo, getArticlesSortedByMostPopularAuthorsOrAuthorViewAllArticles } = require('./articleController');

const router = express.Router();

router.post('/article/add-article', addArticle);
router.put('/article/edit-article/:articleId', editArticle);
router.delete('/article/delete-article/:articleId', deleteArticle);
router.get('/article/approve-article/:articleId', aprroveArticle);
router.get('/article/get-article-info/:articleId', getArticleInfo);
router.get('/article/getArticlesSortedByMostPopularAuthorsOrAuthorViewAllArticles', getArticlesSortedByMostPopularAuthorsOrAuthorViewAllArticles);


module.exports = router;