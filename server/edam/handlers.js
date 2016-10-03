const Evernote = require('evernote').Evernote;

require('dotenv').config();

const TOKEN = process.env.EVERNOTE_DEVELOPER_TOKEN;

const client = new Evernote.Client({
  token: TOKEN,
  sandbox: true,
  china: false
});

const handleResponse = (response, error, results) => {
  if (error) {
    response.status(500).json(error);
  } else {
    response.status(200).json(results);
  }
};

// GET /edam/notebooks => NoteStore.listNotebooks
exports.listNotebooks = (req, res) => {
  const store = client.getNoteStore();
  store.listNotebooks(handleResponse.bind(null, res));
};

// GET /edam/user => UserStore.getUser
exports.getUser = (req, res) => {
  const store = client.getUserStore();
  store.getUser(handleResponse.bind(null, res));
};

// GET /edam/notes => NoteStore.getNote
exports.getNote = (req, res) => {
  const store = client.getNoteStore();
  const guid = req.query.guid;

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
