const project2Img=document.getElementById("project2-img");
const buttonProject2=document.getElementById("button-project2");
const projectinfo2=document.querySelector(".project-info2");

let counter=0;
let isFirstImage=true;
let isSecondImage=false;
let isThirdImage=false;
let isForthImage=false;
let isFifthImage=false;

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
            projectinfo2.innerHTML=
            `
            <div class="project-info projectinfo2-js">
                <h3>Thapar Societies Site</h3>
                <h5>July 2024</h5>
            </div>
            `
            project2Img.src="Images/Thaparsocieties2.png";
            isFirstImage=false;
            isSecondImage=true;
            increment();
        }
        else if (isSecondImage && !isFirstImage && counter==1){
            project2Img.src="Images/Thaparsocieties3.png";
            isSecondImage=false;
            isThirdImage=true;
            increment();
        }
        else if(isThirdImage && !isSecondImage && counter==2){
            project2Img.src="Images/Thaparsocieties4.png";
            isThirdImage=false;
            isForthImage=true;
            increment();
        }
        else if(isForthImage && !isThirdImage && counter==3){
            project2Img.src="Images/ThaparSocieties5.png";
            isForthImage=false;
            isFifthImage=true;
            increment();
        }
        else{
        project2Img.src="Images/Thapar_Societies_Site.png"
        isFirstImage=true;
        projectinfo2.innerHTML=
        `
            <h3>Thapar Societies Site</h3>
            <h5>July 2024</h5>
        `       
        reset();
        }
    }





const project3Img=document.querySelector(".project3-img");
const buttonProject3=document.querySelector("#button-project3");
const project3Info=document.querySelector(".project-info3");

let counter3=0;
let isFirstImage3=true;
let isSecondImage3=false;

function reset3(){
    counter3=0;
}

function increment3(){
    counter3++;
}

buttonProject3.addEventListener("click",function(){
    slide3();
});

function slide3(){
    if(isFirstImage3 && counter3==0){
        project3Info.innerHTML=
        `
        <div class="project-info project-info3-js">
            <h3>Link Saver Extension</h3>
            <h5>August 2024</h5>
        </div>
        `
        project3Img.src="Images/Leads_Tracker.png";
        isFirstImage3=false;
        isSecondImage3=true;
        increment3();
    }
    else{
        project3Info.innerHTML=
        `
            <h3>Link Saver Extension</h3>
            <h5>August 2024</h5>
        `        
        project3Img.src="Images/porject_3.png";
        isFirstImage3=true;
        isSecondImage3=false;
        reset3();
    }
}





const project4Img=document.querySelector(".project4-img");
const buttonProject4=document.getElementById("button-project4");

let counter4=0;
let isFirstImage4=true;
let isSecondImage4=false;
let isThirdImage4=false;
let isForthImage4=false;

function reset4(){
    counter4=0;
}

function increment4(){
    counter4++;
}


buttonProject4.addEventListener("click",function(){
    slide4();
});


    function slide4(){
        if(isFirstImage4 && counter4==0){
            project4Img.src="Images/project4_2.png";
            isFirstImage4=false;
            isSecondImage4=true;
            increment4();
        }
        else if (isSecondImage4 && !isFirstImage4 && counter4==1){
            project4Img.src="Images/project4_3.png";
            isSecondImage4=false;
            isThirdImage4=true;
            increment4();
        }
        else if(isThirdImage4 && !isSecondImage4 && counter4==2){
            project4Img.src="Images/project4_4.png";
            isThirdImage4=false;
            isForthImage4=true;
            increment4();
        }
        else{
        project4Img.src="Images/project4_1.png"
        isFirstImage4=true;  
        reset4();
        }
    }




    const project6Img=document.querySelector(".project6-img");
    const buttonProject6=document.getElementById("button-project6");
    
    let counter6=0;
    let isFirstImage6=true;
    let isSecondImage6=false;
    let isThirdImage6=false;
    let isForthImage6=false;
    let isFifthImage6=false;
    let isSixthImage6=false;
    let isSeventhImage6=false;
    
    function reset6(){
        counter6=0;
    }
    
    function increment6(){
        counter6++;
    }
    
    
    buttonProject6.addEventListener("click",function(){
        slide6();
    });
    
    
        function slide6(){
            if(isFirstImage6 && counter6==0){
                project6Img.src="Images/project6_1.png";
                isFirstImage6=false;
                isSecondImage6=true;
                increment6();
            }
            else if (isSecondImage6 && !isFirstImage6 && counter6==1){
                project6Img.src="Images/project6_2.png";
                isSecondImage6=false;
                isThirdImage6=true;
                increment6();
            }
            else if(isThirdImage6 && !isSecondImage6 && counter6==2){
                project6Img.src="Images/project6_3.png";
                isThirdImage6=false;
                isForthImage6=true;
                increment6();
            }
            else if(isForthImage6 && !isThirdImage6 && counter6==3){
                project6Img.src="Images/project6_4.png";
                isForthImage6=false;
                isFifthImage6=true;
                increment6();
            }
            else if(isFifthImage6 && !isForthImage6 && counter6==4){
                project6Img.src="Images/project6_5.png";
                isFifthImage6=false;
                isSixthImage6=true;
                increment6();
            }
            else if(isSixthImage6 && !isFifthImage6 && counter6==5){
                project6Img.src="Images/project6_6.png";
                isSixthImage6=false;
                isSeventhImage6=true;
                increment6();
            }    
            else{
            project6Img.src="Images/Birthday Site.png"
            isFirstImage6=true;  
            reset6();
            }
        } 





        