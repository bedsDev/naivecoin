# Naivecoin

The repository for the naivecoin tutorial: https://lhartikk.github.io/

```
npm install
npm start
```
## Windows Command Line Setting Environment Variables for 3 nodes
```
// setting  node 1 to use the default settings
set HTTP_PORT=3001 & set P2P_PORT=6001 & npm start

// setting  node 2, a new console window
set HTTP_PORT=3002 & set P2P_PORT=6002 & set PRIVATE_KEY=node/wallet/private_key2 & set PEERS=ws://localhost:6001 & npm start

// setting  node 3, a new console window
set HTTP_PORT=3003 & set P2P_PORT=6003 & set PRIVATE_KEY=node/wallet/private_key3 & set PEERS=ws://localhost:6001 & npm start

// setting  node 4, a new console window
set HTTP_PORT=3004 & set P2P_PORT=6004 & set PRIVATE_KEY=node/wallet/private_key4 & set PEERS=ws://localhost:6001 & npm start

curl -H "Content-type:application/json" --data "{\"data\" : \"Some data to the first block\"}" http://localhost:3001/mineBlock
```
##### Get blockchain
```
curl http://localhost:3001/blocks
```

##### Mine a block
```
// curl -X POST http://localhost:3001/mineBlock

// windows command
curl -H "Content-type:application/json" --data "{\"data\" : \"Some data to the first block\"}" http://localhost:3001/mineBlock

``` 

##### Send transaction
```
curl -H "Content-type: application/json" --data '{"address": "04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534b", "amount" : 35}' http://localhost:3001/sendTransaction
```

##### Query transaction pool
```
curl http://localhost:3001/transactionPool
```

##### Mine transaction
```
curl -H "Content-type: application/json" --data '{"address": "04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534b", "amount" : 35}' http://localhost:3001/mineTransaction

// windows command format
curl -H "Content-type: application/json" --data "{\"address\": \"04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534b\", \"amount\" : 35}" http://localhost:3001/mineTransaction
```

##### Get balance
```
curl http://localhost:3001/balance
```

#### Query information about a specific address
```
curl http://localhost:3001/address/04f72a4541275aeb4344a8b049bfe2734b49fe25c08d56918f033507b96a61f9e3c330c4fcd46d0854a712dc878b9c280abe90c788c47497e06df78b25bf60ae64
```

##### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
//windows command
curl -H "Content-type:application/json" --data "{\"peer\" : \"ws://localhost:6001\"}" http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```


