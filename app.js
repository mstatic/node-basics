var http = require("http");
var https = require("https");

var username = "chalkers";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript";

  console.log(message);

  return 1;
}

var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
  console.log(response.statusCode);
  var body = "";

  response.on("data", function (data) {
    body += data;
  });

  response.on("end", function() {
    var profile = JSON.parse(body);
    console.log(body);
    console.log(typeof body);
  });
});

request.on("error", function (error) {
  console.error(error.message);
});

module.exports.printMessage = printMessage;