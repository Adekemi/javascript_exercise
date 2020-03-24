$('h1').click(function(){
    console.log('There was a click')
//    $(this).text("I was clicked")
})


//var inputPounds = prompt("To convert lbs to kg, enter number: ");
//convertedKg = inputPounds * 0.454;
//alert("The weight in kg is: " + convertedKg);
//console.log("Conversion completed")

// even number n = n+2

//var x = 0;
//
//while (x <= 10) {
//    console.log("x is currently at: "+x )
//    console.log("x is still less than 10, adding 2 to x: ")
//    
//    x = x+2;
//}
//
//while (x <= 10) {
//    console.log(x);
//   x = x+2;
//}

//var num = 1;
//
//while (num < 11) {
//   if (num%2 === 0) {
//       console.log(num);
//   }
//    num = num+1;
//}


//for (var i = 0; i < 5; i++) {
//    console.log("Hello")
//}
//
//var x = 0;
//while ( x < 5) {
//    console.log("Hello")
//    
//    x = x + 1;
//}
//
////odd numbers from 1 to 25
//
//var num = 1;
//
//while (num < 26) {
//    if (num%2 !== 0) {
//        console.log(num);
//    }
//    num++
//}
//
//
//
//for (var i = 0; i < 26; i++){
//    
//    if (i%2 !== 0) {
//         console.log(i);
//    }
//   
//    
//}

//var firstName = prompt("Hello and Welcome. Please enter your First Name: ");
//var secondName = prompt("please enter your last Name:  ");
//var age = prompt("How old are you? ");
//var tall = prompt("How tall are you in centimeters? ");
//var pet = prompt("What is the name of your pet? ");
////alert("Thank you so much for the information");
//
//var nameCond = null;
//var ageCond = null;
//var tallCond = null;
//var petCond = null;
//
////Name Condition
//
//if (firstName[0] === secondName[0]) {
//    nameCond = true;    
//}else {
//    nameCond = false;
//}
//
//// Age Condition
//if (age > 20 && age < 30 ) {
//    ageCond = true;
//}else {
//    ageCond = false;
//} 
//
//// Height Condition
//if (tall >= 170) {
//    tallCond = true;
//}else {
//    tallCond = false;
//}
//
//// Pet Condition
//if (pet[pet.length-1] === "y"){
//    petCond = true;
//} else {
//    petCond = false;
//}
//
//// All Condtions
//if (nameCond && ageCond && tallCond && petCond){
//    alert("Check the console")
//    console.log("Congratulations Spy! You are in!")
//}else
//    alert("Thank you for the information. Bye!")
////    console.log("There is nothing to see here")

// Functions

function formal(name="Sam", title='Sir') {
    return title+ " "+name
}

function timesFive(numInput) {
    //Local scope to the functiom!
    var result = numInput * 5
    return result
}

// Global Scope (A variable defined outside of the function)

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF" 

function fun(stuff) {
    console.log(v);
    stuff = "Reassign stuff inside func"
    console.log(stuff);
}

fun();
console.log(stuff);

//codingbat.com

// A sleepIn function that returns sleep in when on vacation
function sleepIn(weekday, vacation){
    return (!weekday || vacation)
}

sleepIn(false, false)

function monkeyTrouble(aSmile, bSmile){
    return ( aSmile && bSmile) || ( !aSmile && !bSmile)
}

function stringTimes(str, n){
    var returnStr = "";
    var i = 0;
    while (i<n) {
        returnStr = returnStr + str 
        i++
    }
    return returnStr
    
}

// Example: if none of the numbers are 13, add them all. If one number is 13, the numbers to the right of the numbers 
// and the number that is 13 do not count
function luckySum(a, b, c){
    if (a === 13){
        return 0
    }else if (b === 13){
        return a
    }else if (c === 13){
        return a+b
    }else {
        return a+b+c
    }
}

// Another way
function luckySum(a, b, c){
    if (a == 13){
        return 0
    }
    if (b == 13){
        return a
    }
    if (c == 13){
        return a+b
    }
    return a+b+c
}

function caught_speeding(speed, is_birthday){
    if (is_birthday) {
        speed -= 5
    }
    if (speed <= 60) {
        return 0
    }
    if (speed >= 61 && speed <= 80) {
        return 1
    }
    if (speed >= 81){
        return 2
    }
}


// Another way to write line 205
// if (60 < speed <= 80) {
//     return 1
// }


// To create Arrays

countries = ["USA", "Germany", "China"]

//Indexing Arrays

countries[1]; //This will return USA

//To change Arrays. Strings are immutable (cannot be changed ) but Arrays are mutable.

countries[2] = "France";

//Adding and Removing in arrays
//.pop() removes
var arr = ["A", "B", "c"]
var newArr = arr.pop()

//push()adds
arr.push("D");

//arrays can take in mixed types
arr = ["K", 2, True]

//arrays can be nested
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//to print out the whole array using for loop
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// Using "for of" loop
for (letter of arr){
    console.log(letter);
}

//Outputs hello three times
for (letter of arr){
    console.log("hello");
}

//to alert each of the elements
for (letter of arr){
    alert(letter);
}

//Shortcut for the previous code
arr.forEach(alert);

//Example

function addAwesome(name){
    console.log(name+" is awesome!");
}

var topics = ["Python", "Django", "Science"]
topics.forEach(addAwesome)




var roster = []
function addNew() {
    var newName = prompt("What name would you like to add?")
    roster.push(newName)
    
}
function remove() {
    var remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index, 1)
    
}

function display(){
    console.log(roster);
}

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start === 'y'){
    while (request !== "quit"){
        request = prompt("Please select an action: add, remove, display, or quit")
        if (request === 'add') {
            addNew()
        }else if (request === 'display'){
            display()
        }else if(request === 'remove'){
            remove();
        }else {
            alert('Not recognized')
            // request = 'quit'
        }
    }
}
alert("Thanks for using the Web App! Please refresh to start over!")


// Use of methods in a function

var simple = {
    prop:"Hello",
    myMethod: function(){
        console.log("The myMethod was called")
    }
}

// to call them, 
simple.myMethod()

// Example
var myObj = {
    name : "Jose",
    greet : function(){
        console.log("Hello "+ this.name)
    }
}

//Exercise

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31
}



var employee = {
    name: "John Smith",
    nameLength: function(){
        console.log('name'.length)
    }
}

var employee = {
    job: "Programmer",
    nameLength: function(){
        alert("Job is " + employee['job'])
    }
}

var employee = {
    name: "John Smith",
    nameLength: function(){
        alert("Name is " + employee['name'])
    }
}

var employee = {
    age: 31,
    nameLength: function(){
        alert("Age is " + employee['age'])
    }
}

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        alert("Name is " +this.name+ ", Job is "+ this.job + ", Age is "+this.age)
    }

}

var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length);
    }

}


// How to split a string into an array
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.split(" ")[1]);
    }

}

