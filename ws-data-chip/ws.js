var WebSocketServer = require('websocket').server;
var http = require('http');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
const axios = require('axios')
// Read the port data
port.on("open", () => {
    console.log('serial port open');
});
function readArduino() {
    return new Promise((resolve, reject) => {
        parser.on('data', data => resolve(data))
    })
}
 
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);

    connection.on('message', async function(message) {
        const response = JSON.parse(message.utf8Data)
        const {
            type,
            value,
            establishmentName,
        } = response
        if (type === 'debit') {
            readArduino()
                .then((chipId) => axios.put('http://localhost:3232/api/bank/debit', {
                        value,
                        establishmentName,
                        chipId,
                    })
                )
                .then(() => connection.send(JSON.stringify({
                        type: 'debit',
                        code: 200,
                        message: 'Pagamento efetuado com sucesso!'
                    }))
                )
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});