let size = 16;
const container = document.querySelector('#grid');

// Can be reg, rgb, ink, era
let brushStyle = "reg";

const sizeButton = document.querySelector('#set-size');
sizeButton.addEventListener('click', () => {
    size = getUserInput();
    createGrid();
});

const createButton = document.querySelector('#reset-grid');
createButton.addEventListener('click', () => {
    createGrid();
});

const getUserInput = () => {
    let size = 0;
    do {
        size = parseInt(prompt("Enter the size of the grid (max 100):", 16));
    } while (size < 0 || size > 100);
    return size;
}

const addHovering = (e) => {
    if (brushStyle === "reg") {
        e.target.style = 'background-color: #2b2b2b';
    }
    else if (brushStyle === "rgb") {
        e.target.style = `background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    else if (brushStyle === "ink") {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = e.target.style.opacity == "" ? "0.1" : Number(e.target.style.opacity) + 0.1;
    }
    else if (brushStyle === "era") {
        e.target.removeAttribute('style');
    }
};

const createGrid = () => {
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mousedown', addHovering);
            row.appendChild(div);
        }
        container.appendChild(row);
    }
};

container.addEventListener('mousedown', () => {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.addEventListener('mouseover', addHovering);
    });
});

container.addEventListener('mouseup', () => {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.removeEventListener('mouseover', addHovering);
    });
});

createGrid();

const brushButtons = document.querySelectorAll('.brush');
brushButtons.forEach(button => {
    button.addEventListener('click', e => {
        brushButtons.forEach(b => {
            b.removeAttribute('disabled');
        });
        button.setAttribute('disabled', '');
        brushStyle = e.target.id;
    });
});