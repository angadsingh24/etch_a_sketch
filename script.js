const container = document.querySelector(".container");
const body = document.querySelector("body");

const sizeButton = document.createElement("button");
sizeButton.textContent="ADJUST GRID SIZE";
body.appendChild(sizeButton);


let gridSize = 16;

function genGrid(sideLength) {
    // Clear any existing content
    container.innerHTML = '';

    // Calculate size of each box
    const boxSize = 512 / sideLength;

    for (let i = 0; i < sideLength; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < sideLength; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;

            row.appendChild(box);
            
            box.addEventListener("mouseenter", (event) => {
                changeColor(box);
            });
        }

        container.appendChild(row);
    }
}


function changeColor(box){
    let newColorR = Math.random() * 255;
    let newColorG = Math.random() * 255;
    let newColorB = Math.random() * 255;
    box.style.backgroundColor= 'rgb(' + newColorR + ',' + newColorG + ',' + newColorB + ')';
}

function changeSize(){
    genGrid(gridSize);
}

sizeButton.addEventListener("click", () => {
    let inputSize = parseInt(prompt("Please enter the desired grid size (1-100): "));
    gridSize = inputSize;
    console.log(gridSize);
    genGrid(inputSize);
})

genGrid(gridSize);






