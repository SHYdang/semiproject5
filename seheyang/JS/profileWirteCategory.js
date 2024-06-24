document.getElementById("write").addEventListener("click",function(){
    const a = document.getElementById("write-write");

    if(a.style.display == "none"){
        a.style.display = "inline-block";
    }else{
        a.style.display = "none";
    }
})

document.getElementById("header-profile").addEventListener("click",function(){
    const mylog = document.querySelector(".mylog-suround");

    if(mylog.style.display == "none"){
        mylog.style.display = "flex";
    }else{
        mylog.style.display = "none";
    }
})

const tabItem = document.querySelectorAll(".tab-item");
    const postContent = document.querySelectorAll(".post-content");

    tabItem.forEach(function(item,index){
            item.addEventListener("click",function(e){
            e.preventDefault();

            postContent.forEach(function(content){
                content.classList.remove("tab-active");
            })

            tabItem.forEach(function(content){
                content.classList.remove("tab-active");
            })

        tabItem[index].classList.add("tab-active");
        postContent[index].classList.add("tab-active");

    })
})