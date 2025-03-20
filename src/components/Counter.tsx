'use client';

import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  // const increment = useCallback(() => setCount(prev => prev + 1), []);
  // const decrement = useCallback(() => setCount(prev => prev - 1), []);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={increment} aria-label="增加計數">
          Increment
        </Button>
        <Button variant="outlined" onClick={decrement} aria-label="減少計數">
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;