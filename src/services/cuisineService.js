const cuisines = [
  {
    _id: "5c3430ecfc13ae122d000000",
    name: "Western"
  },
  {
    _id: "5c3430ecfc13ae122d000001",
    name: "Japanese"
  },
  {
    _id: "5c3430ecfc13ae122d000002",
    name: "Thai"
  },
  {
    _id: "5c3430ecfc13ae122d000003",
    name: "Chinese"
  }
];

const defaultCuisine = {
  _id: "5c3430ecfc13ae122d000005",
  name: "All"
};

export function getCuisines() {
  return cuisines;
}

export function getDefaultCuisine() {
  return defaultCuisine;
}
