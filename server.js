const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello Node!!!!\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
