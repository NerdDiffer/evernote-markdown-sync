const { client, handleResponse, todo } = require('./_shared');

// GET /edam/search => NoteStore.listSearches
exports.listSearches = (req, res) => {
  const store = client.getNoteStore();
  store.listSearches(handleResponse.bind(null, res));
};

// GET /edam/search/:guid => NoteStore.getSearch
exports.getSearch = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// POST /edam/search => NoteStore.createSearch
exports.createSearch = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// PUT /edam/search/:guid => NoteStore.updateSearch
exports.updateSearch = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};
