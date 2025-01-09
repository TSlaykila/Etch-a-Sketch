const container = document.querySelector(".container"); 
const containerWidth = 400;
document.body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;";
container.style.cssText = `display: flex;flex-wrap: wrap; justify-content: center; align-items: center; margin: 0; width: ${containerWidth}px`;

for(let i = 0; i < 16*16; i++){
    container.style.flexDirection ="row";
    const gridHorizontal = document.createElement("div");
    gridHorizontal.style.border = "0.5px solid black";
    gridHorizontal.style.boxSizing = "border-box";
    gridHorizontal.style.height = "25px";
    gridHorizontal.style.width = "25px";
    container.appendChild(gridHorizontal);
};