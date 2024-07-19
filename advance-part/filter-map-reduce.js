// filter in javascript

const coding = ["js", "rubby", "python", "java"]

const val = coding.forEach((item) => {
    console.log(item);
})
console.log(val);

// example of filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums);

// another example of filter

const books = [
    { title: 'book1', genre: 'fiction', published: 1981, edition: 2000 },
    { title: 'book2', genre: 'non-fiction', published: 1989, edition: 2001 },
    { title: 'book3', genre: 'history', published: 1994, edition: 2004 },
    { title: 'book4', genre: 'non-fiction', published: 1991, edition: 2003 },
    { title: 'book5', genre: 'science', published: 1999, edition: 2004 },
    { title: 'book6', genre: 'fiction', published: 2000, edition: 2017 },
    { title: 'book7', genre: 'history', published: 2009, edition: 2014 },
    { title: 'book8', genre: 'science', published: 2010, edition: 2019 },
    { title: 'book9', genre: 'mathematics', published: 2002, edition: 2008 },
    { title: 'book10', genre: 'general-knowledge', published: 1996, edition: 2009 }
]

const userBooks = books.filter((bk) => {
    return bk.genre === 'history' || bk.edition >= 2004
})
console.log(userBooks);


//++++++++++++++++++++++++++++++++++++++++++ Map method +++++++++++++++++++++++++++++++++++

