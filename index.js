let server = require("./server");
let router = require("./router");
let requestHandles = require("./requestHandlers");

let handle = {};
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;
handle["/show"] = requestHandles.show;

server.start(router.route, handle);
