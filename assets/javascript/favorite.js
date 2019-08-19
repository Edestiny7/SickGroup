$(function () {

    // Load the favorites from localstorage.
    let favoriteList = [];

    // get favorite list from local storage
    function getFavoriteList() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.getItem("favorites") != null) {
                favoriteList = JSON.parse(localStorage.getItem("favorites"));
                console.log(typeof (favoriteList));
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }
    // render favorites to page
    function renderFavorites(favoriteList) {
        for (var i = 0; i < favoriteList.length; i++) {
            let thumbnail = $("<img>");
            console.log(favoriteList[i].imgage_url)
            thumbnail.attr("src", favoriteList[i].image_url).css("max-width", "90px").addClass("thumbnail").css("float", "left").css("margin-right", "40px");
            let favorite = $("<div>");
            favorite.text(favoriteList[i].title)
                .addClass("newFav").prepend(thumbnail);
            console.log(favoriteList[i].title);
            $("#favoriteRecipe").append(favorite)
        }
    }

    $(document).on("click", "#favoriteRecipe", function (event) {
        event.preventDefault();
        localStorage.setItem("ingredients", JSON.stringify($(this).attr("value")));
        window.location.href = "./ingredients.html"
    });

    // call get favorites 
    getFavoriteList();

    // call render favorites function 
    renderFavorites(favoriteList);

    $(".clear").on("click", function () {
        localStorage.setItem("favorites", "[]")
        location.reload;
    });
    $(".back").on("click", function () {
        window.location.href = "index.html";
    });


});