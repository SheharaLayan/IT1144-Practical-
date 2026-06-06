//select elements
const title=document.getElementById("title");
const button=document.getElementById("changebtn");

//add click events
button.addEventListener("click",function(){
    //change text
    title.textContent="Button Clicked!";
    //change colour
    title.style.color="Green";
});