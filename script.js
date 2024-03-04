
/* search button */

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const recipeItems = document.querySelectorAll('.gallery .item');
    recipeItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value.trim();
    if (searchText) {
        console.log('Căutare pentru:', searchText);
    } else {
        alert('Câmpul de căutare este gol. Vă rugăm să introduceți un termen de căutare.');
    }
});


/* filter gallery recipes */

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
    })
}


