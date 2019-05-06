import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const defaultCuisine = {
  _id: '5c3430ecfc13ae122d000005',
  name: 'All',
};

export async function getCuisines() {
  try {
    console.log('get cuisines hit');
    const cuisines = await axios.get(`${apiUrl}/cuisines`, { withCredentials: true });
    console.log('cuisines', cuisines);
    return cuisines.data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error(error);
  }
}

export function getDefaultCuisine() {
  return defaultCuisine;
}
