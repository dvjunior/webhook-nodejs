const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send("I'm fine everything is ok here!"))
  .post('/', (req, res) => res.json(req.body))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


//const http = require('http');

// const port = 5000;

// function tratarJSON(data) {
//     try {
//         let cache = JSON.parse(data);
//         return cache;
//     } catch (error) {
//         return false;
//     }
// }

// function DataHora() {
//     let Data = new Date();
//     let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

//     let dia = "0";
//     if (Data.getDate() < 10) {
//         dia = "0" + Data.getDate();
//     } else {
//         dia = Data.getDate();
//     }

//     let mes = months[Data.getMonth()];
//     let ano = Data.getFullYear();
//     let hora = "0";

//     if (Data.getHours() < 10) { hora = "0" + Data.getHours(); }
//     else { hora = Data.getHours(); }
//     let mim = "0";
//     if (Data.getMinutes() < 10) { mim = "0" + Data.getMinutes(); }
//     else { mim = Data.getMinutes(); }
//     let seg = "0";
//     if (Data.getSeconds() < 10) { seg = "0" + Data.getSeconds(); }
//     else { seg = Data.getSeconds(); }

//     let DataFormatada = dia + "-" + mes + "-" + ano;
//     let HoraFormatada = hora + ":" + mim + ":" + seg;
//     let DataHora = DataFormatada + " - " + HoraFormatada;
//     return DataHora;
// }

// let listener = http.createServer(function (request, response) {


//     if (request.method === 'GET') {
//         console.log('[' + DataHora() + ']: Get');
//         response.writeHead(200, { 'Content-Type': 'application/json' });
//         response.end('{"message": "Everything is Ok, I\'m fine, on port: ' + port + '"}');
//     } else if (request.method === 'POST') {
//         console.info('<=============================================================================>');

//         let body = [];
//         request.on('error', (err) => {
//             console.info(err);
//         }).on('data', (chunk) => {
//             body.push(chunk);
//         }).on('end', async () => {
//             body = Buffer.concat(body).toString();
//             console.log(body);

//             let data = tratarJSON(body);
//             console.log('[' + DataHora() + ']: DATA \n', data);
//             console.info('<==============================================================================>');
//             response.writeHead(200, { 'Content-Type': 'application/json' });
//             response.end(JSON.stringify(data));
//         });


//     } else {
//         let body = [];
//         request.on('error', (err) => {
//             console.info(err);
//         }).on('data', (chunk) => {
//             body.push(chunk);
//         }).on('end', async () => {
//             body = Buffer.concat(body).toString();

//             let data = tratarJSON(body);
//             console.log('[' + DataHora() + ']: DATA \n', data);
//             console.info('<==============================================================================>');
//             response.writeHead(200, { 'Content-Type': 'application/json' });
//             response.end(JSON.stringify(data));
//         });
//     }
// }).listen(port, function () {
//     console.info('[' + DataHora() + ']:', 'Socket ON - PORT: ', port);
// });

// module.exports = {
//     listener: listener,
//     tratarJSON: tratarJSON,
//     DataHora: DataHora
// }
