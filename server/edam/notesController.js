const { client, handleResponse, todo } = require('./_shared');

// GET /edam/notes/:guid => NoteStore.getNote
exports.getNote = (req, res) => {
  const store = client.getNoteStore();
  const guid = req.params.guid;

  // The API docs say this method is deprecated & says to use
  // `getNoteWithResultSpec` instead. However, the JS SDK does not offer that
  // method. The `getNote` method is still working.
  store.getNote(
    guid,
    true,  // withContent
    false, // withResourcesData
    false, // withResourcesRecognition,
    false, // withResourcesAlternateData
    handleResponse.bind(null, res)
  );
};

// POST /edam/note => NoteStore.createNote
exports.createNote = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// PUT /edam/note/:guid => NoteStore.updateNote
exports.updateNote = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};
