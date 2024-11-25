var fs = require("fs");
var data = fs.readFileSync("Web-Apps-Class\\ch6pt2\\fig8\\file1.txt", { encoding : "utf-8" });
//May have to change the file path when downloaded to make it run
console.log("File content:");
console.log(data);