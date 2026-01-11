$(function () {

    var typed = new Typed('.typing', {
        strings: ["Web Designer", "Web Developer", "Programmer", "Code Solver"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true


    });


    let number = document.getElementById("number");
    let counter = 0;
    setInterval(() => {
        if (counter == 85) {
            clearInterval();
        } else {
            counter += 1;
            number.innerHTML = counter + "%";
        }

    }, 20);



    let htmljs = document.getElementById("htmljs");
    let htmlcount = 0;
    setInterval(() => {
        if (htmlcount == 95) {
            clearInterval();
        } else {
            htmlcount += 1;
            htmljs.innerHTML = htmlcount + "%";
        }
    }, 20);


    let cssjs = document.getElementById("cssjs");
    let csscount = 0;
    setInterval(() => {
        if (csscount == 90) {
            clearInterval();
        } else {
            csscount += 1;
            cssjs.innerHTML = csscount + "%";
        }
    }, 20);


    let javajs = document.getElementById("javajs");
    let jscount = 0;
    setInterval(() => {
        if (jscount == 60) {
            clearInterval();
        } else {
            jscount += 1;
            javajs.innerHTML = jscount + "%";
        }
    }, 20);


    AOS.init();
});