import { constants } from './helpers';

const getJwtFromLocalStorage = () => {
  const jwtToken = localStorage.getItem(constants.JWT);
  return jwtToken;
};

const setJwtInLocalStorage = (data) => {
  localStorage.setItem(constants.JWT, data);
};

export { setJwtInLocalStorage, getJwtFromLocalStorage };
