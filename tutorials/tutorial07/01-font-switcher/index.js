function makeBigger() {
   const headerEL= document.querySelector(header);
   headerEL.style.fontSize= "40px";

   const headerEL= document.querySelector(header);
   headerEL.style.fontSize= "30px";

};

function makeSmaller() {
   alert('make smaller!');
   const headerEL= document.querySelector(header);
   headerEL.style.fontSize= "20px";

   const headerEL= document.querySelector(header);
   headerEL.style.fontSize= "18px";

};




/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
