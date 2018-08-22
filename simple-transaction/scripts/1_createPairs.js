const fs = require('fs')
const Stellar = require('stellar-sdk')

Stellar.Network.useTestNetwork()

fs.writeFileSync(
    "pairs.json",
    JSON.stringify(
        ['pairA', 'pairB'].map(() => {
            const pair = Stellar.Keypair.random()
            return {
                secretSeed: pair.secret(),
                publicKey: pair.publicKey(),
            }
        })
    )
)