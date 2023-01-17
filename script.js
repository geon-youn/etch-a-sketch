let size = 16;

const sizeButton = document.querySelector('#set-size');
sizeButton.addEventListener('click', e => {
    size = getUserInput();
    createGrid();
});

const createButton = document.querySelector('#create-grid');
createButton.addEventListener('click', e => {
    createGrid();
});

function getUserInput() {
    let size = 0;
    do {
        size = Number(prompt("Enter the size of the grid (max 100):"));
    } while (size < 0 || size > 100);
    return size;
}

function createGrid() {
    const container = document.querySelector('#grid');
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.setAttribute('id', 'hovering');
            });
            // div.addEventListener('mouseout', () => {
            //     div.removeAttribute('id');
            // });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
};