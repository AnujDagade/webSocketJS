const ws = require('ws');
const wordChecker = require('./badWordChecker')
const server = new ws.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New connection');

    socket.on('message',(msg)=>{
        console.log(typeof msg);
        console.log('Received: ' + msg);
        socket.send(`You: ${msg}`);
        console.log(wordChecker.containsBadWords(`${msg}`));

        server.clients.forEach((client)=>{
            if(client !== socket && client.readyState === ws.OPEN) {
                client.send(`${msg}`)
            }
        })

    })


})




