const fs = require("fs");
const fileContent = fs.readFileSync(
  "./keys/multi-cloud-resource-creation-dfdd24d85e5b.json"
);
const buff = new Buffer(fileContent);
console.log("######################Base64###############\n");
console.log(buff.toString("base64"));
console.log("\n######################Base64###############");
