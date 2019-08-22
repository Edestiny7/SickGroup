//AJAX call to recipe API
$(document).ready(function() {
    // Call recipe API

    let recipeKey = "b4324d0c2d00e506749771a9d6ff26d4";
    let locationKey;
    let recipe;
    let location;
    let apiRecipes;


    function recipeCall(searchTerm) {
        $.ajax({
            url: searchTerm,
            method: "GET",
        }).then(function(response) {

            console.log(response);
            $(".search-form").hide();
            $("#current-dish").empty();

            response = JSON.parse(response);

            apiRecipes = response.recipes; //change response1 to response only here to switch to dummy object
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
    var api_key = 'at_BJyU2faso4KW1vJlJCgTWqJehiC4n';
    $(function() {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            dataType: "json",
            data: {
                apiKey: api_key,
                ipAddress: ip
            },
            success: function(data) {
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

    $("#search-btn").on("click", function() {
        $(".search-form").toggle() //showing search form
    });

    $("#search-btn2").on("click", function() {

        let searchTerm = $("#search-input").val();
        let apiInput = `https://www.food2fork.com/api/search?key=${recipeKey}&q=${searchTerm}`;
        recipeCall(apiInput);
    });

    $(document).on("click", ".fav", function(event) {
        event.preventDefault();

        let recipeIndex = $(this).attr("data-recipe-index");
        let favoriteList = JSON.parse(localStorage.getItem("favorites"));
        let favoriteItem = apiRecipes[parseInt(recipeIndex)];

        // Checkin if in local Storage
        if (!Array.isArray(favoriteList) || favoriteList == undefined) {
            favoriteList = [];
            console.log("no favs yet")
            favoriteList.push(favoriteItem);
            localStorage.setItem("favorites", JSON.stringify(favoriteList));

        } else {
            let checkArray = [];
            let checkID;
            // console.log(recipeIndex);
            console.log(favoriteList)
            console.log(favoriteItem.recipe_id)

            for (i = 0; i < favoriteList.length; i++) {
                checkID = favoriteList[i].recipe_id;
                console.log(checkID);
                checkArray.push(checkID);

                console.log(checkArray);
            }

            if (checkArray.includes(favoriteItem.recipe_id)) {
                console.log("Already there")
            } else {
                console.log("not there")
                favoriteList.push(favoriteItem);
                localStorage.setItem("favorites", JSON.stringify(favoriteList));
            }
        }
    });

    $(document).on("click", ".click-hook", function(event) {
        event.preventDefault();
        localStorage.setItem("ingredients", $(this).attr("value"));
        localStorage.setItem("current-dish-img", $(this).attr("src"));

        window.location.href = "./ingredients.html"
    });

    $(".back").on("click", function() {
        window.location.href = "index.html";
    });


});