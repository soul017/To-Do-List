import { 
    fetchWeatherRequest, 
    fetchWeatherSuccess, 
    fetchWeatherFailure,
    updateTaskWeather
  } from '../actions/taskActions';
  import { getWeatherForLocation } from '../../api/weatherApi';
  
  export const fetchWeatherForTasks = (tasks) => {
    return async (dispatch) => {
      dispatch(fetchWeatherRequest());
      
      try {
        // Process tasks with locations in parallel
        const weatherPromises = tasks
          .filter(task => task.location && !task.weather)
          .map(async (task) => {
            try {
              const weatherData = await getWeatherForLocation(task.location);
              dispatch(updateTaskWeather(task.id, weatherData));
            } catch (error) {
              console.error(`Failed to fetch weather for ${task.location}:`, error);
              // Continue with other tasks even if one fails
            }
          });
        
        await Promise.all(weatherPromises);
        dispatch(fetchWeatherSuccess());
      } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
      }
    };
  };