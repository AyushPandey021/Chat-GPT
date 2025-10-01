require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/DB/database");
const initSocketServer = require("./src/socket/socket.server");
const httpServer = require("http").createServer(app);



connectDb()
initSocketServer(httpServer);


httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
})