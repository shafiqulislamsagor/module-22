const course = {
    subject : 'Javascript',
    duration : '2 Month' ,
    credit : 1.5 ,
}

course['time'] = 'tui ki'

console.log(course);

delete course.credit;

console.log(course)

const keys = course.subject;

console.log(keys)