let display = document.getElementById("user-input");
let btn = document.querySelectorAll("button");

btn.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.textContent === "AC"){
            display.innerHTML = "";
        }
        else if(e.target.textContent === "DE"){
            display.innerHTML = display.innerHTML.slice(0,-1);
        }
        else if(e.target.textContent === "="){
            display.innerHTML = eval(display.innerHTML);
        }
        else{
            display.innerHTML += e.target.innerHTML;
        }
    })
})