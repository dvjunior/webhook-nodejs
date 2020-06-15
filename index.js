const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json())
   

let triggers = [
  "MBPF",
  "Mobile Banking Pessoa Física",
  "mbpf",
  "Pessoa Física",
  "MBPJ",
  "Mobile Banking Pessoa Jurídica",
  "MBPJ",
  "Mobile Pessoa Jurídica",
  "IBPJ",
  "Internet Banking Pessoa Jurídica",
  "ibpj",
  "IB Pessoa Jurídica",
  "IBPF",
  "Internet Banking Pessoa Física",
  "ibpf",
  "IB Pessoa Física",
  "WAY",
  "Whey",
  "W A Y",
  "way",
  "uei",
  "MBB",
  "mbb",
  "M B B",
  "Mobile",
  "Mobile Banking"
];

app.get('/', (req, res) => {
  // return challenge
  return res.end("I'm fine everything is ok here!");
});

app.post('/', (req, res) => {
    
  
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

  
  let menu = {
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
  
  
  let mbb = {
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
                  "textToSpeech": "Está tudo bem com o MBB, o serviço opera em 98%!"
                }
              },
              {
                "basicCard": {
                  "title": "Está tudo bem com o MBB, o serviço opera em 98%!",
                  "subtitle": "",
                  "formattedText": "Nenhum problema encontrado no Dynatrace.",
                  "image": {
                    "url": "https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png",
                    "accessibilityText": "MBB"
                  },
                  "imageDisplayOptions": "CROPPED"
                }
              },
              {
                "simpleResponse": {
                  "textToSpeech": "Nenhum problema encontrado no Dynatrace. Ajudo com algo mais?"
                }
              }
            ]
          }
        }
      }
    ]
  };
  
  try{
    console.log(JSON.stringify(req.body));
  }catch(error){
     console.log('error :', error);
  }
  
  let query = req.body.inputs[0].rawInputs[0].query;

  if(triggers.indexOf(query) > -1 ){
    console.log("IN THE ARRAY!")
  }

  if(query !== 'Falar com o app BOSS2' && query !== 'mbb') {
    //return JSON.stringify(menu);
    console.log('entrou no if');
    return res.json(menu);
  } else if (query == 'mbb' || query == 'MBB') {
    console.log('entrou no else');
    return res.json(mbb);
  }
  
  return res.json(payload_sdk);
});

app.listen(PORT, () => console.log('[BotEngine] Webhook is listening'));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
//   .post('/', (req, res) => res.json(req.body))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
