const EXPRESS = require("express")
const app = EXPRESS()
const EXPRESS_WEBSOCKET = require("express-ws")(app)

app.ws("/", (request, response) => {
    ws.on('message', function(msg) {
        console.log(msg)
      })
})

app.listen("3000", (request, response) => { 
    console.log("server up")
})

