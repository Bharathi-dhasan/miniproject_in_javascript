var violetbutton=document.querySelector(".violetbutton");
var blackbutton=document.querySelector(".blackbutton");
var orangebutton=document.querySelector(".orangebutton");
var purplebutton=document.querySelector(".purplebutton");
var watch=document.querySelector(".watch");
var time=document.querySelector(".watch p");
var timer =document.querySelector(".time");
var heart =document.querySelector(".heart");
var im=document.querySelector(".watch #he");

timer.addEventListener("click",function(){
    watch.removeChild(watch.children[1]);
    im.style.display="none;"
    time.style.display="block";
    setInterval(function(){
    let f=new Date().toLocaleTimeString();
    time.innerHTML=f;
    watch.appendChild(time);
    },1000);

});

heart.addEventListener("click",()=>{
        im.style.display="block";
        im.classList.add("pulse");
        time.style.display="none";
        watch.removeChild(watch.children[1]);
        watch.appendChild(im)
});








var img=document.querySelector(".watch img");
violetbutton.addEventListener("click",function(){
        img.src="violet.png";
});
purplebutton.addEventListener("click",function(){
        img.src="purple.png";
});
blackbutton.addEventListener("click",function(){
        img.src="black.png";
});
orangebutton.addEventListener("click",function(){
        img.src="orange.png";
});
