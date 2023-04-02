function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
  }
}

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
