const isAuthenticated = () => {
  const result = !window.localStorage.token ? false : true;
  return result;
};

export default isAuthenticated;
