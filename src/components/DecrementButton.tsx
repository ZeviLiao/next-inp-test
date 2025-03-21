
'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import { Remove } from '@mui/icons-material';
import { useCountActions } from './CountContext';

const DecrementButton = React.memo(() => {
  const { decrement } = useCountActions();
  
  const handleClick = (e:
    React.PointerEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    decrement();
  };

  return (
    <IconButton
      // onPointerDown={handleClick}
      // onTouchStart={handleClick} // 會re-paint 2次。
      onClick={handleClick} // 只畫一次。
      color="secondary"
      sx={{ touchAction: 'manipulation' }}
      disableRipple
    >
      <Remove />
    </IconButton>
  );
});

DecrementButton.displayName = 'DecrementButton';

export default DecrementButton;



