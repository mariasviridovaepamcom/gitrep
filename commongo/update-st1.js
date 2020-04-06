var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27019';
var dbName = 'mydb';

var client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected successfully to server');

    var db = client.db(dbName);

    var collection = db.collection('students');

    collection
      .updateMany({ "Years" : 22}, { $set: {"Years" : 21 } })
      .then(function(result) {
        console.log('Doc with years = 22 have been updated (years = 21) ', result.result);
      });
  }

  client.close();
});
