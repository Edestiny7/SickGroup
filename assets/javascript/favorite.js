$(function() {

    // Update the favorites on the favorite page is the goal
    renderFavorites(list);

    // Load the favorites from localstorage.
    let list = JSON.parse(localStorage.getItem("favorites"));

    // Checkin if in local Storage
    if (!Array.isArray(list)) {
        list = [];
    }

    // Add to local storage
    $("#favorite-btn").on("click", function(event) {
        event.preventDefault();

        renderFavorites(list);
    });

    // render to favorite page is the goal
    function renderFavorites(list) {

        // render favorites to page
        for (var i = 0; i < list.length; i++) {

            let favorite = $("<p>");
            favorite.text(list[i]);
        }
    }

});