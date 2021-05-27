const TradingBot = artifacts.require("TradingBot");

module.exports = function (deployer) {
  deployer.deploy(TradingBot);
};
