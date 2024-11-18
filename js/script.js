function skapaRader() {
    const container = document.getElementById('container-rader');
    const storlekar = ['7px', '10px', '15px', '25px', '35px'];

    storlekar.forEach((storlek, index) => {
        const rad = document.createElement('div');
        rad.classList.add('row');
        rad.textContent = `Rad ${index + 1}`;
        rad.style.fontSize = storlek;
        container.appendChild(rad);
    });
}

function skapaBox(siffror, svartIndex, lilaIndex) {
    const box = document.createElement('div');
    box.classList.add('box');

    siffror.forEach((siffra, index) => {
        const div = document.createElement('div');
        div.textContent = siffra;

        if (svartIndex.includes(index)) div.classList.add('black-bg');
        if (lilaIndex.includes(index)) div.classList.add('purple-bg');

        box.appendChild(div);
    });

    return box;
}

function skapaBoxar() {
    const boxContainer = document.createElement('div');
    boxContainer.id = 'box-container';

    const box1 = skapaBox([...Array(10).keys()], [0, 2, 6, 8], [4]); // 0–9
    const box2 = skapaBox([...Array(10).keys()].reverse(), [0, 2, 4, 6], [8]); // 9–0
    const box3 = skapaBox(['Ett', 'Två', 'Tre', 'Fyra', 'Fem', 'Sex', 'Sju', 'Åtta', 'Nio', 'Tio'], [1, 3, 5, 7, 9], [6]);

    boxContainer.append(box1, box2, box3);
    document.body.appendChild(boxContainer);
}
 

window.onload = function () {
    skapaRader();
    skapaBoxar();
};

