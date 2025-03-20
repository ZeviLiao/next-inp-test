'use client';

import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;