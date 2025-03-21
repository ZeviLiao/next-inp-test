'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useCountActions } from './CountContext';

const IncrementButton = React.memo(() => {
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
    <IconButton
      // onPointerDown={handleClick}
      // onTouchStart={handleClick} // 會re-paint 2次。
      onClick={handleClick} // 只畫一次。
      color="primary"
      sx={{ touchAction: 'manipulation' }}
      disableRipple
    >
      <Add />
    </IconButton>
  );
});

IncrementButton.displayName = 'IncrementButton';

export default IncrementButton;

