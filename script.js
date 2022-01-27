"use strict";

let index = 0;

let show_slide = function (i){
    index += i;

    const images = document.getElementsByClassName("image");

    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    if (index > images.length - 1) {
        index = 0;
    }

    if (index < 0){
        index = images.length -1;
    }

    images[index].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    dots[index].className += " active";
};

window.addEventListener("onload", show_slide(index));