// List the properties of a javascript object
/*var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var properties = Object.keys(student).join(',');

console.log(properties)
//Write a JavaScript program to delete the rollno property 
from the following object. Also print the object before or after deleting the property.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

delete student.rollno;

console.log(student)

*/
//Write a JavaScript program to get the length of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
};
var length = Object.keys(student).length;
console.log(length)

//Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books.
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    console.log(library[0])

    let showList = Object.keys(library)


    let show = library[0];
    console.log(show)