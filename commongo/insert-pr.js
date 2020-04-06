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

    collection
      .insertMany([
    {
        "FirstName": "Vlad",
        "LastName": "Simanov",
        "Predmet": "mopr"
    },
    {
        "FirstName": "Vikoletta",
        "LastName": "Smirnova",
        "Predmet": "shemota"
    },
    {
        "FirstName": "Inna",
        "LastName": "Sokolov",
        "Predmet": "himia"
    },
    {
        "FirstName": "Vladimir",
        "LastName": "Sidirov",
        "Predmet": "fizika"
    },
    {
        "FirstName": "Vladimir",
        "LastName": "Samoilov",
        "Predmet": "matan"
    },
    {
        "FirstName": "Mari",
        "LastName": "Dyrova",
        "Predmet": "mspis"
    }
    
      ])
      .then(function(result) {
        console.log('5 docs have been inserted into prepod', result.result);
      });
  }

  client.close();
});
