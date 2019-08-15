$(document).ready(function () {
    $("#ingredientsBody").css({
        background: "url('assets/images/ingredientsbackground.jpg') no-repeat center center fixed"
    })

    let ingredients1 = {
        "recipe": {
            "publisher": "Real Simple",
            "f2f_url": "http://food2fork.com/view/39397",
            "ingredients": ["5 slices sandwichbread ", "1 / 2 cup grated pecorino(2 ounces)",
                "2 tablespoons unsalted butter, melted", "4 kosher salt and black pepper",
                "1 tablespoon 6-ounce boneless, skinless chicken breasts", "2 olive oil\n"
            ],
            "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/baked-pecorino-chicken-00100000062328/index.html",
            "recipe_id": "39397",
            "image_url": "http://static.food2fork.com/bakedchicken_3003ddb97a2.jpg",
            "social_rank": 84.77876133352308,
            "publisher_url": "http://realsimple.com",
            "title": "Baked Pecorino Chicken"
        }
    }

    var recipeChoice;
    var id = recipe.recipe_id

    function getIngredients(recipe) {

        var queryURL;

        $("#ingredients").empty();

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                // storing the data from the AJAX request in the results variable ONE OR THE OTHER OR BOTH OF THE TWO BELOW
                var results = response.data;
                var ingredients = recipe.ingredients;
                var ingredientsList = $("<ul>");
                //Loop through the ingredients returned from the call and append each one to ingredientsList
                for (var i = 0; i < ingredients.length; i++) {
                    var lI = $("<li>").text(ingredients[i]);
                    ingredientsList.append(lI);
                }
                //Add ingredientsList unordered list to ingredients div
                $("#ingredients").append(ingredientsList);

            })

    }

    // var country;
    function getRecipe(country) {

        var queryURL;

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
            })
    }


})