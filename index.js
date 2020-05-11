const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json()); // creates http server

let payload = {
  "device": {},
  "surface": {
    "capabilities": [
      {
        "name": "actions.capability.SCREEN_OUTPUT"
      },
      {
        "name": "actions.capability.AUDIO_OUTPUT"
      },
      {
        "name": "actions.capability.MEDIA_RESPONSE_AUDIO"
      },
      {
        "name": "actions.capability.WEB_BROWSER"
      }
    ]
  },
  "conversation": {
    "conversationId": "1521784527171",
    "type": "NEW"
  },
  "inputs": [
    {
      "intent": "actions.intent.MAIN",
      "rawInputs": [
        {
          "inputType": "VOICE",
          "query": "Talk to my test app"
        }
      ]
    }
  ],
  "availableSurfaces": [
    {
      "capabilities": [
        {
          "name": "actions.capability.SCREEN_OUTPUT"
        },
        {
          "name": "actions.capability.AUDIO_OUTPUT"
        },
        {
          "name": "actions.capability.MEDIA_RESPONSE_AUDIO"
        },
        {
          "name": "actions.capability.WEB_BROWSER"
        }
      ]
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
