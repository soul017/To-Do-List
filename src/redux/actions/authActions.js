// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

// Thunk Action Creator for login
export const login = (username, password) => {
  return dispatch => {
    dispatch(loginRequest());

    // Simulate API call with timeout
    setTimeout(() => {
      // For demo purposes, any username/password combination works
      // In a real app, you would validate against a backend
      if (username && password) {
        dispatch(loginSuccess({ username }));
      } else {
        dispatch(loginFailure('Username and password are required'));
      }
    }, 1000);
  };
};