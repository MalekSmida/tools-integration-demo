import { constants } from './helpers';

const setJwtInLocalStorage = (data) => {
  localStorage.setItem(constants.JWT, data);
};

const getJwtFromLocalStorage = () => {
  const jwtToken = localStorage.getItem(constants.JWT);
  return jwtToken;
};

export { setJwtInLocalStorage, getJwtFromLocalStorage };
