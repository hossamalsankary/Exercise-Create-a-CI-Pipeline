var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("hossam I can work with ansble now!");
});
server.listen(3000);
