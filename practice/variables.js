/*variables in JS
there are three types of variables in js
const, var , let
prefer not to use var becoz of issue in block scope and functional scope  */

const name="aniket"
/* const variable is use for constant */

const accountId = 12345
let accountEmail="tikkalaniket2019@gmail.com"
var accountPassword="123987"
accountCity= "Ahilyanagar" /* in js there is no need to declare variables everytime compiler automatically assigned value to variables */

console.log(accountId);

/*another way to print all at a time */

console.table([accountId, accountEmail, accountPassword, accountCity])

let shayari=""