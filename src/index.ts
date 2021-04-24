import http from "http";

const port = process.env.PORT || "8080";
const destination = process.env.DESTINATION || `https://www.grouparoo.com`;
const http_code = parseInt(process.env.HTTP_CODE || "302");

const html = `
<body>
  <h1>You are being redirected to ${destination}</h1>
</body>
`;

function handle(req: http.IncomingMessage, res: http.ServerResponse) {
  res.writeHead(http_code, {
    "content-type": "text/html",
    Location: destination,
  });
  res.end(html);
  log(req);
}

function log(req: http.IncomingMessage) {
  const timestamp = new Date().toISOString();
  const message = `${timestamp} - [${req.method}] ${parseIp(req)} ${req.url}`;
  console.log(message);
}

function parseIp(req: http.IncomingMessage) {
  return (
    ((req.headers["x-forwarded-for"] as string) || "")?.split(",").shift() ||
    req.socket?.remoteAddress
  );
}

const server = http.createServer(handle);
server.listen(port);
console.log(`*** Redirector up and running ***`);
