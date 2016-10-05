const { Tag } = require('evernote').Evernote;
const { client, handleResponse, todo } = require('./_shared');

// GET /edam/tag => NoteStore.listTags
exports.listTags = (req, res) => {
  const store = client.getNoteStore();
  store.listTags(handleResponse.bind(null, res));
};

// GET /edam/tag/:guid => NoteStore.getTag
exports.getTag = (req, res) => {
  const { guid } = req.params;

  const store = client.getNoteStore();
  store.getTag(guid, handleResponse.bind(null, res));
};

// POST /edam/tag => NoteStore.createTag
exports.createTag = (req, res) => {
  const { name, parentGuid } = req.body;

  const store = client.getNoteStore();
  const tag = new Tag({
    name,
    parentGuid
  });

  store.createTag(tag, handleResponse.bind(null, res));
};

// PUT /edam/tag/:guid => NoteStore.updateTag
exports.updateTag = (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  const store = client.getNoteStore();
  const tag = new Tag({
    guid,
    name
  });

  store.updateTag(tag, handleResponse.bind(null, res));
};
