document.getElementById('toggle-map-mode').addEventListener('change', function() {
    const iframe = document.getElementById('googlemap');
    if (this.checked) {
        iframe.style.filter = 'invert(100%)';
    } else {
        iframe.style.filter = 'invert(0%)';
    }
});