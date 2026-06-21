const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

const textArray = [
"Creative Developer",
"Full Stack Developer",
"UI UX Designer",
"Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === textArray.length){
count = 0;
}

currentText = textArray[count];

letter = currentText.slice(0,++index);

document.querySelector(".desc").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1500);

}else{

setTimeout(type,100);

}

})();
// ABOUT CARDS ANIMATION

const cards =
document.querySelectorAll(".stat-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x =
e.offsetX / card.offsetWidth - 0.5;

const y =
e.offsetY / card.offsetHeight - 0.5;

card.style.transform =
`perspective(1000px)
rotateY(${x*20}deg)
rotateX(${-y*20}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});
// SERVICE CARD 3D EFFECT

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*20;

const rotateX =
((y / rect.height)-0.5)*-20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});
// PROJECT FILTER

const filterBtns =
document.querySelectorAll(".filter-btn");

const projectCards =
document.querySelectorAll(".project-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(b=>
b.classList.remove("active"));

btn.classList.add("active");

const filter =
btn.getAttribute("data-filter");

projectCards.forEach(card=>{

if(filter === "all"){

card.style.display="block";

}else if(card.classList.contains(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});
