let args = process.argv.slice(2);
let problem = args[0];
const dotIndex = problem.indexOf('.');
problem = problem.substring(dotIndex + 2).replaceAll(" ", '-');
console.log(`${problem}.md`);
console.log(`${problem}.js`);