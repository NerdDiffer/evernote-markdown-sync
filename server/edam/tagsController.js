const { client, handleResponse, todo } = require('./_shared');

// GET /edam/tag => NoteStore.listTags
exports.listTags = (req, res) => {
  const store = client.getNoteStore();
  store.listTags(handleResponse.bind(null, res));
};

// GET /edam/tag/:guid => NoteStore.getTag
exports.getTag = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// POST /edam/tag => NoteStore.createTag
exports.createTag = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// PUT /edam/tag/:guid => NoteStore.updateTag
exports.updateTag = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};
