var fs = require("fs");
console.log("File content:");
fs.readFile("Web-Apps-Class\\ch6pt1\\fig9\\file1.txt", { encoding : "utf-8" }, function(error, data) {
  //May have to change the file path when downloaded to make it run
  console.log(data);
});
console.log("The readFile() method was called");