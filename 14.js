function handleClick(element){
    element.style = "background-color: red;";
    // alert("Clicked");
}

var image = document.getElementById("image");
// image.addEventListener("mouseover", function(){
//     this.style = "box-shadow: 2px 2px 2px grey";
//     this.width = "110";
// });


// image.addEventListener("mouseout", function(){
//     this.style = "";
//     this.width = "100";
// });

image.addEventListener("mouseenter", function(){
    this.style = "";
    this.width = "120";
})

// about the name of "mouseover" and "mouseout"
// check: https://www.w3schools.com/jsref/dom_obj_event.asp

// in HTML file: onmouseover
// in JS file  : mouseover
// Note that you don't need "on" in the JS in terms of eventhandlers