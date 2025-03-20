'use client';

import { useState, useEffect } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const increment = async () => {
    setIsProcessing(true);
    const prevCount = count;
    await sleep(500);
    setCount(prev => prev + 1);
    // 如果數值未變，保持 disabled 狀態
    if (prevCount === count) {
      setIsProcessing(false);
    }
  };

  const decrement = async () => {
    setIsProcessing(true);
    const prevCount = count;
    await sleep(500);
    setCount(prev => prev - 1);
    // 如果數值未變，保持 disabled 狀態
    if (prevCount === count) {
      setIsProcessing(false);
    }
  };

  // 監聽 count 的變更來更新 disabled 狀態
  useEffect(() => {
    setIsProcessing(false);
  }, [count]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2}>
        {/* 加號按鈕 */}
        <IconButton
          onClick={increment}
          color="primary"
          disabled={isProcessing}
        >
          <Add />
        </IconButton>

        {/* 減號按鈕 */}
        <IconButton
          onClick={decrement}
          color="secondary"
          disabled={isProcessing}
        >
          <Remove />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
