// Capture and retransmit http requests using a simple http proxy
// We'll need to also configure our machine to use a web proxy
// Now all requests sent out from a web browser will first go through our proxy so
// we can log the request, block it, etc

// This is a forwarding proxy.
// You can also look into reverse proxy, secure web proxy, ftp proxy, SOCKS proxy, streaming proxy
// and Gopher proxy. The last five are included options on a Macbook's proxy configuration.
const http = require('http')
const url = require('url')

const server = http.createServer(function(req, res) {
    console.log('start request', req.url);
    const options = url.parse(req.url);
    options.headers = req.headers;
    console.log('options', options);
    // res.writeHead(400, 'bad boy'); res.end();// res.end(); // we can decide not to serve the request

    // create request that copies the original request
    const proxyRequest = http.request(options, function(proxyResponse) {
        proxyResponse.on('data', function(chunk) {
            console.log('proxyResponse length:', chunk.length);
            res.write(chunk, 'binary');
        });

        proxyResponse.on('end', function() {
            console.log('proxied request ended');
        });

        res.writeHead(proxyResponse.statusCode, proxyResponse.statusMessage, proxyResponse.headers);
    });

    // capture data sent to our http server and forward it to the intended destination
    req.on('data', function (chunk) {
        console.log('in request length', chunk.length);
        proxyRequest.write(chunk, 'binary');
    });

    req.on('end', function(){
        console.log('original request ended');
        proxyRequest.end();
    })
});

server.listen(3000);

