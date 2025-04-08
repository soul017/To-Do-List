import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/taskActions';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box,
  Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({
        id: Date.now().toString(),
        title,
        priority,
        location,
        completed: false,
        created: new Date().toISOString()
      }));
      setTitle('');
      setPriority('medium');
      setLocation('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="task-input-form">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            id="task-input"
            label="Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              id="priority-select"
              value={priority}
              label="Priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            id="location-input"
            label="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            placeholder="e.g., Park, Office"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            color="primary" 
            startIcon={<AddIcon />}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskInput;