const addArticle = require('./article.add');
const editArticle = require('./article.edit');
const deleteArticle = require('./article.delete');
const aprroveArticle = require('./article.approve');
const getArticlesSortedByMostPopularAuthorsOrAuthorViewAllArticles = require('./article.get.all');
const getArticleInfo = require('./article.get.info');


module.exports = {
    addArticle,
    editArticle,
    deleteArticle,
    aprroveArticle,
    getArticlesSortedByMostPopularAuthorsOrAuthorViewAllArticles,
    getArticleInfo
};