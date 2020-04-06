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
      .insertMany([
    {
        "FirstName": "Vlad",
        "LastName": "Pavlov",
        "Work": "ychitel"
    },
    {
        "FirstName": "Pert",
        "LastName": "Sidirov",
        "Work": "prepod"
    },
    {
        "FirstName": "Lena",
        "LastName": "Lenina",
        "Work": "doctor"
    },
    {
        "FirstName": "Ivan",
        "LastName": "Smirniv",
        "Work": "prodavec"
    },
    {
        "FirstName": "Lena",
        "LastName": "Vladimirova",
        "Work": "doctor"
    },
    {
        "FirstName": "Pert",
        "LastName": "Ivanov",
        "Work": "videograf"
    }
      ])
      .then(function(result) {
        console.log('6 docs have been inserted into roditeli', result.result);
      });
  }

  client.close();
});
