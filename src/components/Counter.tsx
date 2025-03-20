'use client';

import { useState } from 'react';
import { CircularProgress, Button, Typography, Box } from '@mui/material';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Counter = () => {
  const [count, setCount] = useState(0);
  const [loadingIncrement, setLoadingIncrement] = useState(false);
  const [loadingDecrement, setLoadingDecrement] = useState(false);

  const increment = async () => {
    setLoadingIncrement(true);
    await sleep(500);
    setCount(prev => prev + 1);
    setLoadingIncrement(false);
  };

  const decrement = async () => {
    setLoadingDecrement(true);
    await sleep(500);
    setCount(prev => prev - 1);
    setLoadingDecrement(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2}>
        <Button
          onClick={increment}
          variant="contained"
          color="primary"
          disabled={loadingIncrement || loadingDecrement} // A or B loading => disable
          startIcon={loadingIncrement ? <CircularProgress size={20} /> : null}
        >
          Increment
        </Button>
        <Button
          onClick={decrement}
          variant="contained"
          color="secondary"
          disabled={loadingIncrement || loadingDecrement} // A or B loading => disable
          startIcon={loadingDecrement ? <CircularProgress size={20} /> : null}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
