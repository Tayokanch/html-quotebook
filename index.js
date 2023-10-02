const blockquotes = document.querySelectorAll('blockquote'); 

blockquotes.forEach(blockquote => {
 const image = blockquote.querySelector('img'); /* selects the first <img> element within the blockquote element and stores it in the image variable */

  blockquote.addEventListener('mouseenter', function () {
    image.style.transform = 'rotate(350deg)';
    blockquote.style.transform = 'scale(1.05)';
  
  });

  blockquote.addEventListener('mouseleave', function () {
    image.style.transform = 'rotate(0deg)';
    blockquote.style.transform = 'scale(1.0)';

  });
});
