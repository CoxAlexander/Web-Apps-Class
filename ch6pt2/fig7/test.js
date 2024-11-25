var fs = require("fs");
var data = fs.readFileSync("Web-Apps-Class\\ch6pt2\\fig7\\file1.txt");
//May have to change the file path when downloaded to make it run
console.log("File content:");
console.log(data);