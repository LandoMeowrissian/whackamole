let score = 0;
let molesLeft = 100;
let popupLength = 1500;
let hideTimeout;
let clickable = false;

function popUpRandomMole() {
  if (molesLeft <= 0) {
    document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
    return;
  }

  const moleHeads = document.querySelectorAll('.mole-head');
  moleHeads.forEach(moleHead => moleHead.classList.add('mole-head--hidden'));


  if (moleHeads.length === 0) {
    return;
  }
  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];
  moleHead.classList.remove('mole-head--hidden', 'mole-head--whacked');

  clickable = true;
  molesLeft -= 1;
  document.querySelector('.sb__moles').innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}

// function popUpRandomMole() {
//   if (molesLeft <= 0) {
//     document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
//     return;
//   }

//   const moleHeads = document.querySelectorAll('.mole-head');
//   moleHeads.forEach(moleHead => moleHead.classList.add('mole-head--hidden'));


//   if (moleHeads.length === 0) {
//     return;
//   }
//   const moleIndex = Math.floor(Math.random() * (0, 7));
//   const moleHead = moleHeads[moleIndex];
//   moleHead.classList.remove('mole-head--hidden', 'mole-head--whacked');

//   clickable = true;
//   molesLeft -= 1;
//   document.querySelector('.sb__moles').innerHTML = molesLeft;

//   hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
// }

// function popUpRandomMole() {
//   if (molesLeft <= 0) {
//     document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
//     return;
//   }

//   const moleHeads = document.querySelectorAll('.mole-head');
//   moleHeads.forEach(moleHead => moleHead.classList.add('mole-head--hidden'));


//   if (moleHeads.length === 0) {
//     return;
//   }
//   const moleIndex = Math.floor(Math.random() * (0, 7));
//   const moleHead = moleHeads[moleIndex];
//   moleHead.classList.remove('mole-head--hidden', 'mole-head--whacked');

//   clickable = true;
//   molesLeft -= 1;
//   document.querySelector('.sb__moles').innerHTML = molesLeft;

//   hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
// }

function hideMole(mole) {
  clickable = false;
  mole.classList.add('mole-head--hidden');

  setTimeout(popUpRandomMole, 100);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 100);

  const moleHeads = document.querySelectorAll('.mole-head');
  for (let moleHead of moleHeads) {
    moleHead.classList.add('mole-head--hidden');
    moleHead.addEventListener('click', event => {
      if (!clickable) return;

      score += 1;
      document.querySelector('.sb__score').innerHTML = score;
      popupLength -= popupLength / 10;

      clearTimeout(hideTimeout);
      hideMole(event.target);

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
      event.target.classList.add('mole-head--hidden');

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
      // event.target.classList.add('mole-head--whacked');
    });
  }
});

// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('mole-head--hidden');
//     }
//   }, 1500);

// });
