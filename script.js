//your JS code here. If required.
// Get the input, button, and output elements
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const button = document.getElementById('btn');

// Function to introduce a delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Add an onClick event listener to the button
button.addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent form from submitting normally
  const age = Number(ageInput.value);
  const name = nameInput.value;

  // Check if inputs are not empty
  if (age && name) {
    // Create a promise that resolves or rejects based on the age
    new Promise((resolve, reject) => {
      setTimeout(() => {
        age >= 18 ? resolve(`Welcome, ${name}. You can vote.`) : reject(`Oh sorry ${name}. You aren't old enough.`);
      }, 4000);
    })
    .then(alert)
    .catch(alert);
  } else {
    alert('Inputs cannot be empty.');
  }
});
