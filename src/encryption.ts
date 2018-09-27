import {createTransaction, findUnspentTxOuts, getBalance, getPrivateFromWallet, getPublicFromWallet} from './wallet';
import * as openpgp from "openpgp";
import {EncryptOptions} from "openpgp";


export class Encryption{
    privateKey:string;
    publicKey:string;

    constructor(){

    }

    init(){
        this.privateKey = getPrivateFromWallet();
        this.publicKey = getPublicFromWallet()
    }

    run(){
        console.log("private key:", this.privateKey);
        console.log("public key:", this.publicKey);
        let msg: string = "Hello World!";
        let key: openpgp.key.Key ;// = {};
        // let keyRing:openpgp.K
        let options:openpgp.EncryptOptions ={data:msg, dataType:"text", publicKeys:key};
        

        }
        // let options:EncryptOptions  = {data:msg, dataType:"text",publicKeys:this.publicKey}

        // openpgp.encrypt(options).then((cipherTxt)=>{
        //     console.log(cipherTxt);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    
}


let enc :Encryption = new Encryption();

enc.init()
enc.run();