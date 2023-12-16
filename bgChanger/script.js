
let btn =  document.querySelector(".btn")
let bg= document.getElementsByTagName("body")
btn.addEventListener("click" ,function(){
 console.log("HIII")
 setInterval(ChangeColor,1000)
 
 
})
function ChangeColor(){
 bg.backGroundColor=SetColor


}



SetColor = function(){

 console.log("hiii")
 let hex = "1234567890ABCDEF"
 let color = "#" ;
 for(var i=0; i<5; i++)
 {
  color+=hex[Math.floor(Math.random()*16)]
 
 }
 return color;
 }

// console.log(bg)


// console.log(SetChanger())



