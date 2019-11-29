// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure


client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+123456789',
        from: '+987654321'
    })
    .then(call => console.log(call.sid));

