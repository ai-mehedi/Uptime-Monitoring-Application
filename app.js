/*
*   Title: Uptime Monitoring Application
*   Description:A RESTful API to monitor up or down time of user define links
*   Author: https://github.com/ai-mehedi
*   date: 19-03-2023
*/

const https = require('https');
const app={};
app.config = {
    posr:3000
};


app.createServer(function(req, res) {
const server = http.createServer(handleReq);
server.listen(app.config.port,()=>{
    console.log(`server listening on ${app.config.port}`)
});

});

app.handleReq=(req,res)=>{
    res.end("Hello, world!");
}

app.createServer();