let recipes = [
    {
        id: 1,
        title: "Chicken Parmesan",
        cuisine: "Western",
        imageUrl: "https://foolproofliving.com/wp-content/uploads/2013/09/Lighter-Chicken-Parmesan-9688-FL.jpg",
        timeRequired: "90",
        servings: 5,
        ingredients: [
            { ingredientName: "chicken breast", prehandle: "skinless, boneless", qty: "4", unit: "", },
            { ingredientName: "parmesan cheese", prehandle: "grated", qty: "1/2", unit: "cup" },
            { ingredientName: "eggs", prehandle:"", qty: "2", unit: "" },
            { ingredientName: "bread crumbs", prehandle:"", qty: "1", unit: "cup" },
            { ingredientName: "basil", prehandle: "chopped", qty: "1/4", unit: "cup" },
            { ingredientName: "black pepper", prehandle: "", qty: "", unit: "" },
            { ingredientName: "all-purpose flour", qty: "2", unit: "tablespoons" },
            { ingredientName: "olive oil", qty: "1", unit: "cup" },
            { ingredientName: "tomato sauce", qty: "1/2", unit: "cup" },
            { ingredientName: "mozarella cheese", prehandle: "cut into small cubes", qty: "1/4", unit: "cup" }],
        instructions:
            [["Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper."],
            ["Beat eggs in a shallow bowl and set aside."],
            ["Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside."],
            ["Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides."],
            ["Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes."],
            ["Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven."],
            ['Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.'],
            ["Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."]]
    },
    {
        id: 2,
        title: "Beef Stew",
        cuisine: "Chinese",
        imageUrl: "https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
        timeRequired: "120",
        servings: 4,
        ingredients: [
            { ingredientName: "beef", prehandle: "cubed", qty: "2", unit: "lb", },
            { ingredientName: "water", qty: "4", unit: "cup" },
            { ingredientName: "potato", prehandle: "peeled & cubed", qty: "3", unit: "large" },
            { ingredientName: "carrot", prehandle: "cut into 1 inch pieces", qty: "4", unit: "" },
            { ingredientName: "celery", prehandle: "cut into 1 inch pieces", qty: "4", unit: "stalk" },
            { ingredientName: "onion", prehandle: "chopped", qty: "1", unit: "large"},
            { ingredientName: "all-purpose flour", prehandle: "", qty: "2", unit: "tbps" },
            { ingredientName: "black pepper", prehandle: "ground", qty: "1/2", unit: "tbps" },
            { ingredientName: "rosemary", prehandle: "dried", qty: "1", unit: "tps" },
            { ingredientName: "parsley", prehandle: "dried", qty: "1", unit: "tps" }],        
        instructions:
            [["In a large pot or dutch oven, cook beef in oil over medium heat until brown. Dissolve bouillon in water and pour into pot. Stir in rosemary, parsley and pepper. Bring to a boil, then reduce heat, cover and simmer 1 hour."],
            ["Stir potatoes, carrots, celery, and onion into the pot. Dissolve cornstarch in 2 teaspoons cold water and stir into stew. Cover and simmer 1 hour more."]]
    },
    {
        id: 3,
        title: "Mojito Shrimp",
        cuisine: "Western",
        imageUrl: "https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "shrimp", prehandle: "peeled, deveined shrimp, tails on", qty: "1.5", unit: "lb", },
            { ingredientName: "lime juice", prehandle: "", qty: "2", unit: "tbps" },
            { ingredientName: "mojito marinade", prehandle: "",qty: "1", unit: "cup" },
            { ingredientName: "mint sprigs", prehandle: "",qty: "", unit: "" }],
        timeRequired: "30",
        instructions:
            [["Prepare a gas or charcoal grill for high heat (you can hold your hand 1 to 2 in. above cooking grate only 1 to 2 seconds). Meanwhile, put shrimp in a 1-gal. resealable plastic bag and pour in marinade. Seal and marinate at room temperature 15 to 20 minutes."],
            ["Remove shrimp, reserving marinade. Thread shrimp onto 6 or 7 (10- to 14-in.) metal or bamboo skewers."],
            ["Arrange shrimp on grill and baste with marinade (dab some mint and shallot onto shrimp); close lid. Cook until shrimp are just beginning to brown, 1 to 2 minutes. Turn shrimp over, baste again, and close lid. Cook 1 to 2 minutes until browned but still moist in center (cut to check). Transfer shrimp to a platter, drizzle with lime juice, and garnish with mint sprigs."]]
    },
    {
        id: 4,
        title: "Yang Zhou Fried Rice",
        cuisine: "Chinese",
        imageUrl: "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "rice", prehandle: "a day old", qty: "1", unit: "bowl", },
            { ingredientName: "cooking oil", prehandle: "", qty: "1", unit: "tbps" },
            { ingredientName: "red chilli", prehandle: "chopped", qty: "1", unit: "" },
            { ingredientName: "cabbage", prehandle: "diced", qty: "4-5", unit: "tbps" },
            { ingredientName: "wine", prehandle: "", qty: "2-3", unit: "tbps", isOptional:true },
            { ingredientName: "sesame oil", prehandle: "", qty: "1/2", unit: "tbps"},
            { ingredientName: "green beans", prehandle: "chopped", qty: "4-5", unit: "tbps"}],
        timeRequired: "30",
        instructions:
            [["In a pan add 1 Tbsp oil, garlic and chilli. Saute."],
            ["Add carrots, baby corn, green beans and cabbage. Saute and add sesame oil. Add the rice."],
            ["Season with salt and pepper, soy sauce and wine. Cook for a minute."],
            ["Serve hot garnished with some chopped spring onion greens."]]
    },
    {
        id: 5,
        title: "Black Pepper Crab",
        cuisine: "Chinese",
        imageUrl: "https://i1.wp.com/media.hungryforever.com/wp-content/uploads/2015/12/01120718/BlackPepperCrabs891-e1448951861785.png?resize=600%2C399&ssl=1",
        servings: 4,
        ingredients: [
            { ingredientName: "rice", prehandle: "a day old", qty: "1", unit: "bowl", },
            { ingredientName: "cooking oil", prehandle: "", qty: "1", unit: "tbps" },
            { ingredientName: "red chilli", prehandle: "chopped", qty: "1", unit: "" },
            { ingredientName: "cabbage", prehandle: "diced", qty: "4-5", unit: "tbps" },
            { ingredientName: "wine", prehandle: "", qty: "2-3", unit: "tbps", isOptional:true },
            { ingredientName: "sesame oil", prehandle: "", qty: "1/2", unit: "tbps"},
            { ingredientName: "green beans", prehandle: "chopped", qty: "4-5", unit: "tbps"}],
        timeRequired: "30",
        instructions:
            [["In a pan add 1 Tbsp oil, garlic and chilli. Saute."],
            ["Add carrots, baby corn, green beans and cabbage. Saute and add sesame oil. Add the rice."],
            ["Season with salt and pepper, soy sauce and wine. Cook for a minute."],
            ["Serve hot garnished with some chopped spring onion greens."]]
    }
]

export function getRecipes(){
    return recipes
}

export function deleteRecipe(id){
    const found = recipes.find(recipe=>recipe.id===id)
    recipes =  recipes.filter(recipe=>recipe.id!==id)
    return found
}