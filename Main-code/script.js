const btnLeft=document.querySelector(".favourite-section-button-left");

const btnRight=document.querySelector(".favourite-section-button-right");

// let bgcolorright="white";

let bgcolorleft="black";

btnRight.addEventListener("click",()=>{
    // console.log("YES!!!");
    if(bgcolorleft==="black"){
        btnLeft.style.backgroundColor="white";
        btnLeft.style.color="black";
        btnRight.style.backgroundColor="black";
        btnRight.style.color="white";

        bgcolorleft="white";
    }
    
});

btnLeft.addEventListener("click",()=>{
    // console.log("no");
    if(bgcolorleft==="white"){
        btnLeft.style.backgroundColor="black";
        btnLeft.style.color="white";
        btnRight.style.backgroundColor="white";
        btnRight.style.color="black";

        bgcolorleft="black";
    }
    
});


// javascript for favourite section button ends here

//code for favourite section see more

const showMore=document.querySelector(".show-more-button");
const showLess=document.querySelector(".show-less-button");

const part1=document.querySelector(".favourite-section-main-part1");

const part2=document.querySelector(".favourite-section-main-part2");



let more="showed";

let less="hidden";

showMore.addEventListener("click",()=>{
    console.log("yes");
    showMore.style.display="none";
    part2.style.display="flex";
    showLess.style.display="flex";

});
showLess.addEventListener("click",()=>{
    console.log("yes");
    showLess.style.display="none";
    part2.style.display="none";
    showMore.style.display="flex";

});

// making toggle button of all the option list nammed one bar

const oneBar=document.querySelector(".one-bar");

const contentBox=document.querySelector(".review-resource-box");

const rotation=document.querySelector(".rotate");

let statusof="closed";

oneBar.addEventListener("click",()=>{
    console.log("Active!!");
    if(statusof=="closed"){
        contentBox.style.display="flex";
        rotation.style.transform="rotate(180deg)";
        statusof="opened";

    }

    else if(statusof=="opened"){
        contentBox.style.display="none";
        rotation.style.transform="rotate(0deg)";
        statusof="closed";
    }
})










