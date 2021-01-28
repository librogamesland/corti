var liveServer = require("live-server");
var childProcess = require('child_process');


var params = {
    port: 8083, // Set the server port. Defaults to 8080.
    root: "..", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    watch: "src",
    wait: 2000, // Waits for all changes, before reloading. Defaults to 0 sec.
};

liveServer.start(params);
liveServer.watcher.on('change', function(e){
    if(e.indexOf('/dist/')==-1){
        console.log('executing: npm run build');
        childProcess.execSync(`cd ${__dirname}; npm run build`);
        
    }
})