import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherForTasks } from '../../redux/thunks/taskThunks';
import TaskItem from './TaskItem';
import { Typography, Box, CircularProgress, Chip } from '@mui/material';

const TaskList = () => {
  const { tasks, loading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Fetch weather data for tasks with locations
    const tasksWithLocations = tasks.filter(task => task.location);
    if (tasksWithLocations.length > 0) {
      dispatch(fetchWeatherForTasks(tasksWithLocations));
    }
  }, [tasks, dispatch]);

  if (loading) {
    return <Box display="flex" justifyContent="center" m={3}><CircularProgress /></Box>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const renderTasksByPriority = (priority) => {
    const filteredTasks = tasks.filter(task => task.priority === priority);
    
    if (filteredTasks.length === 0) return null;
    
    return (
      <Box className="priority-group" key={priority}>
        <Box display="flex" alignItems="center" mb={1}>
          <Chip 
            label={`${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`} 
            color={
              priority === 'high' ? 'error' : 
              priority === 'medium' ? 'warning' : 'success'
            }
            sx={{ mr: 1 }}
          />
          <Typography variant="body2">
            ({filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'})
          </Typography>
        </Box>
        
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </Box>
    );
  };

  return (
    <Box className="task-list">
      {tasks.length === 0 ? (
        <Typography variant="body1" align="center" mt={4}>
          No tasks yet. Add a task to get started!
        </Typography>
      ) : (
        <>
          {renderTasksByPriority('high')}
          {renderTasksByPriority('medium')}
          {renderTasksByPriority('low')}
        </>
      )}
    </Box>
  );
};

export default TaskList;