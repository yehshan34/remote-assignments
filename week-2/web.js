//Assignment 4: HTML DOM and Event Handling
//Request 1: Click to Change Text.
const welcome_banner = document.getElementById("welcome_banner");
const goodtime_banner = document.getElementById("goodtime_banner");

welcome_banner.addEventListener("click", () => {
	goodtime_banner.innerText = "開啟美好の時光！";
});

//Request 2: Click to Show & Close Menu.
const menu = document.querySelector("#mobile_menu");
const nav_list = document.querySelector(".nav_list");

menu.addEventListener("click", () => {
	menu.classList.toggle("is_active");
	nav_list.classList.toggle("active");
});

//Request 3: Click to Show More Content Boxes.
const button = document.querySelector(".button");
const hidden_contents = document.querySelector("#hidden_contents");
button.addEventListener("click", () => {
    hidden_contents.style.display = "flex";
});