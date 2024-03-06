



// ==========================================
// Valid data set to test against 
// ==========================================

import { encodeDomainCalldata, hashRelayMessage } from "@src/utils"
import { ethers } from "ethers"
import { expect } from "./setup"

let sender = '0x5c919BCddA25447C168C87252326A43C709ECdBD'
let target = '0x5c919BCddA25447C168C87252326A43C709ECdBD'
let value = "1"
let messageNonce = 1
let data = '0x01'

let result = "0x8ef1332e0000000000000000000000005c919bcdda25447c168c87252326a43c709ecdbd0000000000000000000000005c919bcdda25447c168c87252326a43c709ecdbd0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000";

let hash = "0x10b219751f23afa1e0aba3533310eb068a44b741b4b82ca8fcb96010caeaf6da";


describe('Encode', async () => {
  describe('ABI encode with signature', async () => {
    // it('should encode and assert', async () => {
      
    //     let encodeData = encodeDomainCalldata(sender, target, value, messageNonce, data);

    //     console.log(encodeData, "encodeData")
    //     expect(encodeData).to.be.equal(result)
    // })
    it('should encode and assert && hash vaild message', async () => {
      
        let encodeData = encodeDomainCalldata(sender, target, value, messageNonce, data);

        expect(encodeData).to.be.equal(result)

        let hashData = hashRelayMessage(encodeData);
        

        expect(hashData).to.be.equal(hash)
    })
  })
})
