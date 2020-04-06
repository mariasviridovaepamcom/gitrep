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

    collection.deleteOne({ "Work": "spotsman" }).then(function(result) {
      console.log('Doc with Work is spotsman have been removed', result.result);
    });
  }

  client.close();
});
