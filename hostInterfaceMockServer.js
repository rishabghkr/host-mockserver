const http = require('http');
const mockserver = require('mockserver');

const handle = mockserver('./interfaceMockResponses');
http.createServer(handle).listen(8080);
