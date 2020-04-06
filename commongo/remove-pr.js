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

    var collection = db.collection('prepod');

    collection.deleteOne({ "Predmet": "shemota" }).then(function(result) {
      console.log('Doc with Predmet is shemota have been removed', result.result);
    });
  }

  client.close();
});
