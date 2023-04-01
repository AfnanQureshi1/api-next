import {Wallet, ethers} from "ethers";

export default function newWallet(req, res){

        const wallet = ethers.Wallet.createRandom()

        const response = {
            privateKey : wallet.privateKey ,
            address : wallet.address,
            mnemonic : wallet.mnemonic.phrase,
        };

        res.json({data : response});

}