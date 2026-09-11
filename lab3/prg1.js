import http from "http";
const server = http.createServer();

server.on("request", (req, res) => {
  res.write("Hello From Server");
  res.end();
});

server.listern(4444, () => {
  console.log("Server is running...");
});
