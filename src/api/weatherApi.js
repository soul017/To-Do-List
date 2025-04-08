import axios from 'axios';

// OpenWeatherMap API key - replace with your own key
const API_KEY = '/current.json';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeatherForLocation = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric'
      }
    });
    
    const { data } = response;
    
    return {
      temp: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    };
  } catch (error) {
    console.error('Weather API error:', error);
    
    // For demo purposes, return mock data if API fails
    return {
      temp: Math.floor(Math.random() * 15) + 10, // Random temp between 10-25°C
      condition: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
      humidity: Math.floor(Math.random() * 30) + 50,
      windSpeed: Math.floor(Math.random() * 10)
    };
  }
};

// Note: For development and demo purposes, you can use mock data
// to avoid hitting API limits. Uncomment this section if needed:
/*
export const getWeatherForLocation = async (location) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
    
  // Return mock data
  return {
    temp: Math.floor(Math.random() * 15) + 10,
    condition: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
    humidity: Math.floor(Math.random() * 30) + 50,
    windSpeed: Math.floor(Math.random() * 10)
  };
};
*/