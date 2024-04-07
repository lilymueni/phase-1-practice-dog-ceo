console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    // Function to fetch dog breeds
    function fetchDogBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breeds = Object.keys(data.message);
          // Add each breed to the <ul> element
          breeds.forEach(breed => {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            dogBreedsList.appendChild(breedItem);
          });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
    }
  
    // Call the function to fetch dog breeds on page load
    fetchDogBreeds();
  
    // Event listener for breed dropdown change
    breedDropdown.addEventListener('change', function() {
      const selectedLetter = breedDropdown.value;
      const breeds = dogBreedsList.querySelectorAll('li');
      // Loop through all breeds and show/hide based on selected letter
      breeds.forEach(breed => {
        if (breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = 'block'; // Show the breed
        } else {
          breed.style.display = 'none'; // Hide the breed
        }
      });
    });
  });