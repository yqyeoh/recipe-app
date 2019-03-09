let recipes = [
    {
        id: "1",
        title: "Chicken Parmesan",
        cuisine: "Western",
        imageUrl: "https://foolproofliving.com/wp-content/uploads/2013/09/Lighter-Chicken-Parmesan-9688-FL.jpg",
        timeRequired: "90",
        servings: 5,
        ingredients: [
            { ingredientName: "chicken breast halves", extraDescription: "skinless, boneless", qty: "4", unit: "", isOptional: false},
            { ingredientName: "parmesan cheese", extraDescription: "grated", qty: "1/2", unit: "cup", isOptional: false },
            { ingredientName: "eggs", extraDescription:"", qty: "2", unit: "", isOptional: false },
            { ingredientName: "bread crumbs", extraDescription:"", qty: "1", unit: "cup", isOptional: false },
            { ingredientName: "basil", extraDescription: "chopped", qty: "1/4", unit: "cup", isOptional: false },
            { ingredientName: "black pepper", extraDescription: "", qty: "", unit: "", isOptional: false },
            { ingredientName: "all-purpose flour", qty: "2", unit: "tablespoons", isOptional: false },
            { ingredientName: "olive oil", qty: "1", unit: "cup", isOptional: false },
            { ingredientName: "tomato sauce", qty: "1/2", unit: "cup", isOptional: false },
            { ingredientName: "mozarella cheese", extraDescription: "cut into small cubes", qty: "1/4", unit: "cup", isOptional: false }],
        instructions:
`1. Preheat an oven to 450 degrees F (230 degrees C).
2. Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.
3. Beat eggs in a shallow bowl and set aside.
4. Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.
5. Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.
6. Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.
7. Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.
8. Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.
9. Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).`
    },
    {
        id: "2",
        title: "Beef Stew",
        cuisine: "Chinese",
        imageUrl: "https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
        timeRequired: "120",
        servings: 4,
        ingredients: [
            { ingredientName: "beef stew meat", extraDescription: "cubed", qty: "2", unit: "lb", isOptional: false },
            { ingredientName: "beef bouillon", extraDescription: "crumbled", qty: "4", unit: "cubes", isOptional: false },
            { ingredientName: "vegetable oil", qty: "3", unit: "tbsp", isOptional: false },
            { ingredientName: "water", qty: "4", unit: "cup", isOptional: false },
            { ingredientName: "potato", extraDescription: "peeled & cubed", qty: "3", unit: "large", isOptional: false },
            { ingredientName: "carrot", extraDescription: "cut into 1 inch pieces", qty: "4", unit: "", isOptional: false },
            { ingredientName: "celery", extraDescription: "cut into 1 inch pieces", qty: "4", unit: "stalk", isOptional: false },
            { ingredientName: "onion", extraDescription: "chopped", qty: "1", unit: "large", isOptional: false},
            { ingredientName: "corn starch", extraDescription: "", qty: "2", unit: "tsp", isOptional: false },
            { ingredientName: "black pepper", extraDescription: "ground", qty: "1/2", unit: "tbsp", isOptional: false },
            { ingredientName: "rosemary", extraDescription: "dried", qty: "1", unit: "tsp", isOptional: false },
            { ingredientName: "parsley", extraDescription: "dried", qty: "1", unit: "tsp", isOptional: false }],        
        instructions:
`1.In a large pot or dutch oven, cook beef in oil over medium heat until brown. Dissolve bouillon in water and pour into pot. Stir in rosemary, parsley and pepper. Bring to a boil, then reduce heat, cover and simmer 1 hour.
2.Stir potatoes, carrots, celery, and onion into the pot. Dissolve cornstarch in 2 teaspoons cold water and stir into stew. Cover and simmer 1 hour more.`
    },
    {
        id: "3",
        title: "Mojito Shrimp",
        cuisine: "Western",
        imageUrl: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2018/6/28/0/RogerMooking_Mojito-Lime-Shrimp_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1530200127431.jpeg",
        servings: 4,
        ingredients: [
            { ingredientName: "shrimp", extraDescription: "peeled, deveined shrimp, tails on", qty: "1.5", unit: "lb", isOptional: false },
            { ingredientName: "lime juice", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false },
            { ingredientName: "mojito marinade", extraDescription: "",qty: "1", unit: "cup", isOptional: false },
            { ingredientName: "mint sprigs", extraDescription: "",qty: "", unit: "", isOptional: false }],
        timeRequired: "30",
        instructions:
`1.Prepare a gas or charcoal grill for high heat (you can hold your hand 1 to 2 in. above cooking grate only 1 to 2 seconds). Meanwhile, put shrimp in a 1-gal. resealable plastic bag and pour in marinade. Seal and marinate at room temperature 15 to 20 minutes.
2.Remove shrimp, reserving marinade. Thread shrimp onto 6 or 7 (10- to 14-in.) metal or bamboo skewers.
3.Arrange shrimp on grill and baste with marinade (dab some mint and shallot onto shrimp); close lid. Cook until shrimp are just beginning to brown, 1 to 2 minutes. Turn shrimp over, baste again, and close lid. Cook 1 to 2 minutes until browned but still moist in center (cut to check). Transfer shrimp to a platter, drizzle with lime juice, and garnish with mint sprigs.`
    },
    {
        id: "4",
        title: "Yang Zhou Fried Rice",
        cuisine: "Chinese",
        imageUrl: "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg",
        servings: 4-6,
        ingredients: [
            { ingredientName: "rice", extraDescription: "a day old", qty: "3", unit: "bowl", isOptional: false },
            { ingredientName: "dried shrimp", extraDescription: "", qty: "1", unit: "small handful", isOptional:true },
            { ingredientName: "spicy ketchup", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false },
            { ingredientName: "chilli sauce", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false },
            { ingredientName: "peanut oil", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false},
            { ingredientName: "eggs", extraDescription: "lightly beaten", qty: "3", unit: "", isOptional: false},
            { ingredientName: "ginger", extraDescription: "peeled & grated", qty: "1", unit: "tbsp", isOptional: false},
            { ingredientName: "carrot", extraDescription: "", qty: "1", unit: "", isOptional: false},
            { ingredientName: "char siew", extraDescription: "cooked", qty: "4", unit: "oz", isOptional: false},
            { ingredientName: "shitake mushroom", extraDescription: "stemmed & diced", qty: "3", unit: "", isOptional: false},
            { ingredientName: "frozen peas", extraDescription: "", qty: "1", unit: "cup", isOptional: false},
            { ingredientName: "light soy sauce", extraDescription: "", qty: "1-2", unit: "tbsp", isOptional: false},
            { ingredientName: "sea salt", extraDescription: "", qty: "", unit: "", isOptional: false},
            { ingredientName: "white pepper", extraDescription: "freshly ground", qty: "1-2", unit: "tbsp", isOptional: false},
            { ingredientName: "sesame oil", extraDescription: "", qty: "1", unit: "tsp", isOptional: false},
            { ingredientName: "spring onion", extraDescription: "sliced on a diagonal, for garnish", qty: "1-2", unit: "", isOptional: false},],
        timeRequired: "40",
        instructions:
`1. If desired, in a small bowl, soak the dried shrimp in hot water for 20 minutes, then drain and set aside.
2. For the spicy ketchup sauce, if using: In a small bowl, combine the ketchup and chili sauce and set aside.
3. For the fried rice: Heat a wok over high heat and add 1 tablespoon peanut oil. Add the eggs and scramble, then set aside on a plate.
4. Add the remaining 1 tablespoon peanut oil to the wok. Add the ginger and stir-fry for less than 1 minute. Then add the carrots and stir-fry for 1 minute more. Add the pork, the soaked dried shrimp if using, and mushrooms and cook for 2 minutes. Then add the peas and cooked rice and toss together. Add the cooked egg back into the wok. Season the mixture with the light soy sauce, salt and pepper. At the very end add the sesame oil and spicy ketchup sauce if using. Check the seasoning and adjust to taste with salt and pepper. Garnish with green onions and serve immediately.`
    },
    {
        id: "5",
        title: "Black Pepper Crab",
        cuisine: "Chinese",
        imageUrl: "https://i1.wp.com/media.hungryforever.com/wp-content/uploads/2015/12/01120718/BlackPepperCrabs891-e1448951861785.png?resize=600%2C399&ssl=1",
        servings: 4,
        ingredients: [
            { ingredientName: "kecap manis", extraDescription: "", qty: "3", unit: "tbsp", isOptional: false },
            { ingredientName: "oyster sauce", extraDescription: "", qty: "3", unit: "tbsp", isOptional: false },
            { ingredientName: "caster sugar", extraDescription: "", qty: "3", unit: "tbsp", isOptional: false },
            { ingredientName: "crab", extraDescription: "", qty: "2", unit: "kg", isOptional: false },
            { ingredientName: "oil", extraDescription: "", qty: "1 1/2", unit: "tbsp", isOptional: false},
            { ingredientName: "butter", extraDescription: "", qty: "1 1/2", unit: "tbsp" , isOptional:true },
            { ingredientName: "ginger", extraDescription: "grated", qty: "1 1/2", unit: "tbsp", isOptional: false},
            { ingredientName: "garlic", extraDescription: "finely chopped", qty: "6", unit: "clove", isOptional: false},
            { ingredientName: "red chilli", extraDescription: "finely chopped", qty: "1-2", unit: "", isOptional: false },
            { ingredientName: "black pepper", extraDescription: "", qty: "1 1/2", unit: "tbsp", isOptional: false },
            { ingredientName: "white pepper", extraDescription: "", qty: "1 1/2", unit: "tbsp", isOptional: false },
            { ingredientName: "ground coriander", extraDescription: "", qty: "1/4", unit: "tsp", isOptional: false },
            { ingredientName: "spring onion", extraDescription: "finely chopped", qty: "2", unit: "", isOptional: false },
            { ingredientName: "fresh coriander", extraDescription: "fresh", qty: "1/4", unit: "cup", isOptional: false },],
        timeRequired: "40",
        instructions:
`1. Put kecap manis, oyster sauce, sugar and 3 tablespoons water in a small bowl, stir, then set aside.
2. Pull back the apron of each crab, remove top shell, then intestines and feathery gills. Rinse quickly.
3. Cut each crab into quarters and crack the legs gently (I use a meat mallet) so the flavours can enter.
4. Heat the oil in a very large wok over high heat; add the crab pieces and stir fry in batches until the shell is bright orange and the meat almost cooked (about 5 minutes). Remove and repeat until all is cooked.
5. Add the butter, ginger, garlic, chilli, black and white peppers and coriander to the wok; stir fry 30 seconds.
6. Add the sauce mixture and stir; bring to the boil, then simmer 2 minutes.
7. Return the crab to the wok and toss to coat in the sauce.
8.Cook a further 2-3 minutes to finish cooking the crab then garnish with the spring onions and coriander leaves.`
    },
    {
        id: "6",
        title: "Ginger and Lime Salmon",
        cuisine: "Western",
        imageUrl: "http://media.mongoliankitchen.com/wp-content/uploads/2012/06/ginger-lime-salmon-7.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "salmon fillet", extraDescription: "", qty: "1 1/2", unit: "lb", isOptional: false },
            { ingredientName: "olive oil", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false },
            { ingredientName: "seafood seasoning", extraDescription: "", qty: "1", unit: "tsp", isOptional: false },
            { ingredientName: "black pepper", extraDescription: "ground", qty: "1", unit: "tsp", isOptional: false },
            { ingredientName: "ginger", extraDescription: "peeled & thinly sliced", qty: "1", unit: "inch", isOptional: false},
            { ingredientName: "garlic", extraDescription: "finely chopped", qty: "6", unit: "clove", isOptional: false},
            { ingredientName: "lime", extraDescription: "thinly sliced", qty: "1", unit: "", isOptional: false }],
        timeRequired: "30",
        instructions:
`1. Set oven rack about 6 to 8 inches from the heat source and preheat the oven's broiler; if broiler setting has Low setting, set broiler to that. Line a baking sheet with aluminum foil.
2. Place salmon, skin side down, on the prepared baking sheet; rub salmon with olive oil. Season with seafood seasoning and black pepper. Arrange ginger slices atop salmon and sprinkle with garlic. Place lime slices over ginger-garlic layer.
3. Broil salmon until hot and beginning to turn opaque, about 10 minutes; watch carefully. If broiler has a High setting, turn broiler to that setting and continue broiling until salmon is cooked through and flakes easily with a fork, 5 to 10 more minutes.`
    },
    {
        id: "7",
        title: "Red Curry Chicken",
        cuisine: "Thai",
        imageUrl: "https://www.goodfood.com.au/content/dam/images/g/x/8/5/u/y/image.related.wideLandscape.940x529.gx8t1v.png/1516149893419.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "coconut oil", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false },
            { ingredientName: "chicken breast halves", extraDescription: "skinless, boneless, cut into small", qty: "16", unit: "oz", isOptional: false },
            { ingredientName: "coconut cream", extraDescription: "", qty: "14", unit: "oz", isOptional: false },
            { ingredientName: "red thai curry sauce", extraDescription: "", qty: "1", unit: "btl", isOptional: false },
            { ingredientName: "dried rice stick vermicelli noodles", extraDescription: "", qty: "16", unit: "oz", isOptional: false}],
        timeRequired: "30",
        instructions:
