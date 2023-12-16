
let startbtn =  document.querySelector(".start")
let stoptbtn =  document.querySelector(".stop")


startbtn.addEventListener("click" ,function(){
 console.log("HIII")
 var clearbgColor= setInterval(ChangeColor,1000)
 
 
})


stopbtn.addEventListener("click" ,function(){
 console.log("HIII")
 clearInterval(clearbgColor)
 
 
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



