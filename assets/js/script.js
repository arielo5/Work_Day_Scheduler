let timeDisplayEl = $('#currentDay');
let DateTime = luxon.DateTime;
let hourTimer = +DateTime.now().toFormat('HH');
let nineAmEl = $('#9AM');
let tenAmEl = $('#10AM');
let elevenAmEl = $('#11AM');
let twelvePmEl = $('#12PM');
let onePmEl = $('#1PM');
let twoPmEl = $('#2PM');
let threePmEl = $('#3PM');
let fourPmEl = $('#4PM');
let fivePmEl = $('#5PM');
let saveBtEl = $("#btn");
let inputEl1 = $('#9AM');
let inputEl2 = $('#10AM');
let inputEl3 = $('#11AM');
let inputEl4 = $('#12PM');
let inputEl5 = $('#1PM');
let inputEl6 = $('#2PM');
let inputEl7 = $('#3PM');
let inputEl8 = $('#4PM');
let inputEl9 = $('#5PM');

function displayTime() {
    timeDisplayEl.text(DateTime.now().toFormat('cccc, LLLL dd, hh:mm a')); 
}

setInterval(displayTime, 1);

function hourTimerFn() {
    hourTimer = +DateTime.now().toFormat('HH');
    // console.log(hourTimer);
    // console.log(typeof hourTimer);
};

setInterval(hourTimerFn, 1);

console.log(DateTime.now().toFormat('cccc, LLLL dd, HH:mm'));
console.log("-------------------------------------------------");
console.log(DateTime.now().toFormat('cccc, LLLL dd, hh:mm a'));
console.log("-------------------------------------------------");


function backgroundColor1() {
    if (hourTimer === 9) {
        nineAmEl.removeClass("past");
        nineAmEl.removeClass("future");
        nineAmEl.addClass("present");
    } else if (hourTimer > 9){
        nineAmEl.removeClass("present");
        nineAmEl.removeClass("future");
        nineAmEl.addClass("past");
    } else if (hourTimer < 9){
        nineAmEl.removeClass("present");
        nineAmEl.removeClass("past");
        nineAmEl.addClass("future");
    }
};

function backgroundColor2() {
    if (hourTimer === 10) {
        tenAmEl.removeClass("past");
        tenAmEl.removeClass("future");
        tenAmEl.addClass("present");
    } else if (hourTimer > 10) {
        tenAmEl.removeClass("present");
        tenAmEl.removeClass("future");
        tenAmEl.addClass("past");
    } else if (hourTimer < 10){
        tenAmEl.removeClass("present");
        tenAmEl.removeClass("past");
        tenAmEl.addClass("future");
    }
};

function backgroundColor3() {
    if (hourTimer === 11) {
        elevenAmEl.removeClass("past");
        elevenAmEl.removeClass("future");
        elevenAmEl.addClass("present");
    } else if (hourTimer > 11) {
        elevenAmEl.removeClass("present");
        elevenAmEl.removeClass("future");
        elevenAmEl.addClass("past");
    } else if (hourTimer < 11){
        elevenAmEl.removeClass("present");
        elevenAmEl.removeClass("past");
        elevenAmEl.addClass("future");
    }
};

function backgroundColor4() {
    if (hourTimer === 12) {
        twelvePmEl.removeClass("past");
        twelvePmEl.removeClass("future");
        twelvePmEl.addClass("present");
    } else if (hourTimer > 12){
        twelvePmEl.removeClass("present");
        twelvePmEl.removeClass("future");
        twelvePmEl.addClass("past");
    } else if (hourTimer < 12){
        twelvePmEl.removeClass("present");
        twelvePmEl.removeClass("past");
        twelvePmEl.addClass("future");
    }
};

function backgroundColor5() {
    if (hourTimer === 13) {
        onePmEl.removeClass("past");
        onePmEl.removeClass("future");
        onePmEl.addClass("present");
    } else if (hourTimer > 13) {
        onePmEl.removeClass("present");
        onePmEl.removeClass("future");
        onePmEl.addClass("past");
    } else if (hourTimer < 13){
        onePmEl.removeClass("present");
        onePmEl.removeClass("past");
        onePmEl.addClass("future");
    }
};

