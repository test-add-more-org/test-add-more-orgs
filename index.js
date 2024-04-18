import Chalk from "chalk";

import _ from "lodash";

import minimist from "minimist"

function hello() {
  console.log(Chalk.red(`Hello node.js!\nUsing ${process.version} node version.`));

  const myObj = { "foo": "bar", "fizz": "buzz" };

  const maliciousObj = { "__proto__": { "oops": "It works !" }};

  _.merge(myObj, maliciousObject);
}

hello();

function notExposedVuln() {
  const args = ["a", "b", "c", "d"]
  console.log(minimist(args))
}
