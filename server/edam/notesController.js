const { NoteFilter, NotesMetadataResultSpec } = require('evernote').Evernote;
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

// POST /edam/notes => NoteStore.createNote
exports.createNote = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// PUT /edam/notes/:guid => NoteStore.updateNote
exports.updateNote = (req, res) => {
  const store = client.getNoteStore();
  todo.call(null, res);
};

// GET /edam/notes => NoteStore.findNotesMetadata
exports.findNotesMetadata = (req, res) => {
  const { title, notebookGuid, tagGuids, attributes } = req.query;

  const store = client.getNoteStore();
  const filter = new NoteFilter();
  const metaDataSpec = new NotesMetadataResultSpec({
    includeTitle: title,
    includeNotebookGuid: notebookGuid,
    includeTagGuids: tagGuids,
    includeAttributes: attributes
  });

  store.findNotesMetadata(
    filter,
    0, // offset
    10, // maxNotes
    metaDataSpec,
    handleResponse.bind(null, res)
  );
};
