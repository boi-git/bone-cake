document.querySelector('.color-1').addEventListener('click', function() {
    let color1 = document.querySelector('.color-1');
    let color2 = document.querySelector('.color-2');
    let parent = color1.parentNode;
    parent.insertBefore(color2, color1);
});