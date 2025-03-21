'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { useCountValue } from './CountContext';

const CounterDisplay = React.memo(() => {
  const { count } = useCountValue();
  
  return (
    <Typography variant="h4">
      Counter: {count}
    </Typography>
  );
});

CounterDisplay.displayName = 'CounterDisplay';

export default CounterDisplay;
