$(document).ready(function () {
    $("body").css({
        background: "url('assets/images/ingredientsbackground.jpg') no-repeat center center fixed"
    });



    function getIngredients() {

        var recipeObject = localStorage.getItem("ingredients");
        console.log(recipeObject);
        recipeObject = JSON.parse(recipeObject);
        recipeObject = JSON.parse(recipeObject);
        var recipeId = recipeObject.recipe_id;
        console.log(recipeObject);
        console.log(recipeId);
        recipeKey = "1ea52a5202149f9ac4dc33174c85c140";

        // var recipeid =;
        var queryURL = "https://www.food2fork.com/api/get?rId=" + recipeId + "&key=" + recipeKey;

        $("#ingredients").empty();
        console.log("Test")

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);
                let ingredients = JSON.parse(response);

                console.log(ingredients1);

                let ingredientsArray = ingredients1.recipe.ingredients;
                console.log(ingredientsArray)

                // Loop through the ingredients returned from the call and append each one to ingredientsList
                for (var i = 0; i < ingredientsArray.length; i++) {

                    let listElement = $("<li>").text(ingredientsArray[i])


                    $(".list").append(listElement);
                }
                console.log(ingredientsList);
                //Add ingredientsList unordered list to ingredients div
                $("#ingredients").append(ingredientsList);

                // window.location.href = "./ingredients.html"
                // console.log("test");

            })

    }

    getIngredients();

});