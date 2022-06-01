const { join } = require("path");
const {
  existsSync,
  readdir,
  readFileSync,
} = require("fs");
const { createInterface } = require("readline");
const util = require("util");

class Solution {
  filePath = join(__dirname, "../answers");

  constructor(fileName, type) {
    this.fileName = fileName;
    this.type = type;
    this.results = [];

    this.check();
  }

  check() {
    // Compile Results
    this.compileResults();
    // Print Results
    this.displayResults();
  }

  displayResults() {
    this.results.sort((a, b) => a.total - b.total);
    for (let res of this.results) {
      console.log(`${res.name}: ${res.total}`);
    }
  }

  compileResults() {
    readdir(join(this.filePath), (err, folders) => {
      for (let dirName of folders) {
        if (this.checkExists(dirName)) {
          readFileSync(join(this.filePath, dirName), (err, contents) => {
            if (err) {
              console.error(err);
              this.results.push({ name: dirName, total: null });
            } else {
              let lines = contents.toString().split("\n");
              this.results.push({ name: dirName, total: lines.length });
            }
          });
        } else {
          this.results.push({ name: dirName, total: 0 });
        }
      }
    });
  }

  checkExists(dirName) {
    return existsSync(join(this.filePath, dirName, this.fileName));
  }
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

async function prompts() {
  let name = await question("File to check: ");
  rl.close();
  new Solution(name, "answers");
}

prompts();
