const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

const homeStartingContent =
  "Wish Dragon is the most magnificent movie, ever! The storyboard, voice-acting and design is unique in every single way and aspect. Unfortunately, I have seen multiple netizens who are constantly spamming about this movie as an, which is completely untrue.";
const aboutContent =
  "The most cliche kids movie lesson ever was Money can't buy love, but you know? If you make an entertaining movie like Wish Dragon with this lesson as the main lecture, I think you can succeed telling the viewers just that.";
const contactContent =
  "A lot would say it is just another movie with Alladin story and they are not entirely wrong. I mean you have a utensil which contains mystical creatures which grants 3 wishes and you have a poor boy and a rich girl. It's Alladin correct.";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const posts = [];

app.get("/", function (req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
    contentAbout: aboutContent,
    contentContact: contactContent,
    posts: posts,
  });
});
app.get("/about", function (req, res) {
  res.render("about", { contentAbout: aboutContent });
});
app.get("/contact", function (req, res) {
  res.render("contact", { contentContact: contactContent });
});
app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/", function (req, res) {
  const titleContent = req.body.newTitle;
  const postContent = req.body.newPost;

  const post = { title: titleContent, post: postContent };
  posts.push(post);
  res.redirect("/");

  // if (item === "Compose") {
  //   console.log(item);
  // } else {
  // }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
