export const isRegister = () => {
  if (localStorage.getItem("TOKEN_KEY")) {
    return true;
  }
  return false;
};

export const login = (token: string) => {
  localStorage.setItem("TOKEN_KEY", token);
};

export const register = (token: string) => {
  localStorage.setItem("TOKEN_KEY", token);
};

export const logout = () => {
  localStorage.removeItem("TOKEN_KEY");
};

export const isLogin = () => {
  console.log("IS_LOGIN1", localStorage.getItem("TOKEN_KEY"));
  if (localStorage.getItem("TOKEN_KEY")) {
    console.log("IS_LOGIN2");

    return true;
  }
  console.log("IS_LOGIN3");

  return false;
};
