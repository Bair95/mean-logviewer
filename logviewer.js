var optimist = require('optimist');
var os = require('os');

var argv = optimist.usage('\n node logviewer.js (-port port)')
    .alias('h', 'help')
    .alias('h', '?')
    .options('port', {
        alias: "p",
        string: true,
        describe: 'Http Port',
        default: 9090
    })
    .argv;

if (argv.help) {
    optimist.showHelp();
}

var port = process.env.PORT || argv.port;
var env = argv.env;

console.log('\LogViewer\nPort #', port);

var App = require('./app');
var app = new App();

var options = {
    port: port
};

app.start(options);