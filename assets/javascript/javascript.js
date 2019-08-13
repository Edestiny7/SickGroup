//AJAX call to recipe API
$(document).ready(function () {
    // Call recipe API

    let recipeKey = "5dec84ac5a31780ac10078ea116d758f";
    let locationKey;
    let IP;
    let recipe;
    let location;

    // $.ajax({
    //     url: `https://www.food2fork.com/api/search?key=${recipeKey}&q=chicken%20breast&page=2`,
    //     method: "GET",
    // }).then(function (response) {

    //     console.log(JSON.parse(response));
    //     console.log(response);

    //     recipe = response;
    // });

    // Call Location API

    // function recipe
    // var ip = "132.177.197.105";
    // var api_key = 'at_Hh2TNGBjuJxpNv4hWz9Zug16R7wuL';
    // $(function () {
    //     $.ajax({
    //         url: "https://geo.ipify.org/api/v1",
    //         dataType: "jsonp",
    //         data: {
    //             apiKey: api_key,
    //             ipAddress: ip
    //         },
    //         success: function (data) {
    //             $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
    //             location = data;
    //         }
    //     });
    // });

    //Sample response
    let response1 = {
        "count": 30,
        "recipes": [{
            "publisher": "BBC Food",
            "f2f_url": "http://food2fork.com/view/8c0314",
            "title": "Chicken and cashew nut stir-fry",
            "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299",
            "recipe_id": "8c0314",
            "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg",
            "social_rank": 95.91061636245128,
            "publisher_url": "http://www.bbc.co.uk/food"
        }, {
            "publisher": "Jamie Oliver",
            "f2f_url": "http://food2fork.com/view/0beb06",
            "title": "Roasted chicken breast with pancetta, leeks &amp; thyme",
            "source_url": "http://www.jamieoliver.com/recipes/chicken-recipes/roasted-chicken-breast-with-pancetta-leeks-and-thyme",
            "recipe_id": "0beb06",
            "image_url": "http://static.food2fork.com/466_1_1349094314_lrg2129.jpg",
            "social_rank": 94.88568903341375,
            "publisher_url": "http://www.jamieoliver.com"
        }, {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/5052",
            "title": "Buffalo Chicken Chili",
            "source_url": "http://allrecipes.com/Recipe/Buffalo-Chicken-Chili/Detail.aspx",
            "recipe_id": "5052",
            "image_url": "http://static.food2fork.com/2028272b37.jpg",
            "social_rank": 94.58658353411347,
            "publisher_url": "http://allrecipes.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/e5c48b",
            "title": "Chicken breast with avocado salad",
            "source_url": "http://www.bbcgoodfood.com/recipes/1364637/chicken-breast-with-avocado-salad",
            "recipe_id": "e5c48b",
            "image_url": "http://static.food2fork.com/1364637_MEDIUMc356.jpg",
            "social_rank": 94.35603716159841,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/28674",
            "title": "Simply Parmesan Chicken",
            "source_url": "http://allrecipes.com/Recipe/Simply-Parmesan-Chicken/Detail.aspx",
            "recipe_id": "28674",
            "image_url": "http://static.food2fork.com/1768256a59.jpg",
            "social_rank": 93.80034906530031,
            "publisher_url": "http://allrecipes.com"
        }, {
            "publisher": "BBC Food",
            "f2f_url": "http://food2fork.com/view/cc7512",
            "title": "Chicken biryani",
            "source_url": "http://www.bbc.co.uk/food/recipes/chickenbiriyani_89035",
            "recipe_id": "cc7512",
            "image_url": "http://static.food2fork.com/chickenbiriyani_89035_16x90f07.jpg",
            "social_rank": 92.40780296275469,
            "publisher_url": "http://www.bbc.co.uk/food"
        }, {
            "publisher": "Bon Appetit",
            "f2f_url": "http://food2fork.com/view/51439",
            "title": "Chicken Parmesan",
            "source_url": "http://www.bonappetit.com/recipes/2008/09/chicken_parmesan",
            "recipe_id": "51439",
            "image_url": "http://static.food2fork.com/mare_chicken_parmesan_h176c.jpg",
            "social_rank": 90.59575791272333,
            "publisher_url": "http://www.bonappetit.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/98d440",
            "title": "Artichoke, chicken &amp; lemon linguine",
            "source_url": "http://www.bbcgoodfood.com/recipes/1145661/artichoke-chicken-and-lemon-linguine",
            "recipe_id": "98d440",
            "image_url": "http://static.food2fork.com/1145661_MEDIUM627e.jpg",
            "social_rank": 90.2326225525024,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/978c40",
            "title": "Chicken with lemon &amp; courgette couscous",
            "source_url": "http://www.bbcgoodfood.com/recipes/333612/chicken-with-lemon-and-courgette-couscous",
            "recipe_id": "978c40",
            "image_url": "http://static.food2fork.com/333612_MEDIUM064c.jpg",
            "social_rank": 90.10743372168618,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/c332f0",
            "title": "Posh chicken nuggets",
            "source_url": "http://www.bbcgoodfood.com/recipes/1562652/posh-chicken-nuggets",
            "recipe_id": "c332f0",
            "image_url": "http://static.food2fork.com/1562652_MEDIUM1004.jpg",
            "social_rank": 89.42509401242557,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/a4042b",
            "title": "Chicken &amp; Sweetcorn Soup",
            "source_url": "http://www.bbcgoodfood.com/recipes/180619/chicken-and-sweetcorn-soup",
            "recipe_id": "a4042b",
            "image_url": "http://static.food2fork.com/197075_medium0a7a.jpg",
            "social_rank": 89.3240030128329,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/7536",
            "title": "Chicken Tinga Tostados",
            "source_url": "http://allrecipes.com/Recipe/Chicken-Tinga-Tostados/Detail.aspx",
            "recipe_id": "7536",
            "image_url": "http://static.food2fork.com/858984337e.jpg",
            "social_rank": 88.4168442855139,
            "publisher_url": "http://allrecipes.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/9050f9",
            "title": "Light lemon chicken Caesar",
            "source_url": "http://www.bbcgoodfood.com/recipes/1355635/light-lemon-chicken-caesar",
            "recipe_id": "9050f9",
            "image_url": "http://static.food2fork.com/1355635_MEDIUM1c5e.jpg",
            "social_rank": 87.79613940338393,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/7162",
            "title": "Chicken Delicious",
            "source_url": "http://allrecipes.com/Recipe/Chicken-Delicious/Detail.aspx",
            "recipe_id": "7162",
            "image_url": "http://static.food2fork.com/48639c001.jpg",
            "social_rank": 87.66677648110736,
            "publisher_url": "http://allrecipes.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/4b8ff5",
            "title": "Chicken &amp; mango stir fry",
            "source_url": "http://www.bbcgoodfood.com/recipes/2398/chicken-and-mango-stir-fry",
            "recipe_id": "4b8ff5",
            "image_url": "http://static.food2fork.com/2398_MEDIUMb464.jpg",
            "social_rank": 87.50915533711165,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/6a6d6c",
            "title": "Chicken Breasts with Tomato-Herb Pan Sauce",
            "source_url": "http://www.epicurious.com/recipes/food/views/Chicken-Breasts-with-Tomato-Herb-Pan-Sauce-366432",
            "recipe_id": "6a6d6c",
            "image_url": "http://static.food2fork.com/epicuriousfacebook511b.png",
            "social_rank": 87.26493690171542,
            "publisher_url": "http://www.epicurious.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/b4eaa4",
            "title": "Chicken &amp; broccoli pasta bake",
            "source_url": "http://www.bbcgoodfood.com/recipes/1948/chicken-and-broccoli-pasta-bake",
            "recipe_id": "b4eaa4",
            "image_url": "http://static.food2fork.com/1948_MEDIUM8fbc.jpg",
            "social_rank": 87.255689704409,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/5f3b80",
            "title": "Sweet &amp; sour chicken &amp; veg",
            "source_url": "http://www.bbcgoodfood.com/recipes/1162660/sweet-and-sour-chicken-and-veg",
            "recipe_id": "5f3b80",
            "image_url": "http://static.food2fork.com/1162660_MEDIUMe96a.jpg",
            "social_rank": 85.55485980745388,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "Real Simple",
            "f2f_url": "http://food2fork.com/view/39397",
            "title": "Baked Pecorino Chicken",
            "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/baked-pecorino-chicken-00100000062328/index.html",
            "recipe_id": "39397",
            "image_url": "http://static.food2fork.com/bakedchicken_3003ddb97a2.jpg",
            "social_rank": 84.77876133352308,
            "publisher_url": "http://realsimple.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/0002d6",
            "title": "All-in-one roast chicken &amp; veg",
            "source_url": "http://www.bbcgoodfood.com/recipes/988637/allinone-roast-chicken-and-veg",
            "recipe_id": "0002d6",
            "image_url": "http://static.food2fork.com/988637_MEDIUMabfc.jpg",
            "social_rank": 84.53086303742718,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/93f36c",
            "title": "Christmas pie",
            "source_url": "http://www.bbcgoodfood.com/recipes/2793/christmas-pie",
            "recipe_id": "93f36c",
            "image_url": "http://static.food2fork.com/2793_MEDIUMaa84.jpg",
            "social_rank": 83.76867154251453,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "Framed Cooks",
            "f2f_url": "http://food2fork.com/view/92b194",
            "title": "Chicken with Spring Vegetables and Gnocchi",
            "source_url": "http://www.framedcooks.com/2012/05/chicken-with-spring-vegetables-and-gnocchi.html",
            "recipe_id": "92b194",
            "image_url": "http://static.food2fork.com/iW8v49knM5faff.jpg",
            "social_rank": 80.83140529447712,
            "publisher_url": "http://framedcooks.com"
        }, {
            "publisher": "Simply Recipes",
            "f2f_url": "http://food2fork.com/view/35750",
            "title": "Baked Chicken Parmesan",
            "source_url": "http://www.simplyrecipes.com/recipes/baked_chicken_parmesan/",
            "recipe_id": "35750",
            "image_url": "http://static.food2fork.com/simplyrecipeslogodefaultf402004e.jpg",
            "social_rank": 80.50068829860142,
            "publisher_url": "http://simplyrecipes.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/6a89e0",
            "title": "Chicken stuffed with herby mascarpone",
            "source_url": "http://www.bbcgoodfood.com/recipes/4787/chicken-stuffed-with-herby-mascarpone",
            "recipe_id": "6a89e0",
            "image_url": "http://static.food2fork.com/4787_MEDIUM14f8.jpg",
            "social_rank": 80.37252082959394,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/6a976d",
            "title": "Chicken-Fried Chicken and Pickled Pepper Sandwiches Recipe",
            "source_url": "http://www.chow.com/recipes/30385-chicken-fried-chicken-and-pickled-pepper-sandwiches",
            "recipe_id": "6a976d",
            "image_url": "http://static.food2fork.com/30385_Recipeimage_620x413_chicken_fried_pickled_pepper_sandwichesfdc5.jpg",
            "social_rank": 78.85903981683924,
            "publisher_url": "http://www.chow.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/c94137",
            "title": "Flattened chicken with tomatoes, olives &amp; capers",
            "source_url": "http://www.bbcgoodfood.com/recipes/12742/flattened-chicken-with-tomatoes-olives-and-capers",
            "recipe_id": "c94137",
            "image_url": "http://static.food2fork.com/12742_MEDIUMe476.jpg",
            "social_rank": 77.72615270226183,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/fb262d",
            "title": "Chicken &amp; broad bean filo pies",
            "source_url": "http://www.bbcgoodfood.com/recipes/2302664/chicken-and-broad-bean-filo-pies",
            "recipe_id": "fb262d",
            "image_url": "http://static.food2fork.com/2302664_MEDIUMede0.jpg",
            "social_rank": 77.086195608727,
            "publisher_url": "http://www.bbcgoodfood.com"
        }, {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/15347",
            "title": "Green Chili Chicken Burgers",
            "source_url": "http://allrecipes.com/Recipe/Green-Chili-Chicken-Burgers/Detail.aspx",
            "recipe_id": "15347",
            "image_url": "http://static.food2fork.com/73172343c7.jpg",
            "social_rank": 74.90826597537934,
            "publisher_url": "http://allrecipes.com"
        }, {
            "publisher": "Whats Gaby Cooking",
            "f2f_url": "http://food2fork.com/view/bf98a7",
            "title": "Chicken Parmesan Pizza",
            "source_url": "http://whatsgabycooking.com/chicken-parmesan-pizza/",
            "recipe_id": "bf98a7",
            "image_url": "http://static.food2fork.com/ChickenParmesanPizza347d.jpg",
            "social_rank": 73.2532994368836,
            "publisher_url": "http://whatsgabycooking.com"
        }, {
            "publisher": "Fine Dining Lovers",
            "f2f_url": "http://food2fork.com/view/53864",
            "title": "Chicken Breast Wrapped in Bacon With Shallots",
            "source_url": "http://www.finedininglovers.com/recipes/main-course/chicken-breast-recipe-bacon/",
            "recipe_id": "53864",
            "image_url": "http://static.food2fork.com/s_2940_442203ad78.jpg",
            "social_rank": 72.20033827526566,
            "publisher_url": "http://www.finedininglovers.com"
        }]
    }
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


    console.log(response1);
    console.log(ingredients1);



    //-------------------------------------Frontend Stuff--------------------------------------

    $("#current-dish").text(response1.recipes[3].title);

    $("#search-btn").on("click", function () {
        let seachTerm = $(".search-form").toggle()

        // "https://www.food2fork.com/api/search?key=${recipeKey}&"
    });
    $("#search-btn").on("click")



    //-----------------------------------------------------------------------------------------

    console.log(recipe);
    console.log(location);

});
//Clickevent for Button 