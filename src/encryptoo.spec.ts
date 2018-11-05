import {Encryptions} from "./encryptoo";



(function(){
    let en = new Encryptions();


    let msg:string ="this is a test message for crypto"
    en.cryptMsg(msg);
})()