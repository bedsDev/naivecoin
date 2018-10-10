'use strict';
import * as crypto from 'crypto';

import * as wallet from "./wallet";

var RSAKey = require('rsa-key');

function hex_to_ascii(str1:string):string
 {
	var hex:string  = str1.toString();
	var str:string = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }

 function toHex(str):string {
	var hex:string = '';
	for(var i=0;i<str.length;i++) {
		hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}


function encrypto() {
    let privateKey: string = wallet.getPrivateFromWallet();
    // let privateKeyHex:string = hex_to_ascii(privateKey);
    let publicKey: string = wallet.getPublicFromWallet();
    // let publicKeyHex:string = hex_to_ascii(publicKey);
    console.log("privateKey", "\n", privateKey)
    console.log("publicKey", "\n", publicKey)
    var key = new RSAKey(publicKey);
    var output = key.exportKey();
    console.log("pem: ", output)
    let en = crypto.publicEncrypt(output,new Buffer("for ppublic key encryption"))
    console.log(en);

    // const cipher = crypto.createCipher('aes192', 'a password');

    // let encrypted = '';
    // cipher.on('readable', () => {
    //     const data = cipher.read();
    //     if (data)
    //         encrypted += data.toString();
    // });
    // cipher.on('end', () => {
    //     console.log(encrypted);
    //     // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
    // });

    // cipher.write('some clear text data');
    // cipher.end();
}


encrypto();
