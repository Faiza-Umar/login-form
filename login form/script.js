let signup = document.querySelector("#sign-up");
let signupbtn = document.querySelector("#supbtn");
let signinbtn = document.querySelector("#sinbtn");
let nameinput = document.querySelector("#namefield");
let text = document.querySelector("#for-pass");

signinbtn.addEventListener("click", () => {
    nameinput.style.visibility = "hidden";
    nameinput.style.maxHeight = "0" ;
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    signup.innerText = "Sign in";
    text.style.visibility = "hidden";       
});

signupbtn.addEventListener("click", () => {
    nameinput.style.visibility = "visible";
    nameinput.style.maxHeight = "2.5rem";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
    signup.innerText = "Sign up";
    text.style.visibility = "visible"; 
  });

