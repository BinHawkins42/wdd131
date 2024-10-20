function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  function viewHandler(event) {
    // Step 1: Get the clicked image
    const clickedImage = event.target;
     // Step 2: Get the src of the clicked image
    const imageSrc = clickedImage.getAttribute('src');
    console.log(imageSrc); 
    // Step 3: Split the src on "-" to manipulate the filename
    const imageNameParts = imageSrc.split('-');
    console.log(imageNameParts);
    // Step 4: Construct the new full-size image filename
    const fullImageSrc = imageNameParts[0] + '-full.jpeg';
    console.log(fullImageSrc);
    // Step 5: Insert the viewer template with the full-size image
    const viewerHTML = viewerTemplate(fullImageSrc, clickedImage.alt);
    document.body.insertAdjacentHTML('afterbegin', viewerHTML);
    // Step 6: Add an event listener to the close button to close the viewer
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function closeViewer() {
    // Remove the viewer from the DOM
    document.querySelector('.viewer').remove();
}

const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((img) => {
    img.addEventListener('click', viewHandler);
});
