// animate container
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//animate item
const title = document.querySelector(".title");
const shoes =  document.querySelector(".shoes img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove",(e) =>{
  let xAxis = (window.innerWidth/2 - e.pageX)/25;
  let yAxis = (window.innerHeight/2 -e.pageY) /25;
  card.style.transform = `rotateX(${yAxis}deg)rotateY(${xAxis}deg)`;
})

//begin animate
container.addEventListener("mouseenter",(event) =>{
  card.style.transition =  'all 0.0s ease-out';
  //could pop
  title.style.transform = "translateZ(150px)";
  shoes.style.transform = "translateZ(150px) rotateZ(-45deg)";
   description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
})

container.addEventListener("mouseleave",(event) =>{
  card.style.transition = 'all 0.5s ease-out';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //could pop
  title.style.transform = "translateZ(0px)";
  shoes.style.transform = "translateZ(0) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
})