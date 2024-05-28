// objects part 2 starts now

const realUser = {
    email: "aniket@chatgpt.com",
    fullname: {
        userfullname:{
            userfirstname: "aniket",
            userlastname: "tikkal"
        }
    },
    id: 123
}

// console.log(realUser);
// console.log(realUser.fullname.userfullname.userfirstname);

// ------------------------------- distructing of objects --------------------------------//
 const course = {
    courseName : "javascript",
    courseFee : 999,
    courseInstructor : "aniket"
 }

//  course.courseInstructor

const {courseFee}= course
console.log(courseFee);
const {courseInstructor}= course
console.log(courseInstructor);