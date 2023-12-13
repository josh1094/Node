const accountSid = 'AC8ee82ed4808904f4de5ff1de2c425944';
const authToken = '13b9b382156dc9f6b609ab883db16bc9';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
    		body: 'Hi Joshua new message!!!',
                from: '+19292297102',
        to: '+2349044013437'
    })
    .then(message => console.log(message.sid))