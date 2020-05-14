const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json()); // creates http server

let payload = {
  fulfillmentText: 'This is a text response',
  fulfillmentMessages: [
    {
      card: {
        title: 'card title',
        subtitle: 'card text',
        imageUri: 'https://example.com/images/example.png',
        buttons: [
          {
            text: 'button text',
            postback: 'https://example.com/path/for/end-user/to/follow'
          }
        ]
      }
    }
  ],
  source: 'example.com',
  payload: {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: 'this is a simple response'
            }
          }
        ]
      }
    },
    facebook: {
      text: 'Hello, Facebook!'
    },
    slack: {
      text: 'This is a text response for Slack.'
    }
  },
  outputContexts: [
    {
      name: "",
      lifespanCount: 5,
      parameters: {
        'param-name': 'param-value'
      }
    }
  ],
  followupEventInput: {
    name: 'event name',
    languageCode: 'en-US',
    parameters: {
      'param-name': 'param-value'
    }
  }
};

    

app.get('/', (req, res) => {
  // return challenge
  return res.end("I'm fine everything is ok here!");
});

app.post('/', (req, res) => {
  let data = req.body;
  let object_intent = data.queryResult.intent.name.split('/');
  let session = data.session.split('/');
  let session_id = session[4];
  let project_id = object_intent[1];
  let intent_id = object_intent[4];
  console.log(project_id, intent_id, session_id);

  let payload = {
    fulfillmentText: 'This is a text response',
    fulfillmentMessages: [
      {
        card: {
          title: 'card title',
          subtitle: 'card text',
          imageUri: 'https://example.com/images/example.png',
          buttons: [
            {
              text: 'button text',
              postback: 'https://example.com/path/for/end-user/to/follow'
            }
          ]
        }
      }
    ],
    source: 'example.com',
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: 'this is a simple response'
              }
            }
          ]
        }
      },
      facebook: {
        text: 'Hello, Facebook!'
      },
      slack: {
        text: 'This is a text response for Slack.'
      }
    },
    outputContexts: [
      {
        name: "projects/" + project_id +"/agent/sessions/" + session_id + "/contexts/__system_counters__",
        lifespanCount: 5,
        parameters: {
          'param-name': 'param-value'
        }
      }
    ],
    followupEventInput: {
      name: 'event name',
      languageCode: 'en-US',
      parameters: {
        'param-name': 'param-value'
      }
    }
  };

  console.log(JSON.stringify(req.body));
  return res.json(payload);
});

app.listen(PORT, () => console.log('[BotEngine] Webhook is listening'));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
//   .post('/', (req, res) => res.json(req.body))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
