const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json())

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
    ////let data = req.body;
   // //let object_intent = data.queryResult.intent.name.split('/');
   // //let session = data.session.split('/');
   // //let session_id = session[4];
   // //let project_id = object_intent[1];
   // //let intent_id = object_intent[4];
   // //console.log(project_id, intent_id, session_id);

  // let payload = {
  //   fulfillmentText: 'This is a text response',
  //   fulfillmentMessages: [
  //     {
  //       card: {
  //         title: 'card title',
  //         subtitle: 'card text',
  //         imageUri: 'https://example.com/images/example.png',
  //         buttons: [
  //           {
  //             text: 'button text',
  //             postback: 'https://example.com/path/for/end-user/to/follow'
  //           }
  //         ]
  //       }
  //     }
  //   ],
  //   source: 'example.com',
  //   payload: {
  //     google: {
  //       expectUserResponse: true,
  //       richResponse: {
  //         items: [
  //           {
  //             simpleResponse: {
  //               textToSpeech: 'this is a simple response'
  //             }
  //           }
  //         ]
  //       }
  //     },
  //     facebook: {
  //       text: 'Hello, Facebook!'
  //     },
  //     slack: {
  //       text: 'This is a text response for Slack.'
  //     }
  //   },
  //   outputContexts: [
  //     {
  //       name: "projects/" + project_id +"/agent/sessions/" + session_id + "/contexts/__system_counters__",
  //       lifespanCount: 5,
  //       parameters: {
  //         'param-name': 'param-value'
  //       }
  //     }
  //   ],
  //   followupEventInput: {
  //     name: 'event name',
  //     languageCode: 'en-US',
  //     parameters: {
  //       'param-name': 'param-value'
  //     }
  //   }
  // };

  let payload = {
    "payload": {
      "google": {
        "expectUserResponse": true,
        "richResponse": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "this is a simple response"
              }
            }
          ]
        }
      }
    }
  };
  
  let payload_sdk = {
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
                "textToSpeech": "Olá, eu sou o Boss!",
                "displayText": "Olá, eu sou o Boss!"
              }
            }
          ]
        }
      }
    }
  ]
};

  let payload_sigin = {
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "inputPrompt": {
        "richInitialPrompt": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "PLACEHOLDER"
              }
            }
          ]
        }
      },
      "possibleIntents": [
        {
          "intent": "actions.intent.SIGN_IN",
          "inputValueData": {
            "@type": "type.googleapis.com/google.actions.v2.SignInValueSpec",
            "optContext": "teste de login"
          }
        }
      ]
    }
  ]
};
  
  let payload_option = {
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "possibleIntents": [
        {
          "intent": "actions.intent.OPTION",
          "inputValueData": {
            "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
            "listSelect": {
              "title": "Selecione uma sigla abaixo:",
              "items": [
                {
                  "optionInfo": {
                    "key": "SELECTION_KEY_ONE",
                    "synonyms": [
                      "synonym 1",
                      "synonym 2",
                      "synonym 3"
                    ]
                  },
                  "description": "This is a description of a list item.",
                  "image": {
                    "url": "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                    "accessibilityText": "Image alternate text"
                  },
                  "title": "WAY"
                },
                {
                  "optionInfo": {
                    "key": "SELECTION_KEY_GOOGLE_HOME",
                    "synonyms": [
                      "Google Home Assistant",
                      "Assistant on the Google Home"
                    ]
                  },
                  "description": "Google Home is a voice-activated speaker powered by the Google Assistant.",
                  "image": {
                    "url": "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                    "accessibilityText": "Google Home"
                  },
                  "title": "IBPF"
                },
                {
                  "optionInfo": {
                    "key": "SELECTION_KEY_GOOGLE_PIXEL",
                    "synonyms": [
                      "Google Pixel XL",
                      "Pixel",
                      "Pixel XL"
                    ]
                  },
                  "description": "Pixel. Phone by Google.",
                  "image": {
                    "url": "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                    "accessibilityText": "Google Pixel"
                  },
                  "title": "MBB"
                }
              ]
            }
          }
        }
      ],
      "inputPrompt": {
        "richInitialPrompt": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "Selecione uma sigla abaixo:"
              }
            }
          ]
        }
      }
    }
  ]
};
  
  
  let payload_teste = {
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "possibleIntents": [
        {
          "intent": "actions.intent.SIGN_IN",
          "inputValueData": {
            "@type": "type.googleapis.com/google.actions.v2.SignInValueSpec"
          }
        }
      ]
    }
  ]
};
  
  try{
    console.log(JSON.stringify(req.body));
  }catch(error){
     console.log('error :', error);
  }
  
  if(req.body.inputs[0].rawInputs[0].query !== 'Falar com o app BOSS2' && req.body.inputs[0].rawInputs[0].query !== 'mbb') {
    //return JSON.stringify(payload_option);
    console.log('entrou no if');
    return res.json(payload_option);
  } else if (req.body.inputs[0].rawInputs[0].query == 'mbb' || req.body.inputs[0].rawInputs[0].query == 'MBB') {
    console.log('entrou no else');
    return res.json(payload_teste);
  }
  
  return res.json(payload_sdk);
});

app.listen(PORT, () => console.log('[BotEngine] Webhook is listening'));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
//   .post('/', (req, res) => res.json(req.body))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