function backgroundColor6() {
    if (hourTimer === 14) {
        // twoPmEl.removeClass("past");
        // twoPmEl.removeClass("future");
        twoPmEl.addClass("present");
    } else if (hourTimer > 14) {
        twoPmEl.removeClass("present");
        twoPmEl.removeClass("future");
        twoPmEl.addClass("past");
    } else if (hourTimer < 14){
        twoPmEl.removeClass("present");
        twoPmEl.removeClass("past");
        twoPmEl.addClass("future");
    }
};

function backgroundColor7() {
    if (hourTimer === 15) {
        threePmEl.removeClass("past");
        threePmEl.removeClass("future");
        threePmEl.addClass("present");
    } else if (hourTimer > 15){
        threePmEl.removeClass("present");
        threePmEl.removeClass("future");
        threePmEl.addClass("past");
    } else if (hourTimer < 15){
        threePmEl.removeClass("present");
        threePmEl.removeClass("past");
        threePmEl.addClass("future");
    }
};

function backgroundColor8() {
    if (hourTimer === 16) {
        fourPmEl.removeClass("past");
        fourPmEl.removeClass("future");
        fourPmEl.addClass("present");
    } else if (hourTimer > 16) {
        fourPmEl.removeClass("present");
        fourPmEl.removeClass("future");
        fourPmEl.addClass("past");
    } else if (hourTimer < 16){
        fourPmEl.removeClass("present");
        fourPmEl.removeClass("past");
        fourPmEl.addClass("future");
    }
};

function backgroundColor9() {
    if (hourTimer === 17) {
        fivePmEl.removeClass("past");
        fivePmEl.removeClass("future");
        fivePmEl.addClass("present");
    } else if (hourTimer > 17) {
        fivePmEl.removeClass("present");
        fivePmEl.removeClass("future");
        fivePmEl.addClass("past");
    } else if (hourTimer < 17){
        fivePmEl.removeClass("present");
        fivePmEl.removeClass("past");
        fivePmEl.addClass("future");
    }
};

setInterval(backgroundColor1, 1);
setInterval(backgroundColor2, 1);
setInterval(backgroundColor3, 1);
setInterval(backgroundColor4, 1);
setInterval(backgroundColor5, 1);
setInterval(backgroundColor6, 1);
setInterval(backgroundColor7, 1);
setInterval(backgroundColor8, 1);
setInterval(backgroundColor9, 1);

saveBtEl.on("click", ".saveBtn", function saver() {
    let info = {
        time09: inputEl1.val().trim(),
        time10: inputEl2.val().trim(),
        time11: inputEl3.val().trim(),
        time12: inputEl4.val().trim(),
        time13: inputEl5.val().trim(),
        time14: inputEl6.val().trim(),
        time15: inputEl7.val().trim(),
        time16: inputEl8.val().trim(),
        time17: inputEl9.val().trim()
    }
    
    localStorage.setItem("info", JSON.stringify(info));
    
});

function renderInfo() {

    let lastInfo = JSON.parse(localStorage.getItem("info"));
    
    if (lastInfo !== null) {
      document.getElementById("9AM").innerHTML = lastInfo.time09;
      document.getElementById("10AM").innerHTML = lastInfo.time10;
      document.getElementById("11AM").innerHTML = lastInfo.time11;
      document.getElementById("12PM").innerHTML = lastInfo.time12;
      document.getElementById("1PM").innerHTML = lastInfo.time13;
      document.getElementById("2PM").innerHTML = lastInfo.time14;
      document.getElementById("3PM").innerHTML = lastInfo.time15;
      document.getElementById("4PM").innerHTML = lastInfo.time16;
      document.getElementById("5PM").innerHTML = lastInfo.time17;

    } else {
      return;
    }
};

function init() {

    renderInfo();
};

init();