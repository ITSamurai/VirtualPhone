const http = require('http');
const express = require('express');
const ClientCapability = require('twilio').jwt.ClientCapability;

const app = express();

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);


app.get('/token', (req, res) => {
  // put your Twilio API credentials here
  const accountSid = 'ACd178723f0915fdcb9481aa8d0eacc8e7';
  const authToken = 'c838a576a48f36810591b1799be0f3c8';

  // put your Twilio Application Sid here
  const appSid = 'APb349bff706541055fff06f42d08f4a08';

  const capability = new ClientCapability({
    accountSid: accountSid,
    authToken: authToken,
  });
  capability.addScope(
    new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
  );
  capability.addScope(new ClientCapability.IncomingClientScope('vahe'));
  const token = capability.toJwt();

  res.set('Content-Type', 'application/json');
  res.send(token);
});

app.post('/voice', (req, res) => {
  // TODO: Create TwiML response
});

http.createServer(app).listen(1337, '127.0.0.1');
console.log('Twilio Client app server running at http://127.0.0.1:1337/token/');