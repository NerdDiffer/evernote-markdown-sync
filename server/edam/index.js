const express = require('express');
const handlers = require('./handlers');

const router = express.Router();

// user
router.get('/user', handlers.getUser);

// notebooks
router.get('/notebooks', handlers.listNotebooks);
router.get('/notebooks/:guid', handlers.listNotebook);
router.post('/notebooks', handlers.createNotebook);
router.put('/notebooks/:guid', handlers.updateNotebook);

// notes
router.get('/notes/:guid', handlers.getNote);
router.post('/notes', handlers.createNote);
router.put('/notes/:guid', handlers.updateNote);

// search
router.get('/search', handlers.listSearches);
router.get('/search/:guid', handlers.getSearch);
router.post('/search', handlers.createSearch);
router.put('/search/:guid', handlers.updateSearch);

// tags
router.get('/tags', handlers.listTags);
router.get('/tags/:guid', handlers.getTag);
router.post('/tags', handlers.createTag);
router.put('/tags/:guid', handlers.updateTag);

module.exports = router;
