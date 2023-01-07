import {
  setValueToSessionStorage,
  getValueFromSessionStorage,
} from './sessionStorage';
import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage';

const SESSION_STORAGE_KEY = '__felog_session_storage_key__';
const LOCAL_STORAGE_KEY = '__felog_local_storage_key__';

export const getCount = defaultValue => {
  return (
    getValueFromSessionStorage(`${SESSION_STORAGE_KEY}/count`) || defaultValue
  );
};

export const setCount = val => {
  return setValueToSessionStorage(`${SESSION_STORAGE_KEY}/count`, val);
};

export const getData = () => {
  return getValueFromLocalStorage(LOCAL_STORAGE_KEY);
};

export const setData = val => {
  return setValueToLocalStorage(LOCAL_STORAGE_KEY, val);
};

export const getTheme = defaultValue => {
  return getValueFromLocalStorage(`${LOCAL_STORAGE_KEY}/theme`) || defaultValue;
};

export const setTheme = val => {
  return setValueToLocalStorage(`${LOCAL_STORAGE_KEY}/theme`, val);
};
