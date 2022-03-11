export const setData = (title, value) => {
  localStorage.setItem(title, value);
  return;
};

export const getData = (title) => {
  return localStorage.getItem(title);
};
export const removeData = (title) => {
    localStorage.removeItem(title)
    return;
}
export const clearData = () => {
  localStorage.clear();
  return;
};
