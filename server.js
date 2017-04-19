var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/course");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connect mongoose");
});
//Schema
var Course = mongoose.model("Course", {
  title: String,
  info: String,
  students: Array,
  coaches: Array,
  id: Number
});

// var chtml = new Course({ title: 'html', info:'dknweqkqw' });
// chtml.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/course", function(req, res) {
  Course.find({}, function(err, results) {
    console.log(`get courses ${JSON.stringify(results)}`)
    if (err)
       res.send(err);
    res.status(200).json(results);
  });
});

app.post('/course', function(req, res) {
  db.collection('courses').insert(req.body, function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  })
})

app.delete('/course/:courseId', function(req, res) {
  Course.remove({_id: req.params.courseId}, function(err) {
    if(err)
      res.send(err)
    res.json({message: "Course successfully deleted!"})
  })
})


app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
