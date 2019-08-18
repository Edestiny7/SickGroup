$(function() {

    // Load the favorites from localstorage.
    let favoriteList = [];

    // get favorite list from local storage
    function getFavoriteList() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("favorites") != null) {
                favoriteList = JSON.parse(localStorage.getItem("favorites"));
                console.log(typeof(favoriteList));
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }

    // render favorites to page
    function renderFavorites(favoriteList) {
        for (var i = 0; i < favoriteList.length; i++) {
            let favorite = $("<li>");
            favorite.text(favoriteList[i].title);
            console.log(favoriteList[i].title);
            $("#favoriteRecipe").append(favorite);
        }
    }

    $(document).on("click", "#favoriteRecipe", function(event) {
        event.preventDefault();
        localStorage.setItem("ingredients", JSON.stringify($(this).attr("value")));
        window.location.href = "./ingredients.html"
    });

    // call get favorites 
    getFavoriteList();

    // call render favorites function 
    renderFavorites(favoriteList);

});