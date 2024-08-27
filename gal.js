// const slider = document.querySelectorAll("img")




// function changeSlide() {
//     // Hide all images
//     for(let i = 0; i < slider.length; i++) {
//         slider[i].style.display = "none";  // Hide each image
//     }

//     // Show the current image
//     slider[n].style.display = "block";  // Show the current image
// }

// // Initial call to display the first image
// changeSlide();


const pics = document.querySelectorAll('.pic');



pics.forEach(pic => {
    

    const desc = pic.querySelector('.txt');

    pic.addEventListener('mouseover', () => {
        desc.style.display = 'block';

        pic.style.transform = 'scale(1.5)'; 
        pic.style.transition = 'transform 0.5s ease'; 
    });
    pic.addEventListener('mouseout', () => {
        desc.style.display = 'none'; // Hide the paragraph
        pic.style.transform = 'scale(1)'; // Reset the div size
    });


});
