
// const crypto = require('crypto');
// const cipher = crypto.createCipher('aes192', 'a password');

import * as crypto from 'crypto';


class Encryptions{
    encrypted:string;
    decrypted:string;
    cipher:crypto.Cipher;
    decipher:crypto.Decipher;
    key:string;

    constructor(){
        this.key = 'a password'
        this.cipher =  crypto.createCipher('aes192', this.key);
        this.decipher = crypto.createDecipher('aes192', this.key);

        this.encrypted = '';
        this.decrypted = '';
    }

    cryptMsg(msg:string){
        this.cipher.on('readable',()=>{
            const dataO  = this.cipher.read();
            let data:Buffer = Buffer.from((dataO as any));
            if(data){
                this.encrypted += data.toString('hex');
            }
        });

        this.cipher.on('end',()=>{
            console.log(this.encrypted);
            this.decreptMsg(this.encrypted);
        })
        console.log("------------encrypted")
        this.cipher.write(msg);
        this.cipher.end();
    }

    decreptMsg(decrypt){
        this.decipher.on('readable',()=>{
            const data =  this.decipher.read();
            if(data){
                this.decrypted += data.toString();

            }
        });
        this.decipher.on('end',()=>{
            console.log(this.decrypted);
        })
        console.log("------------decrypted")
        this.decipher.write(decrypt,'hex');
        this.decipher.end();
    }
}
export {Encryptions}