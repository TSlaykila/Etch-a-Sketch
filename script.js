const container = document.querySelector(".container"); 
const containerWidth = 600;
document.body.style.cssText = "display: flex;flex-direction: column ; justify-content: center; align-items: center; height: 100vh; margin: 0;";
container.style.cssText = `display: flex;flex-wrap: wrap; justify-content: center; align-items: center; margin: 0; width: ${containerWidth}px`;


const squareNumber = document.createElement("button");
squareNumber.innerHTML = "Square Number";
squareNumber.addEventListener("click", () => {
    number = parseInt(prompt("How many squares do you wish per side (100 max)"));
    if (number > 100){number = 100; alert("The maximun capability is 100");};
    container.innerHTML = ""
    makeSquare();
});

document.body.appendChild(squareNumber);
function makeSquare(){
    for(let i = 0; i < number*number; i++){
        container.style.flexDirection ="row";
        const gridHorizontal = document.createElement("div");
        gridHorizontal.setAttribute("class", "grid")
        gridHorizontal.style.border = "0.5px solid black";
        gridHorizontal.style.boxSizing = "border-box";
        gridHorizontal.style.height = `${containerWidth / number}px`;
        gridHorizontal.style.width = `${containerWidth / number}px`;
        container.appendChild(gridHorizontal);
    };

    const grid = document.querySelectorAll(".grid");
    grid.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
    });
};
let number = 16;
makeSquare();

