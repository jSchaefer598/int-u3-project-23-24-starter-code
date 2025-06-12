// Declare variables below to save the different divs of your story.
let option1 =document.querySelector(".option-one");
let option1Screen =document.querySelector(".option-one-screen");
let option1End =document.querySelector(".option-one-end");
let option2 =document.querySelector(".option-two");
let option2Screen =document.querySelector(".option-two-screen");
let option2End =document.querySelector(".option-two-end");
let restart = document.querySelector(".restart");
let option1pt1 =document.querySelector(".option-one-part-one");
let option1pt2 =document.querySelector(".option-one-part-two");



function reset(){
    option1Screen.style.display = "none";
    option1End.style.display = "none";
    option2.disabled = false;
    option2Screen.style.display = "none";
    option2End.style.display = "none";
    option1.disabled = false;
    restart.style.display = "none";
    option1pt1.style.display = "none";
    option1pt2.style.display = "none";
    option1pt1.disabled = false;
    option1pt2.disabled = false;
};

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


 option1.addEventListener('click', function(){
    option1Screen.style.display = "block";
    option1End.style.display = "block";
    option2.disabled = true;
    restart.style.display = "block";
 });

option2.addEventListener('click', function(){
    option2Screen.style.display = "block";
    // option2End.style.display = "block";
    option1pt1.style.display ="block";
    option1pt2.style.display ="block";
    option1.disabled = true;
    // restart.style.display = "block";
 });

 option1pt1.addEventListener('click', function(){
    option1pt2.disabled = true;
    option2End.style.display = "block";
    restart.style.display = "block";
 });

 option1pt2.addEventListener('click', function(){
    option1pt1.disabled = true;
    option1End.style.display = "block";
    restart.style.display = "block";
 });

 

 

 restart.addEventListener('click', reset);
