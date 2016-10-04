const { client, handleResponse } = require('./_shared');

// GET /edam/user => UserStore.getUser
exports.getUser = (req, res) => {
  const store = client.getUserStore();
  store.getUser(handleResponse.bind(null, res));
};
