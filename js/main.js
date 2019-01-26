
window.addEventListener("scroll", Scrolling, false);

function Scrolling() {
    let y = window.pageYOffset;
    let header = document.getElementById('header');
    if (y > 25) {
        header.style.backgroundColor = 'rgb(70,148,192)';
    } else {
        header.style.backgroundColor = 'rgba(70,148,192,0.2)';
    }
}