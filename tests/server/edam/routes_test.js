const test = require('ava');
const axios = require('axios');
const { checkFor200, GUID } = require('../helper');

const baseUrl = 'http://localhost:8000/edam';

/* User */

test('GET /edam/user returns 200', t => {
  const url = `${baseUrl}/user`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

/* Notebooks */

test('GET /edam/notebooks returns 200', t => {
  const url = `${baseUrl}/notebooks`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('GET /edam/notebooks/:guid returns 200', t => {
  const url = `${baseUrl}/notebooks/${GUID}`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('POST /edam/notebooks returns 200', t => {
  const url = `${baseUrl}/notebooks`;

  return axios.post(url)
    .then(checkFor200.bind(null, t));
});

test('PUT /edam/notebooks returns 200', t => {
  const url = `${baseUrl}/notebooks/${GUID}`;

  return axios.put(url)
    .then(checkFor200.bind(null, t));
});

/* Notes */

test('GET /edam/notes/:guid returns 200', t => {
  const url = `${baseUrl}/notes/${GUID}`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('POST /edam/notes returns 200', t => {
  const url = `${baseUrl}/notes`;

  return axios.post(url)
    .then(checkFor200.bind(null, t));
});

test('PUT /edam/notes returns 200', t => {
  const url = `${baseUrl}/notes/${GUID}`;

  return axios.put(url)
    .then(checkFor200.bind(null, t));
});

/* Search */

test('GET /edam/search returns 200', t => {
  const url = `${baseUrl}/search`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('GET /edam/search/:guid returns 200', t => {
  const url = `${baseUrl}/search/${GUID}`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('POST /edam/search returns 200', t => {
  const url = `${baseUrl}/search`;

  return axios.post(url)
    .then(checkFor200.bind(null, t));
});

test('PUT /edam/search returns 200', t => {
  const url = `${baseUrl}/search/${GUID}`;

  return axios.put(url)
    .then(checkFor200.bind(null, t));
});

/* Tags */

test('GET /edam/tags returns 200', t => {
  const url = `${baseUrl}/tags`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('GET /edam/tags/:guid returns 200', t => {
  const url = `${baseUrl}/tags/${GUID}`;

  return axios.get(url)
    .then(checkFor200.bind(null, t));
});

test('POST /edam/tags returns 200', t => {
  const url = `${baseUrl}/tags`;

  return axios.post(url)
    .then(checkFor200.bind(null, t));
});

test('PUT /edam/tags returns 200', t => {
  const url = `${baseUrl}/tags/${GUID}`;

  return axios.put(url)
    .then(checkFor200.bind(null, t));
});
