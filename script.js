const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', e => {
            e.target.setAttribute('id', 'hovering');
        });
        div.addEventListener('mouseout', e => {
            e.target.removeAttribute('id');
        });
        row.appendChild(div);
    }
    container.appendChild(row);
}