const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.emit("some event", { for: "everyone" });

io.on("connection", (socket) => {
  console.log("hhello");
  socket.on("sendMsg", (msg) => {
    console.log("[log]===> receive msg:", msg);
    io.emit("sendMsg", msg);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});

console.log("listening on *:3000");