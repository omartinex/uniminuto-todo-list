module.exports = {
  networks: {
    development: { //Ganache local network
      host: "127.0.01",
      port: 7545,
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}