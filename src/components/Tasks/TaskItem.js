import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions/taskActions';
import { 
  Paper, 
  Typography, 
  IconButton, 
  Box, 
  Checkbox,
  Chip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };
  
  // Helper to render weather icon
  const renderWeatherIcon = (weather) => {
    if (!weather) return null;
    
    switch(weather.condition) {
      case 'Clear':
        return <WbSunnyIcon color="warning" />;
      case 'Clouds':
        return <CloudIcon color="action" />;
      case 'Rain':
        return <UmbrellaIcon color="primary" />;
      default:
        return null;
    }
  };

  return (
    <Paper 
      className={`task-item ${task.completed ? 'completed' : ''}`}
      elevation={2}
      sx={{ mb: 2, p: 2 }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Checkbox
            checked={task.completed}
            onChange={handleToggle}
            color="primary"
          />
          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                opacity: task.completed ? 0.7 : 1
              }}
            >
              {task.title}
            </Typography>
            
            {task.location && (
              <Box display="flex" alignItems="center" mt={0.5}>
                <Typography variant="body2" color="textSecondary" mr={1}>
                  Location: {task.location}
                </Typography>
                
                {task.weather && (
                  <Box display="flex" alignItems="center">
                    <Chip 
                      size="small" 
                      icon={renderWeatherIcon(task.weather)} 
                      label={`${task.weather.temp}°C, ${task.weather.condition}`}
                      variant="outlined"
                    />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
        
        <IconButton 
          aria-label="delete" 
          onClick={handleDelete}
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default TaskItem;