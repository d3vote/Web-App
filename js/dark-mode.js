function changeColor() {
    var root = document.documentElement;
    root.classList.toggle('white');
    const svgImages = document.querySelectorAll('.svg');
    svgImages.forEach((svg) => {
        const currentInvert = parseInt(svg.style.filter.replace(/[^0-9]/g, ''), 10) || 0;
        const newInvert = currentInvert === 85 ? 0 : 85;
        svg.style.filter = `invert(${newInvert}%)`;
      });
}