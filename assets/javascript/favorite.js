$(function() {

    // Load the favorites from localstorage.
    let favoriteList = [];

    // get favorite list from local storage
    function getFavoriteList() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("favorites") != null) {
                favoriteList = JSON.parse(localStorage.getItem("favorites"));
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }

    // render favorites to page
    function renderFavorites(favoriteList) {
        for (var i = 0; i < favoriteList.length; i++) {
            let favorite = $("<li>");
            favorite.text(favoriteList[i].favoriteTitle);
            $("#favoriteRecipe").append(favorite);
        }
    }

    // call get favorites 
    getFavoriteList();

    // call render favorites function 
    renderFavorites(favoriteList);

});