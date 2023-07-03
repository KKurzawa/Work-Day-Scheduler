// date and time
var today = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').text(today);
var currentTime = dayjs().hour();

//variables for timeslots
var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var thirteen = document.getElementById("hour-13");
var fourteen = document.getElementById("hour-14");
var fifteen = document.getElementById("hour-15");
var sixteen = document.getElementById("hour-16");
var seventeen = document.getElementById("hour-17");

//determines if time slot is in past, present, or future.
function changeNumber(time, rowElement) {
    if (currentTime > time) {
        // console.log("past");
        rowElement.classList.add("past")
    } else if (currentTime == time) {
        // console.log("present");
        rowElement.classList.add("present")
    } else if (currentTime < time) {
        // console.log("future");
        rowElement.classList.add("future")
    }};

    //function called for each timeslot
    changeNumber(9, nine);
    changeNumber(10, ten);
    changeNumber(11, eleven);
    changeNumber(12, twelve);
    changeNumber(13, thirteen);
    changeNumber(14, fourteen);
    changeNumber(15, fifteen);
    changeNumber(16, sixteen);
    changeNumber(17, seventeen);

//event listeners for each timeslot that saves input to local storage
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

var saveButtonNine = document.querySelector("#fivePmBtn");
saveButtonNine.addEventListener("click", function() {
    var fivePm = document.querySelector("#fivePm").value;
    localStorage.setItem("5PM", fivePm);
}); 

//gets items saved in local storage and displays them in correct slot when page refresh button is clicked
window.onload = function(){
    var nineEvent = localStorage.getItem("9AM");
    document.querySelector("#nineAm").innerHTML = nineEvent;
    var tenEvent = localStorage.getItem("10AM");
    document.querySelector("#tenAm").innerHTML = tenEvent;
    var elevenEvent = localStorage.getItem("11AM");
    document.querySelector("#elevenAm").innerHTML = elevenEvent;
    var twelveEvent = localStorage.getItem("12PM");
    document.querySelector("#twelvePm").innerHTML = twelveEvent;
    var oneEvent = localStorage.getItem("1PM");
    document.querySelector("#onePm").innerHTML = oneEvent;
    var twoEvent = localStorage.getItem("2PM");
    document.querySelector("#twoPm").innerHTML = twoEvent;
    var threeEvent = localStorage.getItem("3PM");
    document.querySelector("#threePm").innerHTML = threeEvent;
    var fourEvent = localStorage.getItem("4PM");
    document.querySelector("#fourPm").innerHTML = fourEvent;
    var fiveEvent = localStorage.getItem("5PM");
    document.querySelector("#fivePm").innerHTML = fiveEvent;
};


  