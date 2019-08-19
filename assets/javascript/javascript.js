//AJAX call to recipe API
$(document).ready(function () {
    // Call recipe API

    let recipeKey = "69d0e213894baf3dbaef4e09fa5215d8";
    let locationKey;
    let recipe;
    let location;
    let apiRecipes;


    function recipeCall(searchTerm) {
        $.ajax({
            url: searchTerm,
            method: "GET",
        }).then(function (response) {

            console.log(response);
            $(".search-form").hide();
            $("#current-dish").empty();

            response = JSON.parse(response);

            apiRecipes = response1.recipes; //change response1 to response only here to switch to dummy object
            console.log(apiRecipes);

            // response1 = JSON.parse(response1);
            for (i = 0; i < apiRecipes.length; i++) {
                let favIcon = $("<i>")
                    .addClass("fav")
                    .attr("value", JSON.stringify(apiRecipes[i]))
                    .attr("data-recipe-index", i)
                    .addClass("fa fa-heart fa_custom")
                    .css("margin-right", "15px")

                let titleImg = $("<img>")
                    .addClass("click-hook")
                    .attr("src", apiRecipes[i].image_url)
                    .attr("value", apiRecipes[i].recipe_id)
                    .css("max-width", "500px")

                let dishTitle = $("<h5>")
                    .attr("value", apiRecipes[i].recipe_id)
                    .attr("src", apiRecipes[i].image_url)
                    .text(apiRecipes[i].title)
                    .addClass("font")
                    .css("text-align", "center")
                    .prepend(favIcon);

                let newListDiv = $("<div>")
                    .addClass("jumbotron justify-content-center")
                    .css("width", "fit-content")
                    .css("margin", "10px auto")
                    .append(dishTitle)
                    .append(titleImg);

                $("#current-dish").append(newListDiv);
            }
        });
    };

    // Call Location API on load

    var ip = "";
    var api_key = 'at_Hh2TNGBjuJxpNv4hWz9Zug16R7wuL';
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            dataType: "json",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function (data) {
                $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");

                let countryCode = data.location.country;
                console.log(countryCode);

                // conversion of country code to nationality

                countryObject.forEach(element => {
                    console.log(element.Country);
                    if (element.Code == countryCode) {
                        console.log("TRUE");
                        apiInput = `https://www.food2fork.com/api/search?key=${recipeKey}&q=${element.Nationality}`;
                        recipeCall(apiInput);
                    }
                });
            }
        });
    });

    //-------------------------------------Front end functionality--------------------------------------

    $(".search-form").hide();
    $("#favorite-btn").on("click", () => {
        window.location.href = "./favorite.html"
    });
    $("#about-btn").on("click", () => {
        window.location.href = "./about.html"
    });

    //-------------------------------------Search function--------------------------------------

    $("#search-btn").on("click", function () {
        $(".search-form").toggle() //showing search form
    });

    $("#search-btn2").on("click", function () {

        let searchTerm = $("#search-input").val();
        let apiInput = `https://www.food2fork.com/api/search?key=${recipeKey}&q=${searchTerm}`;
        recipeCall(apiInput);
    });

    $(document).on("click", ".fav", function (event) {
        event.preventDefault();

        let favoriteList = JSON.parse(localStorage.getItem("favorites"));


        // Checkin if in local Storage
        if (!Array.isArray(favoriteList) || favoriteList == undefined) {
            favoriteList = [{
                recipe_id: 0
            }];
            console.log("here")
        }

        console.log(favoriteList)


        // Get the recipe details and store them in an object
        let recipeIndex = $(this).attr("data-recipe-index");

        let favoriteItem = apiRecipes[parseInt(recipeIndex)];

        console.log(favoriteItem);

        if (favoriteList.includes(favoriteItem)) {
            console.log("already there");
        } else {
            // Adding favorite to local list variable and adding it to local storage
            favoriteList.push(favoriteItem);

            // Save the favorite into localstorage.
            localStorage.setItem("favorites", JSON.stringify(favoriteList));
        }
    });

    $(document).on("click", ".click-hook", function (event) {
        event.preventDefault();
        localStorage.setItem("ingredients", $(this).attr("value"));
        localStorage.setItem("current-dish-img", $(this).attr("src"));

        window.location.href = "./ingredients.html"
    });

});