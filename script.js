const searchBar = document.getElementById('search-bar');
const menuItems = document.querySelectorAll('.menu-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuSections = document.querySelectorAll('.menu-section');

searchBar.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        menuSections.forEach(section => {
            if (category === 'all' || section.dataset.category === category) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});


AOS.init({
    duration: 800, 
    once: true, 
});
