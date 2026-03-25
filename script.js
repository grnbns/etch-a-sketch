const gridDim = 320;

function randomizeColor(e) {
    e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}

function darken(e) {
    let currOpacity = +e.target.style.opacity;
    if (currOpacity < 1) {
        e.target.style.opacity = currOpacity + 0.1;
    }
}

function addGrid(numSquares) {
    if (numSquares > 100) {
        alert("Grid size too large; may cause crashing. Please try again.")
        return;
    }

    let sideLength = (gridDim / numSquares) + "px";
    const container = document.querySelector(".container");

    for (let i = 0; i < numSquares**2; i++) {
        const div = document.createElement("div");
        div.className = "pixel";
        div.style.width = sideLength;

        // Following line may be commented out if using randomizeColor alone
        div.style.opacity = "0";

        div.addEventListener("mouseenter", (e) => {randomizeColor(e); darken(e);});

        container.appendChild(div);
    }
}

addGrid(16);

function getNumSquares() {
    return prompt("Number of squares per side for new grid:");
}

function createNewGrid() {
    let numSquares = getNumSquares();
    
    const container = document.querySelector(".container");
    container.replaceChildren();
    addGrid(numSquares);
}

const btn = document.querySelector("button");
btn.addEventListener("click", createNewGrid);