document.getElementById("write").addEventListener("click",function(){
    const a = document.getElementById("write-write");

    if(a.style.display == "none"){
        a.style.display = "inline-block";
    }else{
        a.style.display = "none";
    }
})

const slider = document.getElementById("slider");
const slideLis = document.querySelectorAll(".hot-post-gather");
const moveLeft = document.querySelector(".hot-left");
const moveRight = document.querySelector(".hot-right");

moveRight.addEventListener("click",function(){          
    slider.style.transform = "translateX(-790px)";
})

 moveLeft.addEventListener("click",function(){           
    slider.style.transform = "translateX(0px)";
})
