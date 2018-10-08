"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wallet_1 = require("./wallet");
var Encryption = (function () {
    function Encryption() {
    }
    Encryption.prototype.init = function () {
        this.privateKey = wallet_1.getPrivateFromWallet();
        this.publicKey = wallet_1.getPublicFromWallet();
    };
    Encryption.prototype.run = function () {
        console.log("private key:", this.privateKey);
        console.log("public key:", this.publicKey);
        var msg = "Hello World!";
        var key; // = {};
        // let keyRing:openpgp.K
        var options = { data: msg, dataType: "text", publicKeys: key };
    };
    return Encryption;
}());
exports.Encryption = Encryption;
var enc = new Encryption();
enc.init();
enc.run();
//# sourceMappingURL=encryption.js.map