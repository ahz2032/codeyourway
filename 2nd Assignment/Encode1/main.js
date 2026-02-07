//put every word (more or less) of the poem in the array and make the index start at 0.
const words = ["Oh!", "kangaroos", "sequins", "chocolate sodas", "You really are", "beautiful!", "Pearls", "armonicas", "jujubes", "aspirins!", "all the stuff", "they've always talked about", "still makes", "a poem", "a surprise!", "These things,", "are with us", "every day", "even on", "beachheads", "and", "biers", "They do,", "have meaning!", "They're strong", "as rocks."];
let index = 0;

// modern js function, anonymous
//using span instead of for loop for better control of timing / not automatic 
const spawnWord = () => {
    //check if there are still words left
  if (index < words.length) {
    //new html text
    const span = document.createElement('span');
    //uses words on the list on new span
    span.innerText = words[index];
    span.className = 'word';

    // random position by %, position doesnt repeat bc random
    const randomX = Math.random() * 70; 
    const randomY = Math.random() * 90;
    //size and colors
    const randomSize = Math.random() * 50 + 20; // size between 20px and 70px
    const randomHue = Math.random() * 360;

    //stays within viewport
    span.style.left = randomX + "vw"; // vw = viewport width
    span.style.top = randomY + "vh";  // vh = viewport height
    
    //picks between random sz const and random hue const
    span.style.fontSize = randomSize + "px";
    span.style.color = `hsl(${randomHue}, 70%, 50%)`;

    //adds it to body
    document.body.appendChild(span);
    //next word
    index++;
  }
}
