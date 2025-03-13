function toggleFilterOptions() {
    const rect = filterButton.getBoundingClientRect();
    const filterOptions = document.getElementById('filterOptions');
    if (filterOptions.style.display === 'none' || filterOptions.style.display === '') {
        filterOptions.style.display = 'flex';
        filterOptions.style.zIndex = '10';
        filterOptions.style.position = 'absolute';
        filterOptions.style.top = `${rect.bottom + window.scrollY}px`;
        filterOptions.style.left = `${rect.left +window.scrollX}px`;
        filterOptions.style.flexDirection = 'column';
    } else {
        filterOptions.style.display = 'none';
    }
}

function filterBy(category) {
    const recetas = document.querySelectorAll('.receta');
    recetas.forEach(receta => {
        if (category === 'todas' || receta.classList.contains(category)) {
            receta.style.display = 'flex';
        } else {
            receta.style.display = 'none';
        }
    });
}