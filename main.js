// 1. Select elements based on your current HTML structure
const ratingCard = document.querySelector('main:not(.hidden)');
const thankYouCard = document.querySelector('main.hidden');
const ratingButtons = document.querySelectorAll('fieldset button');
const submitBtn = document.querySelector('button[type="submit"]');
const resultBadge = document.querySelector('.bg-grey-950.text-orange-500'); // The "You selected..." pill

let selectedRating = null;

// 2. Handle Rating Selection
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Reset all buttons to default dark style
    ratingButtons.forEach(btn => {
      btn.classList.remove('bg-white', 'text-grey-950'); 
      btn.classList.add('bg-grey-950', 'text-grey-500');
    });

    // Highlight the clicked button (White background, Dark text)
    button.classList.remove('bg-grey-950', 'text-grey-500');
    button.classList.add('bg-white', 'text-grey-950');

    // Save the number
    selectedRating = button.textContent;
  });
});

// 3. Handle Submit
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Stop the form from refreshing the page

  if (selectedRating) {
    // Update the text inside the result badge
    resultBadge.textContent = `You selected ${selectedRating} out of 5`;

    // Swap the cards
    ratingCard.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
  } else {
    alert("Please select a rating first!");
  }
});