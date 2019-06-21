const WebSocketServer = require("websocket").server;
const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html");
// Create HTTP Server
const server = http.createServer((req, res) => {
  console.log(`SERVER: ${new Date()} Receive request for ${req.url}`);
  res.writeHead(404);
  res.end(index);
});

server.listen(1010, () => {
  console.log(`SERVER: ${new Date()} Server is listening on port 1010`);
});

// Create WS Server
const websocketServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false
});

// check origin
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  console.log(`SERVER: ${origin} is allow`);
  return true;
}

// resolve ws request
websocketServer.on("request", req => {
  if (!originIsAllowed(req.origin)) {
    req.reject();
    console.log(
      `SERVER: ${new Date()} Connection from origin ${req.origin} rejected`
    );
    return;
  }

  const connection = req.accept("echo-protocol", req.origin);

  connection.on("message", msg => {
    if (msg.type === "utf8") {
      connection.sendUTF(msg.utf8Data);
      console.log(`SERVER: Receive utf8 message: ${msg.utf8Data}`);
    }
    if (msg.type === "binary") {
      connection.sendBytes(msg.binaryData);
      console.log(
        `SERVER: Received Binary Message ${message.binaryData.length} bytes`
      );
    }
  });

  connection.on("close", msg => {
    console.log(
      `SERVER: ${new Date()} Connection ${
        connection.remoteAddress
      } disconnected message: ${JSON.stringify(msg)}`
    );
  });
});
