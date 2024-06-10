const container = document.querySelector(".container");
const body = document.querySelector("body");

const buttons = document.createElement("div");

const sizeButton = document.createElement("button");
sizeButton.textContent = "ADJUST GRID SIZE";
buttons.appendChild(sizeButton);

let isColoring = true;
const colorButton = document.createElement("button");
buttons.appendChild(colorButton);
colorButton.textContent = "COLOR MODE: ON";

body.appendChild(buttons);

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

            box.addEventListener("mouseenter", () => {
                if (isColoring) {
                    changeColor(box);
                }
            });

            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

function changeColor(box) {
    let newColorR = Math.random() * 255;
    let newColorG = Math.random() * 255;
    let newColorB = Math.random() * 255;
    box.style.backgroundColor = `rgb(${newColorR}, ${newColorG}, ${newColorB})`;
}

// Event listener for the size button
sizeButton.addEventListener("click", () => {
    let inputSize = parseInt(prompt("Please enter the desired grid size (1-100): "));
    if (inputSize > 0 && inputSize <= 100) {
        gridSize = inputSize;
        genGrid(inputSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Event listener for the color toggle button
colorButton.addEventListener("click", () => {
    isColoring = !isColoring;
    colorButton.textContent = isColoring ? "COLOR MODE: ON" : "COLOR MODE: OFF";
});

genGrid(gridSize);
