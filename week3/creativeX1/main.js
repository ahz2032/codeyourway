const myImages = [
    "images/img1.jpg", "images/img2.jpg", "images/img3.jpeg", 
    "images/img4.jpg", "images/img5.jpg"
];

let clickCount = 0;
const offset = 20; // offset
const container = document.getElementById('container');

function addImage() {
    const imageIndex = clickCount % myImages.length;
    
    const newImg = document.createElement('img');
    newImg.src = myImages[imageIndex];
    newImg.className = 'cascade-img';
    
    const topPosition = 50 + (clickCount * offset);
    const leftPosition = 50 + (clickCount * offset);
    
    // asked AI help with this for cascading positioning
    newImg.style.top = `${topPosition}px`;
    newImg.style.left = `${leftPosition}px`;

    newImg.style.zIndex = clickCount;

    container.appendChild(newImg);
     // asked AI help with this for positioning

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    clickCount++;
    
    if(clickCount === 1) {
        document.getElementById('hint').style.display = 'none';
    }
}

document.addEventListener('click', addImage);
