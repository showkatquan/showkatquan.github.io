/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll(

".research-card,.interest-card,.info-card,.skill-card,.highlight-item,.education-box,.contact-card"

).forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/* ==========================================
   SIMPLE PARTICLES
========================================== */

const particles=document.getElementById("particles");

for(let i=0;i<0;i++){

let dot=document.createElement("span");

let size=Math.random()*4+2;

dot.style.width=size+"px";
dot.style.height=size+"px";

dot.style.left=Math.random()*100+"%";
dot.style.top=Math.random()*100+"%";

dot.style.animationDuration=(12+Math.random()*15)+"s";
dot.style.animationDelay=(Math.random()*10)+"s";

particles.appendChild(dot);

}

