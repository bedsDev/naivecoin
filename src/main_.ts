import * as commandLineArgs from "command-line-args";

// let HTTP_PORT : commandLineArgs.OptionDefinition =  <commandLineArgs.OptionDefinition>{name:"httpPort", alias:"h"};
// HTTP_PORT.type("Number");
// let P2P_PORT : commandLineArgs.OptionDefinition =  <commandLineArgs.OptionDefinition>{name:"p2pPort", alias:"p"};
// P2P_PORT.type("Number");

const optionDefiniations: commandLineArgs.OptionDefinition[] = [
    { name: "http-port", alias: "h", type: Number },
    { name: "p2p-port", alias: "p", type: Number }
]
const parseOptions: commandLineArgs.ParseOptions = {
    argv: process.argv,
    partial: true,
    camelCase: true
}


class Args {
    parse() {
        console.log(process.argv)
        const options = commandLineArgs(optionDefiniations,parseOptions);

        console.log(options)

        console.log("process.env.HTTP_PORT",process.env.HTTP_PORT)
        console.log("process.env. P2P_PORT",process.env. P2P_PORT)
    }
}

let args = new Args()
args.parse()