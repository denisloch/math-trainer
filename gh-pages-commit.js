import fs from "fs";
import path from "path";
import ghpages from "gh-pages";


var args = process.argv.slice(2);

var buildFolder = args[0];
var fileName = ".nojekyll";
var filePath = path.join(buildFolder, fileName);

fs.writeFileSync(filePath, "");
if (fs.existsSync(filePath)) {
    console.log("Publishing...");
    ghpages.publish(buildFolder, {
        branch: "gh-pages",
        message: "Update build",
        tag: true,
        dotfiles: true
    }, function(err) {
        if (err) {
            console.log("Error publishing", err);
        } else {
            console.log("Publishing successful");
        }
    })
} else {
    console.log("Not publishing, no .nojekyll file found");
}
