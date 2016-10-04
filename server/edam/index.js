const express = require('express');
const user = require('./userController');
const notebooks = require('./notebooksController');
const notes = require('./notesController');
const search = require('./searchController');
const tags = require('./tagsController');

const router = express.Router();

// user
router.get('/user', user.getUser);

// notebooks
router.get('/notebooks', notebooks.listNotebooks);
router.get('/notebooks/:guid', notebooks.getNotebook);
router.post('/notebooks', notebooks.createNotebook);
router.put('/notebooks/:guid', notebooks.updateNotebook);

// notes
router.get('/notes/:guid', notes.getNote);
router.post('/notes', notes.createNote);
router.put('/notes/:guid', notes.updateNote);

// search
router.get('/search', search.listSearches);
router.get('/search/:guid', search.getSearch);
router.post('/search', search.createSearch);
router.put('/search/:guid', search.updateSearch);

// tags
router.get('/tags', tags.listTags);
router.get('/tags/:guid', tags.getTag);
router.post('/tags', tags.createTag);
router.put('/tags/:guid', tags.updateTag);

module.exports = router;
