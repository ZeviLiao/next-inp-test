'use client';

import React from 'react';
import { Box } from '@mui/material';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import TestButton from './TestButton';
import CounterDisplay from './CounterDisplay';
import { CountProvider } from './CountContext';

const Counter = () => {

  return (
    <CountProvider>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
        <CounterDisplay />
        <Box display="flex" gap={2} alignItems="center">
          <IncrementButton />
          <TestButton />
          <DecrementButton />
        </Box>
      </Box>
    </CountProvider>
  );
};

export default Counter;
