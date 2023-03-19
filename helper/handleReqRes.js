/*
 * Title: Handle Request And Response
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Aminul Islam
 * Date: 11/03/2023
 *
 */

const url = require('url');
const { StringDecoder } = require('string_decoder');
const handler = {};
handler.handleReqRes = (req, res) => {
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const trimedpath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedURL.query;
    const headerObject = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realdata = '';
    req.on('data', function (buffer) {
        realdata += decoder.write(buffer);
       
    })
    req.on('end', function () {
        realdata += decoder.end();
        res.end(`Server Ruuning....`);
        console.log(realdata);
    })




};



module.exports=handler