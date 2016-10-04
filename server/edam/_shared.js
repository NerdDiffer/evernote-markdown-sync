const Evernote = require('evernote').Evernote;

require('dotenv').config();

const TOKEN = process.env.EVERNOTE_DEVELOPER_TOKEN;

exports.client = new Evernote.Client({
  token: TOKEN,
  sandbox: true,
  china: false
});

exports.handleResponse = (response, error, results) => {
  if (error) {
    response.status(500).json(error);
  } else {
    response.status(200).json(results);
  }
};

exports.todo = (response, error, results) => {
  if (error) {
    response.status(500).json(error);
  } else {
    const msg = 'TODO: implement this route';
    response.status(200).json(msg);
  }
};
