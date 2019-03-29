const axios = require('axios');
const serverUrl = 'localhost:5555'

// const cuisines = [
//   {
//     _id: '5c3430ecfc13ae122d000000',
//     name: 'Western',
//   },
//   {
//     _id: '5c3430ecfc13ae122d000001',
//     name: 'Japanese',
//   },
//   {
//     _id: '5c3430ecfc13ae122d000002',
//     name: 'Thai',
//   },
//   {
//     _id: '5c3430ecfc13ae122d000003',
//     name: 'Chinese',
//   },
// ];

const defaultCuisine = {
  _id: '5c3430ecfc13ae122d000005',
  name: 'All',
};

export async function getCuisines() {
  try {
    const cuisines = await axios.get(`${serverUrl}/cuisines`);
    return cuisines.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error(error);
  }

  // try {
  //   return Promise.resolve(
  //     cuisines.sort((a, b) => {
  //       return a.name.localeCompare(b.name);
  //     })
  //   );
  // } catch (error) {
  //   console.error(error);
  // }
}

export function getDefaultCuisine() {
  return defaultCuisine;
}
