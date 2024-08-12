import Web3 from "web3";
import config from "../config";

export const createWeb3Object = async () => {
    try {
      const web3Obj = new Web3(config.rpcUrl);
      return web3Obj;
    } catch (error) {
      console.log("Error while creating web3 Object", error);
      throw new Error("Error while creating web3 Object | createWeb3Object");
    }
  };
  export const createContractObject = async function (
    web3Obj,
    contractABI,
    contractAddress
  ) {
    try {
      const contractObj = new web3Obj.eth.Contract(contractABI, contractAddress);
      return contractObj;
    } catch (error) {
      console.log("Error in web3-utils | createContractObject", error);
      throw new Error("Error while creating contract object.");
    }
  };
  export const getTokenBalance = async (
    web3Obj,
    contractABI,
    contractAddress,
    walletAddress
  ) => {
    try {
      const contract = new web3Obj.eth.Contract(contractABI, contractAddress);
      let result = await contract.methods.balanceOf(walletAddress).call();
      return result;
    } catch (error) {
      console.log("Error in web3-utils | getTokenBalance", error);
      throw new Error("Error whileget token.");
    }
  };
  export const getBalanceOf = async (
    web3Obj,
    walletAddress
  ) => {
    try {    
      let result = await web3Obj.eth.getBalance(walletAddress);
      return result;
    } catch (error) {
      console.log("Error in web3-utils | getBalanceOf", error);
      throw new Error("Error getBalanceOf token.");
    }
  };
  
  export const convertEthToWei = async function (valueInEth) {
    try {
      console.log("valueInEth",valueInEth)
      let valueInWei = [];
      for (let i = 0; i < valueInEth.length; i++) {
  
        valueInWei.push(Web3.utils.toWei(valueInEth[i], 'ether'));
       
      } 
      return valueInWei;
    } catch (error) {
      console.log("Error in web3-utils | convertEthToWei", error);
      throw new Error("Error while  converting eth to wei.");
    }
  };
  
  export const convertWeiToEth = async function (valueInWei) {
    try {
      let valueInEth = [];
      for (let i = 0; i < valueInWei.length; i++) {
        valueInEth.push(Web3.utils.fromWei(valueInWei[i]));
      }
      console.log("value in ETH" , valueInEth)
      return valueInEth;
    } catch (error) {
      console.log("Error in web3-utils | convertWeiToEth", error);
      throw new Error("Error while converting wei to eth.");
    }
  };
  export const convertGweiToWei = async function (valueInGwei) {
    try {
      let valueInWei = [];
      for (let i = 0; i < valueInGwei.length; i++) {
        valueInWei.push(Web3.utils.toWei(valueInGwei[i],'gwei'));
      }
      return valueInWei;
    } catch (error) {
      console.log("Error in web3-utils | convertGweiToWei", error);
      throw new Error("Error while converting wei to eth.");
    }
  };