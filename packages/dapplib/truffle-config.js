require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift raise noise hub include knee obscure gaze'; 
let testAccounts = [
"0x049742a615ce388340196ffa17b03700f4ba7727beee52a007d7a12483d14a1f",
"0x69840611d9e7d06b213c194f4d438da2ede54f786c25944cb8d3227fbbe60717",
"0x450d3dfaac23cc66b40528c3e839e3c3068a610413fa0fcc585a52f221862ae8",
"0x2b44b77f45aa8f31306c9047c27a23afea896e42b971f539c18b3a418b955639",
"0x24e8910657dd55cb9078c31ec40c3a52667d6acc1b6a34e43deea0f717f88408",
"0xb02242dcb99367af8530c85f82efea59057f78ce9ed25c7a5504dced9bc8088b",
"0x922f27e0a7f385b574a5c1c77712c87ea2ce8a5489c7933aad00f4aa80e54aef",
"0x6216f64a7f8cd88ed41de2593449b50092c3494d69cc5c7f7bc7110dff774a85",
"0x5f8c8226fd3eb4174e58c659df49df31e452c5d07dd0b5da515479d3d707be95",
"0x3b9d21adf4bf5b62468ab8e8cf563080f963b1c65bdb5b68cd36a831ae42b0a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

