function Greet(){
    const userInput = document.getElementById("user-input");
    const msg = document.getElementById("msg");
    const err = document.getElementById("err");
    msg.innerText=``;
    msg.style.opacity = 0;
    err.innerText=``; 
    err.style.opacity = 0;

    if(userInput.value === ""){
        err.innerText=`Please Enter Your Name !`;
        err.style.opacity = 1;
    }else{
        msg.innerText=`Welcome ${userInput.value}🎊`;
        msg.style.opacity = 1;
    }
    
}