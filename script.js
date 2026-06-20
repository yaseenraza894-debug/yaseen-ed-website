// MENU BUTTON

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

if(nav.style.display === "block"){

nav.style.display = "none";

}else{

nav.style.display = "block";

}

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// HEADER SCROLL EFFECT

window.addEventListener("scroll",()=>{

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.background =
"#020b16";

header.style.boxShadow =
"0 0 20px rgba(0,0,0,.5)";

}else{

header.style.background =
"#03101f";

header.style.boxShadow =
"none";

}

});

// FADE ANIMATION

const boxes =
document.querySelectorAll(
".feature-box,.service-grid div,.gallery-grid img"
);

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const position =
box.getBoundingClientRect().top;

const screen =
window.innerHeight;

if(position < screen - 100){

box.style.opacity = "1";

box.style.transform =
"translateY(0)";

}

});

});

boxes.forEach(box=>{

box.style.opacity = "0";

box.style.transform =
"translateY(50px)";

box.style.transition =
"all .8s ease";

});

// CONTACT FORM

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank You! Your Message Has Been Sent."
);

form.reset();

});

// ACTIVE MENU

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(window.scrollY >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") ==
"#" + current
){

link.classList.add("active");

}

});

});

// WHATSAPP BUTTON ANIMATION

const whatsapp =
document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.style.transform =
"scale(1.15)";

setTimeout(()=>{

whatsapp.style.transform =
"scale(1)";

},500);

},2000);

console.log(
"YASEEN ED EVENT DECORATION WEBSITE LOADED"
);