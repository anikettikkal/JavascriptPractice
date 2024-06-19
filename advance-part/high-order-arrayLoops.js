//++++++++++++++++++ for of +++++++++++++++++++++

let arr = [1,2,3,4,5,6,7]
for (const val of arr) {
    console.log(val);
}

//++++ Maps

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('As',"Australia")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key , value] of map) {
    console.log(key, '-:', value);
}

// note = objects cant iterate by using for of loops

// ++++++++++++++ for in loops => use to iterate objects also ++++++++++++++

let obj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rubby'
}
for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    console.log(key ,'=>',obj[key]);
}

//++++++++++++++ for each loop +++++++++++++++++

const coding=['js','rubby','java','python','cpp']

coding.forEach(element => {
    console.log(element);
});

coding.forEach((element,index, arr) => {
    console.log(element,index,arr);
});

const myCoding=[
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'cpp',
        languageFileName: 'c++'
    }
]

myCoding.forEach(element => {
    console.log(element.languageName);
    console.log(element.languageFileName);
});