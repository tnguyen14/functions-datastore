require('dotenv').config();
const request = require('request');

const payload = {
  client_id: process.env.AUTH0_CLIENT_ID,
  client_secret: process.env.AUTH0_CLIENT_SECRET,
  audience: 'https://tridnguyen.auth0.com/api/v2/',
  grant_type: 'client_credentials'
};

const options = {
  method: 'POST',
  url: 'https://tridnguyen.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(payload)
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  console.log('\n\nJWT Token:\n')
  console.log(JSON.parse(body).access_token);
});
