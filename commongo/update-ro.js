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

    var collection = db.collection('roditeli');

    collection
      .updateOne({ "Work": "videograf"}, { $set: { "Work": 'spotsman' } })
      .then(function(result) {
        console.log('Doc with work is videograf have been updated (work=spotsman) ', result.result);
      });
  }

  client.close();
});
