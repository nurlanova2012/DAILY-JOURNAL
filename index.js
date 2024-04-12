const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Cooking", "Travelling", "Sport"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Main List
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, itemList: items });
});

// app.post("/", function (req, res) {
//   let item = req.body.newItem;
//   items.push(item);

//   res.redirect("/");
// });

//Work List
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", itemList: workItems });
});
app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/work");
  }
});
//About
app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Thuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;

//   default:
//     console.log("Error: Current day is: " + currentDay);
// }
// if (currentDay === 0) {
//   day = "Sunday";
// }
// if (currentDay === 1) {
//   day ="Monday";
// }
// if (currentDay === 2) {
//   day = "Thuesday";
// }
// if (currentDay === 3) {
//   day ="Wednesday";
// }
// if (currentDay === 4) {
//   day ="Thursday";
// }
// if (currentDay === 5) {
//   day ="Friday";
// }
// if (currentDay === 6) {
//   day = "Saturday";
// } else {
//   console.log("Error: Current day is: " + currentDay);
// }
