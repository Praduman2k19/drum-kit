 
 var n=document.querySelectorAll(".drum").length;
 for(var i=0;i<n;i++)
 {

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var buttonInnerHTML=this.innerHTML;

 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);
 });
 }

document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

//function myFunction() {
  // var str = "Hello World!";
  // var res = str.toUpperCase();
 
function makeSound(key)
{
   key=key.toUpperCase();
 // console.log(key);
switch (key)
{
  
case "W":
 var music1 =new Audio("music/xlocanhl.wav");
music1.play();
  break;
  
  case "A":
    var music2 =new Audio("music/flngcrsh.wav");
    music2.play();
  break; 

  case "S":
    var music3 =new Audio("music/lostabrm.wav");
    music3.play();
  break;
  
  case "D":
    var music4 =new Audio("music/lo crash.wav");
    music4.play();
  break;
  
  case "J":
    var music5 =new Audio("music/rim2cntr.wav");
    music5.play();
  break;
  
  case "K":
    var music6 =new Audio("music/flrbighl.wav");
    music6.play();
  break;
  
  case 'L':
    var music17=new Audio("music/hitimbli.wav");
    music17.play();
  break;
  default:
}


}
function buttonAnimation(currentkey)
{
  currentkey=currentkey.toUpperCase();
 if(currentkey=='W' || currentkey==='A' || currentkey==='S' || currentkey==='J' || currentkey==='K'|| currentkey==='L' || currentkey==='D')
 {
  var activeButton=document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100);
 }
}