`1. Heat oil in a large skillet on high heat. Add chicken cubes; cook until browned, about 2 minutes per side. Reduce heat to medium-high and add coconut cream and curry sauce. Cook until chicken is no longer pink in the center and the juices run clear, about 5 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).
2. Fill a large pot with lightly salted water and bring to a rolling boil; stir in vermicelli pasta and return to a boil. Cook pasta uncovered, stirring occasionally, until the pasta is tender yet firm to the bite, 4 to 5 minutes. Drain.
3. Reduce skillet heat to simmer. Add the noodles and let simmer until flavors are absorbed, about 5 minutes. Divide chicken and noodles among individual serving bowls.`
    },
    {
        id: "8",
        title: "Thai-Style Rice Noodles",
        cuisine: "Thai",
        imageUrl: "https://rasamalaysia.com/wp-content/uploads/2009/11/pad-see-ew-thumb-500x375.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "corn starch", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false },
            { ingredientName: "water", extraDescription: "", qty: "1 1/2", unit: "tbsp", isOptional: false },
            { ingredientName: "chicken broth", extraDescription: "", qty: "6", unit: "cup", isOptional: false },
            { ingredientName: "soy sauce", extraDescription: "", qty: " 2 1/2", unit: "tbsp", isOptional: false },
            { ingredientName: "fish sauce", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false},
            { ingredientName: "rice vinegar", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false},
            { ingredientName: "chile-garlic sauce", extraDescription: "or more to taste", qty: "1", unit: "tbsp", isOptional: false},
            { ingredientName: "vegetable oil", extraDescription: "", qty: "2", unit: "tsp", isOptional: false},
            { ingredientName: "garlic", extraDescription: "minced", qty: "2", unit: "clove", isOptional: false},
            { ingredientName: "ground coriander", extraDescription: "", qty: "1", unit: "tsp", isOptional: false},
            { ingredientName: "rice noodle", extraDescription: "thick", qty: "16", unit: "oz", isOptional: false},
            { ingredientName: "zucchini", extraDescription: "sliced", qty: "1", unit: "cup", isOptional: false},
            { ingredientName: "red bell pepper", extraDescription: "sliced", qty: "1", unit: "cup", isOptional: false},
            { ingredientName: "chicken breast halves", extraDescription: "cooked, cut into 1-inch cube", qty: "2", unit: "", isOptional: false},
            { ingredientName: "peanut", extraDescription: "crushed", qty: "1/4", unit: "cup", isOptional:true},
            { ingredientName: "cilantro", extraDescription: "chopped", qty: "1/4", unit: "cup", isOptional:true}],
        timeRequired: "40",
        instructions:
