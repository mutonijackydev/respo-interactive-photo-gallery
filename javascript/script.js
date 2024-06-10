window.addEventListener('load', adjustPhotoItems);
window.addEventListener('resize', adjustPhotoItems);

function adjustPhotoItems() {
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        const itemWidth = item.offsetWidth;
        item.style.height = `${itemWidth}px`;
    });
}
