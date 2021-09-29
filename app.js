// import functions and grab DOM elements
const astleyImage1 = document.getElementById('Astley-image-1');
const astleySound1 = document.getElementById('Astley-sound-1');
const astleyImage2 = document.getElementById('Astley-image-2');
const astleySound2 = document.getElementById('Astley-sound-2');
const astleyImage3 = document.getElementById('Astley-image-3');
const astleySound3 = document.getElementById('Astley-sound-3');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
astleyImage1.addEventListener('click', ()=>{
  astleySound1.play();
});

astleyImage2.addEventListener('click', ()=>{
  astleySound2.play();
});

astleyImage3.addEventListener('click', ()=>{
  astleySound3.play();
});