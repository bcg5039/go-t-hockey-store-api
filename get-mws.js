let mws = require('mws-simple')({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  merchantId: process.env.SELLER_ID
})

let listInventory = {
  path: '/FulfillmentInventory/2010-10-01',
  query: {
    Action: 'ListInventorySupply',
    //QueryStartDateTime: '2016-01-01',
    'SellerSkus.member.1': 'Flex 20 L19:20L19 FLEX - FY16',
    'SellerSkus.member.2': 'Flex 20 R19:20R19 FLEX - FY16',
    'SellerSkus.member.3': 'Flex 20 L88:20L88 FLEX - FY16',
    'SellerSkus.member.4': 'Flex 20 R88:20R88 FLEX - FY16',
    'SellerSkus.member.5': 'Flex 30 L19:30L19 FLEX - FY16',
    'SellerSkus.member.6': 'Flex 30 R19:30R19 FLEX - FY16',
    'SellerSkus.member.7': 'Flex 30 L88:30L88 FLEX - FY16',
    'SellerSkus.member.8': 'Flex 30 R88:30R88 FLEX - FY16',
    'SellerSkus.member.9': 'Flex 40 L19:40L19 FLEX - FY16',
    'SellerSkus.member.10': 'Flex 40 R19:40R19 FLEX - FY16',
    'SellerSkus.member.11': 'Flex 40 L88:40L88 FLEX - FY16',
    'SellerSkus.member.12': 'Flex 40 R88:40R88 FLEX - FY16',
    'SellerSkus.member.13': 'Flex 50 L19:50L19 FLEX - FY16',
    'SellerSkus.member.14': 'Flex 50 R19:50R19 FLEX - FY16',
    'SellerSkus.member.15': 'Flex 50 L88:50L88 FLEX - FY16',
    'SellerSkus.member.16': 'Flex 50 R88:50R88 FLEX - FY16',
    Version: '2010-10-01'
  }
}

module.exports = () => {
  return new Promise(function(resolve, reject) {
    mws.request(listInventory, (err, result) => {
      if (err) {
        return reject(err)
      }
      resolve(result)
    })
  })
}
