const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

//creating a server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Hot Ginger Tea!");
  } else if (req.url === "/ginger-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Thanks for ordering Hot Ginger Tea, it's really cold!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 , Page Not Found!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is lisiting at http://${hostname}:${port}`);
});

//older version of the compiled code , stop the server , after change anything in your code every single time you want to restart your server

// Talking about the developer experience we killed it

// If there are 20-30 routes , how you manage this

// we need alternative solution