`1. Stir cornstarch and water together in a small bowl until smooth. Pour chicken broth into a large pot and stir cornstarch mixture, soy sauce, fish sauce, rice vinegar, chile-garlic sauce, vegetable oil, ginger, garlic, and coriander into broth. Cover and bring to a boil.
2. Place rice noodles in the boiling sauce, reduce heat to medium, and simmer until noodles are tender, 5 to 10 minutes. Stir zucchini, red bell pepper, and chicken into sauce. Bring back to a boil, cover, and simmer until vegetables are just become tender, about 5 more minutes.
3. Remove from heat and let stand, covered, for 5 minutes to thicken. Serve garnished with crushed peanuts and cilantro.
        `
    },
    {
        id: "9",
        title: "Broiled Arctic Char With Sesame-Ginger Mustard",
        cuisine: "Western",
        imageUrl: "https://kingsfoodmarkets.com/uploads/recipes-multi-size/KF_138_March2017_Site_Updates_Recipe_Image_Resize.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "scallion", extraDescription: "trimmed", qty: "2", unit: "bunch", isOptional: false },
            { ingredientName: "olive oil", extraDescription: "", qty: "1", unit: "tbsp", isOptional: false },
            { ingredientName: "kosher salt", extraDescription: "divided", qty: "3/4", unit: "tsp", isOptional: false },
            { ingredientName: "arctic char", extraDescription: "skinless", qty: "4", unit: "6 oz", isOptional: false },
            { ingredientName: "dijon mustard", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false},
            { ingredientName: "sesame oil", extraDescription: "", qty: "2", unit: "tbsp", isOptional: false},
            { ingredientName: "ginger", extraDescription: "grated", qty: "1", unit: "tbsp", isOptional: false},
            { ingredientName: "rice", extraDescription: "for serving", qty: "", unit: "", isOptional:true}],
        timeRequired: "45",
        instructions:
