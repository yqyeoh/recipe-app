let ingredients = [{ id: 1, name: "chicken", isExcludedFromMatch: false },
{ id: 2, name: "beef", isExcludedFromMatch: false },
{ id: 3, name: "lamb", isExcludedFromMatch: false },
{ id: 4, name: "shrimp", isExcludedFromMatch: false },
{ id: 5, name: "fish", isExcludedFromMatch: false },
{ id: 6, name: "crab", isExcludedFromMatch: false },
{ id: 7, name: "chicken breast", isExcludedFromMatch: false },
{ id: 8, name: "chicken wings", isExcludedFromMatch: false },
{ id: 9, name: "parmesan cheese", isExcludedFromMatch: false },
{ id: 10, name: "eggs", isExcludedFromMatch: false },
{ id: 11, name: "bak choy", isExcludedFromMatch: false },
{ id: 12, name: "basil", isExcludedFromMatch: false },
{ id: 13, name: "black pepper", isExcludedFromMatch: false },
{ id: 14, name: "all-purpose flour", isExcludedFromMatch: false },
{ id: 15, name: "olive oil", isExcludedFromMatch: false },
{ id: 16, name: "salt", isExcludedFromMatch: true },
{ id: 17, name: "tomato sauce", isExcludedFromMatch: true },
{ id: 18, name: "mozarella cheese", isExcludedFromMatch: false },
{ id: 19, name: "water", isExcludedFromMatch: true },
{ id: 20, name: "potato", isExcludedFromMatch: false },
{ id: 21, name: "carrot", isExcludedFromMatch: false },
{ id: 22, name: "onion", isExcludedFromMatch: true },
{ id: 23, name: "garlic", isExcludedFromMatch: true },
{ id: 24, name: "rosemary", isExcludedFromMatch: false },
{ id: 25, name: "parsley", isExcludedFromMatch: false },
{ id: 26, name: "lime juice", isExcludedFromMatch: false },
{ id: 27, name: "mojito marinade", isExcludedFromMatch: false },
{ id: 28, name: "mint sprigs", isExcludedFromMatch: false },
{ id: 29, name: "bread crumbs", isExcludedFromMatch: false },
{ id: 30, name: "cooking oil", isExcludedFromMatch: true },
{ id: 31, name: "red chilli", isExcludedFromMatch: false },
{ id: 32, name: "cabbage", isExcludedFromMatch: false },
{ id: 33, name: "wine", isExcludedFromMatch: false },
{ id: 34, name: "sesame oil", isExcludedFromMatch: true },
{ id: 35, name: "green beans", isExcludedFromMatch: false },
{ id: 36, name: "rice", isExcludedFromMatch: false }]

export function getIngredients(){
    return ingredients
}

export function saveIngredients(newIngredients){
    if (newIngredients.length===0) return
    console.log('newIngredients in ingredient service', newIngredients)
    newIngredients = newIngredients.map(ingredient=>({...ingredient, id:Date.now().toString()}))
    ingredients = [...ingredients, ...newIngredients]
    console.log('ingredients list =>',ingredients)

    return newIngredients
}