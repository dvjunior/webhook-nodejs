const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express().use(bodyParser.json())
   

let triggers = [
  "mobile banking pessoa física",
  "mobile banking pessoa fisica",
  "mbpf",
  "pessoa física",
  "mobile banking pessoa jurídica",
  "mobile bank pessoa jurídica",
  "mobile banking pessoa juridica",
  "mbpj",
  "mb pj",
  "Mobile Pessoa Jurídica",
  "whey",
  "w a y",
  "way",
  "uei",
  "mbb",
  "m b b",
  "mobile",
  "mobile banking"
];

app.get('/', (req, res) => {
  // return challenge
  return res.end("I'm fine everything is ok here!");
});

app.post('/', (req, res) => {
   
   let fullfilment = {
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
                                "textToSpeech": "Olá eu sou o Boss versão Assistente Virtual. Qual sigla deseja monitorar?",
                                "displayText": "Olá eu sou o Boss versão Assistente Virtual. \nQual sigla deseja monitorar?"
                            }
                        }
                    ],
                    "suggestions": [
                        {
                            "title": "Menu"
                        },
                        {
                            "title": "Lista de siglas"
                        }
                    ]
                }
            }
        }
    ]
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

  
  let menu2 = {
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
                                        "key": "SELECTION_KEY_AFC",
                                        "synonyms": [
                                            "FC",
                                            "afc",
                                            "AFC"
                                        ]
                                    },
                                    "description": "afc",
                                    "title": "AFC"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_AQC",
                                        "synonyms": [
                                            "AQC",
                                            "a q c"
                                        ]
                                    },
                                    "description": "Serivço aqc",
                                    "title": "AQC"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_FEC",
                                        "synonyms": [
                                            "FEC",
                                            "fec"
                                        ]
                                    },
                                    "description": "Fec",
                                    "title": "FEC"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_WAY",
                                        "synonyms": [
                                            "WAY",
                                            "WHEY",
                                            "whey"
                                        ]
                                    },
                                    "description": "Serviço WAY Santander",
                                    "title": "WAY"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_IBPF",
                                        "synonyms": [
                                            "Internet Banking Pessoa Física",
                                            "Pessoa Física",
                                            "IBPF"
                                        ]
                                    },
                                    "description": "Internet Banking Pessoa Física",
                                    "title": "IBPF"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_IBPJ",
                                        "synonyms": [
                                            "Internet Banking Pessoa Jurídica",
                                            "Pessoa Jurídica",
                                            "IBPJ"
                                        ]
                                    },
                                    "description": "Internet Banking Pessoa Jurídica",
                                    "title": "IBPJ"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_MBPF",
                                        "synonyms": [
                                            "MBPF",
                                            "Mobile Banking Pessoa Física",
                                            "Pessoa Física"
                                        ]
                                    },
                                    "description": "Mobile Banking Pessoa Física",
                                    "title": "MBPF"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_MBPJ",
                                        "synonyms": [
                                            "MBPJ",
                                            "Mobile Banking Pessoa Jurídica",
                                            "Pessoa Jurídica"
                                        ]
                                    },
                                    "description": "Mobile Banking Pessoa Jurídica",
                                    "title": "MBPJ"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_MOB",
                                        "synonyms": [
                                            "MOB",
                                            "Mob",
                                            "m o b"
                                        ]
                                    },
                                    "description": "Mob",
                                    "title": "MOB"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_MSG",
                                        "synonyms": [
                                            "Mensageria"
                                        ]
                                    },
                                    "description": "Mensageria",
                                    "title": "Mensageria"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_URA",
                                        "synonyms": [
                                            "URA",
                                            "ura",
                                            "u r a"
                                        ]
                                    },
                                    "description": "Ura",
                                    "title": "URA"
                                },
                                {
                                    "optionInfo": {
                                        "key": "SELECTION_KEY_MBB",
                                        "synonyms": [
                                            "MBB",
                                            "Mobile Banking",
                                            "Mobile"
                                        ]
                                    },
                                    "description": "Mobile Banking",
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

  let login = {
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


  let mbpf = {
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
                  "textToSpeech": "O serviço do MBPF está intermitente, opera em 70%!"
                }
              },
              {
                "basicCard": {
                  "title": "O serviço do MBPF está intermitente, opera em 70%!",
                  "subtitle": "",
                  "formattedText": "Foram encontrados 32 problemas no Dynatrace referente ao MBPF",
                  "image": {
                    "url": "https://www.pe.com/wp-content/uploads/2018/01/rpe-bus-bestlaw-warning.jpg",
                    "accessibilityText": "MBPF"
                  },
                  "imageDisplayOptions": "CROPPED"
                }
              },
              {
                "simpleResponse": {
                  "textToSpeech": "Foram encontrados 32 problemas no Dynatrace referente ao MBPF. Contate a área responsável!"
                }
              }
            ]
          }
        }
      }
    ]
  };

  let mbpj = {
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
                  "textToSpeech": "O serviço do MBPJ está fora, opera em 40%!"
                }
              },
              {
                "basicCard": {
                  "title": "O serviço do MBPJ está fora, opera em 40%!",
                  "subtitle": "",
                  "formattedText": "Foram encontrados 128 problemas no Dynatrace referente ao MBPJ",
                  "image": {
                    "url": "https://images.vectorhq.com/images/previews/62f/red-green-ok-not-ok-icons-39546.png",
                    "accessibilityText": "MBPJ"
                  },
                  "imageDisplayOptions": "CROPPED"
                }
              },
              {
                "simpleResponse": {
                  "textToSpeech": "Foram encontrados 128 problemas no Dynatrace referente ao MBPJ. Contate a área responsável!"
                }
              }
            ]
          }
        }
      }
    ]
  };


  let way = {
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
                  "textToSpeech": "O serviço WAY opera em 100%, tudo ok!"
                }
              },
              {
                "basicCard": {
                  "title": "O serviço WAY opera em 100%, tudo ok!",
                  "subtitle": "",
                  "formattedText": "Nenhum problema no Dynatrace ou Splunk!",
                  "image": {
                    "url": "https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png",
                    "accessibilityText": "way"
                  },
                  "imageDisplayOptions": "CROPPED"
                }
              },
              {
                "simpleResponse": {
                  "textToSpeech": "Nenhum problema no Dynatrace ou Splunk!"
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
  query = query.toLowerCase();

  console.log('QUERY', query)

  if(query == 'falar com o boss' || query == 'falar com o app boss' || query == 'falar com boss') {
    //return JSON.stringify(menu);
    return res.json(fullfilment);
  }
  if(query == 'menu' || query == 'Menu' || query == 'Lista' || query == 'Lista de siglas'){
      return res.json(menu);
  }

  if(triggers.indexOf(query) > -1 ){
    console.log("IN THE ARRAY!")
     if (query == 'mbb' || query == 'm b b') {
      console.log('entrou no else');
      return res.json(mbb);
    } else if (query == 'way' || query == 'whey' || query == "w a y"  || query == 'Whey' ){
      console.log('opcap way')
      return res.json(way);
    } else if (query == 'mbpf' || query == "mobile banking pessoa física" || query == "mobile banking pessoa fisica"){
      console.log('opcap mbpf')
      return res.json(mbpf);
    } else if (query == 'mbpj' || query == 'm b p j' || query == 'mb pj' || query == "mobile banking pessoa jurídica" || query == "mobile banking pessoa juridica" || query ==  "mobile bank pessoa jurídica"){
      console.log('opcap mbpj')
      return res.json(mbpj);
    } else {
      return res.json({
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
                      "textToSpeech": "Sigla não encontrada. Tente mbb ou away por exemplo.",
                      "displayText": "Sigla não encontrada. Tente mbb ou away por exemplo."
                    }
                  }
                ]
              }
            }
          }
        ]
      });
    }
  } else {
    // return res.json({
    //   "expectUserResponse": true,
    //   "expectedInputs": [
    //     {
    //       "possibleIntents": [
    //         {
    //           "intent": "actions.intent.TEXT"
    //         }
    //       ],
    //       "inputPrompt": {
    //         "richInitialPrompt": {
    //           "items": [
    //             {
    //               "simpleResponse": {
    //                 "textToSpeech": "Desculpe não encontrei nada a respeito.",
    //                 "displayText": "Você pode pedir pelo Menu ou a Lista de siglas caso preferir."
    //               }
    //             }
    //           ]
    //         }
    //       }
    //     }
    //   ]
    // });

    return res.json(login);

  }

});

app.listen(PORT, () => console.log('[BotEngine] Webhook is listening'));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
//   .post('/', (req, res) => res.json(req.body))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
