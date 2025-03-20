'use client';

import { useState } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = async () => {
    await sleep(500);
    setCount(prev => prev + 1);
  };

  const decrement = async () => {
    await sleep(500);
    setCount(prev => prev - 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2}>
        <IconButton onClick={increment} color="primary">
          <Add />
        </IconButton>

        <IconButton onClick={decrement} color="secondary">
          <Remove />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