`1. Preheat broiler with rack 6 inches from heat. Toss scallions with olive oil and ¼ teaspoon each salt and pepper on a rimmed baking sheet. Broil until beginning to brown, 5 to 7 minutes.
2. Meanwhile, season fish with ¼ teaspoon each salt and pepper. Whisk mustard, sesame oil, ginger, and remaining ¼ teaspoon each salt and pepper in a small bowl; spread over tops and sides of fish.
3. Nestle fish among scallions and broil until fish is just cooked through and scallions are charred in spots, 6 to 10 minutes. Serve with steamed rice, if desired.`
    },
    {
        id: "10",
        title: "Fettuccine with Sweet Pepper-Cayenne Sauce",
        cuisine: "Western",
        imageUrl: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R",
        servings: 4,
        ingredients: [
            { ingredientName: "fettuccinne pasta", extraDescription: "dry", qty: "12", unit: "oz", isOptional: false },
            { ingredientName: "red bell pepper", extraDescription: "julienned", qty: "2", unit: "", isOptional: false },
            { ingredientName: "garlic", extraDescription: "minced", qty: "3", unit: "clove", isOptional: false },
            { ingredientName: "cayenne pepper", extraDescription: "", qty: "3/4", unit: "tsp", isOptional: false },
            { ingredientName: "sour cream", extraDescription: "reduced fat", qty: "1", unit: "cup", isOptional: false},
            { ingredientName: "chicken broth", extraDescription: "", qty: "3/4", unit: "cup", isOptional: false},
            { ingredientName: "parmesan cheese", extraDescription: "grated", qty: "3/4", unit: "cup", isOptional: false},
            { ingredientName: "salt", extraDescription: "to taste", qty: "", unit: "", isOptional: false},
            { ingredientName: "pepper", extraDescription: "to taste", qty: "", unit: "", isOptional: false}],
        timeRequired: "15",
        instructions:
`1. Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain. 
2. Meanwhile, spray cooking oil in a large skillet and saute red bell peppers, garlic and cayenne pepper over medium heat for 3 to 5 minutes.
3. Stir in sour cream and broth; simmer uncovered for 5 minutes. Remove from heat and stir in cheese.
4. Toss hot pasta with sauce and season with salt and pepper to taste; serve.`
    },
]

