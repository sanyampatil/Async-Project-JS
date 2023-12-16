
let btn =  document.querySelector(".btn")
let bg= document.getElementsByTagName("body")
btn.addEventListener("click" ,function(){
 console.log("HIII")
 setInterval(ChangeColor,1000)
 
 
})



SetColor = function(){

 console.log("hiii")
 let hex = "0123456789ABCDEF"
 let color = "#" ;
 for(var i=0; i<6; i++)
 {
  color+=hex[Math.floor(Math.random()*16)]
 
 }
 return color;
 }


 function ChangeColor(){
  console.log(SetColor())

  document.body.style.backgroundColor=SetColor();
 
 
 
 }
 

// console.log(bg)


// console.log(SetChanger())



