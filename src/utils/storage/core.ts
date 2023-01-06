const isEmpty = storage => {
  // return !storage || storage === {};
  return !storage || Object.keys(storage).length === 0;
};

export const getValueFrom = (storage, key) => {
  if (isEmpty(storage)) {
    return;
  }
  const rawData = storage.getItem(key);

  if (!rawData) {
    return;
  }
  return JSON.parse(rawData);
};

export const setValueTo = (storage, key, data) => {
  if (isEmpty(storage)) {
    return;
  }
  return storage.setItem(key, JSON.stringify(data));
};