export function getRecipes(){
    return recipes.sort((a,b)=>a.title.localeCompare(b.title))
}

export function deleteRecipe(id){
    const found = recipes.find(recipe=>recipe.id===id)
    recipes =  recipes.filter(recipe=>recipe.id!==id)
    return found
}

export function saveRecipe(recipe){
    let existingRecipe = recipes.find(item=>item.id === recipe.id)
    if(existingRecipe){
        const merged = { ...existingRecipe, ...recipe };
        recipes = recipes.filter(item=>item.id !== recipe.id)
        recipes.push(merged)
        return merged
    } else{
        const newRecipe = {
            id: Date.now().toString(),
            ...recipe
          };
          recipes.push(newRecipe);
          return newRecipe;
    }    
}

export function filterRecipes(selectedIngredients, recipes, minimumMatchPercentage){
    for (var recipe of recipes) {
        for (const selectedIngredientName of selectedIngredients) {
            for (const ingredient of recipe.ingredients) {
                if (ingredient.isMatched || ingredient.isOptional) {
                    continue
                }
                if (ingredient.ingredientName === selectedIngredientName) {
                    ingredient.isMatched = true
                    break
                }
            }
        }
        recipe.availableIngredients = recipe.ingredients.filter(ingredient=>ingredient.isMatched).map(ingredient=>ingredient.ingredientName)
        recipe.optionalIngredients = recipe.ingredients.filter(ingredient=>ingredient.isOptional).map(ingredient=>ingredient.ingredientName)
        recipe.missingIngredients = recipe.ingredients.filter(ingredient=>!ingredient.isMatched&&!ingredient.isOptional).map(ingredient=>ingredient.ingredientName)
        recipe.ingredientsMatchPercentage = Math.round(recipe.availableIngredients.length / (recipe.ingredients.length- recipe.optionalIngredients.length) * 100)
    }
    return recipes.filter(recipe => recipe.ingredientsMatchPercentage >= minimumMatchPercentage).sort((a,b)=>b.ingredientsMatchPercentage-a.ingredientsMatchPercentage)
}