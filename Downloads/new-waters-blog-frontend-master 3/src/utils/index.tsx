const TOKEN_KEY = "test";

// NEEDS WORK
export const register = () => {
  localStorage.setItem(TOKEN_KEY, "string");
  return false;
};

export const isRegister = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
//

export const login = () => {
  localStorage.setItem(TOKEN_KEY, "TestLogin");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  return true;
  // if (localStorage.getItem(TOKEN_KEY)) {
  //   return true;
  // }

  return false;
};
