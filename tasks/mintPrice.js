module.exports = async function (taskArgs, hre) {
    let contract = await ethers.getContract(taskArgs.contract)
    

    try {
        let price = await contract.mintPrice()
        console.log(`✅ [${hre.network.name}] mintPrice()`);
        console.log(` mint price: ${price}`)
    } catch (e) {
        if(e?.reason) {
            console.log(e.reason)
        } else {
            console.log(e)
        }
    }
}

// npx hardhat --network fantom mintPrice --contract LayerSyncONFT