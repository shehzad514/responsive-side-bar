var hamburger= document.querySelector(".hamburger");
var navlist =document.querySelector("#nav-ul")
var bars = document.querySelectorAll(".hamburger span")


//hamburger rotation
var active=false; 
hamburger.addEventListener("click", function()
{
    navlist.classList.toggle("open");
    if(!active)
    {
      
        bars[0].style.transform="rotate(45deg)";
        bars[1].style.opacity="0";
        bars[2].style.transform="rotate(-45deg)";
       active=true;
    }
    else
    {
        bars[0].style.transform="rotate(0deg)";
        bars[1].style.opacity="1";
        bars[2].style.transform="rotate(0deg)";
       active=false;
    }
})