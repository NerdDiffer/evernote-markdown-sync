const { Notebook } = require('evernote').Evernote;
const { client, handleResponse, todo } = require('./_shared');

// GET /edam/notebooks => NoteStore.listNotebooks
exports.listNotebooks = (req, res) => {
  const store = client.getNoteStore();
  store.listNotebooks(handleResponse.bind(null, res));
};

// GET /edam/notebook/:guid => NoteStore.getNotebook
exports.getNotebook = (req, res) => {
  const { guid } = req.params;

  const store = client.getNoteStore();
  store.getNotebook(guid, handleResponse.bind(null, res));
};

// POST /edam/notebook => NoteStore.createNotebook
exports.createNotebook = (req, res) => {
  const { name } = req.body;

  const store = client.getNoteStore();
  const notebook = new Notebook({
    name
  });

  store.createNotebook(notebook, handleResponse.bind(null, res));
};

// PUT /edam/notebook/:guid => NoteStore.updateNotebook
exports.updateNotebook = (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  const store = client.getNoteStore();
  const notebook = new Notebook({
    guid,
    name
  });

  store.updateNotebook(notebook, handleResponse.bind(null, res));
};
