const marvel_heroes=["thor","ironman", "spiderman"]
const dc_heroes= ["superman","flash","batman"]

const all_heroes= marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

// to add multiple arrays then we use

const all_new_heroes= [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const anotherArr= [1,2,3,4,[5,6,7],8,9,[10,11[12,23]]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray("aniket"));
console.log(Array.from("aniket"));