
/* search button */

function closeSearch() {
    // This function will be called when the close button is clicked
    // You can put any functionality you want here
    document.getElementById('search').value = ''; // Clears the search bar
    document.getElementById('search-container').style.display = 'none'; // Hides the search bar
}

document.getElementById('search').addEventListener('click', function () {
    // This function will be called when the search bar is clicked
    document.getElementById('search-container').style.display = 'block'; // Shows the search bar
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


/* languages */




