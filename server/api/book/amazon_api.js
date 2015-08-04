var amazon = require('amazon-product-api');
console.log(process.env.AMAZON_ID);
var client = amazon.createClient({
    endPoint: 'ecs.amazonaws.jp',
    awsId: amazon.clientID,
    awsSecret: amazon.clientSecret,
    assocId: 'booklowm-22'
})

client.itemSearch({
  keywords: 'Pulp fiction',
  searchIndex: 'DVD',
  responseGroup: 'ItemAttributes,Offers,Images'
}, function(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});
