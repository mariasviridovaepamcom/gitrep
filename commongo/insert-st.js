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
        "FirstName": "Petr",
        "LastName": "Petrov",
        "Group": 7815,
        "Years": 21
    },
    {
        "FirstName": "Pavel",
        "LastName": "Sidirov",
        "Group": 830,
        "Years": 21
    },
    {
        "FirstName": "Pavel",
        "LastName": "Pavlov",
        "Group": 513,
        "Years": 24
    },
  {
        "FirstName": "Sasha",
        "LastName": "Sashlov",
        "Group": 514,
        "Years": 24
    },
    {
        "FirstName": "Vlad",
        "LastName": "Sidirov",
        "Group": 739,
        "Years": 22
    },
    {
        "FirstName": "Lena",
        "LastName": "Lenina",
        "Group": 880,
        "Years": 20
    }
    
      ])
      .then(function(result) {
        console.log('6 docs have been inserted into prepod', result.result);
      });
  }

  client.close();
});
