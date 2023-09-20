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


//Write a JavaScript program to get the length of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
};
var length = Object.keys(student).length;
console.log(length)
*/
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

    for (var i = 0; i < library.length; i++) {
        let book = "'" + library[i].title + "'" + ' bye ' + library[i].author + "'";
        if (library[i].readingStatus) {
            console.log("already read " + book)
        } else {
            console.log("you need to read " + book);
        }
    }

  /*
  for (const key in library) {
    if (library.hasOwnProperty(key)) {
        value = library[key];
        console.log(key, value)
    }
  }
  */

//Write a bubble sort algorithm in JavaScript.
//Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
/*Sample Data:*/ 
const bubble = [6,4,0, 3,-2,1]
bubble.sort();
console.log(bubble)

/*Write a JavaScript program to create a clock.
Note: The output will come every second.*/
function my_clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
    my_clock.prototype.run = function() {
        setInterval(this.update.bind(this), 1000);
    }
    my_clock.prototype.update = function() {
        this.updateTime(1);
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    }
    my_clock.prototype.updateTime = function (secs) {
        this.seconds += secs;
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours++;
            this.seconds = 0;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }
    }
var clock = new my_clock()
   // clock.run();
