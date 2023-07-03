// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').text(today);

var currentTime = dayjs().hour();
console.log(currentTime);

var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var thirteen = document.getElementById("hour-13");
var fourteen = document.getElementById("hour-14");
var fifteen = document.getElementById("hour-15");
var sixteen = document.getElementById("hour-16");
var seventeen = document.getElementById("hour-17");

function changeNumber(x, y) {
    if (currentTime > x) {
        console.log("past");
        y.classList.add("past")
    } else if (currentTime == x) {
        console.log("present");
        y.classList.add("present")
    } else if (currentTime < x) {
        console.log("future");
        y.classList.add("future")
    }};
    
    changeNumber(9, nine);
    changeNumber(10, ten);
    changeNumber(11, eleven);
    changeNumber(12, twelve);
    changeNumber(13, thirteen);
    changeNumber(14, fourteen);
    changeNumber(15, fifteen);
    changeNumber(16, sixteen);
    changeNumber(17, seventeen);


var saveButtonOne = document.querySelector("#nineAmBtn");

saveButtonOne.addEventListener("click", function() {
    var nineAm = document.querySelector("#nineAm").value;
    localStorage.setItem("9AM", nineAm);
});  

var saveButtonTwo = document.querySelector("#tenAmBtn");
saveButtonTwo.addEventListener("click", function() {
    var tenAm = document.querySelector("#tenAm").value;
    localStorage.setItem("10AM", tenAm);
}); 

var saveButtonThree = document.querySelector("#elevenAmBtn");
saveButtonThree.addEventListener("click", function() {
    var elevenAm = document.querySelector("#elevenAm").value;
    localStorage.setItem("11AM", elevenAm);
}); 

var saveButtonFour = document.querySelector("#twelvePmBtn");
saveButtonFour.addEventListener("click", function() {
    var twelvePm = document.querySelector("#twelvePm").value;
    localStorage.setItem("12PM", twelvePm);
}); 

var saveButtonFive = document.querySelector("#onePmBtn");
saveButtonFive.addEventListener("click", function() {
    var onePm = document.querySelector("#onePm").value;
    localStorage.setItem("1PM", onePm);
}); 

var saveButtonSix = document.querySelector("#twoPmBtn");
saveButtonSix.addEventListener("click", function() {
    var twoPm = document.querySelector("#twoPm").value;
    localStorage.setItem("2PM", twoPm);
}); 

var saveButtonSeven = document.querySelector("#threePmBtn");
saveButtonSeven.addEventListener("click", function() {
    var threePm = document.querySelector("#threePm").value;
    localStorage.setItem("3PM", threePm);
}); 

var saveButtonEight = document.querySelector("#fourPmBtn");
saveButtonEight.addEventListener("click", function() {
    var fourPm = document.querySelector("#fourPm").value;
    localStorage.setItem("4PM", fourPm);
}); 

// var saveButtonNine = document.querySelector("#fivePmBtn");
// saveButtonNine.addEventListener("click", function() {
//     var fivePm = document.querySelector("#fivePm").value;
//     localStorage.setItem("5PM", fivePm);
// }); 

var saveButtonNine = document.querySelector("#fivePmBtn");
saveButtonNine.addEventListener("click", function() {
    var test = localStorage.getItem("9AM");
    console.log(test);  
    document.querySelector("#fivePm").innerHTML = test;
}); 





// window.onbeforeunload = function() {
//     var nineAmInput = localStorage.getItem("9AM");
//     console.log(nineAmInput);

// }


//  if (window.performance) {
//     console.log("window.performance works fine on this browser");
//   }
//   console.log(performance.navigation.type);
//   if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     console.log( "This page is reloaded" );
//   } else {
//     console.log( "This page is not reloaded");
//   }

$(function () {

  
        
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    // var dayWeek = today.format('[Today is] dddd');
    // $('#currentDay').text(dayWeek);
  });
  