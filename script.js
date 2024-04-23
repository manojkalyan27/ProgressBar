const circles = document.querySelectorAll('circle');
const lines = document.querySelectorAll('line');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentActive = 1;

prevButton.addEventListener("click" , ()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1;
    }

    circleline_Update()  // impp
})

nextButton.addEventListener("click" , ()=>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    circleline_Update()  // impp
})

function circleline_Update(){

    circles.forEach((circle , index) => {
        if(index < currentActive){
            circle.classList.add("active") // impp
        }
        else{
            circle.classList.remove("active")  // impp
        }
    });

    lines.forEach((line , index) => {
        if(index < currentActive-1){
            line.classList.add("active")  // impp
        }
        else{
            line.classList.remove("active")  // impp
        }
    })

    if(currentActive === 1){
        prevButton.disabled = true;  // impp
    }
    else if(currentActive === circles.length){
          nextButton.disabled = true;  // impp
    }
    else{
          prevButton.disabled = false;  // impp
          nextButton.disabled = false;
    }
}