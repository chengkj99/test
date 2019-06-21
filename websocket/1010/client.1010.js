const WebSocketClient = require("websocket").client;
const client = new WebSocketClient();

client.on("connectFailed", () => console.log("CLIENT: connect error"));

client.on("connect", connection => {
  connection.on("error", error =>
    console.log(`CLIENT: Connection Error ${error.toString()}`)
  );

  connection.on("close", () => console.log("CLIENT: Connection Close"));

  connection.on("message", msg => {
    if (msg.type === 'utf8') {
      console.log(`CLIENT: Receive message ${msg.utf8Data}`)
    }
  });

  const send = count => {
    if (connection.connected) {
      connection.send(`Calling me ${count++} times`);
      setTimeout(() => {
        send(count);
      }, 1500);
    }
  };
  send((count = 0));
});

client.connect("ws://localhost:1010/", "echo-protocol");


