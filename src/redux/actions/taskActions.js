// Action Types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const UPDATE_TASK_WEATHER = 'UPDATE_TASK_WEATHER';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId
});

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccess = () => ({
  type: FETCH_WEATHER_SUCCESS
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error
});

export const updateTaskWeather = (taskId, weather) => ({
  type: UPDATE_TASK_WEATHER,
  payload: { taskId, weather }
});