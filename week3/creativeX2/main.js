const words = ["Ra", "Ka", "Ta"];
const container = document.getElementById('grid-container');

function fillTheVoid() {
    container.innerHTML = '';
    
    // grid
    const cols = Math.floor(window.innerWidth / 150);
    const rows = Math.floor(window.innerHeight / 80);
    const totalCells = cols * rows;

    for (let i = 0; i < totalCells; i++) {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'word';

         //needed help with this math
        wordDiv.innerText = words[Math.floor(Math.random() * words.length)];
        container.appendChild(wordDiv);
    }
}

//click
window.addEventListener('click', fillTheVoid);

window.addEventListener('resize', fillTheVoid);

fillTheVoid();
