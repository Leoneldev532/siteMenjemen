     
  const sr =  ScrollReveal({ reset: false });

  sr.reveal(".c1",{
    duration:1000,
    Delay:5,
    opacity:0.2,
    distance:"70px",
    origin:"bottom"
  
  });
  

  sr.reveal(".c2",{
    duration:1000,
    Delay:5,
    opacity:0.2,
    distance:"100px",
    origin:"bottom"
  
  });
  
  
  sr.reveal(".c3",{
    duration:1000,
    Delay:5,
    opacity:0.2,
    distance:"100px",
    origin:"bottom"
  
  });
  
  
const headerv =document.querySelector("#headerphone");
const fermer = document.querySelector("#fermer");
const show = document.querySelector("#show");


show.addEventListener("click",()=>{
  headerv.classList.remove("translate-x-[-100%]");
  headerv.classList.add("translate-x-[0%]");
  show.style.display="none";

})

fermer.addEventListener("click",()=>{
  headerv.classList.remove("translate-x-[0%]");
  headerv.classList.add("translate-x-[-100%]");
  show.style.display="flex";

})
