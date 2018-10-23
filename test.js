require('dotenv').config();

const sinon = require('sinon');
const functions = require('./');

const res = {
  status: () => {},
  send: () => {}
};

const resStatus = sinon.stub(res, 'status').returnsThis();
const resSend = sinon.spy(res, 'send');

functions.get({
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  },
  body: {
    kind: 'ReadItem',
    key: '5069036098420736'
  }
}, res).then(() => {
  console.log(resSend.args);
}, err => {
  console.error(err);
})
