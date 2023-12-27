const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


let imgcont = document.querySelector(".img-cont");
let buybtn = document.querySelector(".buybtn");
let detscont1 = document.querySelector("#page2 .elem #detsimg1");
let detscont2 = document.querySelector("#page2 .elem #detsimg2");
let detscont3 = document.querySelector("#page2 .elem #detsimg3");
let imgs1=  document.querySelectorAll("#detsimg1 .detsimg img");
let imgs2=  document.querySelectorAll("#detsimg2 .detsimg img");
let imgs3=  document.querySelectorAll("#detsimg3 .detsimg img");
let icon=  document.querySelector(".dets i");
detscont1.addEventListener("mouseenter",function(){
   for (const img of imgs1) {
      img.style.opacity = 1;
      icon.style.top = "15%";
    }
   
  }) ;
  detscont1.addEventListener("mouseleave",function(){
    for (const img of imgs1) {
      img.style.opacity = 0;
      
    }
  }) ;
  detscont2.addEventListener("mouseenter",function(){
    for (const img of imgs2) {
      img.style.opacity = 1;
    }
  }) ;
  detscont2.addEventListener("mouseleave",function(){
    for (const img of imgs2) {
      img.style.opacity = 0;
    }
  }) ;
  detscont3.addEventListener("mouseenter",function(){
    for (const img of imgs3) {
      img.style.opacity = 1;
      
    }
  }) ;
  detscont3.addEventListener("mouseleave",function(){
    for (const img of imgs3) {
      img.style.opacity = 0;
    }
  }) ;
imgcont.addEventListener("mouseenter",function(){
   gsap.to(buybtn,{
   opacity : 1,
   scale : 1,
   })
})

imgcont.addEventListener("mouseleave",function(){
    gsap.to(buybtn,{
      opacity : 0,
      scale : 0,
    })
})

gsap.from('#page1 h1',{
     y:150,
    duration:0.9,
    delay: 0.4,
    opacity:0,
    stagger:0.3,
})
gsap.from('#page1 .img-cont',{
  y:150,
  duration:0.9,
  delay: 0.4,
  opacity:0,
  stagger:0.3,
})

document.addEventListener("mousemove",function (det) {
  gsap.to("#cursor",{
    left : det.x,
    top : det.y,
  })
})


var list = document.querySelectorAll(".child");
list.forEach((elem)=>{
elem.addEventListener("mouseenter",function () {
     gsap.to("#cursor",{
     transform : `translate(-50%,-50%) scale(1)`
  
})
})})
var list = document.querySelectorAll(".child");
list.forEach((elem)=>{
elem.addEventListener("mouseleave",function () {
     gsap.to("#cursor",{
     transform : `translate(-50%,-50%) scale(0)`
  
})
})})
  

