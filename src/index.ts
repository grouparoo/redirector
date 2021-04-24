import http from "http";

const port = process.env.PORT || "8080";
const destination = process.env.DESTINATION || `https://www.grouparoo.com`;
const HTTP_CODE = parseInt(process.env.DESTINATION || "302");

const html = `
<body>
  <h1>You are being redirected to ${destination}</h1>
</body>
`;

const server = http.createServer(function (req, res) {
  res.writeHead(HTTP_CODE, {
    "content-type": "text/html",
    Location: destination,
  });
  res.end(html);
  log(req);
});

function log(req: http.IncomingMessage) {
  const message = `${timeStamp()} - [${req.method}] ${
    req.connection.remoteAddress
  } ${req.url}`;

  console.log(message);
}

function timeStamp() {
  const now = new Date();
  return now.toISOString();
}

server.listen(port);
console.log(`*** Redirector up and running ***`);
