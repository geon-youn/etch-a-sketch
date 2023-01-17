let size = 16;
const container = document.querySelector('#grid');

const sizeButton = document.querySelector('#set-size');
sizeButton.addEventListener('click', e => {
    size = getUserInput();
    createGrid();
});

const createButton = document.querySelector('#reset-grid');
createButton.addEventListener('click', e => {
    createGrid();
});

const getUserInput = () => {
    let size = 0;
    do {
        size = Number(prompt("Enter the size of the grid (max 100):"));
    } while (size < 0 || size > 100);
    return size;
}

const createGrid = () => {
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mousedown', () => {div.setAttribute('id', 'hovering')});
            row.appendChild(div);
        }
        container.appendChild(row);
    }
};

const addHovering = (e) => {
    e.target.setAttribute('id', 'hovering');
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