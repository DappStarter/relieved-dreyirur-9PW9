require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain mixture grace slender frame type'; 
let testAccounts = [
"0x51fa1e90f99eefe1b4eb310159d9950860139a795c4774ea68c5598a9d79ffae",
"0x62e6c848c65d74197e33bccbfb2dedcdaa4c09c6bbe23a21667cc7642e698687",
"0x00fc6819abec8e3489bf4d0453a363034e36d442e2fbc0e10b6f34863c88e303",
"0x386212f09ef15e66ded8a6a3f1f1467d20ac4ef8950266b7342c609e9ce4fcd7",
"0x411b527364b4e041fd5705fcf4acab309e6cfd7b633ea8be16f11cd9014fcf61",
"0x1f4141724f5a4dc9c8bc12572955718e771d414a44693c81ef68010b35f508c5",
"0x085af6519c1668c3a39a14728a9e7171c82280374a05d54fb5ada43693893613",
"0x901c5cf8ba35c74187e6d892c0ad5c4131589484e0b05ceeacdf4f5fecb81bc1",
"0x025a96904293d40d942f0bc688ca9bcfbe1086b7518457ed228b70301d16f929",
"0xfcf80f93d992a8f560439bfd4d2cb2ae4c26d15628e2c599bb94a1c211c9a229"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

