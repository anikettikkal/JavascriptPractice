const name="aniket"
const repoCount= 30
console.log(`hello my self ${name} and my repo count i9s ${repoCount}`);

const gameName = new String("aniket-RT")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   aniket   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aniket.com/aniket%20tikkal"
console.log(url.replace('%20', '-'));
console.log(url.includes('aniket'));

console.log(gameName.split('-'));