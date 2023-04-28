const http = require('http');
const mockserver = require('mockserver');

const handle = mockserver('./dataMockResponses');
http.createServer(handle).listen(9000);
