
/* search button */

const searchBtn = document.getElementById('search-btn');
const searchIcon = document.getElementById('search-icon');
const closeBtn = document.getElementById('close-btn');
const listItems = document.querySelectorAll('.gallery .item');

function searchItems() {
    let searchTerm = search.value.toLowerCase();

    listItems.forEach((item) => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    if (searchTerm === '') {
        listItems.forEach((item) => {
            item.classList.remove('hidden');
        });
    }

    updateCloseBtn();
}

function showSearch() {
    search.focus();
    searchIcon.classList.add('hidden');
    searchBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
}

function hideSearch() {
    search.value = '';
    searchItems();
    searchIcon.classList.remove('hidden');
    searchBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
}

function updateCloseBtn() {
    if (search.value === '') {
        closeBtn.classList.add('hidden');
    } else {
        closeBtn.classList.remove('hidden');
    }
}

search.addEventListener('input', searchItems);
searchBtn.addEventListener('click', searchItems);
searchIcon.addEventListener('click', showSearch);
closeBtn.addEventListener('click', hideSearch);
updateCloseBtn();


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

/* languages */




