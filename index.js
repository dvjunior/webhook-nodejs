const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json()); // creates http server

let payload = {
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "possibleIntents": [
        {
          "intent": "actions.intent.TEXT"
        }
      ],
      "inputPrompt": {
        "richInitialPrompt": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "You are using the Actions SDK. Do you want to hear more about it?"
              }
            }
          ]
        }
      }
    }
  ]
};

app.get('/', (req, res) => {
  // return challenge
  return res.end("I'm fine everything is ok here!");
});

app.post('/', (req, res) => {
  console.log(req.body);
  return res.json(payload);
});

app.listen(PORT, () => console.log('[BotEngine] Webhook is listening'));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
//   .post('/', (req, res) => res.json(req.body))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
