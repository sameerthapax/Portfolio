document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / maxHeight;

        // Change background color from white (#ffffff) to blue (#0000ff) as an example
        const red = 255 - Math.round(scrollPercentage * 255); // 255 to 0
        const green = 255 - Math.round(scrollPercentage * 255); // 255 to 0
        const blue = Math.round(scrollPercentage * 255); // 0 to 255
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
});
