let recipes = [
    {
        id: "1",
        title: "Chicken Parmesan",
        cuisine: "Western",
        imageUrl: "https://foolproofliving.com/wp-content/uploads/2013/09/Lighter-Chicken-Parmesan-9688-FL.jpg",
        timeRequired: "90",
        servings: 5,
        ingredients: [
            { ingredientName: "chicken breast", extraDescription: "skinless, boneless", qty: "4", unit: ""},
            { ingredientName: "parmesan cheese", extraDescription: "grated", qty: "1/2", unit: "cup" },
            { ingredientName: "eggs", extraDescription:"", qty: "2", unit: "" },
            { ingredientName: "bread crumbs", extraDescription:"", qty: "1", unit: "cup" },
            { ingredientName: "basil", extraDescription: "chopped", qty: "1/4", unit: "cup" },
            { ingredientName: "black pepper", extraDescription: "", qty: "", unit: "" },
            { ingredientName: "all-purpose flour", qty: "2", unit: "tablespoons" },
            { ingredientName: "olive oil", qty: "1", unit: "cup" },
            { ingredientName: "tomato sauce", qty: "1/2", unit: "cup" },
            { ingredientName: "mozarella cheese", extraDescription: "cut into small cubes", qty: "1/4", unit: "cup" }],
        instructions:"testing instructions"
    },
    {
        id: "2",
        title: "Beef Stew",
        cuisine: "Chinese",
        imageUrl: "https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
        timeRequired: "120",
        servings: 4,
        ingredients: [
            { ingredientName: "beef", extraDescription: "cubed", qty: "2", unit: "lb", },
            { ingredientName: "water", qty: "4", unit: "cup" },
            { ingredientName: "potato", extraDescription: "peeled & cubed", qty: "3", unit: "large" },
            { ingredientName: "carrot", extraDescription: "cut into 1 inch pieces", qty: "4", unit: "" },
            { ingredientName: "celery", extraDescription: "cut into 1 inch pieces", qty: "4", unit: "stalk" },
            { ingredientName: "onion", extraDescription: "chopped", qty: "1", unit: "large"},
            { ingredientName: "all-purpose flour", extraDescription: "", qty: "2", unit: "tbps" },
            { ingredientName: "black pepper", extraDescription: "ground", qty: "1/2", unit: "tbps" },
            { ingredientName: "rosemary", extraDescription: "dried", qty: "1", unit: "tps" },
            { ingredientName: "parsley", extraDescription: "dried", qty: "1", unit: "tps" }],        
        instructions:"testing instructions"
    },
    {
        id: "3",
        title: "Mojito Shrimp",
        cuisine: "Western",
        imageUrl: "https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "shrimp", extraDescription: "peeled, deveined shrimp, tails on", qty: "1.5", unit: "lb", },
            { ingredientName: "lime juice", extraDescription: "", qty: "2", unit: "tbps" },
            { ingredientName: "mojito marinade", extraDescription: "",qty: "1", unit: "cup" },
            { ingredientName: "mint sprigs", extraDescription: "",qty: "", unit: "" }],
        timeRequired: "30",
        instructions:"testing instructions"
    },
    {
        id: "4",
        title: "Yang Zhou Fried Rice",
        cuisine: "Chinese",
        imageUrl: "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg",
        servings: 4,
        ingredients: [
            { ingredientName: "rice", extraDescription: "a day old", qty: "1", unit: "bowl", },
            { ingredientName: "cooking oil", extraDescription: "", qty: "1", unit: "tbps" },
            { ingredientName: "red chilli", extraDescription: "chopped", qty: "1", unit: "" },
            { ingredientName: "cabbage", extraDescription: "diced", qty: "4-5", unit: "tbps" },
            { ingredientName: "wine", extraDescription: "", qty: "2-3", unit: "tbps", isOptional:true },
            { ingredientName: "sesame oil", extraDescription: "", qty: "1/2", unit: "tbps"},
            { ingredientName: "green beans", extraDescription: "chopped", qty: "4-5", unit: "tbps"}],
        timeRequired: "30",
        instructions: "testing instructions"
    },
    {
        id: "5",
        title: "Black Pepper Crab",
        cuisine: "Chinese",
        imageUrl: "https://i1.wp.com/media.hungryforever.com/wp-content/uploads/2015/12/01120718/BlackPepperCrabs891-e1448951861785.png?resize=600%2C399&ssl=1",
        servings: 4,
        ingredients: [
            { ingredientName: "rice", extraDescription: "a day old", qty: "1", unit: "bowl", },
            { ingredientName: "cooking oil", extraDescription: "", qty: "1", unit: "tbps" },
            { ingredientName: "red chilli", extraDescription: "chopped", qty: "1", unit: "" },
            { ingredientName: "cabbage", extraDescription: "diced", qty: "4-5", unit: "tbps" },
            { ingredientName: "wine", extraDescription: "", qty: "2-3", unit: "tbps", isOptional:true },
            { ingredientName: "sesame oil", extraDescription: "", qty: "1/2", unit: "tbps"},
            { ingredientName: "green beans", extraDescription: "chopped", qty: "4-5", unit: "tbps"}],
        timeRequired: "30",
        instructions:"testing instructions"
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