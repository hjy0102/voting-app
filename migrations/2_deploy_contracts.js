var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Larry', 'Bear'], {gas: 6700000});
};

