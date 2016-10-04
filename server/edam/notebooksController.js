const { client, handleResponse, todo } = require('./_shared');

// GET /edam/notebooks => NoteStore.listNotebooks
exports.listNotebooks = (req, res) => {
  const store = client.getNoteStore();
  store.listNotebooks(handleResponse.bind(null, res));
};

// GET /edam/notebook/:guid => NoteStore.getNotebook
exports.getNotebook = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// POST /edam/notebook => NoteStore.createNotebook
exports.createNotebook = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// PUT /edam/notebook/:guid => NoteStore.updateNotebook
exports.updateNotebook = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};
