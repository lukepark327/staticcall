const hre = require("hardhat");

async function main() {
    const test = await hre.ethers.deployContract("Test", [], {});
    await test.waitForDeployment();
    console.log(await test.getAddress());

    console.log(await test.get.staticCall(327));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
