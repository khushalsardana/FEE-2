let isImage1 = true;

    function changeImage() {
      const imgElement = document.getElementById('image');
      if (isImage1) {
        imgElement.src = 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fHww';
        imgElement.alt = 'Image 2';
      } else {
        imgElement.src = 'https://images.unsplash.com/photo-1726682577615-728e4272a60c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8';
        imgElement.alt = 'Image 1';
      }
      isImage1 = !isImage1;
    }

    // Automatically change the image every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);