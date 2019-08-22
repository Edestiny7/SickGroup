$(document).ready(function() {
    $("body").css({
        background: "darkred"
    });


    let dishImage = $("<img>")
        .attr("src", localStorage.getItem("current-dish-img"))
        .css("max-width", "80%")
        .css("margin", "10px");

    $("#img-div").append(dishImage)

    let recipeKey = "b4324d0c2d00e506749771a9d6ff26d4";

    //Get recipe Id from local storage
    var recipeID = localStorage.getItem("ingredients");
    console.log(recipeID);
    console.log(typeof recipeID);

    function getIngredients() {

        var queryURL = "https://www.food2fork.com/api/get?rId=" + recipeID + "&key=" + recipeKey;

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {

                console.log(response);
                let parsedResponseObject = response; //change response to ingredients1 to response only here to switch to dummy object
                parsedResponseObject = JSON.parse(response);
                // parsedResponseObject = JSON.parse(parsedResponseObject);
                console.log(parsedResponseObject);
                let ingredientsArray = parsedResponseObject.recipe.ingredients;
                console.log(ingredientsArray)

                let directions = $("<p>").text("Click here to see the instuctions")
                    .addClass("instructions-link")
                    .css("margin-top", "50px")
                    .css("font-size", "1.5rem");


                $("#instructions").append(directions);

                let recipeName = $("<div>").text(parsedResponseObject.recipe.title).css("margin-top", "10px").addClass("d - flex justify - content - center");

                $("#recipeName").append(recipeName);


                $(document).on("click", ".instructions-link", function() {
                    window.open(parsedResponseObject.recipe.source_url);
                })


                // Loop through the ingredients returned from the call and append each one to ingredientsList
                for (var i = 0; i < ingredientsArray.length; i++) {

                    let listElement = $("<li>")

                    listElement
                        .addClass("")
                        .text(ingredientsArray[i]);
                    $(".list").append(listElement);
                    listElement = 0;
                }
            })
    }

    getIngredients();

    $(".back").on("click", function() {
        window.location.href = "index.html";
    });

});