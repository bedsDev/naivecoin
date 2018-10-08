"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require("command-line-args");
// let HTTP_PORT : commandLineArgs.OptionDefinition =  <commandLineArgs.OptionDefinition>{name:"httpPort", alias:"h"};
// HTTP_PORT.type("Number");
// let P2P_PORT : commandLineArgs.OptionDefinition =  <commandLineArgs.OptionDefinition>{name:"p2pPort", alias:"p"};
// P2P_PORT.type("Number");
var optionDefiniations = [
    { name: "http-port", alias: "h", type: Number },
    { name: "p2p-port", alias: "p", type: Number }
];
var parseOptions = {
    argv: process.argv,
    partial: true,
    camelCase: true
};
var Args = (function () {
    function Args() {
    }
    Args.prototype.parse = function () {
        console.log(process.argv);
        var options = commandLineArgs(optionDefiniations, parseOptions);
        console.log(options);
        console.log("process.env.HTTP_PORT", process.env.HTTP_PORT);
        console.log("process.env. P2P_PORT", process.env.P2P_PORT);
    };
    return Args;
}());
var args = new Args();
args.parse();
//# sourceMappingURL=main_.js.map