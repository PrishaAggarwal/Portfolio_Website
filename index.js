const project2Img=document.getElementById("project2-img");
const buttonProject2=document.getElementById("button-project2");

let counter=0;
let isFirstImage=true;
let isSecondImage=false;

function reset(){
    counter=0;
}

function increment(){
    counter++;
}

buttonProject2.addEventListener("click",function(){
    slide();
});
    function slide(){
        if(isFirstImage && counter==0){
            project2Img.src="Images/Thaparsocieties2.png";
            isFirstImage=false;
            isSecondImage=true;
            increment();
        }
        else if (isSecondImage && !isFirstImage && counter==1){
            project2Img.src="Images/Thaparsocieties3.png";
            isSecondImage=false;
            increment();
        }
        else{
        project2Img.src="Images/Thapar_Societies_Site.png"
        isFirstImage=true;
        reset();
        }
    }

