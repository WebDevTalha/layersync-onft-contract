module.exports = async function (taskArgs, hre) {
    let contract = await ethers.getContract(taskArgs.contract)
    let price = taskArgs.price


    try {
        let tx = await (await contract.setPrice()).wait()
        console.log(`✅ [${hre.network.name}] setPrice(${price})`)
        console.log(` tx: ${tx.transactionHash}`)
        let currentPrice = await ethers.provider.getTransactionReceipt(tx.transactionHash)
        console.log(` Current Price: ${parseInt(Number(currentPrice.logs[0].topics[3]))}`)
    } catch (e) {
        if (e.error?.message.includes("ONFT: Can't set the price")) {
            console.log("*ONFT: Can't set the price*")
        } else {
            console.log(e)
        }
    }
}
