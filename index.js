const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana", restaurant: "Menya", image: "nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto", restaurant: "Ramen-ya", image: "naruto.jpg" }
 ];

 const imgItems = document.querySelectorAll('.image-item');
 imgItems.forEach((imgItem) => {
    imgItem.addEventListener('click', () => {
        imgItem.classList.toggle('active');
    }
    );
 }
 );
 // Get all image items
 const ramenItems = document.querySelectorAll('.image-item');
 const popup = document.getElementById('popup');
 const closePopupButton = document.getElementById('close-popup');
 const popupImage = document.getElementById('popup-image');
 const popupTitle = document.getElementById('popup-title');
 const popupDescription = document.getElementById('popup-description');
 const popupRating = document.getElementById('popup-rating');

   // Function to open the popup with ramen details
   ramenItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get data attributes
        const name = item.getAttribute('data-name');
        const description = item.getAttribute('data-description');
        const rating = item.getAttribute('data-rating');
        const image = item.getAttribute('data-image');

          // Populate popup content
          popupTitle.textContent = name;
          popupDescription.textContent = description;
          popupRating.textContent = `Rating: ${rating}`;
          popupImage.src = image;

          // Display the popup
          popup.style.display = 'flex';
      });
  });

  // Close the popup when the close button is clicked
  closePopupButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  // Close the popup if the user clicks anywhere outside the popup content
  window.addEventListener('click', function(event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });
  
 