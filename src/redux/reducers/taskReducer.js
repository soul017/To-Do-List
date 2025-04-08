import { 
    ADD_TASK, 
    DELETE_TASK, 
    TOGGLE_TASK,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    UPDATE_TASK_WEATHER
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [],
    loading: false,
    error: null
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          )
        };
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case UPDATE_TASK_WEATHER:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.taskId
              ? { ...task, weather: action.payload.weather }
              : task
          )
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;