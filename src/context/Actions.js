// When user "logged in" then this actions are performed to get the data
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

// It, means, when "login successful" means receive data, then the action type is "login_success"
// this type and payload is need to difine the "reducer" function
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const LogOut = () => ({
  type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

// It, means, when "login successful" means receive data, then the action type is "login_success"
// this type and payload is need to difine the "reducer" function
export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
