const recipesTestData = [
  {
    _id: '1',
    title: 'Ramen',
    cuisine: 'Western',
    imageUrl:
      'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R',
    servings: 4,
    ingredients: [
      { ingredientName: 'Ramen noodle', extraDescription: 'dry', qty: '12', unit: 'oz', isOptional: true },
      { ingredientName: 'red bell pepper', extraDescription: 'julienned', qty: '2', unit: '', isOptional: false },
    ],
    timeRequired: '15',
    instructions: 'test instruction 2',
  },
  {
    _id: '2',
    title: 'Chicken Pie',
    cuisine: 'Western',
    imageUrl:
      'https://kingsfoodmarkets.com/uploads/recipes-multi-size/KF_138_March2017_Site_Updates_Recipe_Image_Resize.jpg',
    servings: 4,
    ingredients: [
      { ingredientName: 'chicken breast', extraDescription: 'trimmed', qty: '2', unit: 'bunch', isOptional: false },
      { ingredientName: 'olive oil', extraDescription: '', qty: '1', unit: 'tbsp', isOptional: false },
    ],
    timeRequired: '45',
    instructions: ' test instruction 1',
  },
];

const ingredientsTestData = [
  { _id: 1, name: 'chicken breast', isExcludedFromMatch: false },
  { _id: 2, name: 'olive oil', isExcludedFromMatch: false },
  { _id: 3, name: 'Ramen noodle', isExcludedFromMatch: false },
  { _id: 4, name: 'red bell pepper', isExcludedFromMatch: false },
  { _id: 5, name: 'rice', isExcludedFromMatch: false },
  { _id: 5, name: 'beef', isExcludedFromMatch: false },
];

const cuisinesTestData = [
  {
    _id: '1',
    name: 'Western',
  },
  {
    _id: '2',
    name: 'Japanese',
  },
  {
    _id: '3',
    name: 'Thai',
  },
  {
    _id: '4',
    name: 'Chinese',
  },
];

export { recipesTestData, ingredientsTestData, cuisinesTestData };
