var deadline1 = new Date("Dec 4, 2021 10:30:20").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline1 - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("saleTimer1").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("saleTimer1").innerHTML = "EXPIRED";
    }
}, 1000);
// var deadline2 = new Date("Dec 6, 2021 15:37:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline2 - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("saleTimer2").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("saleTimer2").innerHTML = "EXPIRED";
//     }
// }, 1000);

// var deadline3 = new Date("Dec 4, 2021 15:21:22").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline3 - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("saleTimer3").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("saleTimer3").innerHTML = "EXPIRED";
//     }
// }, 1000);

// var deadline4 = new Date("Dec 3, 2021 8:14:30").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline4 - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("saleTimer4").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("saleTimer4").innerHTML = "EXPIRED";
//     }
// }, 1000);
// var deadline5 = new Date("Dec 2, 2021 12:24:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline5 - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("saleTimer5").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("saleTimer5").innerHTML = "EXPIRED";
//     }
// }, 1000);

// var deadline6 = new Date("Dec 2, 2021 05:01:22").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline6 - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("saleTimer6").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("saleTimer6").innerHTML = "EXPIRED";
//     }
// }, 1000);
