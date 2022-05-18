const https = require('https');
const dotenv = require('dotenv');
dotenv.config();
const slackHostName = process.env.SLACK_HOSTNAME;
const slackWebhookPath = process.env.SLACK_WEBHOOK_PATH;

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.sendMessageToSlackChannel = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);

  console.log(message);
  sendMessage(message);
};

function sendMessage(message) {
  var postData = JSON.stringify({
    'text' : message,
  });

  var options = {
    hostname: slackHostName,
    path: slackWebhookPath,
    method: 'POST',
    port: 443,
    headers: {
         'Content-Type': 'application/json',
         'Content-Length': postData.length,
       }
  };

  var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.write(postData);
  req.end();
}