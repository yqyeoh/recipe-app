import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const getUser = async () => {
  try {
    return (await axios(`${apiUrl}/checkLogin`, { withCredentials: true })).data;
  } catch (error) {
    console.log('error hit');
    console.error(error);
    return null;
  }
};

const login = async (email, password) => {
  try {
    const res = await axios.post(`${apiUrl}/authenticate`, { email, password }, { withCredentials: true });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error.message);
  }
};

const logout = async () => {
  try {
    const res = await axios.get(`${apiUrl}/logout`, { withCredentials: true });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error.message);
  }
};

export { getUser, login, logout };
