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
      .updateOne({ "FirstName" : "Daria"}, { $set: {"FirstName" : 'Dasha' } })
      .then(function(result) {
        console.log('Doc with Firs tName is Daria have been updated (FirstName = Dasha) ', result.result);
      });
  }

  client.close();
});
