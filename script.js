let isLiked = false;
let likeCount = 0;

function toggleLike() {
    isLiked = !isLiked;
    if(isLiked) likeCount+=1;
    else likeCount-=1;

    update();
}

function update() {
    const likeButton = document.getElementById('likeButton');
    const likeCountSpan = document.getElementById('likeCount');
    if (isLiked) {
        likeButton.textContent = 'Unlike';
        likeButton.style.background = 'red'; // Change button text color to red if liked
    } else {
        likeButton.textContent = 'Like';
        likeButton.style.background = '	rgb(211,211,211)'; // Change button text color to white if not liked
    }
    likeCountSpan.textContent = likeCount;
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('style');
    let isDarkMode = false;
  
    themeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        const newTheme = isDarkMode ? 'styledark.css' : 'style.css';
         themeStylesheet.setAttribute('href', newTheme);
        //themeStylesheet.href = newTheme;
    });
  });
  window.onload = function() {
    var introText = document.querySelector('.introtext');
    introText.style.opacity = 1; // Show the text after page load
};
