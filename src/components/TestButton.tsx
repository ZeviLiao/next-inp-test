'use client';

import React from 'react';
import { Button } from '@mui/material';
import { useCountActions } from './CountContext';

const TestButton = React.memo(() => {
  const { increment } = useCountActions();

  const handleClick = (e:
    React.PointerEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    increment();
  };

  return (
    <Button
      // onPointerDown={handleClick}
      // onTouchStart={handleClick}
      onClick={handleClick}
    >
      Click test
    </Button>
  );
});

TestButton.displayName = 'TestButton';

export default TestButton;

